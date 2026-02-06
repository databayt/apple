"use client"

import Image from "next/image"
import { useState } from "react"
import { AppleLink } from "@/components/atom/apple-link"
import { TvHomeNav } from "@/components/tv-home/nav"
import type { AppleTvAppContentProps } from "./types"
import { features, streamingServices, devices, appleOriginals } from "./data"

export function AppleTvAppContent({ dictionary, lang }: AppleTvAppContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Sub Navigation */}
      <TvHomeNav lang={lang} />

      {/* Hero */}
      <section className="bg-black pt-16 pb-8 px-6 text-center">
        <p className="text-[#a1a1a6] text-lg mb-2">Apple TV app</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#f5f5f7] tracking-tight max-w-4xl mx-auto">
          All your TV. All in one app.
        </h1>
        <p className="text-xl md:text-2xl text-[#a1a1a6] mt-6 max-w-2xl mx-auto">
          Watch shows and movies from Apple TV+, other streaming services, and live TV - all in one place.
        </p>
        <div className="mt-8">
          <AppleLink href={localizedHref("/apple-tv-plus")}>
            Try Apple TV+ free
          </AppleLink>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-black px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="https://www.apple.com/v/apple-tv-app/i/images/overview/hero__bly0x8q4czau_large.jpg"
              alt="Apple TV app interface"
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
          {features.slice(1).map((feature, index) => (
            <FeatureRow
              key={feature.title}
              feature={feature}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Apple Originals */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-[980px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5f5f7] tracking-tight mb-4">
            Apple Originals.
          </h2>
          <p className="text-xl text-[#a1a1a6]">
            Award-winning series, films, and documentaries. Only on Apple TV+.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {appleOriginals.map((show) => (
            <ShowCard key={show.title} show={show} />
          ))}
        </div>

        <div className="text-center mt-10">
          <AppleLink href={localizedHref("/apple-tv-plus")}>
            See all Apple Originals
          </AppleLink>
        </div>
      </section>

      {/* Streaming Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            All your streaming services in one place.
          </h2>
          <p className="text-xl text-[#6e6e73]">
            Subscribe to just the channels you want. Watch everything in the Apple TV app.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {streamingServices.map((service) => (
            <ServiceLogo key={service.name} service={service} />
          ))}
        </div>
      </section>

      {/* Devices */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-[980px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Watch anywhere.
          </h2>
          <p className="text-xl text-[#6e6e73]">
            The Apple TV app is available on all your favorite devices.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          {devices.map((device) => (
            <DeviceCard key={device.name} device={device} />
          ))}
        </div>
      </section>

      {/* Family Sharing */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
              Share with your family.
            </h2>
            <p className="text-lg text-[#6e6e73] mb-6">
              With Family Sharing, up to six family members can share Apple TV+ subscriptions and purchases. Everyone gets their own personalized recommendations.
            </p>
            <AppleLink href={localizedHref("/family-sharing")}>
              Learn about Family Sharing
            </AppleLink>
          </div>
          <div className="flex-1">
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <Image
                src="https://www.apple.com/v/apple-tv-app/i/images/overview/family__d0sxqhvjxbaq_large.jpg"
                alt="Family Sharing"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apple TV 4K Promo */}
      <section className="bg-black py-20 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5f5f7] tracking-tight mb-4">
            The best way to watch.
          </h2>
          <p className="text-xl text-[#a1a1a6] mb-6">
            Experience the Apple TV app in stunning 4K HDR with Dolby Atmos sound on Apple TV 4K.
          </p>
          <div className="flex items-center justify-center gap-6">
            <AppleLink href={localizedHref("/apple-tv-4k")}>Learn more</AppleLink>
            <AppleLink href={localizedHref("/shop/buy-tv/apple-tv-4k")}>Buy</AppleLink>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="bg-[#f5f5f7] py-16 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Start watching today.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-6">
            The Apple TV app is free to download. Subscribe to Apple TV+ and start streaming award-winning originals.
          </p>
          <AppleLink href={localizedHref("/apple-tv-plus")}>
            Try Apple TV+ free
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

function ShowCard({ show }: { show: (typeof appleOriginals)[0] }) {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="relative aspect-[2/3] rounded-xl overflow-hidden group cursor-pointer">
      {!imageError && (
        <Image
          src={show.image}
          alt={show.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
          onError={() => setImageError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-white">{show.title}</h3>
      </div>
    </article>
  )
}

function ServiceLogo({ service }: { service: (typeof streamingServices)[0] }) {
  const [logoError, setLogoError] = useState(false)

  return (
    <div className="flex flex-col items-center text-center p-4">
      {!logoError && (
        <div className="relative w-16 h-16 mb-2">
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
      <p className="text-sm font-medium text-[#1d1d1f]">{service.name}</p>
    </div>
  )
}

function DeviceCard({ device }: { device: (typeof devices)[0] }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex flex-col items-center text-center">
      {!imageError && (
        <div className="relative w-full aspect-square mb-4">
          <Image
            src={device.image}
            alt={device.name}
            fill
            className="object-contain"
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <p className="text-lg font-medium text-[#1d1d1f]">{device.name}</p>
    </div>
  )
}
