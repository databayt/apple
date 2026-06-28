"use client"

import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface ShopContentProps {
  dictionary: Dictionary
  lang: Locale
}

const storeCategories = [
  {
    name: "Shop the Latest",
    description: "Explore what's new from Apple.",
    href: "/shop/buy",
    icon: "sparkles",
  },
  {
    name: "Mac",
    description: "MacBook Air, MacBook Pro, iMac, and more.",
    href: "/shop/buy-mac",
    icon: "laptop",
  },
  {
    name: "iPad",
    description: "iPad Pro, iPad Air, iPad, and iPad mini.",
    href: "/shop/buy-ipad",
    icon: "tablet",
  },
  {
    name: "iPhone",
    description: "iPhone 16 Pro, iPhone 16, and more.",
    href: "/shop/buy-iphone",
    icon: "phone",
  },
  {
    name: "Apple Watch",
    description: "Series 10, Ultra 2, SE, and bands.",
    href: "/shop/buy-watch",
    icon: "watch",
  },
  {
    name: "Apple Vision Pro",
    description: "Experience spatial computing.",
    href: "/shop/buy-vision",
    icon: "vision",
  },
  {
    name: "AirPods",
    description: "AirPods Pro, AirPods 4, AirPods Max.",
    href: "/shop/accessories/all/airpods",
    icon: "airpods",
  },
  {
    name: "Accessories",
    description: "Cases, covers, chargers, and more.",
    href: "/shop/accessories/all",
    icon: "plug",
  },
]

export function ShopContent({ dictionary, lang }: ShopContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Store
        </h1>
        <p className="text-xl text-[#6e6e73]">
          The best way to buy the products you love.
        </p>
      </section>

      {/* Specialist Help */}
      <section className="py-8 border-b border-[#d2d2d7]">
        <div className="apple-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg text-[#1d1d1f]">
              <span className="font-semibold">Need shopping help?</span>{" "}
              Ask a Specialist.
            </p>
          </div>
          <AppleLink href={localizedHref("/shop/browse/overlay/open/salespolicies/shop/specialist")}>
            Chat with a Specialist
          </AppleLink>
        </div>
      </section>

      {/* Store visit */}
      <section className="py-8 border-b border-[#d2d2d7]">
        <div className="apple-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg text-[#1d1d1f]">
              <span className="font-semibold">Visit an Apple Store.</span>{" "}
              Find one near you.
            </p>
          </div>
          <AppleLink href={localizedHref("/retail")}>Find a store</AppleLink>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeCategories.map((category) => (
              <a
                key={category.href}
                href={localizedHref(category.href)}
                className="flex flex-col items-center p-8 bg-white rounded-3xl border border-[#d2d2d7] hover:shadow-lg transition-shadow"
              >
                <span className="text-6xl mb-4">
                  {category.icon === "sparkles" && "✨"}
                  {category.icon === "laptop" && "💻"}
                  {category.icon === "tablet" && "📋"}
                  {category.icon === "phone" && "📱"}
                  {category.icon === "watch" && "⌚"}
                  {category.icon === "vision" && "🥽"}
                  {category.icon === "airpods" && "🎧"}
                  {category.icon === "plug" && "🔌"}
                </span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-[#6e6e73] text-center">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-8 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                Order Status
              </h3>
              <p className="text-[#6e6e73] mb-4">
                Track your recent orders and view order history.
              </p>
              <AppleLink href={localizedHref("/shop/order/list")}>Check order status</AppleLink>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                Apple Trade In
              </h3>
              <p className="text-[#6e6e73] mb-4">
                Get credit toward a new device when you trade in your current one.
              </p>
              <AppleLink href={localizedHref("/shop/trade-in")}>Get your estimate</AppleLink>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                Financing
              </h3>
              <p className="text-[#6e6e73] mb-4">
                Pay over time with low monthly payments.
              </p>
              <AppleLink href={localizedHref("/shop/browse/financing")}>Learn about financing</AppleLink>
            </div>
          </div>
        </div>
      </section>

      {/* Special Stores */}
      <section className="py-16">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Special Stores
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <AppleLink href={localizedHref("/shop/refurbished")}>Certified Refurbished</AppleLink>
            <AppleLink href={localizedHref("/us-edu/shop")}>Education</AppleLink>
            <AppleLink href={localizedHref("/business")}>Business</AppleLink>
            <AppleLink href={localizedHref("/us-military")}>Veterans and Military</AppleLink>
            <AppleLink href={localizedHref("/us-gov")}>Government</AppleLink>
          </div>
        </div>
      </section>
    </div>
  )
}
