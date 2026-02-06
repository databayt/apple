import { WatchContent } from "@/components/watch"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Watch - Apple",
  description: "Explore Apple Watch Series 10, Apple Watch Ultra 2, and Apple Watch SE.",
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <WatchContent dictionary={dictionary} lang={lang} />
}
