"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppStoreContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "Expert curation",
    description: "Editors highlight the best apps and games every day.",
  },
  {
    title: "Privacy first",
    description: "Every app is reviewed to protect your privacy and security.",
  },
  {
    title: "In-App Purchases",
    description: "Clearly labeled with Ask to Buy for families.",
  },
  {
    title: "Discover",
    description: "Browse the Today tab, Top Charts, and categories.",
  },
]

export function AppStoreContent({ dictionary, lang }: AppStoreContentProps) {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="App Store"
        subheadline="There's an app for everything."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/app-store/b/images/overview/hero/hero__fxkbmyiydxqu_large_2x.jpg",
          alt: "App Store",
        }}
        primaryCTA={{ label: "Open App Store", href: "https://apps.apple.com" }}
        secondaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Discover"
        headline="Find your next favorite app."
        description="The Today tab features stories about apps, tips from developers, and collections curated by our editors."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/app-store/b/images/overview/today/today__elq10vcx7wyq_large_2x.jpg",
          alt: "App Store Today",
        }}
      />

      <FeatureSection
        eyebrow="Safety"
        headline="Safe and secure."
        description="Every app is reviewed before it appears on the App Store. We check for privacy, security, and content to give you peace of mind."
        variant="light"
        image={{
          src: "https://www.apple.com/v/app-store/b/images/overview/safety/safety__e7s8jlxbkkyq_large_2x.jpg",
          alt: "App Store safety",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Developers"
        headline="A platform for innovation."
        description="Developers use Apple's tools to create incredible experiences. The App Store gives them a global platform to reach customers."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/app-store/b/images/overview/developers/developers__d7wxvw1krcmu_large_2x.jpg",
          alt: "App Store developers",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Download the App Store app.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Open the App Store on your iPhone, iPad, or Mac to start exploring.
          </p>
        </div>
      </section>
    </div>
  )
}
