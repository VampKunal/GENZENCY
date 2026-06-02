"use client";

/** Minimal neon-pink sparkles + soft glow — sits behind page content */
export default function PageSparkleBg({ variant = "default" }: { variant?: "default" | "subtle" }) {
  const count = variant === "subtle" ? 12 : 20;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="sparkle-orb sparkle-orb-a" />
      <div className="sparkle-orb sparkle-orb-b" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]">
        <div className="grid h-full w-full grid-cols-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border-r border-[#ff4cb4]/30 dark:border-[#ff4cb4]/40" />
          ))}
        </div>
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="sparkle-dot"
          style={{
            left: `${(i * 17 + 7) % 94}%`,
            top: `${(i * 23 + 11) % 88}%`,
            animationDelay: `${(i % 5) * 0.45}s`,
            animationDuration: `${2.2 + (i % 4) * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
