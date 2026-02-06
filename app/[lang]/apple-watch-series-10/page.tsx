import { AppleWatchSeries10Content } from "@/components/apple-watch-series-10"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Watch Series 10 - Apple",
  description:
    "Apple Watch Series 10. Thinnest ever. Biggest display. Sleep apnea detection. Advanced health monitoring.",
}

export default async function AppleWatchSeries10Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleWatchSeries10Content dictionary={dictionary} lang={lang} />
}
