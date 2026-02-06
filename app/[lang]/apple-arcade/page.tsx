import { AppleArcadeContent } from "@/components/apple-arcade"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Arcade - Apple",
  description:
    "Apple Arcade. Hundreds of games. No ads. No in-app purchases.",
}

export default async function AppleArcadePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleArcadeContent dictionary={dictionary} lang={lang} />
}
