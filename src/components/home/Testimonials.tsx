import { TESTIMONIALS } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
 return (
 <section className="relative overflow-hidden bg-beige py-20 md:py-28">
 <div className="pointer-events-none absolute inset-0"aria-hidden="true">
 <div className="absolute left-1/4 top-0 h-64 w-64 rounded-[var(--radius-blob)] bg-soft-pink/40 blur-3xl"/>
 <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-[var(--radius-blob)] bg-soft-yellow/40 blur-3xl"/>
 </div>

 <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Parent Stories"
 title={<>Loved by Parents, Trusted with Little Ones</>}
 subtitle="Real words from real families who call Nest & Nurture their second home."
 />

 <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
 {TESTIMONIALS.map((t, i) => (
 <Reveal key={t.name} delay={(i % 3) * 0.1}>
 <motion.figure
 whileHover={{ y: -6 }}
 className="group relative flex h-full flex-col rounded-[1.5rem] bg-white p-7 shadow-soft transition-shadow hover:shadow-lift"
 >
 <Quote className="absolute right-6 top-6 h-10 w-10 text-coral/15"/>
 <div className="flex gap-0.5">
 {[...Array(t.rating)].map((_, j) => (
 <Star key={j} className="h-4 w-4 fill-coral text-coral"/>
 ))}
 </div>
 <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
"{t.text}"
 </blockquote>
 <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
 <span
 className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-coral to-coral-light font-heading text-sm font-700 text-white ring-2 ring-coral/20"
 aria-hidden="true"
 >
 {t.initials}
 </span>
 <div>
 <p className="font-heading text-sm font-700 text-ink">{t.name}</p>
 <p className="text-xs text-ink-muted">{t.role}</p>
 </div>
 </figcaption>
 </motion.figure>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}
