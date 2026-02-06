import { ICloudContent } from "@/components/icloud"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "iCloud - Apple",
  description:
    "iCloud. All your stuff. All your devices. Seamlessly connected.",
}

export default async function ICloudPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <ICloudContent dictionary={dictionary} lang={lang} />
}
