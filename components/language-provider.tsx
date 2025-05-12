"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "zh-CN" | "zh-TW" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  "zh-CN": {
    title: "镜面之地",
    subtitle: "Inverse City",
    readNovel: "阅读小说",
    playGame: "游玩游戏",
    comingSoon: "敬请期待",
    contact: "联系我们",
    aboutUs: "关于我们",
    aboutUsContent:
      '我们是一群热爱<b>二次元</b>的初中生，我们正在打造一个<b>小说及衍生游戏</b>！我们决定叫TA为"<b>镜面之地</b>" aka.(<b>Inverse City</b>)。喜欢您来！',
    aboutUsGameContent:
      "在游戏方面，我们致力于将游戏打造为<b>meta类属性视觉小说/文字冒险类游戏</b>，我们希望他能得到一些成功。",
    aboutUsContactContent: "如果您感兴趣，欢迎联系邮箱: <b>sendamailto@inversecity.com</b>",
    scrollDown: "向下滚动",
  },
  "zh-TW": {
    title: "鏡面之地",
    subtitle: "Inverse City",
    readNovel: "閱讀小說",
    playGame: "遊玩遊戲",
    comingSoon: "敬請期待",
    contact: "聯繫我們",
    aboutUs: "關於我們",
    aboutUsContent:
      '我們是一群熱愛<b>二次元</b>的初中生，我們正在打造一個<b>小說及衍生遊戲</b>！我們決定叫TA為"<b>鏡面之地</b>" aka.(<b>Inverse City</b>)。喜歡您來！',
    aboutUsGameContent:
      "在遊戲方面，我們致力於將遊戲打造為<b>meta類屬性視覺小說/文字冒險類遊戲</b>，我們希望他能得到一些成功。",
    aboutUsContactContent: "如果您感興趣，歡迎聯繫郵箱: <b>sendamailto@inversecity.com</b>",
    scrollDown: "向下滾動",
  },
  en: {
    title: "Mirror Land",
    subtitle: "Inverse City",
    readNovel: "Read Novel",
    playGame: "Play Game",
    comingSoon: "Coming Soon",
    contact: "Contact Us",
    aboutUs: "About Us",
    aboutUsContent:
      "We are a group of middle school students who love <b>anime culture</b>. We are creating a <b>novel and derivative game</b>! We decided to call it \"<b>Inverse City</b>\". We're glad you're here!",
    aboutUsGameContent:
      "For the game, we are committed to creating a <b>meta-attribute visual novel/text adventure game</b>, and we hope it will achieve some success.",
    aboutUsContactContent: "If you are interested, please contact us at: <b>sendamailto@inversecity.com</b>",
    scrollDown: "Scroll Down",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "zh-CN",
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh-CN")

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
