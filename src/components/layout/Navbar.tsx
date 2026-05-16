"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useAuthStore } from "@/store/auth";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cartItemsCount = useCartStore((state) => state.totalItems());
  const { user, logout } = useAuthStore();

  useEffect(() => {
    setMounted(true);
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
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative">
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium hover:text-mutedgold transition-colors">
            Our Story
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-mutedgold transition-colors">
            Fabrics & Shop
          </Link>
        </div>

        <Link href="/" className="text-3xl font-serif tracking-wide text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          कपड़ा ग्राम
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {mounted && user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-deepbrown/80 dark:text-sand/80">Hi, {user.name.split(' ')[0]}</span>
              <button onClick={logout} className="text-xs text-terracotta hover:underline">Logout</button>
            </div>
          ) : (
            <Link href="/login" className="hover:text-mutedgold transition-colors">
              <User className="w-5 h-5" />
            </Link>
          )}

          <Link href="/cart" className="relative hover:text-mutedgold transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {mounted && cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
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
            <Link href="/products" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link href="/cart" className="text-lg font-medium flex items-center justify-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              Cart {mounted && cartItemsCount > 0 && <span className="bg-terracotta text-white text-xs px-2 py-0.5 rounded-full">{cartItemsCount}</span>}
            </Link>
            {mounted && user ? (
              <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-lg font-medium text-terracotta">Logout ({user.name})</button>
            ) : (
              <Link href="/login" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}
