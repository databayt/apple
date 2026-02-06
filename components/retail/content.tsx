"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Today at Apple",
    description: "Free creative sessions at every Apple Store.",
  },
  {
    title: "Genius Bar",
    description: "Get expert help and hardware service.",
  },
  {
    title: "Personal Setup",
    description: "One-on-one help getting started with your new device.",
  },
  {
    title: "Trade In",
    description: "Turn your old device into credit toward a new one.",
  },
]

export function RetailContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Store"
        subheadline="The best place to buy Apple products."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/retail/u/images/overview/hero/hero__d5exj0ep4w2i_large_2x.jpg",
          alt: "Apple Store",
        }}
        primaryCTA={{ label: "Find a Store", href: "/retail/storelist" }}
        secondaryCTA={{ label: "Learn more", href: "#services" }}
      />

      <FeatureSection
        eyebrow="Today at Apple"
        headline="Learn something new."
        description="Join free creative sessions at every Apple Store. From photo and video to music and coding, there's something for everyone."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/retail/u/images/overview/today_at_apple/today_at_apple__fy7wvqj7z9ue_large_2x.jpg",
          alt: "Today at Apple",
        }}
      />

      <FeatureSection
        eyebrow="Genius Bar"
        headline="Get expert help."
        description="Our Geniuses can help with everything from setup to repairs. Make an appointment at your nearest Apple Store."
        variant="light"
        image={{
          src: "https://www.apple.com/v/retail/u/images/overview/genius_bar/genius_bar__b5dqnz7h82ea_large_2x.jpg",
          alt: "Genius Bar",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Personal Setup"
        headline="Get started with your new device."
        description="Our Specialists will help you set up your new device, transfer your data, and show you the features you'll love."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/retail/u/images/overview/personal_setup/personal_setup__e1x5qj7h82yi_large_2x.jpg",
          alt: "Personal Setup",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Find an Apple Store near you.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Visit us in person or shop online.
          </p>
          <a
            href="/retail/storelist"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Find a Store
          </a>
        </div>
      </section>
    </div>
  )
}
