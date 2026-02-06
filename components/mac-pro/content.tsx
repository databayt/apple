"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"

interface MacProContentProps {
  dictionary: Dictionary
}

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "Apple M2 Ultra" },
      { label: "CPU", value: "24-core CPU" },
      { label: "GPU", value: "60-core or 76-core GPU" },
      { label: "Neural Engine", value: "32-core Neural Engine" },
      { label: "Memory bandwidth", value: "800GB/s" },
    ],
  },
  {
    title: "Memory & Storage",
    items: [
      { label: "Memory", value: "64GB, 128GB, or 192GB unified memory" },
      { label: "Storage", value: "1TB to 8TB SSD" },
    ],
  },
  {
    title: "Expansion",
    items: [
      { label: "PCIe slots", value: "7 PCIe slots" },
      { label: "Thunderbolt", value: "8 Thunderbolt 4 ports" },
      { label: "USB-A", value: "3 USB-A ports" },
      { label: "HDMI", value: "2 HDMI ports" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Form factor", value: "Tower or rack mount" },
      { label: "Weight", value: "37.2 pounds (tower)" },
      { label: "Display support", value: "Up to 8 displays" },
    ],
  },
]

const features = [
  {
    title: "M2 Ultra",
    description: "The ultimate Apple silicon. 24-core CPU. Up to 76-core GPU. Endless possibilities.",
  },
  {
    title: "PCIe expansion",
    description: "Seven PCIe slots for additional GPU power, storage, and I/O.",
  },
  {
    title: "192GB unified memory",
    description: "The most memory ever in a Mac. For the most demanding workflows.",
  },
  {
    title: "Tower or rack",
    description: "Choose the form factor that fits your setup.",
  },
]

export function MacProContent({ dictionary }: MacProContentProps) {
  const t = dictionary.common

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Mac Pro"
        subheadline="Built for pros."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/mac-pro/q/images/overview/hero/hero__fz9a7dv8dcia_large_2x.jpg",
          alt: "Mac Pro",
        }}
        primaryCTA={{ label: t.learnMore, href: "#features" }}
        secondaryCTA={{ label: t.buy, href: "/shop/buy-mac/mac-pro" }}
      />

      <FeatureSection
        eyebrow="Performance"
        headline="M2 Ultra. Ultra powerful."
        description="Mac Pro with M2 Ultra delivers extraordinary performance for the most demanding pro workflows. Render, compile, and transcode at unprecedented speeds."
        variant="light"
        image={{
          src: "https://www.apple.com/v/mac-pro/q/images/overview/chip/chip__fhxu6a7qlwyq_large_2x.jpg",
          alt: "Mac Pro M2 Ultra",
        }}
      />

      <FeatureSection
        eyebrow="Expansion"
        headline="Seven slots to expand."
        description="Mac Pro features PCIe expansion so you can configure your system for any workflow. Add more GPU power, storage, networking, and I/O."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/mac-pro/q/images/overview/expansion/expansion__czx9vvflnpci_large_2x.jpg",
          alt: "Mac Pro expansion",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Design"
        headline="Tower or rack. Your choice."
        description="The tower sits on your desk or floor. The rack-mount version fits standard server racks. Both deliver the same incredible performance."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/mac-pro/q/images/overview/design/design__gq4wz3p0bgui_large_2x.jpg",
          alt: "Mac Pro design",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $6,999"
        priceNote="or $583.25/mo. for 12 mo."
        buyHref="/shop/buy-mac/mac-pro"
      />
    </div>
  )
}
