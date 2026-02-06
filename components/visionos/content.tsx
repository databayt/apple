"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Spatial Photos",
    description: "Turn your photos into immersive memories.",
  },
  {
    title: "New gestures",
    description: "Navigate with even more intuitive controls.",
  },
  {
    title: "Mac Virtual Display",
    description: "A massive Mac display in your space.",
  },
  {
    title: "Travel Mode",
    description: "Use Vision Pro on a plane.",
  },
]

export function VisionOSContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="visionOS 2"
        subheadline="The future of computing. Evolved."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/visionos/c/images/overview/hero/hero__c1pqdafl6nue_large_2x.jpg",
          alt: "visionOS 2",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "See what's new", href: "/visionos/visionos-2" }}
      />

      <FeatureSection
        eyebrow="Spatial Photos"
        headline="Your memories, all around you."
        description="visionOS 2 can transform your existing photos into spatial photos, adding depth and dimension to your favorite moments."
        variant="light"
        image={{
          src: "https://www.apple.com/v/visionos/c/images/overview/spatial-photos/spatial_photos__f0i3b6h3m0yq_large_2x.jpg",
          alt: "Spatial Photos",
        }}
      />

      <FeatureSection
        eyebrow="Gestures"
        headline="Control at your fingertips."
        description="New gestures make it even easier to navigate and interact with your apps. Just tap your fingers together to return home from anywhere."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/visionos/c/images/overview/gestures/gestures__b4g7a3z5xz6q_large_2x.jpg",
          alt: "visionOS gestures",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Mac Virtual Display"
        headline="A massive Mac. In your space."
        description="Bring your Mac screen into your space at any size. Work surrounded by your apps in infinite canvas."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/visionos/c/images/overview/mac-virtual-display/mac_virtual_display__fkqx6h3b5xm2_large_2x.jpg",
          alt: "Mac Virtual Display",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Experience visionOS 2.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Available now on Apple Vision Pro.
          </p>
          <a
            href="/apple-vision-pro"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Learn about Vision Pro
          </a>
        </div>
      </section>
    </div>
  )
}
