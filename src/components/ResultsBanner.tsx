/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerImgRef = useRef<HTMLImageElement>(null);
  const bannerLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal banner container on scroll
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 90%",
          },
        }
      );

      // Image zoom on scroll
      gsap.fromTo(
        bannerImgRef.current,
        { scale: 1.0 },
        {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Label rotation on scroll
      gsap.fromTo(
        bannerLabelRef.current,
        { rotation: -2 },
        {
          rotation: -8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="results"
      ref={bannerRef}
      className="w-full relative h-[320px] sm:h-[450px] md:h-[550px] overflow-hidden flex items-center justify-center border-y-4 border-[#000000] dark:border-[#f9f9f9] bg-black z-10 select-none"
    >
      {/* Background Image */}
      <img
        ref={bannerImgRef}
        alt="High-fashion footwear and architecture detail"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-[120%] object-cover grayscale brightness-[0.4] contrast-125 select-none"
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1600"
      />

      {/* Vignette Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none z-0"></div>

      {/* Floating Text Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase text-white tracking-widest select-none leading-none">
            RESULTS
          </h2>
          <p className="font-display text-brand-lime text-lg sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase mt-[-4px] sm:mt-[-12px] ml-2 sm:ml-4 tracking-tighter italic leading-none">
            SEO & SEARCH DOMINANCE
          </p>
        </div>

        <div
          ref={bannerLabelRef}
          className="bg-brand-aqua text-black font-mono text-[10px] sm:text-xs font-bold px-4 py-2.5 uppercase tracking-wider border border-black/20 shadow-xl self-start md:self-auto flex items-center gap-1.5 rounded-sm"
        >
          <CheckCircle size={14} className="text-black" /> Page 1 Placement Verified
        </div>
      </div>
    </div>
  );
}
