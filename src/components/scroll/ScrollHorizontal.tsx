"use client";

import { useEffect, useRef, useState } from "react";
import type { StackSection } from "@/content/pages";
import PageSparkleBg from "@/components/decor/PageSparkleBg";
import SectionPanel from "@/components/scroll/SectionPanel";

/**
 * Vertical scroll drives horizontal movement (pinned viewport).
 * Scroll down → panels move left; after last panel, scroll continues to next page section.
 */
export default function ScrollHorizontal({ sections }: { sections: StackSection[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track || sections.length < 2) return;

    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const scrollable = wrap.offsetHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      const offsetVw = p * (sections.length - 1) * 100;
      track.style.transform = `translate3d(-${offsetVw}vw, 0, 0)`;
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections.length]);

  const scrollHeightVh = Math.max(sections.length, 2) * 100;

  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[100vw] overflow-x-hidden"
      style={{ height: `${scrollHeightVh}vh` }}
    >
      <div className="sticky top-0 z-[1] h-[100dvh] max-h-[100dvh] w-full overflow-hidden">
        <PageSparkleBg />
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${sections.length * 100}vw` }}
        >
          {sections.map((section, index) => (
            <div
              key={`${section.eyebrow}-${index}`}
              className="h-[100dvh] max-h-[100dvh] w-[100vw] max-w-[100vw] shrink-0 overflow-hidden"
            >
              <SectionPanel section={section} compact />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center gap-2 px-4">
          <div className="flex w-full max-w-xs gap-1">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-colors ${
                  progress >= i / (sections.length - 1) - 0.05 ? "bg-brand-aqua" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <p className="font-mono text-[9px] font-bold tracking-widest text-brand-gray/50 uppercase dark:text-white/45">
            Scroll ↓ to slide →
          </p>
        </div>
      </div>
    </div>
  );
}
