import { AppleTVPlusContent } from "@/components/apple-tv-plus"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple TV+ - Apple",
  description:
    "Apple TV+. Award-winning Apple Originals. Stream on all your devices.",
}

export default async function AppleTVPlusPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleTVPlusContent dictionary={dictionary} lang={lang} />
}
