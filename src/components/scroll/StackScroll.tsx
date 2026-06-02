"use client";

import type { StackSection } from "@/content/pages";
import PageSparkleBg from "@/components/decor/PageSparkleBg";
import SectionPanel from "@/components/scroll/SectionPanel";
import { SCREEN_SECTION } from "@/lib/section-theme";

/** Sticky stack presentation — 2 pages use this mode */
export default function StackScroll({ sections }: { sections: StackSection[] }) {
  return (
    <div className="stack-scroll-root relative w-full max-w-[100vw] overflow-x-hidden">
      {sections.map((section, index) => (
        <section
          key={`${section.eyebrow}-${index}`}
          className={`stack-panel relative ${SCREEN_SECTION}`}
          style={{ zIndex: index + 2 }}
        >
          <PageSparkleBg variant={index % 2 === 0 ? "default" : "subtle"} />
          <SectionPanel section={section} />
        </section>
      ))}
    </div>
  );
}
