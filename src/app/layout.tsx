import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kapda Gram | Premium Indian Handloom & Handicrafts",
  description: "Authentic Indian handcrafted textiles, ethnic dress materials, and sustainable handmade handicrafts. Based in Ujjain, Madhya Pradesh, we celebrate artisan fabrics and traditional craftsmanship.",
  keywords: ["Handloom fabrics India", "Indian handcrafted textiles", "Ethnic dress materials", "Handmade Indian handicrafts", "Sustainable Indian fashion", "Artisan fabrics", "Indian block print fabrics", "Handmade décor India", "Ujjain handloom store", "Indian craft products"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col selection:bg-mutedgold selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
