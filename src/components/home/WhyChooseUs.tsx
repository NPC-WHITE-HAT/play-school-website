import { WHY_CHOOSE_US } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
 return (
 <section className="relative overflow-hidden bg-cream py-20 md:py-28">
 <div className="pointer-events-none absolute inset-0"aria-hidden="true">
 <div className="absolute right-0 top-1/4 h-64 w-64 rounded-[var(--radius-blob)] bg-soft-green/30 blur-3xl"/>
 <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-[var(--radius-blob)] bg-sky-blue/30 blur-3xl"/>
 </div>

 <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Why Parents Choose Us"
 title={<>Everything Your Child Needs to Thrive</>}
 subtitle="Eight pillars that make Nest & Nurture a place where children are safe, stimulated and truly known."
 />

 <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {WHY_CHOOSE_US.map((item, i) => (
 <Reveal key={item.title} delay={(i % 4) * 0.07}>
 <motion.div
 whileHover={{ y: -6 }}
 className="group h-full rounded-[1.5rem] bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
 >
 <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-coral/15 to-soft-green/30 text-coral transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
 <Icon name={item.icon} className="h-7 w-7"/>
 </span>
 <h3 className="mt-5 font-heading text-base font-700 text-ink">{item.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
 </motion.div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}
