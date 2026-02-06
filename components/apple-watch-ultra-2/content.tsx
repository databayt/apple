"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AppleWatchUltra2ContentProps } from "./types"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Size", value: "49mm case" },
      { label: "Display", value: "Always-On Retina LTPO OLED display" },
      { label: "Peak brightness", value: "3000 nits" },
      { label: "Night Mode", value: "Yes" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Case material", value: "Titanium" },
      { label: "Water resistance", value: "100 meters" },
      { label: "Dive certified", value: "EN13319 certified" },
      { label: "Action Button", value: "Customizable" },
    ],
  },
  {
    title: "Health & Fitness",
    items: [
      { label: "GPS", value: "Precision dual-frequency GPS" },
      { label: "Heart", value: "ECG, irregular rhythm notification" },
      { label: "Temperature", value: "Temperature sensing" },
      { label: "Altitude", value: "Altimeter with -500m to 9000m range" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Battery life", value: "Up to 36 hours (72 in Low Power Mode)" },
      { label: "Fast charge", value: "80% in about 60 minutes" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "S9 SiP with 64-bit dual-core processor" },
      { label: "Neural Engine", value: "4-core Neural Engine" },
      { label: "Double Tap", value: "Yes" },
    ],
  },
]

const features = [
  {
    title: "Titanium build",
    description: "Aerospace-grade titanium. Built to survive the most extreme conditions.",
  },
  {
    title: "3000 nits",
    description: "The brightest Apple Watch display ever. Readable in any light.",
  },
  {
    title: "72-hour battery",
    description: "Up to 72 hours in Low Power Mode. Go further between charges.",
  },
  {
    title: "Action Button",
    description: "Customizable button for instant access to your favorite features.",
  },
]

export function AppleWatchUltra2Content({ dictionary, lang }: AppleWatchUltra2ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Watch Ultra 2"
        subheadline="Next level adventure."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-watch-ultra-2/c/images/overview/hero/hero__gf9yjzx81xyu_large_2x.jpg",
          alt: "Apple Watch Ultra 2",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-ultra-2") }}
      />

      <FeatureSectionFullWidth
        eyebrow="S9 SiP"
        headline="A new chip for new adventures."
        description="S9 SiP brings more power, more intelligence, and Double Tap gesture. On-device Siri processes requests even faster."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-watch-ultra-2/c/images/overview/chip/chip__ea9d3xqr12gm_large_2x.jpg",
          alt: "S9 SiP in Apple Watch Ultra 2",
        }}
      />

      <FeatureSection
        eyebrow="Build"
        headline="Built for the extremes."
        description="Aerospace-grade titanium case. Sapphire front crystal. Water resistance to 100 meters. Tested against MIL-STD 810H."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-watch-ultra-2/c/images/overview/design/design__f3dqrjbj5e6y_large_2x.jpg",
          alt: "Apple Watch Ultra 2 build",
        }}
      />

      <FeatureSection
        eyebrow="Display"
        headline="Brilliant in any light."
        description="At 3000 nits, Apple Watch Ultra 2 has the brightest display ever on Apple Watch. It's readable even in direct sunlight."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-watch-ultra-2/c/images/overview/display/display__dfp1i3fmreqe_large_2x.jpg",
          alt: "Apple Watch Ultra 2 display",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Adventure"
        headline="Your adventure companion."
        description="Precision GPS for hikers. Depth gauge for divers. Trail maps for explorers. Ultra 2 has the features serious adventurers need."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-watch-ultra-2/c/images/overview/adventure/adventure__cq9q8kkv5b6a_large_2x.jpg",
          alt: "Apple Watch Ultra 2 adventure features",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $799"
        priceNote="or $66.58/mo. for 12 mo."
        tradeIn="$50-$180"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-watch/apple-watch-ultra-2")}
      />
    </div>
  )
}
