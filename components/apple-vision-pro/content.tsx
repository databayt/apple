"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  FeatureSectionFullWidth,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"

const specs = [
  {
    title: "Display",
    items: [
      { label: "Display system", value: "Micro-OLED with 23 million pixels" },
      { label: "Pixels per eye", value: "More than a 4K TV for each eye" },
      { label: "Color", value: "Wide color (P3)" },
      { label: "HDR support", value: "Yes" },
    ],
  },
  {
    title: "Chip",
    items: [
      { label: "Apple silicon", value: "M2 chip" },
      { label: "Specialized processor", value: "R1 chip for real-time sensor processing" },
      { label: "Cameras", value: "12 cameras, 5 sensors, 6 microphones" },
    ],
  },
  {
    title: "Audio",
    items: [
      { label: "Spatial Audio", value: "Built-in speakers with Spatial Audio" },
      { label: "Audio ray tracing", value: "Yes" },
      { label: "AirPods support", value: "Automatic switching" },
    ],
  },
  {
    title: "Input",
    items: [
      { label: "Eye tracking", value: "High-performance eye tracking" },
      { label: "Hand tracking", value: "Natural hand gestures" },
      { label: "Voice", value: "Siri voice control" },
      { label: "Virtual keyboard", value: "Yes" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Enclosure", value: "Three-dimensionally formed laminated glass and aluminum frame" },
      { label: "Light Seal", value: "Soft textile Light Seal" },
      { label: "Headband", value: "3D knitted headband with 2 sizes" },
      { label: "Battery", value: "External battery with up to 2 hours of use" },
    ],
  },
]

const features = [
  {
    title: "Spatial Computing",
    description:
      "An infinite canvas for apps that scales with your space. See your world in a whole new way.",
  },
  {
    title: "visionOS",
    description:
      "A revolutionary operating system designed for spatial experiences. Navigate with your eyes, hands, and voice.",
  },
  {
    title: "Entertainment",
    description:
      "Watch movies and shows on a screen that feels 100 feet wide. Experience immersive environments.",
  },
  {
    title: "Productivity",
    description:
      "Create an enormous workspace with all your apps arranged around you. The ultimate multitasking.",
  },
]

export function AppleVisionProContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="Apple Vision Pro"
        subheadline="Welcome to the era of spatial computing."
        variant="dark"
        size="large"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/h/images/overview/hero/portrait_base__bww1xkwfaoqa_large_2x.jpg",
          alt: "Apple Vision Pro",
        }}
        primaryCTA={{ label: "Learn more", href: "#features" }}
        secondaryCTA={{ label: "Buy", href: "/shop/buy-vision/apple-vision-pro" }}
      />

      {/* Spatial Computing */}
      <FeatureSectionFullWidth
        eyebrow="visionOS"
        headline="An infinite canvas for apps."
        description="Apple Vision Pro seamlessly blends digital content with your physical space. Apps float in front of you, expanding to fill any space."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/h/images/overview/apps/apps__fo87cv7cka82_large_2x.jpg",
          alt: "visionOS apps",
        }}
      />

      {/* Display */}
      <FeatureSection
        eyebrow="Display"
        headline="More pixels than a 4K TV. For each eye."
        description="Apple Vision Pro features a micro-OLED display system with 23 million pixels. Every experience is delivered in stunning clarity."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/h/images/overview/design/design__b3ccmwf4rx0i_large_2x.jpg",
          alt: "Apple Vision Pro display",
        }}
      />

      {/* Entertainment */}
      <FeatureSectionFullWidth
        eyebrow="Entertainment"
        headline="The ultimate theater. In your living room."
        description="Watch movies and shows on a screen that feels 100 feet wide. Apple Vision Pro transforms any space into your own personal cinema."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/h/images/overview/entertainment/entertainment__6a8w7xa8u2ai_large_2x.jpg",
          alt: "Apple Vision Pro entertainment",
        }}
      />

      {/* Productivity */}
      <FeatureSection
        eyebrow="Productivity"
        headline="Your workspace. Everywhere."
        description="Arrange apps all around you in an enormous workspace. Use familiar apps like Safari, Mail, and Messages in entirely new ways."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/h/images/overview/productivity/productivity__bbpqgxndgjy2_large_2x.jpg",
          alt: "Apple Vision Pro productivity",
        }}
        reversed
      />

      {/* Input */}
      <FeatureSection
        eyebrow="Input"
        headline="Navigate with your eyes, hands, and voice."
        description="Look at an app. Tap your fingers to select. Swipe to scroll. Use Siri to open apps, dictate text, and more. It's the most intuitive interface ever."
        variant="light"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/h/images/overview/input/input__bsppjglj7gia_large_2x.jpg",
          alt: "Apple Vision Pro input methods",
        }}
      />

      {/* Design */}
      <FeatureSection
        eyebrow="Design"
        headline="Beautifully designed. Remarkably refined."
        description="A singular piece of three-dimensionally formed laminated glass. An aluminum alloy frame. Meticulously crafted to deliver an incredible experience."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/apple-vision-pro/h/images/overview/design/design__cnxd05h7hfcm_large_2x.jpg",
          alt: "Apple Vision Pro design",
        }}
      />

      {/* Feature Grid */}
      <FeatureGrid features={features} variant="gray" columns={4} />

      {/* Specs */}
      <SpecGrid specs={specs} />

      {/* Buy Strip */}
      <BuyStrip
        price="From $3,499"
        priceNote="or $291.58/mo. for 12 mo."
        buyHref="/shop/buy-vision/apple-vision-pro"
      />
    </div>
  )
}
