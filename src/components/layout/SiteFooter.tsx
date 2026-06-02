"use client";

import Link from "next/link";
import { ArrowUp, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { CONTACT_HREF, NAV_MENUS } from "@/lib/navigation";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t-4 border-brand-aqua bg-[#fafafa] py-16 text-brand-gray transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-12 border-b border-brand-gray/10 pb-12 sm:grid-cols-2 md:grid-cols-12 dark:border-white/10">
          <div className="space-y-6 sm:col-span-2 md:col-span-5">
            <Link
              href="/"
              className="font-display text-4xl font-black tracking-tighter uppercase transition-colors hover:text-brand-aqua sm:text-6xl"
            >
              GENZENCY
            </Link>
            <p className="max-w-sm font-sans text-xs font-semibold leading-relaxed text-brand-gray/60 sm:text-sm dark:text-white/50">
              Premium SEO, technical optimization, paid media, and conversion-focused web design.
            </p>
            <p className="font-mono text-xs font-bold text-brand-aqua">
              © {new Date().getFullYear()} GENZENCY. ALL RIGHTS RESERVED.
            </p>
          </div>

          {NAV_MENUS.map((menu) => (
            <div key={menu.id} className="space-y-4 md:col-span-2">
              <span className="block font-mono text-xs font-black tracking-widest text-brand-aqua uppercase">
                // {menu.label}
              </span>
              <ul className="space-y-2 font-mono text-xs font-bold text-brand-gray/70 uppercase dark:text-white/60">
                {menu.columns[0].links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-brand-aqua">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4 md:col-span-3">
            <span className="block font-mono text-xs font-black tracking-widest text-brand-aqua uppercase">
              // Connect
            </span>
            <a href="mailto:growth@genzency.co" className="block font-mono text-xs font-bold hover:text-brand-aqua">
              growth@genzency.co
            </a>
            <Link href={CONTACT_HREF} className="block font-mono text-xs font-bold text-brand-aqua hover:underline">
              Get free audit →
            </Link>
            <div className="flex gap-4 pt-2 text-brand-gray/60 dark:text-white/60">
              <a href="https://twitter.com" className="hover:text-brand-aqua" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com" className="hover:text-brand-aqua" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com" className="hover:text-brand-aqua" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com" className="hover:text-brand-aqua" aria-label="GitHub">
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
          <p className="font-mono text-[10px] text-brand-gray/40 uppercase dark:text-white/40">
            SEO Performance Agency
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex cursor-pointer items-center gap-2 rounded-xl border border-brand-gray/15 bg-brand-gray/5 p-3 transition-all hover:border-brand-aqua hover:bg-brand-aqua hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <span className="font-mono text-xs font-bold tracking-wider uppercase">Return to top</span>
            <span className="animate-bounce-arrow inline-block">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
