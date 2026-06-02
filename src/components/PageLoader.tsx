"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0a]">
      <div className="flex items-center gap-2 font-display text-3xl font-black tracking-tighter text-white uppercase">
        GENZENCY
        <span className="inline-block h-3 w-3 animate-pulse bg-brand-aqua" />
      </div>
      <div className="mt-6 h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
        <div className="loader-bar h-full w-1/3 rounded-full bg-brand-aqua" />
      </div>
      <p className="mt-4 font-mono text-[10px] tracking-widest text-white/40 uppercase">Loading experience</p>
    </div>
  );
}
