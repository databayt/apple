"use client"

import { AppleLink } from "@/components/atom/apple-link"
import Image from "next/image"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyIPhoneContentProps {
  dictionary: Dictionary
  lang: Locale
}

const iphones = [
  {
    name: "iPhone 16 Pro",
    tagline: "The ultimate iPhone.",
    price: "From $999 or $41.62/mo. for 24 mo.*",
    image: "https://www.apple.com/v/iphone/home/bs/images/overview/select/iphone_16_pro__erw9alves2qa_xlarge_2x.png",
    href: "/shop/buy-iphone/iphone-16-pro",
    isNew: true,
  },
  {
    name: "iPhone 16",
    tagline: "A total powerhouse.",
    price: "From $799 or $33.29/mo. for 24 mo.*",
    image: "https://www.apple.com/v/iphone/home/bs/images/overview/select/iphone_16__c5bvots96jee_xlarge_2x.png",
    href: "/shop/buy-iphone/iphone-16",
    isNew: true,
  },
  {
    name: "iPhone 16e",
    tagline: "A great new value.",
    price: "From $599 or $24.95/mo. for 24 mo.*",
    image: "https://www.apple.com/v/iphone/home/bs/images/overview/select/iphone_16e__d5dxsfcwy2om_xlarge_2x.png",
    href: "/shop/buy-iphone/iphone-16e",
    isNew: true,
  },
  {
    name: "iPhone 15",
    tagline: "As spectacular as ever.",
    price: "From $699 or $29.12/mo. for 24 mo.*",
    image: "https://www.apple.com/v/iphone/home/bs/images/overview/select/iphone_15__fm75yfiai4ia_xlarge_2x.png",
    href: "/iphone-15",
    isNew: false,
  },
  {
    name: "iPhone 14",
    tagline: "Simply an icon.",
    price: "From $599 or $24.95/mo. for 24 mo.*",
    image: "https://www.apple.com/v/iphone/home/bs/images/overview/select/iphone_14__cjgvgyn9lcie_xlarge_2x.png",
    href: "/iphone-14",
    isNew: false,
  },
]

export function BuyIPhoneContent({ dictionary, lang }: BuyIPhoneContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Shop iPhone
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto px-4">
          All models. All carriers. Pick the perfect iPhone for you.
        </p>
      </section>

      {/* Trade-in Banner */}
      <section className="py-6 border-b border-[#d2d2d7]">
        <div className="apple-container text-center">
          <p className="text-[#1d1d1f]">
            <span className="font-semibold">Get $180-$650 in credit when you trade in iPhone 11 or higher.</span>
            {" "}
            <AppleLink href={localizedHref("/shop/trade-in")}>See what your device is worth</AppleLink>
          </p>
        </div>
      </section>

      {/* iPhone Grid */}
      <section className="py-16">
        <div className="apple-container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iphones.map((iphone) => (
              <a
                key={iphone.name}
                href={localizedHref(iphone.href)}
                className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#d2d2d7] hover:shadow-xl transition-shadow group"
              >
                {iphone.isNew && (
                  <span className="text-sm font-medium text-[#bf4800] mb-2">New</span>
                )}
                <div className="relative w-full h-64 mb-6">
                  <Image
                    src={iphone.image}
                    alt={iphone.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                  {iphone.name}
                </h2>
                <p className="text-lg text-[#6e6e73] mb-4">
                  {iphone.tagline}
                </p>
                <p className="text-sm text-[#1d1d1f] mb-4">
                  {iphone.price}
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
          Which iPhone is right for you?
        </h2>
        <AppleLink href={localizedHref("/iphone/compare")}>Compare all iPhone models</AppleLink>
      </section>

      {/* Footer Note */}
      <section className="py-8 border-t border-[#d2d2d7]">
        <div className="apple-container">
          <p className="text-xs text-[#6e6e73]">
            * Pricing for iPhone includes a $30 carrier instant discount that requires activation with AT&T, T-Mobile, or Verizon. Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval.
          </p>
        </div>
      </section>
    </div>
  )
}
