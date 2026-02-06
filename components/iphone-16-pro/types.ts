import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

// Props Types
export interface IPhone16ProContentProps {
  dictionary: Dictionary
  lang: Locale
}

// Data Types
export interface SpecItem {
  label: string
  value: string
}

export interface SpecCategory {
  title: string
  items: SpecItem[]
}

export interface Feature {
  title: string
  description: string
}

// Component Props Types
export interface HeroConfig {
  eyebrow: string
  headline: string
  variant: "dark" | "light"
  size: "large" | "medium" | "small"
  image: {
    src: string
    alt: string
  }
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA: {
    label: string
    href: string
  }
  isNew?: boolean
}

export interface FeatureSectionConfig {
  eyebrow: string
  headline: string
  description: string
  variant: "dark" | "light" | "gray"
  image: {
    src: string
    alt: string
  }
  reversed?: boolean
}
