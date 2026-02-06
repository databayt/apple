"use client"

import { AppleLink } from "@/components/atom/apple-link"
import Image from "next/image"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface BuyWatchContentProps {
  dictionary: Dictionary
  lang: Locale
}

const watches = [
  {
    name: "Apple Watch Series 10",
    tagline: "Thinstant classic.",
    price: "From $399",
    image: "https://www.apple.com/v/apple-watch/bo/images/overview/select/product_se__fmuq8s5t0iie_xlarge_2x.png",
    href: "/shop/buy-watch/apple-watch-series-10",
    isNew: true,
  },
  {
    name: "Apple Watch Ultra 2",
    tagline: "Next level adventure.",
    price: "From $799",
    image: "https://www.apple.com/v/apple-watch/bo/images/overview/select/product_ultra__bia7ti6yc6um_xlarge_2x.png",
    href: "/shop/buy-watch/apple-watch-ultra-2",
    isNew: true,
  },
  {
    name: "Apple Watch SE",
    tagline: "A great deal to love.",
    price: "From $249",
    image: "https://www.apple.com/v/apple-watch/bo/images/overview/select/product_se__fmuq8s5t0iie_xlarge_2x.png",
    href: "/apple-watch-se",
    isNew: false,
  },
  {
    name: "Apple Watch Hermes",
    tagline: "Style meets function.",
    price: "From $1,249",
    image: "https://www.apple.com/v/apple-watch/bo/images/overview/select/product_hermes__ddwm24sp9ham_xlarge_2x.png",
    href: "/apple-watch-hermes",
    isNew: false,
  },
]

export function BuyWatchContent({ dictionary, lang }: BuyWatchContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Shop Apple Watch
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto px-4">
          Explore the Apple Watch lineup. Find the one that&apos;s right for you.
        </p>
      </section>

      {/* Trade-in Banner */}
      <section className="py-6 border-b border-[#d2d2d7]">
        <div className="apple-container text-center">
          <p className="text-[#1d1d1f]">
            <span className="font-semibold">Get $30-$150 in credit when you trade in Apple Watch.</span>
            {" "}
            <AppleLink href={localizedHref("/shop/trade-in")}>See what your device is worth</AppleLink>
          </p>
        </div>
      </section>

      {/* Watch Grid */}
      <section className="py-16">
        <div className="apple-container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {watches.map((watch) => (
              <a
                key={watch.name}
                href={localizedHref(watch.href)}
                className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#d2d2d7] hover:shadow-xl transition-shadow group"
              >
                {watch.isNew && (
                  <span className="text-sm font-medium text-[#bf4800] mb-2">New</span>
                )}
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={watch.image}
                    alt={watch.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#1d1d1f] mb-1 text-center">
                  {watch.name}
                </h2>
                <p className="text-lg text-[#6e6e73] mb-4">
                  {watch.tagline}
                </p>
                <p className="text-sm text-[#1d1d1f] mb-4">
                  {watch.price}
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
          Which Apple Watch is right for you?
        </h2>
        <AppleLink href={localizedHref("/watch/compare")}>Compare all Apple Watch models</AppleLink>
      </section>

      {/* Bands */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Apple Watch Bands
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            Explore Sport Band, Solo Loop, Braided Solo Loop, and more.
          </p>
          <AppleLink href={localizedHref("/shop/accessories")}>Shop bands</AppleLink>
        </div>
      </section>

      {/* watchOS */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            watchOS 11
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            Training Load, Vitals app, and more ways to stay healthy.
          </p>
          <AppleLink href={localizedHref("/watchos")}>Learn more about watchOS</AppleLink>
        </div>
      </section>
    </div>
  )
}
