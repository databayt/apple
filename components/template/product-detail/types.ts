export interface FeatureSectionProps {
  headline: string
  description?: string
  eyebrow?: string
  image?: {
    src: string
    alt: string
  }
  video?: {
    src: string
    poster?: string
  }
  variant?: "dark" | "light" | "gray"
  alignment?: "center" | "left" | "right"
  reversed?: boolean
  className?: string
}

export interface SpecItem {
  label: string
  value: string
}

export interface SpecCategory {
  title: string
  items: SpecItem[]
}

export interface SpecGridProps {
  specs: SpecCategory[]
  className?: string
}

export interface BuyStripProps {
  price: string
  priceNote?: string
  tradeIn?: string
  tradeInNote?: string
  buyHref: string
  learnMoreHref?: string
  className?: string
}

export interface GalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  variant?: "dark" | "light"
  className?: string
}

export interface ProductFeature {
  icon?: React.ReactNode
  title: string
  description: string
}

export interface FeatureGridProps {
  features: ProductFeature[]
  columns?: 2 | 3 | 4
  variant?: "dark" | "light" | "gray"
  className?: string
}

export interface ComparisonItem {
  name: string
  image: {
    src: string
    alt: string
  }
  specs: Record<string, string>
  href: string
  price?: string
  isNew?: boolean
}

export interface ComparisonTableProps {
  products: ComparisonItem[]
  specLabels: string[]
  className?: string
}
