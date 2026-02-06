import { IPadAirContent } from "@/components/ipad-air/content"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iPad Air - Apple",
  description: "iPad Air with M2 chip. Supercharged by M2. Now in 11-inch and 13-inch.",
}

export default async function IPadAirPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPadAirContent dictionary={dictionary} lang={lang} />
}
