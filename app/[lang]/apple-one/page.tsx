import { AppleOneContent } from "@/components/apple-one"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple One - Apple",
  description:
    "Apple One. Bundle Apple Music, Apple TV+, Apple Arcade, iCloud+, and more. One subscription. All your favorites.",
}

export default async function AppleOnePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleOneContent dictionary={dictionary} lang={lang} />
}
