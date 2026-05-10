import Image from "next/image";
import Link from "next/link";

const craftSections = [
  {
    title: "Ajrakh",
    origin: "Kutch, Gujarat",
    desc: "A timeless craft of natural dyed hand block printing featuring intricate geometric and nature-inspired motifs.",
  },
  {
    title: "Kalamkari",
    origin: "Andhra Pradesh",
    desc: "Artistic hand-painted and block-printed textiles inspired by mythological and floral themes.",
  },
  {
    title: "Ikat",
    origin: "Telangana & Odisha",
    desc: "Resist-dyed woven fabrics featuring intricate blurred geometric patterns.",
  },
  {
    title: "Chanderi",
    origin: "Madhya Pradesh",
    desc: "Lightweight luxurious fabrics blending silk and cotton elegance, known for their sheer texture.",
  },
  {
    title: "Banarasi",
    origin: "Varanasi, Uttar Pradesh",
    desc: "Rich woven textiles with intricate zari and traditional motifs, perfect for occasion wear.",
  },
  {
    title: "Bagh Print",
    origin: "Madhya Pradesh",
    desc: "Traditional block printed textiles known for earthy tones and handcrafted patterns.",
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory dark:bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 text-center mb-24 max-w-4xl">
        <span className="text-terracotta font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
        <h1 className="text-4xl md:text-6xl font-serif text-deepbrown dark:text-ivory mb-8 leading-tight">
          Preserving India's <br /> <span className="italic font-light text-mutedgold">Handcrafted Heritage</span>
        </h1>
        <div className="text-lg text-deepbrown/80 dark:text-sand/80 font-light space-y-6">
          <p>
            Kapda Gram celebrates the timeless beauty of Indian textiles and handcrafted artistry. Rooted in the spiritual and cultural city of Ujjain, our brand aims to preserve and promote India’s traditional weaving, dyeing, embroidery, and handmade craft techniques while bringing them to modern lifestyles.
          </p>
          <p>
            Every fabric and handcrafted product reflects artisan skill, cultural heritage, sustainable craftsmanship, handmade authenticity, and slow fashion values. Kapda Gram supports artisan communities and promotes ethically handcrafted Indian products for conscious buyers.
          </p>
        </div>
      </div>

      {/* Artisan Craft Sections */}
      <div className="bg-[#F5F5DC] dark:bg-[#2D1810] py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-deepbrown dark:text-ivory mb-4">Our Artisan Crafts</h2>
            <p className="text-lg text-deepbrown/70 dark:text-sand/80 font-light max-w-2xl mx-auto">
              Discover the diverse techniques and regional specialties that make Indian textiles unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {craftSections.map((craft, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1a0f0a] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-deepbrown/5 dark:border-sand/5">
                <div className="mb-6 h-48 bg-stone-100 dark:bg-stone-900 w-full rounded-sm flex items-center justify-center text-deepbrown/20 dark:text-sand/20 font-serif italic relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/woven-light.png')] mix-blend-overlay"></div>
                  Craft Image
                </div>
                <h3 className="text-2xl font-serif text-deepbrown dark:text-ivory mb-2">{craft.title}</h3>
                <span className="text-terracotta text-sm uppercase tracking-wider font-medium mb-4 block">{craft.origin}</span>
                <p className="text-deepbrown/70 dark:text-sand/70 font-light">{craft.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="container mx-auto px-4 md:px-8 py-24 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif text-deepbrown dark:text-ivory mb-6">Slow Fashion Values</h2>
        <p className="text-lg text-deepbrown/80 dark:text-sand/80 font-light mb-10 leading-relaxed">
          We believe in conscious consumption. By choosing handcrafted textiles, you are not only acquiring a piece of art but also ensuring the livelihood of artisan communities across India.
        </p>
        <Link href="/products" className="px-8 py-4 bg-mutedgold text-deepbrown font-medium tracking-wide hover:bg-white transition-colors duration-300 inline-block">
          Explore Our Collection
        </Link>
      </div>
    </div>
  );
}
