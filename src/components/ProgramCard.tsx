import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Baby, ArrowRight } from 'lucide-react';
import type { Program } from '@/lib/data';
import Reveal from '@/components/Reveal';

const colorMap: Record<Program['color'], { bg: string; ring: string; text: string; chip: string }> = {
 coral: { bg: 'bg-coral/8', ring: 'group-hover:ring-coral/30', text: 'text-coral', chip: 'bg-coral/12 text-coral' },
 green: { bg: 'bg-soft-green/40', ring: 'group-hover:ring-green-deep/30', text: 'text-green-deep', chip: 'bg-soft-green/50 text-green-deep' },
 blue: { bg: 'bg-sky-blue/50', ring: 'group-hover:ring-blue-deep/30', text: 'text-blue-deep', chip: 'bg-sky-blue/60 text-blue-deep' },
 yellow: { bg: 'bg-soft-yellow/50', ring: 'group-hover:ring-amber-500/30', text: 'text-amber-600', chip: 'bg-soft-yellow/60 text-amber-600' },
};

export default function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
 const c = colorMap[program.color];
 return (
 <Reveal delay={index * 0.08} className="h-full">
 <motion.div
 whileHover={{ y: -8 }}
 transition={{ type: 'spring', stiffness: 300, damping: 20 }}
 className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-transparent transition-shadow hover:shadow-lift ${c.ring}`}
 >
 <div className={`relative h-44 overflow-hidden ${c.bg}`}>
 <img
 src={program.illustration}
 alt={program.name}
 loading="lazy"
 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent"/>
 <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-700 ${c.chip}`}>
 {program.name}
 </span>
 </div>

 <div className="flex flex-1 flex-col p-6">
 <p className={`text-xs font-600 ${c.text}`}>{program.tagline}</p>
 <h3 className="mt-1 font-heading text-xl font-700 text-ink">{program.name}</h3>

 <div className="mt-4 flex flex-wrap gap-2 text-xs font-600 text-ink-soft">
 <span className="inline-flex items-center gap-1.5 rounded-full bg-beige px-3 py-1.5">
 <Baby className="h-3.5 w-3.5"/> {program.age}
 </span>
 <span className="inline-flex items-center gap-1.5 rounded-full bg-beige px-3 py-1.5">
 <Clock className="h-3.5 w-3.5"/> {program.timing}
 </span>
 </div>

 <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
 {program.description}
 </p>

 <Link
 to="/programs"
 className={`mt-5 inline-flex items-center gap-1.5 text-sm font-700 ${c.text} transition-all hover:gap-2.5`}
 >
 Learn More <ArrowRight className="h-4 w-4"/>
 </Link>
 </div>
 </motion.div>
 </Reveal>
 );
}
