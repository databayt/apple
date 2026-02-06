"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface DisplaysContentProps {
  dictionary: Dictionary
  lang: Locale
}

const specs = [
  {
    title: "Studio Display",
    items: [
      { label: "Size", value: '27-inch 5K Retina display' },
      { label: "Resolution", value: "5120x2880 pixels" },
      { label: "Brightness", value: "600 nits" },
      { label: "Camera", value: "12MP Ultra Wide with Center Stage" },
      { label: "Audio", value: "Six-speaker system with Spatial Audio" },
    ],
  },
  {
    title: "Pro Display XDR",
    items: [
      { label: "Size", value: '32-inch 6K Retina XDR display' },
      { label: "Resolution", value: "6016x3384 pixels" },
      { label: "Brightness", value: "1600 nits peak, 1000 nits sustained" },
      { label: "Contrast ratio", value: "1,000,000:1" },
      { label: "Reference modes", value: "Customizable for pro workflows" },
    ],
  },
  {
    title: "Stand Options",
    items: [
      { label: "Studio Display", value: "Tilt-adjustable or Tilt and height-adjustable" },
      { label: "Pro Display XDR", value: "Pro Stand or VESA mount" },
    ],
  },
]

const features = [
  {
    title: "Studio Display",
    description: "27-inch 5K Retina with Center Stage camera and stunning audio.",
  },
  {
    title: "Pro Display XDR",
    description: "32-inch 6K with extreme dynamic range. Reference modes for pros.",
  },
  {
    title: "True Tone",
    description: "Automatically adjusts to ambient lighting for comfortable viewing.",
  },
  {
    title: "Thunderbolt 3",
    description: "Single cable connection for video, data, and charging.",
  },
]

export function DisplaysContent({ dictionary, lang }: DisplaysContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Displays"
        subheadline="See the big picture."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/studio-display/d/images/overview/hero/hero__fxlo6w8qbgyi_large_2x.jpg",
          alt: "Apple displays",
        }}
        primaryCTA={{ label: common?.compare || "Compare", href: "#compare" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-mac/displays") }}
      />

      <FeatureSection
        eyebrow="Studio Display"
        headline="27 inches of 5K brilliance."
        description="Studio Display features a stunning 5K Retina display, 12MP Ultra Wide camera with Center Stage, and a six-speaker sound system."
        variant="light"
        image={{
          src: "https://www.apple.com/v/studio-display/d/images/overview/design/design__fi1cq8iqcxyu_large_2x.jpg",
          alt: "Studio Display",
        }}
      />

      <FeatureSection
        eyebrow="Pro Display XDR"
        headline="The pro standard."
        description="32-inch 6K Retina display with extreme dynamic range. Reference modes for HDR, photography, and video workflows."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/pro-display-xdr/d/images/overview/hero/hero__dh29nfa82vue_large_2x.jpg",
          alt: "Pro Display XDR",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Features"
        headline="More than meets the eye."
        description="Both displays feature Thunderbolt connectivity, True Tone technology, and precise color accuracy for professional workflows."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/studio-display/d/images/overview/camera/camera__dw23f0d7sxiq_large_2x.jpg",
          alt: "Apple display features",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $1,599"
        priceNote="Studio Display. Pro Display XDR from $4,999"
        buyHref={localizedHref("/shop/buy-mac/displays")}
      />
    </div>
  )
}
