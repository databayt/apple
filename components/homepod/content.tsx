"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import { TvHomeNav } from "@/components/tv-home/nav"
import type { HomePodContentProps } from "./types"

const specs = [
  {
    title: "Audio",
    items: [
      { label: "Driver", value: "High-excursion woofer with 20mm diaphragm" },
      { label: "Tweeters", value: "5 horn-loaded tweeters" },
      { label: "Microphones", value: "6 microphones" },
      { label: "Spatial Audio", value: "Yes, with Dolby Atmos" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "S7 chip" },
      { label: "System sensor", value: "Sound Recognition, room sensing" },
      { label: "Accelerometer", value: "Yes" },
    ],
  },
  {
    title: "Smart Home",
    items: [
      { label: "HomeKit hub", value: "Yes" },
      { label: "Matter", value: "Yes" },
      { label: "Thread", value: "Yes" },
      { label: "Sound Recognition", value: "Smoke and CO alarms" },
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
      { label: "Height", value: "6.6 inches" },
      { label: "Weight", value: "5.16 pounds" },
      { label: "Colors", value: "Midnight, White" },
    ],
  },
]

const features = [
  {
    title: "Room-filling sound",
    description: "Spatial Audio with Dolby Atmos creates an immersive listening experience.",
  },
  {
    title: "Siri",
    description: "Control music, get answers, manage your smart home with your voice.",
  },
  {
    title: "Smart home hub",
    description: "Control HomeKit and Matter accessories. Thread border router built in.",
  },
  {
    title: "Sound Recognition",
    description: "Detects smoke and CO alarms and sends alerts to your iPhone.",
  },
]

export function HomePodContent({ dictionary, lang }: HomePodContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <TvHomeNav lang={lang} />
      <HeroSection
        headline="HomePod"
        subheadline="Home is where the smart is."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/homepod/l/images/overview/hero/hero__gnfk5g59d0qm_large_2x.jpg",
          alt: "HomePod",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/homepod") }}
      />

      <FeatureSection
        eyebrow="Sound"
        headline="Immersive sound that fills the room."
        description="HomePod delivers high-fidelity audio with rich, deep bass and incredible high-frequency detail. Spatial Audio with Dolby Atmos creates an immersive experience."
        variant="light"
        image={{
          src: "https://www.apple.com/v/homepod/l/images/overview/audio/audio__d8kbkxsz0dci_large_2x.jpg",
          alt: "HomePod sound",
        }}
      />

      <FeatureSection
        eyebrow="Siri"
        headline="Ask Siri. Hear answers."
        description="Use your voice to play music, set timers, control your smart home, and more. Six microphones hear your requests from across the room."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/homepod/l/images/overview/siri/siri__bkc0ymxkvnqu_large_2x.jpg",
          alt: "HomePod Siri",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Smart Home"
        headline="The center of your smart home."
        description="HomePod works as a smart home hub for HomeKit and Matter accessories. Control lights, thermostats, and more - even when you're away."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/homepod/l/images/overview/smart_home/smart_home__d13mdtq81p02_large_2x.jpg",
          alt: "HomePod smart home",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip price="$299" buyHref={localizedHref("/shop/product/homepod")} />
    </div>
  )
}
