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

interface MacBookProContentProps {
  dictionary: Dictionary
}

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Options", value: "M4, M4 Pro, or M4 Max" },
      { label: "CPU", value: "Up to 16-core CPU" },
      { label: "GPU", value: "Up to 40-core GPU" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
      { label: "Memory bandwidth", value: "Up to 546GB/s" },
    ],
  },
  {
    title: "Display",
    items: [
      { label: "Size", value: '14.2" or 16.2" Liquid Retina XDR display' },
      { label: "Resolution", value: "3024x1964 or 3456x2234 pixels" },
      { label: "ProMotion", value: "Up to 120Hz adaptive refresh rate" },
      { label: "Peak brightness", value: "1600 nits (HDR), 1000 nits (SDR)" },
    ],
  },
  {
    title: "Memory & Storage",
    items: [
      { label: "Memory", value: "16GB, 24GB, 36GB, 48GB, 64GB, or 128GB" },
      { label: "Storage", value: "512GB, 1TB, 2TB, 4TB, or 8TB SSD" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Battery life", value: "Up to 24 hours" },
      { label: "Charging", value: "MagSafe 3, USB-C" },
      { label: "Fast charge", value: "Up to 50% in 30 minutes" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { label: "Ports", value: "HDMI, SDXC, USB-C/Thunderbolt, MagSafe" },
      { label: "Wi-Fi", value: "Wi-Fi 6E (802.11ax)" },
      { label: "Bluetooth", value: "Bluetooth 5.3" },
    ],
  },
]

const features = [
  {
    title: "Apple Intelligence",
    description:
      "Built for Apple Intelligence. Write, summarize, create images, and do more across apps.",
  },
  {
    title: "M4 family chips",
    description:
      "Choose M4, M4 Pro, or M4 Max. Incredible performance and efficiency for any workflow.",
  },
  {
    title: "Liquid Retina XDR",
    description:
      "Extreme Dynamic Range with ProMotion. See your work in stunning clarity.",
  },
  {
    title: "All-day battery",
    description:
      "Up to 24 hours of battery life. The longest ever in a Mac.",
  },
]

export function MacBookProContent({ dictionary }: MacBookProContentProps) {
  const t = dictionary.common

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="MacBook Pro"
        subheadline="Mind-blowing. Head-turning."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/macbook-pro/al/images/overview/hero/hero_endframe__e7kn13msi4ie_large_2x.jpg",
          alt: "MacBook Pro",
        }}
        primaryCTA={{ label: t.learnMore, href: "#features" }}
        secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/macbook-pro" }}
        isNew
      />

      {/* Apple Intelligence */}
      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="Built for Apple Intelligence."
        description="MacBook Pro makes it easy to work with Apple Intelligence features across your favorite apps. Write, summarize, create images, and more."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/macbook-pro/al/images/overview/apple-intelligence/apple_intelligence__grkjm4v6ceai_large_2x.jpg",
          alt: "Apple Intelligence on MacBook Pro",
        }}
      />

      {/* M4 Chips */}
      <FeatureSection
        eyebrow="M4 Family"
        headline="Three chips. Zero compromises."
        description="M4, M4 Pro, and M4 Max push the limits of what's possible. Breakthrough performance for the most demanding workflows."
        variant="light"
        image={{
          src: "https://www.apple.com/v/macbook-pro/al/images/overview/chip/chip__e38g8evhtsyq_large_2x.jpg",
          alt: "M4 chip family",
        }}
      />

      {/* Display */}
      <FeatureSectionFullWidth
        eyebrow="Display"
        headline="A display that speaks volumes."
        description="Liquid Retina XDR display with extreme dynamic range, incredible contrast, and brilliant colors. See everything in a whole new light."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/macbook-pro/al/images/overview/display/display__cjdpe1h5y0ya_large_2x.jpg",
          alt: "MacBook Pro display",
        }}
      />

      {/* Performance */}
      <FeatureSection
        eyebrow="Performance"
        headline="Pros only need apply."
        description="Whether you're rendering complex 3D scenes, editing 8K video, or training ML models, MacBook Pro delivers the power you need."
        variant="light"
        image={{
          src: "https://www.apple.com/v/macbook-pro/al/images/overview/performance/performance__qb5q4z84mmk2_large_2x.jpg",
          alt: "MacBook Pro performance",
        }}
        reversed
      />

      {/* Battery */}
      <FeatureSection
        eyebrow="Battery"
        headline="Go all day. Then keep going."
        description="Up to 24 hours of battery life — the longest ever in a Mac. Work wherever your ideas take you."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/macbook-pro/al/images/overview/battery/battery__fdx8to5r3wsy_large_2x.jpg",
          alt: "MacBook Pro battery",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="light" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price="From $1,599"
        priceNote="or $133.25/mo. for 12 mo."
        tradeIn="$180–$1,050"
        tradeInNote="with Apple Trade In"
        buyHref="/shop/buy-mac/macbook-pro"
      />
    </div>
  )
}
