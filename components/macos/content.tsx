"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"

const features = [
  {
    title: "Apple Intelligence",
    description: "AI that works across all your apps.",
  },
  {
    title: "iPhone Mirroring",
    description: "Use your iPhone right from your Mac.",
  },
  {
    title: "Safari",
    description: "The fastest, most private browser.",
  },
  {
    title: "Gaming",
    description: "AAA titles with incredible performance.",
  },
]

export function MacOSContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="macOS Sequoia"
        subheadline="Your Mac. Elevated."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/macos/sequoia/d/images/overview/hero/hero__ccgxl3odq1e6_large_2x.jpg",
          alt: "macOS Sequoia",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "See what's new", href: "/macos/macos-sequoia" }}
      />

      <FeatureSection
        eyebrow="Apple Intelligence"
        headline="Redefining what Mac can do."
        description="Apple Intelligence on Mac helps you write, express yourself, and get things done effortlessly. It uses the power of Apple silicon to understand and create language and images, take action across apps, and draw on personal context."
        variant="light"
        image={{
          src: "https://www.apple.com/v/macos/sequoia/d/images/overview/apple-intelligence/apple_intelligence__fp71q0gvlquq_large_2x.jpg",
          alt: "Apple Intelligence on Mac",
        }}
      />

      <FeatureSection
        eyebrow="iPhone Mirroring"
        headline="Your iPhone. On your Mac."
        description="iPhone Mirroring lets you view and interact with your iPhone directly from your Mac. You can even drag and drop files between devices."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/macos/sequoia/d/images/overview/iphone-mirroring/iphone_mirroring__cxcfs8r8h7yq_large_2x.jpg",
          alt: "iPhone Mirroring",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Safari"
        headline="Smarter. Faster. More private."
        description="Safari is the best way to experience the internet on Mac. It's faster and more energy efficient than other browsers, with intelligent tracking prevention built in."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/macos/sequoia/d/images/overview/safari/safari__gf1jhzxyoouq_large_2x.jpg",
          alt: "Safari browser",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Upgrade to macOS Sequoia.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Free upgrade for Mac models from 2019 and later.
          </p>
          <a
            href="https://support.apple.com/macos/upgrade"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Learn how to upgrade
          </a>
        </div>
      </section>
    </div>
  )
}
