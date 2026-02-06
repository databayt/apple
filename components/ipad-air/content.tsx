"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPadAirContentProps } from "./types"

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "Apple M2" },
      { label: "CPU", value: "8-core CPU" },
      { label: "GPU", value: "10-core GPU" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
    ],
  },
  {
    title: "Display",
    items: [
      { label: "Size", value: '11" or 13" Liquid Retina display' },
      { label: "Resolution", value: "2360x1640 or 2732x2048 pixels" },
      { label: "Peak brightness", value: "600 nits" },
      { label: "P3 wide color", value: "Yes" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Back", value: "12MP Wide camera" },
      { label: "Front", value: "12MP Ultra Wide with Center Stage (landscape)" },
    ],
  },
  {
    title: "Apple Pencil",
    items: [
      { label: "Support", value: "Apple Pencil Pro, Apple Pencil (USB-C)" },
      { label: "Hover", value: "Apple Pencil hover" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Connector", value: "USB-C" },
      { label: "Touch ID", value: "Yes (top button)" },
      { label: "Colors", value: "Space Gray, Starlight, Purple, Blue" },
    ],
  },
]

const features = [
  {
    title: "M2 chip",
    description: "Powerful performance for demanding apps and games.",
  },
  {
    title: "Two sizes",
    description: "Now available in 11-inch and 13-inch. Pick your perfect size.",
  },
  {
    title: "Apple Pencil Pro",
    description: "Supports the all-new Apple Pencil Pro with squeeze and barrel roll.",
  },
  {
    title: "Landscape camera",
    description: "12MP Ultra Wide camera with Center Stage - now on the landscape edge.",
  },
]

export function IPadAirContent({ dictionary, lang }: IPadAirContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iPad Air"
        subheadline="Fresh Air."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/ipad-air/x/images/overview/hero/hero_endframe__c5bvqnlur3y6_large_2x.jpg",
          alt: "iPad Air",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-ipad/ipad-air") }}
        isNew
      />

      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="Supercharged by Apple Intelligence."
        description="iPad Air is built for Apple Intelligence. Write, summarize, create images - powered by M2."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/ipad-air/x/images/overview/apple-intelligence/apple_intelligence__gn8a5f0ckdwy_large_2x.jpg",
          alt: "Apple Intelligence on iPad Air",
        }}
      />

      <FeatureSection
        eyebrow="Design"
        headline="Two stunning sizes."
        description="iPad Air is now available in 11-inch and 13-inch. Both feature an all-screen design with Liquid Retina display and thin, light construction."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ipad-air/x/images/overview/design/design__bqz5jvo31bgy_large_2x.jpg",
          alt: "iPad Air sizes",
        }}
      />

      <FeatureSection
        eyebrow="M2"
        headline="M2. Massive muscle."
        description="M2 delivers incredible performance for demanding creative apps, immersive games, and smooth multitasking."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/ipad-air/x/images/overview/chip/chip__fcs8jtdkdg82_large_2x.jpg",
          alt: "M2 chip in iPad Air",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Camera"
        headline="Look this way."
        description="The 12MP Ultra Wide front camera is now on the landscape edge, so you look great on video calls whether you're holding iPad or using Magic Keyboard."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ipad-air/x/images/overview/camera/camera__csb4aoh91eia_large_2x.jpg",
          alt: "iPad Air camera",
        }}
      />

      <FeatureGrid features={features} variant="gray" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $599"
        priceNote="or $49.91/mo. for 12 mo."
        tradeIn="$80-$400"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-ipad/ipad-air")}
      />
    </div>
  )
}
