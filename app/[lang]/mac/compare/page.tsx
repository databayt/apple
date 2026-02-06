import { MacCompareContent } from "@/components/mac-compare"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Compare Mac Models - Apple",
  description: "Compare Mac models. Find the right Mac for you.",
}

export default async function MacComparePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <MacCompareContent dictionary={dictionary} lang={lang} />
}
