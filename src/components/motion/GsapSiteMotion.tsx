"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type GsapLite = {
  fromTo: (targets: unknown, fromVars: Record<string, unknown>, toVars: Record<string, unknown>) => unknown;
  to: (targets: unknown, vars: Record<string, unknown>) => unknown;
  timeline: (vars?: Record<string, unknown>) => {
    fromTo: (targets: unknown, fromVars: Record<string, unknown>, toVars: Record<string, unknown>) => unknown;
  };
};

declare global {
  interface Window {
    gsap?: GsapLite;
  }
}

const GSAP_SRC = "https://cdn.jsdelivr.net/npm/gsap@3.13/dist/gsap.min.js";

function loadGsap(): Promise<GsapLite | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.gsap) return Promise.resolve(window.gsap);

  return new Promise<GsapLite | null>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${GSAP_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(window.gsap ?? null), { once: true });
      existing.addEventListener("error", () => resolve(null), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = GSAP_SRC;
    script.async = true;
    script.onload = () => resolve(window.gsap ?? null);
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
}

export default function GsapSiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup = () => {};
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return cleanup;

    loadGsap().then((gsap) => {
      if (!gsap) return;

      const heroItems = document.querySelectorAll("[data-gsap-hero]");
      gsap.fromTo(
        heroItems,
        { autoAlpha: 0, y: 34, filter: "blur(10px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.09, ease: "power3.out" }
      );

      const floaters = document.querySelectorAll("[data-gsap-float]");
      floaters.forEach((item, index) => {
        gsap.to(item, {
          y: index % 2 ? -16 : 16,
          x: index % 2 ? 10 : -10,
          rotate: index % 2 ? 4 : -4,
          duration: 3.8 + index * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      const revealItems = document.querySelectorAll<HTMLElement>(
        "section:not(#hero), footer, [data-page-reveal], [data-gsap-reveal]"
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            gsap.fromTo(
              entry.target,
              { autoAlpha: 0, y: 46 },
              { autoAlpha: 1, y: 0, duration: 0.82, ease: "power3.out" }
            );
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      revealItems.forEach((item) => observer.observe(item));
      cleanup = () => observer.disconnect();
    });

    return () => cleanup();
  }, [pathname]);

  return null;
}
