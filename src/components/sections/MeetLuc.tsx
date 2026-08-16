import { lucData } from "@/content/data";
import Image from "next/image";

export function MeetLuc() {
  return (
    <section id="about" className="w-full py-14 md:py-20 px-4 bg-[var(--color-brand-pale)]/50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto mb-7 rounded-full overflow-hidden ring-4 ring-[var(--color-brand-amber)] ring-offset-4 ring-offset-[var(--color-brand-pale)] shadow-lg shadow-[var(--color-brand-choco)]/10 bg-[var(--color-brand-bg)]">
          <Image
            src={lucData.image}
            alt="Luc, baker and founder of Breaking Bread"
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-[var(--color-brand-choco)] mb-1">
          {lucData.name}
        </h2>
        <p className="font-bold text-[var(--color-brand-orange)] tracking-[0.15em] uppercase text-xs md:text-sm mb-8">
          {lucData.role}
        </p>

        <blockquote className="relative text-2xl md:text-3xl font-serif italic leading-snug text-[var(--color-brand-choco)]/90 mb-8 px-6 md:px-12">
          <span aria-hidden className="absolute -top-4 left-0 text-6xl font-serif text-[var(--color-brand-amber)] leading-none select-none">&ldquo;</span>
          {lucData.quote}
          <span aria-hidden className="absolute -bottom-8 right-0 text-6xl font-serif text-[var(--color-brand-amber)] leading-none select-none">&rdquo;</span>
        </blockquote>

        <p className="text-base md:text-lg text-[var(--color-brand-gray)] leading-relaxed max-w-3xl mx-auto">
          {lucData.bio}
        </p>
      </div>
    </section>
  );
}
