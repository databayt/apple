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

interface MacMiniContentProps {
  dictionary: Dictionary
}

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Options", value: "Apple M4 or M4 Pro" },
      { label: "M4 CPU", value: "10-core CPU" },
      { label: "M4 Pro CPU", value: "14-core CPU" },
      { label: "GPU", value: "Up to 20-core GPU" },
    ],
  },
  {
    title: "Memory & Storage",
    items: [
      { label: "Memory", value: "16GB, 24GB, 32GB, 48GB, or 64GB" },
      { label: "Storage", value: "256GB to 8TB SSD" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { label: "Front ports", value: "USB-C, headphone jack" },
      { label: "Back ports", value: "HDMI, Thunderbolt, Ethernet" },
      { label: "Wi-Fi", value: "Wi-Fi 6E" },
      { label: "Bluetooth", value: "Bluetooth 5.3" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Size", value: "5 x 5 x 2 inches" },
      { label: "Weight", value: "Starting at 1.4 pounds" },
      { label: "Display support", value: "Up to three displays" },
    ],
  },
]

const features = [
  {
    title: "M4 and M4 Pro",
    description: "Choose the chip that fits your workflow. Both built for Apple Intelligence.",
  },
  {
    title: "Incredibly small",
    description: "Fits in the palm of your hand. Delivers desktop-class performance.",
  },
  {
    title: "Fully connected",
    description: "Front and back ports for all your peripherals and displays.",
  },
  {
    title: "Starting at $599",
    description: "More power for less than ever. The most affordable Mac mini yet.",
  },
]

export function MacMiniContent({ dictionary }: MacMiniContentProps) {
  const t = dictionary.common

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Mac mini"
        subheadline="More muscle. More hustle."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/mac-mini/s/images/overview/hero/hero_endframe__cpqncjv8qb76_large_2x.jpg",
          alt: "Mac mini",
        }}
        primaryCTA={{ label: t.learnMore, href: "#features" }}
        secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/mac-mini" }}
        isNew
      />

      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="Small wonder. Big intelligence."
        description="Mac mini is built for Apple Intelligence. Summarize, write, create — all powered by the most advanced AI capabilities."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/mac-mini/s/images/overview/apple-intelligence/apple_intelligence__cnhv0kqd3kq6_large_2x.jpg",
          alt: "Apple Intelligence on Mac mini",
        }}
      />

      <FeatureSection
        eyebrow="Design"
        headline="Small is the new powerful."
        description="At just 5 inches square and 2 inches tall, Mac mini fits almost anywhere. It's the smallest Mac desktop ever."
        variant="light"
        image={{
          src: "https://www.apple.com/v/mac-mini/s/images/overview/design/design__cq8xke9vn1wi_large_2x.jpg",
          alt: "Mac mini design",
        }}
      />

      <FeatureSection
        eyebrow="Performance"
        headline="Compact body. Monster performance."
        description="M4 and M4 Pro deliver incredible performance for demanding workflows. From coding to content creation, Mac mini handles it all."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/mac-mini/s/images/overview/performance/performance__crihoxabjvyq_large_2x.jpg",
          alt: "Mac mini performance",
        }}
        reversed
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $599"
        priceNote="or $49.91/mo. for 12 mo."
        tradeIn="$50–$250"
        tradeInNote="with Apple Trade In"
        buyHref="/shop/buy-mac/mac-mini"
      />
    </div>
  )
}
