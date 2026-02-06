"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyIPhone16ContentProps {
  dictionary: Dictionary
  lang: Locale
}

const colors = [
  { name: "Ultramarine", hex: "#9AADCC" },
  { name: "Teal", hex: "#8FC4C6" },
  { name: "Pink", hex: "#F9C6D4" },
  { name: "White", hex: "#F5F5F0" },
  { name: "Black", hex: "#3D3D3F" },
]

const storage = [
  { size: "128GB", price: "$799" },
  { size: "256GB", price: "$899" },
  { size: "512GB", price: "$1,099" },
]

export function BuyIPhone16Content({ dictionary, lang }: BuyIPhone16ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy iPhone 16
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $799 or $33.29/mo. for 24 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-full max-w-lg h-[500px]">
            <Image
              src="https://www.apple.com/v/iphone-16/d/images/overview/design/design_colorful__c7mmp78grca2_xlarge_2x.jpg"
              alt="iPhone 16"
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

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] text-center mb-12">
            Why Apple is the best place to buy iPhone.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Trade In
              </h3>
              <p className="text-sm text-[#6e6e73]">
                Trade in your current iPhone and get credit toward a new one.
              </p>
              <AppleLink href={localizedHref("/shop/trade-in")} className="text-sm mt-2">
                Learn more
              </AppleLink>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Apple Card
              </h3>
              <p className="text-sm text-[#6e6e73]">
                Pay over time, interest-free when you choose to check out with Apple Card Monthly Installments.
              </p>
              <AppleLink href={localizedHref("/apple-card")} className="text-sm mt-2">
                Learn more
              </AppleLink>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Free Delivery
              </h3>
              <p className="text-sm text-[#6e6e73]">
                Get free delivery, or pick up available items at an Apple Store.
              </p>
              <AppleLink href={localizedHref("/shop/browse/open/shipping")} className="text-sm mt-2">
                Learn more
              </AppleLink>
            </div>
          </div>
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
