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

interface AirTagContentProps {
  dictionary: Dictionary
  lang: Locale
}

const specs = [
  {
    title: "Connectivity",
    items: [
      { label: "Bluetooth", value: "Bluetooth connectivity" },
      { label: "Ultra Wideband", value: "U1 chip for Precision Finding" },
      { label: "Find My network", value: "Hundreds of millions of devices" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Size", value: "31.9mm diameter, 8mm thick" },
      { label: "Weight", value: "11 grams" },
      { label: "Water resistance", value: "IP67 (1 meter for 30 minutes)" },
      { label: "Speaker", value: "Built-in speaker for playing sound" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Battery type", value: "User-replaceable CR2032 coin cell" },
      { label: "Battery life", value: "About 1 year" },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      { label: "End-to-end encryption", value: "Yes" },
      { label: "Anti-stalking", value: "Alert for unknown AirTag moving with you" },
      { label: "Rotating identifier", value: "Yes" },
    ],
  },
]

const features = [
  {
    title: "Precision Finding",
    description: "Ultra Wideband shows you the exact direction and distance to your AirTag.",
  },
  {
    title: "Find My network",
    description: "Locate items using hundreds of millions of Apple devices.",
  },
  {
    title: "Lost Mode",
    description: "Get notified when your AirTag is found. Share your contact info.",
  },
  {
    title: "Privacy built in",
    description: "End-to-end encryption keeps your location data private.",
  },
]

export function AirTagContent({ dictionary, lang }: AirTagContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="AirTag"
        subheadline="Lose your knack for losing things."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/airtag/g/images/overview/hero/hero__da32nfzytjiq_large_2x.jpg",
          alt: "AirTag",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/airtag") }}
      />

      <FeatureSection
        eyebrow="Precision Finding"
        headline="See where you're going."
        description="If your AirTag is within range, Precision Finding shows you the direction and distance to it. All powered by Ultra Wideband technology."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/airtag/g/images/overview/precision_finding/precision_finding__bwnvqhsmkn0m_large_2x.jpg",
          alt: "AirTag Precision Finding",
        }}
      />

      <FeatureSection
        eyebrow="Find My Network"
        headline="Ping. Found."
        description="AirTag taps into the vast Find My network - hundreds of millions of Apple devices. If it's out there, you'll find it."
        variant="light"
        image={{
          src: "https://www.apple.com/v/airtag/g/images/overview/find_my_network/find_my_network__gj0s3ysyy9a6_large_2x.jpg",
          alt: "Find My network",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Privacy"
        headline="Designed with privacy in mind."
        description="Your location data is private and anonymous. End-to-end encryption means only you can see where your AirTag is."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/airtag/g/images/overview/privacy/privacy__c1mqwnfuvggy_large_2x.jpg",
          alt: "AirTag privacy",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip price="$29" priceNote="4-pack $99" buyHref={localizedHref("/shop/product/airtag")} />
    </div>
  )
}
