import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { IMacContent } from "@/components/imac"

export const metadata = {
  title: "iMac - Apple",
  description:
    "iMac with M4 chip. Stunningly thin design. Gorgeous 24-inch 4.5K Retina display. Seven vibrant colors.",
}

export default async function IMacPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IMacContent dictionary={dictionary} />
}
