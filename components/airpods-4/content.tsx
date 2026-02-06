"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AirPods4ContentProps } from "./types"

const specs = [
  {
    title: "Audio",
    items: [
      { label: "Chip", value: "H2 chip" },
      { label: "Spatial Audio", value: "Personalized Spatial Audio with dynamic head tracking" },
      { label: "Adaptive EQ", value: "Yes" },
      { label: "Voice Isolation", value: "Yes" },
    ],
  },
  {
    title: "Active Noise Cancellation (ANC model)",
    items: [
      { label: "ANC", value: "Available on AirPods 4 with ANC" },
      { label: "Transparency mode", value: "Yes (ANC model)" },
      { label: "Adaptive Audio", value: "Yes (ANC model)" },
      { label: "Conversation Awareness", value: "Yes (ANC model)" },
    ],
  },
  {
    title: "Controls",
    items: [
      { label: "Press", value: "Play, pause, skip tracks" },
      { label: "Siri", value: "Hands-free Siri" },
      { label: "Head gestures", value: "Nod/shake for calls" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Listening time", value: "Up to 5 hours (6 hours with ANC)" },
      { label: "Case battery", value: "Up to 30 hours total" },
      { label: "Charging", value: "USB-C (wireless with ANC model)" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Fit", value: "Open-ear design, one size fits all" },
      { label: "Dust/Sweat/Water resistance", value: "IP54 (earbuds and case)" },
    ],
  },
]

const features = [
  {
    title: "H2 chip",
    description: "Powerful Apple-designed chip for incredible sound and connectivity.",
  },
  {
    title: "Open-ear comfort",
    description: "All-new acoustic architecture for comfortable all-day wear.",
  },
  {
    title: "Personalized Spatial Audio",
    description: "Immersive sound that surrounds you with dynamic head tracking.",
  },
  {
    title: "ANC option",
    description: "AirPods 4 with Active Noise Cancellation blocks the world out.",
  },
]

export function AirPods4Content({ dictionary, lang }: AirPods4ContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="AirPods 4"
        subheadline="Rebuilt from the sound up."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/airpods-4/a/images/overview/hero/hero__bh5bohfdlr9u_large_2x.jpg",
          alt: "AirPods 4",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/airpods-4") }}
        isNew
      />

      <FeatureSection
        eyebrow="Design"
        headline="Designed for comfort."
        description="AirPods 4 feature an all-new acoustic architecture for breakthrough sound. Engineered to fit more ears than ever before."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/airpods-4/a/images/overview/design/design__dgamvrjfznim_large_2x.jpg",
          alt: "AirPods 4 design",
        }}
      />

      <FeatureSection
        eyebrow="Sound"
        headline="Sound that moves you."
        description="H2 chip delivers rich, detailed sound. Personalized Spatial Audio creates an immersive experience with dynamic head tracking."
        variant="light"
        image={{
          src: "https://www.apple.com/v/airpods-4/a/images/overview/audio/audio__g75g6xvhq36a_large_2x.jpg",
          alt: "AirPods 4 sound",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="With Active Noise Cancellation"
        headline="Silence the noise."
        description="AirPods 4 with Active Noise Cancellation feature Adaptive Audio, Conversation Awareness, and Transparency mode for the ultimate listening experience."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/airpods-4/a/images/overview/anc/anc__cv1d0h9m9qgi_large_2x.jpg",
          alt: "AirPods 4 with Active Noise Cancellation",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $129"
        priceNote="$179 with Active Noise Cancellation"
        buyHref={localizedHref("/shop/product/airpods-4")}
      />
    </div>
  )
}
