export type ShowcaseItem={name:string;storeName:string;category:string;priceMinor:number;currency:string;href:string;imageUrl:string};
export function showcaseItem(raw:unknown,storeName:string,apiOrigin:string):ShowcaseItem|null{
 if(!raw||typeof raw!=='object')return null;
 const item=raw as Record<string,unknown>;
 if(typeof item.name!=='string'||!item.name.trim()||item.name.length>180||!Number.isSafeInteger(item.unitPriceMinor)||Number(item.unitPriceMinor)<0||item.inStock!==true||item.availableOnline===false||typeof item.currency!=='string'||!/^[A-Z]{3}$/.test(item.currency)||typeof item.imageUrl!=='string'||typeof item.publicUrl!=='string')return null;
 try{
  const image=new URL(item.imageUrl),link=new URL(item.publicUrl);
  if(image.origin!==apiOrigin||image.username||image.password||!image.pathname.startsWith('/api/v1/shop/public/stores/')||!image.pathname.endsWith('/image')||link.origin!=='https://fahampesa.com'||link.username||link.password||link.search||link.hash||!/^\/[a-z0-9-]+\/[a-z0-9-]+$/.test(link.pathname))return null;
  const category=String(item.type).includes('RESTAURANT')?'Food & drinks':String(item.type).includes('HOTEL')?'Stays':String(item.type).includes('SERVICE')?'Services':'Shopping';
  return {name:item.name.trim(),storeName:storeName.slice(0,120),category,priceMinor:Number(item.unitPriceMinor),currency:item.currency,href:link.pathname,imageUrl:image.href};
 }catch{return null;}
}

// Browsing published stock does not require search-engine eligibility. Missing
// descriptions or location text must not hide otherwise valid public products.
export function showcaseCatalog(raw:unknown,apiOrigin:string):ShowcaseItem[]{
 if(!raw||typeof raw!=='object')return [];
 const data=raw as {store?:Record<string,unknown>;items?:unknown[]};
 const store=data.store;
 if(!store||typeof store.name!=='string'||!store.name.trim()||typeof store.publicUrl!=='string'||store.acceptingOrders!==true||store.isPublished===false||store.isOnline===false||!Array.isArray(data.items)||data.items.length>100)return [];
 try{
  const url=new URL(store.publicUrl);
  if(url.origin!=='https://fahampesa.com'||url.username||url.password||url.search||url.hash||!/^\/[a-z0-9-]+$/.test(url.pathname))return [];
  return data.items.map(item=>showcaseItem(item,store.name as string,apiOrigin)).filter((item):item is ShowcaseItem=>!!item&&item.href.startsWith(url.pathname+'/'));
 }catch{return [];}
}
