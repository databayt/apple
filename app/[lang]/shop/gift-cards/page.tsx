import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { GiftCardsContent } from "@/components/shop-gift-cards"

export const metadata = {
  title: "Apple Gift Card - Apple",
  description: "Send an Apple Gift Card for App Store, Apple Music, Apple TV+, Apple Arcade, and more.",
}

export default async function GiftCardsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <GiftCardsContent dictionary={dictionary} lang={lang} />
}
