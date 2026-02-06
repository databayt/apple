import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { HomeAppContent } from "@/components/home-app"

export const metadata = {
  title: "Home App - Apple",
  description: "Control all your smart home accessories in one app. The Home app is the foundation for a smarter home.",
}

export default async function HomeAppPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <HomeAppContent dictionary={dictionary} lang={lang} />
}
