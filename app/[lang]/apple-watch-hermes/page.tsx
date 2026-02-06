import { AppleWatchHermesContent } from "@/components/apple-watch-hermes"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Watch Hermes - Apple",
  description:
    "Apple Watch Hermes. A unique partnership celebrating craftsmanship and innovation.",
}

export default async function AppleWatchHermesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleWatchHermesContent dictionary={dictionary} lang={lang} />
}
