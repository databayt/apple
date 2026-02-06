import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { MacMiniContent } from "@/components/mac-mini"

export const metadata = {
  title: "Mac mini - Apple",
  description:
    "Mac mini with M4 and M4 Pro. Incredibly small. Unbelievably powerful. Built for Apple Intelligence.",
}

export default async function MacMiniPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <MacMiniContent dictionary={dictionary} />
}
