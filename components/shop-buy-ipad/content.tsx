"use client"

import { AppleLink } from "@/components/atom/apple-link"
import Image from "next/image"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyiPadContentProps {
  dictionary: Dictionary
  lang: Locale
}

const ipads = [
  {
    name: "iPad Pro",
    tagline: "The ultimate iPad experience.",
    price: "From $999",
    image: "https://www.apple.com/v/ipad/home/di/images/overview/select/product_tile_ipad_pro__c8xnrlp39oaa_xlarge_2x.png",
    href: "/shop/buy-ipad/ipad-pro",
    chip: "M4 chip",
    isNew: true,
  },
  {
    name: "iPad Air",
    tagline: "Serious performance in a thin, light design.",
    price: "From $599",
    image: "https://www.apple.com/v/ipad/home/di/images/overview/select/product_tile_ipad_air__1x0iy8ujhju6_xlarge_2x.png",
    href: "/shop/buy-ipad/ipad-air",
    chip: "M2 chip",
    isNew: true,
  },
  {
    name: "iPad",
    tagline: "The colorful, all-purpose iPad.",
    price: "From $349",
    image: "https://www.apple.com/v/ipad/home/di/images/overview/select/product_tile_ipad_10th_gen__cso6d2hvyci6_xlarge_2x.png",
    href: "/ipad",
    chip: "A14 Bionic chip",
    isNew: false,
  },
  {
    name: "iPad mini",
    tagline: "Powerful. Portable. Perfect.",
    price: "From $499",
    image: "https://www.apple.com/v/ipad/home/di/images/overview/select/product_tile_ipad_mini__dv7swbfoxvwy_xlarge_2x.png",
    href: "/ipad-mini",
    chip: "A17 Pro chip",
    isNew: true,
  },
]

export function BuyiPadContent({ dictionary, lang }: BuyiPadContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Shop iPad
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto px-4">
          Explore the full iPad lineup. Find your perfect iPad.
        </p>
      </section>

      {/* Trade-in Banner */}
      <section className="py-6 border-b border-[#d2d2d7]">
        <div className="apple-container text-center">
          <p className="text-[#1d1d1f]">
            <span className="font-semibold">Get $60-$505 in credit when you trade in an iPad.</span>
            {" "}
            <AppleLink href={localizedHref("/shop/trade-in")}>See what your device is worth</AppleLink>
          </p>
        </div>
      </section>

      {/* iPad Grid */}
      <section className="py-16">
        <div className="apple-container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ipads.map((ipad) => (
              <a
                key={ipad.name}
                href={localizedHref(ipad.href)}
                className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#d2d2d7] hover:shadow-xl transition-shadow group"
              >
                {ipad.isNew && (
                  <span className="text-sm font-medium text-[#bf4800] mb-2">New</span>
                )}
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={ipad.image}
                    alt={ipad.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                  {ipad.name}
                </h2>
                <p className="text-sm text-[#6e6e73] mb-2">
                  {ipad.chip}
                </p>
                <p className="text-lg text-[#6e6e73] mb-4 text-center">
                  {ipad.tagline}
                </p>
                <p className="text-sm text-[#1d1d1f] mb-4">
                  {ipad.price}
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
          Which iPad is right for you?
        </h2>
        <AppleLink href={localizedHref("/ipad/compare")}>Compare all iPad models</AppleLink>
      </section>

      {/* Accessories */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            iPad Accessories
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            Explore keyboards, cases, Apple Pencil, and more to get the most out of your iPad.
          </p>
          <AppleLink href={localizedHref("/shop/accessories")}>Shop iPad accessories</AppleLink>
        </div>
      </section>
    </div>
  )
}
