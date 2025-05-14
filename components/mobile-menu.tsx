import React from "react"
import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Menu, X, Home, Book, Users, FileText, Gamepad2 } from "lucide-react"

export function MobileMenu() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  // ESC 键关闭菜单
  React.useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  // 禁止页面滚动
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white p-2 focus:outline-none"
        aria-label={t("openMenu")}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
      >
        <Menu className="h-5 w-5" />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex"
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {/* 遮罩层 */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          {/* 菜单面板 */}
          <aside
            id="mobile-menu-panel"
            className="relative ml-auto h-full w-full max-w-full bg-black border-l border-white/10 p-4 overflow-y-auto z-[101] animate-slide-in"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
                aria-label={t("closeMenu")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                <Home className="h-5 w-5" />
                <span>{t("home")}</span>
              </Link>
              <Link href="/novel" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                <Book className="h-5 w-5" />
                <span>{t("readNovel")}</span>
              </Link>
              <Link href="/game" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                <Gamepad2 className="h-5 w-5" />
                <span>{t("playGame")}</span>
              </Link>
              <Link href="/about" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                <Users className="h-5 w-5" />
                <span>{t("aboutUs")}</span>
              </Link>
              <Link href="/privacy-terms" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                <FileText className="h-5 w-5" />
                <span>{t("privacyTerms")}</span>
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
