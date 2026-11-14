import Link from 'next/link'
import {notFound} from 'next/navigation'
import {ArrowRight} from 'lucide-react'
import {growthGuides} from '@/lib/business-growth'
import {publicPageMetadata} from '@/lib/public-page-metadata'
import AiPromptBuilder from '@/components/marketing/AiPromptBuilder'
import PremiumSeoPage from '@/components/marketing/PremiumSeoPage'
import {seoSolutionPages} from '@/lib/seo-solution-content'

export const dynamicParams = false
export const generateStaticParams = () => [
  ...growthGuides.map(guide => ({topic: guide.slug})),
  ...seoSolutionPages.map(page => ({topic: page.slug})),
]

type Props = {params: Promise<{topic: string}>}

export async function generateMetadata({params}: Props) {
  const {topic} = await params
  const solution = seoSolutionPages.find(page => page.slug === topic)
  if (solution) return publicPageMetadata(`/business/${topic}`, solution.title, solution.description)
  const guide = growthGuides.find(item => item.slug === topic)
  if (!guide) notFound()
  return publicPageMetadata(`/business/${topic}`, `${guide.label} for Local Businesses | FahamPesa`, guide.description)
}

export default async function Page({params}: Props) {
  const {topic} = await params
  const solution = seoSolutionPages.find(item => item.slug === topic)
  if (solution) return <PremiumSeoPage page={solution}/>

  const guide = growthGuides.find(item => item.slug === topic)
  if (!guide) notFound()
  const url = `https://fahampesa.com/business/${topic}`
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: guide.title,
    description: guide.description, mainEntityOfPage: url, inLanguage: 'en',
    author: {'@type': 'Organization', name: 'FahamPesa', url: 'https://fahampesa.com/'},
    publisher: {'@type': 'Organization', name: 'FahamPesa', url: 'https://fahampesa.com/'},
  }
  return <main id="growth-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, '\\u003c')}}/>
    <div className="growth-article-hero">
      <nav className="growth-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/business">Business Growth</Link><span>/</span><span>{guide.label}</span></nav>
      <span className="growth-kicker">{guide.eyebrow}</span><h1>{guide.title}</h1><p>{guide.intro}</p>
      <span className="growth-small">FahamPesa business guides · Reviewed 9 November 2026</span>
    </div>
    <div className="growth-article-layout">
      <aside className="growth-toc"><strong>In this guide</strong><nav aria-label="Guide contents">{guide.sections.map((section, index) => <a key={section.title} href={`#step-${index}`}>{section.title}</a>)}{topic === 'search-and-ai' && <a href="#ai-tool">AI prompt builder</a>}</nav></aside>
      <article className="growth-article">{guide.sections.map((section, index) => <section key={section.title} id={`step-${index}`}><span className="growth-card-number">0{index + 1}</span><h2>{section.title}</h2><p>{section.body}</p><ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul></section>)}<section className="growth-sources"><h2>Check the source</h2><p>Use the current official guidance when making a decision.</p><ul>{guide.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section></article>
    </div>
    {topic === 'search-and-ai' && <div id="ai-tool" className="growth-section"><AiPromptBuilder/></div>}
    <section className="growth-section growth-related"><h2>Keep going</h2><div>{growthGuides.filter(item => item.slug !== topic).map(item => <Link key={item.slug} href={`/business/${item.slug}`}>{item.label}<ArrowRight size={17}/></Link>)}<Link href="/trust">Trust & support<ArrowRight size={17}/></Link></div></section>
  </main>
}
