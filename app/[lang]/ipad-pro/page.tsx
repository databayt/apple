import { IPadProContent } from "@/components/ipad-pro/content"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iPad Pro - Apple",
  description: "iPad Pro with M4 chip. Impossibly thin. Incredibly powerful. Ultra Retina XDR display.",
}

export default async function IPadProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPadProContent dictionary={dictionary} lang={lang} />
}
