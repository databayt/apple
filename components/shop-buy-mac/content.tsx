"use client"

import { AppleLink } from "@/components/atom/apple-link"
import Image from "next/image"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyMacContentProps {
  dictionary: Dictionary
  lang: Locale
}

const macs = [
  {
    name: "MacBook Air",
    tagline: "Strikingly thin and fast.",
    price: "From $999",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp__gh7m6z91w0i6_xlarge_2x.png",
    href: "/shop/buy-mac/macbook-air",
    chip: "M3 or M4",
  },
  {
    name: "MacBook Pro",
    tagline: "The most advanced Mac laptops.",
    price: "From $1,599",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp__gh7m6z91w0i6_xlarge_2x.png",
    href: "/shop/buy-mac/macbook-pro",
    chip: "M4, M4 Pro, or M4 Max",
  },
  {
    name: "iMac",
    tagline: "The all-in-one for all.",
    price: "From $1,299",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_imac__c1cbf8udd32a_xlarge_2x.png",
    href: "/shop/buy-mac/imac",
    chip: "M4",
  },
  {
    name: "Mac mini",
    tagline: "More muscle. More hustle.",
    price: "From $599",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_mini__e87cesv8e4ya_xlarge_2x.png",
    href: "/shop/buy-mac/mac-mini",
    chip: "M4 or M4 Pro",
  },
  {
    name: "Mac Studio",
    tagline: "Outrageously powerful.",
    price: "From $1,999",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_studio__f1ca5s7k6lm2_xlarge_2x.png",
    href: "/mac-studio",
    chip: "M2 Max or M2 Ultra",
  },
  {
    name: "Mac Pro",
    tagline: "Built for pros.",
    price: "From $6,999",
    image: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_pro__c680b3jvzxau_xlarge_2x.png",
    href: "/mac-pro",
    chip: "M2 Ultra",
  },
]

export function BuyMacContent({ dictionary, lang }: BuyMacContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Shop Mac
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto px-4">
          Explore the full Mac lineup. All with Apple silicon.
        </p>
      </section>

      {/* Trade-in Banner */}
      <section className="py-6 border-b border-[#d2d2d7]">
        <div className="apple-container text-center">
          <p className="text-[#1d1d1f]">
            <span className="font-semibold">Get $70-$1000 in credit when you trade in a Mac.</span>
            {" "}
            <AppleLink href={localizedHref("/shop/trade-in")}>See what your device is worth</AppleLink>
          </p>
        </div>
      </section>

      {/* Mac Grid */}
      <section className="py-16">
        <div className="apple-container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {macs.map((mac) => (
              <a
                key={mac.name}
                href={localizedHref(mac.href)}
                className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#d2d2d7] hover:shadow-xl transition-shadow group"
              >
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={mac.image}
                    alt={mac.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-xs font-medium text-[#6e6e73] mb-2">{mac.chip}</p>
                <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                  {mac.name}
                </h2>
                <p className="text-lg text-[#6e6e73] mb-4">
                  {mac.tagline}
                </p>
                <p className="text-sm text-[#1d1d1f] mb-4">
                  {mac.price}
                </p>
                <span className="text-[#0071e3] group-hover:underline">
                  Buy &gt;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Link */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
          Which Mac is right for you?
        </h2>
        <AppleLink href={localizedHref("/mac/compare")}>Compare all Mac models</AppleLink>
      </section>

      {/* macOS Section */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            macOS Sequoia
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            Powerful new ways to work and play. macOS Sequoia brings iPhone Mirroring, Safari highlights, new gaming features, and Apple Intelligence.
          </p>
          <AppleLink href={localizedHref("/macos")}>Learn more about macOS</AppleLink>
        </div>
      </section>
    </div>
  )
}
