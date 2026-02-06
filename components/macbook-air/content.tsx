"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"

interface MacBookAirContentProps {
  dictionary: Dictionary
}

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "Apple M4" },
      { label: "CPU", value: "10-core CPU" },
      { label: "GPU", value: "10-core GPU" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
    ],
  },
  {
    title: "Display",
    items: [
      { label: "Size", value: '13.6" or 15.3" Liquid Retina display' },
      { label: "Resolution", value: "2560x1664 or 2880x1864 pixels" },
      { label: "Brightness", value: "500 nits" },
      { label: "Color", value: "1 billion colors, Wide color (P3)" },
    ],
  },
  {
    title: "Memory & Storage",
    items: [
      { label: "Memory", value: "16GB or 24GB unified memory" },
      { label: "Storage", value: "256GB, 512GB, 1TB, or 2TB SSD" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Battery life", value: "Up to 18 hours" },
      { label: "Charging", value: "MagSafe 3, USB-C" },
      { label: "Fast charge", value: "Up to 50% in 30 minutes" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Weight", value: '2.7 lb (13") or 3.3 lb (15")' },
      { label: "Thickness", value: "0.44 inches" },
      { label: "Colors", value: "Midnight, Starlight, Space Gray, Silver" },
    ],
  },
]

const features = [
  {
    title: "Apple Intelligence",
    description:
      "Built for Apple Intelligence. Write, create images, and do more across your apps.",
  },
  {
    title: "M4 chip",
    description:
      "Incredible performance. Amazing efficiency. The heart of MacBook Air.",
  },
  {
    title: "Strikingly thin",
    description:
      "Just 0.44 inches thin. Take it anywhere. Do everything.",
  },
  {
    title: "18-hour battery",
    description:
      "Work all day on a single charge. MacBook Air keeps up with you.",
  },
]

export function MacBookAirContent({ dictionary }: MacBookAirContentProps) {
  const t = dictionary.common

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="MacBook Air"
        subheadline="Lean. Mean. M4 machine."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/macbook-air/t/images/overview/hero/hero_endframe__fm8pp8lh5gia_large_2x.jpg",
          alt: "MacBook Air",
        }}
        primaryCTA={{ label: t.learnMore, href: "#features" }}
        secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/macbook-air" }}
        isNew
      />

      {/* Apple Intelligence */}
      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="Great ideas on a roll."
        description="MacBook Air is built for Apple Intelligence. Summarize content, generate images, get writing help, and more — all without breaking a sweat."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/macbook-air/t/images/overview/apple-intelligence/apple_intelligence__fozr6yw62cea_large_2x.jpg",
          alt: "Apple Intelligence on MacBook Air",
        }}
      />

      {/* Design */}
      <FeatureSection
        eyebrow="Design"
        headline="Impossibly thin. Unbelievably powerful."
        description="At just 0.44 inches thin, MacBook Air is incredibly portable. Yet it delivers more performance than you'd ever expect."
        variant="light"
        image={{
          src: "https://www.apple.com/v/macbook-air/t/images/overview/design/design__c16gptqxqu4i_large_2x.jpg",
          alt: "MacBook Air design",
        }}
      />

      {/* M4 Chip */}
      <FeatureSection
        eyebrow="M4"
        headline="M4. Makes everything fly."
        description="With a powerful 10-core CPU and 10-core GPU, M4 delivers exceptional performance for everything you do. And it's remarkably efficient."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/macbook-air/t/images/overview/chip/chip__d8i0cwypcx9e_large_2x.jpg",
          alt: "M4 chip",
        }}
        reversed
      />

      {/* Display */}
      <FeatureSectionFullWidth
        eyebrow="Display"
        headline="Big, beautiful, and brilliant."
        description="Choose from 13.6-inch or 15.3-inch sizes, both with stunning Liquid Retina display. Over a billion colors and 500 nits of brightness."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/macbook-air/t/images/overview/display/display__ea8dh2rq65aq_large_2x.jpg",
          alt: "MacBook Air display",
        }}
      />

      {/* Battery */}
      <FeatureSection
        eyebrow="Battery"
        headline="Outlasts your longest days."
        description="Up to 18 hours of battery life means you can work, play, and create without constantly searching for an outlet."
        variant="light"
        image={{
          src: "https://www.apple.com/v/macbook-air/t/images/overview/battery/battery__d1xfqxqyi0q6_large_2x.jpg",
          alt: "MacBook Air battery life",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="gray" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price="From $999"
        priceNote="or $83.25/mo. for 12 mo."
        tradeIn="$180–$630"
        tradeInNote="with Apple Trade In"
        buyHref="/shop/buy-mac/macbook-air"
      />
    </div>
  )
}
