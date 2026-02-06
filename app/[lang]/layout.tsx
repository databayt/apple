import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import { getDictionary } from "@/components/local/dictionaries"
import { i18n, localeConfig, type Locale } from "@/components/local/config"
import { HeaderWrapper } from "@/components/template/apple-header"
import { AppleFooter } from "@/components/template/apple-footer"
import "../globals.css"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: "Apple",
  description: "Discover the innovative world of Apple.",
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: rawLang } = await params
  const lang = (rawLang === "ar" ? "ar" : "en") as Locale
  const dictionary = await getDictionary(lang)
  const config = localeConfig[lang]

  return (
    <html lang={lang} dir={config.dir} className={inter.variable}>
      <body className="min-h-screen bg-white antialiased">
        <HeaderWrapper dictionary={dictionary} lang={lang} />
        <main className="pt-11">{children}</main>
        <AppleFooter dictionary={dictionary} lang={lang} />
      </body>
    </html>
  )
}
