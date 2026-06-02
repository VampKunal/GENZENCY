"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
import { useHeroParallax } from "@/hooks/useHeroParallax";
import { CONTACT_HREF } from "@/lib/navigation";

interface HeroProps {
  scrollToSection?: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const blossomRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const leftStickerRef = useRef<HTMLDivElement>(null);
  const rightStickerRef = useRef<HTMLDivElement>(null);

  useHeroParallax({
    container: containerRef,
    stage: stageRef,
    blossom: blossomRef,
    titleTop: title1Ref,
    titleBottom: title2Ref,
    stickerLeft: leftStickerRef,
    stickerRight: rightStickerRef,
  });

  const goTo = (id: string) => {
    if (scrollToSection) scrollToSection(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="hero"
      ref={containerRef}
      className="hero-perspective relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#f9f9f9] px-[clamp(0.75rem,3vw,1.5rem)] pt-[clamp(6.5rem,16vw,8rem)] pb-[clamp(2.5rem,6vw,4rem)] dark:bg-[#0a0a0a]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-12 opacity-[0.03] dark:opacity-[0.05]">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]" />
        ))}
      </div>

      <div
        ref={stageRef}
        className="hero-stage relative z-10 my-auto flex w-full max-w-[min(72rem,96vw)] flex-col items-center justify-center select-none"
      >
        <h1
          className="group/hero relative flex w-full flex-col items-center text-center font-display font-black uppercase leading-[0.82] tracking-tighter text-[#085a2e] dark:text-[#00ff88]"
          style={{ fontSize: "clamp(2.25rem, 9.5vw, 6.75rem)" }}
        >
          <div
            ref={blossomRef}
            className="pointer-events-none absolute top-1/2 left-1/2 z-[5] aspect-square w-[clamp(11rem,58vw,28rem)] origin-center"
            style={{ transform: "translate3d(-50%, -50%, -3rem) rotate(-3deg)" }}
            aria-hidden
          >
            <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover/hero:scale-[1.05]">
              <Image
                src="/cherry-blossom.png"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 55vw, 28rem"
                className="object-contain select-none"
              />
            </div>
          </div>

          <span ref={title1Ref} className="hero-title-front relative z-20 block whitespace-nowrap will-change-transform">
            SCALE YOUR
          </span>

          <div className="h-[clamp(0.35rem,1.8vw,1.1rem)]" aria-hidden />

          <span
            ref={title2Ref}
            className="hero-title-front relative z-20 block whitespace-nowrap text-brand-gray will-change-transform dark:text-white"
          >
            WEBSITE REVENUE

            <div
              ref={leftStickerRef}
              className="hero-sticker-pop pointer-events-auto absolute bottom-0 -left-[clamp(1.25rem,6vw,4rem)] z-30 aspect-square w-[clamp(2.25rem,11vw,6rem)] origin-center rotate-[-8deg] cursor-pointer transition-transform duration-200 will-change-transform hover:scale-110 active:scale-95"
              title="Growth strategy"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                <path d="M10,45 L15,35 L25,30 L35,15 L50,10 L65,15 L75,30 L85,35 L90,45 L90,65 L80,80 L65,90 L35,90 L20,80 L10,65 Z" fill="#ffffff" stroke="#000000" strokeWidth="6" />
                <path d="M14,43 L19,33 L29,28 L39,13 L50,8 L61,13 L71,28 L81,33 L86,43 L86,63 L76,78 L61,88 L39,88 L24,78 L14,63 Z" fill="#ff4cb4" />
                <rect x="45" y="25" width="10" height="30" fill="#ffffff" />
                <rect x="35" y="35" width="30" height="10" fill="#ffffff" />
                <rect x="40" y="30" width="20" height="20" fill="#ffffff" />
                <rect x="42" y="60" width="16" height="6" fill="#000000" />
                <rect x="45" y="68" width="10" height="6" fill="#000000" />
                <path d="M47,32 C47,32 53,34 53,37 C53,40 47,40 47,43 C47,46 53,46 53,49" stroke="#ff4cb4" strokeWidth="3" fill="none" strokeLinecap="round" />
                <line x1="50" y1="29" x2="50" y2="52" stroke="#ff4cb4" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <div
              ref={rightStickerRef}
              className="hero-sticker-pop pointer-events-auto absolute -top-[clamp(0.75rem,4vw,3rem)] -right-[clamp(1.25rem,6vw,4rem)] z-30 aspect-square w-[clamp(2.25rem,11vw,6rem)] origin-center rotate-[12deg] cursor-pointer transition-transform duration-200 will-change-transform hover:scale-110 active:scale-95"
              title="Revenue focus"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#000000" strokeWidth="6" />
                <circle cx="50" cy="50" r="37" fill="#ff4cb4" />
                <path d="M30,55 Q50,75 70,55" fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
                <text x="27" y="47" fontFamily="Anybody, sans-serif" fontSize="24" fontWeight="900" fill="#000000">
                  $
                </text>
                <text x="53" y="47" fontFamily="Anybody, sans-serif" fontSize="24" fontWeight="900" fill="#000000">
                  $
                </text>
              </svg>
            </div>
          </span>
        </h1>

        <div className="relative z-30 mt-[clamp(2rem,5vw,4rem)] flex w-full max-w-[min(36rem,92vw)] flex-col items-center gap-[clamp(1rem,3vw,2rem)] px-[clamp(0.5rem,2vw,1rem)] text-center">
          <p
            className="max-w-lg font-sans font-semibold leading-relaxed text-brand-gray/80 dark:text-emerald-100/90"
            style={{ fontSize: "clamp(0.8125rem, 2.8vw, 1.125rem)" }}
          >
            Organic search, technical SEO, and paid media—engineered to grow qualified traffic and revenue.
          </p>

          <div className="flex flex-col items-center gap-[clamp(0.75rem,2vw,1rem)] sm:flex-row">
            <div className="flex items-stretch overflow-hidden rounded-full border-2 border-brand-gray bg-white shadow-lg dark:border-white dark:bg-white/10">
              <Link
                href={CONTACT_HREF}
                className="flex items-center gap-2 bg-brand-gray px-[clamp(1rem,4vw,2rem)] py-[clamp(0.65rem,2vw,0.85rem)] font-display font-black uppercase tracking-wider text-white transition-colors hover:bg-brand-lime hover:text-black dark:bg-white dark:text-[#052e16] dark:hover:bg-[#00ff88]"
                style={{ fontSize: "clamp(0.625rem, 2.2vw, 0.875rem)" }}
              >
                GET FREE AUDIT
              </Link>
              <Link
                href={CONTACT_HREF}
                className="flex w-[clamp(2.75rem,10vw,3.5rem)] items-center justify-center border-l-2 border-dashed border-white/30 bg-brand-gray/90 text-white dark:border-[#052e16]/30 dark:bg-white/25"
                aria-label="Get free audit"
              >
                <Sparkles size={16} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => goTo("results")}
              className="group flex cursor-pointer items-center gap-2 rounded-full border border-brand-gray/20 bg-white/40 px-[clamp(1rem,3vw,1.25rem)] py-[clamp(0.65rem,2vw,0.85rem)] font-mono font-bold uppercase tracking-widest text-brand-gray/60 dark:border-emerald-500/30 dark:bg-white/5 dark:text-emerald-300"
              style={{ fontSize: "clamp(0.5625rem, 2vw, 0.75rem)" }}
            >
              View results
              <span className="inline-block transition-transform group-hover:translate-y-1">
                <ArrowDown size={12} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
