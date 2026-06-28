import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyiPadProContent } from "@/components/shop-buy-ipad-ipad-pro"

export const metadata = {
  title: "Buy iPad Pro - Apple",
  description: "Buy iPad Pro with M4 chip. From $999. Choose your size, color, and storage.",
}

export default async function BuyiPadProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyiPadProContent dictionary={dictionary} lang={lang} />
}
