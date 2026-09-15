import { varietiesData } from "@/content/data";

export function Varieties() {
  return (
    <section id="wholesale" className="w-full py-12 md:py-20 px-4 bg-[var(--color-brand-pale)]/40">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-brand-orange)] mb-3">
            Wholesale &amp; Retail
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif tracking-tight text-[var(--color-brand-choco)] mb-4">
            What We Provide
          </h2>
          <p className="text-base md:text-lg text-[var(--color-brand-gray)] max-w-2xl mx-auto">
            Our full range of baked goods. We supply hotels, cafes, and restaurants across Pokhara. All items can be made to order for wholesale clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {varietiesData.map((category, index) => (
            <div key={index} className="group h-[21rem] sm:h-[23rem] [perspective:1200px]" tabIndex={0}>
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                {/* front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-[var(--color-brand-amber)]/50 rounded-3xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
                  <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-brand-pale)] text-2xl md:text-3xl mb-3">
                    {category.icon}
                  </span>
                  <span className="font-serif text-xs text-[var(--color-brand-orange)] tabular-nums mb-1 font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-lg font-bold font-serif tracking-tight text-[var(--color-brand-choco)] mb-1.5">
                    {category.category}
                  </h3>
                  <p className="text-[var(--color-brand-gray)] italic text-xs leading-relaxed px-1">
                    {category.description}
                  </p>
                  <p className="absolute bottom-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-orange)]/80">
                    Flip for the list ↻
                  </p>
                </div>
                {/* back — terracotta menu block */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[var(--color-brand-orange)] rounded-3xl p-4 flex flex-col shadow-md overflow-hidden">
                  <span aria-hidden className="absolute -bottom-6 -right-4 text-7xl opacity-10 select-none">
                    {category.icon}
                  </span>
                  <h3 className="text-sm md:text-base font-bold font-serif tracking-tight text-[var(--color-brand-bg)] mb-1 shrink-0">
                    {category.category}
                  </h3>
                  <span aria-hidden className="block h-[2px] w-8 rounded-full bg-[var(--color-brand-amber)] mb-2.5 shrink-0"></span>
                  <ul className="flex flex-col gap-1.5 overflow-y-auto pr-1 text-left scrollbar-thin">
                    {category.items.map((item, idx) => {
                      const [label, variants] = item.includes(": ") ? item.split(": ") : [item, null];
                      return (
                        <li key={idx} className="flex items-baseline gap-1.5 text-[var(--color-brand-bg)]/95">
                          <span aria-hidden className="text-[var(--color-brand-amber)] text-[9px] shrink-0">✦</span>
                          <span className="min-w-0">
                            <span className="block font-serif text-xs leading-tight tracking-wide">{label}</span>
                            {variants && (
                              <span className="block text-[10px] leading-tight text-[var(--color-brand-pale)]/90 mt-0.5">{variants}</span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
