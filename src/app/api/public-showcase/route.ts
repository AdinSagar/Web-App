import {NextResponse} from 'next/server';
import {catalogOrigin,localSharePath} from '@/lib/shared-catalog';
import {publicListingUrl} from '@/lib/catalog-indexing';
import {showcaseCatalog} from '@/lib/published-showcase';

export const dynamic='force-dynamic';
export async function GET(){
 try{
  const origin=catalogOrigin();
  const response=await fetch(origin+'/api/v1/shop/public/stores',{cache:'no-store',signal:AbortSignal.timeout(5000),redirect:'error'});
  if(!response.ok)throw Error('Unavailable');
  const directory=await response.json();
  if(!Array.isArray(directory.items)||directory.items.length>100)throw Error('Invalid directory');
  const stores=directory.items.filter((s:Record<string,unknown>)=>s&&typeof s.name==='string'&&s.name.trim()&&s.acceptingOrders===true&&s.isPublished!==false&&s.isOnline!==false&&publicListingUrl(s.publicUrl,1)).slice(0,8);
  const result=await Promise.all(stores.map(async(store:{name:string;publicUrl:string})=>{
   try{
    const path=localSharePath(store.publicUrl);if(path.split('/').length!==2)return [];
    const query=new URLSearchParams({store:path.slice(1)});
    const res=await fetch(origin+'/api/v1/shop/public/share?'+query,{cache:'no-store',signal:AbortSignal.timeout(5000),redirect:'error'});
    if(!res.ok)return [];const data=await res.json();
    if(data.store?.publicUrl!==store.publicUrl)return [];
    return showcaseCatalog(data,origin);
   }catch{return [];}
  }));
  // Alternate stores so one large catalog does not fill the whole preview.
  const items=[];
  for(let index=0;index<100&&items.length<48;index++){
   for(const products of result){if(products[index]&&items.length<48)items.push(products[index]);}
   if(result.every(products=>products.length<=index+1))break;
  }
  return NextResponse.json({items},{headers:{'Cache-Control':'no-store'}});
 }catch{return NextResponse.json({items:[],unavailable:true},{status:503,headers:{'Cache-Control':'no-store'}});}
}
