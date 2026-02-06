import { AppleNewsContent } from "@/components/apple-news"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple News+ - Apple",
  description:
    "Apple News+. Hundreds of magazines and top newspapers. All in one place.",
}

export default async function AppleNewsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleNewsContent dictionary={dictionary} lang={lang} />
}
