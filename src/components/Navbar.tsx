"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { OrderMenu } from "@/components/OrderMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-brand-bg)]/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link href="/" className="justify-self-start" aria-label="Breaking Bread home">
          <Logo className="w-11 h-11 drop-shadow-sm" />
        </Link>
        <nav className="hidden md:flex items-center gap-1 justify-self-center bg-white/60 backdrop-blur-sm border border-[var(--color-brand-amber)]/40 rounded-full px-2 py-1 shadow-sm">
          <a href="#gallery" onClick={(e) => handleSmoothScroll(e, "gallery")} className="text-sm font-semibold text-[var(--color-brand-choco)]/80 px-4 py-1.5 rounded-full hover:bg-[var(--color-brand-amber)]/50 hover:text-[var(--color-brand-choco)] transition-colors">
            Gallery
          </a>
          <a href="#wholesale" onClick={(e) => handleSmoothScroll(e, "wholesale")} className="text-sm font-semibold text-[var(--color-brand-choco)]/80 px-4 py-1.5 rounded-full hover:bg-[var(--color-brand-amber)]/50 hover:text-[var(--color-brand-choco)] transition-colors">
            Wholesale
          </a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="text-sm font-semibold text-[var(--color-brand-choco)]/80 px-4 py-1.5 rounded-full hover:bg-[var(--color-brand-amber)]/50 hover:text-[var(--color-brand-choco)] transition-colors">
            Contact
          </a>
        </nav>
        <div className="justify-self-end">
          <OrderMenu className="bg-[var(--color-brand-orange)] text-[var(--color-brand-bg)] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-brand-choco)] transition-colors" />
        </div>
      </div>
    </header>
  );
}
