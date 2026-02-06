import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AirPodsContent } from "@/components/airpods"

export const metadata = {
  title: "AirPods - Apple",
  description: "Explore AirPods, AirPods Pro 2, and AirPods Max. Free delivery.",
}

export default async function AirPodsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AirPodsContent dictionary={dictionary} lang={lang} />
}
