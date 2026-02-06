"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import { TvHomeNav } from "@/components/tv-home/nav"
import type { HomePodMiniContentProps } from "./types"

const specs = [
  {
    title: "Audio",
    items: [
      { label: "Driver", value: "Full-range driver and dual force-cancelling passive radiators" },
      { label: "Microphones", value: "4 microphones" },
      { label: "Computational audio", value: "Yes" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "S5 chip" },
      { label: "Accelerometer", value: "Yes" },
    ],
  },
  {
    title: "Smart Home",
    items: [
      { label: "HomeKit hub", value: "Yes" },
      { label: "Matter", value: "Yes" },
      { label: "Thread", value: "Yes" },
      { label: "Temperature & humidity sensor", value: "Yes" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { label: "Wi-Fi", value: "Wi-Fi 4 (802.11n)" },
      { label: "Bluetooth", value: "Bluetooth 5.0" },
      { label: "Ultra Wideband", value: "U1 chip for Handoff" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Height", value: "3.3 inches" },
      { label: "Weight", value: "0.76 pounds" },
      { label: "Colors", value: "Midnight, Blue, Orange, Yellow, White" },
    ],
  },
]

const features = [
  {
    title: "Impressive sound",
    description: "Rich, detailed audio that belies its compact size.",
  },
  {
    title: "Siri",
    description: "Control music, smart home, and more with your voice.",
  },
  {
    title: "Smart home hub",
    description: "Control HomeKit and Matter accessories throughout your home.",
  },
  {
    title: "Intercom",
    description: "Send voice messages to other HomePod speakers or Apple devices.",
  },
]

export function HomePodMiniContent({ dictionary, lang }: HomePodMiniContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <TvHomeNav lang={lang} />
      <HeroSection
        headline="HomePod mini"
        subheadline="Icons come in mini, too."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/homepod-mini/i/images/overview/hero/hero__c5qfs0s1t5e6_large_2x.jpg",
          alt: "HomePod mini",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/homepod-mini") }}
      />

      <FeatureSection
        eyebrow="Sound"
        headline="Small size. Big sound."
        description="HomePod mini delivers impressive sound quality with rich bass and clear highs. Computational audio powers an amazing listening experience."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/homepod-mini/i/images/overview/audio/audio__bxkbvgwzzxqa_large_2x.jpg",
          alt: "HomePod mini sound",
        }}
      />

      <FeatureSection
        eyebrow="Siri"
        headline="Ask away."
        description="Siri handles music playback, answers questions, sends messages, and controls your smart home - all with your voice."
        variant="light"
        image={{
          src: "https://www.apple.com/v/homepod-mini/i/images/overview/siri/siri__efvrhvxteeoi_large_2x.jpg",
          alt: "HomePod mini Siri",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Colors"
        headline="Pick your favorite."
        description="HomePod mini comes in five colors to match your style. Place one in every room and enjoy music throughout your home."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/homepod-mini/i/images/overview/design/design__ceflvtawtlcm_large_2x.jpg",
          alt: "HomePod mini colors",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip price="$99" buyHref={localizedHref("/shop/product/homepod-mini")} />
    </div>
  )
}
