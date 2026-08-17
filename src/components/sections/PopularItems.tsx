import { ProductSpotlight } from "@/components/ProductSpotlight";

export function PopularItems() {
  return (
    <section id="gallery" className="w-full py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-brand-orange)] mb-3">
            Straight From Our Ovens
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif tracking-tight text-[var(--color-brand-choco)]">
            <span aria-hidden className="text-[var(--color-brand-orange)] text-2xl align-middle mr-3">✦</span>
            Our Products
            <span aria-hidden className="text-[var(--color-brand-orange)] text-2xl align-middle ml-3">✦</span>
          </h2>
        </div>

        <ProductSpotlight />
      </div>
    </section>
  );
}
