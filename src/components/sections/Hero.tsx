import { heroData } from "@/content/data";
import { siteConfig } from "@/content/config";
import { Wordmark } from "@/components/Wordmark";
import { HeroShowcase } from "@/components/HeroShowcase";
import Image from "next/image";

const marqueeItems = [
  "100% Natural",
  "Baked Daily",
  "Wholesale Ready",
  "Fresh Sourdough",
  "Butter Croissants",
  "Baked in Pokhara",
];

export function Hero() {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section id="hero" className="relative w-full overflow-hidden pt-28 md:pt-36 pb-0">
      {/* faint gingham grid, fading at the edges */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,180,0,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,180,0,0.16)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]"
      ></div>

      <div className="relative container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center gap-12 md:gap-8">
        <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
          {/* pulsing sparkle accents */}
          <span aria-hidden className="absolute -top-8 left-8 text-[var(--color-brand-amber)] text-2xl select-none animate-sparkle">✦</span>
          <span aria-hidden className="absolute top-1/3 -left-6 text-[var(--color-brand-orange)]/70 text-lg select-none animate-sparkle [animation-delay:1s]">✦</span>
          <span aria-hidden className="absolute -bottom-6 left-1/3 text-[var(--color-brand-amber)] text-xl select-none animate-sparkle [animation-delay:2s]">✦</span>

          <Wordmark className="w-72 md:w-[400px] lg:w-[460px] h-auto animate-rise" />
          <p className="text-base md:text-lg text-[var(--color-brand-gray)] leading-relaxed mt-7 mb-9 max-w-md animate-rise [animation-delay:150ms]">
            {heroData.subheadline}
          </p>
          <div className="flex items-center gap-5 animate-rise [animation-delay:300ms]">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-brand-orange)] text-[var(--color-brand-bg)] px-7 py-3.5 rounded-full text-sm md:text-base font-bold hover:bg-[var(--color-brand-amber)] hover:text-[var(--color-brand-orange)] transition-colors shadow-lg shadow-[var(--color-brand-orange)]/25"
            >
              {heroData.ctaText} →
            </a>
            <a
              href="#gallery"
              className="text-sm font-semibold text-[var(--color-brand-choco)] underline underline-offset-4 decoration-[var(--color-brand-amber)] hover:decoration-[var(--color-brand-orange)] transition-colors"
            >
              view our products
            </a>
          </div>
        </div>

        <div className="relative w-72 md:w-[420px] aspect-[4/5] mx-auto animate-scale [animation-delay:200ms]">
          {/* warm glow behind the showcase */}
          <div aria-hidden className="absolute -inset-8 rounded-full bg-[var(--color-brand-amber)]/25 blur-3xl"></div>
          <HeroShowcase />
          {/* spinning badge */}
          <div className="absolute -left-10 bottom-6 w-20 h-20 md:w-24 md:h-24 animate-slow-spin">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
              <defs>
                <path id="badge-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="var(--color-brand-amber)" />
              <text fontSize="10" fill="var(--color-brand-choco)" letterSpacing="2.5" style={{ fontFamily: "var(--font-sans)" }}>
                <textPath href="#badge-circle">NATURAL · AUTHENTIC · FRESH ·</textPath>
              </text>
              <text x="50" y="55" textAnchor="middle" fontSize="14" fill="var(--color-brand-choco)">✦</text>
            </svg>
          </div>
          {/* floating product card */}
          <div className="absolute -top-3 -right-4 animate-rise [animation-delay:500ms]">
            <div className="bg-white rounded-xl shadow-lg px-4 py-3 animate-float">
              <p className="text-sm font-bold text-[var(--color-brand-choco)]">Classic Sourdough</p>
              <p className="text-xs text-[var(--color-brand-orange)] tracking-widest" aria-label="5 stars">
                ★★★★★ <span className="text-[var(--color-brand-gray)] tracking-normal">(local favorite)</span>
              </p>
            </div>
          </div>

          {/* floating product chips */}
          <div className="absolute -left-8 top-8 animate-rise [animation-delay:650ms]">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white shadow-lg animate-float [animation-delay:1.2s]">
              <Image src="/bake-9.jpg" alt="Lemon cream tart" fill sizes="96px" className="object-cover" />
            </div>
          </div>
          <div className="absolute -right-6 bottom-24 animate-rise [animation-delay:800ms]">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg animate-float [animation-delay:2.4s]">
              <Image src="/bake-10.jpg" alt="Chocolate tart with dark chocolate curls" fill sizes="80px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* scrolling marquee strip */}
      <div className="relative mt-12 md:mt-16 border-y border-[var(--color-brand-choco)]/10 py-3 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center font-serif uppercase tracking-[0.2em] text-sm text-[var(--color-brand-orange)] whitespace-nowrap">
                  <span className="mx-6">{item}</span>
                  <span className="text-[var(--color-brand-amber)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
