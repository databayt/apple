"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from "@/components/atom/icons"
import { APPLE_SEARCH_SUGGESTIONS } from "./constants"
import type { Locale } from "@/components/local/config"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
  lang?: Locale
}

export function SearchOverlay({ isOpen, onClose, lang = "en" }: SearchOverlayProps) {
  const [query, setQuery] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const localizedHref = (href: string) => `/${lang}${href}`

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 left-0 right-0 bg-[#1d1d1f] z-50 apple-nav-blur">
        <div className="apple-container">
          <div className="flex items-center h-11 gap-3">
            <Icons.appleSearch className="size-4 text-[#86868b]" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search apple.com"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-[#f5f5f7] text-base placeholder:text-[#86868b] outline-none"
            />
            <button
              onClick={onClose}
              className="text-[#86868b] hover:text-[#f5f5f7] transition-colors"
            >
              <Icons.close className="size-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-[#424245]">
          <div className="apple-container py-8">
            <h3 className="text-xs text-[#86868b] font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {APPLE_SEARCH_SUGGESTIONS.map((suggestion, index) => (
                <li key={index}>
                  <Link
                    href={localizedHref(`/search?q=${encodeURIComponent(suggestion)}`)}
                    onClick={onClose}
                    className="flex items-center gap-2 text-sm text-[#f5f5f7] hover:text-white transition-colors group"
                  >
                    <Icons.chevronRight className="size-2 text-[#86868b] group-hover:text-[#f5f5f7] transition-colors" />
                    {suggestion}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
