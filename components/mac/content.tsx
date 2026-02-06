"use client"

import { HeroSection } from "@/components/template/hero-section"
import { ProductCard } from "@/components/atom/product-card"
import { PromoGrid } from "@/components/template/promo-tile"
import type { Dictionary } from "@/components/local/dictionaries"

interface MacContentProps {
  dictionary: Dictionary
}

export function MacContent({ dictionary }: MacContentProps) {
  const t = dictionary.common

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="Mac"
        subheadline="If you can dream it, Mac can do it."
        variant="dark"
        size="medium"
        image={{
          src: "https://www.apple.com/v/mac/home/cj/images/overview/hero/mac_702x702__dn3mmwvndfm2_large_2x.jpg",
          alt: "Mac lineup",
        }}
      />

      {/* Product Grid */}
      <PromoGrid className="px-2.5 mt-3">
        <ProductCard
          name="MacBook Pro"
          tagline="Mind-blowing. Head-turning."
          href="/macbook-pro"
          image={{
            src: "https://www.apple.com/v/mac/home/cj/images/overview/select/macbook_pro__d0e4gaatmhme_large_2x.png",
            alt: "MacBook Pro",
          }}
          primaryCTA={{ label: t.learnMore, href: "/macbook-pro" }}
          secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/macbook-pro" }}
          variant="light"
          isNew
        />

        <ProductCard
          name="MacBook Air"
          tagline="Designed to go places."
          href="/macbook-air"
          image={{
            src: "https://www.apple.com/v/mac/home/cj/images/overview/select/macbook_air__erymnag3xgcy_large_2x.png",
            alt: "MacBook Air",
          }}
          primaryCTA={{ label: t.learnMore, href: "/macbook-air" }}
          secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/macbook-air" }}
          variant="light"
        />

        <ProductCard
          name="iMac"
          tagline="Colorful. Powerful. Wonderful."
          href="/imac"
          image={{
            src: "https://www.apple.com/v/mac/home/cj/images/overview/select/imac__bf7hcn7mtxqq_large_2x.png",
            alt: "iMac",
          }}
          primaryCTA={{ label: t.learnMore, href: "/imac" }}
          secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/imac" }}
          variant="gray"
        />

        <ProductCard
          name="Mac mini"
          tagline="More muscle. More hustle."
          href="/mac-mini"
          image={{
            src: "https://www.apple.com/v/mac/home/cj/images/overview/select/mac_mini__c2zvl4f9em0y_large_2x.png",
            alt: "Mac mini",
          }}
          primaryCTA={{ label: t.learnMore, href: "/mac-mini" }}
          secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/mac-mini" }}
          variant="light"
          isNew
        />

        <ProductCard
          name="Mac Studio"
          tagline="Supercharged for pros."
          href="/mac-studio"
          image={{
            src: "https://www.apple.com/v/mac/home/cj/images/overview/select/mac_studio__c7cs7sjwlueu_large_2x.png",
            alt: "Mac Studio",
          }}
          primaryCTA={{ label: t.learnMore, href: "/mac-studio" }}
          secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/mac-studio" }}
          variant="light"
        />

        <ProductCard
          name="Mac Pro"
          tagline="Unprecedented performance for the most demanding workflows."
          href="/mac-pro"
          image={{
            src: "https://www.apple.com/v/mac/home/cj/images/overview/select/mac_pro__cqdh6s16adzm_large_2x.png",
            alt: "Mac Pro",
          }}
          primaryCTA={{ label: t.learnMore, href: "/mac-pro" }}
          secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/mac-pro" }}
          variant="dark"
        />
      </PromoGrid>

      {/* Compare Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
          Which Mac is right for you?
        </h2>
        <p className="text-lg text-[#6e6e73] mb-8">
          Compare all Mac models and find the one that's perfect for you.
        </p>
        <a
          href="/mac/compare"
          className="inline-flex items-center gap-1 text-[#0071e3] text-lg hover:underline"
        >
          Compare all Mac models
        </a>
      </section>
    </div>
  )
}
