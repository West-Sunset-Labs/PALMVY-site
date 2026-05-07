import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AppGrid } from "@/components/sections/AppGrid";
import { StudioBio } from "@/components/sections/StudioBio";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#09090B]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AppGrid />
        <StudioBio />
      </main>
      <Footer />
    </div>
  );
}
