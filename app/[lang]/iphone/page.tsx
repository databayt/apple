import { IPhoneContent } from "@/components/iphone"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "iPhone - Apple",
  description: "Explore iPhone, the world's most powerful personal device. Check out the new iPhone 16 Pro, iPhone 16, and more.",
}

export default async function IPhonePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <IPhoneContent dictionary={dictionary} lang={lang} />
}
