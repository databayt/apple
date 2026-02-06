"use client"

import { HeroSection } from "@/components/template/hero-section"
import { ProductCard } from "@/components/atom/product-card"
import { PromoGrid } from "@/components/template/promo-tile"
import type { AirPodsContentProps } from "./types"

export function AirPodsContent({ dictionary, lang }: AirPodsContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="AirPods"
        subheadline="Magic you can icons."
        variant="light"
        size="medium"
        image={{
          src: "https://www.apple.com/v/airpods/t/images/overview/hero/airpods_702x702__chp4y8rk3ham_large_2x.jpg",
          alt: "AirPods lineup",
        }}
      />

      {/* Product Grid */}
      <PromoGrid className="px-2.5 mt-3">
        <ProductCard
          name="AirPods Pro 2"
          tagline="Hearing aids. Hearing test. Hearing protection."
          href={localizedHref("/airpods-pro")}
          image={{
            src: "https://www.apple.com/v/airpods/t/images/overview/select/airpods_pro_2__d8c3ywrvjieu_large_2x.png",
            alt: "AirPods Pro 2",
          }}
          primaryCTA={{ label: common?.learnMore || "Learn more", href: localizedHref("/airpods-pro") }}
          secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-airpods/airpods-pro-2") }}
          variant="light"
        />

        <ProductCard
          name="AirPods 4"
          tagline="Iconic. Now icons."
          href={localizedHref("/airpods-4")}
          image={{
            src: "https://www.apple.com/v/airpods/t/images/overview/select/airpods_4__e1hbhvhvcv2e_large_2x.png",
            alt: "AirPods 4",
          }}
          primaryCTA={{ label: common?.learnMore || "Learn more", href: localizedHref("/airpods-4") }}
          secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-airpods/airpods-4") }}
          variant="gray"
          isNew
        />

        <ProductCard
          name="AirPods Max"
          tagline="A icons icons sound."
          href={localizedHref("/airpods-max")}
          image={{
            src: "https://www.apple.com/v/airpods/t/images/overview/select/airpods_max__cjfxmwvpbmiu_large_2x.png",
            alt: "AirPods Max",
          }}
          primaryCTA={{ label: common?.learnMore || "Learn more", href: localizedHref("/airpods-max") }}
          secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-airpods/airpods-max") }}
          variant="light"
        />
      </PromoGrid>

      {/* Compare Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
          Which AirPods are right for you?
        </h2>
        <p className="text-lg text-[#6e6e73] mb-8">
          Compare all AirPods models and find your perfect sound.
        </p>
        <a
          href={localizedHref("/airpods/compare")}
          className="inline-flex items-center gap-1 text-[#0071e3] text-lg hover:underline"
        >
          Compare all AirPods models
        </a>
      </section>
    </div>
  )
}
