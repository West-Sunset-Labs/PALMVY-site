import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Philosophy } from "@/components/sections/Philosophy";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-pacific-night">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <Products />
        <Philosophy />
        <HowWeWork />
      </main>
      <Footer />
    </div>
  );
}
