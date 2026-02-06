"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AppleWatchSeries10ContentProps } from "./types"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Display area", value: "Up to 1220 sq mm (largest ever)" },
      { label: "Type", value: "Always-On OLED LTPO3 Retina display" },
      { label: "Wide-angle", value: "Yes, readable at any angle" },
      { label: "Brightness", value: "Up to 2000 nits" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Case sizes", value: "42mm or 46mm" },
      { label: "Case materials", value: "Aluminum or Titanium" },
      { label: "Thickness", value: "9.7mm (thinnest ever)" },
      { label: "Weight", value: "From 30g" },
    ],
  },
  {
    title: "Health",
    items: [
      { label: "Sleep apnea", value: "Sleep apnea detection (FDA cleared)" },
      { label: "Heart", value: "ECG, irregular rhythm notification" },
      { label: "Blood oxygen", value: "Blood Oxygen app" },
      { label: "Temperature", value: "Temperature sensing" },
    ],
  },
  {
    title: "Features",
    items: [
      { label: "Water resistance", value: "50 meters" },
      { label: "GPS", value: "Precision dual-frequency GPS" },
      { label: "Speaker", value: "Built-in speaker for calls and media" },
      { label: "Depth gauge", value: "Water depth and temperature" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Battery life", value: "Up to 18 hours" },
      { label: "Fast charge", value: "80% in about 30 minutes" },
    ],
  },
]

const features = [
  {
    title: "Biggest display ever",
    description:
      "Up to 30% more screen area than Series 6. The widest viewing angles on any Apple Watch.",
  },
  {
    title: "Thinnest design ever",
    description:
      "At just 9.7mm thin, Series 10 is our most comfortable Apple Watch yet.",
  },
  {
    title: "Sleep apnea detection",
    description:
      "FDA-cleared to detect signs of moderate to severe sleep apnea while you sleep.",
  },
  {
    title: "Titanium option",
    description:
      "Beautifully polished titanium. Light on your wrist. Light on the planet.",
  },
]

export function AppleWatchSeries10Content({ dictionary, lang }: AppleWatchSeries10ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        eyebrow="Apple Watch Series 10"
        headline="Thinnest. Biggest. Most advanced ever."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-watch-series-10/e/images/overview/hero/hero__euwzls5egsii_large_2x.jpg",
          alt: "Apple Watch Series 10",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-watch/apple-watch-series-10") }}
        isNew
      />

      {/* Display */}
      <FeatureSectionFullWidth
        eyebrow="Display"
        headline="Big things come in thin packages."
        description="The largest display ever on Apple Watch. Readable at virtually any angle. And up to 2000 nits bright."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-watch-series-10/e/images/overview/design/design_display__dh26hs9i7jyq_large_2x.jpg",
          alt: "Apple Watch Series 10 display",
        }}
      />

      {/* Design */}
      <FeatureSection
        eyebrow="Design"
        headline="Remarkably thin. Incredibly light."
        description="At just 9.7mm thin, Apple Watch Series 10 is our most comfortable watch ever. Available in sleek aluminum or polished titanium."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-watch-series-10/e/images/overview/design/design__cq4ecjcbjx2y_large_2x.jpg",
          alt: "Apple Watch Series 10 design",
        }}
      />

      {/* Sleep Apnea */}
      <FeatureSectionFullWidth
        eyebrow="Sleep Apnea Detection"
        headline="Now your watch can watch for signs of sleep apnea."
        description="Apple Watch can now detect signs of moderate to severe sleep apnea. FDA cleared and designed to give you important health insights."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-watch-series-10/e/images/overview/health/health_sleep_apnea__dkk1r0swlr6i_large_2x.jpg",
          alt: "Sleep apnea detection",
        }}
      />

      {/* Health */}
      <FeatureSection
        eyebrow="Health"
        headline="Health monitoring that never sleeps."
        description="From heart rate to blood oxygen to temperature sensing, Apple Watch keeps an eye on your vital stats. And notifies you if something needs attention."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-watch-series-10/e/images/overview/health/health__dmhrl7oabdyq_large_2x.jpg",
          alt: "Apple Watch health features",
        }}
        reversed
      />

      {/* Fitness */}
      <FeatureSection
        eyebrow="Fitness"
        headline="Your ultimate workout partner."
        description="Track any workout with precision. Get real-time metrics. And close your rings with a little friendly competition."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-watch-series-10/e/images/overview/fitness/fitness__c3epp7e9sny6_large_2x.jpg",
          alt: "Apple Watch fitness features",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="gray" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price="From $399"
        priceNote="or $33.25/mo. for 12 mo."
        tradeIn="$50-$175"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-watch/apple-watch-series-10")}
      />
    </div>
  )
}
