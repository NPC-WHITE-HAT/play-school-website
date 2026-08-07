import { ACTIVITIES } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { motion } from 'framer-motion';

export default function ActivitiesSection() {
 return (
 <section className="relative overflow-hidden bg-gradient-to-b from-soft-green/30 to-sky-blue/30 py-20 md:py-28">
 <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Daily Adventures"
 title={<>Learning Through Joyful Activities</>}
 subtitle="Every day is a new adventure — a rich mix of art, music, movement, stories and discovery that nurtures the whole child."
 />

 <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
 {ACTIVITIES.map((a, i) => (
 <Reveal key={a.title} delay={(i % 4) * 0.07}>
 <motion.div
 whileHover={{ y: -6 }}
 className="group flex h-full items-start gap-4 rounded-[1.5rem] bg-white/70 p-5 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift"
 >
 <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-coral/12 text-coral transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
 <Icon name={a.icon} className="h-6 w-6"/>
 </span>
 <div>
 <h3 className="font-heading text-base font-700 text-ink">{a.title}</h3>
 <p className="mt-1 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
 </div>
 </motion.div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}
