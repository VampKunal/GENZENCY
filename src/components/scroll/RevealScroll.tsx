"use client";

import { useEffect, useRef } from "react";
import type { StackSection } from "@/content/pages";
import PageSparkleBg from "@/components/decor/PageSparkleBg";
import SectionPanel from "@/components/scroll/SectionPanel";
import { SCREEN_SECTION } from "@/lib/section-theme";

export default function RevealScroll({ sections }: { sections: StackSection[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative w-full max-w-[100vw] overflow-x-hidden">
      {sections.map((section, index) => (
        <section
          key={`${section.eyebrow}-${index}`}
          data-reveal
          className={`reveal-section relative border-t border-brand-gray/10 ${SCREEN_SECTION} dark:border-white/10`}
        >
          <PageSparkleBg variant="subtle" />
          <SectionPanel section={section} />
        </section>
      ))}
    </div>
  );
}
