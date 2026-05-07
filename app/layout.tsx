import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "West Sunset Labs — Apps feitos com calma",
  description:
    "Um studio de software indie. Apps pequenos e deliberados, inspirados nas cores do pôr do sol de Los Angeles.",
  metadataBase: new URL("https://westsunsetlabs.com"),
  openGraph: {
    title: "West Sunset Labs",
    description: "Apps feitos com calma, feitos a oeste de tudo.",
    siteName: "West Sunset Labs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#09090B]">{children}</body>
    </html>
  );
}
