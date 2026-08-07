import { useState } from 'react';
import { IMAGES } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FloatingShapes from '@/components/FloatingShapes';
import Lightbox from '@/components/Lightbox';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const items = IMAGES.gallery.map((g) => ({ src: g.src, alt: g.alt }));

export default function Gallery() {
 const [lb, setLb] = useState<number | null>(null);

 return (
 <main className="pt-20">
 {/* Hero */}
 <section className="relative overflow-hidden bg-cream pt-16 pb-12 md:pt-24 md:pb-16">
 <FloatingShapes />
 <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
 <Reveal>
 <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-coral">
 Gallery
 </span>
 <h1 className="mt-5 text-balance font-heading text-4xl font-800 leading-[1.1] text-ink md:text-5xl lg:text-6xl">
 Moments Worth a Thousand Smiles
 </h1>
 <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
 Step inside our world — laughter, discovery, creativity and the everyday magic that fills our classrooms and gardens.
 </p>
 </Reveal>
 </div>
 </section>

 {/* Masonry gallery */}
 <section className="relative bg-cream px-5 pb-24 lg:px-8">
 <div className="mx-auto max-w-7xl">
 <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4 [&>*]:mb-3 sm:[&>*]:mb-4">
 {items.map((img, i) => (
 <Reveal key={`${img.src}-${i}`} delay={(i % 4) * 0.05}>
 <motion.button
 whileHover={{ scale: 0.98 }}
 onClick={() => setLb(i)}
 className="group relative block w-full overflow-hidden rounded-[1.25rem] shadow-soft"
 >
 <img
 src={img.src}
 alt={img.alt}
 loading="lazy"
 className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
 <span className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-cream/90 text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
 <ZoomIn className="h-4 w-4"/>
 </span>
 <p className="absolute bottom-3 left-3 translate-y-2 text-xs font-600 text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
 {img.alt}
 </p>
 </motion.button>
 </Reveal>
 ))}
 </div>
 </div>

 <Lightbox
 items={items}
 index={lb}
 onClose={() => setLb(null)}
 onNav={(dir) => setLb((p) => (p === null ? p : (p + dir + items.length) % items.length))}
 />
 </section>
 </main>
 );
}
