"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Banarasi Silk",
    description: "Opulent weaves from Varanasi with intricate zari work.",
    image: "/images/silk.png",
    link: "/products?category=banarasi"
  },
  {
    title: "Organic Cotton",
    description: "Breathable, pure, and minimal textures for everyday elegance.",
    image: "/images/cotton.png",
    link: "/products?category=cotton"
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 md:py-32 bg-ivory dark:bg-[#1a0f0a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-deepbrown dark:text-ivory mb-6">
              Curated Collections
            </h2>
            <p className="text-lg text-deepbrown/70 dark:text-sand/80 font-light">
              Explore our handpicked selections of India's finest textiles. Each fabric tells a story of heritage, artistry, and timeless beauty.
            </p>
          </div>
          <Link 
            href="/products" 
            className="group flex items-center gap-2 text-mutedgold font-medium hover:text-terracotta transition-colors"
          >
            View All Fabrics 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative block overflow-hidden"
            >
              <Link href={category.link}>
                <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepbrown/80 via-deepbrown/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif text-ivory mb-3">{category.title}</h3>
                  <p className="text-sand/90 font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-mutedgold text-sm tracking-widest uppercase font-semibold">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
