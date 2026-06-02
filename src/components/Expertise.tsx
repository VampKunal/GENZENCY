"use client";

import { useState } from "react";
import { Compass, Cpu, FileText, Search, Activity, Zap, Shield, CheckCircle } from "lucide-react";
import { services } from "@/data";

export default function Expertise() {
  const [activeTab, setActiveTab] = useState<string>("seo-optimization");
  const [speedScore, setSpeedScore] = useState<number>(45);
  const [optimizing, setOptimizing] = useState<boolean>(false);

  const handleOptimizationPress = () => {
    if (optimizing) return;
    setOptimizing(true);
    let current = speedScore;
    const interval = setInterval(() => {
      current += 3;
      if (current >= 100) {
        setSpeedScore(100);
        setOptimizing(false);
        clearInterval(interval);
      } else {
        setSpeedScore(current);
      }
    }, 30);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="text-brand-aqua" size={24} />;
      case "Cpu":
        return <Cpu className="text-brand-lime" size={24} />;
      case "FileText":
        return <FileText className="text-brand-lime" size={24} />;
      case "Search":
        return <Search className="text-[#5c5c5c]" size={24} />;
      default:
        return <Activity size={24} />;
    }
  };

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section
      id="expertise"
      className="relative z-10 overflow-hidden bg-[#f3f3f4] py-24 text-brand-gray dark:bg-[#060606] dark:text-brand-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-aqua">
            // OUR CORES
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase mt-2 tracking-tighter leading-none">
            UNMATCHED CAPACITY
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-gray/70 dark:text-brand-light/70 mt-4 leading-relaxed">
            We focus purely on standard growth pillars: targeted Google ranking metrics, lightning fast WordPress servers, optimized paid ads campaigns, and conversion-focused web layouts.
          </p>
        </div>

        {/* Bento Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: Interactive Navigators List (5 cols) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#1a1c1c]/50 dark:text-white/40 mb-1 block">
              CHOOSE FIELD //
            </span>
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => {
                  setActiveTab(service.id);
                  if (service.id !== "wordpress-hostinger") {
                    setSpeedScore(45);
                  }
                }}
                className={`flex gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl border-2 sm:border-4 cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                  activeTab === service.id
                    ? "bg-brand-gray dark:bg-[#0c0c0c] border-brand-aqua text-white shadow-xl lg:translate-x-2"
                    : "bg-white dark:bg-[#0c0c0c] border-[#1a1c1c]/10 dark:border-white/10 hover:border-brand-aqua/50 text-brand-gray dark:text-[#f9f9f9]"
                }`}
              >
                <div className="p-2.5 sm:p-3 bg-brand-gray/5 dark:bg-white/5 rounded-xl border border-brand-gray/10 dark:border-white/10 group-hover:scale-110 transition-transform shrink-0">
                  {getIcon(service.iconName)}
                </div>
                <div className="flex flex-col justify-center py-1">
                  <h4 className="font-display text-md sm:text-lg font-black uppercase leading-tight tracking-tight">
                    {service.shortTitle}
                  </h4>
                  <span className="font-mono text-xs text-brand-aqua font-semibold mt-1">
                    {service.stats.value} {service.stats.label.split(" ").slice(0, 1).join(" ")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL: Immersive Details Sandbox Viewer (7 cols) */}
          <div className="col-span-12 lg:col-span-7 bg-white dark:bg-[#0c0c0c] border-2 sm:border-4 border-brand-gray dark:border-white rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Live sandbox animation backdrop gradient hint */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>

            <div className="space-y-6 flex-grow flex flex-col justify-between">
              {/* Header info */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-brand-aqua">
                    DELIVERY PROMISE
                  </span>
                  <span className="font-mono text-[10px] uppercase bg-brand-gray dark:bg-white text-white dark:text-black px-2.5 py-0.5 font-bold rounded-sm">
                    VERIFIED STRATEGY
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase mt-4 mb-2 tracking-tight text-brand-gray dark:text-brand-light">
                  {currentService.title}
                </h3>
                <p className="font-mono text-xs font-semibold text-brand-lime tracking-wide italic mb-4">
                  “{currentService.tagline}”
                </p>
                <p className="font-sans text-sm sm:text-base text-brand-gray/80 dark:text-brand-light/80 leading-relaxed mb-6">
                  {currentService.description}
                </p>
              </div>

              {/* Sub-Interactive Showcase: Specialized visual playground for each bento field */}
              <div id="interactive-preview" className="bg-[#f9f9f9] dark:bg-[#111111] p-4 sm:p-5 rounded-2xl border border-brand-gray/10 dark:border-white/10 my-4 flex-grow">
                {activeTab === "wordpress-hostinger" ? (
                  /* WordPress Hostinger Speed simulator */
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black uppercase text-brand-gray dark:text-white tracking-widest flex items-center gap-1.5">
                        <Zap size={14} className="text-brand-aqua" /> CORE WEB VITALS GAUGE
                      </span>
                      <span className="font-mono text-[9px] font-semibold text-brand-gray/50 dark:text-white/50">SPEED METRIC</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-2">
                      <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="55"
                            cy="55"
                            r="38"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-brand-gray/10 dark:text-white/10"
                          />
                          <circle
                            cx="55"
                            cy="55"
                            r="38"
                            stroke={speedScore > 85 ? "#22c55e" : speedScore > 65 ? "#eab308" : "#00ccd6"}
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray="238"
                            strokeDashoffset={238 - (238 * speedScore) / 100}
                            style={{ transition: "stroke-dashoffset 0.3s" }}
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="font-display text-2xl font-black text-brand-gray dark:text-white">{speedScore}</span>
                          <span className="font-mono text-[8px] uppercase tracking-wider text-brand-gray/50 dark:text-white/40">FAST GRADE</span>
                        </div>
                      </div>

                      <div className="flex-1 space-y-3 w-full">
                        <div className="space-y-1">
                          <div className="flex justify-between font-mono text-[10px] text-brand-gray/70 dark:text-white/70">
                            <span>Largest Contentful Paint</span>
                            <span className="font-bold text-brand-aqua">{speedScore > 85 ? "0.4s (Good)" : "3.8s (Poor)"}</span>
                          </div>
                          <div className="w-full h-1.5 bg-brand-gray/20 dark:bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-300 ${speedScore > 85 ? "bg-green-500" : "bg-brand-aqua"}`}
                              style={{ width: `${speedScore}%` }}
                            ></div>
                          </div>
                        </div>

                        <button
                          onClick={handleOptimizationPress}
                          disabled={speedScore >= 100 || optimizing}
                          className={`w-full py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer ${
                            speedScore >= 100
                              ? "bg-green-500 text-white cursor-not-allowed"
                              : "bg-brand-gray hover:bg-brand-aqua dark:bg-white dark:hover:bg-brand-aqua text-white dark:text-black hover:text-black dark:hover:text-black"
                          }`}
                        >
                          {optimizing ? "PURGING SOURCE BLOAT..." : speedScore >= 100 ? "✓ ENGINE FULLY OPTIMIZED" : "EXECUTE WP TUNING SPEED"}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : activeTab === "seo-optimization" ? (
                  /* Search keyword cluster flows representation */
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black uppercase text-brand-gray dark:text-white tracking-widest flex items-center gap-1.5">
                        <Compass size={14} className="text-brand-aqua" /> ACTIVE ORGANIC TOPOLOGY MAP
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-green-500 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-ping"></span> TRACKED
                      </div>
                    </div>
                    
                    {/* Responsive Grid configurations for mobile viewports */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 py-1">
                      {[
                        { title: "wordpress speed seo", volume: "4.2K/mo", difficulty: "25/" },
                        { title: "hostinger speed tuning", volume: "1.8K/mo", difficulty: "12/" },
                        { title: "increase ecommerce sales", volume: "14K/mo", difficulty: "48/" },
                        { title: "meta ads consulting", volume: "2.1K/mo", difficulty: "15/" },
                        { title: "how to rank on page 1", volume: "22K/mo", difficulty: "34/" },
                        { title: "high performance landing design", volume: "3.5K/mo", difficulty: "18/" }
                      ].map((node, index) => (
                        <div key={index} className="bg-white dark:bg-[#1a1a1a] p-3 border border-brand-gray/5 dark:border-white/5 rounded-xl flex flex-col justify-between">
                          <span className="font-mono text-[8px] text-brand-aqua uppercase font-bold tracking-wide">VECTOR #{index+1}</span>
                          <p className="font-sans text-[11px] font-extrabold text-brand-gray dark:text-white capitalize leading-tight mt-1 line-clamp-1">
                            {node.title}
                          </p>
                          <div className="flex justify-between items-center font-mono text-[9px] text-brand-gray/50 dark:text-white/40 mt-3 border-t border-brand-gray/5 dark:border-white/5 pt-1.5">
                            <span>Vol: {node.volume}</span>
                            <span className="text-green-500 font-bold">SD: {node.difficulty}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : activeTab === "paid-marketing" ? (
                  /* Ads campaign details */
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs font-black uppercase text-brand-gray dark:text-white tracking-widest flex items-center gap-1.5">
                      <Shield size={14} className="text-brand-aqua" /> ADS CAMPAIGN ROI METRICS
                    </span>
                    
                    <div className="space-y-2.5 py-1">
                      {[
                        { claim: "Targeting Buyer Intent Profile", desc: "Placing ads in front of users actively searching or expressing clear purchasing interest." },
                        { claim: "Persuasive Creative Copywriting", desc: "No word soup. We write straightforward headings that highlight core user benefits instantly." },
                        { claim: "Continuous Scaling Tests", desc: "Monitoring and pruning low-converting audiences to lower the client acquisition expense." }
                      ].map((point, idx) => (
                        <div key={idx} className="flex gap-3 items-start bg-white dark:bg-[#1a1a1a] p-3 border border-brand-gray/5 dark:border-white/5 rounded-xl">
                          <CheckCircle size={15} className="text-brand-aqua shrink-0 mt-0.5" />
                          <div>
                            <p className="font-sans text-xs font-bold text-brand-gray dark:text-white">{point.claim}</p>
                            <p className="font-sans text-[10px] text-brand-gray/60 dark:text-brand-light/60">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* UI UX / Landing Page search SGE mock preview */
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs font-black uppercase text-brand-gray dark:text-white tracking-widest flex items-center gap-1.5">
                      <Search size={14} className="text-brand-aqua" /> MODERN SEARCH PREVIEW
                    </span>

                    <div className="bg-white dark:bg-[#1c1c1c] p-4 rounded-xl border border-brand-gray/10 dark:border-white/5 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gradient-to-tr from-[#00ccd6] to-emerald-400 rounded-full animate-pulse"></div>
                        <p className="font-mono text-[9px] text-brand-gray/40 dark:text-white/40 uppercase">AI CITATION HOOK ENGINE</p>
                      </div>
                      <p className="font-sans text-xs text-brand-gray/90 dark:text-white/90 leading-relaxed italic">
                        &ldquo;High converting landing page layouts require <span className="bg-brand-aqua/15 dark:bg-brand-aqua/30 text-brand-aqua font-semibold px-1 rounded">simple styling rules</span>, balanced screen pacing, and responsive columns.&rdquo;
                      </p>
                      <div className="flex gap-2 items-center pt-2 border-t border-brand-gray/10 dark:border-white/5">
                        <span className="font-mono text-[9px] text-brand-aqua font-bold">SOURCE:</span>
                        <span className="font-mono text-[9px] bg-brand-gray/10 dark:bg-white/10 px-2 py-0.5 text-brand-gray/80 dark:text-white/80 rounded uppercase">
                          genzency.co/landing-ui
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tactical Process Milestones */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] font-black uppercase tracking-wider text-brand-gray/40 dark:text-white/30 block">
                  TACTICAL DELIVERY WORKLINE
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentService.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="border-t-2 border-brand-gray dark:border-white pt-2"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-brand-aqua">0{idx + 1}</span>
                        <h5 className="font-display text-xs font-bold uppercase tracking-tight text-brand-gray dark:text-[#f9f9f9] line-clamp-1">
                          {step.title}
                        </h5>
                      </div>
                      <p className="font-sans text-[10px] text-brand-gray/60 dark:text-brand-light/60 leading-normal mt-1 block">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final stats summary block */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-brand-gray/10 dark:border-white/10 gap-4 mt-4 shrink-0">
                <div>
                  <span className="font-mono text-[10px] text-brand-gray/40 dark:text-white/40 block uppercase">TYPICAL OUTCOME STATS</span>
                  <span className="font-display text-lg font-black uppercase text-brand-aqua">
                    {currentService.stats.value} {currentService.stats.label}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const target = document.getElementById("estimation");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-display text-xs font-extrabold uppercase bg-brand-gray dark:bg-white text-white dark:text-black py-3.5 px-6 rounded-xl hover:bg-brand-aqua dark:hover:bg-brand-aqua hover:text-black dark:hover:text-black transition-colors cursor-pointer w-full md:w-auto text-center shadow-md"
                >
                  INQUIRE NOW
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
