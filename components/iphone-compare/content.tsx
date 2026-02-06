"use client"

import { ComparisonTable } from "@/components/template/product-detail"
import type { IPhoneCompareContentProps } from "./types"

export function IPhoneCompareContent({ dictionary, lang }: IPhoneCompareContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  const products = [
    {
      name: "iPhone 16 Pro",
      image: {
        src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_16_pro__erw9alves2qa_large_2x.png",
        alt: "iPhone 16 Pro",
      },
      specs: {
        "Display": "6.3\" or 6.9\" Super Retina XDR",
        "Chip": "A18 Pro",
        "Camera": "48MP Main, 48MP Ultra Wide, 12MP 5x Telephoto",
        "Battery": "Up to 33 hours video",
        "Dynamic Island": "Yes",
        "Action Button": "Yes",
        "Camera Control": "Yes",
        "Material": "Titanium",
      },
      href: localizedHref("/iphone-16-pro"),
      price: "From $999",
      isNew: true,
    },
    {
      name: "iPhone 16",
      image: {
        src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_16__cq8hf0csgr6a_large_2x.png",
        alt: "iPhone 16",
      },
      specs: {
        "Display": "6.1\" or 6.7\" Super Retina XDR",
        "Chip": "A18",
        "Camera": "48MP Main, 12MP Ultra Wide",
        "Battery": "Up to 27 hours video",
        "Dynamic Island": "Yes",
        "Action Button": "Yes",
        "Camera Control": "Yes",
        "Material": "Aluminum",
      },
      href: localizedHref("/iphone-16"),
      price: "From $799",
      isNew: true,
    },
    {
      name: "iPhone 16e",
      image: {
        src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_16e__x6wle8mq3xcm_large_2x.png",
        alt: "iPhone 16e",
      },
      specs: {
        "Display": "6.1\" Super Retina XDR",
        "Chip": "A18",
        "Camera": "48MP Main",
        "Battery": "Up to 26 hours video",
        "Dynamic Island": "Yes",
        "Action Button": "\u2014",
        "Camera Control": "\u2014",
        "Material": "Aluminum",
      },
      href: localizedHref("/iphone-16e"),
      price: "From $599",
      isNew: true,
    },
    {
      name: "iPhone 15",
      image: {
        src: "https://www.apple.com/v/iphone/home/br/images/overview/select/iphone_15__fm70v4vlj7ua_large_2x.png",
        alt: "iPhone 15",
      },
      specs: {
        "Display": "6.1\" or 6.7\" Super Retina XDR",
        "Chip": "A16 Bionic",
        "Camera": "48MP Main, 12MP Ultra Wide",
        "Battery": "Up to 26 hours video",
        "Dynamic Island": "Yes",
        "Action Button": "\u2014",
        "Camera Control": "\u2014",
        "Material": "Aluminum",
      },
      href: localizedHref("/iphone-15"),
      price: "From $699",
    },
  ]

  const specLabels = [
    "Display",
    "Chip",
    "Camera",
    "Battery",
    "Dynamic Island",
    "Action Button",
    "Camera Control",
    "Material",
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
          Compare iPhone models.
        </h1>
        <p className="text-lg text-[#6e6e73]">
          Find the best iPhone for you.
        </p>
      </section>

      <ComparisonTable products={products} specLabels={specLabels} />

      <section className="bg-white py-16 text-center">
        <p className="text-[#6e6e73] max-w-3xl mx-auto px-6">
          All iPhone models feature the Dynamic Island, Face ID, and support for iOS 18.
          Trade-in values vary based on condition and age of your device.
        </p>
      </section>
    </div>
  )
}
