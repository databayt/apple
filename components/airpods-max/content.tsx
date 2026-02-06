"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AirPodsMaxContentProps } from "./types"

const specs = [
  {
    title: "Audio",
    items: [
      { label: "Driver", value: "Apple-designed 40mm driver" },
      { label: "Chip", value: "H1 chip in each ear cup" },
      { label: "Spatial Audio", value: "Personalized Spatial Audio with dynamic head tracking" },
      { label: "Noise cancellation", value: "Active Noise Cancellation" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Headband", value: "Stainless steel, knit mesh canopy" },
      { label: "Ear cushions", value: "Memory foam with mesh" },
      { label: "Colors", value: "Midnight, Blue, Purple, Orange, Starlight" },
      { label: "Connector", value: "USB-C" },
    ],
  },
  {
    title: "Controls",
    items: [
      { label: "Digital Crown", value: "Volume, playback control, Siri" },
      { label: "Noise control button", value: "Switch between ANC and Transparency" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Listening time", value: "Up to 20 hours with ANC" },
      { label: "Fast charge", value: "5 min = 1.5 hours" },
      { label: "Smart Case", value: "Ultra-low-power mode" },
    ],
  },
]

const features = [
  {
    title: "High-fidelity audio",
    description: "40mm Apple-designed driver delivers rich, detailed sound.",
  },
  {
    title: "Active Noise Cancellation",
    description: "Industry-leading ANC blocks outside noise for immersive listening.",
  },
  {
    title: "Spatial Audio",
    description: "Personalized Spatial Audio creates an immersive surround experience.",
  },
  {
    title: "Premium comfort",
    description: "Memory foam cushions and knit mesh canopy for all-day comfort.",
  },
]

export function AirPodsMaxContent({ dictionary, lang }: AirPodsMaxContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="AirPods Max"
        subheadline="The ultimate listening experience."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/airpods-max/h/images/overview/hero/hero__f4wogeos8o2y_large_2x.jpg",
          alt: "AirPods Max",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/airpods-max") }}
      />

      <FeatureSection
        eyebrow="Sound"
        headline="High-fidelity sound."
        description="Custom 40mm driver designed for rich, detailed audio with ultra-low distortion. Hear every note, feel every beat."
        variant="light"
        image={{
          src: "https://www.apple.com/v/airpods-max/h/images/overview/audio/audio__caqn5l33x0ei_large_2x.jpg",
          alt: "AirPods Max sound quality",
        }}
      />

      <FeatureSection
        eyebrow="Active Noise Cancellation"
        headline="Escape into your music."
        description="Industry-leading Active Noise Cancellation lets you focus on what you're listening to. Transparency mode keeps you aware of your surroundings."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/airpods-max/h/images/overview/anc/anc__ezx9d1f3d1ye_large_2x.jpg",
          alt: "AirPods Max Active Noise Cancellation",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Design"
        headline="Beautifully designed. Exceptionally comfortable."
        description="The breathable knit mesh canopy distributes weight evenly. Memory foam ear cushions create an exceptional seal for immersive sound."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/airpods-max/h/images/overview/design/design__cqgjpuq0xk0m_large_2x.jpg",
          alt: "AirPods Max design",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip price="$549" buyHref={localizedHref("/shop/product/airpods-max")} />
    </div>
  )
}
