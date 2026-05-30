/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUp, Github, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-[#fafafa] dark:bg-[#0a0a0a] text-brand-gray dark:text-white border-t-4 border-brand-aqua py-16 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 items-start pb-12 border-b border-brand-gray/10 dark:border-white/10">
          
          {/* Brand Left Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-6 space-y-6">
            <h2
              onClick={() => scrollToSection("hero")}
              className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter cursor-pointer text-brand-gray dark:text-white hover:text-brand-aqua transition-colors"
            >
              GENZENCY
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-brand-gray/60 dark:text-white/50 leading-relaxed max-w-sm font-semibold">
              A PREMIUM DIGITAL MARKETING & SEARCH ENGINE OPTIMIZATION AGENCY. DELIVERING REAL GOOGLE RANKINGS, SEO AUDITS, COMPREHENSIVE META PERFORMANCE CAMPAIGNS, AND MODERN SPEED OPTIMIZATION.
            </p>

            <div className="font-mono text-xs text-brand-aqua font-bold">
              © {new Date().getFullYear()} GENZENCY. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Socials Connection */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <span className="font-mono text-xs text-brand-aqua font-black uppercase tracking-widest block">
              // CONNECT
            </span>
            <ul className="space-y-2 font-mono text-xs text-brand-gray/70 dark:text-white/60">
              <li>
                <a href="#twitter" className="hover:text-brand-aqua transition-colors flex items-center gap-1.5 font-bold uppercase">
                  <Twitter size={12} /> Twitter // X
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-brand-aqua transition-colors flex items-center gap-1.5 font-bold uppercase">
                  <Instagram size={12} /> Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-brand-aqua transition-colors flex items-center gap-1.5 font-bold uppercase">
                  <Linkedin size={12} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-brand-aqua transition-colors flex items-center gap-1.5 font-bold uppercase">
                  <Github size={12} /> Github Project
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <span className="font-mono text-xs text-brand-aqua font-black uppercase tracking-widest block">
              // LEGAL INQUIRIES
            </span>
            <ul className="space-y-2 font-mono text-xs text-brand-gray/70 dark:text-white/60 font-bold uppercase">
              <li>
                <a href="#privacy" className="hover:text-brand-aqua transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-brand-aqua transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#dmca" className="hover:text-brand-aqua transition-colors">
                  Compliance Licensing
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and To Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-brand-gray/40 dark:text-white/40 font-mono text-[10px] uppercase">
            SEO Performance Agency Portfolio
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group p-3 bg-brand-gray/5 dark:bg-white/5 border border-brand-gray/15 dark:border-white/10 hover:border-brand-aqua text-brand-gray dark:text-white hover:bg-brand-aqua hover:text-black transition-all rounded-xl flex items-center gap-2 cursor-pointer"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              RETURN TO TOP
            </span>
            <motion.span
              animate={{ y: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowUp size={14} />
            </motion.span>
          </button>
        </div>

      </div>
    </footer>
  );
}
