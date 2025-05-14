"use client"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PrivacyTermsPage() {
  const { t } = useLanguage()
  const currentDate = new Date().toLocaleDateString()

  return (
    <>
      <Navbar />
      <div className="content-page px-4 max-w-4xl mx-auto pb-12">
        <h1 className="text-4xl md:text-5xl font-serif mt-12 mb-8">{t("privacyTerms")}</h1>

        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="privacy">{t("privacyPolicy")}</TabsTrigger>
            <TabsTrigger value="terms">{t("termsOfService")}</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy" className="space-y-6">
            <div className="text-sm text-white/60 mb-4">
              {t("lastUpdated")}: {currentDate}
            </div>

            <h2 className="text-2xl font-serif mb-4">1. 信息收集</h2>
            <p className="mb-4">
              我们可能会收集您的个人信息，包括但不限于您的姓名、电子邮件地址、IP地址以及浏览器信息。这些信息用于提供和改进我们的服务。
            </p>

            <h2 className="text-2xl font-serif mb-4">2. 信息使用</h2>
            <p className="mb-4">
              我们使用收集到的信息来提供、维护和改进我们的服务，以及开发新的服务。我们也可能使用这些信息来与您沟通，例如通知您关于我们服务的变更或更新。
            </p>

            <h2 className="text-2xl font-serif mb-4">3. 信息共享</h2>
            <p className="mb-4">
              我们不会出售、交易或以其他方式转让您的个人身份信息给外部第三方。这不包括我们信任的、协助我们运营网站或开展业务的第三方，只要这些方同意对这些信息保密。
            </p>

            <h2 className="text-2xl font-serif mb-4">4. Cookie 使用</h2>
            <p className="mb-4">
              我们的网站可能使用"cookies"来增强用户体验。用户的网络浏览器将cookies放在其硬盘上用于记录保存和有时跟踪信息。用户可以选择拒绝cookies，或在cookies被设置时得到提醒。
            </p>
          </TabsContent>

          <TabsContent value="terms" className="space-y-6">
            <div className="text-sm text-white/60 mb-4">
              {t("lastUpdated")}: {currentDate}
            </div>

            <h2 className="text-2xl font-serif mb-4">1. 接受条款</h2>
            <p className="mb-4">
              通过访问和使用本网站，您同意受这些条款和条件的约束。如果您不同意这些条款的任何部分，您可能不会使用我们的网站或服务。
            </p>

            <h2 className="text-2xl font-serif mb-4">2. 知识产权</h2>
            <p className="mb-4">
              本网站及其原始内容、功能和设计均归"镜面之地"团队所有，并受国际版权、商标、专利、商业秘密和其他知识产权或专有权利法律的保护。
            </p>

            <h2 className="text-2xl font-serif mb-4">3. 用户行为</h2>
            <p className="mb-4">
              您同意不使用本网站进行任何非法或被禁止的活动，并且您将遵守所有适用的本地、国家和国际法律、规则和法规。
            </p>

            <h2 className="text-2xl font-serif mb-4">4. 免责声明</h2>
            <p className="mb-4">
              本网站及其内容按"原样"提供，不提供任何明示或暗示的保证。我们不保证网站将无错误运行或持续可用。
            </p>

            <h2 className="text-2xl font-serif mb-4">5. 责任限制</h2>
            <p className="mb-4">
              在任何情况下，"镜面之地"团队及其成员均不对因使用或无法使用本网站或服务而导致的任何损害负责。
            </p>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 pt-6 border-t border-white/10 text-center">
          <a href="mailto:sendamailto@inversecity.com" className="text-white/70 hover:text-white transition-colors">
            sendamailto@inversecity.com
          </a>
        </footer>
      </div>
    </>
  )
}
