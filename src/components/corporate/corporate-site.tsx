"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CorporateBackdrop } from "@/components/corporate/corporate-backdrop";
import { HeroVisual } from "@/components/corporate/hero-visual";
import {
  IconBot,
  IconCode,
  IconContent,
  IconGlobe,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUsers,
  IconWorkflow,
} from "@/components/corporate/service-icons";

const BRAND = "新千西科技";
const COMPANY_LEGAL = "杭州萧山新千西人工智能应用软件有限公司";
const EMAIL = "admin@xinqianxi.world";
const PHONE = "16657165620";
const ADDRESS = "杭州市萧山区";
const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL ?? "https://www.xinqianxi.world";

const NAV = [
  { id: "home", label: "首页" },
  { id: "product-lab", label: "产品实验室" },
  { id: "tech", label: "技术能力" },
  { id: "about", label: "关于我们" },
  { id: "contact", label: "联系" },
] as const;

const BUILDING = [
  {
    icon: IconContent,
    title: "AI 内容生产",
    desc: "从小说、剧本到短剧、漫剧与视频 — 探索 AI 驱动的全链路内容创作范式。",
    accent: "#A78BFA",
  },
  {
    icon: IconUsers,
    title: "协同创作系统",
    desc: "多人共创、分支叙事与创作协作 — 让内容从个体走向网络化协同。",
    accent: "#818CF8",
  },
  {
    icon: IconCode,
    title: "AI 原生产品",
    desc: "自研面向创作者与内容团队的 AI 工具与平台，构建下一代内容基础设施。",
    accent: "#38BDF8",
  },
  {
    icon: IconBot,
    title: "数字资产探索",
    desc: "IP 孵化、内容资产化与确权机制 — 探索 AI 时代的新型数字资产形态。",
    accent: "#34D399",
  },
] as const;

const LAB_FLAGSHIP = {
  name: "多元宇宙叙事平台",
  tag: "Flagship Product",
  desc: "AI 驱动的共创叙事系统。面向未来创作者，支持多线剧情、角色共创与内容宇宙构建 — 新千西科技旗下旗舰产品。",
  href: PRODUCT_URL,
} as const;

const LAB_PROJECTS = [
  { name: "AI 学习平台", tag: "Exploring", desc: "基于上下文学习的知识系统" },
  { name: "AI 漫剧生产系统", tag: "Prototype", desc: "从剧本到视频的内容流水线" },
  { name: "数字资产实验室", tag: "Research", desc: "内容资产化与创作者协作机制" },
] as const;

const TECH_CAPABILITIES = [
  { icon: IconGlobe, title: "AI 官网建设", desc: "品牌与产品展示系统" },
  { icon: IconUsers, title: "数字员工", desc: "客服与运营辅助 Agent" },
  { icon: IconWorkflow, title: "自动化系统", desc: "工作流与业务协同" },
  { icon: IconBot, title: "企业知识库", desc: "RAG 与上下文知识系统" },
] as const;

const EXPLORE = [
  {
    title: "共创叙事引擎",
    desc: "多作者、多分支的 AI 辅助叙事协作，支持世界观扩展与剧情线并行演进。",
  },
  {
    title: "多模态内容流水线",
    desc: "打通文本、分镜、漫剧与短视频的内容生产链路，构建 AI 原生内容工厂。",
  },
  {
    title: "IP 内容资产化",
    desc: "探索角色、故事与知识内容的资产化路径，构建可持续的内容 IP 体系。",
  },
  {
    title: "创作者工具链",
    desc: "面向独立创作者的多模态 AI 创作工具，覆盖叙事、脚本与视觉内容生成。",
  },
] as const;

const DIGITAL_ASSETS = ["角色", "故事", "知识", "内容", "IP"] as const;

function scrollTo(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-3 text-left">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-xs font-black text-[#020817]">
        XQ
      </span>
      <span className="hidden sm:block">
        <span className="block text-sm font-bold leading-tight text-white">{BRAND}</span>
        <span className="block text-[10px] font-medium tracking-[0.12em] text-white/40">AI-NATIVE CONTENT · DIGITAL ASSETS</span>
      </span>
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CorporateSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  function nav(id: string) {
    setMenuOpen(false);
    setActiveNav(id);
    scrollTo(id === "home" ? "home" : id);
  }

  return (
    <div className="relative min-h-dvh text-white">
      <CorporateBackdrop />

      <header className="nav-dark fixed inset-x-0 top-0 z-50">
        <div className="site-container grid h-20 grid-cols-[1fr_auto_1fr] items-center">
          <Logo onClick={() => nav("home")} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="主导航">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => nav(item.id)}
                className={`relative whitespace-nowrap text-[13px] transition-colors ${
                  activeNav === item.id ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {item.label}
                {activeNav === item.id && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-cyan-400" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex justify-end">
            <button type="button" onClick={() => nav("product-lab")} className="btn-nav-cta hidden lg:inline-flex">
              探索产品
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 lg:hidden"
              aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-px w-4 bg-white/70 transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
                <span className={`block h-px w-4 bg-white/70 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-4 bg-white/70 transition-transform ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/8 bg-[#020817]/95 px-5 py-4 backdrop-blur-xl lg:hidden" aria-label="移动端导航">
            {NAV.map((item) => (
              <button
                key={`m-${item.id}`}
                type="button"
                onClick={() => nav(item.id)}
                className="block w-full py-3 text-left text-sm text-white/60 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button type="button" onClick={() => nav("product-lab")} className="btn-nav-cta mt-3 w-full">
              探索产品
            </button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="scroll-mt-20 min-h-screen pt-20">
        <div className="site-container flex min-h-[calc(100vh-80px)] items-center py-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <p className="mb-6 text-[13px] font-medium tracking-[0.14em] text-white/65">
                AI-Native Content · Digital Asset Innovation
              </p>
              <h1 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
                <span className="title-gradient block">探索 AI 原生内容</span>
                <span className="mt-1 block text-white">与数字资产未来</span>
              </h1>
              <p className="mt-6 max-w-[580px] text-[15px] leading-[1.85] text-white/[0.72]">
                {BRAND}是一家 AI 原生内容与数字资产创新公司。
                我们自研 AI 内容引擎、协同创作与数字资产产品 — 正在研发未来，而非接外包项目。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button type="button" onClick={() => nav("about")} className="btn-glow">
                  了解我们
                  <ArrowIcon />
                </button>
                <button type="button" onClick={() => nav("product-lab")} className="btn-outline">
                  产品实验室
                  <ArrowIcon />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex justify-center lg:justify-end">
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 我们在构建什么 */}
      <section id="building" className="scroll-mt-20 border-t border-white/6 py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-cyan-400/80">WHAT WE BUILD</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-white">
              我们在构建什么
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              公司愿景与研发方向 — 下一代 AI 内容基础设施
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {BUILDING.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="service-card-lg h-full p-7 md:p-8">
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}35` }}
                    >
                      <span style={{ color: item.accent }}>
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white md:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-[1.85] text-white/45">{item.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Lab */}
      <section id="product-lab" className="scroll-mt-20 py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-cyan-400/80">PRODUCT LAB</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-white">
              产品实验室
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              持续探索下一代 AI 原生产品
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <article
              className="lab-card relative overflow-hidden rounded-2xl p-8 md:p-10"
              style={{
                borderColor: "rgba(167,139,250,0.3)",
                background: "linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-violet-300/90">
                    {LAB_FLAGSHIP.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">{LAB_FLAGSHIP.name}</h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-white/50">{LAB_FLAGSHIP.desc}</p>
                </div>
                <a
                  href={LAB_FLAGSHIP.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow shrink-0 self-start md:self-center"
                >
                  了解旗舰产品
                  <ArrowIcon />
                </a>
              </div>
            </article>
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {LAB_PROJECTS.map((item, i) => (
              <Reveal key={item.name} delay={0.08 + i * 0.05}>
                <article className="lab-card h-full p-6">
                  <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium tracking-wider text-white/45">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-semibold text-white">{item.name}</h3>
                  <p className="mt-2 text-sm text-white/40">{item.desc}</p>
                  <span className="mt-4 inline-block text-sm text-white/25">探索中</span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-6 text-center">
            <p className="text-[13px] text-white/30">
              多元宇宙叙事平台 · 旗舰产品 · 产品官网独立运营
            </p>
          </Reveal>
        </div>
      </section>

      {/* 技术能力 */}
      <section id="tech" className="scroll-mt-20 border-t border-white/6 py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-white/35">TECH CAPABILITIES</p>
            <h2 className="font-display text-[clamp(1.5rem,2.8vw,2rem)] font-bold tracking-[-0.02em] text-white/80">
              技术能力
            </h2>
            <p className="mt-3 text-[14px] text-white/35">
              底层技术支撑 — 非公司核心方向
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_CAPABILITIES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.04}>
                  <article className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <Icon className="h-4 w-4 text-white/30" />
                    <h3 className="mt-3 text-sm font-medium text-white/55">{item.title}</h3>
                    <p className="mt-1 text-[12px] text-white/30">{item.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 探索与实践 */}
      <section id="explore" className="scroll-mt-20 py-20 md:py-28">
        <div className="site-container">
          <Reveal>
            <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-cyan-400/80">EXPLORATION</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-white">
              探索与实践
            </h2>
            <p className="mt-3 text-[15px] text-white/45">研发过程中的方向探索与能力验证</p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {EXPLORE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <article className="service-card-dark h-full p-6 md:p-7">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-[1.8] text-white/40">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 关于新千西 */}
      <section id="about" className="scroll-mt-20 border-t border-white/6 py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-display text-center text-[clamp(1.5rem,2.8vw,2.125rem)] font-bold tracking-[-0.02em] text-white">
              关于{BRAND}
            </h2>
            <p className="mt-4 text-center text-[15px] text-cyan-400/70">
              AI 原生内容与数字资产创新公司
            </p>

            <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-white/50 md:text-base">
              <p className="text-center">
                一家专注于 AI 内容创新与数字资产探索的技术团队。
              </p>
              <p>我们相信：</p>
              <p className="text-center text-white/65">
                未来最重要的数字资产将不再只是流量。
              </p>
              <p className="text-center">而是：</p>
              <div className="flex flex-wrap justify-center gap-3">
                {DIGITAL_ASSETS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-center text-white/55">
                以及由 AI 驱动的新型数字资产。
              </p>
              <p className="text-center text-sm text-white/35">{COMPANY_LEGAL}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="scroll-mt-20 pb-20 md:pb-28">
        <div className="site-container">
          <Reveal>
            <div className="console-panel mx-auto max-w-4xl rounded-[28px] px-8 py-12 md:px-14 md:py-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-white md:text-[1.75rem]">
                    联系我们
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    产品合作 · 投资交流 · 创作者生态 · 战略伙伴
                  </p>
                  <a href={`mailto:${EMAIL}`} className="btn-glow mt-8 inline-flex">
                    发送邮件
                    <ArrowIcon />
                  </a>
                </div>

                <div className="space-y-3 lg:min-w-[240px]">
                  {[
                    { icon: IconMail, label: "邮箱", value: EMAIL, href: `mailto:${EMAIL}` },
                    { icon: IconPhone, label: "电话", value: PHONE, href: `tel:${PHONE}` },
                    { icon: IconMapPin, label: "地址", value: ADDRESS },
                  ].map((item) => {
                      const Icon = item.icon;
                      const box = (
                        <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4">
                          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400/80" />
                          <div>
                            <p className="text-xs text-white/35">{item.label}</p>
                            <p className="mt-1 text-sm font-medium text-white/75">{item.value}</p>
                          </div>
                        </div>
                      );
                      return item.href ? (
                        <a key={item.label} href={item.href} className="block transition-opacity hover:opacity-80">
                          {box}
                        </a>
                      ) : (
                        <div key={item.label}>{box}</div>
                      );
                    })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/6 py-10">
        <div className="site-container flex flex-col items-center justify-between gap-4 text-xs text-white/35 md:flex-row">
          <p>{BRAND} · AI 原生内容与数字资产创新公司</p>
          <nav className="flex gap-6" aria-label="页脚导航">
            <Link href="/privacy" className="transition-colors hover:text-white/60">
              隐私政策
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/60">
              服务条款
            </Link>
          </nav>
        </div>
        <p className="site-container mt-4 text-center text-[11px] text-white/25">
          Copyright © 2026 {BRAND} · {COMPANY_LEGAL}
        </p>
      </footer>
    </div>
  );
}
