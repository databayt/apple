"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPhone16ContentProps } from "./types"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Size", value: '6.1" or 6.7" Super Retina XDR display' },
      { label: "Resolution", value: "2556x1179 or 2796x1290 pixels" },
      { label: "Peak brightness", value: "2000 nits (outdoor)" },
      { label: "Dynamic Island", value: "Yes" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Processor", value: "A18 chip" },
      { label: "CPU", value: "6-core CPU (2 performance + 4 efficiency)" },
      { label: "GPU", value: "5-core GPU" },
      { label: "Neural Engine", value: "16-core Neural Engine" },
    ],
  },
  {
    title: "Camera",
    items: [
      { label: "Main", value: "48MP Fusion camera" },
      { label: "Ultra Wide", value: "12MP Ultra Wide camera" },
      { label: "Front", value: "12MP TrueDepth front camera" },
      { label: "Video", value: "4K Dolby Vision up to 60fps" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Video playback", value: "Up to 22 or 27 hours" },
      { label: "Charging", value: "MagSafe, Qi2 wireless, USB-C" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Material", value: "Aerospace-grade aluminum" },
      { label: "Front glass", value: "Ceramic Shield front" },
      { label: "Water resistance", value: "IP68" },
      { label: "Colors", value: "Ultramarine, Teal, Pink, White, Black" },
    ],
  },
]

const features = [
  {
    title: "Apple Intelligence",
    description:
      "The personal intelligence system that helps you write, express yourself, and get things done effortlessly.",
  },
  {
    title: "Camera Control",
    description:
      "A new way to interact with your camera. Quick access to camera tools with a simple click.",
  },
  {
    title: "A18 chip",
    description:
      "Fast enough to power Apple Intelligence. Efficient enough for all-day battery life.",
  },
  {
    title: "48MP camera",
    description:
      "Our most advanced dual-camera system ever. Take stunning photos in any light.",
  },
]

export function IPhone16Content({ dictionary, lang }: IPhone16ContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        eyebrow="iPhone 16"
        headline="A total powerhouse."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/iphone-16/d/images/overview/hero/hero_endframe__cb6isb3j4vue_large_2x.jpg",
          alt: "iPhone 16",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-16") }}
        isNew
      />

      {/* Apple Intelligence */}
      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="AI for the rest of us."
        description="iPhone 16 is built from the ground up for Apple Intelligence. Write, express yourself, and get things done effortlessly."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/iphone-16/d/images/overview/apple-intelligence/apple_intelligence__biv2pbsyht2a_large_2x.jpg",
          alt: "Apple Intelligence on iPhone 16",
        }}
      />

      {/* Design */}
      <FeatureSection
        eyebrow="Design"
        headline="Designed to be icons."
        description="iPhone 16 features a striking design with a camera layout inspired by the original iPhone. New gorgeous colors make it stand out from the crowd."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-16/d/images/overview/design/design_702x750__fkegxdi52wia_large_2x.jpg",
          alt: "iPhone 16 design",
        }}
      />

      {/* Camera Control */}
      <FeatureSectionFullWidth
        eyebrow="Camera Control"
        headline="Take control."
        description="Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/iphone-16/d/images/overview/camera-control/camera_control__dk7a3qx3g0ia_large_2x.jpg",
          alt: "Camera Control on iPhone 16",
        }}
      />

      {/* Camera System */}
      <FeatureSection
        eyebrow="Camera"
        headline="The camera changes everything."
        description="The 48MP Fusion camera captures stunning detail and vibrant colors. Shoot beautiful portraits and zoom in to frame your shot just how you like it."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/iphone-16/d/images/overview/camera/camera_702x750__gu6lrxekpfwy_large_2x.jpg",
          alt: "iPhone 16 camera",
        }}
        reversed
      />

      {/* A18 Chip */}
      <FeatureSection
        eyebrow="A18"
        headline="Fast that lasts."
        description="A18 delivers incredible performance for demanding tasks, while being remarkably efficient for all-day battery life. It's the engine that powers Apple Intelligence."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-16/d/images/overview/chip/chip__fb77s77kxb0i_large_2x.jpg",
          alt: "A18 chip",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="gray" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price="From $799"
        priceNote="or $33.29/mo. for 24 mo."
        tradeIn="$180–$650"
        tradeInNote="with Apple Trade In"
        buyHref={localizedHref("/shop/buy-iphone/iphone-16")}
      />
    </div>
  )
}
