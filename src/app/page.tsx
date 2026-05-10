import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <FeaturedCategories />
      
      {/* Call to Action Section */}
      <section className="py-24 md:py-32 bg-maroon relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/woven-light.png')] mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ivory mb-8">
            Experience the Touch of Authenticity
          </h2>
          <p className="text-sand/90 text-lg font-light mb-12">
            Whether you are a designer, a boutique owner, or an individual with a taste for fine textiles, our curated collection is crafted to inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/products"
              className="px-8 py-4 bg-mutedgold text-deepbrown font-medium tracking-wide hover:bg-white transition-colors duration-300"
            >
              Shop Retail
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border border-sand/30 text-ivory font-medium tracking-wide hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm group flex items-center justify-center gap-2"
            >
              Wholesale Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
