"use client"

import { FadeIn } from "./fade-in"
import type { Locale } from "@/components/local/config"

interface UspsProps {
  lang: Locale
}

const content = {
  en: [
    "New Apple Originals every month — always ad‑free.",
    "Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.",
    "Share Apple TV+ with up to five people.",
    "Watch an original series or film for free.",
  ],
  ar: [
    "محتوى Apple الأصلي الجديد كل شهر — بدون إعلانات دائمًا.",
    "شاهد على تطبيق Apple TV على أجهزة Apple والتلفزيونات الذكية وأجهزة الألعاب.",
    "شارك Apple TV+‎ مع ما يصل إلى خمسة أشخاص.",
    "شاهد مسلسلًا أو فيلمًا أصليًا مجانًا.",
  ],
}

export function Usps({ lang }: UspsProps) {
  const items = content[lang] || content.en

  return (
    <section className="bg-black py-36 text-white">
      <div className="container-apple-narrow space-y-12">
        {items.map((text, i) => (
          <FadeIn key={i}>
            <p className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              {text}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
