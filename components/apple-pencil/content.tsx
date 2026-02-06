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

interface ApplePencilContentProps {
  dictionary: Dictionary
  lang: Locale
}

const specs = [
  {
    title: "Apple Pencil Pro",
    items: [
      { label: "Squeeze", value: "Bring up tool palette" },
      { label: "Barrel roll", value: "Rotate shaped tools" },
      { label: "Haptic feedback", value: "Yes" },
      { label: "Hover", value: "Yes" },
      { label: "Find My", value: "Yes" },
    ],
  },
  {
    title: "Apple Pencil (USB-C)",
    items: [
      { label: "Charging", value: "USB-C" },
      { label: "Hover", value: "Yes (iPad Pro M4 and M2)" },
      { label: "Pixel-perfect precision", value: "Yes" },
      { label: "Tilt sensitivity", value: "Yes" },
    ],
  },
  {
    title: "Compatible iPad Models",
    items: [
      { label: "Apple Pencil Pro", value: "iPad Pro (M4), iPad Air (M2), iPad mini (A17 Pro)" },
      { label: "Apple Pencil (USB-C)", value: "All iPad models with USB-C" },
    ],
  },
]

const features = [
  {
    title: "Apple Pencil Pro",
    description: "The most advanced Apple Pencil. Squeeze, barrel roll, and haptic feedback.",
  },
  {
    title: "Pixel-perfect precision",
    description: "Industry-leading low latency for natural, responsive drawing.",
  },
  {
    title: "Hover preview",
    description: "See where your stroke will land before you touch the screen.",
  },
  {
    title: "Find My",
    description: "Locate your Apple Pencil Pro if it gets misplaced.",
  },
]

export function ApplePencilContent({ dictionary, lang }: ApplePencilContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Pencil"
        subheadline="Creativity at your fingertips."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-pencil/n/images/overview/hero/hero__gnmq2bdvxiia_large_2x.jpg",
          alt: "Apple Pencil",
        }}
        primaryCTA={{ label: common?.compare || "Compare", href: "#compare" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/apple-pencil") }}
      />

      <FeatureSection
        eyebrow="Apple Pencil Pro"
        headline="Pro to the touch."
        description="Squeeze to bring up your tools. Roll for precise brush control. Feel haptic feedback as you work. It's a whole new way to create."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-pencil/n/images/overview/pencil-pro/pencil_pro__f7gtomsbadiq_large_2x.jpg",
          alt: "Apple Pencil Pro",
        }}
      />

      <FeatureSection
        eyebrow="Precision"
        headline="Draw, write, mark up."
        description="Apple Pencil delivers pixel-perfect precision, industry-leading low latency, and tilt and pressure sensitivity. Perfect for detailed work."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-pencil/n/images/overview/precision/precision__c98zvdw32wo2_large_2x.jpg",
          alt: "Apple Pencil precision",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Hover"
        headline="See where you're going."
        description="Hover lets you see exactly where your Apple Pencil will touch down. Preview your mark before you make it."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-pencil/n/images/overview/hover/hover__f94w67khy4eu_large_2x.jpg",
          alt: "Apple Pencil hover",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $79"
        priceNote="Apple Pencil Pro $129"
        buyHref={localizedHref("/shop/product/apple-pencil")}
      />
    </div>
  )
}
