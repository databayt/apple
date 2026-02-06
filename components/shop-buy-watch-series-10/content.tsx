"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyAppleWatchSeries10ContentProps {
  dictionary: Dictionary
  lang: Locale
}

const caseSizes = [
  { size: "42mm", description: "Small" },
  { size: "46mm", description: "Large" },
]

const caseMaterials = [
  { name: "Aluminum", price: "From $399" },
  { name: "Titanium", price: "From $699" },
]

const connectivity = [
  { type: "GPS", description: "Stay connected via your iPhone" },
  { type: "GPS + Cellular", description: "Stay connected without your iPhone" },
]

export function BuyAppleWatchSeries10Content({ dictionary, lang }: BuyAppleWatchSeries10ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy Apple Watch Series 10
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $399 or $33.25/mo. for 12 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-64 h-80">
            <Image
              src="https://www.apple.com/v/apple-watch-series-10/d/images/overview/hero/hero_s10_staticframe__bbf7j4b1xsya_xlarge_2x.jpg"
              alt="Apple Watch Series 10"
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
          {/* Case Size */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your case size.
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {caseSizes.map((size) => (
              <button
                key={size.size}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-2xl font-semibold text-[#1d1d1f]">{size.size}</span>
                <span className="text-sm text-[#6e6e73]">{size.description}</span>
              </button>
            ))}
          </div>

          {/* Case Material */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your case material.
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {caseMaterials.map((material) => (
              <button
                key={material.name}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-xl font-semibold text-[#1d1d1f]">{material.name}</span>
                <span className="text-sm text-[#6e6e73]">{material.price}</span>
              </button>
            ))}
          </div>

          {/* Connectivity */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your connectivity.
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {connectivity.map((option) => (
              <button
                key={option.type}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors"
              >
                <span className="text-xl font-semibold text-[#1d1d1f]">{option.type}</span>
                <span className="text-sm text-[#6e6e73] text-center">{option.description}</span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
            >
              Choose your band
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-12">
            What makes Series 10 special.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">📐</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Thinnest Ever</h3>
              <p className="text-sm text-[#6e6e73]">Our thinnest Apple Watch yet.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Bigger Display</h3>
              <p className="text-sm text-[#6e6e73]">Most advanced display ever.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Health Features</h3>
              <p className="text-sm text-[#6e6e73]">Sleep apnea detection.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Fast Charging</h3>
              <p className="text-sm text-[#6e6e73]">80% in about 30 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bands */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Explore bands.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Express your style with dozens of band options.
          </p>
          <AppleLink href={localizedHref("/shop/accessories")}>Shop all bands</AppleLink>
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
