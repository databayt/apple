import { getDictionary } from "@/components/local/dictionaries"
import type { Locale } from "@/components/local/config"
import { ApplePencilContent } from "@/components/apple-pencil"

export const metadata = {
  title: "Apple Pencil - Apple",
  description:
    "Apple Pencil. Precision tools for iPad. Choose from Apple Pencil Pro, Apple Pencil, and Apple Pencil (USB-C).",
}

export default async function ApplePencilPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return <ApplePencilContent dictionary={dictionary} lang={lang} />
}
