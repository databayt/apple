"use client"

import Link from "next/link"

const sections = [
  {
    title: "Shop and Learn",
    links: [
      { name: "Store", href: "/shop" },
      { name: "Mac", href: "/mac" },
      { name: "iPad", href: "/ipad" },
      { name: "iPhone", href: "/iphone" },
      { name: "Watch", href: "/watch" },
      { name: "Vision", href: "/vision" },
      { name: "AirPods", href: "/airpods" },
      { name: "TV & Home", href: "/tv-home" },
      { name: "AirTag", href: "/airtag" },
      { name: "Accessories", href: "/shop/accessories" },
      { name: "Gift Cards", href: "/shop/gift-cards" },
    ],
  },
  {
    title: "Apple Wallet",
    links: [
      { name: "Wallet", href: "/wallet" },
      { name: "Apple Card", href: "/apple-card" },
      { name: "Apple Pay", href: "/apple-pay" },
      { name: "Apple Cash", href: "/apple-cash" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "Manage Your Apple Account", href: "/account" },
      { name: "Apple Store Account", href: "/shop/account" },
      { name: "iCloud.com", href: "https://www.icloud.com" },
    ],
  },
  {
    title: "Entertainment",
    links: [
      { name: "Apple One", href: "/apple-one" },
      { name: "Apple TV+", href: "/apple-tv-plus" },
      { name: "Apple Music", href: "/apple-music" },
      { name: "Apple Arcade", href: "/apple-arcade" },
      { name: "Apple Fitness+", href: "/apple-fitness-plus" },
      { name: "Apple News+", href: "/apple-news" },
      { name: "Apple Podcasts", href: "/apple-podcasts" },
      { name: "Apple Books", href: "/apple-books" },
      { name: "App Store", href: "/app-store" },
    ],
  },
  {
    title: "Apple Store",
    links: [
      { name: "Find a Store", href: "/retail" },
      { name: "Genius Bar", href: "/retail/geniusbar" },
      { name: "Today at Apple", href: "/today" },
      { name: "Apple Camp", href: "/today/camp" },
      { name: "Apple Trade In", href: "/shop/trade-in" },
      { name: "Financing", href: "/shop/browse/financing" },
      { name: "Order Status", href: "/shop/order/list" },
      { name: "Shopping Help", href: "/shop/help" },
    ],
  },
  {
    title: "For Business",
    links: [
      { name: "Apple and Business", href: "/business" },
      { name: "Shop for Business", href: "/retail/business" },
    ],
  },
  {
    title: "For Education",
    links: [
      { name: "Apple and Education", href: "/education" },
      { name: "Shop for K-12", href: "/education/k12" },
      { name: "Shop for College", href: "/us-edu/shop" },
    ],
  },
  {
    title: "For Healthcare",
    links: [
      { name: "Apple in Healthcare", href: "/healthcare" },
      { name: "Health on Apple Watch", href: "/watch/health" },
      { name: "Health Records on iPhone", href: "/ios/health" },
    ],
  },
  {
    title: "For Government",
    links: [
      { name: "Shop for Government", href: "/government" },
      { name: "Shop for Veterans", href: "/us-military" },
    ],
  },
  {
    title: "Apple Values",
    links: [
      { name: "Accessibility", href: "/accessibility" },
      { name: "Education", href: "/education" },
      { name: "Environment", href: "/environment" },
      { name: "Inclusion and Diversity", href: "/diversity" },
      { name: "Privacy", href: "/privacy" },
      { name: "Supplier Responsibility", href: "/supplier-responsibility" },
    ],
  },
  {
    title: "About Apple",
    links: [
      { name: "Newsroom", href: "/newsroom" },
      { name: "Apple Leadership", href: "/leadership" },
      { name: "Career Opportunities", href: "/careers" },
      { name: "Investors", href: "/investor-relations" },
      { name: "Ethics & Compliance", href: "/compliance" },
      { name: "Events", href: "/apple-events" },
      { name: "Contact Apple", href: "/contact" },
    ],
  },
]

export function SitemapPageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Site Map
        </h1>
        <p className="text-xl text-[#6e6e73]">
          Find your way around apple.com
        </p>
      </section>

      {/* Sitemap Grid */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-[#1d1d1f] mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#6e6e73] hover:text-[#0071e3] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
