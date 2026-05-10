import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-8 min-h-screen">
      <div className="text-center mb-20">
        <span className="text-terracotta font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Shop</span>
        <h1 className="text-4xl md:text-6xl font-serif text-deepbrown dark:text-ivory mb-6">Our Collections</h1>
        <p className="text-lg text-deepbrown/70 dark:text-sand/80 max-w-2xl mx-auto font-light">
          A curated collection of authentic Indian fabrics, dress materials, and handcrafted lifestyle products crafted by artisan communities across India.
        </p>
      </div>

      {/* Fabrics Section */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10 border-b border-deepbrown/10 dark:border-sand/10 pb-4">
          <h2 className="text-3xl font-serif text-deepbrown dark:text-ivory">Fabrics & Dress Materials</h2>
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

      {/* Handicrafts Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-10 border-b border-deepbrown/10 dark:border-sand/10 pb-4">
          <h2 className="text-3xl font-serif text-deepbrown dark:text-ivory">Handicrafts & Lifestyle</h2>
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
