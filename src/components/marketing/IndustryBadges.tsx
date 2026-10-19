import Link from "next/link"
import { ArrowUpRight, ShoppingBag, Store, Boxes, UtensilsCrossed, BedDouble, Wine, Scissors, Wrench } from "lucide-react"
import { industryLinks, industryHref } from "@/lib/industry-links"

const icons = [ShoppingBag, Store, Boxes, UtensilsCrossed, BedDouble, Wine, Scissors, Wrench]

export default function IndustryBadges() {
  return (
    <section aria-labelledby="industry-links-heading" className="border-b border-[#E5EAF3] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-[100px] lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-dm-sans text-xs font-bold uppercase tracking-[0.16em] text-[#004AAD]">Built around your business</p>
            <h2 id="industry-links-heading" className="mt-3 font-inter text-2xl font-semibold tracking-tight text-[#001031] sm:text-3xl">Find the right POS for your business</h2>
          </div>
          <p className="max-w-sm font-inter text-sm leading-6 text-[#52637A]">Explore sales, stock and service workflows for businesses in Kenya.</p>
        </div>
        <nav aria-label="Business software by industry" className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industryLinks.map((industry, index) => {
            const Icon = icons[index]
            return (
              <Link key={industry.slug} href={industryHref(industry.slug)} className="group flex min-h-16 items-center gap-3 rounded-2xl border border-[#DCE5F2] bg-[#F8FAFF] px-3 py-3 font-dm-sans text-sm font-semibold text-[#001031] transition-colors hover:border-[#004AAD] hover:bg-[#EDF3FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004AAD] sm:px-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#004AAD] ring-1 ring-[#E4EBF6]"><Icon size={18} aria-hidden="true" /></span>
                <span>{industry.name}</span>
                <ArrowUpRight size={15} className="ml-auto hidden shrink-0 text-[#67809E] group-hover:text-[#004AAD] sm:block" aria-hidden="true" />
              </Link>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
