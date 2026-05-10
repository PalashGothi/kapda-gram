import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-ivory dark:bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="text-center mb-16">
          <span className="text-terracotta font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-deepbrown dark:text-ivory mb-6">Contact Kapda Gram</h1>
          <p className="text-lg text-deepbrown/70 dark:text-sand/80 max-w-2xl mx-auto font-light">
            Whether you have a question about our fabrics, want to place a custom order, or just want to say hello, we’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Form */}
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F5F5DC] dark:bg-[#2D1810] rounded-full text-terracotta">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-deepbrown dark:text-ivory mb-1">Email</h3>
                  <a href="mailto:hello@kapdagram.com" className="text-deepbrown/70 dark:text-sand/70 hover:text-terracotta transition-colors">hello@kapdagram.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F5F5DC] dark:bg-[#2D1810] rounded-full text-terracotta">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-deepbrown dark:text-ivory mb-1">Phone</h3>
                  <a href="tel:+919229226275" className="text-deepbrown/70 dark:text-sand/70 hover:text-terracotta transition-colors">+91 92292 26275</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#F5F5DC] dark:bg-[#2D1810] rounded-full text-terracotta">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-deepbrown dark:text-ivory mb-1">Visit Us</h3>
                <a href="https://maps.app.goo.gl/NhyAhNCYkFWvgvtW6" target="_blank" rel="noopener noreferrer" className="text-deepbrown/70 dark:text-sand/70 hover:text-terracotta transition-colors">
                  8 Dasshera Maidan Ujjain <br /> Pin 456010
                </a>
              </div>
            </div>

            {/* Social Media & WhatsApp */}
            <div className="pt-8 border-t border-deepbrown/10 dark:border-sand/10">
              <h3 className="font-serif text-2xl text-deepbrown dark:text-ivory mb-6">Connect With Us</h3>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="p-3 border border-deepbrown/20 dark:border-sand/20 rounded-full text-deepbrown dark:text-ivory hover:bg-terracotta hover:text-white hover:border-terracotta transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 border border-deepbrown/20 dark:border-sand/20 rounded-full text-deepbrown dark:text-ivory hover:bg-terracotta hover:text-white hover:border-terracotta transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 border border-deepbrown/20 dark:border-sand/20 rounded-full text-deepbrown dark:text-ivory hover:bg-terracotta hover:text-white hover:border-terracotta transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 border border-deepbrown/20 dark:border-sand/20 rounded-full text-deepbrown dark:text-ivory hover:bg-terracotta hover:text-white hover:border-terracotta transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <a href="https://wa.me/919229226275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium tracking-wide hover:bg-[#128C7E] transition-colors duration-300 rounded-sm">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#1a0f0a] p-8 shadow-lg border border-deepbrown/5 dark:border-sand/5">
              <h3 className="font-serif text-2xl text-deepbrown dark:text-ivory mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-deepbrown/70 dark:text-sand/70">First Name</label>
                    <input type="text" className="w-full p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-sm focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-deepbrown/70 dark:text-sand/70">Last Name</label>
                    <input type="text" className="w-full p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-sm focus:outline-none focus:border-terracotta transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-deepbrown/70 dark:text-sand/70">Email Address</label>
                  <input type="email" className="w-full p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-sm focus:outline-none focus:border-terracotta transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-deepbrown/70 dark:text-sand/70">Message</label>
                  <textarea rows={4} className="w-full p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-sm focus:outline-none focus:border-terracotta transition-colors"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-mutedgold text-deepbrown font-medium tracking-wide hover:bg-terracotta hover:text-white transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-64 bg-[#F5F5DC]/50 dark:bg-[#2D1810]/50 border border-deepbrown/10 dark:border-sand/10 rounded-sm overflow-hidden relative group">
              <a href="https://maps.app.goo.gl/NhyAhNCYkFWvgvtW6" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex flex-col items-center justify-center text-deepbrown/60 dark:text-sand/60 font-serif hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <MapPin className="w-10 h-10 mb-3 group-hover:scale-110 group-hover:-translate-y-1 transition-all text-terracotta" />
                <span className="text-xl font-medium text-deepbrown dark:text-ivory mb-1">View on Google Maps</span>
                <span className="text-sm font-light">8 Dasshera Maidan Ujjain, Pin 456010</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
