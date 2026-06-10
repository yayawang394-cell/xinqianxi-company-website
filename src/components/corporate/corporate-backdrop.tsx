"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Star = { x: number; y: number; r: number; a: number; ph: number; vx: number; vy: number };
type Particle = { x: number; y: number; r: number; a: number; ph: number };

function buildStars(count: number, w: number, h: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.1 + 0.12,
    a: Math.random() * 0.45 + 0.06,
    ph: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.06,
  }));
}

function buildParticles(count: number, w: number, h: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.8 + 0.4,
    a: Math.random() * 0.12 + 0.04,
    ph: Math.random() * Math.PI * 2,
  }));
}

export function CorporateBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: Star[] = [];
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let t = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = buildStars(Math.floor((w * h) / 5500), w, h);
      particles = buildParticles(Math.floor((w * h) / 28000), w, h);
    }

    function draw() {
      t += 0.01;
      ctx!.clearRect(0, 0, w, h);

      for (const p of particles) {
        const pulse = p.a * (0.5 + 0.5 * Math.sin(t * 0.6 + p.ph));
        const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        grd.addColorStop(0, `rgba(96, 165, 250, ${pulse})`);
        grd.addColorStop(1, "rgba(96, 165, 250, 0)");
        ctx!.fillStyle = grd;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        const flicker = s.a * (0.55 + 0.45 * Math.sin(t * 0.9 + s.ph));
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(186, 210, 255, ${flicker})`;
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  return (
    <div className="corporate-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#050a12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-8%,rgba(37,99,235,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_20%,rgba(59,130,246,0.1),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_55%,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_25%_at_70%_90%,rgba(14,165,233,0.06),transparent_45%)]" />

      {!reduceMotion && <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 75%)",
        }}
      />

      <div className="absolute left-1/2 top-[22%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/[0.06] blur-[120px]" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-indigo-500/[0.05] blur-[100px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(5,10,18,0.75)_100%)]" />
    </div>
  );
}
