"use client"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Book } from "lucide-react"

export default function NovelPage() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <div className="content-page px-4 pb-12">
        <h1 className="text-4xl md:text-5xl font-serif mt-12 mb-12 text-center">{t("readNovel")}</h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Chinese Novel */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Book className="h-6 w-6" />
              <h2 className="text-2xl font-serif">{t("chineseNovel")}</h2>
            </div>
            <p className="text-white/70 mb-6">{t("chineseNovelDesc")}</p>
            <Link
              href="/novel/zh"
              className="inline-block px-4 py-2 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
            >
              {t("readMore")}
            </Link>
          </div>

          {/* English Novel */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Book className="h-6 w-6" />
              <h2 className="text-2xl font-serif">{t("englishNovel")}</h2>
            </div>
            <p className="text-white/70 mb-6">{t("englishNovelDesc")}</p>
            <Link
              href="/novel/en"
              className="inline-block px-4 py-2 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
            >
              {t("readMore")}
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-6 border-t border-white/10 text-center">
          <a href="mailto:sendamailto@inversecity.com" className="text-white/70 hover:text-white transition-colors">
            sendamailto@inversecity.com
          </a>
        </footer>
      </div>
    </>
  )
}
