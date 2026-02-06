import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AccessoriesContent } from "@/components/accessories"

export const metadata = {
  title: "Accessories - Apple",
  description: "Explore Mac, iPad, iPhone, and Apple Watch accessories. Shop AirTag, cases, covers, and more.",
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
