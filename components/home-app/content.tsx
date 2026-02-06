"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AppleLink } from "@/components/atom/apple-link"
import { TvHomeNav } from "@/components/tv-home/nav"
import type { HomeAppContentProps } from "./types"
import { features, accessoryCategories, hubs, privacyFeatures } from "./data"

export function HomeAppContent({ dictionary, lang }: HomeAppContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col bg-white">
      {/* Sub Navigation */}
      <TvHomeNav lang={lang} />

      {/* Hero */}
      <section className="bg-white pt-16 pb-8 px-6 text-center">
        <p className="text-[#6e6e73] text-lg mb-2">Home app</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f] tracking-tight max-w-4xl mx-auto">
          The foundation for a smarter home.
        </h1>
        <p className="text-xl md:text-2xl text-[#6e6e73] mt-6 max-w-2xl mx-auto">
          Control all your smart home accessories in one app on iPhone, iPad, Mac, and Apple Watch.
        </p>
      </section>

      {/* Hero Image */}
      <section className="bg-white px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="https://www.apple.com/v/home-app/e/images/overview/hero__d0do0jync1e6_large.jpg"
              alt="Home app interface"
              fill
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <FeatureRow
              key={feature.title}
              feature={feature}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Accessory Categories */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Works with thousands of accessories.
          </h2>
          <p className="text-xl text-[#6e6e73]">
            Find the perfect accessories to automate and control your home.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {accessoryCategories.map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
              lang={lang}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <AppleLink href={localizedHref("/shop/accessories/all-accessories/homekit")}>
            Shop all HomeKit accessories
          </AppleLink>
        </div>
      </section>

      {/* Home Hubs */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[980px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            The keys to even more control.
          </h2>
          <p className="text-xl text-[#6e6e73]">
            HomePod, HomePod mini, and Apple TV act as home hubs for remote access and automation.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <HubCard key={hub.name} hub={hub} lang={lang} />
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-6">
                Your data is private property.
              </h2>
              <ul className="space-y-4">
                {privacyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#34c759] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-[#1d1d1f]">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <AppleLink href={localizedHref("/privacy")}>
                  Learn more about privacy at Apple
                </AppleLink>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                <Image
                  src="https://www.apple.com/v/home-app/e/images/overview/privacy__f1kcv3z5y3iy_large.jpg"
                  alt="Privacy and security"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matter Support */}
      <section className="bg-[#1d1d1f] py-20 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5f5f7] tracking-tight mb-4">
            Matter compatible.
          </h2>
          <p className="text-xl text-[#a1a1a6] mb-6">
            The Home app supports Matter, the new smart home connectivity standard. Connect even more accessories from your favorite brands.
          </p>
          <AppleLink href={localizedHref("/shop/accessories/all-accessories/homekit")}>
            Shop Matter accessories
          </AppleLink>
        </div>
      </section>

      {/* Get Started */}
      <section className="bg-[#f5f5f7] py-16 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Get started with the Home app.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            The Home app is built into iOS, iPadOS, macOS, and watchOS. Just open the app and start adding accessories.
          </p>
          <AppleLink href={localizedHref("/shop/accessories/all-accessories/homekit")}>
            Shop home accessories
          </AppleLink>
        </div>
      </section>
    </div>
  )
}

function FeatureRow({
  feature,
  reversed,
}: {
  feature: (typeof features)[0]
  reversed: boolean
}) {
  const [imageError, setImageError] = useState(false)

  return (
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 mb-16 last:mb-0`}
    >
      <div className="flex-1 max-w-md">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-3">
          {feature.title}
        </h3>
        <p className="text-lg text-[#6e6e73]">{feature.description}</p>
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

function CategoryCard({
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
      className="group flex flex-col items-center text-center bg-[#f5f5f7] rounded-2xl p-6 hover:shadow-lg transition-shadow"
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
      <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#0071e3] transition-colors">
        {category.title}
      </h3>
      <p className="text-sm text-[#6e6e73]">{category.description}</p>
    </Link>
  )
}

function HubCard({
  hub,
  lang,
}: {
  hub: (typeof hubs)[0]
  lang: string
}) {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="flex flex-col items-center text-center bg-white rounded-2xl p-8">
      {!imageError && (
        <div className="relative w-full aspect-square max-w-[200px] mb-6">
          <Image
            src={hub.image}
            alt={hub.name}
            fill
            className="object-contain"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">{hub.name}</h3>
      <p className="text-[#6e6e73] mb-4">{hub.description}</p>
      <div className="flex items-center gap-4">
        <AppleLink href={`/${lang}${hub.learnHref}`}>Learn more</AppleLink>
        <AppleLink href={`/${lang}${hub.buyHref}`}>Buy</AppleLink>
      </div>
    </article>
  )
}
