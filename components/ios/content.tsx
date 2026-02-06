"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Apple Intelligence",
    description: "AI that understands you and respects your privacy.",
  },
  {
    title: "Customizable Home Screen",
    description: "Place apps and widgets anywhere. Tint them any color.",
  },
  {
    title: "Photos",
    description: "Your library, automatically organized and searchable.",
  },
  {
    title: "Messages",
    description: "New ways to express yourself with Tapbacks and effects.",
  },
]

export function IOSContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iOS 18"
        subheadline="Packed with new features."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/ios/ios-18/d/images/overview/hero/hero__fy3cxk6u9u2u_large_2x.jpg",
          alt: "iOS 18",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "See what's new", href: "/ios/ios-18" }}
      />

      <FeatureSection
        eyebrow="Apple Intelligence"
        headline="AI for the rest of us."
        description="Apple Intelligence helps you write, express yourself, and get things done effortlessly. It draws on your personal context while protecting your privacy."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/ios/ios-18/d/images/overview/apple-intelligence/apple_intelligence__c3u8c15y8gsy_large_2x.jpg",
          alt: "Apple Intelligence",
        }}
      />

      <FeatureSection
        eyebrow="Home Screen"
        headline="Make it yours."
        description="Place apps and widgets in any open position on the Home Screen, customize the look of your Lock Screen, and hide apps in a new locked folder."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ios/ios-18/d/images/overview/personalization/personalization__e6u3bhxo0eea_large_2x.jpg",
          alt: "iOS 18 customization",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Photos"
        headline="Automatically organized."
        description="The biggest-ever redesign of Photos makes it easier than ever to find and relive your special moments."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/ios/ios-18/d/images/overview/photos/photos__f4kwixiw4eyq_large_2x.jpg",
          alt: "Photos app",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Update to iOS 18.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Available for iPhone Xs and later.
          </p>
          <a
            href="https://support.apple.com/ios/update"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Learn how to update
          </a>
        </div>
      </section>
    </div>
  )
}
