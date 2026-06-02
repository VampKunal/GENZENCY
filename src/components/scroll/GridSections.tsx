"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { StackSection } from "@/content/pages";
import PageSparkleBg from "@/components/decor/PageSparkleBg";
import { sectionSurface } from "@/lib/section-theme";

export default function GridSections({ sections }: { sections: StackSection[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = root.querySelectorAll<HTMLElement>("[data-reveal-card]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative w-full max-w-[100vw] overflow-x-hidden border-t border-brand-gray/10 py-16 dark:border-white/10 ${sectionSurface("aqua")}`}>
      <PageSparkleBg variant="subtle" />
      <div ref={rootRef} className="relative z-10 mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-3">
        {sections.map((section, i) => (
          <article
            key={section.title}
            data-reveal-card
            className="reveal-section flex flex-col overflow-hidden rounded-2xl border-2 border-brand-gray/10 bg-white/90 dark:border-white/10 dark:bg-[#0c0c0c]/90"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            {section.image && (
              <div className="relative aspect-[16/10] w-full">
                <Image src={section.image} alt="" fill className="object-cover" sizes="400px" />
              </div>
            )}
            <div className="flex flex-1 flex-col gap-2 p-4 sm:p-6">
              <span className="font-mono text-[10px] font-bold text-[#ff4cb4] uppercase">{section.eyebrow}</span>
              <h2 className="font-display text-base font-black text-brand-gray uppercase sm:text-lg dark:text-white">
                {section.title}
              </h2>
              <p className="font-sans text-xs leading-relaxed text-brand-gray/75 sm:text-sm dark:text-white/65">
                {section.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
