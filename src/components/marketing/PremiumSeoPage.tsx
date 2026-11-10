import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, CircleCheck, MapPin, MessageCircle } from 'lucide-react'
import type { SeoSolutionPage } from '@/lib/seo-solution-content'
import { BUSINESS_SIGNUP_URL } from '@/lib/business-app'
import { demoUrl, SHOWROOM } from '@/lib/marketing-contact'
import './seo-pages.css'

function safeJson(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export default function PremiumSeoPage({ page }: { page: SeoSolutionPage }) {
  const url = `https://fahampesa.com/business/${page.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: 'en-KE',
        publisher: { '@id': 'https://fahampesa.com/#organization' },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fahampesa.com/' },
          { '@type': 'ListItem', position: 2, name: 'Business tools', item: 'https://fahampesa.com/pos-system-kenya' },
          { '@type': 'ListItem', position: 3, name: page.label, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.questions.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }

  return (
    <main id="main-content" className="seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(schema) }} />

      <section className="seo-hero">
        <div className="seo-shell seo-hero-grid">
          <div className="seo-hero-copy">
            <nav className="seo-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/pos-system-kenya">Business tools</Link><span>/</span><span aria-current="page">{page.label}</span>
            </nav>
            <span className="seo-kicker">{page.eyebrow}</span>
            <h1>{page.heading}</h1>
            <p className="seo-lead">{page.intro}</p>
            <div className="seo-actions">
              <Link href={BUSINESS_SIGNUP_URL} className="seo-primary">Set up your business <ArrowRight size={17} /></Link>
              <a href={demoUrl(page.label)} className="seo-secondary" target="_blank" rel="noopener noreferrer">Arrange a demo <ArrowUpRight size={16} /></a>
            </div>
            <div className="seo-proof" aria-label="Key capabilities">
              {page.proof.map(item => <span key={item}><Check size={13} />{item}</span>)}
            </div>
          </div>

          <div className="seo-product-card" aria-label={`Illustrative ${page.label} workspace`}>
            <div className="seo-product-bar"><span>F</span><div><strong>FahamPesa</strong><small>{page.label}</small></div><i>EXAMPLE</i></div>
            <div className="seo-product-body">
              <span className="seo-mini-label">WORKSPACE OVERVIEW</span>
              <h2>{page.example.title}</h2>
              <div className="seo-product-rows">
                {page.example.rows.map((row, index) => <div key={row.label}><span>{String(index + 1).padStart(2, '0')}</span><p><strong>{row.label}</strong><small>{row.note}</small></p><b>{row.value}</b></div>)}
              </div>
              <p className="seo-product-note">Illustrative values. No customer records are shown.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-shell seo-audience">
        <span className="seo-kicker">BUILT FOR THE WORK BEHIND THE NUMBERS</span>
        <h2>Start with a record your team understands.</h2>
        <p>{page.audience}</p>
      </section>

      <section className="seo-feature-band">
        <div className="seo-shell">
          <div className="seo-section-heading"><div><span className="seo-kicker">WHAT THE WORKFLOW BRINGS TOGETHER</span><h2>Keep each step connected.</h2></div><p>Clear source records make later reviews, customer conversations and business decisions easier to explain.</p></div>
          <div className="seo-feature-grid">
            {page.features.map((feature, index) => <article key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="seo-shell seo-workflow">
        <div className="seo-section-heading"><div><span className="seo-kicker">A PRACTICAL WORKFLOW</span><h2>From setup to review.</h2></div><p>Use the same sequence every time. Consistency reduces missing information and unexplained adjustments.</p></div>
        <ol>{page.workflow.map((step, index) => <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>
      </section>

      <section className="seo-example-band">
        <div className="seo-shell seo-example-grid">
          <div><span className="seo-kicker">WORKED EXAMPLE</span><h2>{page.example.title}</h2><p>{page.example.intro}</p><p className="seo-example-outcome">{page.example.outcome}</p></div>
          <div className="seo-ledger">
            <span>ILLUSTRATIVE RECORD</span>
            <dl>{page.example.rows.map(row => <div key={row.label}><dt>{row.label}<small>{row.note}</small></dt><dd>{row.value}</dd></div>)}</dl>
          </div>
        </div>
      </section>

      <section className="seo-shell seo-checklist">
        <div className="seo-section-heading"><div><span className="seo-kicker">BEFORE YOU START</span><h2>Four checks worth making.</h2></div></div>
        <div>{page.checklist.map(item => <article key={item.title}><CircleCheck size={20} /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="seo-local">
        <div className="seo-shell seo-local-grid">
          <div className="seo-local-mark"><MapPin size={28} /><span>NAIROBI<br />SHOWROOM</span></div>
          <div><span className="seo-kicker">SEE THE WORKFLOW WITH YOUR OWN EXAMPLE</span><h2>Bring a small, real scenario.</h2><p>Arrange a demonstration at {SHOWROOM}. Bring a short list or example without passwords, payment credentials or private customer information.</p></div>
          <a href={demoUrl(page.label)} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} />Talk to the team <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="seo-shell seo-faq">
        <div><span className="seo-kicker">USEFUL ANSWERS</span><h2>Questions before you choose.</h2></div>
        <div>{page.questions.map(item => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="seo-shell seo-related">
        <div className="seo-section-heading"><div><span className="seo-kicker">CONNECTED GUIDANCE</span><h2>Continue with the related workflow.</h2></div></div>
        <div>{page.related.map(item => <Link key={item.href} href={item.href}><span><strong>{item.label}</strong><small>{item.description}</small></span><ArrowUpRight size={19} /></Link>)}</div>
      </section>

      <section className="seo-note"><div className="seo-shell"><strong>Important to know</strong><p>{page.note}</p></div></section>
    </main>
  )
}

