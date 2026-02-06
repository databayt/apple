"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AppleWatchNikeContentProps } from "./types"

const specs = [
  {
    title: "Case",
    items: [
      { label: "Sizes", value: "42mm or 46mm" },
      { label: "Material", value: "Aluminum" },
      { label: "Colors", value: "Midnight, Starlight" },
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
      { label: "Material", value: "Nike Sport Band or Nike Sport Loop" },
      { label: "Design", value: "Perforated for breathability" },
    ],
  },
  {
    title: "Exclusive Features",
    items: [
      { label: "Watch faces", value: "Exclusive Nike watch faces" },
      { label: "Nike Run Club", value: "Integrated coaching and motivation" },
    ],
  },
]

const features = [
  {
    title: "Nike Sport Bands",
    description: "Lightweight, breathable bands designed for athletes.",
  },
  {
    title: "Exclusive watch faces",
    description: "Nike-designed watch faces with bold graphics.",
  },
  {
    title: "Nike Run Club",
    description: "Audio-guided runs and motivation from elite athletes.",
  },
  {
    title: "All Series 10 features",
    description: "Health, fitness, and safety features built in.",
  },
]

export function AppleWatchNikeContent({ dictionary, lang }: AppleWatchNikeContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Watch Nike"
        subheadline="Your ultimate running partner."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-watch-nike/d/images/overview/hero/hero__c5dmyb6cyvuy_large_2x.jpg",
          alt: "Apple Watch Nike",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-nike") }}
      />

      <FeatureSection
        eyebrow="Partnership"
        headline="Designed for runners. By runners."
        description="Apple and Nike have partnered since 2006 to create the ultimate running experience. Apple Watch Nike combines advanced technology with iconic Nike design."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-watch-nike/d/images/overview/partnership/partnership__flqwh5xj0kyq_large_2x.jpg",
          alt: "Apple Watch Nike partnership",
        }}
      />

      <FeatureSection
        eyebrow="Bands"
        headline="Built for performance."
        description="Nike Sport Bands and Sport Loops are lightweight, breathable, and designed for peak athletic performance. Sweat-resistant and comfortable for any workout."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-watch-nike/d/images/overview/bands/bands__cqbvy8exh2uy_large_2x.jpg",
          alt: "Apple Watch Nike bands",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Nike Run Club"
        headline="Run with the best."
        description="Get audio-guided runs, personalized coaching plans, and motivation from Nike coaches and athletes. Track your runs and celebrate your achievements."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-watch-nike/d/images/overview/run_club/run_club__b8wy7x0xq9ea_large_2x.jpg",
          alt: "Nike Run Club",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $399"
        buyHref={localizedHref("/shop/buy-watch/apple-watch-nike")}
      />
    </div>
  )
}
