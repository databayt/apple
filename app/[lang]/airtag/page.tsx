import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { AirTagContent } from "@/components/airtag"

export const metadata = {
  title: "AirTag - Apple",
  description:
    "AirTag. Keep track of your stuff. Ultra Wideband technology for Precision Finding.",
}

export default async function AirTagPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AirTagContent dictionary={dictionary} lang={lang} />
}
