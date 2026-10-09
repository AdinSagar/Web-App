import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import IndustryDemo from "./IndustryDemo"
import { BUSINESS_SIGNUP_URL } from "@/lib/business-app"

export const metadata: Metadata = {
  title: "POS System & Business Software in Kenya | Fahampesa",
  description:
    "Fahampesa helps Kenyan shops, supermarkets, wholesalers, restaurants, hotels, salons and service teams record sales, track stock and review reports. See the product and get started.",
  alternates: { canonical: "https://fahampesa.com/pos-system-kenya" },
  openGraph: {
    title: "POS System & Business Software in Kenya | Fahampesa",
    description:
      "Explore the Fahampesa POS experience across retail, hospitality and services in Kenya. Sales, stock and reports in one place.",
    url: "https://fahampesa.com/pos-system-kenya",
    images: ["https://fahampesa.com/assets/figma/landing/fahampesa-business-showcase.webp"],
    type: "website",
  },
}

const industries = [
  { name: "Retail shops", detail: "Keep everyday sales and products together, from a single counter to a growing shop.", example: "Clothing · electronics · general stores", sample: "Example items: cooking oil and bread" },
  { name: "Supermarkets", detail: "Follow the products moving through a busy checkout and review your daily sales.", example: "Minimarts · groceries · convenience", sample: "Example items: milk and rice" },
  { name: "Wholesale", detail: "Record bulk quantities and see sales and stock in one business view.", example: "Distributors · bulk suppliers", sample: "Example items: rice bags and cooking oil 5L" },
  { name: "Restaurants & cafes", detail: "Record food and drink sales and keep track of the items you sell.", example: "Cafes · takeaways · restaurants", sample: "Example items: cappuccino and samosa" },
  { name: "Hotels", detail: "Bring goods and service sales into your business records and reporting.", example: "Hotels · lodges · guest houses", sample: "Example items: room night and breakfast" },
  { name: "Bars", detail: "Follow counter sales, products and business performance across the day.", example: "Bars · lounges · clubs", sample: "Example items: water and soda" },
  { name: "Salons & spas", detail: "Record treatments alongside the products your team sells.", example: "Hair · beauty · barbershops", sample: "Example items: haircut and shampoo" },
  { name: "Service businesses", detail: "Capture a service as a sale, whether it is a massage, repair or another appointment.", example: "Massage therapy · repairs · wellness", sample: "Example items: massage and aromatherapy" },
]

const productViews = [
  {
    image: "/image-mockup2.png",
    alt: "Fahampesa record sale interface with product or service, quantity and price fields",
    label: "01 / SALES",
    title: "Record a sale",
    body: "Choose a product or service, enter the quantity and price, and keep a clear sales record.",
  },
  {
    image: "/image-mockup1.png",
    alt: "Fahampesa inventory interface with a product card, price and stock count",
    label: "02 / STOCK",
    title: "See what is in stock",
    body: "Keep products and quantities visible as your business sells and grows.",
  },
  {
    image: "/image-mockup3.png",
    alt: "Fahampesa reporting interface showing sales, profit and transaction metrics",
    label: "03 / REPORTS",
    title: "Understand the day",
    body: "Review sales and performance in a dashboard built for decisions, not guesswork.",
  },
]

const faqs = [
  {
    question: "What types of businesses use Fahampesa?",
    answer: "Fahampesa serves retail, supermarkets, wholesale, restaurants, cafes, bars, hotels, salons, spas and other service businesses. Tell us how your business works so we can show the setup that fits.",
  },
  {
    question: "Can I record services such as a haircut or massage?",
    answer: "Yes. Fahampesa's sales flow accepts a product or service. The sample scenarios on this page show how service items can appear in a sale; they are illustrative, not customer records.",
  },
  {
    question: "Where can I use Fahampesa?",
    answer: "Use Fahampesa on the web, with its Android app on supported phones or tablets, or with a desktop app. Check the installation guide for the current downloads and the features of each version.",
  },
  {
    question: "What happens when my internet connection drops?",
    answer: "Offline support depends on the app and setup. Fahampesa supports offline work and syncing when connectivity returns; ask our team to show the workflow on the devices you plan to use.",
  },
  {
    question: "How does M-Pesa work with Fahampesa?",
    answer: "M-Pesa integration is listed for the Desktop Pro offering. Contact us to see the exact payment and confirmation flow available for your business before choosing a plan.",
  },
  {
    question: "What does it cost to get started?",
    answer: "There is a free option for testing and onboarding. Features differ by plan and device. See the current pricing page, then ask our team to confirm the right setup for your business.",
  },
]

const primary = "inline-flex items-center justify-center rounded-[10px] bg-[#004AAD] px-6 py-3.5 font-dm-sans text-base font-semibold text-white transition-colors hover:bg-[#003a8c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004AAD]"
const secondary = "inline-flex items-center justify-center rounded-[10px] border border-[#004AAD] px-6 py-3.5 font-dm-sans text-base font-semibold text-[#004AAD] transition-colors hover:bg-[#004AAD]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004AAD]"

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "POS System & Business Software in Kenya | Fahampesa",
  url: "https://fahampesa.com/pos-system-kenya",
  description: metadata.description,
  about: {
    "@type": "SoftwareApplication",
    name: "Fahampesa",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, Desktop",
    url: "https://fahampesa.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "Fahampesa",
    url: "https://fahampesa.com/",
  },
}

export default function KenyaPosPage() {
  return (
    <div className="min-h-screen bg-white text-[#001031]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <header className="border-b border-[#E5EAF3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-[100px]">
          <Link href="/" className="flex items-center gap-2" aria-label="Fahampesa home">
            <Image src="/assets/brand/fahampesa-logo-512.png" alt="" width={32} height={32} className="rounded-lg" />
            <span className="font-roboto text-xl font-bold text-[#001223]">Fahampesa</span>
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-5 font-dm-sans text-sm font-semibold">
            <Link href="#industries" className="hidden hover:text-[#004AAD] sm:inline">Industries</Link>
            <Link href="#product" className="hidden hover:text-[#004AAD] sm:inline">Product</Link>
            <Link href="/pricingpage" className="hover:text-[#004AAD]">Pricing</Link>
            <Link href={BUSINESS_SIGNUP_URL} className="rounded-lg bg-[#004AAD] px-4 py-2.5 text-white hover:bg-[#003a8c]">Sign Up</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="overflow-hidden bg-[#DEE4FF]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-[100px] lg:py-24">
            <div>
              <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.16em] text-[#004AAD]">Built for business in Kenya</p>
              <h1 className="mt-5 font-inter text-4xl font-semibold leading-[1.1] tracking-[-0.035em] sm:text-5xl xl:text-6xl">
                POS system and business software for Kenya
              </h1>
              <p className="mt-6 max-w-xl font-inter text-lg leading-8 text-[#2f3037]">
                Sell products or services, keep an eye on stock, and understand your day.
                Fahampesa gives Kenyan retail, hospitality and service teams one place to work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={BUSINESS_SIGNUP_URL} className={primary}>Start with Fahampesa</Link>
                <Link href="/contact-information" className={secondary}>Talk about your business</Link>
              </div>
              <p className="mt-7 font-dm-sans text-sm text-[#29466D]">Sales · Products and services · Stock · Reports</p>
            </div>
            <div className="relative rounded-[28px] border border-white/80 bg-white/45 p-4 shadow-[0_25px_70px_rgba(0,28,85,0.14)]">
              <Image
                src="/assets/figma/landing/fahampesa-business-showcase.webp"
                alt="Fahampesa product showcase with dashboard, point of sale and mobile app views"
                width={1123}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[18px]"
              />
            </div>
          </div>
        </section>

        <section id="industries" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-[100px]">
          <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.16em] text-[#004AAD]">Who we serve</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="max-w-3xl font-inter text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              From the shop counter to the service desk
            </h2>
            <p className="max-w-sm font-inter text-base leading-7 text-[#52637A]">One business system, with a sale that looks different for every team.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <article key={industry.name} className="group rounded-2xl border border-[#DDE5F2] bg-white p-6 transition-shadow hover:shadow-[0_18px_45px_rgba(0,28,85,0.10)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0FF] font-inter text-sm font-bold text-[#004AAD]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-inter text-xl font-semibold">{industry.name}</h3>
                <p className="mt-3 min-h-[84px] font-inter text-sm leading-6 text-[#42526A]">{industry.detail}</p>
                <p className="mt-5 border-t border-[#E6ECF5] pt-4 font-dm-sans text-xs font-semibold uppercase tracking-wide text-[#67809E]">{industry.example}</p>
                <p className="mt-3 font-inter text-xs leading-5 text-[#52637A]">{industry.sample}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F5F8FF]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-[100px]">
            <IndustryDemo />
          </div>
        </section>

        <section id="product" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-[100px]">
          <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.16em] text-[#004AAD]">The product</p>
          <h2 className="mt-4 max-w-3xl font-inter text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            A closer look at the Fahampesa interface
          </h2>
          <p className="mt-4 max-w-2xl font-inter text-base leading-7 text-[#52637A]">
            These images come from the Fahampesa product materials. Screen contents are demonstrations and may differ by app or plan.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {productViews.map((view) => (
              <article key={view.title} className="overflow-hidden rounded-[22px] border border-[#DDE5F2] bg-white shadow-[0_12px_35px_rgba(0,28,85,0.06)]">
                <div className="flex h-[260px] items-center justify-center overflow-hidden bg-[#EEF3FC] p-5 sm:h-[310px]">
                  <Image src={view.image} alt={view.alt} width={1172} height={993} sizes="(max-width: 1024px) 100vw, 33vw" className="h-full w-full object-contain" />
                </div>
                <div className="p-6">
                  <p className="font-dm-sans text-xs font-bold tracking-[0.16em] text-[#004AAD]">{view.label}</p>
                  <h3 className="mt-3 font-inter text-xl font-semibold">{view.title}</h3>
                  <p className="mt-3 font-inter text-sm leading-6 text-[#42526A]">{view.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#DEE6F2] bg-[#F8FAFE]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-[100px]">
            <div>
              <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.16em] text-[#004AAD]">Getting started</p>
              <h2 className="mt-4 font-inter text-3xl font-semibold leading-tight md:text-4xl">From your first item to your first report</h2>
              <p className="mt-5 font-inter text-base leading-7 text-[#42526A]">See the actual sales, stock and reporting screens above. Your business type determines the items and services you set up.</p>
              <Link href={BUSINESS_SIGNUP_URL} className={`${primary} mt-7`}>Create your owner account</Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-3">
              <li className="rounded-2xl border border-[#DDE5F2] bg-white p-6">
                <span className="font-inter text-sm font-bold text-[#004AAD]">01</span>
                <h3 className="mt-4 font-inter text-lg font-semibold">Set up your business</h3>
                <p className="mt-3 font-inter text-sm leading-6 text-[#42526A]">Create an owner account, choose your business type and branch, then add the products or services you sell.</p>
              </li>
              <li className="rounded-2xl border border-[#DDE5F2] bg-white p-6">
                <span className="font-inter text-sm font-bold text-[#004AAD]">02</span>
                <h3 className="mt-4 font-inter text-lg font-semibold">Record sales</h3>
                <p className="mt-3 font-inter text-sm leading-6 text-[#42526A]">Select the item or service, enter its quantity and price, and save the sale in your business record.</p>
              </li>
              <li className="rounded-2xl border border-[#DDE5F2] bg-white p-6">
                <span className="font-inter text-sm font-bold text-[#004AAD]">03</span>
                <h3 className="mt-4 font-inter text-lg font-semibold">Review the day</h3>
                <p className="mt-3 font-inter text-sm leading-6 text-[#42526A]">Check sales and inventory reports so you know what moved and what needs attention.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="bg-[#001F45] text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-9 px-6 py-16 lg:grid-cols-[1fr_0.8fr] lg:px-[100px]">
            <div>
              <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.16em] text-[#9BBEFF]">Across your devices</p>
              <h2 className="mt-4 font-inter text-3xl font-semibold leading-tight md:text-4xl">From the counter to your phone</h2>
              <p className="mt-5 max-w-xl font-inter text-base leading-7 text-[#DAE7F7]">
                Use Fahampesa on the web, on an Android phone or tablet, or with a desktop app. The available features and offline behaviour depend on the version you choose.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="https://play.google.com/store/apps/details?id=com.fahampesa.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-[10px] bg-white px-6 py-3 font-dm-sans font-semibold text-[#001F45] hover:bg-[#EDF3FF]">Get the Android app</Link>
                <Link href="/installation" className="inline-flex items-center rounded-[10px] border border-white/70 px-6 py-3 font-dm-sans font-semibold text-white hover:bg-white/10">Desktop installation</Link>
              </div>
              <p className="mt-5 font-inter text-sm leading-6 text-[#C8D9EF]">On Windows, the current install guide uses Edge or Chrome to add the business app. Internet access is needed for first setup. Ask us about offline work and syncing on your chosen device.</p>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/20 bg-white/10 p-2.5">
              <Image src="/assets/marketing/fahampesa-devices-retail.webp" alt="Illustrative retail owner using a tablet with a phone at the counter" width={1448} height={1086} sizes="(max-width: 1024px) 100vw, 40vw" className="aspect-[4/3] w-full rounded-[16px] object-cover" />
              <p className="px-3 py-3 font-inter text-xs leading-5 text-[#C8D9EF]">Illustrative business scene. Fahampesa interface screens are shown above.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-[100px]">
          <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.16em] text-[#004AAD]">Good to know</p>
          <h2 className="mt-4 font-inter text-3xl font-semibold md:text-4xl">Questions before you choose</h2>
          <div className="mt-8 max-w-4xl divide-y divide-[#DDE5F2]">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="font-inter text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 font-inter text-base leading-7 text-[#42526A]">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl rounded-xl border border-[#DDE5F2] bg-[#F8FAFE] p-5 font-inter text-sm leading-6 text-[#42526A]">
            Comparing systems? Check the exact plan limits, payment flow, hardware and offline setup before deciding. <Link href="/pricingpage" className="font-semibold text-[#004AAD] underline underline-offset-2">See Fahampesa plans</Link> or <Link href="/contact-information" className="font-semibold text-[#004AAD] underline underline-offset-2">ask for a walkthrough</Link> with your real products and services.
          </p>
        </section>

        <section className="bg-[#DEE4FF]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-16 lg:px-[100px]">
            <div>
              <h2 className="font-inter text-3xl font-semibold tracking-tight md:text-4xl">Show us how your business works</h2>
              <p className="mt-3 max-w-xl font-inter text-base leading-7 text-[#42526A]">Tell our team what you sell, which devices you use, and how many people or locations need access.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={BUSINESS_SIGNUP_URL} className={primary}>Create a business account</Link>
              <Link href="/contact-information" className={secondary}>Talk to the team</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
