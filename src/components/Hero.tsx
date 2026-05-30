/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";

export default function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const title3Ref = useRef<HTMLSpanElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Visual backdrop reveal
      tl.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 0.6, duration: 1.8, ease: "power3.out" },
        "0"
      );

      // Cinematic entrance animations on page load
      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=1.2"
      );

      tl.fromTo(
        [title1Ref.current, title2Ref.current, title3Ref.current],
        { opacity: 0, y: 100, rotate: 1 },
        { opacity: 1, y: 0, rotate: 0, duration: 1.3, stagger: 0.12 },
        "-=0.8"
      );

      tl.fromTo(
        missionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.1 },
        "-=0.9"
      );

      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.7"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen bg-[#f9f9f9] dark:bg-[#0a0a0a] flex flex-col justify-center overflow-hidden z-10"
    >
      {/* Cinematic Full-Bleed Background Image */}
      <img
        ref={bgRef}
        src="/hero_bg.png"
        alt="SEO Growth Agency Visual Backdrop"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300 pointer-events-none select-none filter contrast-200 brightness-150"
      />

      {/* High-Contrast Tint Overlays for Perfect Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9f9]/70 via-[#f9f9f9]/85 to-[#f9f9f9] dark:from-[#0a0a0a]/70 dark:via-[#0a0a0a]/85 dark:to-[#0a0a0a] z-0 pointer-events-none transition-colors duration-300"></div>

      {/* Editorial Decorative Grid Guidelines */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-6">

        {/* Left Side: Headline Block */}
        <div className="col-span-12 md:col-span-8 flex flex-col gap-5 sm:gap-6">
          {/* Tag */}
          <div ref={tagRef} className="flex items-center gap-3">
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-brand-lime text-black px-3 py-1 rounded-sm shadow-sm">
              GROWTH AGENCY
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse"></span>
          </div>

          {/* Fluid responsive typography to scale and fit screens perfectly */}
          <h1 className="font-display text-[11vw] md:text-[6.5vw] lg:text-[7vw] xl:text-[7.5vw] font-black uppercase leading-[0.82] tracking-tighter text-[#1a1c1c] dark:text-[#f9f9f9] flex flex-col select-none">
            <span ref={title1Ref} className="block hover:text-brand-aqua transition-colors duration-350 cursor-default">
              SCALE YOUR
            </span>
            <span
              ref={title2Ref}
              className="text-brand-aqua italic font-black select-none hover:text-brand-lime transition-colors duration-350 cursor-default"
            >
              WEBSITE
            </span>
            <span ref={title3Ref} className="block hover:text-brand-aqua transition-colors duration-350 cursor-default">
              REVENUE
            </span>
          </h1>
        </div>

        {/* Right Side: Narrative Context */}
        <div
          ref={missionRef}
          className="col-span-12 md:col-span-4 flex flex-col md:items-end justify-center h-full md:text-right"
        >
          <div className="border-l-4 md:border-l-0 md:border-r-4 border-brand-aqua pl-5 md:pl-0 md:pr-5 py-1.5 max-w-sm">
            <h3 className="font-display font-black text-md sm:text-lg leading-tight uppercase tracking-tight text-[#1a1c1c] dark:text-[#f9f9f9] mb-2 sm:mb-3">
              REAL ORGANIC TRAFFIC GROWTH
            </h3>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#1a1c1c]/80 dark:text-white/80 leading-relaxed font-semibold">
              We design premium, high-converting interfaces and drive results-focused SEO strategy to get your business placed on page 1 of Google.
            </p>
          </div>
          <div ref={buttonRef} className="flex gap-4 md:justify-end mt-6 sm:mt-8">
            <button
              onClick={() => scrollToSection("results")}
              className="group border border-brand-gray/10 dark:border-white/10 hover:border-brand-aqua px-4 py-2 rounded-xl font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#1a1c1c]/60 dark:text-white/60 hover:text-brand-aqua dark:hover:text-brand-aqua uppercase transition-all flex items-center gap-2 cursor-pointer bg-white/50 dark:bg-black/20 shadow-sm"
            >
              Scroll Explorer <span className="inline-block group-hover:translate-y-1 transition-transform animate-bounce"><ArrowDown size={12} /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
