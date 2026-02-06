"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/atom/icons"
import type { SpecGridProps, SpecCategory } from "./types"

export function SpecGrid({ specs, className }: SpecGridProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  )

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
      }
      return next
    })
  }

  return (
    <section className={cn("bg-white py-20", className)}>
      <div className="apple-container">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] text-center mb-12">
          Tech Specs
        </h2>

        <div className="max-w-4xl mx-auto divide-y divide-[#d2d2d7]">
          {specs.map((category) => (
            <SpecCategory
              key={category.title}
              category={category}
              isExpanded={expandedCategories.has(category.title)}
              onToggle={() => toggleCategory(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecCategory({
  category,
  isExpanded,
  onToggle,
}: {
  category: SpecCategory
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2 text-left group"
        aria-expanded={isExpanded}
      >
        <h3 className="text-lg font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
          {category.title}
        </h3>
        <Icons.chevronDown
          className={cn(
            "w-4 h-4 text-[#6e6e73] transition-transform",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden transition-all",
          isExpanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        {category.items.map((item) => (
          <div key={item.label} className="flex flex-col">
            <dt className="text-sm text-[#6e6e73] mb-1">{item.label}</dt>
            <dd className="text-[#1d1d1f]">{item.value}</dd>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SpecGridSimple({ specs, className }: SpecGridProps) {
  return (
    <section className={cn("bg-[#f5f5f7] py-20", className)}>
      <div className="apple-container">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] text-center mb-12">
          Tech Specs
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4 pb-2 border-b border-[#d2d2d7]">
                {category.title}
              </h3>
              <dl className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-[#6e6e73]">{item.label}</dt>
                    <dd className="text-[#1d1d1f]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
