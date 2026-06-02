"use client";

import Hero from "@/components/Hero";
import ResultsBanner from "@/components/ResultsBanner";
import Work from "@/components/Work";
import Expertise from "@/components/Expertise";
import Insights from "@/components/Insights";
import InteractiveCalculator from "@/components/InteractiveCalculator";

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="relative max-w-[100vw] overflow-x-hidden bg-[#f9f9f9] text-brand-gray dark:bg-[#0a0a0a] dark:text-[#f9f9f9]">
      <Hero scrollToSection={scrollToSection} />
      <ResultsBanner />
      <Work />
      <Expertise />
      <Insights />
      <InteractiveCalculator />
    </div>
  );
}
