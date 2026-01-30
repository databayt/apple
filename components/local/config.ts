export const i18n = {
  defaultLocale: "en" as const,
  locales: ["en", "ar"] as const,
}

export type Locale = (typeof i18n)["locales"][number]

export const localeConfig: Record<
  Locale,
  { name: string; nativeName: string; dir: "ltr" | "rtl" }
> = {
  en: {
    name: "English",
    nativeName: "English",
    dir: "ltr",
  },
  ar: {
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
  },
}
