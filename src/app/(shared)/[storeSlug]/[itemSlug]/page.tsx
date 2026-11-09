import {redirect} from 'next/navigation';
import {getSharedCatalog,localSharePath,sharedMetadata} from '@/lib/shared-catalog';
import {ProductPage} from '@/components/shared/SharedPage';
export const dynamic='force-dynamic';
type Props={params:Promise<{storeSlug:string;itemSlug:string}>};
export async function generateMetadata({params}:Props){const {storeSlug,itemSlug}=await params;return sharedMetadata(await getSharedCatalog(storeSlug,itemSlug),true);}
export default async function Page({params}:Props){const {storeSlug,itemSlug}=await params;const data=await getSharedCatalog(storeSlug,itemSlug);const path=localSharePath(data.items[0].publicUrl);if(path!==`/${storeSlug}/${itemSlug}`)redirect(path);return <ProductPage data={data}/>;}
