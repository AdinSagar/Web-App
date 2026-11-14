import {notFound,redirect} from 'next/navigation';
import {getSharedCatalog,localSharePath} from '@/lib/shared-catalog';
export const dynamic='force-dynamic';
export default async function Page({params}:{params:Promise<{ids:string[]}>}){const {ids}=await params;if(ids.length<1||ids.length>2)notFound();const data=await getSharedCatalog(ids[0],ids[1]||'','',true);redirect(localSharePath(ids[1]?data.items[0].publicUrl:data.store.publicUrl));}
