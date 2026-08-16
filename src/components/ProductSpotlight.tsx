"use client";

import { useState } from "react";
import Image from "next/image";
import { popularItemsData } from "@/content/data";

export function ProductSpotlight() {
  const [active, setActive] = useState(0);
  const item = popularItemsData[active];

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
      {/* widget cluster */}
      <div className="order-1 md:order-2 flex flex-col gap-3">
        {/* main spotlight panel */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-[var(--color-brand-choco)]/15">
          {popularItemsData.map((product, index) => (
            <Image
              key={product.id}
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 92vw, 440px"
              className={`object-cover transition-opacity duration-500 ease-in-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2.5">
            <p className="font-serif font-bold text-white text-base">{item.name}</p>
            <p className="text-white/85 text-xs">{item.description}</p>
          </div>
        </div>

        {/* small companion tiles, widget-board style */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/croissant-latte.jpg"
              alt="Golden butter croissant on a teal plate"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-sm bg-[var(--color-brand-orange)] flex flex-col items-center justify-center text-center px-4">
            <span aria-hidden className="absolute left-2 top-1.5 text-[var(--color-brand-amber)] text-xs animate-sparkle select-none">✦</span>
            <span aria-hidden className="absolute right-3 bottom-2 text-[var(--color-brand-amber)] text-sm animate-sparkle [animation-delay:1.5s] select-none">✦</span>
            <span aria-hidden className="absolute -right-3 -top-6 font-serif text-7xl text-[var(--color-brand-bg)]/15 select-none rotate-12">🥐</span>
            <p className="font-serif italic font-bold text-sm md:text-base leading-snug text-[var(--color-brand-bg)]">
              &ldquo;Bread is the warmest, kindest of words.&rdquo;
            </p>
            <span aria-hidden className="block h-[2px] w-8 my-2 rounded-full bg-[var(--color-brand-amber)]"></span>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-brand-pale)]">baked with love</p>
          </div>
        </div>
      </div>

      {/* product index */}
      <ul className="order-2 md:order-1 flex flex-col">
        {popularItemsData.map((product, index) => {
          const isActive = index === active;
          return (
            <li key={product.id}>
              <button
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className="w-full flex items-baseline gap-3 md:gap-4 py-2 md:py-2.5 border-b border-[var(--color-brand-choco)]/10 text-left cursor-pointer"
              >
                <span
                  className={`font-serif text-xs tabular-nums transition-colors duration-300 ${
                    isActive ? "text-[var(--color-brand-orange)]" : "text-[var(--color-brand-gray)]/60"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif font-bold text-base md:text-lg lg:text-xl tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-[var(--color-brand-choco)] translate-x-2"
                      : "text-[var(--color-brand-choco)]/30 hover:text-[var(--color-brand-choco)]/60"
                  }`}
                >
                  {product.name}
                </span>
                <span
                  aria-hidden
                  className={`ml-auto text-[var(--color-brand-orange)] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  ✦
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
