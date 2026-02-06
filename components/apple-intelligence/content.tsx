"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Writing Tools",
    description: "Rewrite, proofread, and summarize text anywhere.",
  },
  {
    title: "Image Playground",
    description: "Create fun images in seconds.",
  },
  {
    title: "Genmoji",
    description: "Create custom emoji that look just like you.",
  },
  {
    title: "Siri",
    description: "More natural, more helpful, more you.",
  },
]

export function AppleIntelligenceContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Intelligence"
        subheadline="AI for the rest of us."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-intelligence/b/images/overview/hero/hero__b4to7y9krxte_large_2x.jpg",
          alt: "Apple Intelligence",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Privacy"
        headline="Private by design."
        description="Apple Intelligence is designed to protect your privacy at every step. It uses on-device processing where possible, and when more power is needed, Private Cloud Compute extends your privacy into the cloud."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-intelligence/b/images/overview/privacy/privacy__dbj4prcatmci_large_2x.jpg",
          alt: "Privacy",
        }}
      />

      <FeatureSection
        eyebrow="Writing Tools"
        headline="Write with confidence."
        description="Writing Tools help you find the right words virtually everywhere you write. Rewrite text to adjust the tone, proofread your work, and summarize lengthy articles."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-intelligence/b/images/overview/writing-tools/writing_tools__eyjny7gxgkmq_large_2x.jpg",
          alt: "Writing Tools",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Image Playground"
        headline="Create something fun."
        description="Image Playground lets you create playful images in seconds. Choose from animation, illustration, or sketch styles to bring your ideas to life."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-intelligence/b/images/overview/image-playground/image_playground__bwmhszqeuxuu_large_2x.jpg",
          alt: "Image Playground",
        }}
      />

      <FeatureSection
        eyebrow="Siri"
        headline="A more capable Siri."
        description="Siri draws on Apple Intelligence to be more natural, more relevant, and more personal. It understands context, remembers what you've discussed, and can take action across your apps."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-intelligence/b/images/overview/siri/siri__f41xt2nmpnma_large_2x.jpg",
          alt: "Siri",
        }}
        reversed
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-black text-white py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Available on devices with Apple silicon.
          </h2>
          <p className="text-lg text-[#86868b] mb-6 max-w-2xl mx-auto">
            Apple Intelligence is available on iPhone 16, iPhone 15 Pro, iPad
            with M1 or later, and Mac with M1 or later.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/iphone"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#424245] text-white rounded-full font-medium hover:bg-[#1d1d1f] transition-colors"
            >
              iPhone
            </a>
            <a
              href="/ipad"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#424245] text-white rounded-full font-medium hover:bg-[#1d1d1f] transition-colors"
            >
              iPad
            </a>
            <a
              href="/mac"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#424245] text-white rounded-full font-medium hover:bg-[#1d1d1f] transition-colors"
            >
              Mac
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
