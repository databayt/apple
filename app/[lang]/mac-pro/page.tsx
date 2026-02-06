import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { MacProContent } from "@/components/mac-pro"

export const metadata = {
  title: "Mac Pro - Apple",
  description:
    "Mac Pro with M2 Ultra. The most powerful Mac ever. Extreme performance for the most demanding workflows.",
}

export default async function MacProPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <MacProContent dictionary={dictionary} />
}
