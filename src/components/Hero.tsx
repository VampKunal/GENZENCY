/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { gsap } from "gsap";

export default function Hero({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const leftStickerRef = useRef<HTMLDivElement>(null);
  const rightStickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.75)" } });

      // Cinematic entrance animations on page load
      tl.fromTo(
        [title1Ref.current, title2Ref.current],
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, stagger: 0.15, ease: "power4.out" },
        "0"
      );

      tl.fromTo(
        centerImageRef.current,
        { scale: 0, rotate: -20, opacity: 0, xPercent: -50, yPercent: -50 },
        { scale: 1, rotate: -3, opacity: 1, duration: 1.6, ease: "elastic.out(1.1, 0.6)" },
        "-=0.9"
      );

      tl.fromTo(
        [leftStickerRef.current, rightStickerRef.current],
        { scale: 0, rotate: -30 },
        { scale: 1, rotate: (i) => (i === 0 ? -8 : 12), duration: 1.5, stagger: 0.1, ease: "elastic.out(1.2, 0.5)" },
        "-=1.1"
      );

      tl.fromTo(
        [missionRef.current, buttonRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.8"
      );

      // Subtle float animation loops when mouse is idle
      gsap.to(centerImageRef.current, {
        xPercent: -50,
        yPercent: -50,
        y: "+=6",
        rotate: "+=0.5",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Float left sticker
      gsap.to(leftStickerRef.current, {
        y: "-=4",
        rotate: "+=1",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });

      // Float right sticker
      gsap.to(rightStickerRef.current, {
        y: "+=4",
        rotate: "-=1",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }, containerRef);

    // Interactive 3D mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const xPercent = (clientX / rect.width - 0.5) * 2; // -1 to 1
      const yPercent = (clientY / rect.height - 0.5) * 2; // -1 to 1

      // Move center cherry blossom (parallax depth layer 2)
      gsap.to(centerImageRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: xPercent * 30,
        y: yPercent * 30,
        rotate: -3 + xPercent * 6,
        duration: 0.8,
        ease: "power2.out",
      });

      // Move left and right stickers slightly faster/differently (parallax layer 3)
      gsap.to(leftStickerRef.current, {
        x: xPercent * -40,
        y: yPercent * -40,
        rotate: -8 + xPercent * -15,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(rightStickerRef.current, {
        x: xPercent * 40,
        y: yPercent * 40,
        rotate: 12 + xPercent * 15,
        duration: 1,
        ease: "power2.out",
      });

      // Subtle opposite tilt for the texts to maximize the 3D parallax depth
      gsap.to(title1Ref.current, {
        x: xPercent * 12,
        y: yPercent * 12,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(title2Ref.current, {
        x: xPercent * -12,
        y: yPercent * -12,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      ctx.revert();
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#f9f9f9] dark:bg-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden z-10 pt-28 pb-16 px-4 transition-colors duration-300"
    >
      {/* Decorative Grid Guidelines with themed opacity */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
        <div className="col-span-1 border-r border-[#1a1c1c] dark:border-[#00ff88]"></div>
      </div>

      {/* Main Text Content Area with Overlapping Image and Stickers */}
      <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center justify-center select-none z-10 my-auto">
        <h1 className="font-display text-[9vw] sm:text-[8vw] lg:text-[7.5vw] font-black uppercase leading-[0.8] tracking-tighter text-[#085a2e] dark:text-[#00ff88] flex flex-col items-center text-center relative w-full select-none">
          {/* Top Line: Layered IN FRONT OF the popping image (z-20) */}
          <span ref={title1Ref} className="block relative z-20 select-none whitespace-nowrap">
            SCALE YOUR
          </span>

          {/* Spacer to bring lines closer together */}
          <div className="h-[2.5vw] sm:h-[1.5vw]"></div>

          {/* Bottom Line: Layered IN FRONT OF the popping image (z-20) */}
          <span ref={title2Ref} className="block relative z-20 select-none text-brand-gray dark:text-white pointer-events-none whitespace-nowrap">
            WEBSITE REVENUE

            {/* Left Pink Sticker Popping Out of Text Corner (z-30 for max pop) */}
            <div
              ref={leftStickerRef}
              className="absolute -left-8 sm:-left-16 bottom-1 sm:bottom-2 w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 rotate-[-8deg] origin-center z-30 cursor-pointer pointer-events-auto transition-transform hover:scale-115 active:scale-95 duration-200"
              title="Quirky Growth Idea!"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                {/* Thick retro sticker outline */}
                <path d="M10,45 L15,35 L25,30 L35,15 L50,10 L65,15 L75,30 L85,35 L90,45 L90,65 L80,80 L65,90 L35,90 L20,80 L10,65 Z" fill="#ffffff" stroke="#000000" strokeWidth="6" />
                <path d="M14,43 L19,33 L29,28 L39,13 L50,8 L61,13 L71,28 L81,33 L86,43 L86,63 L76,78 L61,88 L39,88 L24,78 L14,63 Z" fill="#ff4cb4" />

                {/* Pixel Art / Retro Lightbulb Inner Drawing */}
                <rect x="45" y="25" width="10" height="30" fill="#ffffff" />
                <rect x="35" y="35" width="30" height="10" fill="#ffffff" />
                <rect x="40" y="30" width="20" height="20" fill="#ffffff" />
                <rect x="42" y="60" width="16" height="6" fill="#000000" />
                <rect x="45" y="68" width="10" height="6" fill="#000000" />

                {/* Dollar sign inside lightbulb */}
                <path d="M47,32 C47,32 53,34 53,37 C53,40 47,40 47,43 C47,46 53,46 53,49" stroke="#ff4cb4" strokeWidth="3" fill="none" strokeLinecap="round" />
                <line x1="50" y1="29" x2="50" y2="52" stroke="#ff4cb4" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Right Pink Sticker Popping Out of Text Corner (z-30 for max pop) */}
            <div
              ref={rightStickerRef}
              className="absolute -right-8 sm:-right-16 -top-6 sm:-top-12 w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 rotate-[12deg] origin-center z-30 cursor-pointer pointer-events-auto transition-transform hover:scale-115 active:scale-95 duration-200"
              title="Make It Rain!"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]">
                {/* Outer sticker contour */}
                <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#000000" strokeWidth="6" />
                <circle cx="50" cy="50" r="37" fill="#ff4cb4" />
                {/* Big retro grin */}
                <path d="M30,55 Q50,75 70,55" fill="none" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
                {/* Dollar sign eyes */}
                <text x="27" y="47" fontFamily="Anybody, sans-serif" fontSize="24" fontWeight="900" fill="#000000">$</text>
                <text x="53" y="47" fontFamily="Anybody, sans-serif" fontSize="24" fontWeight="900" fill="#000000">$</text>
              </svg>
            </div>
          </span>

          {/* Central Popping Media/Image layered BEHIND both rows of text (z-10) */}
          <div
            ref={centerImageRef}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[70%] md:w-[62%] aspect-square z-10 origin-center cursor-pointer group transition-all duration-300 hover:scale-105"
          >
            {/* The transparent cherry-blossom PNG popping in the center */}
            <img
              src="/cherry-blossom.png"
              alt="Cherry Blossom Pop-out"
              className="w-full h-full object-contain pointer-events-none select-none"
            />
          </div>
        </h1 >

        {/* Narrative Description & Quirky Split Pill CTA Buttons */}
        <div className="w-full max-w-2xl text-center mt-12 sm:mt-16 flex flex-col items-center gap-6 sm:gap-8 px-4 z-30">
          <div ref={missionRef} className="max-w-lg">
            <p className="font-sans text-sm sm:text-base md:text-lg text-brand-gray/80 dark:text-emerald-100/90 leading-relaxed font-semibold">
              Scale: it's all about conversion. Discover the growth trajectory for your brand with GENZENCY, the ultimate high-conversion organic performance engine.
            </p>
          </div>

          {/* Split Pill Button CTA */}
          <div ref={buttonRef} className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-stretch rounded-full overflow-hidden border-2 border-brand-gray dark:border-white bg-white dark:bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all hover:scale-103 duration-200">
              {/* Main Button Side */}
              <button
                onClick={() => scrollToSection("estimation")}
                className="px-6 sm:px-8 py-3 bg-brand-gray text-white dark:bg-white dark:text-[#052e16] hover:bg-brand-lime dark:hover:bg-[#00ff88] hover:text-black dark:hover:text-[#052e16] font-display font-black text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
              >
                GET FREE AUDIT
              </button>
              {/* Split Icon Badge Side */}
              <div className="w-12 sm:w-14 border-l-2 border-dashed border-white/30 dark:border-[#052e16]/30 flex items-center justify-center bg-brand-gray/90 text-white dark:bg-white/25 hover:bg-brand-lime dark:hover:bg-[#00ff88] hover:text-black dark:hover:text-[#052e16] transition-colors cursor-pointer" onClick={() => scrollToSection("estimation")}>
                <Sparkles size={16} className="animate-pulse" />
              </div>
            </div>

            {/* Scroll Indicator Option */}
            <button
              onClick={() => scrollToSection("results")}
              className="group border border-brand-gray/20 dark:border-emerald-500/30 hover:border-brand-aqua dark:hover:border-[#00ff88] px-5 py-3 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-widest text-brand-gray/60 dark:text-emerald-300 hover:text-brand-aqua dark:hover:text-[#00ff88] uppercase transition-all flex items-center gap-2 cursor-pointer bg-white/40 dark:bg-white/5 backdrop-blur-sm"
            >
              Scroll Explorer <span className="inline-block group-hover:translate-y-1 transition-transform"><ArrowDown size={12} /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



