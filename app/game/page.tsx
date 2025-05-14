"use client"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"

export default function GamePage() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <div className="content-page px-4 md:px-12 max-w-4xl mx-auto pb-12">
        <h1 className="text-4xl md:text-5xl font-serif mt-12 mb-8">{t("playGame")}</h1>

        <div className="space-y-6 text-lg">
          <p className="text-center text-xl md:text-2xl font-bold">{t("comingSoon")}</p>
          <p className="text-center italic text-white/80">{t("comingSoonDesc")}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
            <div className="text-6xl animate-pulse">🎮</div>
            <div className="absolute top-0 right-0 bg-white/20 text-xs px-2 py-1 rounded-bl-md rounded-tr-md font-mono">
              DEMO
            </div>
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
