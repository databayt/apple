import { IPadCompareContent } from "@/components/ipad-compare"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Compare iPad Models - Apple",
  description: "Compare iPad models. Find the right iPad for you.",
}

export default async function IPadComparePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPadCompareContent dictionary={dictionary} lang={lang} />
}
