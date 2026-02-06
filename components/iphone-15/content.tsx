"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPhone15ContentProps } from "./types"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Size", value: '6.1" or 6.7" Super Retina XDR display' },
      { label: "Dynamic Island", value: "Yes" },
      { label: "Peak brightness", value: "2000 nits (outdoor)" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Processor", value: "A16 Bionic chip" },
      { label: "CPU", value: "6-core CPU" },
      { label: "GPU", value: "5-core GPU" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Main", value: "48MP Main camera with 2x Telephoto" },
      { label: "Ultra Wide", value: "12MP Ultra Wide camera" },
      { label: "Front", value: "12MP TrueDepth front camera" },
    ],
  },
  {
    title: "Battery & Charging",
    items: [
      { label: "Video playback", value: "Up to 20 hours" },
      { label: "Connector", value: "USB-C" },
      { label: "MagSafe", value: "Yes" },
    ],
  },
]

const features = [
  {
    title: "Dynamic Island",
    description: "See alerts and Live Activities in an intuitive, delightful way.",
  },
  {
    title: "48MP camera",
    description: "Shoot stunning portraits and zoom with incredible detail.",
  },
  {
    title: "USB-C",
    description: "Charge your Mac or iPad with the same cable as your iPhone.",
  },
  {
    title: "Ceramic Shield",
    description: "Tougher than any smartphone glass. Drop tested and proven.",
  },
]

export function IPhone15Content({ dictionary, lang }: IPhone15ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="iPhone 15"
        headline="New camera. New design. Newphoria."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/iphone-15/c/images/overview/hero/hero_endframe__fv1ulrxsnkia_large_2x.jpg",
          alt: "iPhone 15",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-15") }}
      />

      <FeatureSection
        eyebrow="Camera"
        headline="48MP. Gorgeous detail."
        description="The 48MP Main camera gives you 4x the resolution for stunning detail. Optical-quality 2x Telephoto lets you frame tighter shots."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/iphone-15/c/images/overview/camera/camera_702x750__c0d5olsj3cyy_large_2x.jpg",
          alt: "iPhone 15 camera",
        }}
      />

      <FeatureSection
        eyebrow="Design"
        headline="New design. New colors. New love."
        description="Gorgeous colors infused into the back glass through a dual-ion exchange process. A contoured edge and the thinnest borders make it comfortable to hold."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-15/c/images/overview/design/design_702x750__cgmsmspjqeqe_large_2x.jpg",
          alt: "iPhone 15 design",
        }}
        reversed
      />

      <FeatureGrid features={features} variant="gray" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $699"
        priceNote="or $29.12/mo. for 24 mo."
        tradeIn="$90–$450"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-iphone/iphone-15")}
      />
    </div>
  )
}
