"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPhone14ContentProps } from "./types"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Size", value: '6.1" Super Retina XDR display' },
      { label: "Resolution", value: "2532x1170 pixels" },
      { label: "Peak brightness", value: "1200 nits HDR" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Processor", value: "A15 Bionic chip" },
      { label: "CPU", value: "6-core CPU" },
      { label: "GPU", value: "5-core GPU" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Main", value: "12MP Main camera" },
      { label: "Ultra Wide", value: "12MP Ultra Wide camera" },
      { label: "Front", value: "12MP TrueDepth front camera" },
    ],
  },
  {
    title: "Safety",
    items: [
      { label: "Crash Detection", value: "Yes" },
      { label: "Emergency SOS", value: "Via satellite" },
    ],
  },
]

const features = [
  {
    title: "A15 Bionic",
    description: "Lightning fast. Super efficient. Incredibly capable.",
  },
  {
    title: "Crash Detection",
    description: "Detects severe car crashes and calls for help when you can't.",
  },
  {
    title: "Emergency SOS",
    description: "Connect to emergency services via satellite when outside cellular coverage.",
  },
  {
    title: "All-day battery",
    description: "Up to 20 hours of video playback to keep you going.",
  },
]

export function IPhone14Content({ dictionary, lang }: IPhone14ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="iPhone 14"
        headline="Big and even bigger."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/iphone-14/f/images/overview/hero/hero_endframe__c59xsv2l3q8m_large_2x.jpg",
          alt: "iPhone 14",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-14") }}
      />

      <FeatureSection
        eyebrow="Safety"
        headline="Safety features that can save lives."
        description="Crash Detection can detect a severe car crash and automatically call emergency services. Emergency SOS via satellite connects you to help even when you're off the grid."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/iphone-14/f/images/overview/safety/safety__fwmdh0r4bkuu_large_2x.jpg",
          alt: "iPhone 14 safety features",
        }}
      />

      <FeatureSection
        eyebrow="Camera"
        headline="Photos and videos that capture the moment."
        description="Advanced camera features like Photonic Engine, Cinematic mode, and Action mode help you capture stunning photos and videos."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-14/f/images/overview/camera/camera__dmopaqy6hio2_large_2x.jpg",
          alt: "iPhone 14 camera",
        }}
        reversed
      />

      <FeatureGrid features={features} variant="gray" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $599"
        priceNote="or $24.95/mo. for 24 mo."
        buyHref={localizedHref("/shop/buy-iphone/iphone-14")}
      />
    </div>
  )
}
