"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function GamePopup() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-colors font-serif"
      >
        {t("playGame")}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">{t("comingSoon")}</DialogTitle>
            <DialogDescription className="text-white/70 font-serif">{t("comingSoon")}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
