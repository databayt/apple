"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AppleLink } from "@/components/atom/apple-link"
import { cn } from "@/lib/utils"

interface PromoTileProps {
  title: string
  subtitle?: string
  description?: string
  href?: string
  image?: {
    src: string
    alt: string
  }
  logo?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  variant?: "dark" | "light" | "gray"
  size?: "large" | "medium" | "small"
  className?: string
}

export function PromoTile({
  title,
  subtitle,
  description,
  href,
  image,
  logo,
  primaryCTA,
  secondaryCTA,
  variant = "light",
  size = "medium",
  className,
}: PromoTileProps) {
  const [imageError, setImageError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  const sizeStyles = {
    large: "min-h-[580px]",
    medium: "min-h-[500px]",
    small: "min-h-[400px]",
  }

  const content = (
    <>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-10 pb-4 px-4">
        {logo && !logoError && (
          <div className="relative mb-2" style={{ width: logo.width || 100, height: logo.height || 40 }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              unoptimized
              onError={() => setLogoError(true)}
            />
          </div>
        )}
        {subtitle && (
          <p className={cn(
            "text-sm font-medium mb-1",
            variant === "dark" ? "text-[#a1a1a6]" : "text-[#6e6e73]"
          )}>
            {subtitle}
          </p>
        )}
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-1">
          {title}
        </h3>
        {description && (
          <p className={cn(
            "text-lg max-w-md",
            variant === "dark" ? "text-[#a1a1a6]" : "text-[#6e6e73]"
          )}>
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex items-center gap-4 mt-3">
            {primaryCTA && (
              <AppleLink href={primaryCTA.href}>{primaryCTA.label}</AppleLink>
            )}
            {secondaryCTA && (
              <AppleLink href={secondaryCTA.href}>{secondaryCTA.label}</AppleLink>
            )}
          </div>
        )}
      </div>

      {/* Image */}
      {image && !imageError && (
        <div className="relative flex-1 w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain object-bottom"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </>
  )

  const tileClasses = cn(
    "relative flex flex-col overflow-hidden",
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (href) {
    return (
      <Link href={href} className={cn(tileClasses, "group")}>
        {content}
      </Link>
    )
  }

  return <article className={tileClasses}>{content}</article>
}

interface PromoGridProps {
  children: React.ReactNode
  className?: string
}

export function PromoGrid({ children, className }: PromoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-3", className)}>
      {children}
    </div>
  )
}
