import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyIPhone16Content } from "@/components/shop-buy-iphone-16"

export const metadata = {
  title: "Buy iPhone 16 - Apple",
  description: "Buy iPhone 16. From $799 or $33.29/mo. Choose your finish, storage, and carrier.",
}

export default async function BuyIPhone16Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyIPhone16Content dictionary={dictionary} lang={lang} />
}
