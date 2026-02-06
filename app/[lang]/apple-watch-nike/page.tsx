import { AppleWatchNikeContent } from "@/components/apple-watch-nike"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Watch Nike - Apple",
  description:
    "Apple Watch Nike. The ultimate running partner with exclusive Nike features.",
}

export default async function AppleWatchNikePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleWatchNikeContent dictionary={dictionary} lang={lang} />
}
