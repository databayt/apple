"use client"

import { ComparisonTable } from "@/components/template/product-detail"
import type { WatchCompareContentProps } from "./types"

export function WatchCompareContent({ dictionary, lang }: WatchCompareContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  const products = [
    {
      name: "Apple Watch Ultra 2",
      image: {
        src: "https://www.apple.com/v/watch/bn/images/overview/select/product_tile_ultra_702x750__fpnef7zoxk2y_large_2x.png",
        alt: "Apple Watch Ultra 2",
      },
      specs: {
        "Case": "49mm Titanium",
        "Display": "Up to 3000 nits",
        "Chip": "S9 SiP",
        "Battery": "Up to 36 hours",
        "Water resistance": "100m",
        "GPS": "Precision dual-frequency",
        "Action Button": "Yes",
      },
      href: localizedHref("/apple-watch-ultra-2"),
      price: "From $799",
    },
    {
      name: "Apple Watch Series 10",
      image: {
        src: "https://www.apple.com/v/watch/bn/images/overview/select/product_tile_series_10_702x750__fny9fkcj0w2y_large_2x.png",
        alt: "Apple Watch Series 10",
      },
      specs: {
        "Case": "42mm or 46mm Aluminum/Titanium",
        "Display": "Up to 2000 nits",
        "Chip": "S10 SiP",
        "Battery": "Up to 18 hours",
        "Water resistance": "50m",
        "GPS": "Precision dual-frequency",
        "Action Button": "—",
      },
      href: localizedHref("/apple-watch-series-10"),
      price: "From $399",
      isNew: true,
    },
    {
      name: "Apple Watch SE",
      image: {
        src: "https://www.apple.com/v/watch/bn/images/overview/select/product_tile_se_702x750__f6sks2bhkvmu_large_2x.png",
        alt: "Apple Watch SE",
      },
      specs: {
        "Case": "40mm or 44mm Aluminum",
        "Display": "Up to 1000 nits",
        "Chip": "S8 SiP",
        "Battery": "Up to 18 hours",
        "Water resistance": "50m",
        "GPS": "Yes",
        "Action Button": "—",
      },
      href: localizedHref("/apple-watch-se"),
      price: "From $249",
    },
  ]

  const specLabels = [
    "Case",
    "Display",
    "Chip",
    "Battery",
    "Water resistance",
    "GPS",
    "Action Button",
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
          Compare Apple Watch models.
        </h1>
        <p className="text-lg text-[#6e6e73]">
          Find the best Apple Watch for you.
        </p>
      </section>

      <ComparisonTable products={products} specLabels={specLabels} />

      <section className="bg-white py-16 text-center">
        <p className="text-[#6e6e73] max-w-3xl mx-auto px-6">
          All Apple Watch models feature health and fitness tracking, safety features,
          and seamless integration with iPhone.
        </p>
      </section>
    </div>
  )
}
