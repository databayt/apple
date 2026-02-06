import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { HomeContent } from "@/components/home"

export const metadata = {
  title: "Apple",
  description: "Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.",
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <HomeContent dictionary={dictionary} lang={lang} />
}
