"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleMusicContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "100 million+ songs",
    description: "Access the entire Apple Music catalog with lossless audio.",
  },
  {
    title: "Spatial Audio",
    description: "Immersive sound with Dolby Atmos on compatible devices.",
  },
  {
    title: "Personalized playlists",
    description: "Discover new music with playlists made just for you.",
  },
  {
    title: "Lyrics in real time",
    description: "Sing along with time-synced lyrics.",
  },
]

export function AppleMusicContent({ dictionary, lang }: AppleMusicContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Music"
        subheadline="Get lost in 100 million songs."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-music/p/images/overview/hero/hero__d4i48pxixrie_large_2x.jpg",
          alt: "Apple Music",
        }}
        primaryCTA={{ label: "Try it free", href: localizedHref("/apple-music/try") }}
        secondaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Catalog"
        headline="Every song. Every sound."
        description="Over 100 million songs, 30,000 playlists, and live radio — all ad-free. Plus music videos, live performances, and more."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-music/p/images/overview/catalog/catalog__gp8x0uy7iyqq_large_2x.jpg",
          alt: "Apple Music catalog",
        }}
      />

      <FeatureSection
        eyebrow="Spatial Audio"
        headline="Sound all around."
        description="Experience music in Spatial Audio with Dolby Atmos. Thousands of songs in immersive, three-dimensional sound."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-music/p/images/overview/spatial/spatial__g0pxwx8lbpuq_large_2x.jpg",
          alt: "Apple Music Spatial Audio",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Personalized"
        headline="Music made for you."
        description="Get personalized recommendations, curated playlists, and mixes based on your listening history."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-music/p/images/overview/personalized/personalized__cny05fk81m02_large_2x.jpg",
          alt: "Apple Music personalized",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <BuyStrip
        price="$10.99/mo."
        priceNote="1 month free, then $10.99/mo."
        buyHref={localizedHref("/apple-music/try")}
      />
    </div>
  )
}
