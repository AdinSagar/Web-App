import Link from "next/link"
import { ArrowUpRight, ShoppingBag, Store, Boxes, UtensilsCrossed, BedDouble, Wine, Scissors, Wrench } from "lucide-react"
import { industryLinks, industryHref } from "@/lib/industry-links"

const icons = [ShoppingBag, Store, Boxes, UtensilsCrossed, BedDouble, Wine, Scissors, Wrench]

export default function IndustryBadges() {
  return (
    <section aria-labelledby="industry-links-heading" className="border-b border-[#e4e3df] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-[100px] lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-inter text-xs font-bold uppercase tracking-[0.16em] text-[#c74300]">Built around your business</p>
            <h2 id="industry-links-heading" className="mt-3 font-inter text-2xl font-semibold tracking-tight text-[#101c30] sm:text-3xl">Explore your business workflow</h2>
          </div>
          <p className="max-w-sm font-inter text-sm leading-6 text-[#626873]">Explore sales, stock and service workflows for businesses in Kenya.</p>
        </div>
        <nav aria-label="Business software by industry" className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industryLinks.map((industry, index) => {
            const Icon = icons[index]
            return (
              <Link key={industry.slug} href={industryHref(industry.slug)} className="group flex min-h-16 items-center gap-3 rounded-2xl border border-[#e4e3df] bg-[#f8f7f4] px-3 py-3 font-inter text-sm font-semibold text-[#101c30] transition-colors hover:border-[#c74300] hover:bg-[#fff1e7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c74300] sm:px-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#c74300] ring-1 ring-[#e4e3df]"><Icon size={18} aria-hidden="true" /></span>
                <span>{industry.name}</span>
                <ArrowUpRight size={15} className="ml-auto hidden shrink-0 text-[#626873] group-hover:text-[#c74300] sm:block" aria-hidden="true" />
              </Link>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
