export default function Loading() {
  return (
    <div className="route-loader fixed inset-0 z-[250] flex flex-col items-center justify-center bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="flex items-center gap-2 font-display text-xl font-black tracking-tighter text-white uppercase sm:text-2xl">
        GENZENCY
        <span className="inline-block h-2 w-2 animate-pulse bg-brand-aqua sm:h-2.5 sm:w-2.5" />
      </div>
      <div className="mt-4 h-0.5 w-32 overflow-hidden rounded-full bg-white/10">
        <div className="loader-bar h-full w-1/3 rounded-full bg-brand-aqua" />
      </div>
    </div>
  );
}
