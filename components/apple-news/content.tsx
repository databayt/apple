"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleNewsContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "Magazines",
    description: "Access hundreds of magazines on any topic that interests you.",
  },
  {
    title: "Newspapers",
    description: "The Wall Street Journal, Los Angeles Times, and more.",
  },
  {
    title: "Audio stories",
    description: "Listen to narrated stories from top publications.",
  },
  {
    title: "Puzzles",
    description: "Daily crossword puzzles and more.",
  },
]

export function AppleNewsContent({ dictionary, lang }: AppleNewsContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple News+"
        subheadline="Great stories. Great publications."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-news-plus/e/images/overview/hero/hero__bjlfrwxw88h6_large_2x.jpg",
          alt: "Apple News+",
        }}
        primaryCTA={{ label: "Try it free", href: localizedHref("/apple-news/try") }}
        secondaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Magazines"
        headline="All your favorites. One subscription."
        description="Get access to hundreds of magazines — from news and politics to fashion and lifestyle. Beautifully formatted for your device."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-news-plus/e/images/overview/magazines/magazines__cg5ooqfkpdem_large_2x.jpg",
          alt: "Apple News+ magazines",
        }}
      />

      <FeatureSection
        eyebrow="Newspapers"
        headline="Stay informed."
        description="Read The Wall Street Journal, Los Angeles Times, and other leading newspapers. All included with your subscription."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-news-plus/e/images/overview/newspapers/newspapers__cdqfc5szcgae_large_2x.jpg",
          alt: "Apple News+ newspapers",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Audio"
        headline="Listen to the news."
        description="Hear audio versions of your favorite stories. Perfect for your commute or workout."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-news-plus/e/images/overview/audio/audio__d0s1xwqsn0eu_large_2x.jpg",
          alt: "Apple News+ audio",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <BuyStrip
        price="$12.99/mo."
        priceNote="1 month free, then $12.99/mo."
        buyHref={localizedHref("/apple-news/try")}
      />
    </div>
  )
}
