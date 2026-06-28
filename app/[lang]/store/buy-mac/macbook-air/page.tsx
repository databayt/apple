import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyMacBookAirContent } from "@/components/shop-buy-mac-macbook-air"

export const metadata = {
  title: "Buy MacBook Air - Apple",
  description: "Buy MacBook Air. From $999. Choose your size, chip, and configuration.",
}

export default async function BuyMacBookAirPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyMacBookAirContent dictionary={dictionary} lang={lang} />
}
