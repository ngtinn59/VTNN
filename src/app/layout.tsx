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
        {children}
      </body>
    </html>
  );
}
