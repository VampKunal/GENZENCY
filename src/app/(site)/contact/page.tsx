"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Globe, ArrowRight } from "lucide-react";
import { CONTACT_PAGE } from "@/content/pages";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const url = String(data.get("url") ?? "");
    const email = String(data.get("email") ?? "");
    if (!url.includes(".") || url.length < 5) {
      setError("Enter a valid website URL.");
      return;
    }
    if (!email.includes("@")) {
      setError("Enter a valid business email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <section className="relative flex h-[100dvh] max-h-[100dvh] flex-col justify-end overflow-hidden bg-[#0a0a0a] pt-28 pb-16">
        <Image
          src="https://images.unsplash.com/photo-1423666639048-f560003c2af3?auto=format&fit=crop&q=80&w=1600"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
          <span className="font-mono text-xs font-bold text-brand-aqua uppercase">// Contact</span>
          <h1 className="mt-2 font-display text-4xl font-black tracking-tighter text-white uppercase sm:text-6xl">
            {CONTACT_PAGE.heroTitle}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">{CONTACT_PAGE.heroSubtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {submitted ? (
          <div className="rounded-3xl border-2 border-brand-aqua bg-brand-aqua/10 p-10 text-center">
            <h2 className="font-display text-2xl font-black text-brand-gray uppercase dark:text-white">Request received</h2>
            <p className="mt-3 font-sans text-sm text-brand-gray/80 dark:text-white/70">
              Our SEO team will review your site and reply within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border-2 border-brand-gray/15 bg-white p-8 dark:border-white/15 dark:bg-[#111]">
            <div>
              <label className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-brand-aqua uppercase">
                <Globe size={14} /> Website URL
              </label>
              <input
                name="url"
                type="url"
                placeholder="https://yourbrand.com"
                className="w-full rounded-xl border-2 border-brand-gray/20 bg-transparent px-4 py-3 font-sans text-sm outline-none focus:border-brand-aqua dark:border-white/20"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 font-mono text-xs font-bold text-brand-aqua uppercase">
                <Mail size={14} /> Business email
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border-2 border-brand-gray/20 bg-transparent px-4 py-3 font-sans text-sm outline-none focus:border-brand-aqua dark:border-white/20"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs font-bold text-brand-aqua uppercase">Primary goal</label>
              <select
                name="goal"
                className="w-full rounded-xl border-2 border-brand-gray/20 bg-transparent px-4 py-3 font-sans text-sm outline-none focus:border-brand-aqua dark:border-white/20"
              >
                <option value="seo">Improve Google rankings</option>
                <option value="speed">Fix site speed & technical SEO</option>
                <option value="ecommerce">Grow ecommerce organic revenue</option>
                <option value="paid">Scale paid social with better ROAS</option>
              </select>
            </div>
            {error && <p className="font-mono text-xs font-bold text-red-500">{error}</p>}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-aqua py-4 font-display text-sm font-black text-black uppercase hover:bg-brand-lime"
            >
              Submit audit request <ArrowRight size={16} />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
