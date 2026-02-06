"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface ApplePayContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "Easy to use",
    description: "Double-click and look at your iPhone to pay with Face ID.",
  },
  {
    title: "Private & Secure",
    description: "Your card numbers are never stored or shared.",
  },
  {
    title: "Works everywhere",
    description: "Pay in stores, in apps, and on the web.",
  },
  {
    title: "Send money",
    description: "Send and receive money with Apple Cash.",
  },
]

export function ApplePayContent({ dictionary, lang }: ApplePayContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Pay"
        subheadline="Pay the easy way."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-pay/o/images/overview/hero/hero__byfxn4xllrqu_large_2x.jpg",
          alt: "Apple Pay",
        }}
        primaryCTA={{ label: "Set up Apple Pay", href: localizedHref("/apple-pay/setup") }}
        secondaryCTA={{ label: "Learn more", href: "#features" }}
      />

      <FeatureSection
        eyebrow="In Stores"
        headline="Pay in stores with your iPhone or Apple Watch."
        description="Just hold your device near the reader with your finger on Touch ID or double-click the side button for Face ID."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-pay/o/images/overview/in_stores/in_stores__bqhq9x7qz5yq_large_2x.jpg",
          alt: "Apple Pay in stores",
        }}
      />

      <FeatureSection
        eyebrow="In Apps"
        headline="Check out faster in apps."
        description="Look for Apple Pay as a payment option and complete your purchase without entering card details."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-pay/o/images/overview/in_apps/in_apps__g5kx9z5j4x2a_large_2x.jpg",
          alt: "Apple Pay in apps",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="On the Web"
        headline="Pay with Apple Pay on Safari."
        description="Shop on your favorite websites and check out with Apple Pay — no need to create accounts or fill in forms."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-pay/o/images/overview/on_web/on_web__d7b5x9zj3xqy_large_2x.jpg",
          alt: "Apple Pay on the web",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <section className="bg-[#f5f5f7] py-16 text-center">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-4">
            Set up Apple Pay.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            Add your cards to the Wallet app and start paying.
          </p>
        </div>
      </section>
    </div>
  )
}
