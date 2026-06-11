export function CorporateBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0,255,220,0.12), transparent 35%),
            radial-gradient(circle at 80% 20%, rgba(0,120,255,0.15), transparent 40%),
            linear-gradient(180deg, #020817 0%, #071124 40%, #0B1220 100%)
          `,
        }}
      />

      <div
        className="aurora-layer absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 15% 30%, rgba(59,232,212,0.14), transparent 38%),
            radial-gradient(circle at 85% 15%, rgba(0,184,255,0.12), transparent 35%),
            radial-gradient(circle at 70% 75%, rgba(88,28,135,0.08), transparent 40%)
          `,
          filter: "blur(140px)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
