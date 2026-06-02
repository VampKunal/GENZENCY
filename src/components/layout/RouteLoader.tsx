"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    setVisible(true);
    const hide = window.setTimeout(() => setVisible(false), 380);
    return () => window.clearTimeout(hide);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="route-loader fixed inset-0 z-[250] flex flex-col items-center justify-center bg-[#0a0a0a]/92 backdrop-blur-md"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex items-center gap-2 font-display text-2xl font-black tracking-tighter text-white uppercase">
        GENZENCY
        <span className="inline-block h-2.5 w-2.5 animate-pulse bg-brand-aqua" />
      </div>
      <div className="mt-5 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="loader-bar h-full w-2/5 rounded-full bg-brand-aqua" />
      </div>
    </div>
  );
}
