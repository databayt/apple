"use client"

import { usePathname } from "next/navigation"
import { AppleHeader } from "./content"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface HeaderWrapperProps {
  dictionary?: Dictionary
  lang?: Locale
}

// Pages that should use light header
const lightHeaderPaths = [
  "/tv-home",
  "/apple-tv-4k",
  "/apple-tv-app",
  "/apple-tv-plus",
  "/homepod",
  "/homepod-mini",
  "/home-app",
]

export function HeaderWrapper({ dictionary, lang = "en" }: HeaderWrapperProps) {
  const pathname = usePathname()

  // Check if current path should have light header
  const shouldUseLightHeader = lightHeaderPaths.some((path) => {
    const localizedPath = `/${lang}${path}`
    return pathname === localizedPath || pathname.startsWith(localizedPath + "/")
  })

  return (
    <AppleHeader
      dictionary={dictionary}
      lang={lang}
      variant={shouldUseLightHeader ? "light" : "dark"}
    />
  )
}
