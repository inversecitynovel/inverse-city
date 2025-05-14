"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import type { NovelList } from "@/lib/types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EnglishNovelPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [novelList, setNovelList] = useState<NovelList | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNovelList = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://www.877771.xyz/ic/en/list.json`)

        if (!response.ok) {
          throw new Error(`Failed to fetch novel list: ${response.status}`)
        }

        const data = await response.json()
        setNovelList(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching novel list:", err)
        setError(t("error"))
      } finally {
        setLoading(false)
      }
    }

    fetchNovelList()
  }, [t])

  const handleChapterClick = (volumeIndex: number, chapterIndex: number) => {
    if (!novelList) return

    const chapter = novelList.volumes[volumeIndex].chapters[chapterIndex]
    router.push(`/novel/en/chapter?file=${chapter.file}`)
  }

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

  if (error || !novelList) {
    return (
      <>
        <Navbar />
        <div className="content-page flex flex-col items-center gap-4">
          <p className="text-red-400">{error}</p>
          <Link href="/novel" className="flex items-center gap-2 text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> {t("back")}
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="content-page px-4 max-w-4xl mx-auto pb-12">
        <div className="mt-8 mb-6">
          <Link href="/novel" className="flex items-center gap-2 text-white/70 hover:text-white w-fit">
            <ArrowLeft className="h-4 w-4" /> {t("back")}
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif mb-8">{t("englishNovel")}</h1>

        <div className="space-y-6">
          {novelList.volumes.map((volume, volumeIndex) => (
            <Accordion type="single" collapsible key={volumeIndex}>
              <AccordionItem value={`volume-${volumeIndex}`} className="border-white/10">
                <AccordionTrigger className="text-xl font-serif py-4">
                  {t("volume")} {volumeIndex + 1}: {volume.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-4 py-2 space-y-1">
                    <p className="text-white/70 mb-4">{volume.intro}</p>
                    {volume.chapters.map((chapter, chapterIndex) => (
                      <div
                        key={chapterIndex}
                        className="py-2 px-4 hover:bg-white/5 rounded-md cursor-pointer transition-colors"
                        onClick={() => handleChapterClick(volumeIndex, chapterIndex)}
                      >
                        {chapter.title}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
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
