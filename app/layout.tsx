import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_SC, Noto_Serif } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

// Serif fonts for English and Chinese
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "700"],
})

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-sc",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "镜面之地 | Inverse City",
  description: "Welcome to Inverse City - 镜面之地",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${notoSerif.variable} ${notoSerifSC.variable}`}>
      <body className="bg-black text-white font-serif min-h-screen">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
