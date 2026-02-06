"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AppleLink } from "@/components/atom/apple-link"
import { cn } from "@/lib/utils"
import { TvHomeNav } from "./nav"
import type { TvHomeContentProps } from "./types"
import {
  heroProducts,
  smartHomeFeatures,
  accessoryCategories,
  entertainmentServices,
} from "./data"

export function TvHomeContent({ dictionary, lang }: TvHomeContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col bg-[#f5f5f7]">
      {/* Sub Navigation */}
      <TvHomeNav lang={lang} />

      {/* Hero Products - 2x2 Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[12px] px-[6px] pt-[12px] pb-[12px]">
        {heroProducts.map((product) => (
          <ProductCard key={product.id} product={product} lang={lang} />
        ))}
      </section>

      {/* Smart Home Section */}
      <section className="bg-[#f5f5f7] py-[80px] px-[22px]">
        <div className="max-w-[980px] mx-auto text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] tracking-[-0.015em] leading-[1.07]">
            Every reason to turn your<br className="hidden md:block" /> house into a smart home.
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto">
          {smartHomeFeatures.map((feature, index) => (
            <FeatureRow
              key={feature.title}
              feature={feature}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section className="bg-[#f5f5f7] py-[80px] px-[22px]">
        <div className="max-w-[980px] mx-auto text-center mb-12">
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-[-0.015em] mb-4">
            Smart home accessories.
          </h2>
          <p className="text-[21px] text-[#86868b] leading-[1.381]">
            Discover accessories that work seamlessly with the Home app.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[12px]">
          {accessoryCategories.map((category) => (
            <AccessoryCard
              key={category.title}
              category={category}
              lang={lang}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <AppleLink href={localizedHref("/shop/accessories/all-accessories/homekit")}>
            Shop all home accessories
          </AppleLink>
        </div>
      </section>

      {/* Entertainment Services - Dark section */}
      <section className="bg-black py-[80px] px-[22px]">
        <div className="max-w-[980px] mx-auto text-center mb-12">
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#f5f5f7] tracking-[-0.015em] mb-4">
            The best of entertainment.
          </h2>
          <p className="text-[21px] text-[#86868b] leading-[1.381]">
            Stream it, play it, hear it - all on Apple TV.
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[12px]">
          {entertainmentServices.map((service) => (
            <ServiceCard key={service.id} service={service} lang={lang} />
          ))}
        </div>
      </section>

      {/* All your streaming apps */}
      <section className="bg-[#f5f5f7] py-[80px] px-[22px]">
        <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.015em] mb-4 leading-[1.1]">
              All your streaming apps<br className="hidden md:block" /> in one place.
            </h2>
            <p className="text-[17px] text-[#86868b] leading-[1.47] mb-6">
              Watch all your favorite shows, movies, and sports on Apple TV - from the top streaming services and cable providers. No app switching required.
            </p>
            <AppleLink href={localizedHref("/apple-tv-4k")}>Learn more about Apple TV 4K</AppleLink>
          </div>
          <div className="flex-1">
            <div className="relative w-full aspect-video">
              <Image
                src="https://www.apple.com/v/tv-home/q/images/overview/apps__cjcz0p5i38h6_large.jpg"
                alt="Streaming apps on Apple TV"
                fill
                className="object-contain rounded-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* HomePod + Apple TV Combo */}
      <section className="bg-white mx-[6px] rounded-3xl py-16 px-[22px] mb-[12px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative w-full aspect-[2/1] mb-8">
            <Image
              src="https://www.apple.com/v/tv-home/q/images/overview/combo__fmblfy5v6b6q_large.jpg"
              alt="HomePod and Apple TV 4K together"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.015em] mb-4">
              Even better together.
            </h2>
            <p className="text-[17px] text-[#86868b] leading-[1.47] mb-6">
              Pair HomePod with Apple TV 4K for rich, room-filling sound that makes everything you watch come alive.
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <AppleLink href={localizedHref("/homepod")}>Learn more about HomePod</AppleLink>
              <AppleLink href={localizedHref("/apple-tv-4k")}>Learn more about Apple TV 4K</AppleLink>
            </div>
          </div>
        </div>
      </section>

      {/* Trade In */}
      <section className="bg-white mx-[6px] rounded-3xl py-14 px-[22px] mb-[12px]">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.015em] mb-2">
            Apple Trade In
          </h2>
          <p className="text-[17px] text-[#86868b] leading-[1.47] mb-6">
            Trade in your current device and get credit toward a new one. It's good for you and the planet.
          </p>
          <AppleLink href={localizedHref("/shop/trade-in")}>Get your estimate</AppleLink>
        </div>
      </section>
    </div>
  )
}

function ProductCard({
  product,
  lang,
}: {
  product: (typeof heroProducts)[0]
  lang: string
}) {
  const [imageError, setImageError] = useState(false)
  const hasBuy = !!product.buyHref
  const isDark = product.variant === "dark"

  return (
    <article
      className={cn(
        "relative flex flex-col items-center text-center rounded-3xl overflow-hidden min-h-[720px]",
        isDark ? "bg-black" : "bg-white"
      )}
    >
      <div className="relative z-10 pt-14 pb-4 px-6">
        <h2
          className={cn(
            "text-[40px] md:text-[56px] font-semibold tracking-[-0.015em] leading-[1.05] mb-2",
            isDark ? "text-white" : "text-[#1d1d1f]"
          )}
        >
          {product.name}
        </h2>
        <p
          className={cn(
            "text-[21px] leading-[1.381] mb-2",
            isDark ? "text-white" : "text-[#1d1d1f]"
          )}
        >
          {product.tagline}
        </p>
        {product.price && (
          <p
            className={cn(
              "text-[17px] mb-5",
              isDark ? "text-[#a1a1a6]" : "text-[#86868b]"
            )}
          >
            {product.price}
          </p>
        )}
        <div className="flex items-center justify-center gap-5">
          <AppleLink href={`/${lang}${product.learnHref}`}>Learn more</AppleLink>
          {hasBuy && (
            <AppleLink href={`/${lang}${product.buyHref}`}>Buy</AppleLink>
          )}
        </div>
      </div>

      {!imageError && (
        <div className="relative flex-1 w-full mt-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain object-bottom"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </article>
  )
}

function FeatureRow({
  feature,
  reversed,
}: {
  feature: (typeof smartHomeFeatures)[0]
  reversed: boolean
}) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-10 mb-20 last:mb-0",
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <div className="flex-1 max-w-md text-center md:text-left">
        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#1d1d1f] tracking-[-0.015em] leading-[1.125] mb-4">
          {feature.title}
        </h3>
        <p className="text-[17px] text-[#86868b] leading-[1.47]">{feature.description}</p>
      </div>
      <div className="flex-1">
        {!imageError && (
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-contain rounded-2xl"
              unoptimized
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function AccessoryCard({
  category,
  lang,
}: {
  category: (typeof accessoryCategories)[0]
  lang: string
}) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link
      href={`/${lang}${category.shopHref}`}
      className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow min-h-[200px]"
    >
      {!imageError && (
        <div className="relative w-20 h-20 mb-4">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-contain"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#06c] transition-colors">
        {category.title}
      </h3>
      <p className="text-[14px] text-[#86868b]">{category.description}</p>
    </Link>
  )
}

function ServiceCard({
  service,
  lang,
}: {
  service: (typeof entertainmentServices)[0]
  lang: string
}) {
  const [imageError, setImageError] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <article className="relative flex flex-col bg-[#161617] rounded-3xl overflow-hidden min-h-[500px]">
      <div className="relative z-10 pt-12 pb-4 px-6 text-center">
        {!logoError && (
          <div className="relative w-32 h-10 mx-auto mb-4">
            <Image
              src={service.logo}
              alt={service.name}
              fill
              className="object-contain"
              unoptimized
              onError={() => setLogoError(true)}
            />
          </div>
        )}
        <p className="text-[21px] text-[#f5f5f7] font-medium leading-[1.381] mb-2">
          {service.tagline}
        </p>
        <p className="text-[14px] text-[#86868b] mb-5 max-w-sm mx-auto leading-[1.43]">
          {service.description}
        </p>
        <div className="flex items-center justify-center gap-5">
          <AppleLink href={`/${lang}${service.ctaHref}`}>
            {service.ctaLabel}
          </AppleLink>
          <AppleLink href={`/${lang}${service.learnHref}`}>Learn more</AppleLink>
        </div>
      </div>

      {!imageError && (
        <div className="relative flex-1 w-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover object-top"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </article>
  )
}
