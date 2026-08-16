import { siteConfig } from "@/content/config";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
