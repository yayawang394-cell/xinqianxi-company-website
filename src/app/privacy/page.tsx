import Link from "next/link";
import type { Metadata } from "next";
import { CorporateBackdrop } from "@/components/corporate/corporate-backdrop";

const COMPANY = "杭州萧山新千西人工智能应用软件有限公司";

export const metadata: Metadata = {
  title: "隐私政策",
  description: `${COMPANY} 隐私政策`,
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-dvh text-white">
      <CorporateBackdrop />
      <div className="relative mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-32">
        <Link href="/" className="text-sm text-white/45 transition-colors hover:text-white/75">
          ← 返回首页
        </Link>
        <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white">隐私政策</h1>
        <p className="mt-4 text-sm text-white/40">最后更新：2026 年 1 月 1 日</p>

        <div className="mt-10 space-y-8 text-[15px] leading-[1.85] text-white/55">
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">1. 信息收集</h2>
            <p>
              {COMPANY}（以下简称「本公司」）在您访问网站、提交咨询或通过邮件与我们联系时，可能收集您主动提供的联系信息（如姓名、电子邮箱、公司名称及咨询内容）。我们不会主动收集与服务无关的敏感个人信息。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">2. 信息使用</h2>
            <p>
              收集的信息仅用于回复您的咨询、提供技术服务、履行合同义务及改进我们的服务质量。未经您的同意，我们不会将您的个人信息用于营销推广以外的目的。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">3. 信息保护</h2>
            <p>
              本公司采取合理的技术与管理措施，防止个人信息遭到未经授权的访问、披露、篡改或损毁。我们仅在有合法业务需要时保留相关信息，并在不再需要时予以删除或匿名化处理。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">4. 信息共享</h2>
            <p>
              除法律法规要求或经您明确同意外，本公司不会向第三方出售、出租或交易您的个人信息。为完成技术服务所必需时，我们可能与受保密义务约束的服务提供商共享必要信息。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">5. 您的权利</h2>
            <p>
              您有权查询、更正或要求删除我们持有的您的个人信息。如有相关请求，请通过 admin@xinqianxi.world 与我们联系，我们将在合理期限内予以答复。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">6. 政策更新</h2>
            <p>
              本公司可能适时更新本隐私政策。更新后的政策将在本页面发布，重大变更时我们将通过网站公告或其他适当方式通知您。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">7. 联系我们</h2>
            <p>
              如对本隐私政策有任何疑问，请联系：admin@xinqianxi.world
              <br />
              {COMPANY}
              <br />
              杭州市萧山区
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
