import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyIPhone16ProContent } from "@/components/shop-buy-iphone-16-pro"

export const metadata = {
  title: "Buy iPhone 16 Pro - Apple",
  description: "Buy iPhone 16 Pro. From $999 or $41.62/mo. Choose your finish, storage, and carrier.",
}

export default async function BuyIPhone16ProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyIPhone16ProContent dictionary={dictionary} lang={lang} />
}
