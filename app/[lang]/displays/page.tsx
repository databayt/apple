import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { DisplaysContent } from "@/components/displays"

export const metadata = {
  title: "Apple Displays - Apple",
  description:
    "Apple displays. Studio Display and Pro Display XDR. Stunning visuals for every workflow.",
}

export default async function DisplaysPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <DisplaysContent dictionary={dictionary} lang={lang} />
}
