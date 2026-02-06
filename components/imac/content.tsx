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

interface IMacContentProps {
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
      { label: "Size", value: '24-inch 4.5K Retina display' },
      { label: "Resolution", value: "4480x2520 pixels" },
      { label: "Brightness", value: "500 nits" },
      { label: "Color", value: "1 billion colors, Wide color (P3)" },
    ],
  },
  {
    title: "Memory & Storage",
    items: [
      { label: "Memory", value: "16GB, 24GB, or 32GB unified memory" },
      { label: "Storage", value: "256GB, 512GB, 1TB, or 2TB SSD" },
    ],
  },
  {
    title: "Camera & Audio",
    items: [
      { label: "Camera", value: "12MP Center Stage camera" },
      { label: "Audio", value: "Six-speaker sound system with force-cancelling woofers" },
      { label: "Microphones", value: "Studio-quality three-mic array" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { label: "Ports", value: "USB-C, Thunderbolt 4, Gigabit Ethernet" },
      { label: "Wi-Fi", value: "Wi-Fi 6E" },
      { label: "Bluetooth", value: "Bluetooth 5.3" },
    ],
  },
]

const features = [
  {
    title: "M4 chip",
    description: "Powerful performance for everything you do. Built for Apple Intelligence.",
  },
  {
    title: "4.5K Retina display",
    description: "Over 11 million pixels of stunning color and detail.",
  },
  {
    title: "Center Stage camera",
    description: "12MP camera that automatically keeps you in frame.",
  },
  {
    title: "Seven vibrant colors",
    description: "Choose the color that matches your style.",
  },
]

export function IMacContent({ dictionary }: IMacContentProps) {
  const t = dictionary.common

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iMac"
        subheadline="Hello, stunning."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/imac/s/images/overview/hero/hero_endframe__ff26tmgvcoie_large_2x.jpg",
          alt: "iMac",
        }}
        primaryCTA={{ label: t.learnMore, href: "#features" }}
        secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/imac" }}
        isNew
      />

      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="AI meets eye candy."
        description="iMac is built for Apple Intelligence. Write, summarize, create images, and more — all with incredible ease."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/imac/s/images/overview/apple-intelligence/apple_intelligence__etpmhdvhm4q6_large_2x.jpg",
          alt: "Apple Intelligence on iMac",
        }}
      />

      <FeatureSection
        eyebrow="Design"
        headline="Color your workflow."
        description="iMac comes in seven stunning colors to match any workspace. Its remarkably thin design looks great from every angle."
        variant="light"
        image={{
          src: "https://www.apple.com/v/imac/s/images/overview/design/design__ck4xkt2iprmi_large_2x.jpg",
          alt: "iMac design",
        }}
      />

      <FeatureSection
        eyebrow="M4"
        headline="Performance that pops."
        description="M4 delivers incredible performance with a 10-core CPU and 10-core GPU. Handle demanding workflows with ease."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/imac/s/images/overview/chip/chip__e38g8evhtsyq_large_2x.jpg",
          alt: "M4 chip in iMac",
        }}
        reversed
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $1,299"
        priceNote="or $108.25/mo. for 12 mo."
        tradeIn="$180–$450"
        tradeInNote="with Apple Trade In"
        buyHref="/shop/buy-mac/imac"
      />
    </div>
  )
}
