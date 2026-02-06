import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyiPadAirContent } from "@/components/shop-buy-ipad-ipad-air"

export const metadata = {
  title: "Buy iPad Air - Apple",
  description: "Buy iPad Air with M2 chip. From $599. Choose your size, color, and storage.",
}

export default async function BuyiPadAirPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyiPadAirContent dictionary={dictionary} lang={lang} />
}
