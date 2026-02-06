"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPadProContentProps } from "./types"

const specs = [
  {
    title: "Chip",
    items: [
      { label: "Chip", value: "Apple M4" },
      { label: "CPU", value: "9-core or 10-core CPU" },
      { label: "GPU", value: "10-core GPU" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
    ],
  },
  {
    title: "Display",
    items: [
      { label: "Size", value: '11" or 13" Ultra Retina XDR display' },
      { label: "Technology", value: "Tandem OLED" },
      { label: "ProMotion", value: "Up to 120Hz" },
      { label: "Peak brightness", value: "1600 nits (HDR), 1000 nits (SDR)" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Back", value: "12MP Wide camera" },
      { label: "Front", value: "12MP Ultra Wide with Center Stage" },
      { label: "LiDAR", value: "Yes" },
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
      { label: "Thickness", value: "5.1mm (thinnest Apple device ever)" },
      { label: "Connector", value: "Thunderbolt / USB 4" },
      { label: "Face ID", value: "Yes" },
    ],
  },
]

const features = [
  {
    title: "M4 chip",
    description: "Outrageous performance. Built for Apple Intelligence and pro workflows.",
  },
  {
    title: "Ultra Retina XDR",
    description: "Tandem OLED delivers incredible brightness and contrast.",
  },
  {
    title: "5.1mm thin",
    description: "The thinnest Apple device ever. Unbelievably light.",
  },
  {
    title: "Apple Pencil Pro",
    description: "Squeeze, roll, and create like never before.",
  },
]

export function IPadProContent({ dictionary, lang }: IPadProContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iPad Pro"
        subheadline="Thinpossible."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/ipad-pro/ap/images/overview/hero/hero_endframe__b9dqd8vhc4gy_large_2x.jpg",
          alt: "iPad Pro",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/buy-ipad/ipad-pro") }}
        isNew
      />

      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="Built for Apple Intelligence."
        description="iPad Pro with M4 is designed for Apple Intelligence. Write, create, and get things done in powerful new ways."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/ipad-pro/ap/images/overview/apple-intelligence/apple_intelligence__bl6bvsfm0rc2_large_2x.jpg",
          alt: "Apple Intelligence on iPad Pro",
        }}
      />

      <FeatureSection
        eyebrow="Display"
        headline="Ultra Retina XDR. Ultra stunning."
        description="Tandem OLED technology delivers unbelievable brightness, contrast, and color accuracy. The most advanced display ever on iPad."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ipad-pro/ap/images/overview/display/display__drgm55fg3kya_large_2x.jpg",
          alt: "iPad Pro display",
        }}
      />

      <FeatureSection
        eyebrow="Design"
        headline="Impossibly thin. Unbelievably powerful."
        description="At just 5.1mm, iPad Pro is the thinnest Apple device ever. Yet it's packed with M4 power for the most demanding workflows."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/ipad-pro/ap/images/overview/design/design__fzx9wi4aqvia_large_2x.jpg",
          alt: "iPad Pro design",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Apple Pencil Pro"
        headline="Pro in every sense."
        description="Apple Pencil Pro brings new gestures like squeeze and barrel roll. Haptic feedback makes your creative work more precise and responsive."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ipad-pro/ap/images/overview/pencil/pencil__fl2kf2wv9dqu_large_2x.jpg",
          alt: "Apple Pencil Pro",
        }}
      />

      <FeatureGrid features={features} variant="gray" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $999"
        priceNote="or $83.25/mo. for 12 mo."
        tradeIn="$100-$580"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-ipad/ipad-pro")}
      />
    </div>
  )
}
