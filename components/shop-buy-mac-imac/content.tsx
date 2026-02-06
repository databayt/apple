"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyiMacContentProps {
  dictionary: Dictionary
  lang: Locale
}

const colors = [
  { name: "Green", hex: "#3F6E4E" },
  { name: "Yellow", hex: "#E5C76D" },
  { name: "Orange", hex: "#E87840" },
  { name: "Pink", hex: "#E8A4B3" },
  { name: "Purple", hex: "#B1A4CC" },
  { name: "Blue", hex: "#5E87B3" },
  { name: "Silver", hex: "#E3E4E5" },
]

const memory = [
  { size: "16GB", price: "Included" },
  { size: "24GB", price: "+ $200" },
  { size: "32GB", price: "+ $400" },
]

const storage = [
  { size: "256GB", price: "$1,299" },
  { size: "512GB", price: "$1,499" },
  { size: "1TB", price: "$1,699" },
  { size: "2TB", price: "$2,099" },
]

export function BuyiMacContent({ dictionary, lang }: BuyiMacContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy iMac
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $1,299 or $108.25/mo. for 12 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-full max-w-2xl h-[400px]">
            <Image
              src="https://www.apple.com/v/imac/r/images/overview/hero/intro_hero_endframe__fkqc5cwmqk6y_xlarge_2x.jpg"
              alt="iMac"
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
          {/* Color Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your color.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {colors.map((color) => (
              <button
                key={color.name}
                className="flex flex-col items-center gap-2 p-2"
                title={color.name}
              >
                <span
                  className="w-10 h-10 rounded-full border-2 border-[#d2d2d7]"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-[#6e6e73]">{color.name}</span>
              </button>
            ))}
          </div>

          {/* Memory Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your memory.
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-12">
            {memory.map((option) => (
              <button
                key={option.size}
                className="flex flex-col items-center p-4 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-lg font-semibold text-[#1d1d1f]">{option.size}</span>
                <span className="text-sm text-[#6e6e73]">{option.price}</span>
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
            Why you&apos;ll love iMac.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Seven Colors</h3>
              <p className="text-sm text-[#6e6e73]">Bright, beautiful, and bold.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">M4 Chip</h3>
              <p className="text-sm text-[#6e6e73]">10-core CPU, 10-core GPU.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">24&quot; 4.5K Display</h3>
              <p className="text-sm text-[#6e6e73]">500 nits of brightness.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📷</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">12MP Camera</h3>
              <p className="text-sm text-[#6e6e73]">Center Stage keeps you in frame.</p>
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
            Get credit toward a new iMac.
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
