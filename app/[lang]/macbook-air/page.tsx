import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { MacBookAirContent } from "@/components/macbook-air"

export const metadata = {
  title: "MacBook Air - Apple",
  description:
    "MacBook Air with M4 chip. Strikingly thin. Incredibly capable. Remarkably affordable.",
}

export default async function MacBookAirPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <MacBookAirContent dictionary={dictionary} />
}
