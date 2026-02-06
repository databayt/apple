"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from "@/components/atom/icons"
import { APPLE_NAV_ITEMS } from "./constants"
import { NavDropdownContent } from "./nav-dropdown"
import { SearchOverlay } from "./search-overlay"
import { MobileNav } from "./mobile-nav"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleHeaderProps {
  dictionary?: Dictionary
  lang?: Locale
  variant?: "dark" | "light"
}

export function AppleHeader({ dictionary, lang = "en", variant = "dark" }: AppleHeaderProps) {
  const isLight = variant === "light"
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  // Helper to prefix links with lang
  const localizedHref = (href: string) => `/${lang}${href}`

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 100)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isLight
            ? activeDropdown
              ? "bg-white"
              : "bg-[rgba(251,251,253,0.8)] backdrop-blur-xl"
            : activeDropdown
              ? "bg-[#1d1d1f]"
              : "bg-[rgba(0,0,0,0.8)] apple-nav-blur"
        )}
      >
        <nav className="apple-container">
          <div className="flex items-center justify-between h-11">
            {/* Apple Logo */}
            <Link
              href={localizedHref("/")}
              className={cn(
                "transition-colors",
                isLight
                  ? "text-[#1d1d1f] hover:text-black"
                  : "text-[#f5f5f7] hover:text-white"
              )}
              onClick={closeDropdown}
            >
              <Icons.apple className="h-4 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-7">
              {APPLE_NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <Link
                    href={localizedHref(item.href)}
                    className={cn(
                      "text-xs transition-colors",
                      isLight
                        ? cn(
                            "text-[#1d1d1f] hover:text-black",
                            activeDropdown === item.label && "text-black"
                          )
                        : cn(
                            "text-[#f5f5f7] hover:text-white",
                            activeDropdown === item.label && "text-white"
                          )
                    )}
                    onClick={closeDropdown}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              {/* Search button - Desktop */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={cn(
                  "hidden lg:block transition-colors",
                  isLight
                    ? "text-[#1d1d1f] hover:text-black"
                    : "text-[#f5f5f7] hover:text-white"
                )}
              >
                <Icons.appleSearch className="size-4" />
              </button>

              {/* Bag - Desktop */}
              <Link
                href={localizedHref("/shop/bag")}
                className={cn(
                  "hidden lg:block transition-colors",
                  isLight
                    ? "text-[#1d1d1f] hover:text-black"
                    : "text-[#f5f5f7] hover:text-white"
                )}
              >
                <Icons.appleBag className="h-4 w-auto" />
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className={cn(
                  "lg:hidden p-2",
                  isLight ? "text-[#1d1d1f]" : "text-[#f5f5f7]"
                )}
              >
                <Icons.hamburger className="size-4" />
              </button>
            </div>
          </div>
        </nav>

        {/* Dropdown overlay */}
        {activeDropdown && (
          <div
            className="absolute top-11 left-0 right-0 bg-[#1d1d1f] border-t border-[#424245]"
            onMouseEnter={() =>
              timeoutRef.current && clearTimeout(timeoutRef.current)
            }
            onMouseLeave={handleMouseLeave}
          >
            {APPLE_NAV_ITEMS.map(
              (item) =>
                item.dropdown &&
                activeDropdown === item.label && (
                  <NavDropdownContent
                    key={item.label}
                    dropdown={item.dropdown}
                    onClose={closeDropdown}
                    lang={lang}
                  />
                )
            )}
          </div>
        )}
      </header>

      {/* Dropdown backdrop */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          style={{ top: "48px" }}
          onClick={closeDropdown}
        />
      )}

      {/* Search overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lang={lang}
      />

      {/* Mobile navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        lang={lang}
      />
    </>
  )
}
