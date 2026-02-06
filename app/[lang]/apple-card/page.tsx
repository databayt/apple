import { AppleCardContent } from "@/components/apple-card"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Card - Apple",
  description:
    "Apple Card. A new kind of credit card. Created by Apple, not a bank.",
}

export default async function AppleCardPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleCardContent dictionary={dictionary} lang={lang} />
}
