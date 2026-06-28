import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyIPhoneContent } from "@/components/shop-buy-iphone"

export const metadata = {
  title: "Buy iPhone - Apple",
  description: "Shop iPhone and choose from iPhone 16 Pro, iPhone 16, iPhone 16e, and more.",
}

export default async function BuyIPhonePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyIPhoneContent dictionary={dictionary} lang={lang} />
}
