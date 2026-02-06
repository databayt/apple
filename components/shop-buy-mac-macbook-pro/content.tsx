"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyMacBookProContentProps {
  dictionary: Dictionary
  lang: Locale
}

const sizes = [
  { name: '14"', description: "Portable power" },
  { name: '16"', description: "Maximum performance" },
]

const chips = [
  { name: "M4", price: "From $1,599", description: "10-core CPU, 10-core GPU" },
  { name: "M4 Pro", price: "From $1,999", description: "Up to 14-core CPU, 20-core GPU" },
  { name: "M4 Max", price: "From $3,199", description: "Up to 16-core CPU, 40-core GPU" },
]

const colors = [
  { name: "Space Black", hex: "#2E2E30" },
  { name: "Silver", hex: "#E3E4E5" },
]

export function BuyMacBookProContent({ dictionary, lang }: BuyMacBookProContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy MacBook Pro
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $1,599 or $133.25/mo. for 12 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-full max-w-2xl h-[400px]">
            <Image
              src="https://www.apple.com/v/macbook-pro/al/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_xlarge_2x.jpg"
              alt="MacBook Pro"
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
          {/* Size Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your size.
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {sizes.map((size) => (
              <button
                key={size.name}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-3xl font-semibold text-[#1d1d1f]">{size.name}</span>
                <span className="text-sm text-[#6e6e73]">{size.description}</span>
              </button>
            ))}
          </div>

          {/* Chip Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your chip.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
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

          {/* Color Selection */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your finish.
          </h2>
          <div className="flex justify-center gap-4 mb-12">
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

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
            >
              Select
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-12">
            What makes MacBook Pro so capable.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Apple Silicon</h3>
              <p className="text-sm text-[#6e6e73]">M4, M4 Pro, and M4 Max chips.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Stunning Display</h3>
              <p className="text-sm text-[#6e6e73]">Liquid Retina XDR display.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">All-Day Battery</h3>
              <p className="text-sm text-[#6e6e73]">Up to 24 hours of battery life.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Apple Intelligence</h3>
              <p className="text-sm text-[#6e6e73]">AI that understands you.</p>
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
            Get credit toward a new MacBook Pro.
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
