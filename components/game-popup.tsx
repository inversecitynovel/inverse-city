"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"

export function GamePopup() {
  const { t } = useLanguage()

  return (
    <Link
      href="/game"
      className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-colors font-serif"
    >
      {t("playGame")}
    </Link>
  )
}
