"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleOneContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "Apple Music",
    description: "Over 100 million songs. All ad-free. Listen anywhere.",
  },
  {
    title: "Apple TV+",
    description: "Award-winning Apple Originals. Stream on all your devices.",
  },
  {
    title: "Apple Arcade",
    description: "Hundreds of games with no ads or in-app purchases.",
  },
  {
    title: "iCloud+",
    description: "Secure storage for photos, files, and backups.",
  },
]

export function AppleOneContent({ dictionary, lang }: AppleOneContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple One"
        subheadline="All your favorites. One subscription."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-one/g/images/overview/hero/hero__cdp0dlb0xliu_large_2x.jpg",
          alt: "Apple One",
        }}
        primaryCTA={{ label: "Try it free", href: localizedHref("/apple-one/try") }}
        secondaryCTA={{ label: "Learn more", href: "#plans" }}
      />

      <FeatureSection
        eyebrow="Included Services"
        headline="Bundle Apple services and save."
        description="Apple One gives you access to Apple's best services in one simple subscription. Choose the plan that's right for you."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-one/g/images/overview/services/services__fl4r2n67oq2i_large_2x.jpg",
          alt: "Apple One services",
        }}
      />

      <section className="bg-[#f5f5f7] py-20">
        <div className="apple-container">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
            Choose your plan.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Individual */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-2">Individual</h3>
              <p className="text-4xl font-semibold mb-2">$19.95<span className="text-lg text-[#6e6e73]">/mo.</span></p>
              <ul className="text-left space-y-2 mt-6 text-[#1d1d1f]">
                <li>• Apple Music</li>
                <li>• Apple TV+</li>
                <li>• Apple Arcade</li>
                <li>• iCloud+ 50GB</li>
              </ul>
            </div>
            {/* Family */}
            <div className="bg-white rounded-2xl p-8 text-center border-2 border-[#0071e3]">
              <span className="text-[#0071e3] text-sm font-semibold">Most Popular</span>
              <h3 className="text-2xl font-semibold mb-2">Family</h3>
              <p className="text-4xl font-semibold mb-2">$25.95<span className="text-lg text-[#6e6e73]">/mo.</span></p>
              <ul className="text-left space-y-2 mt-6 text-[#1d1d1f]">
                <li>• Apple Music (up to 6)</li>
                <li>• Apple TV+</li>
                <li>• Apple Arcade</li>
                <li>• iCloud+ 200GB</li>
              </ul>
            </div>
            {/* Premier */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-2">Premier</h3>
              <p className="text-4xl font-semibold mb-2">$37.95<span className="text-lg text-[#6e6e73]">/mo.</span></p>
              <ul className="text-left space-y-2 mt-6 text-[#1d1d1f]">
                <li>• Apple Music (up to 6)</li>
                <li>• Apple TV+</li>
                <li>• Apple Arcade</li>
                <li>• iCloud+ 2TB</li>
                <li>• Apple News+</li>
                <li>• Apple Fitness+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid features={features} variant="light" columns={4} />

      <BuyStrip
        price="From $19.95/mo."
        priceNote="Try it free for 1 month"
        buyHref={localizedHref("/apple-one/try")}
      />
    </div>
  )
}
