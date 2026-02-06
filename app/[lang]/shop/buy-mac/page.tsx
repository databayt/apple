import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyMacContent } from "@/components/shop-buy-mac"

export const metadata = {
  title: "Buy Mac - Apple",
  description: "Shop Mac and choose from MacBook Pro, MacBook Air, iMac, Mac mini, Mac Studio, and Mac Pro.",
}

export default async function BuyMacPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyMacContent dictionary={dictionary} lang={lang} />
}
