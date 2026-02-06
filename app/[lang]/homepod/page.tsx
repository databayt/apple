import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { HomePodContent } from "@/components/homepod"

export const metadata = {
  title: "HomePod - Apple",
  description:
    "HomePod. Room-filling sound. Intelligent assistant. Smart home hub.",
}

export default async function HomePodPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <HomePodContent dictionary={dictionary} lang={lang} />
}
