"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { FeatureSectionProps } from "./types"

export function FeatureSection({
  headline,
  description,
  eyebrow,
  image,
  video,
  variant = "light",
  alignment = "center",
  reversed = false,
  className,
}: FeatureSectionProps) {
  const [imageError, setImageError] = useState(false)

  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  const descriptionColor = {
    dark: "text-[#a1a1a6]",
    light: "text-[#6e6e73]",
    gray: "text-[#6e6e73]",
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-32",
        variantStyles[variant],
        className
      )}
    >
      <div
        className={cn(
          "apple-container flex flex-col gap-12",
          alignment === "center" && "items-center text-center",
          alignment === "left" && "items-start text-left",
          alignment === "right" && "items-end text-right",
          reversed && "md:flex-row-reverse",
          !reversed && (image || video) && "md:flex-row md:items-center"
        )}
      >
        {/* Text Content */}
        <div
          className={cn(
            "flex flex-col max-w-2xl",
            (image || video) && "md:flex-1"
          )}
        >
          {eyebrow && (
            <p
              className={cn(
                "text-sm font-semibold uppercase tracking-wider mb-2",
                descriptionColor[variant]
              )}
            >
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
            {headline}
          </h2>
          {description && (
            <p
              className={cn(
                "text-lg md:text-xl leading-relaxed",
                descriptionColor[variant]
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Media */}
        {(image || video) && (
          <div className="relative flex-1 w-full min-h-[300px] md:min-h-[400px]">
            {video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={video.poster}
                className="w-full h-full object-contain"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            ) : image && !imageError ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                unoptimized
                onError={() => setImageError(true)}
              />
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}

export function FeatureSectionFullWidth({
  headline,
  description,
  eyebrow,
  image,
  video,
  variant = "dark",
  className,
}: FeatureSectionProps) {
  const [imageError, setImageError] = useState(false)

  const variantStyles = {
    dark: "bg-black text-[#f5f5f7]",
    light: "bg-white text-[#1d1d1f]",
    gray: "bg-[#f5f5f7] text-[#1d1d1f]",
  }

  const descriptionColor = {
    dark: "text-[#a1a1a6]",
    light: "text-[#6e6e73]",
    gray: "text-[#6e6e73]",
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden min-h-[600px] md:min-h-[800px]",
        variantStyles[variant],
        className
      )}
    >
      {/* Background Media */}
      {(image || video) && (
        <div className="absolute inset-0">
          {video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={video.poster}
              className="w-full h-full object-cover"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ) : image && !imageError ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              unoptimized
              onError={() => setImageError(true)}
            />
          ) : null}
          {/* Overlay gradient */}
          <div
            className={cn(
              "absolute inset-0",
              variant === "dark"
                ? "bg-gradient-to-b from-black/60 via-transparent to-black/60"
                : "bg-gradient-to-b from-white/60 via-transparent to-white/60"
            )}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full py-20 px-6">
        {eyebrow && (
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-wider mb-2",
              descriptionColor[variant]
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4 max-w-4xl">
          {headline}
        </h2>
        {description && (
          <p
            className={cn(
              "text-xl md:text-2xl leading-relaxed max-w-2xl",
              descriptionColor[variant]
            )}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
