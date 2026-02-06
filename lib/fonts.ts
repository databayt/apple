import { Inter } from "next/font/google"

// Inter font as web fallback for non-Apple devices
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// SF Pro Display font configuration
// Uses system font stack that includes SF Pro on Apple devices
// Falls back to Inter on non-Apple devices, then other system fonts

export const fontStack = {
  // Primary display font - for headlines and large text
  display: [
    "SF Pro Display",
    "var(--font-inter)",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ].join(", "),

  // Text font - for body copy and smaller text
  text: [
    "SF Pro Text",
    "var(--font-inter)",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ].join(", "),

  // Rounded variant for softer appearance
  rounded: [
    "SF Pro Rounded",
    "-apple-system-rounded",
    "SF Pro Display",
    "var(--font-inter)",
    "-apple-system",
    "BlinkMacSystemFont",
    "sans-serif",
  ].join(", "),
}

// CSS custom properties for fonts
export const fontVariables = `
  :root {
    --font-sf-pro-display: ${fontStack.display};
    --font-sf-pro-text: ${fontStack.text};
    --font-sf-pro-rounded: ${fontStack.rounded};
  }
`
