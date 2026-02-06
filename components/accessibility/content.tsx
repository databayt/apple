"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "VoiceOver",
    description: "A screen reader that tells you what's on your screen.",
  },
  {
    title: "Magnifier",
    description: "Turns your iPhone into a digital magnifying glass.",
  },
  {
    title: "Live Captions",
    description: "Read captions for any audio in real time.",
  },
  {
    title: "AssistiveTouch",
    description: "Customize touch controls to your needs.",
  },
]

export function AccessibilityContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Accessibility"
        subheadline="Built for everyone."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/accessibility/s/images/overview/hero/hero__b1ov4g1wv5iq_large_2x.jpg",
          alt: "Accessibility",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Vision"
        headline="See what matters to you."
        description="Features like VoiceOver, Magnifier, and Display accommodations help people with vision impairments experience their devices in ways that work for them."
        variant="light"
        image={{
          src: "https://www.apple.com/v/accessibility/s/images/overview/vision/vision__c1lz4uf3w4eu_large_2x.jpg",
          alt: "Vision accessibility",
        }}
      />

      <FeatureSection
        eyebrow="Hearing"
        headline="Hear every word. Every sound."
        description="Live Captions, Made for iPhone hearing devices, and Sound Recognition help people who are deaf or hard of hearing stay connected."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/accessibility/s/images/overview/hearing/hearing__fxq9j1c5zkia_large_2x.jpg",
          alt: "Hearing accessibility",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Mobility"
        headline="Your way. Your device."
        description="Voice Control, Switch Control, and AssistiveTouch let you control your devices using alternatives to touch, providing independence for people with motor impairments."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/accessibility/s/images/overview/mobility/mobility__ghzv4p5wk0iu_large_2x.jpg",
          alt: "Mobility accessibility",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Explore all accessibility features.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            Discover features for vision, hearing, mobility, and cognitive
            accessibility across all Apple products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/accessibility/vision"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#d2d2d7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e8e8ed] transition-colors"
            >
              Vision
            </a>
            <a
              href="/accessibility/hearing"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#d2d2d7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e8e8ed] transition-colors"
            >
              Hearing
            </a>
            <a
              href="/accessibility/mobility"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#d2d2d7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e8e8ed] transition-colors"
            >
              Mobility
            </a>
            <a
              href="/accessibility/cognitive"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#d2d2d7] text-[#1d1d1f] rounded-full font-medium hover:bg-[#e8e8ed] transition-colors"
            >
              Cognitive
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
