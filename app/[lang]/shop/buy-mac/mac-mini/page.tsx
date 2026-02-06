import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyMacMiniContent } from "@/components/shop-buy-mac-mac-mini"

export const metadata = {
  title: "Buy Mac mini - Apple",
  description: "Buy Mac mini with M4 or M4 Pro. From $599. Choose your chip, memory, and storage.",
}

export default async function BuyMacMiniPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyMacMiniContent dictionary={dictionary} lang={lang} />
}
