"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyAppleWatchUltra2ContentProps {
  dictionary: Dictionary
  lang: Locale
}

const bandTypes = [
  { name: "Alpine Loop", price: "From $799" },
  { name: "Trail Loop", price: "From $799" },
  { name: "Ocean Band", price: "From $799" },
]

const colors = [
  { name: "Natural Titanium", hex: "#D1CDC9" },
  { name: "Black Titanium", hex: "#3D3D3F" },
]

export function BuyAppleWatchUltra2Content({ dictionary, lang }: BuyAppleWatchUltra2ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy Apple Watch Ultra 2
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $799 or $66.58/mo. for 12 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-64 h-80">
            <Image
              src="https://www.apple.com/v/apple-watch-ultra-2/d/images/overview/hero/hero_ultra__cbk1dzfuwz7m_xlarge_2x.jpg"
              alt="Apple Watch Ultra 2"
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
          {/* Case Finish */}
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

          {/* Band Type */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your band.
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-12">
            {bandTypes.map((band) => (
              <button
                key={band.name}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-lg font-semibold text-[#1d1d1f]">{band.name}</span>
                <span className="text-sm text-[#6e6e73]">{band.price}</span>
              </button>
            ))}
          </div>

          {/* Connectivity */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Always GPS + Cellular.
          </h2>
          <div className="bg-white rounded-xl border border-[#d2d2d7] p-6 mb-12 text-center">
            <span className="text-lg font-semibold text-[#1d1d1f]">GPS + Cellular</span>
            <p className="text-sm text-[#6e6e73] mt-2">
              Stay connected without your iPhone. Call, text, and stream music on the go.
            </p>
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
            Built for the extreme.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">49mm Titanium</h3>
              <p className="text-sm text-[#6e6e73]">Our biggest, brightest display.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">100m Water Resistant</h3>
              <p className="text-sm text-[#6e6e73]">Dive to the depths.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">36-Hour Battery</h3>
              <p className="text-sm text-[#6e6e73]">Up to 72 hours in Low Power Mode.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Precision GPS</h3>
              <p className="text-sm text-[#6e6e73]">Dual-frequency for accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure */}
      <section className="py-16 bg-black text-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold mb-4">
            Ready for any adventure.
          </h2>
          <p className="text-lg text-[#a1a1a6] mb-8 max-w-2xl mx-auto">
            Whether you&apos;re running an ultramarathon, diving the ocean, or exploring the wilderness, Apple Watch Ultra 2 is designed to go wherever you go.
          </p>
          <AppleLink href={localizedHref("/apple-watch-ultra-2")}>
            Learn more about Apple Watch Ultra 2
          </AppleLink>
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
