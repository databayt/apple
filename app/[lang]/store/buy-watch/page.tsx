import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyWatchContent } from "@/components/shop-buy-watch"

export const metadata = {
  title: "Buy Apple Watch - Apple",
  description: "Shop Apple Watch and choose from Series 10, Ultra 2, SE, and more.",
}

export default async function BuyWatchPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyWatchContent dictionary={dictionary} lang={lang} />
}
