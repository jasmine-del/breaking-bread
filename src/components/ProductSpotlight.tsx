"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { popularItemsData } from "@/content/data";

export function ProductSpotlight() {
  const [active, setActive] = useState(0);
  const item = popularItemsData[active];
  const listRef = useRef<HTMLUListElement>(null);

  // on phones the list is a horizontal chip row: keep the active chip in view
  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia("(min-width: 768px)").matches) return;
    const el = list.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[0.85fr_1fr] gap-8 md:gap-12 items-center">
      {/* widget cluster */}
      <div className="order-2 md:order-2 flex flex-col gap-3">
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
        </div>

        {/* elegant caption in the gap */}
        <div key={item.id} className="text-center py-1 animate-rise">
          <p className="font-serif font-bold text-base md:text-lg text-[var(--color-brand-choco)] tracking-tight leading-none">{item.name}</p>
          <span aria-hidden className="mx-auto mt-1.5 mb-1.5 block h-[2px] w-8 rounded-full bg-[var(--color-brand-amber)]"></span>
          <p className="font-serif italic text-xs md:text-sm text-[var(--color-brand-gray)] leading-snug px-4">{item.description}</p>
        </div>

        {/* small companion tiles, widget-board style */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-sm">
            <video
              src="/croissant-tile.mp4"
              poster="/croissant-tile-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Croissants being brushed with butter"
              className="absolute inset-0 w-full h-full object-cover"
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

      {/* product index — chip row on mobile, editorial list on desktop */}
      <ul ref={listRef} className="order-1 md:order-1 flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-1 md:pb-0 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {popularItemsData.map((product, index) => {
          const isActive = index === active;
          return (
            <li key={product.id} className="shrink-0 md:shrink snap-start">
              <button
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`w-full flex items-baseline gap-2 md:gap-4 whitespace-nowrap md:whitespace-normal rounded-full md:rounded-none px-3.5 py-2 md:px-0 md:py-2.5 border md:border-0 md:border-b md:border-[var(--color-brand-choco)]/10 text-left cursor-pointer transition-colors ${
                  isActive
                    ? "bg-[var(--color-brand-orange)] border-[var(--color-brand-orange)] md:bg-transparent"
                    : "bg-white/70 border-[var(--color-brand-amber)]/40 md:bg-transparent"
                }`}
              >
                <span
                  className={`font-serif text-[10px] md:text-xs tabular-nums transition-colors duration-300 ${
                    isActive ? "text-[var(--color-brand-bg)] md:text-[var(--color-brand-orange)]" : "text-[var(--color-brand-gray)]/60"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif font-bold text-sm md:text-lg lg:text-xl tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-[var(--color-brand-bg)] md:text-[var(--color-brand-choco)] md:translate-x-2"
                      : "text-[var(--color-brand-choco)]/70 md:text-[var(--color-brand-choco)]/30 md:hover:text-[var(--color-brand-choco)]/60"
                  }`}
                >
                  {product.name}
                </span>
                <span
                  aria-hidden
                  className={`hidden md:inline ml-auto text-[var(--color-brand-orange)] transition-opacity duration-300 ${
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
