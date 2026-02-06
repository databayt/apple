export interface HeroSectionProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  video?: {
    src: string
    poster?: string
  }
  variant?: "dark" | "light" | "gray"
  alignment?: "center" | "left"
  size?: "large" | "medium" | "small"
  isNew?: boolean
}
