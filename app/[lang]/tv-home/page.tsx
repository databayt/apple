import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { TvHomeContent } from "@/components/tv-home"

export const metadata = {
  title: "TV & Home - Apple",
  description: "Explore Apple TV 4K, HomePod, and smart home accessories. Stream movies, control your home, and enjoy immersive sound.",
}

export default async function TvHomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <TvHomeContent dictionary={dictionary} lang={lang} />
}
