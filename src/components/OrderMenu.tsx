"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/config";

export function OrderMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={className}
      >
        Order now <span aria-hidden className={`inline-block transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div role="menu" className="absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-xl border border-[var(--color-brand-amber)]/50 p-2 z-50">
          <a
            role="menuitem"
            href={siteConfig.appDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-[var(--color-brand-pale)]/70 transition-colors"
          >
            <span aria-hidden className="text-xl">📱</span>
            <span>
              <span className="block text-sm font-bold text-[var(--color-brand-choco)]">Download our app</span>
              <span className="block text-xs text-[var(--color-brand-orange)] font-semibold">Download now →</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
