import { AppStoreContent } from "@/components/app-store"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "App Store - Apple",
  description:
    "App Store. The best apps for iPhone, iPad, Mac, and Apple Watch.",
}

export default async function AppStorePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppStoreContent dictionary={dictionary} lang={lang} />
}
