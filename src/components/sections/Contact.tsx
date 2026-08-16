"use client";

import { siteConfig } from "@/content/config";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Wire up to Formspree, Resend, or your preferred form handler
    alert("This is a placeholder form. Please use WhatsApp to contact us for now.");
  };

  return (
    <section id="contact" className="w-full py-14 md:py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-[var(--color-brand-choco)] mb-4">
          Have Questions? Reach Out
        </h2>
        <p className="text-base md:text-lg text-[var(--color-brand-gray)]">
          We welcome enquiries from both wholesale businesses and individuals. Send us a message or connect directly on WhatsApp.
        </p>
      </div>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
        {/* Contact Form */}
        <div className="md:col-span-3 bg-white border border-[var(--color-brand-amber)]/50 p-6 md:p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-brand-choco)]">Name</label>
                <input type="text" id="name" required className="p-3 bg-transparent border-b border-[var(--color-brand-choco)]/25 focus:border-[var(--color-brand-orange)] outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-[var(--color-brand-choco)]">Phone</label>
                <input type="tel" id="phone" required className="p-3 bg-transparent border-b border-[var(--color-brand-choco)]/25 focus:border-[var(--color-brand-orange)] outline-none transition-colors" placeholder="Your Phone Number" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="business" className="text-sm font-medium text-[var(--color-brand-choco)]">Business Name (Optional)</label>
              <input type="text" id="business" className="p-3 bg-transparent border-b border-[var(--color-brand-choco)]/25 focus:border-[var(--color-brand-orange)] outline-none transition-colors" placeholder="Hotel or Cafe Name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--color-brand-choco)]">Message</label>
              <textarea id="message" required rows={4} className="p-3 bg-transparent border-b border-[var(--color-brand-choco)]/25 focus:border-[var(--color-brand-orange)] outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="self-start mt-2 bg-[var(--color-brand-choco)] text-[var(--color-brand-amber)] px-7 py-3 text-sm font-bold rounded-full hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 flex flex-col gap-8 justify-center px-2 md:px-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[var(--color-brand-choco)] mb-4">Direct Contact</h3>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-brand-amber)] text-[var(--color-brand-choco)] px-6 py-3 rounded-full text-sm font-bold hover:bg-[var(--color-brand-orange)] transition-colors mb-6"
            >
              Chat on WhatsApp
            </a>
            <div className="flex flex-col gap-3 text-sm text-[var(--color-brand-gray)]">
              <p><span className="font-bold text-[var(--color-brand-choco)]">Call / WhatsApp:</span> {siteConfig.phone}</p>
              <p><span className="font-bold text-[var(--color-brand-choco)]">Email:</span> {siteConfig.email}</p>
              <p>
                <span className="font-bold text-[var(--color-brand-choco)]">Instagram:</span>{" "}
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-orange)] hover:text-[var(--color-brand-amber)] transition-colors">
                  @breaking_bread_pkr
                </a>
              </p>
              <p><span className="font-bold text-[var(--color-brand-choco)]">Location:</span> {siteConfig.address}</p>
            </div>
          </div>
          <div className="w-full h-px bg-[var(--color-brand-choco)]/10"></div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[var(--color-brand-choco)] mb-4">Service Area</h3>
            <p className="text-sm text-[var(--color-brand-gray)] leading-relaxed">
              Based in Lakeside, Pokhara. We offer scheduled wholesale deliveries across the Pokhara valley. Walk-ins welcome at our bakery window.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
