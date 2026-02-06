import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AppleTV4KContent } from "@/components/apple-tv-4k"

export const metadata = {
  title: "Apple TV 4K - Apple",
  description:
    "Apple TV 4K. Cinematic in every sense. Dolby Vision, Dolby Atmos, A15 Bionic chip.",
}

export default async function AppleTV4KPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleTV4KContent dictionary={dictionary} lang={lang} />
}
