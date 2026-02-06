"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyMacMiniContentProps {
  dictionary: Dictionary
  lang: Locale
}

const chips = [
  { name: "M4", price: "From $599", description: "10-core CPU, 10-core GPU" },
  { name: "M4 Pro", price: "From $1,399", description: "14-core CPU, 20-core GPU" },
]

const memory = [
  { size: "16GB", price: "Included (M4)" },
  { size: "24GB", price: "+ $200" },
  { size: "32GB", price: "+ $400" },
  { size: "64GB", price: "M4 Pro + $600" },
]

const storage = [
  { size: "256GB", price: "$599" },
  { size: "512GB", price: "$799" },
  { size: "1TB", price: "$999" },
  { size: "2TB", price: "$1,199" },
]

export function BuyMacMiniContent({ dictionary, lang }: BuyMacMiniContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy Mac mini
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $599 or $49.91/mo. for 12 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-full max-w-lg h-[300px]">
            <Image
              src="https://www.apple.com/v/mac-mini/s/images/overview/hero/hero_m4__e3smc4e1yrs2_xlarge_2x.png"
              alt="Mac mini"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="py-12 bg-[#f5f5f7]">
        <div className="apple-container max-w-3xl">
          {/* Chip Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your chip.
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {chips.map((chip) => (
              <button
                key={chip.name}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-xl font-semibold text-[#1d1d1f] mb-2">{chip.name}</span>
                <span className="text-sm text-[#6e6e73] mb-2">{chip.description}</span>
                <span className="text-sm font-medium text-[#1d1d1f]">{chip.price}</span>
              </button>
            ))}
          </div>

          {/* Memory Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your memory.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {memory.map((option) => (
              <button
                key={option.size}
                className="flex flex-col items-center p-4 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-lg font-semibold text-[#1d1d1f]">{option.size}</span>
                <span className="text-xs text-[#6e6e73]">{option.price}</span>
              </button>
            ))}
          </div>

          {/* Storage Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your storage.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {storage.map((option) => (
              <button
                key={option.size}
                className="flex flex-col items-center p-4 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-lg font-semibold text-[#1d1d1f]">{option.size}</span>
                <span className="text-sm text-[#6e6e73]">{option.price}</span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
            >
              Add to Bag
            </a>
            <p className="text-sm text-[#6e6e73] mt-4">
              Free delivery. Or pick up at an Apple Store.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-12">
            Small size. Big capabilities.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">📐</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">5 x 5 inches</h3>
              <p className="text-sm text-[#6e6e73]">Incredibly compact design.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">M4 or M4 Pro</h3>
              <p className="text-sm text-[#6e6e73]">Powerful Apple silicon.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Versatile Ports</h3>
              <p className="text-sm text-[#6e6e73]">Thunderbolt, USB-C, HDMI, more.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Carbon Neutral</h3>
              <p className="text-sm text-[#6e6e73]">Apple&apos;s first carbon neutral Mac.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-in */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Trade in your current Mac.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Get credit toward a new Mac mini.
          </p>
          <AppleLink href={localizedHref("/shop/trade-in")}>Get your estimate</AppleLink>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 border-t border-[#d2d2d7]">
        <div className="apple-container">
          <p className="text-xs text-[#6e6e73]">
            * Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple.
          </p>
        </div>
      </section>
    </div>
  )
}
