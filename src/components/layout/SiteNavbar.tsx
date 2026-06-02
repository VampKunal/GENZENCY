"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";
import { CONTACT_HREF, NAV_MENUS, type NavMenu } from "@/lib/navigation";

export default function SiteNavbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenuId(null);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-[60] hidden border-b border-white/10 bg-[#0a0a0a]/95 px-4 py-1.5 text-[10px] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-3 font-mono font-semibold tracking-wide">
          <a href="tel:+919212521444" className="flex items-center gap-1 hover:text-brand-aqua">
            <Phone size={11} /> +91-92125 21444
          </a>
          <span className="text-white/25">|</span>
          <Link href={CONTACT_HREF} className="hover:text-brand-aqua">
            Contact Us
          </Link>
        </div>
      </div>

      <header className="pointer-events-none fixed top-3 right-0 left-0 z-50 max-w-[100vw] sm:top-4 lg:top-9">
        <div className="pointer-events-auto mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <nav
            className={`max-w-full overflow-visible rounded-xl border transition-all duration-300 sm:rounded-2xl ${
              scrolled
                ? "glass-nav border-brand-gray/20 py-3 px-4 shadow-lg dark:border-white/10 sm:px-6"
                : "border-brand-gray/5 bg-white/70 py-4 px-4 backdrop-blur-md dark:border-white/10 dark:bg-black/60 sm:px-6"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                className="min-w-0 shrink font-display text-lg font-black tracking-tighter text-brand-gray uppercase dark:text-brand-light sm:text-2xl"
              >
                <span className="flex items-center gap-1">
                  <span className="truncate">GENZENCY</span>
                  <span className="inline-block h-2 w-2 shrink-0 bg-brand-aqua sm:h-2.5 sm:w-2.5" />
                </span>
              </Link>

              <div className="hidden min-w-0 items-center gap-0.5 xl:flex">
                {NAV_MENUS.map((menu) => (
                  <MegaMenuTrigger
                    key={menu.id}
                    menu={menu}
                    isOpen={openMenuId === menu.id}
                    onOpen={() => setOpenMenuId(menu.id)}
                    onClose={() => setOpenMenuId(null)}
                  />
                ))}
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="cursor-pointer rounded-xl bg-brand-gray/10 p-2 text-brand-gray transition-all hover:bg-brand-aqua hover:text-black dark:bg-brand-light/10 dark:text-brand-light"
                  aria-label="Toggle theme"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <Link
                  href={CONTACT_HREF}
                  className="group inline-flex items-center justify-center rounded-xl bg-brand-aqua px-5 py-2.5 font-display text-xs font-semibold tracking-wider text-black uppercase transition-colors hover:bg-brand-lime"
                >
                  Contact Us
                  <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:rotate-45" />
                </Link>
              </div>

              <div className="flex items-center gap-2 md:hidden">
                <button type="button" onClick={toggleDarkMode} className="rounded-xl p-2 text-brand-gray dark:text-white" aria-label="Toggle theme">
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="rounded-xl p-2 text-brand-gray dark:text-white" aria-label="Menu">
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {mounted &&
        openMenuId &&
        createPortal(
          <MegaMenuPortal
            menu={NAV_MENUS.find((m) => m.id === openMenuId)!}
            onClose={() => setOpenMenuId(null)}
          />,
          document.body
        )}

      {mobileOpen && (
        <div className="fixed inset-0 z-40 max-w-[100vw] overflow-x-hidden overflow-y-auto bg-white/95 px-5 pt-28 pb-10 backdrop-blur-2xl md:hidden dark:bg-[#0a0a0a]/98">
          {NAV_MENUS.map((menu) => (
            <div key={menu.id} className="mb-8 border-b border-brand-gray/10 pb-6 dark:border-white/10">
              <p className="mb-3 font-mono text-[10px] font-bold tracking-widest text-brand-aqua uppercase">{menu.label}</p>
              <ul className="space-y-3">
                {menu.columns.flatMap((c) => c.links).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="block font-display text-2xl font-black text-brand-gray uppercase hover:text-brand-aqua sm:text-3xl dark:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href={CONTACT_HREF}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-aqua py-4 font-display text-sm font-black text-black uppercase"
          >
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </>
  );
}

function MegaMenuTrigger({
  menu,
  isOpen,
  onOpen,
}: {
  menu: NavMenu;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      className={`flex cursor-pointer items-center gap-1 px-3 py-2 font-sans text-sm font-semibold tracking-wide uppercase transition-colors ${
        isOpen ? "text-brand-aqua" : "text-brand-gray/70 hover:text-brand-aqua dark:text-brand-light/70"
      }`}
    >
      {menu.label}
      <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
  );
}

function MegaMenuPortal({ menu, onClose }: { menu: NavMenu; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{ top: number; left: number; width: number }>({
    top: 88,
    left: 16,
    width: 880,
  });

  const positionPanel = useCallback(() => {
    const nav = document.querySelector("header nav");
    if (!nav) return;
    const rect = nav.getBoundingClientRect();
    const width = Math.min(880, window.innerWidth - 24);
    const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
    setStyle({ top: rect.bottom + 2, left, width });
  }, []);

  useEffect(() => {
    positionPanel();
    window.addEventListener("resize", positionPanel);
    window.addEventListener("scroll", positionPanel, { passive: true });
    return () => {
      window.removeEventListener("resize", positionPanel);
      window.removeEventListener("scroll", positionPanel);
    };
  }, [positionPanel]);

  return (
    <div className="fixed inset-0 z-[70] pointer-events-none">
      <div
        ref={panelRef}
        className="pointer-events-auto absolute max-h-[min(80vh,520px)] overflow-x-hidden overflow-y-auto rounded-2xl border-2 border-brand-gray/10 bg-white shadow-2xl dark:border-white/15 dark:bg-[#111]"
        style={{ top: style.top, left: style.left, width: style.width, maxWidth: "calc(100vw - 24px)" }}
        onMouseLeave={onClose}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="space-y-5 p-6 md:col-span-7">
            {menu.columns.map((col) => (
              <div key={col.title}>
                <h3 className="border-b-2 border-brand-aqua pb-2 font-display text-xs font-black tracking-wide text-brand-gray uppercase dark:text-white">
                  {col.title}
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group block font-sans text-sm font-semibold text-brand-gray hover:text-brand-aqua dark:text-white"
                      >
                        {link.label}
                        {link.description && (
                          <span className="mt-0.5 block text-xs font-normal text-brand-gray/50 dark:text-white/45">
                            {link.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href={menu.featured.href}
            onClick={onClose}
            className="group flex flex-col border-t border-brand-gray/10 bg-[#f9f9f9] p-5 md:col-span-5 md:border-t-0 md:border-l dark:border-white/10 dark:bg-[#0a0a0a]"
          >
            <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
              <Image src={menu.featured.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="360px" />
            </div>
            <p className="font-display text-base leading-snug font-bold text-brand-gray group-hover:text-brand-aqua dark:text-white">
              {menu.featured.title}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] font-bold text-brand-aqua uppercase">
              {menu.featured.cta} <ArrowUpRight size={12} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
