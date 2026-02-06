import { WatchCompareContent } from "@/components/watch-compare"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Compare Apple Watch Models - Apple",
  description: "Compare Apple Watch models. Find the right Apple Watch for you.",
}

export default async function WatchComparePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <WatchCompareContent dictionary={dictionary} lang={lang} />
}
