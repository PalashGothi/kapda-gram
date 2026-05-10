"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a0f0a]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.png"
          alt="Traditional Indian Handloom Fabric"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-deepbrown/60 via-transparent to-deepbrown/90" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-mutedgold uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6"
        >
          Heritage of Ujjain
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-8 leading-tight"
        >
          Threads of <br />
          <span className="italic font-light">Tradition</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sand/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10"
        >
          Discover the exquisite craftsmanship of traditional Indian handloom. Woven with passion, crafted for eternity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link 
            href="/products"
            className="px-8 py-4 bg-mutedgold text-deepbrown font-medium tracking-wide hover:bg-white transition-colors duration-300"
          >
            Explore Collection
          </Link>
          <Link 
            href="/about"
            className="px-8 py-4 border border-sand/30 text-ivory font-medium tracking-wide hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sand/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-sand/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
