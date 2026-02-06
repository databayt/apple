"use client"

import Image from "next/image"
import { useState } from "react"
import { AppleLink } from "@/components/atom/apple-link"
import { cn } from "@/lib/utils"
import type { HeroSectionProps } from "./types"

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  image,
  video,
  variant = "light",
  alignment = "center",
  size = "large",
  isNew,
}: HeroSectionProps) {
  const [imageError, setImageError] = useState(false)

  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  const sizeStyles = {
    large: "min-h-[580px] md:min-h-[692px]",
    medium: "min-h-[500px] md:min-h-[580px]",
    small: "min-h-[400px] md:min-h-[480px]",
  }

  const headlineStyles = {
    large: "apple-text-headline",
    medium: "apple-text-headline-reduced",
    small: "apple-text-intro text-4xl md:text-5xl",
  }

  return (
    <section
      className={cn(
        "relative flex flex-col overflow-hidden",
        variantStyles[variant],
        sizeStyles[size]
      )}
    >
      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex flex-col pt-12 md:pt-16 pb-8",
          alignment === "center" && "items-center text-center",
          alignment === "left" && "items-start text-left apple-container"
        )}
      >
        {isNew && (
          <span className="text-[#f56300] text-sm font-medium mb-2">New</span>
        )}

        {eyebrow && (
          <p className="apple-text-eyebrow mb-1 opacity-80">{eyebrow}</p>
        )}

        <h2 className={cn(headlineStyles[size], "mb-2")}>{headline}</h2>

        {subheadline && (
          <p
            className={cn(
              "apple-text-intro mb-4 max-w-2xl",
              variant === "dark" ? "text-[#a1a1a6]" : "text-[#6e6e73]"
            )}
          >
            {subheadline}
          </p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {primaryCTA && (
              <AppleLink href={primaryCTA.href} variant="large">
                {primaryCTA.label}
              </AppleLink>
            )}
            {secondaryCTA && (
              <AppleLink href={secondaryCTA.href} variant="large">
                {secondaryCTA.label}
              </AppleLink>
            )}
          </div>
        )}
      </div>

      {/* Media */}
      {(image || video) && (
        <div className="relative flex-1 w-full">
          {/* Gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 z-[1]",
              variant === "dark"
                ? "bg-gradient-to-b from-transparent via-black/20 to-black/50"
                : "bg-gradient-to-b from-transparent via-white/10 to-white/30"
            )}
          />

          {video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={video.poster}
              className="absolute inset-0 w-full h-full object-cover object-top"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ) : image && !imageError ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              priority
              unoptimized
              onError={() => setImageError(true)}
            />
          ) : null}
        </div>
      )}
    </section>
  )
}

export function HeroSectionTile({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  image,
  variant = "light",
  isNew,
}: HeroSectionProps) {
  const [imageError, setImageError] = useState(false)

  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  return (
    <section
      className={cn(
        "relative flex flex-col overflow-hidden h-[580px]",
        variantStyles[variant]
      )}
    >
      <div className="relative z-10 flex flex-col items-center text-center pt-10 pb-4 px-4">
        {isNew && (
          <span className="text-[#f56300] text-sm font-medium mb-1">New</span>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold mb-0.5 opacity-80">{eyebrow}</p>
        )}
        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-1">
          {headline}
        </h3>
        {subheadline && (
          <p
            className={cn(
              "text-lg mb-3",
              variant === "dark" ? "text-[#a1a1a6]" : "text-[#6e6e73]"
            )}
          >
            {subheadline}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex items-center gap-4">
            {primaryCTA && (
              <AppleLink href={primaryCTA.href}>{primaryCTA.label}</AppleLink>
            )}
            {secondaryCTA && (
              <AppleLink href={secondaryCTA.href}>{secondaryCTA.label}</AppleLink>
            )}
          </div>
        )}
      </div>

      {image && !imageError && (
        <div className="relative flex-1 w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain object-top"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </section>
  )
}
