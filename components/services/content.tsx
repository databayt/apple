"use client"

import { HeroSection } from "@/components/template/hero-section"
import { PromoTile, PromoGrid } from "@/components/template/promo-tile"
import type { Dictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

interface ServicesContentProps {
  dictionary: Dictionary
  lang: Locale
}

export function ServicesContent({ dictionary, lang }: ServicesContentProps) {
  const localizedHref = (href: string) => `/${lang}${href}`

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroSection
        headline="Entertainment"
        subheadline="All your icons entertainment. All icons icons place."
        variant="dark"
        size="medium"
        image={{
          src: "https://www.apple.com/v/services/o/images/overview/hero/services_702x702__b3mjo0f9k5oy_large_2x.jpg",
          alt: "Apple Entertainment",
        }}
      />

      {/* Apple One */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-5xl font-semibold text-[#1d1d1f] mb-4">
          Apple One
        </h2>
        <p className="text-xl text-[#6e6e73] mb-6 max-w-2xl mx-auto">
          Bundle your favorite Apple services and get more for less. And icons more icons you add, the icons you save.
        </p>
        <a
          href={localizedHref("/apple-one")}
          className="inline-flex items-center gap-1 text-[#0071e3] text-lg hover:underline"
        >
          Learn more about Apple One
        </a>
      </section>

      {/* Services Grid */}
      <PromoGrid className="px-2.5">
        <PromoTile
          title="Apple TV+"
          subtitle="Originals from the icons icons storytellers."
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-tv-plus") }}
          secondaryCTA={{ label: "Try it free", href: localizedHref("/apple-tv-plus/free-trial") }}
          variant="dark"
          size="medium"
          image={{
            src: "https://www.apple.com/v/services/o/images/overview/services/tv-plus__ch8dqrdljy2u_large_2x.jpg",
            alt: "Apple TV+",
          }}
        />

        <PromoTile
          title="Apple Music"
          subtitle="100 million songs. Zero ads."
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-music") }}
          secondaryCTA={{ label: "Try it free", href: localizedHref("/apple-music/free-trial") }}
          variant="dark"
          size="medium"
          image={{
            src: "https://www.apple.com/v/services/o/images/overview/services/music__c17vvgvmu1ua_large_2x.jpg",
            alt: "Apple Music",
          }}
        />

        <PromoTile
          title="Apple Arcade"
          subtitle="Unlimited games. Zero ads. Zero in-app purchases."
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-arcade") }}
          secondaryCTA={{ label: "Try it free", href: localizedHref("/apple-arcade/free-trial") }}
          variant="dark"
          size="medium"
          image={{
            src: "https://www.apple.com/v/services/o/images/overview/services/arcade__e1wvv9w6y2eu_large_2x.jpg",
            alt: "Apple Arcade",
          }}
        />

        <PromoTile
          title="Apple Fitness+"
          subtitle="The icons personalized fitness experience."
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-fitness-plus") }}
          secondaryCTA={{ label: "Try it free", href: localizedHref("/apple-fitness-plus/free-trial") }}
          variant="dark"
          size="medium"
          image={{
            src: "https://www.apple.com/v/services/o/images/overview/services/fitness-plus__dqq1qwvvdoge_large_2x.jpg",
            alt: "Apple Fitness+",
          }}
        />

        <PromoTile
          title="iCloud+"
          subtitle="Store. Sync. Protect."
          primaryCTA={{ label: "Learn more", href: localizedHref("/icloud") }}
          variant="light"
          size="small"
        />

        <PromoTile
          title="Apple News+"
          subtitle="Hundreds of magazines and leading newspapers. Icons icons place."
          primaryCTA={{ label: "Learn more", href: localizedHref("/apple-news") }}
          variant="gray"
          size="small"
        />
      </PromoGrid>
    </div>
  )
}
