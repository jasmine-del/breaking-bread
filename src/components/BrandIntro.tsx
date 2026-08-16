"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function BrandIntro() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1900);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] bg-[var(--color-brand-bg)] flex flex-col items-center justify-center gap-6 pointer-events-none animate-[intro-out_0.6s_cubic-bezier(0.6,0,0.4,1)_1.2s_both]"
    >
      <Logo className="w-28 h-28 md:w-36 md:h-36 animate-scale drop-shadow-md" />
    </div>
  );
}
