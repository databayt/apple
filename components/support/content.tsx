"use client"

import { HeroSection } from "@/components/template/hero-section"

export function SupportContent() {
  return (
    <div className="flex flex-col">
      <HeroSection
        headline="Support"
        subheadline="We're here to help."
        variant="light"
        size="large"
      />
    </div>
  )
}
