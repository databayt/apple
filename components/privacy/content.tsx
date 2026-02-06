"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "App Tracking Transparency",
    description: "You control which apps can track your activity.",
  },
  {
    title: "Safari Privacy",
    description: "Intelligent Tracking Prevention blocks trackers.",
  },
  {
    title: "Mail Privacy Protection",
    description: "Hides your IP address and prevents tracking pixels.",
  },
  {
    title: "Privacy Labels",
    description: "See what data apps collect before you download.",
  },
]

export function PrivacyContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Privacy"
        subheadline="Privacy. That's iPhone."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/privacy/s/images/overview/hero/hero__bks0z6x99cmu_large_2x.jpg",
          alt: "Privacy",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Our Approach"
        headline="Privacy is a fundamental human right."
        description="At Apple, we believe privacy is a fundamental human right. And so much of your personal information lives on your Apple devices. We design our products to protect your data and give you control over your information."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/privacy/s/images/overview/approach/approach__e3y51qwog7qu_large_2x.jpg",
          alt: "Privacy approach",
        }}
      />

      <FeatureSection
        eyebrow="App Tracking Transparency"
        headline="Your data is yours."
        description="Apps are required to ask your permission before tracking your activity across other companies' apps and websites."
        variant="light"
        image={{
          src: "https://www.apple.com/v/privacy/s/images/overview/app-tracking/app_tracking__c4xbxw7q6quy_large_2x.jpg",
          alt: "App Tracking Transparency",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Safari"
        headline="Browse without being followed."
        description="Safari was the first browser to block third-party cookies by default. Intelligent Tracking Prevention uses machine learning to identify trackers and prevent them from profiling or following you."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/privacy/s/images/overview/safari/safari__f53b8j5t4oyi_large_2x.jpg",
          alt: "Safari privacy",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            See privacy in action.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            Read our privacy labels, check your settings, and learn how Apple
            protects your data.
          </p>
          <a
            href="https://www.apple.com/privacy/features"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            View Privacy Features
          </a>
        </div>
      </section>
    </div>
  )
}
