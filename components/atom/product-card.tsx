"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AppleLink } from "@/components/atom/apple-link"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  name: string
  tagline?: string
  href: string
  image?: {
    src: string
    alt: string
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
  size?: "full" | "half"
  isNew?: boolean
  className?: string
}

export function ProductCard({
  name,
  tagline,
  href,
  image,
  primaryCTA,
  secondaryCTA,
  variant = "light",
  size = "half",
  isNew,
  className,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  const sizeStyles = {
    full: "col-span-2",
    half: "col-span-1",
  }

  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden h-[580px]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-10 pb-4 px-4">
        {isNew && (
          <span className="text-[#f56300] text-sm font-medium mb-1">New</span>
        )}
        <Link href={href}>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
            {name}
          </h3>
        </Link>
        {tagline && (
          <p
            className={cn(
              "text-lg mt-1 mb-3",
              variant === "dark" ? "text-[#a1a1a6]" : "text-[#6e6e73]"
            )}
          >
            {tagline}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex items-center gap-4 mt-1">
            {primaryCTA && (
              <AppleLink href={primaryCTA.href}>{primaryCTA.label}</AppleLink>
            )}
            {secondaryCTA && (
              <AppleLink href={secondaryCTA.href}>{secondaryCTA.label}</AppleLink>
            )}
          </div>
        )}
      </div>

      {/* Image or Placeholder */}
      <Link href={href} className="relative flex-1 w-full flex items-center justify-center">
        {image && !imageError ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain object-top"
            unoptimized
            onError={() => setImageError(true)}
          />
        ) : (
          <ProductPlaceholder name={name} variant={variant} />
        )}
      </Link>
    </article>
  )
}

function ProductPlaceholder({ name, variant }: { name: string; variant: string }) {
  const baseColor = variant === "dark" ? "bg-[#2d2d2f]" : "bg-[#e8e8ed]"
  const borderColor = variant === "dark" ? "border-[#424245]" : "border-[#d2d2d7]"

  if (name.toLowerCase().includes("macbook") || name.toLowerCase().includes("mac")) {
    return (
      <div className={`w-64 h-44 ${baseColor} rounded-lg relative shadow-xl`}>
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-2 ${baseColor} rounded-b-lg`} />
      </div>
    )
  }

  if (name.toLowerCase().includes("ipad")) {
    return (
      <div className={`w-48 h-64 ${baseColor} rounded-2xl border ${borderColor} shadow-xl`} />
    )
  }

  if (name.toLowerCase().includes("watch")) {
    return (
      <div className={`w-28 h-36 ${baseColor} rounded-[2rem] border-4 ${borderColor} shadow-xl relative`}>
        <div className={`absolute -right-1 top-1/3 w-2 h-8 ${baseColor} rounded-r-full`} />
      </div>
    )
  }

  if (name.toLowerCase().includes("airpods")) {
    return (
      <div className="flex gap-2">
        <div className={`w-16 h-24 ${baseColor} rounded-2xl shadow-xl relative`}>
          <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-8 ${baseColor} rounded-b-full`} />
        </div>
        <div className={`w-16 h-24 ${baseColor} rounded-2xl shadow-xl relative`}>
          <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-8 ${baseColor} rounded-b-full`} />
        </div>
      </div>
    )
  }

  if (name.toLowerCase().includes("vision")) {
    return (
      <div className={`w-56 h-20 ${baseColor} rounded-full shadow-xl relative`}>
        <div className="absolute inset-2 bg-black/30 rounded-full" />
      </div>
    )
  }

  if (name.toLowerCase().includes("iphone")) {
    return (
      <div className={`w-32 h-64 ${baseColor} rounded-[2rem] border-4 ${borderColor} shadow-xl relative`}>
        <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full`} />
      </div>
    )
  }

  if (name.toLowerCase().includes("homepod")) {
    return (
      <div className={`w-28 h-36 ${baseColor} rounded-full shadow-xl`} />
    )
  }

  if (name.toLowerCase().includes("tv")) {
    return (
      <div className={`w-16 h-16 ${baseColor} rounded-xl shadow-xl`} />
    )
  }

  return (
    <div className={`w-32 h-32 ${baseColor} rounded-2xl shadow-xl`} />
  )
}

interface ProductCardCompactProps {
  name: string
  description?: string
  href: string
  image?: {
    src: string
    alt: string
  }
  variant?: "dark" | "light"
  className?: string
}

export function ProductCardCompact({
  name,
  description,
  href,
  image,
  variant = "light",
  className,
}: ProductCardCompactProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:scale-[1.02]",
        variant === "dark" ? "bg-[#1d1d1f] text-[#f5f5f7]" : "bg-white text-[#1d1d1f]",
        className
      )}
    >
      <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
        {image && !imageError ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            unoptimized
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-24 h-24 ${variant === "dark" ? "bg-[#2d2d2f]" : "bg-[#e8e8ed]"} rounded-2xl`} />
        )}
      </div>
      <h4 className="text-lg font-semibold group-hover:text-[#0071e3] transition-colors">
        {name}
      </h4>
      {description && (
        <p className={cn(
          "text-sm mt-1",
          variant === "dark" ? "text-[#86868b]" : "text-[#6e6e73]"
        )}>
          {description}
        </p>
      )}
    </Link>
  )
}
