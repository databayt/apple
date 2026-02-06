import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { MacBookProContent } from "@/components/macbook-pro"

export const metadata = {
  title: "MacBook Pro - Apple",
  description:
    "MacBook Pro with M4, M4 Pro, or M4 Max chip. The most advanced Mac laptops for demanding workflows.",
}

export default async function MacBookProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <MacBookProContent dictionary={dictionary} />
}
