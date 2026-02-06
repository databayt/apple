"use client"

import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface AccessoriesContentProps {
  dictionary: Dictionary
  lang: Locale
}

const categories = [
  {
    name: "iPhone Accessories",
    items: ["MagSafe", "Cases", "AirTags", "Chargers", "Headphones"],
    href: "/shop/accessories/iphone",
    icon: "📱",
  },
  {
    name: "Mac Accessories",
    items: ["Displays", "Keyboards", "Mice", "Trackpads", "Adapters"],
    href: "/shop/accessories/mac",
    icon: "💻",
  },
  {
    name: "iPad Accessories",
    items: ["Apple Pencil", "Keyboards", "Cases", "Stands", "Chargers"],
    href: "/shop/accessories/ipad",
    icon: "📋",
  },
  {
    name: "Apple Watch Bands",
    items: ["Sport Band", "Solo Loop", "Braided Solo Loop", "Leather Link", "Milanese Loop"],
    href: "/shop/accessories/watch",
    icon: "⌚",
  },
  {
    name: "AirPods Accessories",
    items: ["Cases", "Wireless Chargers", "Ear Tips"],
    href: "/shop/accessories/airpods",
    icon: "🎧",
  },
  {
    name: "Apple TV Accessories",
    items: ["Siri Remote", "Cables", "Mounts"],
    href: "/shop/accessories/tv",
    icon: "📺",
  },
]

const featuredAccessories = [
  {
    name: "MagSafe Charger",
    price: "$39.00",
    description: "Fast wireless charging for iPhone.",
    icon: "🔋",
  },
  {
    name: "Apple Pencil Pro",
    price: "$129.00",
    description: "Precision and versatility for iPad.",
    icon: "✏️",
  },
  {
    name: "Magic Keyboard",
    price: "$99.00",
    description: "Wireless keyboard with Touch ID.",
    icon: "⌨️",
  },
  {
    name: "AirTag",
    price: "$29.00",
    description: "Keep track of your everyday items.",
    icon: "📍",
  },
  {
    name: "Sport Band",
    price: "$49.00",
    description: "Comfortable and durable for Apple Watch.",
    icon: "⌚",
  },
  {
    name: "USB-C to Lightning",
    price: "$19.00",
    description: "Fast charging and sync cable.",
    icon: "🔌",
  },
]

export function AccessoriesContent({ dictionary, lang }: AccessoriesContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Accessories
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto px-4">
          Discover accessories for your Apple products.
        </p>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <a
                key={category.name}
                href={localizedHref(category.href)}
                className="flex flex-col p-6 bg-white rounded-2xl border border-[#d2d2d7] hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4">{category.icon}</span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[#6e6e73]">
                  {category.items.join(" \u00B7 ")}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Featured Accessories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAccessories.map((accessory) => (
              <div
                key={accessory.name}
                className="flex flex-col items-center p-8 bg-white rounded-2xl"
              >
                <span className="text-5xl mb-4">{accessory.icon}</span>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">
                  {accessory.name}
                </h3>
                <p className="text-sm text-[#6e6e73] mb-2 text-center">
                  {accessory.description}
                </p>
                <p className="text-sm font-medium text-[#1d1d1f] mb-4">
                  {accessory.price}
                </p>
                <button className="px-6 py-2 bg-[#0071e3] text-white rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors">
                  Add to Bag
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made by Apple */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Made by Apple
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            All Apple accessories are designed to work seamlessly with your devices, featuring the quality and innovation you expect from Apple.
          </p>
          <AppleLink href={localizedHref("/shop/accessories/apple")}>Shop all Apple accessories</AppleLink>
        </div>
      </section>

      {/* Third-party */}
      <section className="py-16 bg-[#f5f5f7] text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Works with Apple
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6 max-w-2xl mx-auto">
            Explore accessories from Belkin, Beats, Logitech, and other trusted brands.
          </p>
          <AppleLink href={localizedHref("/shop/accessories/brands")}>Shop by brand</AppleLink>
        </div>
      </section>
    </div>
  )
}
