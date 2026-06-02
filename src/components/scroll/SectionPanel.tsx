import Image from "next/image";
import type { StackSection } from "@/content/pages";
import { sectionSurface } from "@/lib/section-theme";

export default function SectionPanel({
  section,
  compact = false,
}: {
  section: StackSection;
  compact?: boolean;
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${sectionSurface(section.accent)}`}>
      <div className="relative z-10 flex h-full max-h-full flex-col justify-center gap-4 overflow-hidden px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="min-w-0 flex-1 space-y-3">
            <span className="font-mono text-[10px] font-bold tracking-widest text-brand-aqua uppercase sm:text-xs">
              {section.eyebrow}
            </span>
            <h2
              className={`font-display font-black tracking-tighter uppercase ${
                compact ? "text-xl sm:text-3xl" : "text-2xl sm:text-4xl lg:text-5xl"
              }`}
            >
              {section.title}
            </h2>
            <p className="max-w-xl font-sans text-xs leading-relaxed text-brand-gray/80 sm:text-sm dark:text-white/75">
              {section.body}
            </p>
            {section.bullets && (
              <ul className="space-y-1.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-gray dark:text-brand-aqua sm:text-[11px]">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#ff4cb4]" />
                    <span className="min-w-0 break-words">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {section.image && (
            <div className="relative mx-auto h-[min(28vh,200px)] w-full max-w-sm shrink-0 overflow-hidden rounded-xl border-2 border-brand-gray/10 dark:border-white/10 sm:h-[min(32vh,260px)] lg:mx-0 lg:h-[min(36vh,300px)] lg:max-w-xs lg:flex-1">
              <Image src={section.image} alt="" fill className="object-cover" sizes="(max-width:768px) 90vw, 320px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
