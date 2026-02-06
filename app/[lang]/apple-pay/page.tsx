import { ApplePayContent } from "@/components/apple-pay"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Pay - Apple",
  description:
    "Apple Pay. The easiest, most secure way to pay.",
}

export default async function ApplePayPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <ApplePayContent dictionary={dictionary} lang={lang} />
}
