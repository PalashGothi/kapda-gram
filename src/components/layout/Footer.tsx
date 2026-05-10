import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deepbrown text-ivory py-16 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif tracking-wider">Kapda Gram</h2>
          <p className="text-sand/80 text-sm leading-relaxed max-w-sm">
            Preserving the rich heritage of Indian textiles. From the heart of Ujjain, bringing you the finest handwoven fabrics.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-mutedgold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:text-mutedgold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="hover:text-mutedgold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6 text-mutedgold">Quick Links</h3>
          <ul className="space-y-4 text-sm text-sand/80">
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/products" className="hover:text-white transition-colors">Shop Fabrics</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6 text-mutedgold">Categories</h3>
          <ul className="space-y-4 text-sm text-sand/80">
            <li><Link href="/products?category=silk" className="hover:text-white transition-colors">Pure Silk</Link></li>
            <li><Link href="/products?category=khadi" className="hover:text-white transition-colors">Handloom Khadi</Link></li>
            <li><Link href="/products?category=cotton" className="hover:text-white transition-colors">Organic Cotton</Link></li>
            <li><Link href="/products?category=banarasi" className="hover:text-white transition-colors">Banarasi Brocade</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-6 text-mutedgold">Contact</h3>
          <ul className="space-y-4 text-sm text-sand/80">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-mutedgold" />
              <a href="https://maps.app.goo.gl/NhyAhNCYkFWvgvtW6" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                123 Textile Market, Freeganj,<br />Ujjain, Madhya Pradesh 456010
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-mutedgold" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-mutedgold" />
              <span>hello@kapdagram.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-16 pt-8 border-t border-sand/20 text-center text-sm text-sand/60">
        <p>&copy; {new Date().getFullYear()} Kapda Gram. All rights reserved.</p>
      </div>
    </footer>
  );
}
