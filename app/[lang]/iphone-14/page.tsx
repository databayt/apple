import { IPhone14Content } from "@/components/iphone-14"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "iPhone 14 - Apple",
  description:
    "iPhone 14. A15 Bionic chip. Crash Detection. Emergency SOS via satellite. All-day battery life.",
}

export default async function IPhone14Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPhone14Content dictionary={dictionary} lang={lang} />
}
