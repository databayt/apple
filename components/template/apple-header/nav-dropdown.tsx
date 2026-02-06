"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import type { NavDropdown } from "./types"
import type { Locale } from "@/components/local/config"

interface NavDropdownContentProps {
  dropdown: NavDropdown
  onClose: () => void
  lang?: Locale
}

export function NavDropdownContent({ dropdown, onClose, lang = "en" }: NavDropdownContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="apple-container py-10">
      <div className="grid grid-cols-3 gap-x-12 gap-y-8">
        {dropdown.columns?.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.title && (
              <h3 className="text-xs text-[#86868b] font-semibold mb-4">
                {column.title}
              </h3>
            )}
            <ul className="space-y-3">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={localizedHref(item.href)}
                    onClick={onClose}
                    className={cn(
                      "block text-[#f5f5f7] hover:text-white transition-colors",
                      itemIndex === 0 && columnIndex === 0
                        ? "text-2xl font-semibold"
                        : "text-sm"
                    )}
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="ml-2 text-xs text-[#f56300] font-medium">
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
    </div>
  )
}
