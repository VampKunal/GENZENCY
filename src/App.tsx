/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResultsBanner from "./components/ResultsBanner";
import Work from "./components/Work";
import Expertise from "./components/Expertise";
import Insights from "./components/Insights";
import InteractiveCalculator from "./components/InteractiveCalculator";
import Footer from "./components/Footer";

// Smooth scrolling and animations integration
import Lenis from "lenis";
import Snap from "lenis/snap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Initialize dark mode state, defaulting to 'true' to fit the high-contrast premium mood
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved !== "light"; // Defaults to true if empty, or respects stored value
  });

  const [activeSection, setActiveSection] = useState<string>("hero");
  const lenisRef = useRef<Lenis | null>(null);

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

  // Set up Lenis smooth scrolling and snapping
  useEffect(() => {
    // Instantiate Lenis smooth scroll on root window
    const lenis = new Lenis({
      syncTouch: true,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    // Connect ScrollTrigger updates with Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP ticker with Lenis requestAnimationFrame
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Set up Lenis Scroll Snapping
    const snap = new Snap(lenis, {
      type: "proximity",
      distanceThreshold: "25%",
      debounce: 300,
      duration: 0.85,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    // Register snap targets
    const targetIds = ["hero", "results", "work", "expertise", "insights", "estimation"];
    const elements = targetIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    snap.addElements(elements, {
      align: ["start", "start"],
    });

    return () => {
      lenis.destroy();
      snap.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

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

  // Smooth click scroll anchor logic using Lenis
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, {
          offset: -90,
          immediate: false,
          duration: 1.2,
        });
      } else {
        const navbarOffset = 90;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
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
