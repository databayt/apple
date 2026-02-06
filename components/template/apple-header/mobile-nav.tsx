"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from "@/components/atom/icons"
import { APPLE_NAV_ITEMS, APPLE_SEARCH_SUGGESTIONS } from "./constants"
import { cn } from "@/lib/utils"
import type { Locale } from "@/components/local/config"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  lang?: Locale
}

export function MobileNav({ isOpen, onClose, lang = "en" }: MobileNavProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null)

  const localizedHref = (href: string) => `/${lang}${href}`

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setExpandedItem(null)
      setSearchQuery("")
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-[#000000]">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-12 border-b border-[#424245]">
          <Link href={localizedHref("/")} onClick={onClose}>
            <Icons.apple className="h-4 w-auto text-[#f5f5f7]" />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-[#f5f5f7]"
          >
            <Icons.close className="size-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Search */}
          <div className="px-4 py-4 border-b border-[#424245]">
            <div className="flex items-center gap-3 bg-[#1d1d1f] rounded-lg px-3 py-2">
              <Icons.appleSearch className="size-4 text-[#86868b]" />
              <input
                type="text"
                placeholder="Search apple.com"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-[#f5f5f7] text-base placeholder:text-[#86868b] outline-none"
              />
            </div>
          </div>

          {/* Quick Links (shown when searching) */}
          {searchQuery === "" && (
            <nav className="px-4">
              <ul>
                {APPLE_NAV_ITEMS.map((item, index) => (
                  <li key={index} className="border-b border-[#424245]">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full py-3 text-[#f5f5f7]"
                        >
                          <span className="text-base font-normal">
                            {item.label}
                          </span>
                          <Icons.chevronDown
                            className={cn(
                              "size-3 transition-transform",
                              expandedItem === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        {expandedItem === item.label && (
                          <div className="pb-4 space-y-6">
                            {item.dropdown.columns?.map((column, colIndex) => (
                              <div key={colIndex}>
                                {column.title && (
                                  <h3 className="text-xs text-[#86868b] font-semibold mb-2">
                                    {column.title}
                                  </h3>
                                )}
                                <ul className="space-y-2">
                                  {column.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={localizedHref(subItem.href)}
                                        onClick={onClose}
                                        className="block text-sm text-[#86868b] hover:text-[#f5f5f7]"
                                      >
                                        {subItem.label}
                                        {subItem.isNew && (
                                          <span className="ml-2 text-xs text-[#f56300]">
                                            New
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={localizedHref(item.href)}
                        onClick={onClose}
                        className="block py-3 text-base text-[#f5f5f7]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Search suggestions when searching */}
          {searchQuery !== "" && (
            <div className="px-4 py-4">
              <h3 className="text-xs text-[#86868b] font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {APPLE_SEARCH_SUGGESTIONS.filter((s) =>
                  s.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((suggestion, index) => (
                  <li key={index}>
                    <Link
                      href={localizedHref(`/search?q=${encodeURIComponent(suggestion)}`)}
                      onClick={onClose}
                      className="flex items-center gap-2 text-sm text-[#f5f5f7]"
                    >
                      <Icons.chevronRight className="size-2 text-[#86868b]" />
                      {suggestion}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
