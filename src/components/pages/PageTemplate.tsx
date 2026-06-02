"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StackScroll from "@/components/scroll/StackScroll";
import ScrollHorizontal from "@/components/scroll/ScrollHorizontal";
import RevealScroll from "@/components/scroll/RevealScroll";
import GridSections from "@/components/scroll/GridSections";
import PageSparkleBg from "@/components/decor/PageSparkleBg";
import type { PageContent } from "@/content/pages";
import { CONTACT_HREF } from "@/lib/navigation";
import { sectionSurface, SCREEN_SECTION } from "@/lib/section-theme";

function SectionContent({ content }: { content: PageContent }) {
  switch (content.scrollMode) {
    case "stack":
      return <StackScroll sections={content.sections} />;
    case "scroll-horizontal":
      return <ScrollHorizontal sections={content.sections} />;
    case "reveal":
      return <RevealScroll sections={content.sections} />;
    case "grid":
    default:
      return <GridSections sections={content.sections} />;
  }
}

export default function PageTemplate({ content }: { content: PageContent }) {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden">
      <section className={`relative ${SCREEN_SECTION} ${sectionSurface("aqua")}`}>
        <PageSparkleBg />
        <div className="absolute inset-0 z-[1]">
          <Image
            src={content.heroImage}
            alt=""
            fill
            priority
            className="object-cover opacity-25 grayscale dark:opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f9f9f9] via-[#f9f9f9]/92 to-[#f9f9f9]/45 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/94 dark:to-[#0a0a0a]/55" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-brand-aqua uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff4cb4]" />
              {content.heroTag}
            </span>
            <h1 className="mt-3 max-w-4xl font-display text-3xl font-black tracking-tighter text-[#085a2e] uppercase sm:text-5xl lg:text-6xl dark:text-[#00ff88]">
              {content.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl font-sans text-sm font-semibold text-brand-gray/85 sm:text-base dark:text-emerald-100/90">
              {content.heroSubtitle}
            </p>
            <Link
              href={CONTACT_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-aqua px-5 py-3 font-display text-xs font-black tracking-wider text-black uppercase transition-colors hover:bg-brand-lime sm:px-6"
            >
              Get free audit <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <SectionContent content={content} />
    </div>
  );
}
