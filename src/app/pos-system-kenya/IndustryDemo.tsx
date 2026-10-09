"use client"

import { useState } from "react"

const examples = [
  {
    name: "Retail shop",
    context: "A typical counter sale",
    lines: [
      { name: "Cooking oil 1L", quantity: 2, price: 420 },
      { name: "Bread 400g", quantity: 1, price: 75 },
    ],
  },
  {
    name: "Supermarket",
    context: "A basket of everyday goods",
    lines: [
      { name: "Milk 1L", quantity: 2, price: 195 },
      { name: "Rice 2kg", quantity: 1, price: 350 },
    ],
  },
  {
    name: "Wholesale",
    context: "A bulk order",
    lines: [
      { name: "Rice bag 25kg", quantity: 12, price: 3800 },
      { name: "Cooking oil 5L", quantity: 6, price: 1150 },
    ],
  },
  {
    name: "Restaurant & cafe",
    context: "Food and drink at the counter",
    lines: [
      { name: "Cappuccino", quantity: 2, price: 280 },
      { name: "Samosa", quantity: 3, price: 100 },
    ],
  },
  {
    name: "Bar",
    context: "A quick drinks sale",
    lines: [
      { name: "Bottled water", quantity: 2, price: 100 },
      { name: "Soda", quantity: 2, price: 150 },
    ],
  },
  {
    name: "Hotel",
    context: "Goods and services on one sale",
    lines: [
      { name: "Room night", quantity: 1, price: 6500 },
      { name: "Breakfast", quantity: 2, price: 850 },
    ],
  },
  {
    name: "Salon",
    context: "Services and products together",
    lines: [
      { name: "Haircut", quantity: 1, price: 800 },
      { name: "Shampoo", quantity: 1, price: 1200 },
    ],
  },
  {
    name: "Massage & services",
    context: "A service business sale",
    lines: [
      { name: "Swedish massage · 60 min", quantity: 1, price: 3500 },
      { name: "Aromatherapy add-on", quantity: 1, price: 800 },
    ],
  },
] as const

const money = (value: number) => `KSh ${value.toLocaleString("en-KE")}`

export default function IndustryDemo() {
  const [selected, setSelected] = useState(0)
  const example = examples[selected]
  const total = example.lines.reduce((sum, line) => sum + line.quantity * line.price, 0)

  return (
    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
      <div>
        <p className="font-dm-sans text-sm font-bold uppercase tracking-[0.16em] text-[#004AAD]">
          Example workflows
        </p>
        <h2 className="mt-4 font-inter text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          See your kind of sale
        </h2>
        <p className="mt-4 max-w-md font-inter text-base leading-7 text-[#42526A]">
          Choose a business to see the products or services a team might record.
          These are illustrative examples, not customer transactions.
        </p>
        <div className="mt-7 flex flex-wrap gap-2" aria-label="Business examples">
          {examples.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              className={`rounded-full border px-4 py-2.5 font-dm-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#004AAD] ${
                selected === index
                  ? "border-[#004AAD] bg-[#004AAD] text-white"
                  : "border-[#C8D5E8] bg-white text-[#001031] hover:border-[#004AAD] hover:text-[#004AAD]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-[#DCE5F4] bg-[#E9EFFB] p-3 shadow-[0_24px_65px_rgba(0,26,72,0.12)] sm:p-6">
        <div className="overflow-hidden rounded-[20px] border border-[#DDE5F2] bg-white">
          <div className="flex items-center gap-2 border-b border-[#E7ECF5] bg-[#F9FBFF] px-5 py-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#AFC1DB]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#AFC1DB]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#AFC1DB]" />
            <span className="ml-auto font-dm-sans text-xs font-semibold text-[#667891]">EXAMPLE SALE</span>
          </div>
          <div className="p-5 sm:p-8" aria-live="polite">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-dm-sans text-sm font-semibold text-[#004AAD]">{example.name}</p>
                <h3 className="mt-1 font-inter text-2xl font-semibold text-[#001031]">Record sale</h3>
                <p className="mt-1 font-inter text-sm text-[#667891]">{example.context}</p>
              </div>
              <span className="rounded-full bg-[#EAF7EF] px-3 py-1.5 font-dm-sans text-xs font-bold text-[#24794A]">
                Products / services
              </span>
            </div>

            <div className="mt-7 overflow-hidden rounded-xl border border-[#E1E8F2]">
              <div className="grid grid-cols-[1fr_48px_100px] gap-2 bg-[#F5F8FD] px-4 py-3 font-dm-sans text-xs font-bold uppercase tracking-wide text-[#667891] sm:grid-cols-[1fr_60px_125px]">
                <span>Item</span><span>Qty</span><span className="text-right">Amount</span>
              </div>
              {example.lines.map((line) => (
                <div key={line.name} className="grid grid-cols-[1fr_48px_100px] items-center gap-2 border-t border-[#E8EDF5] px-4 py-4 font-inter text-sm sm:grid-cols-[1fr_60px_125px] sm:text-base">
                  <span className="font-medium text-[#001031]">{line.name}</span>
                  <span className="text-[#52637A]">{line.quantity}</span>
                  <span className="text-right font-semibold text-[#001031]">{money(line.quantity * line.price)}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-[#E1E8F2] pt-5">
              <span className="font-dm-sans text-sm font-semibold text-[#52637A]">Example total</span>
              <strong className="font-inter text-2xl text-[#001031]">{money(total)}</strong>
            </div>
          </div>
        </div>
        <p className="px-2 pt-4 text-center font-inter text-xs leading-5 text-[#52637A]">
          Illustrative entries. See the genuine Fahampesa interface screenshots below.
        </p>
      </div>
    </div>
  )
}
