import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyMacBookProContent } from "@/components/shop-buy-mac-macbook-pro"

export const metadata = {
  title: "Buy MacBook Pro - Apple",
  description: "Buy MacBook Pro. From $1,599. Choose your size, chip, and configuration.",
}

export default async function BuyMacBookProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyMacBookProContent dictionary={dictionary} lang={lang} />
}
