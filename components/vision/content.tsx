"use client"

import { HeroSection } from "@/components/template/hero-section"
import { AppleLink } from "@/components/atom/apple-link"

export function VisionContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="Apple Vision Pro"
        subheadline="Welcome to spatial computing."
        primaryCTA={{ label: "Learn more", href: "/apple-vision-pro" }}
        secondaryCTA={{ label: "Buy", href: "/shop/buy-vision/apple-vision-pro" }}
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/d/images/overview/hero/portrait_vision_702x702__exuqfbhbiqlu_large_2x.jpg",
          alt: "Apple Vision Pro",
        }}
      />

      {/* Features Grid */}
      <section className="bg-black text-[#f5f5f7] py-20">
        <div className="apple-container text-center">
          <h2 className="text-5xl font-semibold mb-6">
            The era of spatial computing is here.
          </h2>
          <p className="text-xl text-[#86868b] max-w-3xl mx-auto mb-10">
            Apple Vision Pro seamlessly blends digital content with your physical space. So you can work, watch, relive memories, and connect in ways never before possible.
          </p>
          <AppleLink href="/apple-vision-pro#video" variant="large">
            Watch the film
          </AppleLink>
        </div>
      </section>

      {/* Apps */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="apple-container text-center">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
            Apps on Apple Vision Pro
          </h2>
          <p className="text-lg text-[#6e6e73] mb-8 max-w-2xl mx-auto">
            Discover a growing collection of apps and games built from the ground up for Apple Vision Pro, and experience iPhone and iPad apps in your space.
          </p>
          <AppleLink href="/apple-vision-pro/apps" variant="large">
            Explore apps
          </AppleLink>
        </div>
      </section>

      {/* Book a Demo */}
      <section className="py-20 text-center">
        <div className="apple-container">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
            Book a demo at an Apple Store.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-8">
            Try Apple Vision Pro at an Apple Store near you.
          </p>
          <AppleLink href="/retail/instore-shopping-sessions/apple-vision-pro" variant="large">
            Book a demo
          </AppleLink>
        </div>
      </section>
    </div>
  )
}
