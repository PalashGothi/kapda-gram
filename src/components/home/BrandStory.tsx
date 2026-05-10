"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F5DC] dark:bg-[#2D1810] relative overflow-hidden">
      {/* Subtle background pattern could go here */}
      <div className="absolute top-0 right-0 opacity-5 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-maroon via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] relative w-full max-w-md mx-auto">
              {/* Note: In a real scenario we might have another image here. Using hero as placeholder */}
              <Image
                src="/images/hero.png"
                alt="Weaving loom"
                fill
                className="object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-mutedgold/20 backdrop-blur-xl rounded-full z-[-1]" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-terracotta/30 rounded-full z-[-1]" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-terracotta font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-deepbrown dark:text-ivory leading-tight">
                Rooted in Ujjain, <br />
                <span className="italic font-light text-mutedgold">Woven for the World</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-deepbrown/80 dark:text-sand/80 font-light text-lg leading-relaxed">
              <p>
                Kapda Gram was born from a deep reverence for India's rich textile legacy. In the historic city of Ujjain, we partner with master artisans whose families have perfected the art of weaving over generations.
              </p>
              <p>
                Every thread we offer is a testament to mindful creation, honoring the earth and the hands that craft it. From the crispness of Khadi to the royal drape of Banarasi silk, our fabrics celebrate authentic imperfection and timeless elegance.
              </p>
            </div>

            <div className="pt-8 border-t border-deepbrown/10 dark:border-sand/10">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h4 className="text-3xl font-serif text-deepbrown dark:text-mutedgold mb-2">50+</h4>
                  <p className="text-sm uppercase tracking-wider text-deepbrown/60 dark:text-sand/60">Artisans</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-deepbrown dark:text-mutedgold mb-2">100%</h4>
                  <p className="text-sm uppercase tracking-wider text-deepbrown/60 dark:text-sand/60">Handcrafted</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-deepbrown dark:text-mutedgold mb-2">20+</h4>
                  <p className="text-sm uppercase tracking-wider text-deepbrown/60 dark:text-sand/60">Weave Types</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
