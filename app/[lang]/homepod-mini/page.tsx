import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { HomePodMiniContent } from "@/components/homepod-mini"

export const metadata = {
  title: "HomePod mini - Apple",
  description:
    "HomePod mini. Small speaker. Huge sound. Smart home essential.",
}

export default async function HomePodMiniPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <HomePodMiniContent dictionary={dictionary} lang={lang} />
}
