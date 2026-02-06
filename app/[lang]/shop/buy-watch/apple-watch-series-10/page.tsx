import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyAppleWatchSeries10Content } from "@/components/shop-buy-watch-series-10"

export const metadata = {
  title: "Buy Apple Watch Series 10 - Apple",
  description: "Buy Apple Watch Series 10. From $399. Choose your case size, material, and band.",
}

export default async function BuyAppleWatchSeries10Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyAppleWatchSeries10Content dictionary={dictionary} lang={lang} />
}
