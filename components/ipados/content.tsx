"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Apple Intelligence",
    description: "Powerful AI that respects your privacy.",
  },
  {
    title: "Calculator",
    description: "Finally on iPad, with Math Notes.",
  },
  {
    title: "Smart Script",
    description: "Your handwriting, refined in real time.",
  },
  {
    title: "Customization",
    description: "Make your iPad truly yours.",
  },
]

export function IPadOSContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iPadOS 18"
        subheadline="Your canvas. Your rules."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/ipados/ipados-18/d/images/overview/hero/hero__e4kscmb9beoi_large_2x.jpg",
          alt: "iPadOS 18",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "See what's new", href: "/ipados/ipados-18" }}
      />

      <FeatureSection
        eyebrow="Apple Intelligence"
        headline="Intelligence that works for you."
        description="Apple Intelligence on iPad helps you write, express yourself, and get things done effortlessly. It understands your personal context while protecting your privacy."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/ipados/ipados-18/d/images/overview/apple-intelligence/apple_intelligence__ddqbqo2g5bwy_large_2x.jpg",
          alt: "Apple Intelligence on iPad",
        }}
      />

      <FeatureSection
        eyebrow="Calculator"
        headline="It adds up."
        description="Calculator comes to iPad with a beautiful new design and Math Notes, which lets you write out math problems and get instant solutions in your own handwriting."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ipados/ipados-18/d/images/overview/calculator/calculator__c4uqxqk1obea_large_2x.jpg",
          alt: "Calculator on iPad",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Smart Script"
        headline="Your handwriting. Perfected."
        description="Smart Script refines your handwriting in real time, making it smoother and more legible while keeping your personal style."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/ipados/ipados-18/d/images/overview/smart-script/smart_script__e1tspkw7gzm6_large_2x.jpg",
          alt: "Smart Script",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Update to iPadOS 18.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Available for iPad Pro (M4), iPad Air (M2), and more.
          </p>
          <a
            href="https://support.apple.com/ipados/update"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Learn how to update
          </a>
        </div>
      </section>
    </div>
  )
}
