"use client";

import { CheckCircle } from "lucide-react";

export default function ResultsBanner() {
  return (
    <div
      id="results"
      className="relative z-10 flex h-[320px] w-full select-none items-center justify-center overflow-hidden border-y-4 border-[#000000] bg-black sm:h-[450px] md:h-[550px] dark:border-[#f9f9f9]"
    >
      <img
        alt="High-fashion footwear and architecture detail"
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover contrast-125 brightness-[0.4] grayscale select-none"
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1600"
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:px-6 md:flex-row md:items-center">
        <div className="flex flex-col">
          <h2 className="font-display text-4xl leading-none font-black tracking-widest text-white uppercase select-none sm:text-7xl lg:text-8xl xl:text-9xl">
            RESULTS
          </h2>
          <p className="mt-[-4px] ml-2 font-display text-lg leading-none font-black tracking-tighter text-brand-lime uppercase italic sm:mt-[-12px] sm:text-3xl lg:text-4xl xl:text-5xl">
            SEO & SEARCH DOMINANCE
          </p>
        </div>

        <div className="flex items-center gap-1.5 self-start rounded-sm border border-black/20 bg-brand-aqua px-4 py-2.5 font-mono text-[10px] font-bold tracking-wider text-black uppercase shadow-xl sm:text-xs md:self-auto">
          <CheckCircle size={14} className="text-black" /> Page 1 Placement Verified
        </div>
      </div>
    </div>
  );
}
