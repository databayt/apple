"use client"

import { HeroSection } from "@/components/template/hero-section"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AccessoriesContentProps {
  dictionary: Dictionary
  lang: Locale
}

export function AccessoriesContent({ dictionary, lang }: AccessoriesContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  const categories = [
    { name: "Mac", href: localizedHref("/shop/mac/accessories") },
    { name: "iPad", href: localizedHref("/shop/ipad/accessories") },
    { name: "iPhone", href: localizedHref("/shop/iphone/accessories") },
    { name: "Watch", href: localizedHref("/shop/watch/accessories") },
    { name: "AirPods", href: localizedHref("/shop/accessories/all/airpods") },
    { name: "TV & Home", href: localizedHref("/shop/smart-home/accessories") },
    { name: "AirTag", href: localizedHref("/airtag") },
    { name: "Made by Apple", href: localizedHref("/shop/accessories/all/made-by-apple") },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="Accessories"
        subheadline="Icons icons icons icons."
        variant="light"
        size="medium"
        image={{
          src: "https://www.apple.com/v/shop/home/bb/images/heroes/accessories/hero_accessories__ejxncd1p3l2a_large_2x.jpg",
          alt: "Apple Accessories",
        }}
      />

      {/* Categories */}
      <section className="py-16">
        <div className="apple-container">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a
                key={category.href}
                href={category.href}
                className="flex flex-col items-center p-6 bg-[#f5f5f7] rounded-2xl hover:bg-[#e8e8ed] transition-colors"
              >
                <div className="w-24 h-24 bg-white rounded-full mb-4" />
                <span className="text-lg font-semibold text-[#1d1d1f]">
                  {category.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AirTag */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
            AirTag
          </h2>
          <p className="text-xl text-[#6e6e73] mb-6 max-w-xl mx-auto">
            Lose your knack for losing things.
          </p>
          <div className="flex items-center justify-center gap-4">
            <AppleLink href={localizedHref("/airtag")}>{common?.learnMore || "Learn more"}</AppleLink>
            <AppleLink href={localizedHref("/shop/buy-airtag/airtag")}>{common?.buy || "Buy"}</AppleLink>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="apple-container text-center">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
            Explore all accessories.
          </h2>
          <AppleLink href={localizedHref("/shop/accessories/all")} variant="large">
            Shop all accessories
          </AppleLink>
        </div>
      </section>
    </div>
  )
}
