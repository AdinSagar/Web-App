import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { CALL_NUMBER, CALL_URL, SHOWROOM, SOFTWARE_MONTHLY_PRICE_KES, SOFTWARE_PRICE_LABEL, demoUrl } from "@/lib/marketing-contact"

const canonical = "https://fahampesa.com/inventory-management-software-kenya"
const title = "Inventory Management Software Kenya & Nairobi | Fahampesa"
const description = "Track products, stock and sales with Fahampesa inventory management software in Kenya. KSh 2,000/month, software only. Request a demo in Nairobi."

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website", locale: "en_KE", images: ["/assets/figma/landing/fahampesa-business-showcase.webp"] },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/figma/landing/fahampesa-business-showcase.webp"] },
}

const features = [
  { title: "Keep product and stock records together", body: "Organize your products, prices and quantities in the inventory workspace. Start with a physical stock count so the opening figures match the goods in your shop." },
  { title: "Connect sales to inventory", body: "Record a product sale through the supported POS workflow and review the resulting stock records. Keep quantities and units consistent when your business buys and sells different pack sizes." },
  { title: "Review stock before reordering", body: "Review inventory, low-stock information and available reports before preparing a purchase. Use supplier and purchase records to follow the goods your business receives." },
]

const questions = [
  { question: "What does inventory management software do?", answer: "Inventory management software organizes product quantities and stock records so a business owner can review what is available alongside sales. Fahampesa combines inventory with POS sales, expenses and business reports." },
  { question: "How much does Fahampesa inventory software cost in Kenya?", answer: "Fahampesa costs KSh 2,000/month for the software subscription. Hardware is sold separately. Review the pricing page for current terms and confirm your device and business requirements before subscribing." },
  { question: "Which shops does the stock management software suit?", answer: "Fahampesa supports product and inventory workflows for retail shops, minimarts, supermarkets and wholesalers. Clothing, electronics and hardware shops should bring sample products and selling units to their demonstration." },
  { question: "Does inventory work with the POS?", answer: "Yes. Fahampesa brings product sales and stock records into the same business system. Ask for a demonstration of a sale, its effect on stock, a purchase receipt and the reports you need." },
  { question: "Can I review stock when I am away from my shop?", answer: "An authorized owner can review synchronized business records online. Records created offline become available on other devices after they synchronize. Ask the team to demonstrate the offline and sync workflow on your intended device." },
  { question: "Where can I see an inventory software demonstration in Nairobi?", answer: `Visit ${SHOWROOM}. Call ${CALL_NUMBER} before travelling to arrange a time. Bring a small product list, opening quantities and the printer or scanner model you plan to use.` },
  { question: "Are barcode scanners and receipt printers included?", answer: "The software subscription does not include hardware. Tell our team your scanner and printer models and connection types so compatibility can be checked before you buy equipment." },
]

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: "en-KE", isPartOf: { "@id": "https://fahampesa.com/#website" }, publisher: { "@id": "https://fahampesa.com/#organization" }, about: { "@id": `${canonical}#software` }, breadcrumb: { "@id": `${canonical}#breadcrumb` } },
    { "@type": "SoftwareApplication", "@id": `${canonical}#software`, name: "Fahampesa", applicationCategory: "BusinessApplication", operatingSystem: "Web, Windows", url: canonical, description, offers: { "@type": "Offer", price: SOFTWARE_MONTHLY_PRICE_KES, priceCurrency: "KES", name: "Monthly software subscription, hardware sold separately", url: "https://fahampesa.com/pricingpage", seller: { "@id": "https://fahampesa.com/#organization" } } },
    { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://fahampesa.com/" }, { "@type": "ListItem", position: 2, name: "Inventory management software Kenya", item: canonical }] },
  ],
}

const primary = "inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[#004AAD] px-6 py-3.5 font-dm-sans text-sm font-semibold text-white hover:bg-[#003a8c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004AAD]"
const textLink = "font-semibold text-[#004AAD] underline underline-offset-4"

export default function InventorySoftwarePage() {
  return (
    <div className="min-h-screen bg-white text-[#001031]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <header className="border-b border-[#E5EAF3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-[100px]">
          <Link href="/" className="flex items-center gap-2 font-roboto text-xl font-bold"><Image src="/assets/brand/fahampesa-logo-512.png" alt="" width={32} height={32} />Fahampesa</Link>
          <nav aria-label="Main navigation" className="flex items-center gap-4 font-dm-sans text-sm font-semibold">
            <Link href="/pos-system-kenya" className="hidden hover:text-[#004AAD] sm:inline">POS software</Link>
            <Link href="/pricingpage" className="hover:text-[#004AAD]">Pricing</Link>
            <a href={demoUrl("inventory and stock management")} target="_blank" rel="noopener noreferrer" className={primary}>Request a Demo</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="bg-[#DEE4FF]">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-[100px] lg:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 font-dm-sans text-xs text-[#42526A]"><Link href="/" className="underline underline-offset-2">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Inventory management</span></nav>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="font-dm-sans text-xs font-bold uppercase tracking-[0.16em] text-[#004AAD]">Stock management for Kenyan businesses</p>
                <h1 className="mt-4 font-inter text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">Inventory management software in Kenya</h1>
                <p className="mt-6 font-inter text-lg leading-8 text-[#42526A]">Keep products, stock quantities and sales records together. Fahampesa helps shops, minimarts and wholesalers review inventory alongside their daily business activity.</p>
                <p className="mt-5 font-inter text-sm leading-6 text-[#42526A]">{SOFTWARE_PRICE_LABEL}</p>
                <div className="mt-7 flex flex-wrap gap-4"><a href={demoUrl("inventory and stock management")} target="_blank" rel="noopener noreferrer" className={primary}>Request an Inventory Demo</a><Link href="/pricingpage" className="inline-flex min-h-12 items-center rounded-[10px] border border-[#004AAD] px-6 py-3 font-dm-sans text-sm font-semibold text-[#004AAD] hover:bg-white/50">See Pricing</Link></div>
              </div>
              <div className="rounded-[28px] border border-white/80 bg-white/50 p-4 shadow-[0_20px_60px_rgba(0,28,85,0.1)]"><Image src="/image-mockup1.png" alt="Fahampesa inventory interface showing a product, its price and stock quantity" width={1172} height={993} priority sizes="(max-width: 1024px) 100vw, 45vw" className="h-auto w-full rounded-2xl" /><p className="mt-3 text-center font-inter text-xs text-[#52637A]">Fahampesa product material. Screen contents are demonstrations.</p></div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]">
          <h2 className="font-inter text-3xl font-semibold tracking-tight">From opening stock to the daily sales report</h2>
          <p className="mt-5 max-w-3xl font-inter text-base leading-8 text-[#42526A]">A stock count and a sales book often describe different parts of the working day. Bringing them into the same software gives your team a place to check products, quantities and recorded transactions before deciding what to buy next.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{features.map(feature => <article key={feature.title} className="rounded-[22px] border border-[#DDE5F2] bg-[#F8FAFF] p-7"><h3 className="font-inter text-xl font-semibold">{feature.title}</h3><p className="mt-4 font-inter text-sm leading-7 text-[#42526A]">{feature.body}</p></article>)}</div>
        </section>
        <section className="bg-[#F5F8FF]"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]">
          <h2 className="font-inter text-3xl font-semibold tracking-tight">Check the inventory workflow before you choose</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {["Bring five products with their buying units, selling units, prices and opening quantities.", "Ask the team to demonstrate a product sale, stock update, supplier purchase and stock adjustment.", "Review the available stock reports, staff access and offline synchronization on the devices you intend to use."].map((step, i) => <li key={step} className="flex items-start gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8EFFF] font-dm-sans font-bold text-[#004AAD]">{i + 1}</span><p className="font-inter text-base leading-7 text-[#42526A]">{step}</p></li>)}
          </ol>
          <p className="mt-8 max-w-3xl font-inter text-base leading-8 text-[#42526A]">Compare the workflow for your business: <Link href="/industries/retail-pos-kenya" className={textLink}>retail POS</Link>, <Link href="/industries/supermarket-pos-kenya" className={textLink}>supermarket and minimart POS</Link>, or <Link href="/industries/wholesale-pos-kenya" className={textLink}>wholesale sales and inventory</Link>.</p>
        </div></section>
        <section className="bg-[#001F45] text-white"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-[100px]">
          <div><p className="font-dm-sans text-xs font-bold uppercase tracking-[0.16em] text-[#9BBEFF]">Nairobi showroom</p><h2 className="mt-4 font-inter text-3xl font-semibold">See stock management with your products</h2><p className="mt-5 font-inter text-base leading-8 text-[#DAE7F7]">Visit {SHOWROOM}. Call before travelling so the team can arrange your demonstration.</p><a href={demoUrl("inventory and stock management")} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center rounded-[10px] bg-white px-6 py-3.5 font-dm-sans text-sm font-semibold text-[#001F45] hover:bg-[#EDF3FF]">Arrange a Demo on WhatsApp</a></div>
          <div className="rounded-[22px] border border-white/20 bg-white/5 p-7 font-inter text-sm leading-7 text-[#DAE7F7]"><h3 className="text-lg font-semibold text-white">Plan your setup</h3><p className="mt-4">{SOFTWARE_PRICE_LABEL}</p><p className="mt-4">Call <a href={CALL_URL} className="font-semibold text-white underline underline-offset-4">{CALL_NUMBER}</a></p><Link href="/installation" className="mt-4 inline-block text-white underline underline-offset-4">Windows installation guide</Link></div>
        </div></section>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]"><h2 className="font-inter text-3xl font-semibold">Inventory software questions</h2><div className="mt-6 max-w-4xl divide-y divide-[#DDE5F2]">{questions.map(faq => <div key={faq.question} className="py-6"><h3 className="font-inter text-lg font-semibold">{faq.question}</h3><p className="mt-3 font-inter text-base leading-7 text-[#42526A]">{faq.answer}</p></div>)}</div></section>
      </main>
      <Footer />
    </div>
  )
}
