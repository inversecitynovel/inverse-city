"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import type { ChapterContent } from "@/lib/types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EnglishChapterPage() {
  const searchParams = useSearchParams()
  const file = searchParams.get("file")
  const { t } = useLanguage()

  const [chapter, setChapter] = useState<ChapterContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchChapter = async () => {
      if (!file) {
        setError("No chapter specified")
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const response = await fetch(`https://www.877771.xyz/ic/en/${file}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch chapter: ${response.status}`)
        }

        const data = await response.json()
        setChapter(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching chapter:", err)
        setError(t("error"))
      } finally {
        setLoading(false)
      }
    }

    fetchChapter()
  }, [file, t])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="content-page flex justify-center">
          <p>{t("loading")}</p>
        </div>
      </>
    )
  }

  if (error || !chapter) {
    return (
      <>
        <Navbar />
        <div className="content-page flex flex-col items-center gap-4">
          <p className="text-red-400">{error}</p>
          <Link href="/novel/en" className="flex items-center gap-2 text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> {t("back")}
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="content-page px-4 max-w-3xl mx-auto pb-12">
        <div className="mt-8 mb-6">
          <Link href="/novel/en" className="flex items-center gap-2 text-white/70 hover:text-white w-fit">
            <ArrowLeft className="h-4 w-4" /> {t("back")}
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-serif mb-8">{chapter.title}</h1>

        <div
          className="prose prose-invert prose-lg max-w-none font-serif"
          dangerouslySetInnerHTML={{ __html: chapter.content }}
        />

        <footer className="mt-16 pt-6 border-t border-white/10 text-center">
          <a href="mailto:sendamailto@inversecity.com" className="text-white/70 hover:text-white transition-colors">
            sendamailto@inversecity.com
          </a>
        </footer>
      </div>
    </>
  )
}
