/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResultsBanner from "./components/ResultsBanner";
import Work from "./components/Work";
import Expertise from "./components/Expertise";
import Insights from "./components/Insights";
import InteractiveCalculator from "./components/InteractiveCalculator";
import Footer from "./components/Footer";

export default function App() {
  // Initialize dark mode state, defaulting to 'true' to fit the high-contrast premium mood
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved !== "light"; // Defaults to true if empty, or respects stored value
  });

  const [activeSection, setActiveSection] = useState<string>("hero");

  // Sync dark mode class with DOM element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Track scroll position to update active navbar links dynamically
  useEffect(() => {
    const sections = ["hero", "work", "expertise", "insights", "estimation"];
    
    // Set up viewport thresholds
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Focus triggers in the primary section center
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth click scroll anchor logic
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate top padding adjustment because of sticky navbar
      const navbarOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-brand-gray dark:bg-[#0a0a0a] dark:text-[#f9f9f9] transition-colors duration-300 overflow-x-hidden">
      {/* Dynamic Glassmorphism Nav Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Narrative Block */}
      <Hero scrollToSection={scrollToSection} />

      {/* Results Banner Section */}
      <ResultsBanner />

      {/* Selected Works - Portfolio & Metrics */}
      <Work />

      {/* Core Capability Bento Grid */}
      <Expertise />

      {/* Editorial Intel and Research Blogs */}
      <Insights />

      {/* Organic Calculation ROI Estimations Widget */}
      <InteractiveCalculator />

      {/* Elegant Brutalist Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
