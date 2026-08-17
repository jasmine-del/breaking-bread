"use client";

import { siteConfig } from "@/content/config";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full pt-16 pb-8 px-4 bg-[var(--color-brand-charcoal)] text-[var(--color-brand-bg)]">
      {/* big contact block, reference style */}
      <div className="container mx-auto max-w-5xl text-center md:text-left mb-14">
        <span className="inline-block bg-[var(--color-brand-bg)]/15 text-[var(--color-brand-amber)] text-xs font-bold tracking-wide px-4 py-1.5 rounded-full mb-5">
          Fresh Every Morning
        </span>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight text-white mb-6 text-balance">
          Let&apos;s break bread, together.
        </h2>
        <p className="text-sm text-[var(--color-brand-bg)]/60 mb-2">Feel free to contact</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-lg md:text-2xl font-medium text-[var(--color-brand-amber)] hover:text-[var(--color-brand-orange)] transition-colors break-all"
        >
          {siteConfig.email}
        </a>
      </div>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-[var(--color-brand-bg)]/15 pt-10">
        <div>
          <Link href="/" className="block mb-4 w-fit" aria-label="Breaking Bread home">
            <Logo className="w-16 h-16" />
          </Link>
          <p className="text-[var(--color-brand-bg)]/60 text-sm leading-relaxed max-w-xs">
            Artisan bakery in Pokhara, Nepal. Fresh and frozen breads and pastries for hotels, cafes, restaurants, and you.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 text-white">Explore</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-[var(--color-brand-bg)]/70">
            <li><a href="#gallery" onClick={(e) => handleSmoothScroll(e, "gallery")} className="hover:text-[var(--color-brand-amber)] transition-colors">Gallery</a></li>
            <li><a href="#wholesale" onClick={(e) => handleSmoothScroll(e, "wholesale")} className="hover:text-[var(--color-brand-amber)] transition-colors">Wholesale</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-[var(--color-brand-amber)] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 text-white">Follow Us</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-[var(--color-brand-bg)]/70">
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-amber)] transition-colors">
                Instagram · @breaking_bread_pkr
              </a>
            </li>
            <li>
              <a href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-amber)] transition-colors">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl mt-10 pt-6 border-t border-[var(--color-brand-bg)]/15 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-brand-bg)]/50">
        <p>&copy; {new Date().getFullYear()} Breaking Bread Pokhara. All rights reserved.</p>
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "hero")}
          aria-label="Back to top"
          className="mt-4 md:mt-0 flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-brand-amber)] text-[var(--color-brand-choco)] hover:bg-[var(--color-brand-orange)] transition-colors"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}
