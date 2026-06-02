"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Instagram, Github } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-brand-aqua/40 bg-[#fafafa] py-8 text-brand-gray transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-5 border-b border-brand-gray/10 pb-6 text-center sm:flex-row sm:text-left dark:border-white/10">
          <div>
            <Link href="/" className="inline-block text-brand-gray dark:text-white transition-opacity hover:opacity-90">
              <Image
                src="/logo-2.png"
                alt="GENZENCY Logo"
                width={170}
                height={34}
                className="h-8 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="mt-1 font-mono text-[10px] font-bold tracking-widest text-brand-gray/45 uppercase dark:text-white/40">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex gap-3 text-brand-gray/65 dark:text-white/60">
            <a href="https://instagram.com" className="rounded-full border border-brand-gray/10 p-2 transition-colors hover:border-brand-aqua hover:text-brand-aqua dark:border-white/10" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="https://github.com" className="rounded-full border border-brand-gray/10 p-2 transition-colors hover:border-brand-aqua hover:text-brand-aqua dark:border-white/10" aria-label="GitHub">
              <Github size={17} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center pt-5 sm:justify-end">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-brand-gray/15 bg-brand-gray/5 px-4 py-2 transition-all hover:border-brand-aqua hover:bg-brand-aqua hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <span className="font-mono text-[10px] font-bold tracking-wider uppercase">Top</span>
            <span className="animate-bounce-arrow inline-block">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
