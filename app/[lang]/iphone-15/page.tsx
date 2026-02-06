import { IPhone15Content } from "@/components/iphone-15"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "iPhone 15 - Apple",
  description:
    "iPhone 15. New Dynamic Island. 48MP camera. USB-C. Durable design with Ceramic Shield.",
}

export default async function IPhone15Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPhone15Content dictionary={dictionary} lang={lang} />
}
