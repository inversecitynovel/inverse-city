import { LanguageSwitcher } from "@/components/language-switcher"
import { GamePopup } from "@/components/game-popup"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { AboutUsSection } from "@/components/about-us-section"

export default function Home() {
  return (
    <div className="fullpage-container">
      {/* First Section - Home */}
      <section className="fullpage-section">
        <header className="w-full p-4 flex justify-end">
          <LanguageSwitcher />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif">镜面之地</h1>
          <h2 className="text-3xl md:text-4xl font-serif-latin">Inverse City</h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://fanqienovel.com/page/7458176390190337086"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-md hover:bg-white/90 transition-colors font-serif"
            >
              阅读小说
            </a>
            <GamePopup />
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Second Section - About Us */}
      <AboutUsSection />
    </div>
  )
}
