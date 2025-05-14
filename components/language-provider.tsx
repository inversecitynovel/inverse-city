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
    comingSoonDesc: "（我们已经做完demo等待团队内部测试！）",
    contact: "联系我们",
    aboutUs: "关于我们",
    aboutUsContent:
      '我们是一群热爱<b>二次元</b>的初中生，我们正在打造一个<b>小说及衍生游戏</b>！我们决定叫TA为"<b>镜面之地</b>" aka.(<b>Inverse City</b>)。喜欢您来！',
    aboutUsGameContent:
      "在游戏方面，我们致力于将游戏打造为<b>meta类属性视觉小说/文字冒险类游戏</b>，我们希望他能得到一些成功。",
    aboutUsContactContent: "如果您感兴趣，欢迎联系邮箱: <b>sendamailto@inversecity.com</b>",
    aboutUsMoreInfo: "关于我们的更多信息 ->",
    home: "主页",
    chineseNovel: "镜面之地",
    englishNovel: "Inverse City",
    chineseNovelDesc: "由我们团队所有人进行编写，其中可能穿插着更多本地化的语言",
    englishNovelDesc: "由其中两位成员进行的英文翻译，我们尽量尝试满足英语国家的人的阅读体验",
    readMore: "阅读更多",
    volume: "卷",
    chapter: "章",
    loading: "加载中...",
    error: "加载错误，请稍后再试",
    back: "返回",
    scrollDown: "向下滚动",
    privacyTerms: "隐私条款",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    lastUpdated: "最后更新",
    game: "游戏",
  },
  "zh-TW": {
    title: "鏡面之地",
    subtitle: "Inverse City",
    readNovel: "閱讀小說",
    playGame: "遊玩遊戲",
    comingSoon: "敬請期待",
    comingSoonDesc: "（我們已經做完demo等待團隊內部測試！）",
    contact: "聯繫我們",
    aboutUs: "關於我們",
    aboutUsContent:
      '我們是一群熱愛<b>二次元</b>的初中生，我們正在打造一個<b>小說及衍生遊戲</b>！我們決定叫TA為"<b>鏡面之地</b>" aka.(<b>Inverse City</b>)。喜歡您來！',
    aboutUsGameContent:
      "在遊戲方面，我們致力於將遊戲打造為<b>meta類屬性視覺小說/文字冒險類遊戲</b>，我們希望他能得到一些成功。",
    aboutUsContactContent: "如果您感興趣，歡迎聯繫郵箱: <b>sendamailto@inversecity.com</b>",
    aboutUsMoreInfo: "關於我們的更多信息 ->",
    home: "主頁",
    chineseNovel: "镜面之地",
    englishNovel: "Inverse City",
    chineseNovelDesc: "由我們團隊所有人進行編寫，其中可能穿插著更多本地化的語言",
    englishNovelDesc: "由其中兩位成員進行的英文翻譯，我們盡量嘗試滿足英語國家的人的閱讀體驗",
    readMore: "閱讀更多",
    volume: "卷",
    chapter: "章",
    loading: "加載中...",
    error: "加載錯誤，請稍後再試",
    back: "返回",
    scrollDown: "向下滾動",
    privacyTerms: "隱私條款",
    privacyPolicy: "隱私政策",
    termsOfService: "服務條款",
    lastUpdated: "最後更新",
    game: "遊戲",
  },
  en: {
    title: "Inverse City",
    subtitle: "Inverse City",
    readNovel: "Read Novel",
    playGame: "Play Game",
    comingSoon: "Coming Soon",
    comingSoonDesc: "(We've completed the demo and are waiting for internal team testing!)",
    contact: "Contact Us",
    aboutUs: "About Us",
    aboutUsContent:
      "We are a group of middle school students who love <b>anime culture</b>. We are creating a <b>novel and derivative game</b>! We decided to call it \"<b>Inverse City</b>\". We're glad you're here!",
    aboutUsGameContent:
      "For the game, we are committed to creating a <b>meta-attribute visual novel/text adventure game</b>, and we hope it will achieve some success.",
    aboutUsContactContent: "If you are interested, please contact us at: <b>sendamailto@inversecity.com</b>",
    aboutUsMoreInfo: "More information about us ->",
    home: "Home",
    chineseNovel: "镜面之地",
    englishNovel: "Inverse City",
    chineseNovelDesc: "Written by our entire team, may include more localized language",
    englishNovelDesc:
      "Translated into English by two of our members, we try our best to provide a good reading experience for English speakers",
    readMore: "Read More",
    volume: "Volume",
    chapter: "Chapter",
    loading: "Loading...",
    error: "Failed to load, please try again later",
    back: "Back",
    scrollDown: "Scroll Down",
    privacyTerms: "Privacy & Terms",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    lastUpdated: "Last Updated",
    game: "Game",
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
