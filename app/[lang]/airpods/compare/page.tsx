import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AirPodsCompareContent } from "@/components/airpods-compare"

export const metadata = {
  title: "Compare AirPods Models - Apple",
  description: "Compare AirPods models. Find the right AirPods for you.",
}

export default async function AirPodsComparePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AirPodsCompareContent dictionary={dictionary} lang={lang} />
}
