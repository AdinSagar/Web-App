import {NextResponse} from 'next/server';
import {catalogOrigin,localSharePath} from '@/lib/shared-catalog';
import {indexableItem,indexableSeller} from '@/lib/catalog-indexing';
import type {SharedItem} from '@/lib/shared-catalog';
import {showcaseItem} from '@/lib/published-showcase';

export const dynamic='force-dynamic';
export async function GET(){
 try{
  const origin=catalogOrigin();
  const response=await fetch(origin+'/api/v1/shop/public/stores',{cache:'no-store',signal:AbortSignal.timeout(5000),redirect:'error'});
  if(!response.ok)throw Error('Unavailable');
  const directory=await response.json();
  if(!Array.isArray(directory.items)||directory.items.length>100)throw Error('Invalid directory');
  const stores=directory.items.filter((s:Record<string,unknown>)=>s&&typeof s.name==='string'&&typeof s.publicUrl==='string'&&s.acceptingOrders===true&&indexableSeller({name:s.name as string,location:s.location as string,publicUrl:s.publicUrl as string})).slice(0,8);
  const result=await Promise.all(stores.map(async(store:{name:string;publicUrl:string})=>{
   try{
    const path=localSharePath(store.publicUrl);if(path.split('/').length!==2)return null;
    const query=new URLSearchParams({store:path.slice(1)});
    const res=await fetch(origin+'/api/v1/shop/public/share?'+query,{cache:'no-store',signal:AbortSignal.timeout(5000),redirect:'error'});
    if(!res.ok)return null;const data=await res.json();
    if(data.store?.acceptingOrders!==true||!Array.isArray(data.items)||data.items.length>100)return null;
    return data.items.filter((item:SharedItem)=>indexableItem(data.store,item)).map((item:unknown)=>showcaseItem(item,data.store.name,origin)).find(Boolean)||null;
   }catch{return null;}
  }));
  return NextResponse.json({items:result.filter(Boolean).slice(0,4)},{headers:{'Cache-Control':'no-store'}});
 }catch{return NextResponse.json({items:[],unavailable:true},{status:503,headers:{'Cache-Control':'no-store'}});}
}
