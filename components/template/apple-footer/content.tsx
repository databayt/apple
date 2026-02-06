"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from "@/components/atom/icons"
import { FOOTER_LINKS, BREADCRUMB_LINKS } from "./constants"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AppleFooterProps {
  dictionary?: Dictionary
  lang?: Locale
}

export function AppleFooter({ dictionary, lang = "en" }: AppleFooterProps) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null)
  const t = dictionary?.footer

  const localizedHref = (href: string) => {
    if (href.startsWith("http")) return href
    return `/${lang}${href}`
  }

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  const sections = Object.values(FOOTER_LINKS)

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Directory */}
      <div className="apple-container border-b border-[#d2d2d7]">
        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-5 gap-x-6 gap-y-8 py-8">
          {sections.map((section, index) => (
            <div key={section.title} className={cn(index >= 5 && "col-start-auto")}>
              <h3 className="text-xs font-semibold text-[#1d1d1f] mb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localizedHref(item.href)}
                      className="text-xs text-[#424245] hover:text-[#1d1d1f] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden py-4">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-[#d2d2d7]">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full py-3 text-xs font-semibold text-[#1d1d1f]"
              >
                {section.title}
                <Icons.chevronDown
                  className={cn(
                    "size-3 text-[#86868b] transition-transform",
                    expandedSection === section.title && "rotate-180"
                  )}
                />
              </button>
              {expandedSection === section.title && (
                <ul className="pb-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={localizedHref(item.href)}
                        className="block text-xs text-[#424245] hover:text-[#1d1d1f]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="apple-container py-4">
        <p className="text-xs text-[#6e6e73] mb-2">
          {t?.moreWaysToShop || "More ways to shop:"}{" "}
          <Link href={localizedHref("/retail")} className="text-[#0071e3] hover:underline">
            {t?.findAnAppleStore || "Find an Apple Store"}
          </Link>{" "}
          {t?.orCall ? "" : "or"}{" "}
          <Link href={localizedHref("/shop/browse/overlay/open/salespolicies/shop/retailers")} className="text-[#0071e3] hover:underline">
            {t?.otherRetailer || "other retailer"}
          </Link>{" "}
          {t?.nearYou || "near you."} {t?.orCall || "Or call"} 1-800-MY-APPLE.
        </p>

        <div className="border-t border-[#d2d2d7] pt-4 mt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-xs text-[#6e6e73]">
                {t?.copyright || "Copyright"} © {new Date().getFullYear()} Apple Inc. {t?.allRightsReserved || "All rights reserved."}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {BREADCRUMB_LINKS.map((link, index) => (
                  <React.Fragment key={link.href}>
                    <Link
                      href={localizedHref(link.href)}
                      className="text-xs text-[#424245] hover:text-[#1d1d1f] hover:underline"
                    >
                      {link.label}
                    </Link>
                    {index < BREADCRUMB_LINKS.length - 1 && (
                      <span className="text-[#d2d2d7]">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <Link
              href={localizedHref("/choose-country-region")}
              className="text-xs text-[#424245] hover:text-[#1d1d1f]"
            >
              {t?.unitedStates || "United States"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
