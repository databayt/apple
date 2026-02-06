"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleArcadeContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "200+ games",
    description: "New games added regularly. Play on any Apple device.",
  },
  {
    title: "No ads or in-app purchases",
    description: "Just pure gaming. Pay one price, play all you want.",
  },
  {
    title: "Play offline",
    description: "Download games and play anywhere, even without internet.",
  },
  {
    title: "Family Sharing",
    description: "Share with up to 5 family members at no extra cost.",
  },
]

export function AppleArcadeContent({ dictionary, lang }: AppleArcadeContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Arcade"
        subheadline="Level up your gaming."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-arcade/l/images/overview/hero/hero__fvh4xvwc2j6q_large_2x.jpg",
          alt: "Apple Arcade",
        }}
        primaryCTA={{ label: "Try it free", href: localizedHref("/apple-arcade/try") }}
        secondaryCTA={{ label: "See all games", href: localizedHref("/apple-arcade/games") }}
      />

      <FeatureSection
        eyebrow="Games"
        headline="Hundreds of incredible games."
        description="From action and adventure to puzzles and sports, Apple Arcade has something for everyone. New games added regularly."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-arcade/l/images/overview/games/games__c78eakr8pxqa_large_2x.jpg",
          alt: "Apple Arcade games",
        }}
      />

      <FeatureSection
        eyebrow="Play Anywhere"
        headline="Your games. Any device."
        description="Play on iPhone, iPad, Mac, and Apple TV. Pick up where you left off on any device."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-arcade/l/images/overview/devices/devices__ei1cgdw0f5yq_large_2x.jpg",
          alt: "Apple Arcade devices",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Family Sharing"
        headline="Fun for the whole family."
        description="One subscription. Up to six people. Everyone gets their own profile with personalized recommendations."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-arcade/l/images/overview/family/family__c9vu6y2qd0y6_large_2x.jpg",
          alt: "Apple Arcade family sharing",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <BuyStrip
        price="$6.99/mo."
        priceNote="1 month free, then $6.99/mo."
        buyHref={localizedHref("/apple-arcade/try")}
      />
    </div>
  )
}
