"use client"

import { HeroSection } from "@/components/template/hero-section"
import {
  FeatureSection,
  SpecGrid,
  BuyStrip,
  FeatureGrid,
} from "@/components/template/product-detail"
import type { IPadKeyboardsContentProps } from "./types"

const specs = [
  {
    title: "Magic Keyboard for iPad Pro",
    items: [
      { label: "Compatibility", value: "iPad Pro (M4), iPad Pro (M2)" },
      { label: "Keys", value: "Full-size backlit keys" },
      { label: "Trackpad", value: "Large trackpad with Multi-Touch gestures" },
      { label: "Connector", value: "USB-C for pass-through charging" },
      { label: "Design", value: "Floating cantilever design" },
    ],
  },
  {
    title: "Magic Keyboard for iPad Air",
    items: [
      { label: "Compatibility", value: "iPad Air (M2), iPad (10th gen)" },
      { label: "Keys", value: "Full-size backlit keys" },
      { label: "Trackpad", value: "Built-in trackpad" },
      { label: "Connector", value: "USB-C for pass-through charging" },
    ],
  },
  {
    title: "Smart Keyboard Folio",
    items: [
      { label: "Compatibility", value: "Various iPad models" },
      { label: "Keys", value: "Full-size keys" },
      { label: "Design", value: "Two-position stand" },
      { label: "Connection", value: "Smart Connector" },
    ],
  },
]

const features = [
  {
    title: "Magic Keyboard",
    description: "Floating design with backlit keys and built-in trackpad.",
  },
  {
    title: "Trackpad gestures",
    description: "Multi-Touch trackpad brings familiar gestures to iPad.",
  },
  {
    title: "USB-C charging",
    description: "Pass-through USB-C keeps your iPad charged while you work.",
  },
  {
    title: "Protection",
    description: "Front and back protection when closed.",
  },
]

export function IPadKeyboardsContent({ dictionary, lang }: IPadKeyboardsContentProps) {
  const common = dictionary.common
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      <HeroSection
        headline="iPad Keyboards"
        subheadline="The perfect typing companion."
        variant="light"
        size="large"
        image={{
          src: "https://www.apple.com/v/ipad-keyboards/j/images/overview/hero/magic_keyboard_hero__dcjr9jt5hx6a_large_2x.jpg",
          alt: "iPad Keyboards",
        }}
        primaryCTA={{ label: common?.compare || "Compare", href: "#compare" }}
        secondaryCTA={{ label: common?.buy || "Buy", href: localizedHref("/shop/product/ipad-keyboards") }}
      />

      <FeatureSection
        eyebrow="Magic Keyboard"
        headline="Type. Track. Transform."
        description="Magic Keyboard attaches magnetically and features a floating cantilever design. The built-in trackpad brings Multi-Touch gestures to iPad."
        variant="dark"
        image={{
          src: "https://www.apple.com/v/ipad-keyboards/j/images/overview/magic_keyboard/magic_keyboard__g1zyvqyh3byu_large_2x.jpg",
          alt: "Magic Keyboard",
        }}
      />

      <FeatureSection
        eyebrow="Trackpad"
        headline="Point and click comes to iPad."
        description="The built-in trackpad supports familiar Multi-Touch gestures. Navigate, select text, and work with apps just like on a Mac."
        variant="light"
        image={{
          src: "https://www.apple.com/v/ipad-keyboards/j/images/overview/trackpad/trackpad__gcxz5w1dhfiy_large_2x.jpg",
          alt: "Magic Keyboard trackpad",
        }}
        reversed
      />

      <FeatureSection
        eyebrow="Smart Keyboard Folio"
        headline="Simple. Versatile. Protective."
        description="Smart Keyboard Folio connects via Smart Connector - no charging or pairing needed. Two viewing angles for typing or watching."
        variant="gray"
        image={{
          src: "https://www.apple.com/v/ipad-keyboards/j/images/overview/smart_keyboard_folio/smart_keyboard_folio__dcey1i5j1m82_large_2x.jpg",
          alt: "Smart Keyboard Folio",
        }}
      />

      <FeatureGrid features={features} variant="light" columns={4} />
      <SpecGrid specs={specs} />

      <BuyStrip
        price="From $249"
        priceNote="Magic Keyboard for iPad Pro from $299"
        buyHref={localizedHref("/shop/product/ipad-keyboards")}
      />
    </div>
  )
}
