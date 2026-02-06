"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import { TvHomeNav } from "@/components/tv-home/nav"
import type { AppleTV4KContentProps } from "./types"

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Processor", value: "A15 Bionic chip" },
      { label: "CPU", value: "6-core CPU" },
      { label: "GPU", value: "5-core GPU" },
    ],
  },
  {
    title: "Video",
    items: [
      { label: "Resolution", value: "4K HDR at 60fps" },
      { label: "HDR formats", value: "Dolby Vision, HDR10+, HDR10" },
      { label: "Audio", value: "Dolby Atmos" },
      { label: "HDMI", value: "HDMI 2.1" },
    ],
  },
  {
    title: "Storage",
    items: [
      { label: "Options", value: "64GB or 128GB" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { label: "Wi-Fi", value: "Wi-Fi 6 (802.11ax)" },
      { label: "Ethernet", value: "Gigabit Ethernet (128GB model)" },
      { label: "Bluetooth", value: "Bluetooth 5.0" },
      { label: "Thread", value: "Yes" },
    ],
  },
  {
    title: "Remote",
    items: [
      { label: "Siri Remote", value: "Touch-enabled clickpad, Siri button" },
      { label: "Charging", value: "USB-C" },
      { label: "Find My", value: "Yes" },
    ],
  },
]

const features = [
  {
    title: "Dolby Vision & Atmos",
    description: "Stunning picture quality with immersive sound.",
  },
  {
    title: "A15 Bionic",
    description: "Powerful performance for games and demanding apps.",
  },
  {
    title: "tvOS",
    description: "Access Apple TV+, Apple Arcade, and thousands of apps.",
  },
  {
    title: "Smart Home Hub",
    description: "Control your HomeKit accessories from anywhere.",
  },
]

export function AppleTV4KContent({ dictionary, lang }: AppleTV4KContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <TvHomeNav lang={lang} />
      <HeroSection
        headline="Apple TV 4K"
        subheadline="Cinematic in every sense."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-tv-4k/af/images/overview/hero/hero__bcxpfit6j9hy_large_2x.jpg",
          alt: "Apple TV 4K",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-tv/apple-tv-4k") }}
      />

      <FeatureSection
        eyebrow="Picture Quality"
        headline="Stunning visuals. Immersive audio."
        description="4K HDR with Dolby Vision delivers incredible picture quality. Dolby Atmos creates an immersive sound experience that surrounds you."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-tv-4k/af/images/overview/cinematic/cinematic__cdr3aezxqpyu_large_2x.jpg",
          alt: "Apple TV 4K picture quality",
        }}
      />

      <FeatureSection
        eyebrow="A15 Bionic"
        headline="Fast. Fluid. Fun."
        description="A15 Bionic powers incredibly smooth gaming, quick app launches, and responsive navigation throughout tvOS."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-tv-4k/af/images/overview/chip/chip__e6lhg7uvvuqu_large_2x.jpg",
          alt: "A15 Bionic in Apple TV 4K",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Smart Home"
        headline="Control your home from anywhere."
        description="Apple TV 4K serves as a smart home hub, letting you control HomeKit accessories even when you're away."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-tv-4k/af/images/overview/smart_home/smart_home__cy9v8hxv3k6u_large_2x.jpg",
          alt: "Apple TV 4K smart home",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip price="From $129" buyHref={localizedHref("/shop/buy-tv/apple-tv-4k")} />
    </div>
  )
}
