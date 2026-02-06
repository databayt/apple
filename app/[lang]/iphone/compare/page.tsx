import { IPhoneCompareContent } from "@/components/iphone-compare"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Compare iPhone Models - Apple",
  description: "Compare iPhone models. Find the right iPhone for you.",
}

export default async function IPhoneComparePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPhoneCompareContent dictionary={dictionary} lang={lang} />
}
