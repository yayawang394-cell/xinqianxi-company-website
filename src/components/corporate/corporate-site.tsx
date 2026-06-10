"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CorporateBackdrop } from "@/components/corporate/corporate-backdrop";
import {
  IconAiApp,
  IconBuilding,
  IconCustom,
  IconDigital,
  IconFast,
  IconGlobe,
  IconLongTerm,
  IconMail,
  IconMapPin,
  IconResearch,
  IconSoftware,
  IconTeam,
} from "@/components/corporate/corporate-icons";

const COMPANY = "杭州萧山新千西人工智能应用软件有限公司";
const EMAIL = "admin@xinqianxi.world";
const WEBSITE = "www.xinqianxi.world";
const ADDRESS = "杭州市萧山区";

const NAV = [
  { id: "home", label: "首页" },
  { id: "about", label: "关于我们" },
  { id: "services", label: "核心业务" },
  { id: "advantages", label: "企业优势" },
  { id: "contact", label: "联系我们" },
] as const;

const HERO_STATS = [
  { label: "成立时间", value: "2026", unit: "", desc: "专注 AI 应用研发" },
  { label: "企业服务", value: "10", unit: "+", desc: "行业解决方案" },
  { label: "技术创新", value: "50", unit: "+", desc: "服务场景覆盖" },
] as const;

const HERO_METRICS = [
  { value: "10+", desc: "行业解决方案" },
  { value: "50+", desc: "服务场景" },
  { value: "100%", desc: "持续技术支持" },
] as const;

const ABOUT_CARDS = [
  {
    title: "企业定位",
    desc: "以人工智能应用开发为核心，面向企业与个人用户提供软件技术服务与数字化解决方案。",
  },
  {
    title: "企业愿景",
    desc: "成为值得信赖的 AI 技术服务伙伴，推动人工智能在实际业务场景中的可持续落地。",
  },
  {
    title: "企业价值观",
    desc: "专业、可靠、创新、共赢——以技术为本，以客户需求为导向，持续创造长期价值。",
  },
] as const;

const SERVICES = [
  {
    icon: IconAiApp,
    title: "AI 应用开发",
    desc: "提供人工智能应用设计、开发与部署服务，覆盖模型集成、业务逻辑与系统落地。",
  },
  {
    icon: IconSoftware,
    title: "软件系统开发",
    desc: "提供 Web 系统、企业管理系统及定制化软件开发服务，满足多样化业务需求。",
  },
  {
    icon: IconDigital,
    title: "数字化解决方案",
    desc: "为企业提供数字化转型咨询与技术支持，助力业务流程优化与效率提升。",
  },
  {
    icon: IconResearch,
    title: "技术研究与创新",
    desc: "持续关注人工智能与前沿技术发展趋势，探索创新应用场景与工程实践。",
  },
] as const;

const ADVANTAGES = [
  {
    icon: IconTeam,
    step: "01",
    title: "专业团队",
    desc: "具备人工智能与软件工程复合背景的技术团队，保障方案设计与交付质量。",
  },
  {
    icon: IconCustom,
    step: "02",
    title: "定制开发",
    desc: "深入理解客户业务场景，提供量身定制的技术架构与实施路径。",
  },
  {
    icon: IconFast,
    step: "03",
    title: "快速交付",
    desc: "规范化的项目管理与敏捷开发流程，确保高效响应与稳定上线。",
  },
  {
    icon: IconLongTerm,
    step: "04",
    title: "长期服务",
    desc: "提供部署后的运维支持与技术迭代，建立可持续的合作关系。",
  },
] as const;

function scrollTo(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-blue-300/50">
      {children}
    </p>
  );
}

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.09] bg-white/[0.035] shadow-[0_12px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof IconAiApp;
  title: string;
  desc: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const Wrapper = reduceMotion ? "div" : motion.div;
  const motionProps = reduceMotion
    ? {}
    : {
        whileHover: { y: -6, transition: { duration: 0.25 } },
      };

  return (
    <FadeIn delay={index * 0.07}>
      <Wrapper {...motionProps}>
        <GlassCard className="group relative h-full overflow-hidden p-7 transition-[border-color,box-shadow] duration-300 hover:border-blue-400/25 hover:shadow-[0_16px_48px_rgba(37,99,235,0.12)] md:p-8">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/12 to-indigo-500/8 text-blue-300/85 transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-white/92">{title}</h3>
            <p className="mt-3 text-sm leading-[1.75] text-white/44">{desc}</p>
          </div>
        </GlassCard>
      </Wrapper>
    </FadeIn>
  );
}

export function CorporateSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = ["contact", "advantages", "services", "about", "home"] as const;
      for (const id of sections) {
        const el = id === "home" ? null : document.getElementById(id);
        if (id === "home" && window.scrollY < 200) {
          setActiveSection("home");
          break;
        }
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(id: string) {
    setMenuOpen(false);
    scrollTo(id);
  }

  return (
    <div className="corporate-site relative min-h-dvh text-white">
      <CorporateBackdrop />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.07] bg-[rgba(5,10,18,0.88)] shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
            : "border-b border-transparent bg-[rgba(5,10,18,0.35)] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8 md:py-4">
          <button
            type="button"
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 text-left"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
              <span className="font-display text-xs font-bold text-blue-200/90">XQ</span>
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-white/88 sm:block">新千西科技</span>
          </button>

          <nav className="hidden items-center gap-0.5 md:flex" aria-label="主导航">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`rounded-lg px-3.5 py-2 text-[13px] transition-colors lg:px-4 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 md:hidden"
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

        {menuOpen && (
          <nav className="border-t border-white/[0.06] bg-[rgba(5,10,18,0.97)] px-5 py-3 backdrop-blur-2xl md:hidden" aria-label="移动端导航">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`block w-full rounded-lg px-3 py-3 text-left text-sm ${
                  activeSection === item.id ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-[100dvh] items-center pt-28 pb-24 md:min-h-[105dvh] md:pt-32 md:pb-32">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <FadeIn className="max-w-3xl">
            <SectionEyebrow>Enterprise Technology</SectionEyebrow>
            <h1 className="font-display text-[clamp(2rem,5.2vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              人工智能应用开发与
              <br className="hidden sm:block" />
              数字化解决方案
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.8] text-white/48 md:text-[17px] md:leading-[1.85]">
              专注于人工智能应用开发、软件技术服务与数字化解决方案，为企业与个人用户提供创新技术支持。
            </p>
            <div className="mt-11 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="rounded-xl bg-white px-7 py-3.5 text-[14px] font-medium text-[#050a12] transition-opacity hover:opacity-90"
              >
                了解我们
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="rounded-xl border border-white/18 bg-white/[0.04] px-7 py-3.5 text-[14px] font-medium text-white/82 backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/[0.07]"
              >
                联系我们
              </button>
            </div>
          </FadeIn>

          {/* Hero pillars */}
          <FadeIn delay={0.1} className="mt-16 md:mt-20">
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((item) => (
                <GlassCard key={item.label} className="px-6 py-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">{item.label}</p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-white/92">
                    {item.value}
                    <span className="text-blue-300/80">{item.unit}</span>
                  </p>
                  <p className="mt-1 text-xs text-white/40">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </FadeIn>

          {/* Hero metrics */}
          <FadeIn delay={0.18} className="mt-5">
            <div className="grid divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {HERO_METRICS.map((item) => (
                <div key={item.desc} className="px-6 py-6 text-center sm:py-7">
                  <p className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-white/90">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-sm text-white/42">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <SectionEyebrow>About Us</SectionEyebrow>
            <h2 className="font-display text-[clamp(1.625rem,3vw,2.375rem)] font-semibold tracking-[-0.02em] text-white">
              关于我们
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-[1.9] text-white/52 md:text-base">
              <p>{COMPANY}是一家专注于人工智能应用开发、软件技术服务及数字化解决方案的科技企业。</p>
              <p>
                公司致力于探索人工智能技术在企业服务、内容生产、数据应用及数字化管理等领域的创新应用，为客户提供高效、可靠、可持续发展的技术解决方案。
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {ABOUT_CARDS.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.08}>
                <GlassCard className="h-full p-7 md:p-8">
                  <div className="mb-4 h-px w-10 bg-gradient-to-r from-blue-400/60 to-transparent" />
                  <h3 className="text-base font-semibold text-white/90">{card.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-white/44">{card.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-t border-white/[0.06] py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <SectionEyebrow>Services</SectionEyebrow>
            <h2 className="font-display text-[clamp(1.625rem,3vw,2.375rem)] font-semibold tracking-[-0.02em] text-white">
              核心业务
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/42 md:text-[15px]">
              覆盖 AI 应用、软件系统、数字化咨询与技术研究的全链路服务能力。
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {SERVICES.map((item, i) => (
              <ServiceCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages — timeline */}
      <section id="advantages" className="scroll-mt-24 py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <SectionEyebrow>Advantages</SectionEyebrow>
            <h2 className="font-display text-[clamp(1.625rem,3vw,2.375rem)] font-semibold tracking-[-0.02em] text-white">
              企业优势
            </h2>
          </FadeIn>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-400/40 via-white/10 to-transparent md:left-1/2 md:block md:-translate-x-px" />

            <div className="space-y-8 md:space-y-0">
              {ADVANTAGES.map((item, i) => {
                const Icon = item.icon;
                const isEven = i % 2 === 0;
                return (
                  <FadeIn key={item.title} delay={i * 0.08}>
                    <div
                      className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                        isEven ? "" : "md:[&>div:first-child]:order-2"
                      }`}
                    >
                      <div className={`${isEven ? "md:text-right" : ""} hidden md:block`} aria-hidden />

                      <div className="relative md:col-span-1">
                        <div className="absolute left-4 top-8 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-400/60 bg-[#050a12] md:left-auto md:right-auto md:top-10 md:block md:-translate-x-1/2 md:translate-y-0 md:[left:calc(50%-6px)]" />

                        <GlassCard className={`ml-10 p-6 md:ml-0 md:p-8 ${isEven ? "md:mr-8" : "md:ml-8"}`}>
                          <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-3">
                                <span className="font-display text-xs font-medium text-blue-300/45">{item.step}</span>
                                <h3 className="text-base font-semibold text-white/90">{item.title}</h3>
                              </div>
                              <p className="mt-2 text-sm leading-[1.75] text-white/42">{item.desc}</p>
                            </div>
                          </div>
                        </GlassCard>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-white/[0.06] py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="font-display text-[clamp(1.625rem,3vw,2.375rem)] font-semibold tracking-[-0.02em] text-white">
              联系我们
            </h2>
            <p className="mt-4 text-sm text-white/42">{COMPANY}</p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: IconBuilding, label: "Company", value: COMPANY, href: undefined },
              { icon: IconMapPin, label: "Address", value: ADDRESS, href: undefined },
              { icon: IconMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: IconGlobe, label: "Website", value: WEBSITE, href: `https://${WEBSITE}` },
            ].map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/[0.08] text-blue-300/70">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-white/32">{item.label}</span>
                    <span className="mt-1.5 block text-sm font-medium leading-snug text-white/82">{item.value}</span>
                  </span>
                </>
              );

              return (
                <FadeIn key={item.label} delay={i * 0.06}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex h-full items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-2xl transition-colors hover:border-white/[0.14] hover:bg-white/[0.05]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-2xl">
                      {inner}
                    </div>
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-white/55">{COMPANY}</p>
              <p className="mt-2 text-xs text-white/30">{EMAIL} · {WEBSITE}</p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/40" aria-label="页脚导航">
              <Link href="/privacy" className="transition-colors hover:text-white/70">
                隐私政策
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white/70">
                服务条款
              </Link>
            </nav>
          </div>
          <div className="mt-8 border-t border-white/[0.05] pt-6 text-center">
            <p className="text-[11px] text-white/28">
              Copyright © 2026 {COMPANY}. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
