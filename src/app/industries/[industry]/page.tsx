import type { Metadata } from "next"
import {publicPageMetadata} from "@/lib/public-page-metadata"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import PlatformFrame from "@/components/marketing/PlatformFrame"
import IndustryBadges from "@/components/marketing/IndustryBadges"
import { industryPages, industryHref } from "@/lib/industry-content"
import { CALL_NUMBER, CALL_URL, SHOWROOM, WHATSAPP_NUMBER, WHATSAPP_URL, SOFTWARE_PRICE_LABEL, demoUrl } from "@/lib/marketing-contact"

export const dynamicParams = false
export function generateStaticParams() { return industryPages.map(({ slug }) => ({ industry: slug })) }
type Props = { params: Promise<{ industry: string }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params
  const page = industryPages.find(p => p.slug === industry)
  if (!page) return {}
  return publicPageMetadata(industryHref(page.slug), `${page.title} | FahamPesa`, page.description)
}
const button = "inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-[#c74300] px-6 py-3.5 font-inter text-sm font-semibold text-white transition-colors hover:bg-[#a83800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c74300]"

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params
  const page = industryPages.find(p => p.slug === industry)
  if (!page) notFound()
  const questions = [...page.questions,
    { question: `How do I get started with Fahampesa for ${page.name.toLowerCase()}?`, answer: "Use the Getting Started guide and ask the team to confirm the workflow and devices your business needs." },
    { question: "Where can I request a software demonstration in Nairobi?", answer: `Visit ${SHOWROOM}. Call ${CALL_NUMBER} before travelling to arrange a time. Bring your sample products or services and the devices you plan to use.` },
  ]
  const url = `https://fahampesa.com${industryHref(page.slug)}`
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: `${page.title} | FahamPesa`, description: page.description, inLanguage: "en-KE", publisher: { "@id": "https://fahampesa.com/#organization" }, about: { "@type": "SoftwareApplication", name: "Fahampesa", applicationCategory: "BusinessApplication", url: "https://fahampesa.com/" }, breadcrumb: { "@id": `${url}#breadcrumb` } },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://fahampesa.com/" }, { "@type": "ListItem", position: 2, name: "POS system in Kenya", item: "https://fahampesa.com/pos-system-kenya" }, { "@type": "ListItem", position: 3, name: page.name, item: url }] },
  ] }
  return (
    <PlatformFrame>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <main id="main-content">
        <section className="bg-[#f6f5f1]">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-[100px] lg:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 font-inter text-xs text-[#626873]"><Link href="/" className="underline underline-offset-2">Home</Link><span aria-hidden="true">/</span><Link href="/pos-system-kenya" className="underline underline-offset-2">Business tools</Link><span aria-hidden="true">/</span><span aria-current="page">{page.name}</span></nav>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div><p className="font-inter text-xs font-bold uppercase tracking-[0.16em] text-[#c74300]">Fahampesa for {page.name}</p><h1 className="mt-4 font-inter text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">{page.title}</h1><p className="mt-6 font-inter text-lg leading-8 text-[#626873]">{page.intro}</p><div className="mt-7 flex flex-wrap gap-3"><a href={demoUrl(page.name)} target="_blank" rel="noopener noreferrer" className={button}>Request a Demo <ArrowUpRight size={16} aria-hidden="true" /></a><Link href="/business/get-started" className="inline-flex min-h-12 items-center rounded-[10px] border border-[#c74300] px-6 py-3 font-inter text-sm font-semibold text-[#c74300] hover:bg-white/50">Get started</Link></div><p className="mt-5 font-inter text-xs leading-5 text-[#626873]">{SOFTWARE_PRICE_LABEL}</p></div>
              <div className="rounded-[28px] border border-white/80 bg-white/50 p-4 shadow-[0_20px_60px_rgba(0,28,85,0.1)]"><Image src="/image-mockup2.png" alt="Illustrative sales form with product or service, quantity and price fields" width={1172} height={992} priority sizes="(max-width: 1024px) 100vw, 45vw" className="h-auto w-full rounded-2xl" /><p className="mt-3 text-center font-inter text-xs text-[#626873]">Product illustration. Example interface and sample values.</p></div>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-[100px]"><div><p className="font-inter text-xs font-bold uppercase tracking-[0.16em] text-[#c74300]">Made for your working day</p><h2 className="mt-3 font-inter text-3xl font-semibold tracking-tight">Who this software is for</h2><p className="mt-5 font-inter text-base leading-8 text-[#626873]">{page.audience}</p></div><div className="rounded-[22px] border border-[#e4e3df] bg-[#f8f7f4] p-7"><h2 className="font-inter text-xl font-semibold">Bring daily records together</h2><p className="mt-4 font-inter text-base leading-8 text-[#626873]">{page.challenge}</p></div></section>
        <section className="bg-[#f8f7f4]"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]"><h2 className="font-inter text-3xl font-semibold tracking-tight">How Fahampesa helps {page.name.toLowerCase()}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{page.features.map((feature, i) => <article key={feature.title} className="rounded-[22px] border border-[#e4e3df] bg-white p-7 shadow-[0_10px_30px_rgba(0,28,85,0.04)]"><span className="font-inter text-sm font-bold text-[#c74300]">0{i + 1}</span><h3 className="mt-4 font-inter text-xl font-semibold">{feature.title}</h3><p className="mt-4 font-inter text-sm leading-7 text-[#626873]">{feature.body}</p></article>)}</div></div></section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]"><h2 className="font-inter text-3xl font-semibold tracking-tight">From setup to a clear business record</h2><ol className="mt-8 grid gap-6 md:grid-cols-3">{page.workflow.map((step, i) => <li key={step} className="flex items-start gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff1e7] font-inter font-bold text-[#c74300]">{i + 1}</span><p className="font-inter text-base leading-7 text-[#626873]">{step}</p></li>)}</ol><div className="mt-10 rounded-[22px] border border-[#e4e3df] p-7"><h3 className="font-inter text-xl font-semibold">Record checkout payments clearly</h3><p className="mt-3 font-inter text-base leading-7 text-[#626873]">Supported checkout workflows let your team record cash, M-Pesa, card and bank payments. Payment recording does not automatically process a card or verify an M-Pesa transfer. Ask us to demonstrate the payment and confirmation steps available for your business.</p><div className="mt-4 flex flex-wrap gap-2">{["Cash records", "M-Pesa records", "Card records", "Bank records"].map(label => <span key={label} className="inline-flex items-center gap-1.5 rounded-full bg-[#fff1e7] px-3 py-2 font-inter text-xs font-semibold text-[#c74300]"><CheckCircle2 size={14} aria-hidden="true" />{label}</span>)}</div></div></section>
        <section className="bg-[#101c30] text-white"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-[100px]"><div><p className="font-inter text-xs font-bold uppercase tracking-[0.16em] text-[#ffb780]">See it with your business in mind</p><h2 className="mt-4 font-inter text-3xl font-semibold">What to bring to your demonstration</h2><p className="mt-5 font-inter text-base leading-8 text-[#dbe0e8]">{page.demo}</p><a href={demoUrl(page.name)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-white px-6 py-3.5 font-inter text-sm font-semibold text-[#101c30] hover:bg-[#fff1e7]">Request a Demo on WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="rounded-[22px] border border-white/20 bg-white/5 p-7 font-inter text-sm leading-7 text-[#dbe0e8]"><h3 className="text-lg font-semibold text-white">Talk to the Fahampesa team</h3><p className="mt-4">Visit our showroom: {SHOWROOM}.</p><p className="mt-4">WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline underline-offset-4">{WHATSAPP_NUMBER}</a></p><p>Call: <a href={CALL_URL} className="font-semibold text-white underline underline-offset-4">{CALL_NUMBER}</a></p><Link href="/installation" className="mt-4 inline-block text-white underline underline-offset-4">Windows installation guide</Link></div></div></section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]"><h2 className="font-inter text-3xl font-semibold">Questions before you choose</h2><div className="mt-6 max-w-4xl divide-y divide-[#e4e3df]">{questions.map(faq => <div key={faq.question} className="py-6"><h3 className="font-inter text-lg font-semibold">{faq.question}</h3><p className="mt-3 font-inter text-base leading-7 text-[#626873]">{faq.answer}</p></div>)}</div><Link href="/business/get-started" className="mt-6 inline-flex items-center gap-2 font-inter font-semibold text-[#c74300] underline underline-offset-4">Explore the Getting Started guide <ArrowUpRight size={16} aria-hidden="true" /></Link></section>
        <IndustryBadges />
      </main>

    </PlatformFrame>
  )
}
