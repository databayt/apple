import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AirPodsProContent } from "@/components/airpods-pro"

export const metadata = {
  title: "AirPods Pro 2 - Apple",
  description:
    "AirPods Pro 2 with USB-C. Hearing aid feature. Active Noise Cancellation. Adaptive Audio. Personalized Spatial Audio.",
}

export default async function AirPodsProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AirPodsProContent dictionary={dictionary} lang={lang} />
}
