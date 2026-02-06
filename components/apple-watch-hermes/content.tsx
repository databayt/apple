"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AppleWatchHermesContentProps } from "./types"

const specs = [
  {
    title: "Case",
    items: [
      { label: "Size", value: "45mm" },
      { label: "Material", value: "Titanium" },
      { label: "Finish", value: "Polished" },
    ],
  },
  {
    title: "Display",
    items: [
      { label: "Type", value: "Always-On OLED" },
      { label: "Brightness", value: "Up to 2000 nits" },
    ],
  },
  {
    title: "Bands",
    items: [
      { label: "Materials", value: "Premium Hermes leather" },
      { label: "Styles", value: "Single Tour, Double Tour, and more" },
      { label: "Design", value: "Handcrafted in France" },
    ],
  },
  {
    title: "Exclusive Features",
    items: [
      { label: "Watch faces", value: "Exclusive Hermes watch faces" },
      { label: "Packaging", value: "Hermes orange box" },
    ],
  },
]

const features = [
  {
    title: "Hermes craftsmanship",
    description: "Handcrafted leather bands made in France.",
  },
  {
    title: "Exclusive watch faces",
    description: "Hermes-designed watch faces available only with this collection.",
  },
  {
    title: "Premium materials",
    description: "Titanium case with polished finish.",
  },
  {
    title: "Series 10 features",
    description: "All the health, fitness, and safety features of Apple Watch.",
  },
]

export function AppleWatchHermesContent({ dictionary, lang }: AppleWatchHermesContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Watch Hermes"
        subheadline="A singular vision of style."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-watch-hermes/q/images/overview/hero/hero__bi7gfwxo9hqy_large_2x.jpg",
          alt: "Apple Watch Hermes",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-hermes") }}
      />

      <FeatureSection
        eyebrow="Partnership"
        headline="Craftsmanship meets innovation."
        description="Since 2015, Apple and Hermes have united the best of both houses to create a singular vision of watch design. Each band is handcrafted by Hermes artisans in France."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-watch-hermes/q/images/overview/partnership/partnership__g8jhg7e1gn6a_large_2x.jpg",
          alt: "Apple Watch Hermes partnership",
        }}
      />

      <FeatureSection
        eyebrow="Bands"
        headline="Bands of distinction."
        description="Each Hermes band is crafted using the same techniques that have defined the house for over 180 years. Premium leathers and meticulous attention to detail."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-watch-hermes/q/images/overview/bands/bands__b7hqo5y8vdiy_large_2x.jpg",
          alt: "Apple Watch Hermes bands",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Watch Faces"
        headline="Faces only Hermes could design."
        description="Exclusive watch faces designed by Hermes. From the iconic Hermes typography to playful interpretations, each face is a work of art."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-watch-hermes/q/images/overview/faces/faces__fh3dqp77gwyq_large_2x.jpg",
          alt: "Apple Watch Hermes faces",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $1,249"
        buyHref={localizedHref("/shop/buy-watch/apple-watch-hermes")}
      />
    </div>
  )
}
