"use client"

import Image from "next/image"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyiPadProContentProps {
  dictionary: Dictionary
  lang: Locale
}

const sizes = [
  { name: '11"', price: "From $999" },
  { name: '13"', price: "From $1,299" },
]

const colors = [
  { name: "Space Black", hex: "#3D3D3F" },
  { name: "Silver", hex: "#E3E4E5" },
]

const storage = [
  { size: "256GB", price: "$999" },
  { size: "512GB", price: "$1,199" },
  { size: "1TB", price: "$1,599" },
  { size: "2TB", price: "$1,999" },
]

export function BuyiPadProContent({ dictionary, lang }: BuyiPadProContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-white">
        <p className="text-sm text-[#bf4800] font-medium mb-2">New</p>
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Buy iPad Pro
        </h1>
        <p className="text-xl text-[#6e6e73]">
          From $999 or $83.25/mo. for 12 mo.*
        </p>
      </section>

      {/* Product Image */}
      <section className="py-8 bg-white">
        <div className="apple-container flex justify-center">
          <div className="relative w-full max-w-2xl h-[400px]">
            <Image
              src="https://www.apple.com/v/ipad-pro/al/images/overview/hero/hero_hardware_duo__g8vmdgv4jbaa_xlarge_2x.jpg"
              alt="iPad Pro"
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
                <span className="text-sm text-[#6e6e73]">{size.price}</span>
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

          {/* Connectivity */}
          <h2 className="text-2xl font-semibold text-[#1d1d1f] text-center mb-8">
            Choose your connectivity.
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-12">
            <button className="flex flex-col items-center p-4 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors">
              <span className="text-lg font-semibold text-[#1d1d1f]">Wi-Fi</span>
              <span className="text-sm text-[#6e6e73]">Included</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white rounded-xl border border-[#d2d2d7] hover:border-[#0071e3] transition-colors">
              <span className="text-lg font-semibold text-[#1d1d1f]">Wi-Fi + Cellular</span>
              <span className="text-sm text-[#6e6e73]">+ $200</span>
            </button>
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
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-12">
            Why iPad Pro is so capable.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">M4 Chip</h3>
              <p className="text-sm text-[#6e6e73]">Outrageously powerful.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Ultra Retina XDR</h3>
              <p className="text-sm text-[#6e6e73]">Tandem OLED display.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Apple Pencil Pro</h3>
              <p className="text-sm text-[#6e6e73]">Magical creative tools.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🪶</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Impossibly Thin</h3>
              <p className="text-sm text-[#6e6e73]">5.1mm thin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Add accessories.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Apple Pencil Pro, Magic Keyboard, and more.
          </p>
          <AppleLink href={localizedHref("/shop/accessories")}>Shop iPad Pro accessories</AppleLink>
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
