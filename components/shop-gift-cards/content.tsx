"use client"

import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface GiftCardsContentProps {
  dictionary: Dictionary
  lang: Locale
}

const giftCardTypes = [
  {
    name: "Digital Gift Card",
    description: "Send instantly via email. Can be used for apps, games, music, movies, and more.",
    amounts: ["$25", "$50", "$100", "Custom"],
    icon: "📧",
  },
  {
    name: "Physical Gift Card",
    description: "Delivered in beautiful packaging. Perfect for gifting in person.",
    amounts: ["$25", "$50", "$100", "$200"],
    icon: "🎁",
  },
]

const useCases = [
  {
    title: "App Store & Games",
    description: "Buy apps, games, and in-app purchases.",
    icon: "📱",
  },
  {
    title: "Apple Music",
    description: "Pay for Apple Music subscription.",
    icon: "🎵",
  },
  {
    title: "Apple TV+",
    description: "Subscribe to Apple TV+ and rent movies.",
    icon: "📺",
  },
  {
    title: "Apple Arcade",
    description: "Access hundreds of games.",
    icon: "🎮",
  },
  {
    title: "iCloud+",
    description: "Upgrade your iCloud storage.",
    icon: "☁️",
  },
  {
    title: "Apple Products",
    description: "Buy devices and accessories at Apple Store.",
    icon: "🍎",
  },
]

export function GiftCardsContent({ dictionary, lang }: GiftCardsContentProps) {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 text-center bg-gradient-to-br from-[#ff6b6b] via-[#ffa500] to-[#ffff00]">
        <div className="apple-container">
          <h1 className="text-5xl font-semibold text-white mb-4">
            Apple Gift Card
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            One card. Icons of icons.
          </p>
        </div>
      </section>

      {/* Gift Card Types */}
      <section className="py-16 bg-white">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            Choose your gift.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {giftCardTypes.map((type) => (
              <div
                key={type.name}
                className="flex flex-col items-center p-8 bg-[#f5f5f7] rounded-3xl"
              >
                <span className="text-6xl mb-6">{type.icon}</span>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                  {type.name}
                </h3>
                <p className="text-[#6e6e73] text-center mb-6">
                  {type.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {type.amounts.map((amount) => (
                    <button
                      key={amount}
                      className="px-4 py-2 bg-white rounded-full border border-[#d2d2d7] text-[#1d1d1f] font-medium hover:border-[#0071e3] transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <button className="px-8 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors">
                  Buy {type.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4 text-center">
            One card. Everything Apple.
          </h2>
          <p className="text-lg text-[#6e6e73] text-center mb-10 max-w-2xl mx-auto">
            Recipients can use Apple Gift Card for all things Apple - including products, accessories, apps, games, music, movies, TV shows, iCloud, and more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((use) => (
              <div key={use.title} className="text-center">
                <span className="text-4xl">{use.icon}</span>
                <h3 className="font-semibold text-[#1d1d1f] mt-2 text-sm">
                  {use.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="py-16 bg-white text-center">
        <div className="apple-container">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">
            Business & Corporate Gifts
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto mb-6">
            Looking for Apple Gift Cards for your business? Order in bulk and personalize with your company logo.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-[#0071e3] hover:underline"
          >
            Learn about business gift cards
            <span className="ml-1">&gt;</span>
          </a>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="apple-container max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10 text-center">
            How to redeem.
          </h2>
          <div className="bg-white rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">On iPhone or iPad</h3>
                  <p className="text-[#6e6e73]">
                    Open the App Store app, tap your account photo, then tap Redeem Gift Card or Code.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">On Mac</h3>
                  <p className="text-[#6e6e73]">
                    Open the App Store app, click your name, then click Redeem Gift Card.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] mb-1">Online</h3>
                  <p className="text-[#6e6e73]">
                    Go to apple.com/redeem and sign in with your Apple Account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-8 border-t border-[#d2d2d7]">
        <div className="apple-container">
          <p className="text-xs text-[#6e6e73]">
            Apple Gift Card can be used at the Apple Store, apple.com, the App Store, Apple Music, Apple TV, Apple Books, Apple Podcasts, iCloud, and other Apple properties. Use anywhere that accepts Apple Pay. No cash or credit back except as required by law. Card does not expire. Terms apply; see apple.com/go/legal/gc.
          </p>
        </div>
      </section>
    </div>
  )
}
