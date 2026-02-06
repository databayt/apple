import { IPadContent } from "@/components/ipad/content"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iPad - Apple",
  description: "Explore the world of iPad. Discover the iPad Pro, iPad Air, iPad, and iPad mini.",
}

export default async function IPadPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPadContent dictionary={dictionary} lang={lang} />
}
