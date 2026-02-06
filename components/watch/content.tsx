"use client"

import { HeroSection } from "@/components/template/hero-section"
import { ProductCard } from "@/components/atom/product-card"
import { PromoGrid } from "@/components/template/promo-tile"
import type { WatchContentProps } from "./types"

export function WatchContent({ dictionary, lang }: WatchContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="Apple Watch"
        subheadline="The ultimate device for a healthy life."
        variant="dark"
        size="medium"
        image={{
          src: "https://www.apple.com/v/watch/bp/images/overview/hero/watch_702x702__b2qghe7f24hy_large_2x.jpg",
          alt: "Apple Watch lineup",
        }}
      />

      {/* Product Grid */}
      <PromoGrid className="px-2.5 mt-3">
        <ProductCard
          name="Apple Watch Series 10"
          tagline="Thinstant classic."
          href={localizedHref("/apple-watch-series-10")}
          image={{
            src: "https://www.apple.com/v/watch/bp/images/overview/select/watch_series_10__fk98n5dlbnm2_large_2x.png",
            alt: "Apple Watch Series 10",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-watch-series-10") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch") }}
          variant="light"
          isNew
        />

        <ProductCard
          name="Apple Watch Ultra 2"
          tagline="Next-level adventure."
          href={localizedHref("/apple-watch-ultra-2")}
          image={{
            src: "https://www.apple.com/v/watch/bp/images/overview/select/watch_ultra_2__d9w63w1ct3yq_large_2x.png",
            alt: "Apple Watch Ultra 2",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-watch-ultra-2") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-ultra") }}
          variant="dark"
        />

        <ProductCard
          name="Apple Watch SE"
          tagline="A great deal to love."
          href={localizedHref("/apple-watch-se")}
          image={{
            src: "https://www.apple.com/v/watch/bp/images/overview/select/watch_se__d8u06kgdjdea_large_2x.png",
            alt: "Apple Watch SE",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-watch-se") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-se") }}
          variant="gray"
        />

        <ProductCard
          name="Apple Watch Hermes"
          tagline="A icons new partnership."
          href={localizedHref("/apple-watch-hermes")}
          image={{
            src: "https://www.apple.com/v/watch/bp/images/overview/select/watch_hermes__b3pxu72ovoyu_large_2x.png",
            alt: "Apple Watch Hermes",
          }}
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-watch-hermes") }}
          secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-hermes") }}
          variant="light"
        />
      </PromoGrid>

      {/* Compare Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
          Which Apple Watch is right for you?
        </h2>
        <p className="text-lg text-[#6e6e73] mb-8">
          Compare all Apple Watch models and find the one that fits your life.
        </p>
        <a
          href={localizedHref("/watch/compare")}
          className="inline-flex items-center gap-1 text-[#0071e3] text-lg hover:underline"
        >
          Compare all Apple Watch models
        </a>
      </section>
    </div>
  )
}
