"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroData } from "@/content/data";

const slides = [
  { src: "/bakery-case.jpg", alt: "Pastry display case filled with tarts and pies at Breaking Bread", label: "The Bakery Case" },
  { src: "/bakery-counter.jpg", alt: "Wooden counter with striped rolls, croissants, and sourdough", label: "The Counter" },
  { src: heroData.image, alt: "Wheat-scored sourdough loaf on a cutting board", label: "Classic Sourdough" },
  { src: "/cinnamon-rolls.jpg", alt: "Three glazed cinnamon rolls held on a tray at the bakery entrance", label: "Cinnamon Rolls" },
  { src: "/sourdough-7.jpg", alt: "Hands scoring a sourdough loaf", label: "Hand Scored" },
  { src: "/blueberry-eclairs.jpg", alt: "Glazed blueberry eclairs on a tray by the palm leaves", label: "Blueberry Eclairs" },
];

export function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* echo blob for depth, morphing in sync */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-5 translate-y-5 animate-blob rounded-[58%_42%_55%_45%/50%_55%_45%_50%] bg-[var(--color-brand-amber)]/35"
      ></div>
      <div className="animate-blob relative w-full h-full overflow-hidden shadow-xl shadow-[var(--color-brand-choco)]/20 rounded-[58%_42%_55%_45%/50%_55%_45%_50%]">
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 768px) 80vw, 400px" className="object-cover" preload={i === 0} />
          </div>
        ))}
      </div>

      {/* slide dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => setActive(i)}
            aria-label={`Show ${slide.label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-[var(--color-brand-choco)]" : "w-1.5 bg-[var(--color-brand-choco)]/30 hover:bg-[var(--color-brand-choco)]/60"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
