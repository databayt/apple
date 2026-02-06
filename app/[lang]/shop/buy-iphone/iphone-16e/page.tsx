import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyIPhone16eContent } from "@/components/shop-buy-iphone-16e"

export const metadata = {
  title: "Buy iPhone 16e - Apple",
  description: "Buy iPhone 16e. From $599 or $24.95/mo. Choose your finish and storage.",
}

export default async function BuyIPhone16ePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyIPhone16eContent dictionary={dictionary} lang={lang} />
}
