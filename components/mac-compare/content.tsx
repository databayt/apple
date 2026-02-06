"use client"

import { ComparisonTable } from "@/components/template/product-detail"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface MacCompareContentProps {
  dictionary: Dictionary
  lang: Locale
}

export function MacCompareContent({ dictionary, lang }: MacCompareContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  const products = [
    {
      name: "MacBook Air",
      image: {
        src: "https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mbp_702x750__bql0v3hb91yq_large_2x.png",
        alt: "MacBook Air",
      },
      specs: {
        "Chip": "Apple M4",
        "Display": "13.6\" or 15.3\" Liquid Retina",
        "CPU": "10-core",
        "GPU": "10-core",
        "Memory": "Up to 24GB",
        "Battery": "Up to 18 hours",
        "Weight": "From 2.7 lb",
      },
      href: localizedHref("/macbook-air"),
      price: "From $999",
      isNew: true,
    },
    {
      name: "MacBook Pro",
      image: {
        src: "https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mbp_702x750__bql0v3hb91yq_large_2x.png",
        alt: "MacBook Pro",
      },
      specs: {
        "Chip": "Apple M4, M4 Pro, or M4 Max",
        "Display": "14.2\" or 16.2\" Liquid Retina XDR",
        "CPU": "Up to 16-core",
        "GPU": "Up to 40-core",
        "Memory": "Up to 128GB",
        "Battery": "Up to 24 hours",
        "Weight": "From 3.4 lb",
      },
      href: localizedHref("/macbook-pro"),
      price: "From $1,599",
      isNew: true,
    },
    {
      name: "iMac",
      image: {
        src: "https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_imac_702x750__e9lq0x3f68ya_large_2x.png",
        alt: "iMac",
      },
      specs: {
        "Chip": "Apple M4",
        "Display": "24\" 4.5K Retina",
        "CPU": "10-core",
        "GPU": "10-core",
        "Memory": "Up to 32GB",
        "Battery": "—",
        "Weight": "9.83 lb",
      },
      href: localizedHref("/imac"),
      price: "From $1,299",
      isNew: true,
    },
    {
      name: "Mac mini",
      image: {
        src: "https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mac_mini_702x750__jlmh4a7xr12u_large_2x.png",
        alt: "Mac mini",
      },
      specs: {
        "Chip": "Apple M4 or M4 Pro",
        "Display": "—",
        "CPU": "Up to 14-core",
        "GPU": "Up to 20-core",
        "Memory": "Up to 64GB",
        "Battery": "—",
        "Weight": "1.4 lb",
      },
      href: localizedHref("/mac-mini"),
      price: "From $599",
      isNew: true,
    },
  ]

  const specLabels = [
    "Chip",
    "Display",
    "CPU",
    "GPU",
    "Memory",
    "Battery",
    "Weight",
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
          Compare Mac models.
        </h1>
        <p className="text-lg text-[#6e6e73]">
          Find the best Mac for you.
        </p>
      </section>

      <ComparisonTable products={products} specLabels={specLabels} />

      <section className="bg-white py-16 text-center">
        <p className="text-[#6e6e73] max-w-3xl mx-auto px-6">
          All Mac models feature Apple silicon for incredible performance and efficiency.
          macOS delivers a seamless experience across all your Apple devices.
        </p>
      </section>
    </div>
  )
}
