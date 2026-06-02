"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, LineChart, Search, Sparkles } from "lucide-react";
import PageSparkleBg from "@/components/decor/PageSparkleBg";
import type { PageContent, StackSection } from "@/content/pages";
import { CONTACT_HREF } from "@/lib/navigation";

const fallbackImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900",
];

function getSectionImage(section: StackSection, index: number) {
  return section.image ?? fallbackImages[index % fallbackImages.length];
}

export default function PageTemplate({ content }: { content: PageContent }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-page-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={rootRef}
      className="page-enter relative w-full max-w-[100vw] overflow-x-hidden bg-[#f9f9f9] text-brand-gray dark:bg-[#0a0a0a] dark:text-[#f9f9f9]"
    >
      <section className="hero-perspective relative flex min-h-[88dvh] w-full items-center overflow-hidden px-[clamp(0.9rem,4vw,2rem)] pt-[clamp(6rem,14vw,8rem)] pb-[clamp(2rem,7vw,5rem)]">
        <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-6 opacity-[0.035] dark:opacity-[0.06] sm:grid-cols-12">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="border-r border-[#1a1c1c] dark:border-[#00ff88]" />
          ))}
        </div>
        <PageSparkleBg />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:items-center">
          <div className="hero-stage relative min-w-0">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[clamp(10rem,55vw,27rem)] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] opacity-80">
              <Image
                src="/cherry-blossom.png"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 70vw, 27rem"
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <span className="inline-flex max-w-full items-center gap-2 font-mono text-[0.68rem] font-bold tracking-widest text-brand-aqua uppercase sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#ff4cb4]" />
                <span className="min-w-0 break-words">{content.heroTag}</span>
              </span>

              <h1
                className="mt-4 max-w-[12ch] text-pretty break-words font-display font-black uppercase leading-[0.88] tracking-tighter text-[#085a2e] dark:text-[#00ff88]"
                style={{ fontSize: "clamp(2.5rem, 11vw, 7rem)" }}
              >
                {content.heroTitle}
              </h1>

              <p className="mt-5 max-w-xl text-pretty font-sans text-sm font-semibold leading-relaxed text-brand-gray/80 dark:text-emerald-100/90 sm:text-base lg:text-lg">
                {content.heroSubtitle}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={CONTACT_HREF}
                  prefetch
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-gray px-6 py-3 font-display text-xs font-black tracking-wider text-white uppercase transition duration-200 hover:-translate-y-0.5 hover:bg-brand-lime hover:text-black focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:ring-offset-2 focus:ring-offset-[#f9f9f9] active:translate-y-0 dark:bg-white dark:text-[#052e16] dark:hover:bg-[#00ff88] dark:focus:ring-offset-[#0a0a0a]"
                >
                  Get free audit <Sparkles size={15} />
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-gray/20 bg-white/60 px-5 py-3 font-mono text-[0.68rem] font-bold tracking-widest text-brand-gray/65 uppercase transition duration-200 hover:-translate-y-0.5 hover:border-brand-aqua hover:text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-aqua dark:border-white/15 dark:bg-white/5 dark:text-white/70"
                >
                  Back to home <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <aside
            data-page-reveal
            className="reveal-section relative min-h-[20rem] overflow-hidden rounded-[1.35rem] border-2 border-brand-gray bg-white shadow-[0_22px_60px_rgba(0,0,0,0.12)] dark:border-white dark:bg-white/10 dark:shadow-[0_22px_60px_rgba(0,255,136,0.08)] sm:min-h-[27rem]"
          >
            <Image
              src={content.heroImage}
              alt={`${content.heroTitle} service visual`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/20 bg-white/12 p-2 text-white backdrop-blur-md">
                {["Audit", "Build", "Rank"].map((item) => (
                  <div key={item} className="rounded-xl bg-white/12 px-3 py-3 text-center">
                    <p className="font-mono text-[0.62rem] font-bold uppercase tracking-widest text-white/65">{item}</p>
                    <p className="mt-1 font-display text-sm font-black uppercase sm:text-base">SEO</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative border-y border-brand-gray/10 bg-white/65 px-4 py-6 dark:border-white/10 dark:bg-white/[0.035] sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          {[
            ["01", "Search audit", "Find crawl, content, and conversion leaks."],
            ["02", "Priority sprint", "Ship fixes that can move leads fastest."],
            ["03", "Growth reporting", "Track rankings, qualified traffic, and revenue."],
          ].map(([step, title, body]) => (
            <div key={step} className="flex min-w-0 items-start gap-3 py-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff4cb4] font-mono text-[0.68rem] font-black text-white">
                {step}
              </span>
              <div className="min-w-0">
                <h2 className="font-display text-sm font-black uppercase text-brand-gray dark:text-white">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-brand-gray/65 dark:text-white/60">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-14 dark:bg-[#0a0a0a] sm:px-6 sm:py-20">
        <PageSparkleBg variant="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div data-page-reveal className="reveal-section max-w-3xl">
            <span className="font-mono text-[0.68rem] font-bold tracking-widest text-[#ff4cb4] uppercase">
              // What we ship
            </span>
            <h2 className="mt-3 text-pretty font-display text-3xl font-black uppercase leading-[0.95] tracking-tighter text-brand-gray dark:text-white sm:text-5xl">
              Useful SEO work, packaged for this exact service.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {content.sections.map((section, index) => {
              const Icon = index === 0 ? Search : index === 1 ? CheckCircle2 : LineChart;
              return (
                <article
                  key={`${section.eyebrow}-${section.title}`}
                  data-page-reveal
                  className="reveal-section group flex min-w-0 flex-col overflow-hidden rounded-[1.15rem] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 dark:bg-white/[0.07] dark:shadow-none"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-gray/10">
                    <Image
                      src={getSectionImage(section, index)}
                      alt={`${section.title} visual`}
                      fill
                      sizes="(max-width: 1024px) 92vw, 30vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md">
                      <Icon size={19} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="font-mono text-[0.68rem] font-bold tracking-widest text-brand-aqua uppercase">
                      {section.eyebrow}
                    </span>
                    <h3 className="mt-3 text-pretty break-words font-display text-2xl font-black uppercase leading-none tracking-tighter text-brand-gray dark:text-white">
                      {section.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-brand-gray/70 dark:text-white/65">{section.body}</p>

                    {section.bullets && (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex min-w-0 items-start gap-2 text-sm font-semibold text-brand-gray/80 dark:text-white/75">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4cb4]" />
                            <span className="min-w-0 break-words">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-gray px-4 py-14 text-white dark:bg-[#052e16] sm:px-6 sm:py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={content.heroImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-gray/85 dark:bg-[#052e16]/88" />
        <div data-page-reveal className="reveal-section relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="min-w-0">
            <span className="font-mono text-[0.68rem] font-bold tracking-widest text-brand-aqua uppercase">
              // Next step
            </span>
            <h2 className="mt-3 max-w-3xl text-pretty font-display text-3xl font-black uppercase leading-[0.95] tracking-tighter sm:text-5xl">
              Ready for SEO pages that rank and convert?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Send your URL. We map technical fixes, content opportunities, and revenue actions before you spend.
            </p>
          </div>
          <Link
            href={CONTACT_HREF}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-display text-xs font-black tracking-wider text-[#052e16] uppercase transition duration-200 hover:-translate-y-0.5 hover:bg-brand-lime focus:outline-none focus:ring-2 focus:ring-brand-aqua active:translate-y-0"
          >
            Book SEO audit <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
