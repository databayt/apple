"use client"

import { ComparisonTable } from "@/components/template/product-detail"
import type { IPadCompareContentProps } from "./types"

export function IPadCompareContent({ dictionary, lang }: IPadCompareContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  const products = [
    {
      name: "iPad Pro",
      image: {
        src: "https://www.apple.com/v/ipad/home/cs/images/overview/select/product_tile_ipad_pro_702x750__flrq30ty1hyu_large_2x.png",
        alt: "iPad Pro",
      },
      specs: {
        "Chip": "Apple M4",
        "Display": "11\" or 13\" Ultra Retina XDR",
        "Camera": "12MP Wide, LiDAR",
        "Apple Pencil": "Apple Pencil Pro",
        "Connector": "Thunderbolt / USB 4",
        "Face ID": "Yes",
        "Thickness": "5.1mm",
      },
      href: localizedHref("/ipad-pro"),
      price: "From $999",
      isNew: true,
    },
    {
      name: "iPad Air",
      image: {
        src: "https://www.apple.com/v/ipad/home/cs/images/overview/select/product_tile_ipad_air_702x750__esx4wq0u266a_large_2x.png",
        alt: "iPad Air",
      },
      specs: {
        "Chip": "Apple M2",
        "Display": "11\" or 13\" Liquid Retina",
        "Camera": "12MP Wide",
        "Apple Pencil": "Apple Pencil Pro",
        "Connector": "USB-C",
        "Face ID": "—",
        "Thickness": "6.1mm",
      },
      href: localizedHref("/ipad-air"),
      price: "From $599",
      isNew: true,
    },
    {
      name: "iPad mini",
      image: {
        src: "https://www.apple.com/v/ipad/home/cs/images/overview/select/product_tile_ipad_mini_702x750__bqi5e4a7lhui_large_2x.png",
        alt: "iPad mini",
      },
      specs: {
        "Chip": "Apple A17 Pro",
        "Display": "8.3\" Liquid Retina",
        "Camera": "12MP Wide",
        "Apple Pencil": "Apple Pencil Pro",
        "Connector": "USB-C",
        "Face ID": "—",
        "Thickness": "6.3mm",
      },
      href: localizedHref("/ipad-mini"),
      price: "From $499",
      isNew: true,
    },
    {
      name: "iPad",
      image: {
        src: "https://www.apple.com/v/ipad/home/cs/images/overview/select/product_tile_ipad_702x750__cu2byb8id31m_large_2x.png",
        alt: "iPad",
      },
      specs: {
        "Chip": "Apple A14 Bionic",
        "Display": "10.9\" Liquid Retina",
        "Camera": "12MP Wide",
        "Apple Pencil": "Apple Pencil (USB-C)",
        "Connector": "USB-C",
        "Face ID": "—",
        "Thickness": "7mm",
      },
      href: localizedHref("/ipad"),
      price: "From $349",
    },
  ]

  const specLabels = [
    "Chip",
    "Display",
    "Camera",
    "Apple Pencil",
    "Connector",
    "Face ID",
    "Thickness",
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
          Compare iPad models.
        </h1>
        <p className="text-lg text-[#6e6e73]">
          Find the best iPad for you.
        </p>
      </section>

      <ComparisonTable products={products} specLabels={specLabels} />

      <section className="bg-white py-16 text-center">
        <p className="text-[#6e6e73] max-w-3xl mx-auto px-6">
          All iPad models run iPadOS and work with Magic Keyboard.
          Trade-in values vary based on condition and age of your device.
        </p>
      </section>
    </div>
  )
}
