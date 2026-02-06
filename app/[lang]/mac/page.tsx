import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { MacContent } from "@/components/mac"

export const metadata = {
  title: "Mac - Apple",
  description: "Explore the world of Mac. Check out MacBook Pro, MacBook Air, iMac, Mac mini, and more.",
}

export default async function MacPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <MacContent dictionary={dictionary} />
}
