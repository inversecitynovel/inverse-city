"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { LanguageSwitcher } from "./language-switcher"
import { Home, Book, Users, FileText, Gamepad2 } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-40 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl md:text-2xl">
          {t("title")}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Home className="h-4 w-4" />
            <span>{t("home")}</span>
          </Link>

          <Link href="/novel" className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Book className="h-4 w-4" />
            <span>{t("readNovel")}</span>
          </Link>

          <Link href="/game" className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Gamepad2 className="h-4 w-4" />
            <span>{t("playGame")}</span>
          </Link>

          <Link href="/about" className="flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            <Users className="h-4 w-4" />
            <span>{t("aboutUs")}</span>
          </Link>

          <Link
            href="/privacy-terms"
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <FileText className="h-4 w-4" />
            <span>{t("privacyTerms")}</span>
          </Link>

          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
