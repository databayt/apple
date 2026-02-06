import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyiPadContent } from "@/components/shop-buy-ipad"

export const metadata = {
  title: "Buy iPad - Apple",
  description: "Shop iPad and choose from iPad Pro, iPad Air, iPad, and iPad mini.",
}

export default async function BuyiPadPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyiPadContent dictionary={dictionary} lang={lang} />
}
