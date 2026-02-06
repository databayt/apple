import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { TradeInContent } from "@/components/shop-trade-in"

export const metadata = {
  title: "Apple Trade In - Apple",
  description: "Trade in your eligible device for credit toward a new one, or get an Apple Gift Card.",
}

export default async function TradeInPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <TradeInContent dictionary={dictionary} lang={lang} />
}
