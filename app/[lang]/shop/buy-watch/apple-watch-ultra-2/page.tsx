import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyAppleWatchUltra2Content } from "@/components/shop-buy-watch-ultra-2"

export const metadata = {
  title: "Buy Apple Watch Ultra 2 - Apple",
  description: "Buy Apple Watch Ultra 2. From $799. Choose your band and get ready for adventure.",
}

export default async function BuyAppleWatchUltra2Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyAppleWatchUltra2Content dictionary={dictionary} lang={lang} />
}
