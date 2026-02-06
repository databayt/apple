"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AppleWatchSEContentProps } from "./types"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Sizes", value: "40mm or 44mm" },
      { label: "Display", value: "Retina LTPO OLED display" },
      { label: "Brightness", value: "Up to 1000 nits" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Case material", value: "100% recycled aluminum" },
      { label: "Water resistance", value: "50 meters" },
      { label: "Colors", value: "Midnight, Starlight, Silver" },
    ],
  },
  {
    title: "Health & Safety",
    items: [
      { label: "Heart", value: "Heart rate notifications, irregular rhythm" },
      { label: "Fall Detection", value: "Yes" },
      { label: "Crash Detection", value: "Yes" },
      { label: "Emergency SOS", value: "Yes" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Battery life", value: "Up to 18 hours" },
      { label: "Fast charge", value: "80% in about 60 minutes" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "S8 SiP with 64-bit dual-core processor" },
    ],
  },
]

const features = [
  {
    title: "Activity tracking",
    description: "Track workouts, close your rings, and stay motivated.",
  },
  {
    title: "Safety features",
    description: "Fall Detection, Crash Detection, and Emergency SOS built in.",
  },
  {
    title: "Family Setup",
    description: "Pair an Apple Watch for family members who don't have an iPhone.",
  },
  {
    title: "Great value",
    description: "All the essential features you want. At a price you'll love.",
  },
]

export function AppleWatchSEContent({ dictionary, lang }: AppleWatchSEContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Watch SE"
        subheadline="A great deal to love."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-watch-se/n/images/overview/hero/hero__em6jzp2lsy6a_large_2x.jpg",
          alt: "Apple Watch SE",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-se") }}
      />

      <FeatureSection
        eyebrow="Fitness"
        headline="More ways to keep moving."
        description="Track a variety of workouts. Close your Activity rings. Compete with friends. Apple Watch SE has what you need to stay motivated."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-watch-se/n/images/overview/fitness/fitness__bz9vpkdvfceu_large_2x.jpg",
          alt: "Apple Watch SE fitness",
        }}
      />

      <FeatureSection
        eyebrow="Safety"
        headline="Safety on your side."
        description="Fall Detection, Crash Detection, and Emergency SOS help keep you safe. Get help when you need it most."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-watch-se/n/images/overview/safety/safety__cp2i3a5ybmgi_large_2x.jpg",
          alt: "Apple Watch SE safety",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Family Setup"
        headline="Connection without an iPhone."
        description="Family Setup lets you pair an Apple Watch for a family member who doesn't have their own iPhone. Stay connected with calls, messages, and location sharing."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-watch-se/n/images/overview/family/family__e1k05zymb82u_large_2x.jpg",
          alt: "Apple Watch SE Family Setup",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $249"
        priceNote="or $20.75/mo. for 12 mo."
        tradeIn="$30-$100"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-watch/apple-watch-se")}
      />
    </div>
  )
}
