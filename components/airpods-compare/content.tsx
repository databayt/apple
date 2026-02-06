"use client"

import { ComparisonTable } from "@/components/template/product-detail"
import type { AirPodsCompareContentProps } from "./types"

export function AirPodsCompareContent({ dictionary, lang }: AirPodsCompareContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  const products = [
    {
      name: "AirPods Pro 2",
      image: {
        src: "https://www.apple.com/v/airpods/r/images/overview/select/airpods_pro_702x750__eqwr3b4jnc2u_large_2x.png",
        alt: "AirPods Pro 2",
      },
      specs: {
        "Chip": "H2",
        "Active Noise Cancellation": "Yes",
        "Transparency mode": "Yes",
        "Adaptive Audio": "Yes",
        "Personalized Spatial Audio": "Yes",
        "Ear tips": "4 sizes (XS, S, M, L)",
        "Battery": "Up to 6 hours (30 with case)",
      },
      href: localizedHref("/airpods-pro"),
      price: "$249",
    },
    {
      name: "AirPods 4 with ANC",
      image: {
        src: "https://www.apple.com/v/airpods/r/images/overview/select/airpods_4_anc_702x750__cwl4hylqeyeu_large_2x.png",
        alt: "AirPods 4 with ANC",
      },
      specs: {
        "Chip": "H2",
        "Active Noise Cancellation": "Yes",
        "Transparency mode": "Yes",
        "Adaptive Audio": "Yes",
        "Personalized Spatial Audio": "Yes",
        "Ear tips": "Open-ear design",
        "Battery": "Up to 6 hours (30 with case)",
      },
      href: localizedHref("/airpods-4"),
      price: "$179",
      isNew: true,
    },
    {
      name: "AirPods 4",
      image: {
        src: "https://www.apple.com/v/airpods/r/images/overview/select/airpods_4_702x750__chxb2v06keeu_large_2x.png",
        alt: "AirPods 4",
      },
      specs: {
        "Chip": "H2",
        "Active Noise Cancellation": "-",
        "Transparency mode": "-",
        "Adaptive Audio": "-",
        "Personalized Spatial Audio": "Yes",
        "Ear tips": "Open-ear design",
        "Battery": "Up to 5 hours (30 with case)",
      },
      href: localizedHref("/airpods-4"),
      price: "$129",
      isNew: true,
    },
    {
      name: "AirPods Max",
      image: {
        src: "https://www.apple.com/v/airpods/r/images/overview/select/airpods_max_702x750__f84t9f9g2xqq_large_2x.png",
        alt: "AirPods Max",
      },
      specs: {
        "Chip": "H1 (per ear cup)",
        "Active Noise Cancellation": "Yes",
        "Transparency mode": "Yes",
        "Adaptive Audio": "-",
        "Personalized Spatial Audio": "Yes",
        "Ear tips": "Over-ear cushions",
        "Battery": "Up to 20 hours",
      },
      href: localizedHref("/airpods-max"),
      price: "$549",
    },
  ]

  const specLabels = [
    "Chip",
    "Active Noise Cancellation",
    "Transparency mode",
    "Adaptive Audio",
    "Personalized Spatial Audio",
    "Ear tips",
    "Battery",
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-4">
          Compare AirPods models.
        </h1>
        <p className="text-lg text-[#6e6e73]">
          Find the best AirPods for you.
        </p>
      </section>

      <ComparisonTable products={products} specLabels={specLabels} />

      <section className="bg-white py-16 text-center">
        <p className="text-[#6e6e73] max-w-3xl mx-auto px-6">
          All AirPods models feature seamless connection to your Apple devices,
          hands-free Siri, and Find My support.
        </p>
      </section>
    </div>
  )
}
