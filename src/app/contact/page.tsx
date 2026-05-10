export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-serif text-deepbrown dark:text-ivory mb-6">Contact Us</h1>
      <p className="text-lg text-deepbrown/70 dark:text-sand/80 max-w-2xl mb-8">This page is currently under construction. Get in touch with us for inquiries.</p>
      <a href="mailto:hello@kapdagram.com" className="px-8 py-4 bg-mutedgold text-deepbrown font-medium tracking-wide hover:bg-white transition-colors duration-300">
        Email Us
      </a>
    </div>
  );
}
