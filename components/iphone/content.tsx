"use client"

import { HeroSection } from "@/components/template/hero-section"
import { ProductCard } from "@/components/atom/product-card"
import { PromoGrid } from "@/components/template/promo-tile"
import type { IPhoneContentProps } from "./types"

export function IPhoneContent({ dictionary, lang }: IPhoneContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="iPhone"
        subheadline="Designed to be loved."
        variant="light"
        size="medium"
        image={{
          src: "https://www.apple.com/v/iphone/home/br/images/overview/hero/iphone_702x702__e84o3rz2f9yu_large_2x.jpg",
          alt: "iPhone lineup",
        }}
      />

      {/* Product Grid */}
      <PromoGrid className="px-2.5 mt-3">
        <ProductCard
          name="iPhone 16 Pro"
          tagline="Hello, Apple Intelligence."
          href={localizedHref("/iphone-16-pro")}
          image={{
            src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_16_pro__erw9alves2qa_large_2x.png",
            alt: "iPhone 16 Pro",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/iphone-16-pro") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-16-pro") }}
          variant="dark"
          isNew
        />

        <ProductCard
          name="iPhone 16"
          tagline="A total powerhouse."
          href={localizedHref("/iphone-16")}
          image={{
            src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_16__cq8hf0csgr6a_large_2x.png",
            alt: "iPhone 16",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/iphone-16") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-16") }}
          variant="light"
          isNew
        />

        <ProductCard
          name="iPhone 16e"
          tagline="A great deal more for a great deal less."
          href={localizedHref("/iphone-16e")}
          image={{
            src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_16e__x6wle8mq3xcm_large_2x.png",
            alt: "iPhone 16e",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/iphone-16e") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-16e") }}
          variant="gray"
          isNew
        />

        <ProductCard
          name="iPhone 15"
          tagline="As icons as icons get."
          href={localizedHref("/iphone-15")}
          image={{
            src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_15__fm70v4vlj7ua_large_2x.png",
            alt: "iPhone 15",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/iphone-15") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-15") }}
          variant="light"
        />
      </PromoGrid>

      {/* Compare Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
          Which iPhone is right for you?
        </h2>
        <p className="text-lg text-[#6e6e73] mb-8">
          Compare all iPhone models and find your perfect match.
        </p>
        <a
          href={localizedHref("/iphone/compare")}
          className="inline-flex items-center gap-1 text-[#0071e3] text-lg hover:underline"
        >
          Compare all iPhone models
        </a>
      </section>
    </div>
  )
}
