"use client";

import { useState } from "react";
import { reviewsData } from "@/content/data";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviewsData[index];
  const prev = () => setIndex((index - 1 + reviewsData.length) % reviewsData.length);
  const next = () => setIndex((index + 1) % reviewsData.length);

  return (
    <section className="w-full py-14 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-[var(--color-brand-choco)] text-center mb-10">
          <span aria-hidden className="text-[var(--color-brand-orange)] text-xl align-middle mr-3">✦</span>
          Testimonials
          <span aria-hidden className="text-[var(--color-brand-orange)] text-xl align-middle ml-3">✦</span>
        </h2>

        <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(59,45,17,0.10)] p-8 md:p-10 text-center">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-brand-pale)] mx-auto mb-5 font-serif text-3xl text-[var(--color-brand-choco)] leading-none pt-3 select-none" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="text-lg md:text-xl text-[var(--color-brand-choco)]/85 leading-relaxed mb-4 min-h-[14rem] md:min-h-[12rem] text-balance">
            {review.quote}
          </blockquote>
          <p className="text-[var(--color-brand-orange)] tracking-[0.2em] text-sm mb-4" aria-label="5 stars">★★★★★</p>
          <p className="font-bold text-[var(--color-brand-choco)]">{review.name}</p>
          <p className="text-xs text-[var(--color-brand-gray)]">{review.role}</p>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-brand-choco)]/25 text-[var(--color-brand-choco)] hover:bg-[var(--color-brand-amber)]/40 transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-brand-choco)] text-[var(--color-brand-amber)] hover:opacity-90 transition-opacity"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
