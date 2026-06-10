import Link from "next/link";
import type { Metadata } from "next";
import { CorporateBackdrop } from "@/components/corporate/corporate-backdrop";

const COMPANY = "杭州萧山新千西人工智能应用软件有限公司";

export const metadata: Metadata = {
  title: "服务条款",
  description: `${COMPANY} 服务条款`,
};

export default function TermsPage() {
  return (
    <div className="relative min-h-dvh text-white">
      <CorporateBackdrop />
      <div className="relative mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-32">
        <Link href="/" className="text-sm text-white/45 transition-colors hover:text-white/75">
          ← 返回首页
        </Link>
        <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white">服务条款</h1>
        <p className="mt-4 text-sm text-white/40">最后更新：2026 年 1 月 1 日</p>

        <div className="mt-10 space-y-8 text-[15px] leading-[1.85] text-white/55">
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">1. 服务说明</h2>
            <p>
              本网站由 {COMPANY} 运营，用于展示公司信息及提供商务咨询渠道。本公司提供人工智能应用开发、软件系统开发、数字化解决方案及技术研究与创新等服务，具体服务内容以双方签署的合同约定为准。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">2. 网站使用</h2>
            <p>
              访问本网站即表示您同意遵守适用的法律法规及本服务条款。您不得利用本网站从事任何违法、侵权或干扰网站正常运行的行为。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">3. 知识产权</h2>
            <p>
              本网站所载的文字、标识、版式设计及其他内容，除另有说明外，其知识产权均归本公司所有。未经书面许可，不得擅自复制、传播或用于商业目的。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">4. 免责声明</h2>
            <p>
              本网站信息仅供一般参考，不构成任何形式的承诺或保证。本公司对因使用或无法使用本网站信息而产生的直接或间接损失，在法律允许的范围内不承担责任。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">5. 服务变更</h2>
            <p>
              本公司保留随时修改、暂停或终止网站部分或全部内容的权利，无需事先通知。服务条款的修改将在本页面公布，继续使用本网站即视为接受修改后的条款。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">6. 适用法律</h2>
            <p>
              本服务条款的订立、执行与解释均适用中华人民共和国法律。因本条款引起的争议，双方应友好协商；协商不成的，提交本公司所在地有管辖权的人民法院解决。
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-white/85">7. 联系方式</h2>
            <p>
              邮箱：admin@xinqianxi.world
              <br />
              网站：www.xinqianxi.world
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
