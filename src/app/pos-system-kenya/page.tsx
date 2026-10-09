import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { BUSINESS_SIGNUP_URL } from "@/lib/business-app"

export const metadata: Metadata = {
  title: "POS System in Kenya for Retail Shops | Fahampesa",
  description:
    "Explore Fahampesa POS for Kenyan retail shops. Record sales, track stock, and review business reports. See if it fits your shop and get started.",
  alternates: { canonical: "https://fahampesa.com/pos-system-kenya" },
  openGraph: {
    title: "POS System in Kenya for Retail Shops | Fahampesa",
    description:
      "Sales, stock, and reports for Kenyan retail shops. Explore Fahampesa and get started.",
    url: "https://fahampesa.com/pos-system-kenya",
    type: "website",
  },
}

const benefits = [
  {
    title: "Record every sale",
    description:
      "Use a point of sale workflow to keep daily transactions in one place.",
  },
  {
    title: "Keep track of stock",
    description:
      "See the products you have and follow stock as your shop sells.",
  },
  {
    title: "Review your business",
    description:
      "Use sales and inventory reports to understand what is happening in your shop.",
  },
]

export default function KenyaPosPage() {
  return (
    <div className="min-h-screen bg-white text-[#001031]">
      <header className="border-b border-[#E5EAF3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-[100px]">
          <Link href="/" className="flex items-center gap-2" aria-label="Fahampesa home">
            <Image
              src="/assets/brand/fahampesa-logo-512.png"
              alt=""
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-roboto text-xl font-bold text-[#001223]">Fahampesa</span>
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-5 font-dm-sans text-sm font-semibold">
            <Link href="/pricingpage" className="hover:text-[#004AAD]">Pricing</Link>
            <Link href="/contact-information" className="hover:text-[#004AAD]">Contact</Link>
            <Link href={BUSINESS_SIGNUP_URL} className="rounded-lg bg-[#004AAD] px-4 py-2.5 text-white hover:bg-[#003a8c]">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[#DEE4FF]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px] lg:py-24">
            <p className="mb-4 font-dm-sans text-sm font-semibold uppercase tracking-wide text-[#004AAD]">
              For retail businesses in Kenya
            </p>
            <h1 className="max-w-3xl font-inter text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              POS system for Kenyan retail shops
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-lg leading-8 text-[#2f3037]">
              Fahampesa brings your sales, stock, and business reports together.
              If you run a shop, minimart, or growing retail business in Nairobi
              or elsewhere in Kenya, see whether it fits the way you work.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={BUSINESS_SIGNUP_URL} className="rounded-[10px] bg-[#004AAD] px-6 py-3 font-dm-sans font-semibold text-white hover:bg-[#003a8c]">
                Start with Fahampesa
              </Link>
              <Link href="/contact-information" className="rounded-[10px] border border-[#004AAD] px-6 py-3 font-dm-sans font-semibold text-[#004AAD] hover:bg-white/60">
                Ask about a demo
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]">
          <h2 className="max-w-2xl font-inter text-3xl font-semibold md:text-4xl">
            One place for your day-to-day shop work
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-[#DDE5F2] bg-white p-7">
                <h3 className="font-inter text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 font-inter leading-7 text-[#2f3037]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#F5F8FF]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]">
            <h2 className="font-inter text-3xl font-semibold md:text-4xl">A practical fit for your setup</h2>
            <p className="mt-5 max-w-3xl font-inter text-lg leading-8 text-[#2f3037]">
              Work in a browser or use the desktop app on a Windows computer.
              Fahampesa supports offline work and syncs when connectivity returns.
              Tell us about your devices, stock, and branches before choosing a plan.
            </p>
            <Link href="/pricingpage" className="mt-7 inline-block font-dm-sans font-semibold text-[#004AAD] underline underline-offset-4">
              Compare plans
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-[100px]">
          <h2 className="font-inter text-3xl font-semibold md:text-4xl">Questions from shop owners</h2>
          <div className="mt-7 max-w-3xl divide-y divide-[#DDE5F2]">
            <div className="py-6">
              <h3 className="font-inter text-xl font-semibold">Does it work when internet is unavailable?</h3>
              <p className="mt-2 font-inter leading-7 text-[#2f3037]">
                Fahampesa supports offline sales and stock work, with sync when the connection returns.
                Ask the team how this applies to your particular setup.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-inter text-xl font-semibold">Is it suitable for a small shop?</h3>
              <p className="mt-2 font-inter leading-7 text-[#2f3037]">
                Fahampesa serves small and growing businesses. Share the number of products,
                staff, and branches you have so the team can recommend a suitable setup.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-inter text-xl font-semibold">How do I get started?</h3>
              <p className="mt-2 font-inter leading-7 text-[#2f3037]">
                Create a business account, or contact Fahampesa if you want to discuss your
                shop and see a demo first.
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={BUSINESS_SIGNUP_URL} className="rounded-[10px] bg-[#004AAD] px-6 py-3 font-dm-sans font-semibold text-white hover:bg-[#003a8c]">
              Create a business account
            </Link>
            <Link href="/contact-information" className="rounded-[10px] border border-[#004AAD] px-6 py-3 font-dm-sans font-semibold text-[#004AAD]">
              Talk to the team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
