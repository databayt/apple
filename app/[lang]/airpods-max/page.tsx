import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AirPodsMaxContent } from "@/components/airpods-max"

export const metadata = {
  title: "AirPods Max - Apple",
  description:
    "AirPods Max. Immersive sound. Incredible comfort. USB-C connectivity.",
}

export default async function AirPodsMaxPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AirPodsMaxContent dictionary={dictionary} lang={lang} />
}
