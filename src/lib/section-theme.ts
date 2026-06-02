import type { StackSection } from "@/content/pages";

/** Shared surfaces — matches home page (#f9f9f9 / #0a0a0a / brand accents) */
export function sectionSurface(accent: StackSection["accent"] = "aqua") {
  switch (accent) {
    case "lime":
      return "bg-[#f3f3f4] text-brand-gray dark:bg-[#060606] dark:text-brand-light";
    case "dark":
      return "bg-brand-gray text-white dark:bg-[#0a0a0a] dark:text-[#f9f9f9]";
    default:
      return "bg-[#f9f9f9] text-brand-gray dark:bg-[#0a0a0a] dark:text-[#f9f9f9]";
  }
}

export const SCREEN_SECTION = "flex h-[100dvh] max-h-[100dvh] w-full flex-col justify-center overflow-hidden box-border";

export const SCREEN_INNER = "mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-10";
