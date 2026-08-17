"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { OrderMenu } from "@/components/OrderMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || menuOpen
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
        <div className="justify-self-end flex items-center gap-2">
          <OrderMenu className="bg-[var(--color-brand-orange)] text-[var(--color-brand-bg)] px-3.5 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-[var(--color-brand-choco)] transition-colors" />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-[var(--color-brand-amber)]/40 shadow-sm gap-[5px]"
          >
            <span className={`block h-[2px] w-4 bg-[var(--color-brand-choco)] transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}></span>
            <span className={`block h-[2px] w-4 bg-[var(--color-brand-choco)] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-[2px] w-4 bg-[var(--color-brand-choco)] transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-4 mt-2 mb-3 rounded-2xl bg-white/85 backdrop-blur-md border border-[var(--color-brand-amber)]/40 shadow-lg p-2 flex flex-col">
          {[
            ["gallery", "Gallery"],
            ["reel", "In Motion"],
            ["wholesale", "Wholesale"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-[var(--color-brand-choco)] hover:bg-[var(--color-brand-amber)]/40 transition-colors flex items-center justify-between"
            >
              {label}
              <span aria-hidden className="text-[var(--color-brand-amber)]">✦</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
