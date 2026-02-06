"use client"

import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { TvHomeNav } from "@/components/tv-home/nav"
import { Hero } from "./hero"
import { Usps } from "./usps"
import { VideoCarousel } from "./video-carousel"

interface AppleTVPlusContentProps {
  dictionary: Dictionary
  lang: Locale
}

export function AppleTVPlusContent({ dictionary, lang }: AppleTVPlusContentProps) {
  return (
    <div className="-mt-11 bg-black">
      <TvHomeNav lang={lang} />

      <div className="relative z-10 bg-black">
        <Hero lang={lang} />
        <Usps lang={lang} />
      </div>

      <VideoCarousel lang={lang} />
    </div>
  )
}
