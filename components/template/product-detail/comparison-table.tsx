"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { ComparisonTableProps } from "./types"

export function ComparisonTable({
  products,
  specLabels,
  className,
}: ComparisonTableProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (name: string) => {
    setImageErrors((prev) => new Set(prev).add(name))
  }

  return (
    <section className={cn("bg-[#f5f5f7] py-20", className)}>
      <div className="apple-container">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] text-center mb-4">
          Compare models.
        </h2>
        <p className="text-lg text-[#6e6e73] text-center mb-12">
          Find the right one for you.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="w-48"></th>
                {products.map((product) => (
                  <th
                    key={product.name}
                    className="text-center p-4 align-bottom"
                  >
                    <Link href={product.href} className="group">
                      {/* Product Image */}
                      <div className="relative w-40 h-40 mx-auto mb-4">
                        {!imageErrors.has(product.name) && (
                          <Image
                            src={product.image.src}
                            alt={product.image.alt}
                            fill
                            className="object-contain"
                            unoptimized
                            onError={() => handleImageError(product.name)}
                          />
                        )}
                      </div>

                      {/* Product Name */}
                      <div className="flex flex-col items-center gap-1">
                        {product.isNew && (
                          <span className="text-[#f56300] text-xs font-medium">
                            New
                          </span>
                        )}
                        <span className="text-lg font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                          {product.name}
                        </span>
                        {product.price && (
                          <span className="text-sm text-[#6e6e73]">
                            {product.price}
                          </span>
                        )}
                      </div>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specLabels.map((label) => (
                <tr
                  key={label}
                  className="border-t border-[#d2d2d7]"
                >
                  <td className="py-4 px-4 text-sm text-[#6e6e73] align-top">
                    {label}
                  </td>
                  {products.map((product) => (
                    <td
                      key={`${product.name}-${label}`}
                      className="py-4 px-4 text-center text-sm text-[#1d1d1f]"
                    >
                      {product.specs[label] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#d2d2d7]">
                <td></td>
                {products.map((product) => (
                  <td key={product.name} className="py-6 px-4 text-center">
                    <Link
                      href={product.href}
                      className="inline-flex items-center justify-center px-6 py-2 bg-[#0071e3] text-white rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors"
                    >
                      Buy
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}
