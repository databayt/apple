import { ServicesContent } from "@/components/services"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Entertainment - Apple",
  description: "Explore Apple One, Apple TV+, Apple Music, Apple Arcade, Apple Fitness+, Apple News+, and more.",
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <ServicesContent dictionary={dictionary} lang={lang} />
}
