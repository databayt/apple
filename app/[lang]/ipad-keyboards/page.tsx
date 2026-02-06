import { IPadKeyboardsContent } from "@/components/ipad-keyboards/content"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iPad Keyboards - Apple",
  description: "iPad keyboards. Magic Keyboard for iPad Pro and iPad Air. Smart Keyboard Folio.",
}

export default async function IPadKeyboardsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPadKeyboardsContent dictionary={dictionary} lang={lang} />
}
