"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Natural language",
    description: "Speak naturally and Siri understands.",
  },
  {
    title: "On-screen awareness",
    description: "Siri knows what's on your screen.",
  },
  {
    title: "Type to Siri",
    description: "Prefer to type? Just double-tap.",
  },
  {
    title: "Personal context",
    description: "Siri knows your preferences and routines.",
  },
]

export function SiriContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Siri"
        subheadline="Your intelligent assistant."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/siri/c/images/overview/hero/hero__bwnz2bvskz6q_large_2x.jpg",
          alt: "Siri",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Apple Intelligence"
        headline="Siri, supercharged."
        description="With Apple Intelligence, Siri becomes more natural, more relevant, and more personal. It can understand and create language and images, take action in apps, and draw on your personal context."
        variant="light"
        image={{
          src: "https://www.apple.com/v/siri/c/images/overview/apple-intelligence/apple_intelligence__c7y4x9qb7l2a_large_2x.jpg",
          alt: "Siri with Apple Intelligence",
        }}
      />

      <FeatureSection
        eyebrow="Natural"
        headline="More conversational than ever."
        description="Siri now understands language more naturally. You can stumble over words, correct yourself mid-sentence, and Siri keeps up."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/siri/c/images/overview/natural/natural__fewi3b5oqxqy_large_2x.jpg",
          alt: "Natural Siri",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Personal"
        headline="Siri gets you."
        description="Siri can now understand your personal context. Ask about a text your mom sent, and Siri knows who your mom is and can find the message."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/siri/c/images/overview/personal/personal__cb3uykgk7h2a_large_2x.jpg",
          alt: "Personal Siri",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-black text-white py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ask Siri anything.
          </h2>
          <p className="text-lg text-[#86868b] mb-6 max-w-2xl mx-auto">
            Available on iPhone, iPad, Mac, Apple Watch, Apple TV, HomePod, and
            AirPods.
          </p>
          <a
            href="/apple-intelligence"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Learn about Apple Intelligence
          </a>
        </div>
      </section>
    </div>
  )
}
