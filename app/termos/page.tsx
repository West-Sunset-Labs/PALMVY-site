import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { LegalPage } from "@/components/sections/LegalPage";
import { Navbar } from "@/components/sections/Navbar";
import { termsOfUse } from "@/core/data/legal/terms";

export const metadata: Metadata = {
  title: `${termsOfUse.title} | PALMVY`,
  description: termsOfUse.description,
  alternates: { canonical: "/termos" },
  robots: termsOfUse.isDraft ? { index: false, follow: true } : undefined,
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-pacific-night">
      <Navbar />
      <main className="flex-1 pt-16">
        <LegalPage document={termsOfUse} />
      </main>
      <Footer />
    </div>
  );
}
