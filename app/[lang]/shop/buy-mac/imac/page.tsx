import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { BuyiMacContent } from "@/components/shop-buy-mac-imac"

export const metadata = {
  title: "Buy iMac - Apple",
  description: "Buy iMac with M4. From $1,299. Choose your color, memory, and storage.",
}

export default async function BuyiMacPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <BuyiMacContent dictionary={dictionary} lang={lang} />
}
