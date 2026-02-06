"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleFitnessPlusContentProps {
  dictionary: Dictionary
  lang: Locale
}

const features = [
  {
    title: "Thousands of workouts",
    description: "From HIIT to yoga, strength to dance. Something for everyone.",
  },
  {
    title: "Apple Watch integration",
    description: "See your metrics on screen in real time.",
  },
  {
    title: "World-class trainers",
    description: "Expert trainers who inspire and motivate you.",
  },
  {
    title: "Meditations",
    description: "Guided meditations to help you focus and relax.",
  },
]

export function AppleFitnessPlusContent({ dictionary, lang }: AppleFitnessPlusContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Apple Fitness+"
        subheadline="Workout with Apple Watch."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-fitness-plus/p/images/overview/hero/hero__fi8g0v1pjxaq_large_2x.jpg",
          alt: "Apple Fitness+",
        }}
        primaryCTA={{ label: "Try it free", href: localizedHref("/apple-fitness-plus/try") }}
        secondaryCTA={{ label: "See all workouts", href: localizedHref("/apple-fitness-plus/workouts") }}
      />

      <FeatureSection
        eyebrow="Workouts"
        headline="Move your way."
        description="Choose from thousands of workouts across multiple types — HIIT, strength, yoga, cycling, running, and more."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-fitness-plus/p/images/overview/workouts/workouts__cpqkcn2kbzwi_large_2x.jpg",
          alt: "Apple Fitness+ workouts",
        }}
      />

      <FeatureSection
        eyebrow="Apple Watch"
        headline="Your metrics. On screen."
        description="See your heart rate, calories burned, and Activity rings during your workout. Get motivated by real-time feedback."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-fitness-plus/p/images/overview/metrics/metrics__eb7hd3qzw5ea_large_2x.jpg",
          alt: "Apple Fitness+ Apple Watch integration",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Trainers"
        headline="World-class guidance."
        description="Our diverse team of trainers brings expertise, energy, and encouragement to every workout and meditation."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-fitness-plus/p/images/overview/trainers/trainers__ekxz2cqb0nym_large_2x.jpg",
          alt: "Apple Fitness+ trainers",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />

      <BuyStrip
        price="$9.99/mo."
        priceNote="1 month free, then $9.99/mo."
        buyHref={localizedHref("/apple-fitness-plus/try")}
      />
    </div>
  )
}
