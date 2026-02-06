"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPadMiniContentProps } from "./types"

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "Apple A17 Pro" },
      { label: "CPU", value: "6-core CPU" },
      { label: "GPU", value: "5-core GPU" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
    ],
  },
  {
    title: "Display",
    items: [
      { label: "Size", value: '8.3" Liquid Retina display' },
      { label: "Resolution", value: "2266x1488 pixels" },
      { label: "Peak brightness", value: "500 nits" },
      { label: "P3 wide color", value: "Yes" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Back", value: "12MP Wide camera with Smart HDR 4" },
      { label: "Front", value: "12MP Ultra Wide with Center Stage" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Connector", value: "USB-C" },
      { label: "Touch ID", value: "Yes (top button)" },
      { label: "Apple Pencil", value: "Apple Pencil Pro, Apple Pencil (USB-C)" },
      { label: "Colors", value: "Space Gray, Blue, Purple, Starlight" },
    ],
  },
]

const features = [
  {
    title: "A17 Pro chip",
    description: "Serious performance in a small package. Apple Intelligence ready.",
  },
  {
    title: "8.3-inch display",
    description: "Compact yet spacious. Perfect for one-handed use.",
  },
  {
    title: "Apple Pencil Pro",
    description: "Supports Apple Pencil Pro for precision creative work.",
  },
  {
    title: "Portable power",
    description: "Light enough to take anywhere. Powerful enough to do anything.",
  },
]

export function IPadMiniContent({ dictionary, lang }: IPadMiniContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iPad mini"
        subheadline="Big time in mini size."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/ipad-mini/r/images/overview/hero/hero_endframe__b86il7qzolci_large_2x.jpg",
          alt: "iPad mini",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-ipad/ipad-mini") }}
        isNew
      />

      <FeatureSection
        eyebrow="A17 Pro"
        headline="Pro power fits right in your hand."
        description="A17 Pro brings incredible performance to iPad mini. Gaming, creative apps, and demanding tasks all run beautifully."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/ipad-mini/r/images/overview/chip/chip__fxfz1l9v1y2u_large_2x.jpg",
          alt: "A17 Pro chip in iPad mini",
        }}
      />

      <FeatureSection
        eyebrow="Design"
        headline="Small wonder."
        description="iPad mini delivers the full iPad experience in our most portable size. Take it anywhere and do everything."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ipad-mini/r/images/overview/design/design__byvyxgqy7p2q_large_2x.jpg",
          alt: "iPad mini design",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Apple Pencil Pro"
        headline="Creative partner."
        description="iPad mini supports Apple Pencil Pro, bringing squeeze, barrel roll, and haptic feedback to your creative workflow."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/ipad-mini/r/images/overview/pencil/pencil__b2fo6h7yxvyq_large_2x.jpg",
          alt: "Apple Pencil Pro with iPad mini",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $499"
        priceNote="or $41.58/mo. for 12 mo."
        tradeIn="$60-$250"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-ipad/ipad-mini")}
      />
    </div>
  )
}
