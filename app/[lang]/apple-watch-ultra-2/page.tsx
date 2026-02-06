import { AppleWatchUltra2Content } from "@/components/apple-watch-ultra-2"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Watch Ultra 2 - Apple",
  description:
    "Apple Watch Ultra 2. The most rugged and capable Apple Watch, built for exploration and endurance.",
}

export default async function AppleWatchUltra2Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleWatchUltra2Content dictionary={dictionary} lang={lang} />
}
