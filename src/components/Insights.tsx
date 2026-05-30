/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Clock, X, ChevronRight, ArrowUpRight } from "lucide-react";
import { EditorialInsight } from "../types";
import { insights } from "../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState<EditorialInsight | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const containerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalBackdropRef = useRef<HTMLDivElement>(null);

  const categories = ["ALL", "SEO OPTIMIZATION", "PAID MARKETING", "UI-UX DESIGN"];

  const filteredArticles = activeCategory === "ALL"
    ? insights
    : insights.filter(art => art.category === activeCategory);

  // GSAP scroll trigger to reveal articles
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".gsap-insight-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
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
  }, [activeCategory]); // Re-run if category filters list changes

  // Modal active lock
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  // Modal animation
  useEffect(() => {
    if (selectedArticle && modalContentRef.current && modalBackdropRef.current) {
      gsap.fromTo(
        modalBackdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.2)" }
      );
    }
  }, [selectedArticle]);

  const handleCloseModal = () => {
    if (modalContentRef.current && modalBackdropRef.current) {
      gsap.to(modalBackdropRef.current, { opacity: 0, duration: 0.25 });
      gsap.to(modalContentRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => setSelectedArticle(null),
      });
    } else {
      setSelectedArticle(null);
    }
  };

  return (
    <section
      id="insights"
      ref={containerRef}
      className="py-24 bg-[#f9f9f9] dark:bg-[#0a0a0a] border-t border-brand-gray/10 dark:border-white/10 relative z-10 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Editorial Section Header */}
        <div className="border-b-4 border-brand-gray dark:border-[#f9f9f9] pb-6 mb-12 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div>
            <span className="font-mono text-xs font-semibold text-brand-aqua">
              // STRATEGY BRIEFINGS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase mt-1 tracking-tighter">
              GUIDES & INSIGHTS
            </h2>
          </div>

          {/* Magazine Category Sorter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase px-4 py-2 border rounded-full cursor-pointer transition-all ${activeCategory === cat
                  ? "bg-brand-aqua border-brand-aqua text-black"
                  : "bg-white dark:bg-[#0c0c0c] border-[#1a1c1c]/10 dark:border-white/10 text-brand-gray/70 dark:text-brand-light/70 hover:border-brand-aqua/50"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Huge Cover Column (Left 7 cols) on first item */}
          <div className="col-span-12 lg:col-span-7 group cursor-pointer gsap-insight-item" onClick={() => setSelectedArticle(filteredArticles[0] || null)}>
            {filteredArticles[0] ? (
              <div className="space-y-6 bg-white dark:bg-[#0c0c0c] border-2 sm:border-4 border-brand-gray dark:border-white p-5 sm:p-8 rounded-3xl shadow-lg hover:shadow-brand-aqua/5 transition-all">
                <div className="aspect-video rounded-2xl overflow-hidden relative bg-[#111] border border-brand-gray/10 dark:border-white/10">
                  <img
                    referrerPolicy="no-referrer"
                    src={filteredArticles[0].imageUrl}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                    alt={filteredArticles[0].title}
                  />
                  <div className="absolute top-4 left-4 bg-brand-aqua text-black font-mono text-[10px] uppercase font-semibold tracking-widest px-3 py-1">
                    {filteredArticles[0].category}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 font-mono text-xs text-brand-gray/50 dark:text-white/40">
                    <span>{filteredArticles[0].publishDate}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {filteredArticles[0].readTime}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase leading-tight tracking-tight group-hover:text-brand-aqua transition-colors">
                    {filteredArticles[0].title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-brand-gray/70 dark:text-brand-light/70 leading-relaxed line-clamp-3">
                    {filteredArticles[0].excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-brand-gray/10 dark:border-white/10 gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        referrerPolicy="no-referrer"
                        src={filteredArticles[0].author.avatar}
                        className="w-10 h-10 rounded-full border-2 border-brand-aqua object-cover"
                        alt={filteredArticles[0].author.name}
                      />
                      <div>
                        <p className="font-sans text-xs font-bold text-brand-gray dark:text-white">{filteredArticles[0].author.name}</p>
                        <p className="font-mono text-[10px] text-brand-gray/40 dark:text-white/40">{filteredArticles[0].author.role}</p>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-bold text-brand-aqua uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                      READ ARTICLE <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center bg-white dark:bg-[#0c0c0c] rounded-3xl border-2 sm:border-4 border-brand-gray dark:border-white text-brand-gray/50 dark:text-white/40">
                No guides published under this category currently.
              </div>
            )}
          </div>

          {/* List Columns (Right 5 cols) */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <span className="font-mono text-xs font-black uppercase text-brand-gray/40 dark:text-white/30 tracking-widest block mb-2">
              LATEST BRIEFINGS
            </span>

            {filteredArticles.slice(1).map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-white dark:bg-[#0c0c0c] border-2 sm:border-4 border-transparent hover:border-brand-aqua/30 p-5 sm:p-6 rounded-2xl flex flex-col justify-between shadow transition-all cursor-pointer group gsap-insight-item"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[10px] text-brand-gray/50 dark:text-white/40">
                    <span className="text-brand-aqua font-bold uppercase">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h4 className="font-display text-md sm:text-lg font-black uppercase tracking-tight group-hover:text-brand-aqua transition-colors line-clamp-2">
                    {art.title}
                  </h4>

                  <p className="font-sans text-xs text-brand-gray/70 dark:text-brand-light/70 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-4 border-t border-brand-gray/5 dark:border-white/5 mt-4 gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      referrerPolicy="no-referrer"
                      src={art.author.avatar}
                      className="w-6 h-6 rounded-full object-cover"
                      alt={art.author.name}
                    />
                    <span className="font-sans text-[11px] font-bold text-brand-gray dark:text-white">{art.author.name}</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-brand-aqua uppercase tracking-wider flex items-center gap-1">
                    READ <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            ))}

            {/* Micro Newsletter Strip */}
            <div className="bg-brand-lime text-black p-5 sm:p-6 rounded-3xl space-y-4 shadow-lg gsap-insight-item">
              <span className="font-mono text-[10px] font-bold tracking-widest bg-black text-brand-lime px-2 py-0.5 rounded uppercase">
                GROWTH SYNDICATE
              </span>
              <h4 className="font-display text-lg font-black uppercase">WEEKLY MARKETING PERFORMANCE BRIEFS</h4>
              <p className="font-sans text-xs text-black/85 leading-normal">
                Join 14,000 active business owners who receive our targeted SEO advice and Meta campaign guides directly.
              </p>
              <div className="flex flex-col gap-2.5">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="w-full bg-black/10 border-b border-black text-xs font-mono text-black placeholder:text-black/50 py-2.5 px-3 focus:outline-none focus:bg-black/20 rounded-lg"
                />
                <button className="w-full bg-black text-brand-lime font-mono text-[10px] font-bold py-3 hover:bg-neutral-850 hover:text-white transition-colors uppercase rounded-lg cursor-pointer">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Lightbox for Article Reads */}
        {selectedArticle && (
          <div
            ref={modalBackdropRef}
            id="article-read-modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <div className="absolute inset-0" onClick={handleCloseModal}></div>

            <div
              ref={modalContentRef}
              className="w-full max-w-2xl bg-white dark:bg-[#0c0c0c] text-brand-gray dark:text-brand-light h-[85vh] rounded-3xl relative z-10 flex flex-col overflow-hidden border-2 sm:border-4 border-brand-gray dark:border-white shadow-2xl"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-brand-gray/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-brand-aqua">MARKETING DOSSIER //</span>
                  <span className="font-mono text-[10px] bg-brand-gray/10 dark:bg-white/10 px-2 py-0.5 uppercase tracking-wide">
                    {selectedArticle.category}
                  </span>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1 rounded-full bg-brand-gray/10 dark:bg-white/10 hover:bg-brand-aqua hover:text-black transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Cover Image view */}
              <div className="h-40 sm:h-52 overflow-hidden relative shrink-0">
                <img
                  referrerPolicy="no-referrer"
                  src={selectedArticle.imageUrl}
                  className="w-full h-full object-cover"
                  alt={selectedArticle.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <span className="font-mono text-xs text-brand-aqua">{selectedArticle.publishDate}</span>
                  <h2 className="font-display text-lg sm:text-2xl font-extrabold uppercase leading-tight tracking-tight mt-1">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Markdown Prose scroll body */}
              <div className="flex-grow overflow-y-auto p-5 sm:p-6 space-y-6 text-left">

                {/* Author Header badge */}
                <div className="flex items-center gap-3 border-b border-brand-gray/10 dark:border-white/10 pb-4 shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={selectedArticle.author.avatar}
                    className="w-10 h-10 rounded-full border-2 border-brand-aqua object-cover"
                    alt={selectedArticle.author.name}
                  />
                  <div>
                    <p className="font-sans text-xs font-extrabold text-brand-gray dark:text-white">{selectedArticle.author.name}</p>
                    <p className="font-mono text-[9px] text-brand-gray/50 dark:text-white/40">{selectedArticle.author.role}</p>
                  </div>
                </div>

                {/* Prose Content */}
                <div className="space-y-4 font-sans text-xs sm:text-sm leading-relaxed text-brand-gray/80 dark:text-[#eeeeee]/90">
                  {selectedArticle.contentMarkdown.split("\n\n").map((chunk, index) => {
                    if (chunk.trim().startsWith("## ")) {
                      return (
                        <h3 key={index} className="font-display text-lg sm:text-xl font-black uppercase text-brand-gray dark:text-white pt-2 tracking-tight">
                          {chunk.replace("## ", "")}
                        </h3>
                      );
                    }
                    if (chunk.trim().startsWith("### ")) {
                      return (
                        <h4 key={index} className="font-display text-sm sm:text-base font-bold uppercase text-brand-gray dark:text-white pt-1">
                          {chunk.replace("### ", "")}
                        </h4>
                      );
                    }
                    if (chunk.trim().startsWith("- ")) {
                      return (
                        <ul key={index} className="list-disc pl-5 space-y-1.5 py-1">
                          {chunk.split("\n").map((li, liIdx) => (
                            <li key={liIdx} className="font-sans text-xs">
                              {li.replace("- ", "").replace(/\*\frac/g, "").replace(/\*\*(.*?)\*\*/g, "$1")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="font-sans leading-relaxed">
                        {chunk.replace(/\*\*(.*?)\*\*/g, "$1")}
                      </p>
                    );
                  })}
                </div>

              </div>

              {/* Footer close */}
              <div className="p-4 sm:p-5 border-t border-brand-gray/10 dark:border-white/10 flex items-center justify-between bg-brand-gray/5 dark:bg-white/5 shrink-0">
                <span className="font-mono text-[10px] text-brand-gray/40 dark:text-white/40 uppercase">✓ GUIDANCE CONTENT</span>
                <button
                  onClick={handleCloseModal}
                  className="bg-brand-gray dark:bg-white text-white dark:text-black font-display font-semibold text-xs tracking-wider uppercase py-3 px-6 rounded-xl hover:bg-brand-aqua dark:hover:bg-brand-aqua hover:text-black dark:hover:text-black transition-all cursor-pointer shadow-md"
                >
                  CLOSE ARTICLE
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
