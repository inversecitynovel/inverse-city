"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { ArrowRight } from "lucide-react"

export function AboutUsSection() {
  const { t } = useLanguage()

  return (
    <section className="fullpage-section">
      <div className="flex-1 flex flex-col justify-center px-4 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-8">{t("aboutUs")}</h2>
        <div className="text-left space-y-6">
          <p
            className="text-lg md:text-xl leading-relaxed font-serif"
            dangerouslySetInnerHTML={{ __html: t("aboutUsContent") }}
          />
          <p
            className="text-lg md:text-xl leading-relaxed font-serif"
            dangerouslySetInnerHTML={{ __html: t("aboutUsGameContent") }}
          />
          <p
            className="text-lg md:text-xl leading-relaxed font-serif"
            dangerouslySetInnerHTML={{ __html: t("aboutUsContactContent") }}
          />
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-lg text-white/80 hover:text-white transition-colors"
            >
              {t("aboutUsMoreInfo")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <footer className="w-full p-6 text-center border-t border-white/10">
        <a href="mailto:sendamailto@inversecity.com" className="text-white/70 hover:text-white transition-colors">
          sendamailto@inversecity.com
        </a>
      </footer>
    </section>
  )
}
