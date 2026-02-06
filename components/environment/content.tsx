"use client"

import { AppleLink } from "@/components/atom/apple-link"

const goals = [
  {
    metric: "2030",
    label: "Carbon Neutral Goal",
    description: "Every Apple product will be carbon neutral by 2030.",
    icon: "🎯",
  },
  {
    metric: "100%",
    label: "Clean Energy",
    description: "All Apple operations are powered by renewable energy.",
    icon: "⚡",
  },
  {
    metric: "0",
    label: "Waste to Landfill",
    description: "Zero waste sent to landfill from our facilities.",
    icon: "♻️",
  },
  {
    metric: "50%",
    label: "Recycled Materials",
    description: "More than 50% recycled content in our products.",
    icon: "🔄",
  },
]

const initiatives = [
  {
    title: "Clean Energy",
    description: "We run on 100% renewable energy and are helping our suppliers do the same.",
    icon: "☀️",
  },
  {
    title: "Recycled Materials",
    description: "We're using more recycled materials in our products than ever before.",
    icon: "🔧",
  },
  {
    title: "Product Longevity",
    description: "Our products are designed to last, with software updates for years.",
    icon: "⏰",
  },
  {
    title: "Recycling Programs",
    description: "Trade in or recycle any Apple device at any Apple Store.",
    icon: "🔄",
  },
]

export function EnvironmentContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 text-center bg-gradient-to-b from-[#34c759] to-[#30d158]">
        <div className="apple-container">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4">
            Our plan is zero.
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We&apos;re on a mission to make every Apple product carbon neutral by 2030.
          </p>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Our Environmental Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal) => (
              <div key={goal.label} className="text-center">
                <span className="text-4xl">{goal.icon}</span>
                <p className="text-4xl font-bold text-[#34c759] mt-4">{goal.metric}</p>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mt-2">{goal.label}</h3>
                <p className="text-sm text-[#6e6e73] mt-2">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Report */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Environmental Progress Report
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Read our latest report on environmental initiatives, progress, and goals.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#34c759] text-white rounded-full text-lg font-medium hover:bg-[#30d158] transition-colors"
          >
            Download Report (PDF)
          </a>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            How We&apos;re Getting There
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="flex gap-4 p-6 bg-[#f5f5f7] rounded-2xl">
                <span className="text-4xl">{initiative.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-[#6e6e73]">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Neutral Products */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container text-center">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Carbon Neutral Products
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            Apple Watch Series 10 and Apple Watch SE are our first carbon neutral products. More are on the way.
          </p>
          <AppleLink href="/watch">Learn more about Apple Watch</AppleLink>
        </div>
      </section>

      {/* Supplier Responsibility */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Working with Our Suppliers
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-8">
            We&apos;re partnering with suppliers to transition to clean energy across our supply chain.
          </p>
          <AppleLink href="/supplier-responsibility">
            Learn about supplier responsibility
          </AppleLink>
        </div>
      </section>

      {/* Recycle */}
      <section className="py-16 bg-[#34c759] text-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold mb-4">
            Recycle your device.
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Apple Trade In makes it easy to recycle your old device responsibly, and you may even get credit toward a new one.
          </p>
          <a
            href="/shop/trade-in"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#34c759] rounded-full text-lg font-medium hover:bg-[#f5f5f7] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
