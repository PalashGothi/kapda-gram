"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-[#1a0f0a] pt-32 pb-10 px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.png"
          alt="Traditional Indian Handloom Fabric"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-deepbrown/60 via-transparent to-deepbrown/90" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-mutedgold uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6"
        >
          Where Indian Craftsmanship Lives
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-8 leading-tight"
        >
          Handcrafted Traditions, <br />
          <span className="italic font-light">Woven for Today</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sand/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10"
        >
          Celebrating the timeless beauty of Indian textiles and handcrafted artistry. Rooted in Ujjain, we bring you authentic handloom, dress materials, and handmade lifestyle products.
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
        className="relative z-10 flex flex-col items-center gap-2 mt-8"
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
