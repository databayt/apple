"use client"

import Link from "next/link"
import { AppleLink } from "@/components/atom/apple-link"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface HomeContentProps {
  dictionary: Dictionary
  lang: Locale
}

export function HomeContent({ dictionary, lang }: HomeContentProps) {
  const t = dictionary.home
  const common = dictionary.common

  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Main Hero - iPhone 16 Pro */}
      <section className="relative flex flex-col items-center text-center bg-black text-[#f5f5f7] min-h-[580px] md:min-h-[700px] overflow-hidden">
        <div className="pt-12 md:pt-16 pb-8 z-10">
          <p className="text-xl font-semibold mb-1">{t?.iphone16Pro?.name || "iPhone 16 Pro"}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-3">
            {t?.iphone16Pro?.headline || "Hello, Apple Intelligence."}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <AppleLink href={localizedHref("/iphone-16-pro")} variant="large">{common?.learnMore || "Learn more"}</AppleLink>
            <AppleLink href={localizedHref("/shop/buy-iphone/iphone-16-pro")} variant="large">{common?.buy || "Buy"}</AppleLink>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-950/40" />
        <div className="flex-1 w-full flex items-end justify-center pb-8">
          <div className="w-48 h-96 md:w-64 md:h-[500px] bg-gradient-to-b from-[#1d1d1f] via-[#2d2d2f] to-[#3d3d3f] rounded-[3rem] border-4 border-[#424245] shadow-2xl relative">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
          </div>
        </div>
      </section>

      {/* Secondary Hero - iPhone 16 */}
      <section className="relative flex flex-col items-center text-center bg-white text-[#1d1d1f] min-h-[580px] md:min-h-[700px] overflow-hidden">
        <div className="pt-12 md:pt-16 pb-8 z-10">
          <p className="text-xl font-semibold mb-1">{t?.iphone16?.name || "iPhone 16"}</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-3">
            {t?.iphone16?.headline || "A total powerhouse."}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <AppleLink href={localizedHref("/iphone-16")} variant="large">{common?.learnMore || "Learn more"}</AppleLink>
            <AppleLink href={localizedHref("/shop/buy-iphone/iphone-16")} variant="large">{common?.buy || "Buy"}</AppleLink>
          </div>
        </div>
        <div className="flex-1 w-full flex items-end justify-center pb-8 gap-4">
          {["bg-pink-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-white border-2"].map((color, idx) => (
            <div key={idx} className={`w-20 h-40 md:w-28 md:h-56 ${color} rounded-[2rem] shadow-lg hidden sm:block ${idx === 0 ? "block" : ""}`} />
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2.5 mt-3">
        <ProductTile
          name={t?.macbookPro?.name || "MacBook Pro"}
          tagline={t?.macbookPro?.tagline || "Mind-blowing. Head-turning."}
          href={localizedHref("/macbook-pro")}
          variant="dark"
          isNew
          newLabel={common?.new}
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-gray-900 via-gray-800 to-gray-900"
        />

        <ProductTile
          name={t?.macbookAir?.name || "MacBook Air"}
          tagline={t?.macbookAir?.tagline || "Lean. Mean. M3 machine."}
          href={localizedHref("/macbook-air")}
          variant="light"
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-gray-100 via-gray-50 to-white"
        />

        <ProductTile
          name={t?.watchSeries10?.name || "Apple Watch Series 10"}
          tagline={t?.watchSeries10?.tagline || "Thinstant classic."}
          href={localizedHref("/apple-watch-series-10")}
          variant="light"
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-orange-50 via-rose-50 to-pink-50"
        />

        <ProductTile
          name={t?.ipadPro?.name || "iPad Pro"}
          tagline={t?.ipadPro?.tagline || "Thinpossible."}
          href={localizedHref("/ipad-pro")}
          variant="dark"
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-slate-900 via-slate-800 to-slate-900"
        />

        <ProductTile
          name={t?.ipadAir?.name || "iPad Air"}
          tagline={t?.ipadAir?.tagline || "Two sizes. Icons meet."}
          href={localizedHref("/ipad-air")}
          variant="light"
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-purple-50 via-blue-50 to-sky-50"
        />

        <ProductTile
          name={t?.airpodsPro?.name || "AirPods Pro 2"}
          tagline={t?.airpodsPro?.tagline || "Hearing aids. Hearing test. Hearing protection."}
          href={localizedHref("/airpods-pro")}
          variant="light"
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-white via-gray-50 to-gray-100"
        />

        <ProductTile
          name={t?.airpods4?.name || "AirPods 4"}
          tagline={t?.airpods4?.tagline || "Iconic. Now iconic."}
          href={localizedHref("/airpods-4")}
          variant="light"
          isNew
          newLabel={common?.new}
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-gray-50 via-white to-gray-50"
        />

        <ProductTile
          name={t?.visionPro?.name || "Apple Vision Pro"}
          tagline={t?.visionPro?.tagline || "Welcome to spatial computing."}
          href={localizedHref("/apple-vision-pro")}
          variant="dark"
          learnMoreLabel={common?.learnMore}
          buyLabel={common?.buy}
          gradient="from-gray-900 via-slate-800 to-zinc-900"
        />
      </div>

      {/* Promotional tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2.5 mt-3">
        <div className="bg-[#f5f5f7] rounded-2xl p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-3">
            {t?.tradeIn?.title || "Apple Trade In"}
          </h3>
          <p className="text-lg text-[#6e6e73] mb-4 max-w-md">
            {t?.tradeIn?.description || "Get $180-$650 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher."}
          </p>
          <AppleLink href={localizedHref("/shop/trade-in")}>{common?.seeWhatYourDeviceIsWorth || "See what your device is worth"}</AppleLink>
        </div>

        <div className="bg-white rounded-2xl p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] mb-1">
            {t?.appleCard?.title || "Apple Card"}
          </h3>
          <p className="text-lg text-[#6e6e73] mb-4">
            {t?.appleCard?.description || "Get 3% Daily Cash back with Apple Card."}
          </p>
          <div className="flex items-center gap-4">
            <AppleLink href={localizedHref("/apple-card")}>{common?.learnMore || "Learn more"}</AppleLink>
            <AppleLink href={localizedHref("/apple-card/apply")}>{common?.applyNow || "Apply now"}</AppleLink>
          </div>
        </div>
      </div>

      {/* Services promo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2.5 mt-3 mb-3">
        <div className="bg-black rounded-2xl p-10 min-h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-purple-900/30 to-black/50" />
          <div className="relative z-10">
            <p className="text-sm text-[#a1a1a6] mb-1">{t?.tvPlus?.streaming || "Now streaming on Apple TV+"}</p>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#f5f5f7] mb-2">
              {t?.tvPlus?.show || "Silo"}
            </h3>
            <p className="text-lg text-[#a1a1a6] mb-4">
              {t?.tvPlus?.tagline || "The truth will find you."}
            </p>
            <AppleLink href={localizedHref("/apple-tv-plus")}>{common?.streamNow || "Stream now"}</AppleLink>
          </div>
        </div>

        <div className="bg-black rounded-2xl p-10 min-h-[500px] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-teal-900/30 to-black/50" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-semibold text-[#f5f5f7] mb-2">
              {t?.fitnessPlus?.title || "Apple Fitness+"}
            </h3>
            <p className="text-lg text-[#a1a1a6] mb-4 max-w-md">
              {t?.fitnessPlus?.description || "Something for everyone. From beginner to advanced."}
            </p>
            <div className="flex items-center gap-4">
              <AppleLink href={localizedHref("/apple-fitness-plus")}>{common?.learnMore || "Learn more"}</AppleLink>
              <AppleLink href={localizedHref("/apple-fitness-plus/free-trial")}>{common?.tryItFree || "Try it free"}</AppleLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductTile({
  name,
  tagline,
  href,
  variant = "light",
  isNew,
  newLabel,
  learnMoreLabel,
  buyLabel,
  gradient,
}: {
  name: string
  tagline: string
  href: string
  variant?: "dark" | "light"
  isNew?: boolean
  newLabel?: string
  learnMoreLabel?: string
  buyLabel?: string
  gradient?: string
}) {
  return (
    <Link
      href={href}
      className={`relative flex flex-col items-center text-center h-[580px] overflow-hidden rounded-2xl group ${
        variant === "dark" ? "bg-black text-[#f5f5f7]" : "bg-white text-[#1d1d1f]"
      }`}
    >
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      )}

      <div className="relative z-10 pt-10 pb-4 px-4">
        {isNew && (
          <span className="text-[#f56300] text-sm font-medium mb-1 block">{newLabel || "New"}</span>
        )}
        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight group-hover:opacity-80 transition-opacity">
          {name}
        </h3>
        <p className={`text-lg mt-1 mb-3 ${variant === "dark" ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}>
          {tagline}
        </p>
        <div className="flex items-center justify-center gap-4">
          <span className="text-[#0071e3] group-hover:underline">{learnMoreLabel || "Learn more"}</span>
          <span className="text-[#0071e3] group-hover:underline">{buyLabel || "Buy"}</span>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center">
        <ProductShape name={name} variant={variant} />
      </div>
    </Link>
  )
}

function ProductShape({ name, variant }: { name: string; variant: "dark" | "light" }) {
  const baseColor = variant === "dark" ? "bg-[#2d2d2f]" : "bg-[#e8e8ed]"
  const borderColor = variant === "dark" ? "border-[#424245]" : "border-[#d2d2d7]"

  if (name.includes("MacBook")) {
    return (
      <div className={`w-64 h-44 ${baseColor} rounded-lg relative shadow-xl`}>
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-2 ${baseColor} rounded-b-lg`} />
      </div>
    )
  }

  if (name.includes("iPad")) {
    return (
      <div className={`w-48 h-64 ${baseColor} rounded-2xl border ${borderColor} shadow-xl`} />
    )
  }

  if (name.includes("Watch")) {
    return (
      <div className={`w-28 h-36 ${baseColor} rounded-[2rem] border-4 ${borderColor} shadow-xl relative`}>
        <div className={`absolute -right-1 top-1/3 w-2 h-8 ${baseColor} rounded-r-full`} />
      </div>
    )
  }

  if (name.includes("AirPods")) {
    return (
      <div className="flex gap-2">
        <div className={`w-16 h-24 ${baseColor} rounded-2xl shadow-xl relative`}>
          <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-8 ${baseColor} rounded-b-full`} />
        </div>
        <div className={`w-16 h-24 ${baseColor} rounded-2xl shadow-xl relative`}>
          <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-8 ${baseColor} rounded-b-full`} />
        </div>
      </div>
    )
  }

  if (name.includes("Vision")) {
    return (
      <div className={`w-56 h-20 ${baseColor} rounded-full shadow-xl relative`}>
        <div className="absolute inset-2 bg-black/30 rounded-full" />
      </div>
    )
  }

  return (
    <div className={`w-32 h-32 ${baseColor} rounded-2xl shadow-xl`} />
  )
}
