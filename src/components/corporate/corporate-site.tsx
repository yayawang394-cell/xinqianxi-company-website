"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "framer-motion";
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
  IconWechat,
  IconWorkflow,
} from "@/components/corporate/service-icons";

const COMPANY = "杭州萧山新千西人工智能应用软件有限公司";
const EMAIL = "admin@xinqianxi.world";
const PHONE = "预留电话";
const WECHAT = "预留微信";
const ADDRESS = "杭州市萧山区";

const NAV = [
  { id: "home", label: "首页" },
  { id: "services", label: "解决方案" },
  { id: "services", label: "服务" },
  { id: "cases", label: "案例" },
  { id: "about", label: "关于我们" },
  { id: "contact", label: "联系" },
] as const;

const STATS = [
  { value: 100, suffix: "+", label: "项目经验", color: "#818CF8" },
  { value: 30, suffix: "+", label: "企业客户", color: "#38BDF8" },
  { value: 7, suffix: "天", label: "最快交付", color: "#34D399" },
  { value: 24, suffix: "h", label: "技术响应", color: "#60A5FA" },
] as const;

const SERVICES = [
  { icon: IconGlobe, title: "AI 企业官网", desc: "为企业搭建品牌官网、营销官网与产品展示系统，提升品牌可信度与获客效率。", accent: "#38BDF8" },
  { icon: IconBot, title: "AI 智能体", desc: "构建企业专属 Agent，连接知识库、业务流程与客户服务场景。", accent: "#818CF8" },
  { icon: IconUsers, title: "AI 数字员工", desc: "面向客服、销售、运营、内容等岗位，打造可协作的数字员工系统。", accent: "#F472B6" },
  { icon: IconWorkflow, title: "AI 自动化系统", desc: "打通表单、消息、数据、审批与任务流程，降低重复性人力成本。", accent: "#34D399" },
  { icon: IconContent, title: "AI 内容生产", desc: "支持图文、短视频、脚本、数字人内容生产，提升企业内容效率。", accent: "#A78BFA" },
  { icon: IconCode, title: "定制开发", desc: "提供网站、小程序、后台系统、AI 工具与企业数字化产品定制开发。", accent: "#6366F1" },
] as const;

const CASES = [
  { icon: IconGlobe, title: "企业官网", desc: "帮助企业完成品牌展示、服务介绍与咨询转化的一体化官网建设。" },
  { icon: IconUsers, title: "数字员工", desc: "部署客服与运营数字员工，接入企业微信与内部协作流程。" },
  { icon: IconBot, title: "企业知识库", desc: "基于企业资料构建 AI 问答系统，提升内部检索与客户响应效率。" },
  { icon: IconWorkflow, title: "自动化系统", desc: "打通 CRM、审批与通知链路，缩短跨部门业务协作周期。" },
] as const;

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

function StatCard({
  value,
  suffix,
  label,
  color,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const spring = useSpring(0, { stiffness: 55, damping: 16 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return (
    <Reveal delay={index * 0.05}>
      <div ref={ref} className="stat-card-dark flex items-center gap-4 p-5 md:p-6">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `${color}18`, border: `1px solid ${color}33` }}
        >
          <div className="h-4 w-4 rounded-md" style={{ background: color, opacity: 0.85 }} />
        </div>
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
            {reduce ? (
              <>
                {value}
                <span className="text-white/60">{suffix}</span>
              </>
            ) : (
              <>
                <motion.span>{display}</motion.span>
                <span className="text-white/60">{suffix}</span>
              </>
            )}
          </p>
          <p className="mt-0.5 text-sm text-white/45">{label}</p>
        </div>
      </div>
    </Reveal>
  );
}

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-3 text-left">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-black text-[#020817]">
        XQ
      </span>
      <span className="hidden sm:block">
        <span className="block text-sm font-bold leading-tight text-white">新千西科技</span>
        <span className="block text-[10px] font-medium tracking-[0.12em] text-white/40">AI SOLUTIONS</span>
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

  function nav(id: string, label?: string) {
    setMenuOpen(false);
    if (label === "解决方案" || label === "服务") setActiveNav("services");
    else setActiveNav(id);
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
                key={`${item.id}-${item.label}`}
                type="button"
                onClick={() => nav(item.id, item.label)}
                className={`relative text-[13px] transition-colors ${
                  (item.label === "首页" && activeNav === "home") ||
                  (item.label !== "首页" && item.id === activeNav && item.label !== "解决方案")
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {item.label}
                {item.label === "首页" && activeNav === "home" && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-cyan-400" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex justify-end">
            <button type="button" onClick={() => nav("contact")} className="btn-glow hidden !py-2.5 !text-[13px] lg:inline-flex">
              免费咨询
              <ArrowIcon />
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
                key={`m-${item.id}-${item.label}`}
                type="button"
                onClick={() => nav(item.id, item.label)}
                className="block w-full py-3 text-left text-sm text-white/60 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button type="button" onClick={() => nav("contact")} className="btn-glow mt-2 w-full">
              免费咨询
            </button>
          </nav>
        )}
      </header>

      {/* Hero — 100vh centered */}
      <section id="home" className="scroll-mt-20 min-h-screen pt-20">
        <div className="site-container flex min-h-[calc(100vh-80px)] items-center py-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <p className="mb-6 text-[13px] font-medium tracking-[0.14em] text-white/65">
                Enterprise AI · Intelligent Systems · Automation
              </p>
              <h1 className="font-display text-[clamp(2.25rem,5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
                <span className="block text-white">企业级 AI 应用开发</span>
                <span className="title-gradient mt-1 block">与智能化系统建设</span>
              </h1>
              <p className="mt-6 max-w-[620px] text-[15px] leading-[1.85] text-white/[0.72]">
                为企业构建 AI 官网、智能体、数字员工与自动化系统，
                让人工智能真正进入业务流程，而不是停留在概念展示。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button type="button" onClick={() => nav("contact")} className="btn-glow">
                  免费咨询
                  <ArrowIcon />
                </button>
                <button type="button" onClick={() => nav("services")} className="btn-outline">
                  查看服务
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

      {/* Stats */}
      <section className="pb-16 md:pb-20">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((item, i) => (
              <StatCard key={item.label} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.16em] text-cyan-400/80">核心服务</p>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-white">
              我们帮助企业完成 AI 化升级
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/50">
              从官网、小程序、智能体到自动化流程，
              <br className="hidden sm:block" />
              为企业提供可落地、可交付、可迭代的 AI 能力。
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="service-card-dark group h-full p-7">
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
                      style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}
                    >
                      <span style={{ color: item.accent }}>
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-white/45">{item.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="scroll-mt-20 border-t border-white/6 py-20 md:py-28">
        <div className="site-container">
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.125rem)] font-bold tracking-[-0.02em] text-white">
              AI 应用案例
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {CASES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="service-card-dark flex h-full flex-col p-7 md:p-8">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-[1.8] text-white/45">{item.desc}</p>
                    <button type="button" onClick={() => nav("contact")} className="mt-6 text-sm font-medium text-cyan-400/80 transition-colors hover:text-cyan-300">
                      查看案例 →
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.125rem)] font-bold tracking-[-0.02em] text-white">
              关于新千西科技
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-white/50 md:text-base">
              {COMPANY}，专注 AI 应用开发、企业数字化系统建设与智能体解决方案。我们希望帮助更多企业以更低成本、更快速度接入人工智能能力，让 AI 真正进入业务流程，而不是停留在概念展示。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 pb-20 md:pb-28">
        <div className="site-container">
          <Reveal>
            <div className="console-panel mx-auto max-w-3xl rounded-[28px] px-8 py-12 text-center md:px-14 md:py-16">
              <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-white md:text-[1.75rem]">
                让我们一起开始 AI 化升级
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50">
                如果你正在考虑企业官网、智能体、数字员工、AI 内容生产或自动化系统建设，可以与我们联系。
              </p>
              <a href={`mailto:${EMAIL}`} className="btn-glow mt-8 inline-flex">
                立即咨询
                <ArrowIcon />
              </a>
              <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
                {[
                  { icon: IconWechat, label: "微信", value: WECHAT },
                  { icon: IconMail, label: "邮箱", value: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: IconPhone, label: "电话", value: PHONE },
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
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/6 py-10">
        <div className="site-container flex flex-col items-center justify-between gap-4 text-xs text-white/35 md:flex-row">
          <p>{COMPANY}</p>
          <nav className="flex gap-6" aria-label="页脚导航">
            <Link href="/privacy" className="transition-colors hover:text-white/60">
              隐私政策
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/60">
              服务条款
            </Link>
          </nav>
        </div>
        <p className="site-container mt-4 text-center text-[11px] text-white/25">Copyright © 2026 {COMPANY}</p>
      </footer>
    </div>
  );
}
