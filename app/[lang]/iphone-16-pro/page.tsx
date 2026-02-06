import { IPhone16ProContent } from "@/components/iphone-16-pro"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "iPhone 16 Pro and iPhone 16 Pro Max - Apple",
  description:
    "iPhone 16 Pro. Built for Apple Intelligence. Featuring a stunning titanium design, the A18 Pro chip, Camera Control, and a 48MP Fusion camera.",
}

export default async function IPhone16ProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPhone16ProContent dictionary={dictionary} lang={lang} />
}
