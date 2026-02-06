"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { AirPodsProContentProps } from "./types"

const specs = [
  {
    title: "Audio",
    items: [
      { label: "Driver", value: "Apple-designed H2 chip and custom driver" },
      { label: "Noise cancellation", value: "Active Noise Cancellation" },
      { label: "Transparency mode", value: "Yes, with Adaptive Audio" },
      { label: "Spatial Audio", value: "Personalized Spatial Audio with dynamic head tracking" },
    ],
  },
  {
    title: "Hearing Features",
    items: [
      { label: "Hearing aid", value: "Clinical-grade hearing aid feature (pending approval)" },
      { label: "Hearing test", value: "Built-in hearing test" },
      { label: "Hearing protection", value: "Loud sound reduction" },
    ],
  },
  {
    title: "Controls",
    items: [
      { label: "Touch control", value: "Swipe volume control, press to play/pause" },
      { label: "Head gestures", value: "Nod to accept, shake to decline calls" },
      { label: "Siri", value: "Hands-free Siri access" },
    ],
  },
  {
    title: "Battery",
    items: [
      { label: "Listening time", value: "Up to 6 hours with ANC" },
      { label: "Case battery", value: "Up to 30 hours total listening time" },
      { label: "Charging", value: "USB-C, MagSafe, Qi wireless, Apple Watch charger" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Ear tips", value: "4 pairs of silicone tips (XS, S, M, L)" },
      { label: "Water resistance", value: "IP54 dust, sweat, and water resistant" },
      { label: "Case features", value: "Built-in speaker, lanyard loop, Find My with Precision Finding" },
    ],
  },
]

const features = [
  {
    title: "Hearing Aid Feature",
    description:
      "Clinical-grade hearing assistance. Turn up the world around you when you need to.",
  },
  {
    title: "Active Noise Cancellation",
    description:
      "Up to 2x more noise cancellation than the original AirPods Pro. Immerse yourself in sound.",
  },
  {
    title: "Adaptive Audio",
    description:
      "Dynamically blends Transparency mode and Active Noise Cancellation based on your environment.",
  },
  {
    title: "Personalized Spatial Audio",
    description:
      "Sound tuned just for you. Creates an immersive listening experience.",
  },
]

export function AirPodsProContent({ dictionary, lang }: AirPodsProContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        eyebrow="AirPods Pro 2"
        headline="Intelligent hearing."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/airpods-pro/m/images/overview/hero/hero__ersmq69x5vma_large_2x.jpg",
          alt: "AirPods Pro 2",
        }}
        primaryCTA={{ label: common?.learnMore || "Learn more", href: "#features" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/airpods-pro") }}
      />

      {/* Hearing Aid Feature */}
      <FeatureSectionFullWidth
        eyebrow="Hearing Aid Feature"
        headline="Hear what you've been missing."
        description="AirPods Pro can now work as a clinical-grade hearing aid. Take a hearing test right from your iPhone and get personalized hearing assistance."
        variant="light"
        image={{
          src: "https://www.apple.com/v/airpods-pro/m/images/overview/hearing/hearing__c7xdkzq0ewu6_large_2x.jpg",
          alt: "AirPods Pro hearing aid feature",
        }}
      />

      {/* Active Noise Cancellation */}
      <FeatureSection
        eyebrow="Active Noise Cancellation"
        headline="Silence is golden."
        description="Up to 2x more Active Noise Cancellation than the original AirPods Pro. Block out the world when you need to focus."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/airpods-pro/m/images/overview/audio/audio_anc__ehfwsv2kh0ya_large_2x.jpg",
          alt: "Active Noise Cancellation",
        }}
      />

      {/* Adaptive Audio */}
      <FeatureSectionFullWidth
        eyebrow="Adaptive Audio"
        headline="The right sound for every moment."
        description="Adaptive Audio dynamically blends Transparency mode and Active Noise Cancellation based on your surroundings. You stay connected to your environment."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/airpods-pro/m/images/overview/audio/audio_adaptive__fz9gnxqnycq2_large_2x.jpg",
          alt: "Adaptive Audio",
        }}
      />

      {/* Spatial Audio */}
      <FeatureSection
        eyebrow="Spatial Audio"
        headline="Immerse yourself."
        description="Personalized Spatial Audio with dynamic head tracking surrounds you in sound that follows your every move. Like you're there."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/airpods-pro/m/images/overview/audio/audio_spatial__fhy6b2u9z4ia_large_2x.jpg",
          alt: "Spatial Audio",
        }}
        reversed
      />

      {/* Case */}
      <FeatureSection
        eyebrow="Case"
        headline="The case is closed. And open."
        description="The MagSafe Charging Case features a built-in speaker, lanyard loop, and precision finding so you can locate it with Find My."
        variant="light"
        image={{
          src: "https://www.apple.com/v/airpods-pro/m/images/overview/case/case__e9w2ftj2gv6i_large_2x.jpg",
          alt: "AirPods Pro case",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="gray" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price="$249"
        buyHref={localizedHref("/shop/product/airpods-pro")}
      />
    </div>
  )
}
