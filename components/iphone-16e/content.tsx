"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPhone16eContentProps } from "./types"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Size", value: '6.1" Super Retina XDR display' },
      { label: "Resolution", value: "2556x1179 pixels" },
      { label: "Peak brightness", value: "2000 nits (outdoor)" },
      { label: "Dynamic Island", value: "Yes" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Processor", value: "A18 chip" },
      { label: "CPU", value: "6-core CPU" },
      { label: "GPU", value: "5-core GPU" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Main", value: "48MP Fusion camera" },
      { label: "Front", value: "12MP TrueDepth front camera" },
      { label: "Video", value: "4K Dolby Vision up to 60fps" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Video playback", value: "Up to 26 hours" },
      { label: "Charging", value: "MagSafe, Qi2 wireless, USB-C" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Material", value: "Aerospace-grade aluminum" },
      { label: "Front glass", value: "Ceramic Shield front" },
      { label: "Water resistance", value: "IP68" },
      { label: "Colors", value: "Black, White, Pink, Blue" },
    ],
  },
]

const features = [
  {
    title: "Apple Intelligence",
    description:
      "Write, summarize, and express yourself with the power of Apple Intelligence built right in.",
  },
  {
    title: "A18 chip",
    description:
      "The same powerful chip as iPhone 16, built for Apple Intelligence and incredible performance.",
  },
  {
    title: "48MP camera",
    description:
      "Take stunning photos with a powerful 48MP Fusion camera system.",
  },
  {
    title: "All-day battery",
    description:
      "Up to 26 hours of video playback. That's serious staying power.",
  },
]

export function IPhone16eContent({ dictionary, lang }: IPhone16eContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        eyebrow="iPhone 16e"
        headline="A great deal more for a great deal less."
        variant="gray"
        size="large"
        image={{
          src: "https://www.apple.com/v/iphone-16e/a/images/overview/hero/hero_endframe__dt58gjqygog2_large_2x.jpg",
          alt: "iPhone 16e",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-16e") }}
        isNew
      />

      {/* Apple Intelligence */}
      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="AI for all of us."
        description="iPhone 16e brings Apple Intelligence to more people than ever. Write smarter, express yourself better, and get more done."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/iphone-16e/a/images/overview/apple-intelligence/apple_intelligence__biv2pbsyht2a_large_2x.jpg",
          alt: "Apple Intelligence on iPhone 16e",
        }}
      />

      {/* Design */}
      <FeatureSection
        eyebrow="Design"
        headline="Designed to shine."
        description="iPhone 16e features a beautiful aluminum and glass design with the Dynamic Island for an immersive experience."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-16e/a/images/overview/design/design_702x750__c0f42b78ngia_large_2x.jpg",
          alt: "iPhone 16e design",
        }}
      />

      {/* Camera */}
      <FeatureSection
        eyebrow="Camera"
        headline="48MP of wow."
        description="The 48MP Fusion camera captures incredible detail. Take stunning photos with advanced computational photography."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/iphone-16e/a/images/overview/camera/camera_702x750__e6gxij8f69o2_large_2x.jpg",
          alt: "iPhone 16e camera",
        }}
        reversed
      />

      {/* A18 Chip */}
      <FeatureSection
        eyebrow="A18"
        headline="Serious power. Serious value."
        description="A18 delivers the performance you need for demanding tasks and powers Apple Intelligence. All while maintaining incredible efficiency."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-16e/a/images/overview/chip/chip__fb77s77kxb0i_large_2x.jpg",
          alt: "A18 chip",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="gray" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price="From $599"
        priceNote="or $24.95/mo. for 24 mo."
        tradeIn="$90–$450"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-iphone/iphone-16e")}
      />
    </div>
  )
}
