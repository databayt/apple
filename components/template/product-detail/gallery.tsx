"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { GalleryProps } from "./types"

export function Gallery({ images, variant = "light", className }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  const variantStyles = {
    dark: "bg-black",
    light: "bg-[#f5f5f7]",
  }

  const validImages = images.filter((_, i) => !imageErrors.has(i))

  if (validImages.length === 0) return null

  return (
    <section className={cn("py-20", variantStyles[variant], className)}>
      <div className="apple-container">
        {/* Main Image */}
        <div className="relative aspect-[16/10] max-w-5xl mx-auto mb-8">
          {!imageErrors.has(activeIndex) && (
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
              unoptimized
              onError={() => handleImageError(activeIndex)}
            />
          )}
        </div>

        {/* Caption */}
        {images[activeIndex].caption && (
          <p
            className={cn(
              "text-center text-lg mb-8",
              variant === "dark" ? "text-[#a1a1a6]" : "text-[#6e6e73]"
            )}
          >
            {images[activeIndex].caption}
          </p>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                  activeIndex === index
                    ? "border-[#0071e3]"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                {!imageErrors.has(index) && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized
                    onError={() => handleImageError(index)}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export function GalleryCarousel({
  images,
  variant = "light",
  className,
}: GalleryProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  const variantStyles = {
    dark: "bg-black",
    light: "bg-[#f5f5f7]",
  }

  return (
    <section className={cn("py-20", variantStyles[variant], className)}>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 pb-4 snap-x snap-mandatory">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[80vw] max-w-3xl aspect-[4/3] snap-center rounded-2xl overflow-hidden"
            >
              {!imageErrors.has(index) && (
                <>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized
                    onError={() => handleImageError(index)}
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white text-lg">{image.caption}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
