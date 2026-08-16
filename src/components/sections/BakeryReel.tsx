"use client";

import { useEffect, useRef } from "react";

const reels = [
  { src: "/reel-7.mp4", poster: "/reel-7-poster.jpg", label: "Multigrain sourdough" },
  { src: "/reel-6.mp4", poster: "/reel-6-poster.jpg", label: "Mulberry pie, plated" },
  { src: "/reel-4.mp4", poster: "/reel-4-poster.jpg", label: "Chocolate tart, first bite" },
  { src: "/reel-5.mp4", poster: "/reel-5-poster.jpg", label: "Glazed eclairs" },
  { src: "/reel-1.mp4", poster: "/reel-1-poster.jpg", label: "Blueberry rolls, fresh out" },
  { src: "/reel-2.mp4", poster: "/reel-2-poster.jpg", label: "Packed to go" },
  { src: "/reel-9.mp4", poster: "/reel-9-poster.jpg", label: "Cinnamon rolls, say hi" },
  { src: "/reel-3.mp4", poster: "/reel-3-poster.jpg", label: "That cookie pull" },
  { src: "/reel-10.mp4", poster: "/reel-10-poster.jpg", label: "Lemon cream tart" },
  { src: "/reel-8.mp4", poster: "/reel-8-poster.jpg", label: "Butter-brushed croissants" },
];

export function BakeryReel() {
  const stripRef = useRef<HTMLDivElement>(null);

  // play videos only while they are on screen
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const videos = Array.from(strip.querySelectorAll("video"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.35 }
    );
    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reel" className="relative w-full py-14 md:py-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 text-center mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-orange)] mb-3">
          Watch It Happen
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-[var(--color-brand-choco)]">
          <span aria-hidden className="text-[var(--color-brand-amber)]">✦</span> The Bakery, In Motion{" "}
          <span aria-hidden className="text-[var(--color-brand-amber)]">✦</span>
        </h2>
        <p className="text-sm md:text-base text-[var(--color-brand-gray)] mt-3">
          Little moments from our ovens in Lakeside — drag to see more.
        </p>
      </div>

      <div
        ref={stripRef}
        className="flex gap-5 md:gap-7 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reels.map((reel, i) => (
          <figure
            key={reel.src}
            className={`relative shrink-0 snap-center w-40 md:w-48 aspect-[9/16] rounded-3xl overflow-hidden ring-4 ring-white shadow-xl shadow-[var(--color-brand-choco)]/15 transition-transform duration-300 hover:scale-[1.04] hover:rotate-0 ${
              i % 2 === 0 ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"
            }`}
          >
            <video
              src={reel.src}
              poster={reel.poster}
              muted
              loop
              playsInline
              preload="none"
              aria-label={reel.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute inset-x-2.5 bottom-2.5 rounded-xl bg-black/35 backdrop-blur-sm px-3 py-1.5 text-center">
              <span className="text-white text-[11px] font-semibold tracking-wide">{reel.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
