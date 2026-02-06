"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPhone16ProContentProps } from "./types"
import { specs, features, pricing } from "./data"

export function IPhone16ProContent({ dictionary, lang }: IPhone16ProContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        eyebrow="iPhone 16 Pro"
        headline="Hello, Apple Intelligence."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/iphone-16-pro/d/images/overview/hero/hero_endframe__bskinoqvgecy_large_2x.jpg",
          alt: "iPhone 16 Pro",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: localizedHref("/shop/buy-iphone/iphone-16-pro") }}
        isNew
      />

      {/* Apple Intelligence */}
      <FeatureSectionFullWidth
        eyebrow="Apple Intelligence"
        headline="AI for the rest of us."
        description="Write, summarize, and express yourself in ways you never thought possible. Apple Intelligence understands you and helps you get things done."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/iphone-16-pro/d/images/overview/apple-intelligence/apple_intelligence__gpljkfwvyryq_large_2x.jpg",
          alt: "Apple Intelligence on iPhone 16 Pro",
        }}
      />

      {/* Design */}
      <FeatureSection
        eyebrow="Design"
        headline="Titanium. So strong. So light. So Pro."
        description="iPhone 16 Pro features a Grade 5 titanium design with a refined new microblasted finish. Titanium has one of the best strength-to-weight ratios of any metal, making these our lightest Pro models ever."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-16-pro/d/images/overview/design/design_702x750__ddw86ccp2s2a_large_2x.jpg",
          alt: "iPhone 16 Pro titanium design",
        }}
      />

      {/* Camera Control */}
      <FeatureSectionFullWidth
        eyebrow="Camera Control"
        headline="Your new favorite button."
        description="Camera Control gives you an easier way to quickly access camera tools. Simply slide your finger to adjust camera functions like exposure or depth of field, and icons provide haptic feedback."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/iphone-16-pro/d/images/overview/camera-control/camera_control__ey4pcfak25ym_large_2x.jpg",
          alt: "Camera Control on iPhone 16 Pro",
        }}
      />

      {/* Camera System */}
      <FeatureSection
        eyebrow="Pro Camera System"
        headline="Capture. Action."
        description="Take unbelievably detailed photos with the 48MP Fusion camera. Shoot in 48MP ultra-wide for incredible landscape shots. And get closer than ever with the 5x Telephoto camera."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/iphone-16-pro/d/images/overview/camera/camera_702x750__c1bppvxn60aq_large_2x.jpg",
          alt: "iPhone 16 Pro camera system",
        }}
        reversed
      />

      {/* A18 Pro Chip */}
      <FeatureSection
        eyebrow="A18 Pro"
        headline="A monster win for gaming."
        description="A18 Pro is an absolute powerhouse. It enables Apple Intelligence with a faster Neural Engine. And it delivers our best-ever graphics performance for incredibly detailed gaming with console-quality features like ray tracing."
        variant="light"
        image={{
          src: "https://www.apple.com/v/iphone-16-pro/d/images/overview/chip/chip__elv7x9gobk2q_large_2x.jpg",
          alt: "A18 Pro chip",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="gray" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price={pricing.price}
        priceNote={pricing.priceNote}
        tradeIn={pricing.tradeIn}
        tradeInNote={pricing.tradeInNote}
        buyHref={localizedHref("/shop/buy-iphone/iphone-16-pro")}
      />
    </div>
  )
}
