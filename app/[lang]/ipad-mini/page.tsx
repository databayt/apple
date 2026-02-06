import { IPadMiniContent } from "@/components/ipad-mini/content"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iPad mini - Apple",
  description: "iPad mini with A17 Pro chip. Mega power in a mini footprint. Apple Intelligence ready.",
}

export default async function IPadMiniPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPadMiniContent dictionary={dictionary} lang={lang} />
}
