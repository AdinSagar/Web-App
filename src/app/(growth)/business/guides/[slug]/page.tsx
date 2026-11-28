import {permanentRedirect,notFound} from 'next/navigation';
import {kenyaGuides} from '@/lib/kenya-guides';
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!kenyaGuides.some(g=>g.slug===slug))notFound();permanentRedirect('/guides/'+slug)}
