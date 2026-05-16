'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useCartStore } from "@/store/cart";
import { toast } from "react-hot-toast";
import { Loader2, ShoppingCart } from "lucide-react";

const fabricTypes = [
  { name: "Handloom Fabrics", desc: "Traditional handwoven fabrics", image: "/images/handloom.png" },
  { name: "Cotton Fabrics", desc: "Breathable and versatile", image: "/images/cotton.png" },
  { name: "Silk Fabrics", desc: "Luxurious occasion wear", image: "/images/silk.png" },
  { name: "Khadi Fabrics", desc: "Sustainable handspun heritage", image: "/images/khadi.png" },
  { name: "Ajrakh Prints", desc: "Natural dyed block prints", image: "/images/ajrakh.png" },
  { name: "Kalamkari", desc: "Artistic hand-painted textiles", image: "/images/kalamkari.png" },
  { name: "Ikat Fabrics", desc: "Resist-dyed geometric patterns", image: "/images/ikat.png" },
  { name: "Banarasi", desc: "Rich woven textiles with zari", image: "/images/banarasi.png" },
  { name: "Bandhani", desc: "Vibrant tie-and-dye patterns", image: "/images/bandhani.png" },
  { name: "Chikankari", desc: "Elegant hand-embroidered threadwork", image: "/images/chikankari.png" }
];

const handicrafts = [
  { name: "Tote Bags", desc: "Handmade fabric tote bags", image: "/images/tote-bags.png" },
  { name: "Footwear", desc: "Traditional handmade footwear", image: "/images/footwear.png" },
  { name: "Diaries & Journals", desc: "Fabric-covered handcrafted diaries", image: "/images/diaries.png" },
  { name: "Home Décor", desc: "Curated textile-inspired décor", image: "/images/handicrafts.png" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-8 min-h-screen">
      <div className="text-center mb-20">
        <span className="text-terracotta font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Shop</span>
        <h1 className="text-4xl md:text-6xl font-serif text-deepbrown dark:text-ivory mb-6">Our Collections</h1>
        <p className="text-lg text-deepbrown/70 dark:text-sand/80 max-w-2xl mx-auto font-light">
          A curated collection of authentic Indian fabrics, dress materials, and handcrafted lifestyle products crafted by artisan communities across India.
        </p>
      </div>

      {/* Dynamic Products from Supabase */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10 border-b border-deepbrown/10 dark:border-sand/10 pb-4">
          <h2 className="text-3xl font-serif text-deepbrown dark:text-ivory">Available for Purchase</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin h-12 w-12 text-mutedgold" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-deepbrown/60 dark:text-sand/60">
            <p>No products added from the admin panel yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white dark:bg-[#1a0f0a] border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-stone-100 dark:bg-stone-900 relative overflow-hidden">
                  {product.image_url ? (
                    <Image src={product.image_url} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-400">No Image</div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-deepbrown dark:text-ivory shadow-sm">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-deepbrown dark:text-ivory mb-2">{product.name}</h3>
                    <p className="text-deepbrown/60 dark:text-sand/60 font-light text-sm line-clamp-2 mb-4">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100 dark:border-stone-800">
                    <span className="text-lg font-medium text-deepbrown dark:text-ivory">₹{product.price}</span>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center gap-2 bg-mutedgold text-deepbrown hover:bg-mutedgold/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Static Categories Section */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10 border-b border-deepbrown/10 dark:border-sand/10 pb-4">
          <h2 className="text-3xl font-serif text-deepbrown dark:text-ivory">Fabrics Categories</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fabricTypes.map((fabric, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-stone-200 dark:bg-stone-800 rounded-sm mb-4 overflow-hidden relative">
                <Image src={fabric.image} alt={fabric.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-deepbrown/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              </div>
              <h3 className="text-xl font-serif text-deepbrown dark:text-ivory group-hover:text-terracotta transition-colors">{fabric.name}</h3>
              <p className="text-deepbrown/60 dark:text-sand/60 font-light mt-1">{fabric.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-10 border-b border-deepbrown/10 dark:border-sand/10 pb-4">
          <h2 className="text-3xl font-serif text-deepbrown dark:text-ivory">Handicrafts Categories</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {handicrafts.map((craft, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square bg-stone-200 dark:bg-stone-800 rounded-sm mb-4 overflow-hidden relative">
                <Image src={craft.image} alt={craft.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-deepbrown/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              </div>
              <h3 className="text-lg font-serif text-deepbrown dark:text-ivory group-hover:text-terracotta transition-colors">{craft.name}</h3>
              <p className="text-sm text-deepbrown/60 dark:text-sand/60 font-light mt-1">{craft.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <div className="mt-20 text-center">
        <p className="text-lg text-deepbrown/70 dark:text-sand/70 italic mb-6">Looking for something specific?</p>
        <Link href="/contact" className="px-8 py-4 bg-mutedgold text-deepbrown font-medium tracking-wide hover:bg-white transition-colors duration-300 inline-block">
          Contact Us for Custom Orders
        </Link>
      </div>
    </div>
  );
}
