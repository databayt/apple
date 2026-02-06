import { IPhone16Content } from "@/components/iphone-16"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "iPhone 16 and iPhone 16 Plus - Apple",
  description:
    "iPhone 16. A total powerhouse. Featuring Apple Intelligence, the A18 chip, Camera Control, and stunning new colors.",
}

export default async function IPhone16Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPhone16Content dictionary={dictionary} lang={lang} />
}
