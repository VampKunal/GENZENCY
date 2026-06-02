"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { StackSection } from "@/content/pages";
import PageSparkleBg from "@/components/decor/PageSparkleBg";
import SectionPanel from "@/components/scroll/SectionPanel";
import { CONTACT_HREF } from "@/lib/navigation";

type Direction = "vertical" | "horizontal";

/**
 * Pinned presentation: scroll is consumed inside this block.
 * Vertical = PPT slides from the right; horizontal = track moves left on scroll ↓.
 */
export default function ScrollPresentation({
  sections,
  direction,
}: {
  sections: StackSection[];
  direction: Direction;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const count = sections.length;
  const scrollHeightVh = Math.max(count, 1) * 100;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || count === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const scrollable = wrap.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const pos = progress * count;
      const idx = Math.min(count - 1, Math.floor(pos));
      setActiveIndex(idx);

      if (direction === "horizontal" && trackRef.current) {
        const offsetVw = progress * (count - 1) * 100;
        trackRef.current.style.transform = `translate3d(-${offsetVw}vw, 0, 0)`;
        return;
      }

      if (reduced) return;

      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        const slidePos = pos - i;

        if (slidePos >= 1) {
          el.style.transform = "translate3d(-5%, 0, 0) scale(0.95)";
          el.style.opacity = "0";
          el.style.visibility = "hidden";
        } else if (slidePos >= 0) {
          el.style.visibility = "visible";
          const enter = Math.min(1, slidePos / 0.35); // longer window for smooth transitions
          if (enter < 1) {
            // cubic ease-out calculation for translation
            const eased = 1 - Math.pow(1 - enter, 3);
            el.style.transform = `translate3d(${(1 - eased) * 100}%, 0, 0) scale(${0.96 + eased * 0.04})`;
            el.style.opacity = `${enter}`;
          } else {
            el.style.transform = "translate3d(0, 0, 0) scale(1)";
            el.style.opacity = "1";
          }
        } else {
          el.style.transform = "translate3d(100%, 0, 0) scale(0.96)";
          el.style.opacity = "0";
          el.style.visibility = "hidden";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count, direction]);

  if (count === 0) return null;

  return (
    <>
      <div
        ref={wrapRef}
        className="relative w-full max-w-[100vw] overflow-x-hidden"
        style={{ height: `${scrollHeightVh}vh` }}
        aria-label="Presentation slides"
      >
        <div className="sticky top-0 z-[1] h-[100dvh] max-h-[100dvh] w-full overflow-hidden">
          <PageSparkleBg />

          {direction === "horizontal" ? (
            <div
              ref={trackRef}
              className="flex h-full transition-transform duration-150 will-change-transform"
              style={{ width: `${count * 100}vw` }}
            >
              {sections.map((section, index) => (
                <div
                  key={`${section.eyebrow}-${index}`}
                  className="h-full w-[100vw] max-w-[100vw] shrink-0 overflow-hidden"
                >
                  <SectionPanel section={section} compact animate />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative h-full w-full">
              {sections.map((section, index) => (
                <div
                  key={`${section.eyebrow}-${index}`}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                  className="absolute inset-0 flex h-full w-full items-stretch overflow-hidden will-change-transform"
                  style={{ zIndex: index + 1 }}
                >
                  <SectionPanel section={section} compact animate />
                </div>
              ))}
            </div>
          )}

          <div className="pointer-events-none absolute bottom-5 left-0 right-0 z-30 flex flex-col items-center gap-2 px-4">
            <div className="flex w-full max-w-xs gap-1.5">
              {sections.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    i <= activeIndex ? "bg-brand-aqua" : "bg-brand-gray/20 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <p className="font-mono text-[9px] font-bold tracking-widest text-brand-gray/50 uppercase dark:text-white/40">
              {direction === "horizontal" ? "Scroll ↓ · slides move →" : "Scroll ↓ · next slide →"}
            </p>
          </div>
        </div>
      </div>

      <section className="relative border-t border-brand-gray/10 bg-[#f3f3f4] px-4 py-14 dark:border-white/10 dark:bg-[#060606] sm:px-6">
        <PageSparkleBg variant="subtle" />
        <div className="page-enter-stagger relative z-10 mx-auto max-w-7xl text-center">
          <span className="font-mono text-[10px] font-bold tracking-widest text-brand-aqua uppercase">
            // Next step
          </span>
          <h2 className="mt-2 font-display text-2xl font-black tracking-tighter text-brand-gray uppercase sm:text-4xl dark:text-white">
            Ready for measurable SEO growth?
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-sans text-sm text-brand-gray/75 dark:text-white/70">
            Book a free audit and we&apos;ll map rankings, technical fixes, and revenue opportunities for your site.
          </p>
          <Link
            href={CONTACT_HREF}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-aqua px-6 py-3 font-display text-xs font-black text-black uppercase hover:bg-brand-lime"
          >
            Get free audit <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
