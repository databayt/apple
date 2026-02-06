"use client"

import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface TradeInContentProps {
  dictionary: Dictionary
  lang: Locale
}

const devices = [
  {
    name: "iPhone",
    tradeValue: "Up to $650",
    icon: "📱",
    description: "Trade in your iPhone 11 or newer.",
  },
  {
    name: "Mac",
    tradeValue: "Up to $1000",
    icon: "💻",
    description: "Trade in your Mac laptop or desktop.",
  },
  {
    name: "iPad",
    tradeValue: "Up to $505",
    icon: "📋",
    description: "Trade in your iPad Pro, Air, or mini.",
  },
  {
    name: "Apple Watch",
    tradeValue: "Up to $150",
    icon: "⌚",
    description: "Trade in your Apple Watch Series 5 or newer.",
  },
  {
    name: "Samsung Galaxy",
    tradeValue: "Up to $650",
    icon: "📲",
    description: "Trade in your Samsung smartphone.",
  },
  {
    name: "Google Pixel",
    tradeValue: "Up to $400",
    icon: "📲",
    description: "Trade in your Google Pixel device.",
  },
]

const steps = [
  {
    step: "1",
    title: "Answer a few questions",
    description: "Tell us about your device to get an estimated trade-in value.",
  },
  {
    step: "2",
    title: "Get your estimate",
    description: "See how much your device is worth toward a new purchase.",
  },
  {
    step: "3",
    title: "Trade it in",
    description: "Ship it to us or bring it to an Apple Store.",
  },
  {
    step: "4",
    title: "Get credit",
    description: "Once we verify your device, you'll receive instant credit or an Apple Gift Card.",
  },
]

export function TradeInContent({ dictionary, lang }: TradeInContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-[#f5f5f7]">
        <h1 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Apple Trade In
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto px-4">
          Trade in your eligible device for credit toward a new one, or get an Apple Gift Card you can use anytime.
        </p>
      </section>

      {/* Trade Values */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            See what your device is worth.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devices.map((device) => (
              <div
                key={device.name}
                className="flex flex-col items-center p-8 bg-[#f5f5f7] rounded-2xl"
              >
                <span className="text-5xl mb-4">{device.icon}</span>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                  {device.name}
                </h3>
                <p className="text-2xl font-semibold text-[#0071e3] mb-2">
                  {device.tradeValue}
                </p>
                <p className="text-sm text-[#6e6e73] text-center">
                  {device.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0071e3] text-white rounded-full text-lg font-medium hover:bg-[#0077ed] transition-colors"
            >
              Get Your Estimate
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            How Apple Trade In works.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-[#0071e3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6e6e73]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="py-16 bg-white">
        <div className="apple-container text-center">
          <div className="text-5xl mb-6">🌍</div>
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Good for you. Good for the planet.
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-6">
            By trading in your device, you&apos;re helping the environment. We refurbish or recycle every device responsibly.
          </p>
          <AppleLink href={localizedHref("/environment")}>Learn about Apple&apos;s commitment to the environment</AppleLink>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Frequently asked questions.
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                How do I get my trade-in value?
              </h3>
              <p className="text-[#6e6e73]">
                Answer a few questions about your device, and we&apos;ll give you an estimated trade-in value. Once we receive and verify your device, you&apos;ll get your final value.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                What happens if my device doesn&apos;t have trade-in value?
              </h3>
              <p className="text-[#6e6e73]">
                We&apos;ll recycle it for free. Just send it in or bring it to an Apple Store, and we&apos;ll make sure it&apos;s recycled responsibly.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Can I trade in more than one device?
              </h3>
              <p className="text-[#6e6e73]">
                Yes! You can trade in multiple devices to maximize your credit toward a new purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
