import {getSharedCatalog,sharedMetadata} from '@/lib/shared-catalog';
import {StorePage} from '@/components/shared/SharedPage';
export const dynamic='force-dynamic';
type Props={params:Promise<{storeSlug:string}>;searchParams:Promise<{after?:string}>};
export async function generateMetadata({params}:Props){return sharedMetadata(await getSharedCatalog((await params).storeSlug));}
export default async function Page({params,searchParams}:Props){const {storeSlug}=await params;const {after}=await searchParams;return <StorePage data={await getSharedCatalog(storeSlug,'',after||'')}/>;}
