"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Vitals app",
    description: "See your key health metrics at a glance.",
  },
  {
    title: "Training Load",
    description: "Understand the strain of your workouts over time.",
  },
  {
    title: "Smart Stack",
    description: "Widgets that surface what you need, when you need it.",
  },
  {
    title: "Photos face",
    description: "Your favorite photos, right on your wrist.",
  },
]

export function WatchOSContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="watchOS 11"
        subheadline="More insight. More progress."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/watchos/watchos-11/c/images/overview/hero/hero__bskinz6m6rm6_large_2x.jpg",
          alt: "watchOS 11",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "See what's new", href: "/watchos/watchos-11" }}
      />

      <FeatureSection
        eyebrow="Vitals"
        headline="Your health. At a glance."
        description="The new Vitals app shows you key health metrics and highlights when something is out of your typical range, so you can take action if needed."
        variant="light"
        image={{
          src: "https://www.apple.com/v/watchos/watchos-11/c/images/overview/vitals/vitals__6hnmjz3tofma_large_2x.jpg",
          alt: "Vitals app",
        }}
      />

      <FeatureSection
        eyebrow="Training Load"
        headline="Push smarter. Not just harder."
        description="Training Load helps you understand the strain your workouts put on your body, so you can adjust your effort and avoid overtraining."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/watchos/watchos-11/c/images/overview/training-load/training_load__fzx6hf5lsm2y_large_2x.jpg",
          alt: "Training Load",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Smart Stack"
        headline="The right info at the right time."
        description="Smart Stack uses machine learning to show you the most relevant widgets based on time, location, and your routines."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/watchos/watchos-11/c/images/overview/smart-stack/smart_stack__ftrukgywq9qm_large_2x.jpg",
          alt: "Smart Stack",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Update to watchOS 11.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Available for Apple Watch Series 6 and later.
          </p>
          <a
            href="https://support.apple.com/watchos/update"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Learn how to update
          </a>
        </div>
      </section>
    </div>
  )
}
