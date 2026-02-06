import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AccessoriesContent } from "@/components/shop-accessories"

export const metadata = {
  title: "Apple Accessories - Apple",
  description: "Shop Apple accessories for iPhone, iPad, Mac, Apple Watch, and more.",
}

export default async function AccessoriesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AccessoriesContent dictionary={dictionary} lang={lang} />
}
