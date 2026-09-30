import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { LegalPage } from "@/components/sections/LegalPage";
import { Navbar } from "@/components/sections/Navbar";
import { privacyPolicy } from "@/core/data/legal/privacy";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | PALMVY`,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacidade" },
  robots: privacyPolicy.isDraft ? { index: false, follow: true } : undefined,
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-pacific-night">
      <Navbar />
      <main className="flex-1 pt-16">
        <LegalPage document={privacyPolicy} />
      </main>
      <Footer />
    </div>
  );
}
