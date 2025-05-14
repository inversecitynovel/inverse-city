import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="content-page px-4 md:px-12 max-w-4xl mx-auto pb-12">
        <h1 className="text-4xl md:text-5xl font-serif mt-12 mb-8">关于我们</h1>

        <div className="space-y-6 text-lg">
          <p>
            我们是一群热爱<b>二次元</b>的初中生，我们正在打造一个<b>小说及衍生游戏</b>！我们决定叫TA为"<b>镜面之地</b>"
            aka.(<b>Inverse City</b>)。喜欢您来！
          </p>

          <p>
            在游戏方面，我们致力于将游戏打造为<b>meta类属性视觉小说/文字冒险类游戏</b>，我们希望他能得到一些成功。
          </p>

          <p>
            如果您感兴趣，欢迎联系邮箱: <b>sendamailto@inversecity.com</b>
          </p>
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
