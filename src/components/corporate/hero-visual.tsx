"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const ENGINE_MODULES = [
  { id: "story", label: "Story Generation", sub: "叙事生成", value: "847", unit: "/h", color: "#A78BFA" },
  { id: "character", label: "Character Creation", sub: "角色创建", value: "128", unit: "active", color: "#818CF8" },
  { id: "world", label: "World Building", sub: "世界构建", value: "24", unit: "universes", color: "#38BDF8" },
  { id: "knowledge", label: "Knowledge Network", sub: "知识网络", value: "12.8k", unit: "nodes", color: "#34D399" },
  { id: "asset", label: "Asset Registry", sub: "资产注册", value: "4.2k", unit: "records", color: "#F472B6" },
  { id: "video", label: "Video Pipeline", sub: "视频流水线", value: "Live", unit: "rendering", color: "#26E5FF" },
] as const;

const STREAM = [
  { module: "story", msg: "Chapter arc generated · branch-03" },
  { module: "character", msg: "Character profile synthesized · ID-4821" },
  { module: "world", msg: "Universe lore layer expanded" },
  { module: "knowledge", msg: "Context graph updated · +64 nodes" },
  { module: "asset", msg: "IP metadata registered · universe-03" },
  { module: "video", msg: "Comic drama render queued · ep.07" },
  { module: "story", msg: "Multi-line narrative merged" },
  { module: "asset", msg: "Creator rights layer synced" },
] as const;

function PulseDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-1.5 w-1.5 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" style={{ background: color }} />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: color }} />
    </span>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setActive((a) => (a + 1) % ENGINE_MODULES.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduce]);

  const stream = [...STREAM, ...STREAM];
  const current = ENGINE_MODULES[active];

  return (
    <div className="relative w-full max-w-[580px]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[36px] opacity-55"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(167,139,250,0.16), transparent 55%), radial-gradient(ellipse at 70% 60%, rgba(38,229,255,0.1), transparent 50%)",
          filter: "blur(48px)",
          animation: reduce ? undefined : "glow-pulse 6s ease-in-out infinite",
        }}
        aria-hidden
      />

      <div className="os-dashboard data-center-glow relative overflow-hidden rounded-[20px]">
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] px-5 py-4 md:px-6">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] text-white/40">AI CONTENT ENGINE</p>
            <p className="mt-1 text-sm font-semibold text-white">Content Creation Runtime</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-3 py-1.5">
            {!reduce && <PulseDot color="#A78BFA" />}
            <span className="text-[10px] font-medium text-violet-300/90">Running</span>
          </div>
        </div>

        {/* Active module highlight */}
        <div
          className="border-b border-white/[0.06] px-5 py-4 transition-all duration-500 md:px-6"
          style={{ background: `${current.color}08` }}
        >
          <p className="text-[9px] font-medium tracking-wider text-white/35">ACTIVE MODULE</p>
          <p className="mt-1 font-display text-lg font-bold text-white">{current.label}</p>
          <p className="text-[11px] text-white/45">{current.sub}</p>
          {!reduce && (
            <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="engine-flow h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${current.color}44, ${current.color}, ${current.color}44)`,
                  backgroundSize: "200% 100%",
                  animation: "data-shimmer 2s linear infinite",
                }}
              />
            </div>
          )}
        </div>

        {/* 6 engine modules */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.04] sm:grid-cols-3">
          {ENGINE_MODULES.map((mod, i) => (
            <div
              key={mod.id}
              className="bg-[#060d1a]/90 px-3 py-3 transition-all duration-500 md:px-3.5 md:py-3.5"
              style={
                active === i && !reduce
                  ? { background: `${mod.color}06`, boxShadow: `inset 0 0 0 1px ${mod.color}44` }
                  : undefined
              }
            >
              <div className="flex items-center gap-1.5">
                {!reduce && active === i && <PulseDot color={mod.color} />}
                <p className="truncate text-[8px] font-medium tracking-wide text-white/40">{mod.label}</p>
              </div>
              <p className="mt-1 font-display text-sm font-bold tabular-nums text-white">
                {mod.value}
                <span className="ml-0.5 text-[9px] font-normal text-white/30">{mod.unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Live stream */}
        <div className="p-4 md:p-5">
          <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#040a14]/70">
            <div className="border-b border-white/[0.05] px-3.5 py-2">
              <p className="text-[9px] font-semibold tracking-[0.14em] text-white/40">ENGINE OUTPUT</p>
            </div>
            <div className="relative h-[120px] overflow-hidden">
              <div style={reduce ? undefined : { animation: "log-scroll 14s linear infinite" }}>
                {stream.map((row, i) => {
                  const mod = ENGINE_MODULES.find((m) => m.id === row.module);
                  return (
                    <div
                      key={`${row.module}-${i}`}
                      className="flex items-center gap-2 border-b border-white/[0.03] px-3.5 py-2 font-mono text-[10px] last:border-0"
                    >
                      <span
                        className="shrink-0 rounded px-1.5 py-0.5 text-[8px]"
                        style={{
                          color: mod?.color ?? "#fff",
                          background: `${mod?.color ?? "#fff"}15`,
                          border: `1px solid ${mod?.color ?? "#fff"}25`,
                        }}
                      >
                        {row.module}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-white/45">{row.msg}</span>
                    </div>
                  );
                })}
              </div>
              {!reduce && (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-6"
                  style={{ background: "linear-gradient(180deg, #040a14 0%, transparent 100%)" }}
                />
              )}
            </div>
          </div>
          {!reduce && (
            <p className="mt-2.5 text-center text-[9px] tabular-nums text-white/25">
              {(tick % 900) + 1200} content ops/h
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
