/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { gsap } from "gsap";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
  scrollToSection,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // GSAP animation for mobile menu items on opening
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      const items = mobileMenuRef.current.querySelectorAll(".menu-animate-item");
      gsap.killTweensOf(items);
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.1,
        }
      );
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Work", id: "work" },
    { name: "Expertise", id: "expertise" },
    { name: "Insights", id: "insights" },
    { name: "Estimation", id: "estimation" },
  ];

  const handleMobileNavClick = (id: string) => {
    setMobileMenuOpen(false);
    // Slight timeout to let the menu collapse animation feel organic before page scrolls
    setTimeout(() => {
      scrollToSection(id);
    }, 150);
  };

  return (
    <>
      <nav
        id="top-navbar"
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-lg border-brand-gray/20 dark:border-white/10 py-3 px-6"
            : "bg-white/50 dark:bg-black/50 border-brand-gray/5 dark:border-white/5 py-4 px-6 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            id="navbar-logo"
            onClick={() => {
              if (mobileMenuOpen) setMobileMenuOpen(false);
              scrollToSection("hero");
            }}
            className="font-display text-2xl font-black uppercase tracking-tighter cursor-pointer flex items-center gap-1 text-brand-gray dark:text-brand-light z-50"
          >
            GENZENCY
            <span className="w-2.5 h-2.5 bg-brand-aqua inline-block"></span>
          </div>

          {/* Desktop Links */}
          <div id="desktop-nav-menu" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-sm font-semibold tracking-wide uppercase relative py-1 px-1 transition-colors duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-brand-aqua"
                    : "text-brand-gray/70 dark:text-brand-light/70 hover:text-brand-aqua dark:hover:text-brand-aqua"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-aqua" />
                )}
              </button>
            ))}
          </div>

          {/* Action Controls */}
          <div id="nav-action-controls" className="hidden md:flex items-center gap-5">
            {/* Light/Dark Toggle */}
            <button
              id="theme-toggler"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-brand-gray/10 dark:bg-brand-light/10 text-brand-gray dark:text-brand-light hover:bg-brand-aqua hover:text-black transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Call to action */}
            <button
              id="get-started-button"
              onClick={() => scrollToSection("estimation")}
              className="group relative inline-flex items-center justify-center bg-brand-aqua hover:bg-brand-lime text-black py-2.5 px-6 font-display font-semibold text-xs uppercase tracking-wider transition-colors overflow-hidden rounded-xl cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1">
                GET FREE AUDIT <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile controls */}
          <div id="mobile-nav-toggle" className="flex items-center gap-3 md:hidden z-50">
            <button
              id="theme-toggler-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-brand-gray/10 dark:bg-brand-light/10 text-brand-gray dark:text-brand-light cursor-pointer"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              id="menu-toggle-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-brand-gray/10 dark:bg-brand-light/10 text-brand-gray dark:text-brand-light cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Full-Screen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col justify-between pt-36 pb-12 px-8 sm:px-12 md:hidden"
        >
          {/* Decorative Guideline grid inside drawer */}
          <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-[0.02] dark:opacity-[0.04] z-0">
            <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
            <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
            <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
            <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
            <div className="col-span-1 border-r border-[#1a1c1c] dark:border-white"></div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 relative z-10 my-auto">
            <span className="font-mono text-[10px] text-brand-aqua font-bold tracking-widest uppercase mb-2 block menu-animate-item">
              // SECTION EXPLORER
            </span>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleMobileNavClick(link.id)}
                className={`font-display text-4xl sm:text-5xl font-black uppercase text-left tracking-tighter transition-colors block menu-animate-item ${
                  activeSection === link.id
                    ? "text-brand-aqua"
                    : "text-brand-gray dark:text-white hover:text-brand-aqua"
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleMobileNavClick("estimation")}
              className="mt-6 inline-flex items-center gap-2 bg-brand-aqua hover:bg-brand-lime text-black font-display font-black text-xs tracking-wider uppercase py-4 px-8 rounded-2xl shadow-lg transition-colors menu-animate-item max-w-xs justify-center"
            >
              GET FREE AUDIT <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Drawer Footer Details */}
          <div className="border-t border-brand-gray/10 dark:border-white/10 pt-8 relative z-10 grid grid-cols-2 gap-6 menu-animate-item shrink-0">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-brand-gray/40 dark:text-white/40 uppercase block">DIRECT CHANNEL</span>
              <a href="mailto:growth@genzency.co" className="font-mono text-xs font-bold text-brand-gray dark:text-brand-light hover:text-brand-aqua block">
                growth@genzency.co
              </a>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[9px] text-brand-gray/40 dark:text-white/40 uppercase block">SOCIAL CONNECT</span>
              <div className="flex gap-4 text-brand-gray/60 dark:text-brand-light/60">
                <a href="#twitter" className="hover:text-brand-aqua transition-colors"><Twitter size={16} /></a>
                <a href="#instagram" className="hover:text-brand-aqua transition-colors"><Instagram size={16} /></a>
                <a href="#linkedin" className="hover:text-brand-aqua transition-colors"><Linkedin size={16} /></a>
                <a href="#github" className="hover:text-brand-aqua transition-colors"><Github size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
