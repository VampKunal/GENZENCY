"use client";

import React, { useState } from "react";
import { TrendingUp, Clock, Mail, Globe, ArrowRight, ShieldCheck } from "lucide-react";

export default function InteractiveCalculator() {
  const [currentTraffic, setCurrentTraffic] = useState<number>(3500);
  const [sector, setSector] = useState<string>("luxury-apparel");
  const [objective, setObjective] = useState<string>("radical");
  const [targetURL, setTargetURL] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [errorWord, setErrorWord] = useState<string>("");

  // Math estimates to simulate SEO benefits dynamically
  const multiplierIndustry = sector === "luxury-apparel" ? 3.5 : sector === "b2b-saas" ? 5.2 : sector === "avant-garde-media" ? 4.1 : 3.0;
  const multiplierObjective = objective === "ambitious" ? 1.5 : objective === "radical" ? 2.5 : 4.0;

  const estimatedTrafficBoost = Math.round(currentTraffic * multiplierIndustry * multiplierObjective / 10) * 10;
  const estimatedRevenueLift = Math.round(estimatedTrafficBoost * 3.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetURL.includes(".") || targetURL.length < 5) {
      setErrorWord("Please insert a valid website address.");
      return;
    }
    if (!emailAddress.includes("@") || emailAddress.length < 5) {
      setErrorWord("A valid business email address is required.");
      return;
    }
    setErrorWord("");
    setFormSubmitted(true);
  };

  return (
    <section
      id="estimation"
      className="relative z-10 overflow-hidden border-t border-brand-aqua/15 bg-[#f9f9f9] py-24 text-brand-gray select-none transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white"
    >
      
      {/* Decorative vector dots floating */}
      <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-brand-aqua/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="border-b-4 border-brand-gray dark:border-white pb-6 mb-16 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-brand-aqua">
              // REVENUE PROJECTION
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase mt-1 tracking-tighter">
              ROI & CALCULATOR
            </h2>
          </div>
          <p className="font-mono text-xs text-brand-gray/50 dark:text-white/50 uppercase font-semibold">
            ESTIMATE YOUR UNTAPPED ORGANIC SEARCH VALUE
          </p>
        </div>

        {/* Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* SLIDERS COLUMN: System inputs */}
          <div className="col-span-12 lg:col-span-7 bg-white dark:bg-[#111111] p-5 sm:p-8 md:p-10 border-2 sm:border-4 border-brand-gray/10 dark:border-brand-gray/50 rounded-3xl space-y-8 flex flex-col justify-between transition-colors duration-300">
            <div className="space-y-6">
              
              {/* Traffic Input Header */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline gap-2 font-mono text-xs">
                  <span className="text-brand-aqua font-bold block">01 // CURRENT ORGANIC SESSIONS</span>
                  <span className="font-display text-lg font-black text-brand-gray dark:text-white">{currentTraffic.toLocaleString()} /mo</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={currentTraffic}
                  onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 dark:bg-brand-gray rounded-lg appearance-none cursor-pointer accent-brand-aqua"
                />
                <div className="flex justify-between font-mono text-[9px] text-brand-gray/40 dark:text-white/40">
                  <span>500 SESSIONS</span>
                  <span>50,000 SESSIONS</span>
                  <span>100,000+ SESSIONS</span>
                </div>
              </div>

              {/* Industry Sector selection */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-brand-aqua font-bold block">02 // VERTICAL SECTOR MARKET</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "luxury-apparel", label: "Luxury & D2C Apparel" },
                    { id: "b2b-saas", label: "Enterprise B2B SaaS" },
                    { id: "avant-garde-media", label: "Retail & E-commerce" },
                    { id: "fintech-service", label: "Financial & Professional" }
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSector(ind.id)}
                      className={`font-mono text-[10px] sm:text-xs font-bold uppercase p-4 border rounded-xl text-left cursor-pointer transition-all ${
                        sector === ind.id
                          ? "bg-brand-aqua text-black border-brand-aqua shadow-sm"
                          : "bg-neutral-50 dark:bg-black text-brand-gray/80 dark:text-white/80 border-[#1a1c1c]/10 dark:border-white/10 hover:border-brand-aqua"
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity Strategy Grade */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-brand-aqua font-bold block">03 // TARGET PLACEMENT OBJECTIVE</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "ambitious", title: "AMBITIOUS", desc: "Top 10 placement" },
                    { id: "radical", title: "RADICAL", desc: "Top 3 placement" },
                    { id: "monochrome", title: "DOMINATE", desc: "Saturate Page #1" }
                  ].map((obj) => (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => setObjective(obj.id)}
                      className={`p-3 border rounded-xl flex flex-col justify-between text-left cursor-pointer transition-all ${
                        objective === obj.id
                          ? "bg-brand-aqua border-brand-aqua text-black font-extrabold shadow-sm"
                          : "bg-neutral-50 dark:bg-black text-brand-gray/80 dark:text-white/80 border-[#1a1c1c]/10 dark:border-white/10 hover:border-brand-aqua"
                      }`}
                    >
                      <span className="font-display text-[11px] sm:text-xs font-black uppercase block">{obj.title}</span>
                      <span className="font-mono text-[8px] sm:text-[9px] text-brand-gray/60 dark:text-neutral-400 block mt-1 uppercase">{obj.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Benchmark Speed Comparison */}
            <div className="bg-neutral-50 dark:bg-black p-4 sm:p-5 rounded-2xl border border-brand-gray/10 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-aqua/15 border border-brand-aqua/30 text-brand-aqua rounded-xl shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase text-brand-gray dark:text-white">CMS LOADING SPEED ACCELERATION</h4>
                  <p className="font-sans text-[10px] text-brand-gray/50 dark:text-white/50">Core Web Vitals acceleration index.</p>
                </div>
              </div>
              <div className="flex font-mono text-xs font-bold items-center gap-2 self-end sm:self-auto">
                <span className="text-neutral-500 line-through">4.8s</span>
                <span className="text-brand-gray dark:text-white">&rarr;</span>
                <span className="text-brand-lime bg-brand-lime/10 px-2.5 py-1 rounded">0.4s</span>
              </div>
            </div>
          </div>

          {/* RESULTS COLUMN: Visual outputs & Inquiry Form */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between bg-white dark:bg-[#111111] text-brand-gray dark:text-white p-5 sm:p-8 md:p-10 border-2 sm:border-4 border-brand-gray/10 dark:border-white/10 rounded-3xl shadow-2xl relative overflow-hidden transition-colors duration-300">
            
            {/* Visual Header */}
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-brand-gray/50 dark:text-white/50 border-b border-brand-gray/10 dark:border-white/10 pb-4 mb-6 shrink-0 gap-2">
                <span>BUSINESS ESTIMATOR CONSOLE</span>
                <span className="bg-green-500 text-white font-mono px-2 py-0.5 rounded font-black tracking-widest uppercase text-[8px] sm:text-[10px] shrink-0">98% CONFIDENCE</span>
              </div>

              {/* Render Estimations */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-brand-gray/40 dark:text-white/40 block uppercase tracking-widest font-black">
                    ESTIMATED SESSIONS GAINED
                  </span>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-5xl font-black text-brand-aqua">
                      +{estimatedTrafficBoost.toLocaleString()}
                    </span>
                    <span className="font-mono text-xs text-brand-gray/50 dark:text-white/50 uppercase font-semibold">visitors /mo</span>
                  </div>
                </div>

                <div className="space-y-1 pb-6 border-b border-brand-gray/10 dark:border-white/10">
                  <span className="font-mono text-[10px] text-brand-gray/40 dark:text-white/40 block uppercase tracking-widest font-black">
                    ESTIMATED MONTHLY REVENUE LIFT
                  </span>
                  <div className="flex flex-wrap items-baseline gap-1">
                    <span className="font-display text-2xl sm:text-4xl font-extrabold text-brand-gray dark:text-white">
                      +${estimatedRevenueLift.toLocaleString()}
                    </span>
                    <span className="font-mono text-[10px] text-brand-gray/50 dark:text-white/50 uppercase font-black">est. value /mo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Submission Lead Form */}
            <div className="pt-4">
              {!formSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <p className="font-sans text-xs text-brand-gray/60 dark:text-white/60 leading-relaxed font-semibold">
                    Enter your website details to claim your custom organic search audit and performance briefing.
                  </p>

                  <div className="space-y-2">
                    <div className="relative">
                      <Globe size={14} className="absolute left-3 top-3.5 text-brand-gray/40 dark:text-white/40" />
                      <input
                        type="text"
                        placeholder="YOUR WEBSITE ADDRESS (e.g., yoursite.com)"
                        value={targetURL}
                        onChange={(e) => setTargetURL(e.target.value)}
                        className="w-full bg-brand-gray/5 dark:bg-black/20 border border-brand-gray/10 dark:border-white/10 focus:border-brand-aqua text-xs font-mono text-brand-gray dark:text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:bg-white dark:focus:bg-black/40 transition-all"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-3.5 text-brand-gray/40 dark:text-white/40" />
                      <input
                        type="email"
                        placeholder="BUSINESS EMAIL ADDRESS"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="w-full bg-brand-gray/5 dark:bg-black/20 border border-brand-gray/10 dark:border-white/10 focus:border-brand-aqua text-xs font-mono text-brand-gray dark:text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:bg-white dark:focus:bg-black/40 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {errorWord && (
                    <span className="font-mono text-[10px] text-red-500 font-black block uppercase">
                      ⚠ {errorWord}
                    </span>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-brand-aqua hover:bg-brand-lime text-black font-display font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-2xl shadow-lg hover:shadow-brand-aqua/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    GET FREE REPORT <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div
                  className="space-y-4 text-center py-6 bg-green-500/5 rounded-2xl border-2 border-green-500/20"
                >
                  <h4 className="font-display text-md sm:text-lg font-black uppercase text-green-600">REPORT REQUESTED!</h4>
                  <p className="font-sans text-xs text-brand-gray/70 dark:text-white/70 px-4 leading-relaxed">
                    We are analyzing your website domain at <span className="font-mono text-xs font-bold text-brand-gray dark:text-white">{targetURL}</span>. Your custom SEO audit is compiling and will load to <span className="font-mono text-xs font-bold text-brand-gray dark:text-white">{emailAddress}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setTargetURL("");
                      setEmailAddress("");
                    }}
                    className="font-mono text-[10px] text-brand-aqua font-black uppercase hover:underline"
                  >
                    RESET CALCULATOR
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
