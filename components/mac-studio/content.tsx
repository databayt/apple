"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"

interface MacStudioContentProps {
  dictionary: Dictionary
}

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Options", value: "Apple M2 Max or M2 Ultra" },
      { label: "CPU", value: "Up to 24-core CPU" },
      { label: "GPU", value: "Up to 76-core GPU" },
      { label: "Memory bandwidth", value: "Up to 800GB/s" },
    ],
  },
  {
    title: "Memory & Storage",
    items: [
      { label: "Memory", value: "32GB to 192GB unified memory" },
      { label: "Storage", value: "512GB to 8TB SSD" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { label: "Front ports", value: "SD card slot, USB-C, USB-A" },
      { label: "Back ports", value: "Thunderbolt 4, USB-A, HDMI, Ethernet" },
      { label: "Wi-Fi", value: "Wi-Fi 6E" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Size", value: "7.7 x 7.7 x 3.7 inches" },
      { label: "Weight", value: "Starting at 5.9 pounds" },
      { label: "Display support", value: "Up to 8 displays" },
    ],
  },
]

const features = [
  {
    title: "M2 Max and M2 Ultra",
    description: "Breakthrough performance for the most demanding workflows.",
  },
  {
    title: "Up to 192GB memory",
    description: "Run massive projects with ease. Unified memory architecture scales with your needs.",
  },
  {
    title: "Pro connectivity",
    description: "Thunderbolt 4, USB-A, SD card, HDMI — everything you need.",
  },
  {
    title: "Ultra performance",
    description: "M2 Ultra delivers up to 24-core CPU and 76-core GPU power.",
  },
]

export function MacStudioContent({ dictionary }: MacStudioContentProps) {
  const t = dictionary.common

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Mac Studio"
        subheadline="Supercharged for pros."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/mac-studio/e/images/overview/hero/hero__e48fz9rj6jmu_large_2x.jpg",
          alt: "Mac Studio",
        }}
        primaryCTA={{ label: t.learnMore, href: "#features" }}
        secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/mac-studio" }}
      />

      <FeatureSection
        eyebrow="Performance"
        headline="Unprecedented power."
        description="Mac Studio packs astonishing performance into a compact form factor. M2 Max and M2 Ultra let you take on pro workflows that would challenge any other desktop."
        variant="light"
        image={{
          src: "https://www.apple.com/v/mac-studio/e/images/overview/chip/chip__dp0kmclnbk6i_large_2x.jpg",
          alt: "Mac Studio chip",
        }}
      />

      <FeatureSection
        eyebrow="Memory"
        headline="Memory to match."
        description="Configure up to 192GB of unified memory. Tackle massive 3D scenes, run multiple pro apps, and load giant audio libraries."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/mac-studio/e/images/overview/memory/memory__fwqxdxl4k1uu_large_2x.jpg",
          alt: "Mac Studio memory",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Connectivity"
        headline="All the ports you need."
        description="Connect to external displays, drives, cameras, and audio interfaces. Front and back ports for easy access to all your gear."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/mac-studio/e/images/overview/connectivity/connectivity__dv9a1rp8d9y6_large_2x.jpg",
          alt: "Mac Studio connectivity",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $1,999"
        priceNote="or $166.58/mo. for 12 mo."
        tradeIn="$100–$850"
        tradeInNote="with Apple Trade In"
        buyHref="/shop/buy-mac/mac-studio"
      />
    </div>
  )
}
