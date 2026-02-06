import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { MacStudioContent } from "@/components/mac-studio"

export const metadata = {
  title: "Mac Studio - Apple",
  description:
    "Mac Studio with M2 Max and M2 Ultra. Astonishing performance for pro workflows.",
}

export default async function MacStudioPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <MacStudioContent dictionary={dictionary} />
}
