"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleCardContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "Daily Cash",
    description: "Get up to 3% Daily Cash back on every purchase. No limits.",
  },
  {
    title: "No fees",
    description: "No annual, late, international, or over-limit fees.",
  },
  {
    title: "Privacy & Security",
    description: "Apple doesn't know what you bought or where.",
  },
  {
    title: "Titanium Card",
    description: "A beautiful titanium card for when you need to pay with card.",
  },
]

export function AppleCardContent({ dictionary, lang }: AppleCardContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Card"
        subheadline="A new kind of credit card."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-card/g/images/overview/hero/hero__ewzavrtrqmiy_large_2x.jpg",
          alt: "Apple Card",
        }}
        primaryCTA={{ label: "Apply now", href: localizedHref("/apple-card/apply") }}
        secondaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="Daily Cash"
        headline="Get Daily Cash with every purchase."
        description="3% on Apple purchases and select partners. 2% when you use Apple Card with Apple Pay. 1% on everything else."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-card/g/images/overview/daily_cash/daily_cash__bxc9m0y1x94u_large_2x.jpg",
          alt: "Apple Card Daily Cash",
        }}
      />

      <FeatureSection
        eyebrow="No Fees"
        headline="No annual fee. No late fees."
        description="Apple Card has no fees of any kind. No annual fee. No late fees. No international fees. No over-limit fees."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-card/g/images/overview/no_fees/no_fees__c8bx8xxo4h4q_large_2x.jpg",
          alt: "Apple Card no fees",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Security"
        headline="More secure than a typical credit card."
        description="A unique card number on your device. No card number, CVV, or signature on the titanium card."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-card/g/images/overview/security/security__e5f1v7r2q5qe_large_2x.jpg",
          alt: "Apple Card security",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Apply for Apple Card today.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            See if you're approved in minutes.
          </p>
          <a
            href={localizedHref("/apple-card/apply")}
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
          >
            Apply now
          </a>
        </div>
      </section>
    </div>
  )
}
