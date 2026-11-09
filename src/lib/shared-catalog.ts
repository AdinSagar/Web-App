import 'server-only';
import {cache} from 'react';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';

export type SharedItem = {id:string;name:string;type:string;description:string;category:string;unitPriceMinor:number;currency:string;inStock:boolean;imageUrl:string|null;publicUrl:string;durationMinutes?:number};
export type SharedCatalog = {
  store:{id:string;name:string;businessType:string;location:string;publicUrl:string;acceptingOrders:boolean;pickupEnabled:boolean;deliveryEnabled:boolean;deliveryArea?:string;deliveryFee?:number};
  items:SharedItem[];nextAfter:string|null;
  links:{appUrl:string;openAppUrl:string|null;installUrl:string|null};
};
export function catalogOrigin() {
  const raw=process.env.SHOP_CATALOG_ORIGIN;
  if(!raw)throw Error('Shared catalog is not configured');
  const url=new URL(raw);
  const local=process.env.NODE_ENV!=='production' && ['localhost','127.0.0.1'].includes(url.hostname);
  if((url.protocol!=='https:'&&!local)||url.username||url.password||url.pathname!=='/'||url.search||url.hash)
    throw Error('Invalid catalog origin');
  return url.origin;
}
const shareOrigin=()=>new URL(process.env.SHOP_SHARE_ORIGIN||'https://fahampesa.com').origin;
export function localSharePath(url:string) {
  const parsed=new URL(url);
  if(parsed.origin!==shareOrigin() || !/^\/[a-z0-9-]+(?:\/[a-z0-9-]+)?$/.test(parsed.pathname)||parsed.search||parsed.hash)
    throw Error('Invalid shared page URL');
  return parsed.pathname;
}
export const getSharedCatalog=cache(async(store:string,item='',after='',legacy=false):Promise<SharedCatalog>=>{
  if(!/^[A-Za-z0-9_.:-]{1,200}$/.test(store) || (item&&!/^[A-Za-z0-9_.:-]{1,200}$/.test(item)) || (after&&!/^[A-Za-z0-9_.:-]{1,200}$/.test(after)))notFound();
  const origin=catalogOrigin();
  const query=new URLSearchParams({store,legacy:String(legacy)});
  if(item)query.set('item',item);
  if(after)query.set('after',after);
  const response=await fetch(origin+'/api/v1/shop/public/share?'+query,{cache:'no-store',signal:AbortSignal.timeout(8000),redirect:'error'});
  if(response.status===404||response.status===400)notFound();
  if(!response.ok)throw Error('Shared catalog is temporarily unavailable');
  const data=await response.json() as SharedCatalog;
  localSharePath(data.store.publicUrl);
  if(!Array.isArray(data.items)||data.items.length>100)throw Error('Invalid catalog response');
  for(const product of data.items){
    localSharePath(product.publicUrl);
    if(!Number.isSafeInteger(product.unitPriceMinor)||product.unitPriceMinor<0)throw Error('Invalid price');
    if(product.imageUrl){const image=new URL(product.imageUrl);if(image.origin!==origin||!image.pathname.startsWith('/api/v1/shop/public/'))product.imageUrl=null;}
  }
  const app=new URL(data.links.appUrl);
  if(app.origin!==origin||!/^\/shop\/[A-Za-z0-9_.:-]+(?:\/[A-Za-z0-9_.:-]+)?$/.test(app.pathname)||app.search||app.hash)throw Error('Invalid app link');
  if(data.links.openAppUrl&&!data.links.openAppUrl.startsWith('intent://'+app.host+app.pathname+'#Intent;scheme=https;package='))throw Error('Invalid app intent');
  if(data.links.installUrl){const install=new URL(data.links.installUrl);if(install.origin!=='https://play.google.com'||install.pathname!=='/store/apps/details')throw Error('Invalid install link');}
  return data;
});
export const price=(item:SharedItem)=>new Intl.NumberFormat('en-KE',{style:'currency',currency:item.currency||'KES',maximumFractionDigits:item.unitPriceMinor%100?2:0}).format(item.unitPriceMinor/100);
export function sharedMetadata(data:SharedCatalog,product=false):Metadata {
  const item=product?data.items[0]:undefined;
  const title=item?`${item.name} | ${data.store.name} | FahamPesa`:`${data.store.name} | FahamPesa`;
  const description=item?`${item.name}, ${price(item)} at ${data.store.name}. View details and continue in FahamPesa Shop.`:`View ${data.store.name} on FahamPesa. ${data.store.location}. Explore their listings and continue in the Shop app.`;
  const url=item?.publicUrl||data.store.publicUrl;
  const image=item?.imageUrl||data.items.find(value=>value.imageUrl)?.imageUrl;
  return {title,description,alternates:{canonical:url},robots:{index:true,follow:true},openGraph:{title,description,url,siteName:'FahamPesa',type:'website',images:image?[{url:image,alt:item?.name||data.store.name}]:[]},twitter:{card:image?'summary_large_image':'summary',title,description,images:image?[image]:[]}};
}
