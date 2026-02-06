import { AppleFitnessPlusContent } from "@/components/apple-fitness-plus"
import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"

export const metadata = {
  title: "Apple Fitness+ - Apple",
  description:
    "Apple Fitness+. Thousands of workouts and meditations. Powered by Apple Watch.",
}

export default async function AppleFitnessPlusPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <AppleFitnessPlusContent dictionary={dictionary} lang={lang} />
}
