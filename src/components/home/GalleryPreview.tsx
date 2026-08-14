import { useState } from 'react';
import { IMAGES } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Lightbox from '@/components/Lightbox';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ZoomIn } from 'lucide-react';

const preview = IMAGES.gallery.slice(0, 6).map((g) => ({ src: g.src, alt: g.alt }));

export default function GalleryPreview() {
 const [lb, setLb] = useState<number | null>(null);

 return (
 <section className="relative bg-cream py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Gallery"
 title={<>Moments of Wonder & Joy</>}
 subtitle="A glimpse into the everyday magic — laughter, discovery, creativity and friendship that fill our classrooms."
 />

 <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
 {preview.map((img, i) => (
 <Reveal
 key={`${img.src}-${i}`}
 delay={(i % 5) * 0.06}
 className={i === 0 ? 'col-span-2 row-span-2' : ''}
 >
 <motion.button
 whileHover={{ scale: 0.98 }}
 onClick={() => setLb(i)}
 className="group relative block h-full w-full overflow-hidden rounded-[1.25rem] shadow-soft"
 >
 <img
 src={img.src}
 alt={img.alt}
 loading="lazy"
 className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 ? 'h-full min-h-64' : 'h-40 sm:h-48'}`}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
 <span className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-cream/90 text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
 <ZoomIn className="h-4 w-4"/>
 </span>
 </motion.button>
 </Reveal>
 ))}
 </div>

 <div className="mt-12 text-center">
 <Link
 to="/gallery"
 className="group inline-flex items-center gap-2 rounded-full border-2 border-ink/15 px-7 py-3.5 text-sm font-700 text-ink transition-all hover:gap-3 hover:border-coral hover:text-coral"
 >
 View Full Gallery
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
 </Link>
 </div>
 </div>

 <Lightbox
 items={preview}
 index={lb}
 onClose={() => setLb(null)}
 onNav={(dir) => setLb((p) => (p === null ? p : (p + dir + preview.length) % preview.length))}
 />
 </section>
 );
}
