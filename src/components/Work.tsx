/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown, X, Layers } from "lucide-react";
import { CaseStudy } from "../types";
import { caseStudies } from "../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);

  // Stagger entry of case study cards on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".gsap-work-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Animate modal drawer on state toggle
  useEffect(() => {
    if (selectedCase && modalContentRef.current && modalBackdropRef.current) {
      gsap.fromTo(
        modalBackdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        modalContentRef.current,
        { x: "100%", opacity: 0.5 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [selectedCase]);

  const handleCloseModal = () => {
    if (modalContentRef.current && modalBackdropRef.current) {
      gsap.to(modalBackdropRef.current, { opacity: 0, duration: 0.25 });
      gsap.to(modalContentRef.current, {
        x: "100%",
        opacity: 0.5,
        duration: 0.45,
        ease: "power3.in",
        onComplete: () => setSelectedCase(null),
      });
    } else {
      setSelectedCase(null);
    }
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-24 bg-[#f9f9f9] dark:bg-[#0a0a0a] border-t border-brand-gray/10 dark:border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between border-b-4 border-brand-gray dark:border-white pb-6 mb-16">
          <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-brand-gray dark:text-brand-light">
            SELECTED WORKS
          </h3>
          <div className="text-brand-gray dark:text-brand-light animate-pulse hidden sm:block">
            <ArrowUpRight size={44} />
          </div>
        </div>

        {/* Asymmetric Bento Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Main Project Showcase Card */}
          <div className="col-span-12 lg:col-span-8 gsap-work-card group border-2 sm:border-4 border-brand-gray dark:border-white bg-white dark:bg-[#0c0c0c] text-brand-gray dark:text-brand-light overflow-hidden rounded-3xl shadow-xl hover:shadow-brand-aqua/10 transition-all duration-300">
            <div className="p-5 sm:p-8 flex flex-col justify-between h-full gap-8">
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-brand-aqua uppercase tracking-wider block mb-1">
                    (FEATURED WORK STUDY)
                  </span>
                  <h4 className="font-display text-2xl sm:text-4xl font-black group-hover:italic transition-all uppercase leading-tight tracking-tight">
                    {caseStudies[0].title}
                  </h4>
                </div>
                <div className="text-left sm:text-right font-mono text-xs text-brand-gray/60 dark:text-white/50 space-y-1 shrink-0">
                  <p>Category: WordPress SEO & Speed</p>
                  <p>Duration: {caseStudies[0].duration}</p>
                </div>
              </div>

              {/* Image Area */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-brand-gray/10 dark:border-white/10 bg-[#111]">
                <img
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 scale-100"
                  src={caseStudies[0].imageUrl}
                  alt={caseStudies[0].title}
                />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 font-mono text-[10px] tracking-widest text-brand-aqua">
                  SPEED IMPROVED // 0.4s
                </div>
              </div>

              {/* Short explanation summary */}
              <p className="font-sans text-brand-gray/80 dark:text-white/80 leading-relaxed text-sm sm:text-base">
                {caseStudies[0].summary}
              </p>

              {/* Action and metrics overview */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-brand-gray/10 dark:border-white/10 pt-6">
                <div className="flex gap-6">
                  {caseStudies[0].metrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-mono text-[10px] sm:text-xs text-brand-gray/50 dark:text-white/40 uppercase">{metric.label}</span>
                      <span className="font-display text-2xl sm:text-3xl font-black text-brand-aqua">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCase(caseStudies[0])}
                  className="w-full sm:w-auto font-display font-semibold text-xs uppercase tracking-wider bg-brand-aqua hover:bg-brand-lime text-black py-3.5 px-6 sm:px-8 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer shadow-md"
                >
                  VIEW RESULTS <ArrowUpRight size={14} />
                </button>
              </div>

            </div>
          </div>

          {/* Right: Solid Vivid Text Panel Block */}
          <div className="col-span-12 lg:col-span-4 gsap-work-card bg-brand-aqua text-black p-6 sm:p-8 flex flex-col justify-between rounded-3xl shadow-xl hover:bg-brand-lime transition-colors duration-500 min-h-[320px] lg:min-h-full">
            <div className="space-y-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-black flex items-center gap-2">
                <Layers size={14} /> WORK ETHIC
              </span>
              <h4 className="font-display text-2xl sm:text-4xl font-black leading-tight tracking-tighter uppercase">
                WE DO SEO & MARKETING THAT GROW REVENUE
              </h4>
              <p className="font-sans text-black/90 text-sm sm:text-base leading-relaxed font-medium">
                We design lightweight website interfaces, optimize WordPress stores, build high-converting Meta Ads budgets, and push search positions on Google without confusing jargon.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-6">
              <div className="w-full h-1 bg-black"></div>
              <div className="w-full h-3 bg-black/50"></div>
              <div className="w-full h-6 bg-black/20"></div>
            </div>
          </div>

          {/* Secondary Case Studies */}
          {caseStudies.slice(1).map((project) => (
            <div
              key={project.id}
              className="col-span-12 md:col-span-6 gsap-work-card group border-2 sm:border-4 border-brand-gray dark:border-white bg-white dark:bg-[#0c0c0c] text-brand-gray dark:text-brand-light overflow-hidden rounded-3xl shadow-xl hover:shadow-brand-aqua/10 transition-all duration-300"
            >
              <div className="p-5 sm:p-8 flex flex-col gap-6">
                
                {/* Title block uses responsive flex-col to avoid text clipping */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
                  <div>
                    <span className="font-mono text-xs text-brand-aqua uppercase tracking-wide block mb-1">(WORK CASE)</span>
                    <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight">{project.title}</h4>
                  </div>
                  <div className="text-left sm:text-right font-mono text-[10px] text-brand-gray/50 dark:text-white/50 shrink-0">
                    <p>{project.category.split(" ")[0]} Campaign</p>
                    <p>Duration: {project.duration}</p>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-gray/10 dark:border-white/10 bg-[#111]">
                  <img
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 font-mono text-[9px] tracking-wider text-white">
                    {project.tags[0]}
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-brand-gray/80 dark:text-white/75 leading-relaxed">{project.summary}</p>

                <div className="flex items-center justify-between border-t border-brand-gray/10 dark:border-white/10 pt-4 mt-1">
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-brand-gray/40 dark:text-white/40 uppercase">OUTCOME REACH</span>
                      <span className="font-display text-lg sm:text-xl font-black text-brand-aqua">{project.metrics[0].value}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCase(project)}
                    className="font-display font-semibold text-xs tracking-wide uppercase text-brand-gray dark:text-brand-light hover:text-brand-aqua flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    READ OUTCOMES <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>
            </div>
          ))}

          {/* Large Brand Banner Card */}
          <div
            onClick={() => {
              const element = document.getElementById("expertise");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="col-span-12 gsap-work-card bg-white dark:bg-[#0c0c0c] text-brand-gray dark:text-[#f9f9f9] border-2 sm:border-4 border-brand-gray dark:border-white p-6 sm:p-12 flex flex-col justify-center items-center rounded-3xl shadow-xl relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-brand-aqua/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h2 className="font-display text-2xl sm:text-5xl md:text-7xl font-black uppercase text-center tracking-tighter select-none z-10 leading-none">
              CHOOSE Genzency FOR SEO & LEADS
            </h2>

            <div className="w-12 h-12 sm:w-16 sm:h-16 mt-6 sm:mt-8 bg-brand-aqua hover:bg-brand-lime text-black rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10 transition-colors">
              <ArrowDown size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Overlay Case Study Audit Drawer */}
      {selectedCase && (
        <div
          ref={modalBackdropRef}
          id="case-study-modal"
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/85 backdrop-blur-sm p-4"
        >
          <div className="absolute inset-0" onClick={handleCloseModal}></div>

          <div
            ref={modalContentRef}
            className="w-full max-w-xl bg-white dark:bg-[#0c0c0c] text-brand-gray dark:text-brand-light h-[90vh] rounded-3xl relative z-10 flex flex-col overflow-hidden shadow-2xl border-2 sm:border-4 border-brand-gray dark:border-white"
          >
            {/* Header controls */}
            <div className="p-4 sm:p-5 border-b border-brand-gray/10 dark:border-white/10 flex items-center justify-between bg-brand-gray/5 dark:bg-white/5 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-brand-aqua">OUTCOME BRIEF:</span>
                <span className="font-mono text-[9px] bg-brand-gray/10 dark:bg-white/10 px-2 py-0.5 uppercase tracking-wide">
                  {selectedCase.category}
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-full bg-brand-gray/10 dark:bg-white/10 hover:bg-brand-aqua hover:text-black transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content body Scroll view */}
            <div className="flex-grow overflow-y-auto p-5 sm:p-6 space-y-6">
              <div>
                <span className="font-mono text-[10px] text-brand-gray/40 dark:text-white/40 uppercase font-bold tracking-wider">PROJECT STUDY</span>
                <h2 className="font-display text-xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">
                  {selectedCase.title}
                </h2>
              </div>

              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-gray/80 dark:text-brand-light/80">
                {selectedCase.description}
              </p>

              {/* Image */}
              <div className="aspect-video rounded-xl overflow-hidden border border-brand-gray/10 dark:border-white/10 shrink-0">
                <img referrerPolicy="no-referrer" src={selectedCase.imageUrl} className="w-full h-full object-cover" alt={selectedCase.title} />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedCase.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-brand-gray/5 dark:bg-white/5 border border-brand-gray/10 dark:border-white/10 p-4 rounded-xl flex flex-col justify-between"
                  >
                    <span className="font-mono text-[9px] text-brand-aqua uppercase font-black tracking-wider block mb-2">{metric.label}</span>
                    <div>
                      <span className="font-display text-xl sm:text-2xl font-black text-brand-aqua leading-none">{metric.value}</span>
                      <span className="text-[10px] font-sans text-brand-gray/60 dark:text-brand-light/60 block mt-1 leading-snug">
                        {metric.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge and Solution */}
              <div className="grid grid-cols-1 gap-4 pt-2">
                <div className="space-y-2 bg-[#bc0000]/5 border-l-4 border-brand-lime p-4 rounded-r-xl">
                  <span className="font-mono text-[10px] text-brand-lime font-black uppercase tracking-wider block">THE CHALLENGE</span>
                  <p className="font-sans text-xs leading-normal text-brand-gray/80 dark:text-brand-light/80">
                    {selectedCase.challenge}
                  </p>
                </div>
                <div className="space-y-2 bg-green-500/5 border-l-4 border-green-500 p-4 rounded-r-xl">
                  <span className="font-mono text-[10px] text-green-500 font-black uppercase tracking-wider block">OUR STRATEGIC SOLUTION</span>
                  <p className="font-sans text-xs leading-normal text-brand-gray/80 dark:text-brand-light/80">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Drawer actions */}
            <div className="p-4 sm:p-5 border-t border-brand-gray/10 dark:border-white/10 flex gap-4 bg-brand-gray/5 dark:bg-white/5 shrink-0">
              <button
                onClick={() => {
                  handleCloseModal();
                  const target = document.getElementById("estimation");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 bg-brand-aqua hover:bg-brand-lime text-black py-3 font-display font-bold text-xs tracking-wider uppercase rounded-xl transition-all text-center cursor-pointer shadow-md"
              >
                GET AN AUDIT
              </button>
              <button
                onClick={handleCloseModal}
                className="flex-1 border-2 border-brand-gray dark:border-white hover:bg-brand-gray dark:hover:bg-white hover:text-white dark:hover:text-black py-3 font-display font-semibold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
