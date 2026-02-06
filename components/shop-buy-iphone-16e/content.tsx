"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyIPhone16eContentProps {
  dictionary: Dictionary
  lang: Locale
}

const colors = [
  { name: "Black", hex: "#3D3D3F" },
  { name: "White", hex: "#F5F5F0" },
]

const storage = [
  { size: "128GB", price: "$599" },
  { size: "256GB", price: "$699" },
  { size: "512GB", price: "$899" },
]

export function BuyIPhone16eContent({ dictionary, lang }: BuyIPhone16eContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy iPhone 16e
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $599 or $24.95/mo. for 24 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-full max-w-lg h-[500px]">
            <Image
              src="https://www.apple.com/v/iphone-16e/a/images/overview/hero/hero_endframe__b1pwrtgvb5aq_xlarge_2x.jpg"
              alt="iPhone 16e"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Configurator Preview */}
      <section className="py-12 bg-[#f5f5f7]">
        <div className="apple-container max-w-3xl">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your color.
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            {colors.map((color) => (
              <button
                key={color.name}
                className="flex flex-col items-center gap-2 p-2"
                title={color.name}
              >
                <span
                  className="w-8 h-8 rounded-full border-2 border-[#d2d2d7]"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-[#6e6e73]">{color.name}</span>
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your storage.
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-12">
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
              Continue
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
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-8">
            Great iPhone features at a great value.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Apple Intelligence</h3>
              <p className="text-sm text-[#6e6e73]">AI that understands you.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">48MP Camera</h3>
              <p className="text-sm text-[#6e6e73]">Stunning photos and videos.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">All-Day Battery</h3>
              <p className="text-sm text-[#6e6e73]">Power that keeps going.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">A18 chip</h3>
              <p className="text-sm text-[#6e6e73]">Fast and efficient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-in */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Trade in your current iPhone.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Get $180-$650 in credit when you trade in an eligible device.
          </p>
          <AppleLink href={localizedHref("/shop/trade-in")}>
            Get your estimate
          </AppleLink>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 border-t border-[#d2d2d7]">
        <div className="apple-container">
          <p className="text-xs text-[#6e6e73]">
            * Pricing for iPhone includes a $30 carrier instant discount that requires activation with AT&T, T-Mobile, or Verizon.
          </p>
        </div>
      </section>
    </div>
  )
}
