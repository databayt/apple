"use client"

import { HeroSection } from "@/components/template/hero-section"
import { ProductCard } from "@/components/atom/product-card"
import { PromoGrid } from "@/components/template/promo-tile"
import type { IPadContentProps } from "./types"

export function IPadContent({ dictionary, lang }: IPadContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="iPad"
        subheadline="Touch, draw, and type on one magical device."
        variant="light"
        size="medium"
        image={{
          src: "https://www.apple.com/v/ipad/home/cw/images/overview/hero/ipad_702x702__8ujzqplv9iyu_large_2x.jpg",
          alt: "iPad lineup",
        }}
      />

      {/* Product Grid */}
      <PromoGrid className="px-2.5 mt-3">
        <ProductCard
          name="iPad Pro"
          tagline="Thinpossible."
          href={localizedHref("/ipad-pro")}
          image={{
            src: "https://www.apple.com/v/ipad/home/cw/images/overview/select/ipad_pro__bptxqhi8kheq_large_2x.png",
            alt: "iPad Pro",
          }}
          primaryCTA={{ label: common?.learnMore || "Learn more", href: localizedHref("/ipad-pro") }}
          secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-ipad/ipad-pro") }}
          variant="dark"
          isNew
        />

        <ProductCard
          name="iPad Air"
          tagline="Two icons. Icons meet."
          href={localizedHref("/ipad-air")}
          image={{
            src: "https://www.apple.com/v/ipad/home/cw/images/overview/select/ipad_air__c3b1zo1p7lea_large_2x.png",
            alt: "iPad Air",
          }}
          primaryCTA={{ label: common?.learnMore || "Learn more", href: localizedHref("/ipad-air") }}
          secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-ipad/ipad-air") }}
          variant="light"
        />

        <ProductCard
          name="iPad"
          tagline="Delightfully capable. Surprisingly affordable."
          href={localizedHref("/ipad-10.9")}
          image={{
            src: "https://www.apple.com/v/ipad/home/cw/images/overview/select/ipad_702x702__8ujzqplv9iyu_large_2x.png",
            alt: "iPad",
          }}
          primaryCTA={{ label: common?.learnMore || "Learn more", href: localizedHref("/ipad-10.9") }}
          secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-ipad/ipad") }}
          variant="gray"
        />

        <ProductCard
          name="iPad mini"
          tagline="Serious power. Mini icons."
          href={localizedHref("/ipad-mini")}
          image={{
            src: "https://www.apple.com/v/ipad/home/cw/images/overview/select/ipad_mini__bk85cwgje67m_large_2x.png",
            alt: "iPad mini",
          }}
          primaryCTA={{ label: common?.learnMore || "Learn more", href: localizedHref("/ipad-mini") }}
          secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-ipad/ipad-mini") }}
          variant="light"
          isNew
        />
      </PromoGrid>

      {/* Accessories */}
      <section className="py-16 px-6">
        <div className="apple-container text-center">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
            Accessories
          </h2>
          <p className="text-lg text-[#6e6e73] mb-8">
            Explore keyboards, cases, covers, Apple Pencil, and more.
          </p>
          <a
            href={localizedHref("/shop/ipad/accessories")}
            className="inline-flex items-center gap-1 text-[#0071e3] text-lg hover:underline"
          >
            Shop iPad accessories
          </a>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-16 px-6 text-center bg-[#f5f5f7]">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
          Which iPad is right for you?
        </h2>
        <p className="text-lg text-[#6e6e73] mb-8">
          Compare all iPad models and find your perfect match.
        </p>
        <a
          href={localizedHref("/ipad/compare")}
          className="inline-flex items-center gap-1 text-[#0071e3] text-lg hover:underline"
        >
          Compare all iPad models
        </a>
      </section>
    </div>
  )
}
