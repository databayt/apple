import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AirPods4Content } from "@/components/airpods-4"

export const metadata = {
  title: "AirPods 4 - Apple",
  description:
    "AirPods 4. Rebuilt from the sound up. Personalized Spatial Audio. Open-ear comfort with breakthrough sound.",
}

export default async function AirPods4Page({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AirPods4Content dictionary={dictionary} lang={lang} />
}
