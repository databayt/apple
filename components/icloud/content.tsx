"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface ICloudContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "iCloud Photos",
    description: "All your photos and videos, accessible from any device.",
  },
  {
    title: "iCloud Drive",
    description: "Store and access your files from anywhere.",
  },
  {
    title: "Device backup",
    description: "Automatically back up your iPhone, iPad, and Mac.",
  },
  {
    title: "Private Relay",
    description: "Browse Safari privately with iCloud+.",
  },
]

export function ICloudContent({ dictionary, lang }: ICloudContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iCloud"
        subheadline="Keeps your life together."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/icloud/c/images/overview/hero/hero__b9dgtxqgwgom_large_2x.jpg",
          alt: "iCloud",
        }}
        primaryCTA={{ label: "Get started", href: localizedHref("/icloud/start") }}
        secondaryCTA={{ label: "See plans", href: "#plans" }}
      />

      <FeatureSection
        eyebrow="Photos"
        headline="All your photos. Everywhere."
        description="iCloud Photos keeps your entire photo library up to date and available on all your devices. So you can browse, search, and share from anywhere."
        variant="light"
        image={{
          src: "https://www.apple.com/v/icloud/c/images/overview/photos/photos__cby8bqkq05ty_large_2x.jpg",
          alt: "iCloud Photos",
        }}
      />

      <FeatureSection
        eyebrow="Drive"
        headline="Your files. Always ready."
        description="iCloud Drive stores your files and keeps them up to date across all your devices. Access documents from your iPhone, iPad, or Mac."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/icloud/c/images/overview/drive/drive__g1bhqnqo8buy_large_2x.jpg",
          alt: "iCloud Drive",
        }}
        reversed
      />

      <section className="bg-[#f5f5f7] py-20">
        <div className="apple-container">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">
            iCloud+ plans
          </h2>
          <p className="text-lg text-[#6e6e73] text-center mb-12">
            Every plan includes premium features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-xl font-semibold mb-1">50 GB</p>
              <p className="text-2xl font-semibold mb-4">$0.99<span className="text-sm text-[#6e6e73]">/mo.</span></p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-xl font-semibold mb-1">200 GB</p>
              <p className="text-2xl font-semibold mb-4">$2.99<span className="text-sm text-[#6e6e73]">/mo.</span></p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border-2 border-[#0071e3]">
              <span className="text-[#0071e3] text-xs font-semibold">Popular</span>
              <p className="text-xl font-semibold mb-1">2 TB</p>
              <p className="text-2xl font-semibold mb-4">$10.99<span className="text-sm text-[#6e6e73]">/mo.</span></p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-xl font-semibold mb-1">12 TB</p>
              <p className="text-2xl font-semibold mb-4">$59.99<span className="text-sm text-[#6e6e73]">/mo.</span></p>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid features={features} variant="light" columns={4} />

      <BuyStrip
        price="From $0.99/mo."
        priceNote="5GB free with Apple ID"
        buyHref={localizedHref("/icloud/start")}
      />
    </div>
  )
}
