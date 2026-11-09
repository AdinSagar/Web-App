import 'server-only';
import {catalogOrigin,localSharePath} from './shared-catalog';
export type PublicStore={id:string;name:string;location:string;businessType:string;publicUrl:string;acceptingOrders:boolean};
export async function publicStores(q='',area='',after=''):Promise<{items:PublicStore[];nextAfter:string|null;unavailable:boolean}>{
 try{
  const query=new URLSearchParams({q:q.slice(0,100),area:area.slice(0,100)});
  if(after&&/^[A-Za-z0-9_.:-]{1,200}$/.test(after))query.set('after',after);
  const response=await fetch(catalogOrigin()+'/api/v1/shop/public/stores?'+query,{cache:'no-store',signal:AbortSignal.timeout(8000),redirect:'error'});
  if(!response.ok)throw Error('Catalog unavailable');
  const data=await response.json();if(!Array.isArray(data.items)||data.items.length>100)throw Error('Invalid store response');
  const items=data.items.filter((store:PublicStore)=>{if(!store||typeof store.location!=='string'||typeof store.businessType!=='string'||typeof store.acceptingOrders!=='boolean'||typeof store.name!=='string'||typeof store.id!=='string'||typeof store.publicUrl!=='string')return false;try{localSharePath(store.publicUrl);return true;}catch{return false;}});
  return {items,nextAfter:typeof data.nextAfter==='string'&&/^[A-Za-z0-9_.:-]{1,200}$/.test(data.nextAfter)?data.nextAfter:null,unavailable:false};
 }catch{return {items:[],nextAfter:null,unavailable:true};}
}
