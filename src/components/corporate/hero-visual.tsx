"use client";

import { useReducedMotion } from "framer-motion";

const MODULES = [
  { title: "智能体系统", sub: "AGENT SYSTEM", pos: "left-[6%] top-[14%]", delay: "0s" },
  { title: "数字员工", sub: "DIGITAL EMPLOYEE", pos: "right-[4%] top-[16%]", delay: "0.5s" },
  { title: "知识库管理", sub: "KNOWLEDGE BASE", pos: "left-[5%] bottom-[22%]", delay: "1s" },
  { title: "自动化流程", sub: "AUTOMATION", pos: "right-[5%] bottom-[20%]", delay: "1.5s" },
] as const;

const STATUS = [
  { label: "DATA SYNC", sub: "实时数据同步" },
  { label: "MODEL RUNNING", sub: "模型运行中" },
  { label: "TASK AUTOMATION", sub: "任务自动化中" },
] as const;

function ModuleIcon({ type }: { type: number }) {
  const colors = ["#6366F1", "#38BDF8", "#34D399", "#F472B6"];
  return (
    <div
      className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg"
      style={{ background: `${colors[type]}22`, border: `1px solid ${colors[type]}44` }}
    >
      <div className="h-3 w-3 rounded-sm" style={{ background: colors[type] }} />
    </div>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-[560px]">
      <div className="console-panel overflow-hidden rounded-[24px] p-5 md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-white/50">AI SYSTEM CONSOLE</p>
          <span className="flex items-center gap-2 text-[10px] font-medium text-emerald-400">
            <span className={`h-1.5 w-1.5 rounded-full bg-emerald-400 ${reduce ? "" : "animate-pulse"}`} />
            SYSTEM ONLINE
          </span>
        </div>

        <div className="relative mx-auto aspect-square max-h-[340px] w-full">
          {/* Energy rings */}
          {!reduce && (
            <>
              <div
                className="pointer-events-none absolute left-1/2 top-[46%] h-[220px] w-[220px] rounded-full border border-cyan-400/20"
                style={{ animation: "ring-rotate 20s linear infinite" }}
              />
              <div
                className="pointer-events-none absolute left-1/2 top-[46%] h-[180px] w-[180px] rounded-full border border-blue-400/15"
                style={{ animation: "ring-rotate-reverse 15s linear infinite" }}
              />
              <div
                className="pointer-events-none absolute left-1/2 top-[46%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
                style={{
                  background: "radial-gradient(circle, rgba(38,229,255,0.12) 0%, transparent 70%)",
                  animation: "glow-pulse 4s ease-in-out infinite",
                }}
              />
            </>
          )}

          {/* AI CORE cube */}
          <div
            className={`absolute left-1/2 top-[46%] z-20 ${reduce ? "-translate-x-1/2 -translate-y-1/2" : "core-float"}`}
            style={reduce ? undefined : { animation: "core-float 5s ease-in-out infinite, core-pulse 3s ease-in-out infinite" }}
          >
            <div
              className="relative flex h-[88px] w-[88px] items-center justify-center md:h-[100px] md:w-[100px]"
              style={{ transform: "rotateX(12deg) rotateY(-18deg)", transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(38,229,255,0.35) 0%, rgba(0,184,255,0.15) 50%, rgba(59,232,212,0.25) 100%)",
                  border: "1px solid rgba(38,229,255,0.4)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 40px rgba(38,229,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              />
              <span className="relative text-[11px] font-bold tracking-wider text-white md:text-xs">AI CORE</span>
            </div>
          </div>

          {/* Floating modules — no lines */}
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              className={`absolute z-10 w-[42%] max-w-[160px] ${m.pos} ${reduce ? "" : "card-float-anim"}`}
              style={reduce ? undefined : { animation: `card-float 5s ease-in-out infinite ${m.delay}` }}
            >
              <div className="glass-dark rounded-xl p-3 md:p-3.5">
                <ModuleIcon type={i} />
                <p className="text-[11px] font-semibold leading-tight text-white md:text-xs">{m.title}</p>
                <p className="mt-0.5 text-[9px] tracking-wider text-white/40">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-2 border-t border-white/8 pt-4 sm:grid-cols-3">
          {STATUS.map((s, i) => (
            <div key={s.label} className="rounded-lg bg-white/[0.03] px-3 py-2.5">
              <p className="text-[9px] font-semibold tracking-wider text-cyan-400/80">{s.label}</p>
              <p className="mt-0.5 text-[10px] text-white/45">{s.sub}</p>
              {!reduce && (
                <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400/60 to-blue-400/60"
                    style={{ animation: `status-flow 2.5s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
