import { AppleWatchSEContent } from "@/components/apple-watch-se"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Watch SE - Apple",
  description:
    "Apple Watch SE. All the essentials. Light on price. Heavy on features.",
}

export default async function AppleWatchSEPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleWatchSEContent dictionary={dictionary} lang={lang} />
}
