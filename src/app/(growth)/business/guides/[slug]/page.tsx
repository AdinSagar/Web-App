import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowRight} from 'lucide-react';
import {kenyaGuides} from '@/lib/kenya-guides';
import {publicPageMetadata} from '@/lib/public-page-metadata';
import {safeJsonLd} from '@/lib/listing-discovery';
export const dynamicParams=false;
export const generateStaticParams=()=>kenyaGuides.map(guide=>({slug:guide.slug}));
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props){const {slug}=await params;const guide=kenyaGuides.find(g=>g.slug===slug);if(!guide)notFound();return publicPageMetadata('/business/guides/'+slug,guide.title+' | FahamPesa',guide.description);}
export default async function Page({params}:Props){const {slug}=await params;const guide=kenyaGuides.find(g=>g.slug===slug);if(!guide)notFound();const url='https://fahampesa.com/business/guides/'+slug;const schema={'@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,inLanguage:'en-KE',mainEntityOfPage:url,author:{'@id':'https://fahampesa.com/#organization'},publisher:{'@id':'https://fahampesa.com/#organization'}};return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:safeJsonLd(schema)}}/><section className="fp-subhero fp-container"><nav className="fp-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/business/guides">Practical guides</Link><span>/</span><span>{guide.category.toLowerCase()}</span></nav><span className="fp-eyebrow">{guide.category}</span><h1>{guide.title}</h1><p>{guide.intro}</p><p className="growth-small">FahamPesa editorial guide · November 2026</p></section><article className="fp-article">{guide.sections.map(section=><section key={section.title}><h2>{section.title}</h2><p>{section.body}</p><ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul></section>)}<aside className="fp-note">{guide.example}</aside><div className="fp-inline-links"><Link href={guide.href}>{guide.next}<ArrowRight size={15}/></Link><Link href="/business/guides">All practical guides</Link></div></article></main>;}
