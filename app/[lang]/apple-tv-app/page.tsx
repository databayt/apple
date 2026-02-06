import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AppleTvAppContent } from "@/components/apple-tv-app"

export const metadata = {
  title: "Apple TV App - Apple",
  description: "All your TV in one app. Watch shows and movies from Apple TV+, other streaming services, and live TV.",
}

export default async function AppleTvAppPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleTvAppContent dictionary={dictionary} lang={lang} />
}
