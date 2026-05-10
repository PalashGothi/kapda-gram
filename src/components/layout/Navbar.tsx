"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-sm py-4 dark:bg-[#1a0f0a]/90"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium hover:text-mutedgold transition-colors">
            Our Story
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-mutedgold transition-colors">
            Fabrics
          </Link>
        </div>

        <Link href="/" className="text-3xl font-serif tracking-wide text-center absolute left-1/2 -translate-x-1/2">
          Kapda Gram
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <button className="hover:text-mutedgold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/contact" className="text-sm font-medium hover:text-mutedgold transition-colors">
            Contact
          </Link>
          <button className="hover:text-mutedgold transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-ivory dark:bg-[#1a0f0a] shadow-lg border-t border-stone-200 dark:border-stone-800 md:hidden"
        >
          <div className="flex flex-col p-6 space-y-6 text-center">
            <Link href="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
            <Link href="/products" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Fabrics</Link>
            <Link href="/gallery" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
