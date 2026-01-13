import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Kye Agency Template",
  description: "Premium Agency Template with AI Integration",
};


import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ExpertChat } from "@/components/landing/ExpertChat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="light">
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased selection:bg-green-100 selection:text-green-900`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ExpertChat />
      </body>
    </html>
  );
}
