import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { ShopContent } from "@/components/shop"

export const metadata = {
  title: "Apple Store - Apple",
  description: "Shop the latest Apple products including iPhone, iPad, Mac, Apple Watch, and accessories.",
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <ShopContent dictionary={dictionary} lang={lang} />
}
