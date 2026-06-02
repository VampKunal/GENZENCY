/** Minimal route transition — avoids covering the full designed page */
export default function Loading() {
  return (
    <div
      className="pointer-events-none fixed top-24 right-0 left-0 z-[100] flex justify-center"
      aria-hidden
    >
      <div className="h-1 w-32 overflow-hidden rounded-full bg-brand-gray/10 dark:bg-white/10">
        <div className="loader-bar h-full w-1/3 rounded-full bg-brand-aqua" />
      </div>
    </div>
  );
}
