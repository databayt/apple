import { IPhone16eContent } from "@/components/iphone-16e"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "iPhone 16e - Apple",
  description:
    "iPhone 16e. A great deal more for a great deal less. Features Apple Intelligence, the A18 chip, and a stunning 6.1-inch display.",
}

export default async function IPhone16ePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPhone16eContent dictionary={dictionary} lang={lang} />
}
