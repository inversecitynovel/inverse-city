"use client"

import { useEffect } from "react"
import { GamePopup } from "@/components/game-popup"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { AboutUsSection } from "@/components/about-us-section"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  // Add homepage-specific body class for fullscreen scrolling
  useEffect(() => {
    document.body.classList.add("homepage-body")

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("homepage-body")
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="fullpage-container">
        {/* First Section - Home */}
        <section className="fullpage-section">
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4 text-center pt-16">
            <h1 className="text-5xl md:text-7xl font-serif">镜面之地</h1>
            <h2 className="text-3xl md:text-4xl font-serif-latin">Inverse City</h2>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/novel"
                className="px-6 py-3 bg-white text-black rounded-md hover:bg-white/90 transition-colors font-serif"
              >
                {t("readNovel")}
              </Link>
              <GamePopup />
            </div>
          </div>

          <ScrollIndicator />
        </section>

        {/* Second Section - About Us */}
        <AboutUsSection />
      </div>
    </>
  )
}
