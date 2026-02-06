import { AppleMusicContent } from "@/components/apple-music"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Music - Apple",
  description:
    "Apple Music. Over 100 million songs. All ad-free. Listen anywhere.",
}

export default async function AppleMusicPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleMusicContent dictionary={dictionary} lang={lang} />
}
