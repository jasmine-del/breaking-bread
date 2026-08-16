import { Hero } from "@/components/sections/Hero";
import { PopularItems } from "@/components/sections/PopularItems";
import { BakeryReel } from "@/components/sections/BakeryReel";
import { Varieties } from "@/components/sections/Varieties";
import { MeetLuc } from "@/components/sections/MeetLuc";
import { Contact } from "@/components/sections/Contact";
import { Reviews } from "@/components/sections/Reviews";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BrandIntro } from "@/components/BrandIntro";

export default function Home() {
  return (
    <>
      <BrandIntro />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <Hero />
        <PopularItems />
        <BakeryReel />
        <MeetLuc />
        <Varieties />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
