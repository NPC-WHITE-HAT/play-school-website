import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CalendarCheck, Star, Play } from 'lucide-react';
import { IMAGES, TRUST_BADGES } from '@/lib/data';
import Icon from '@/components/Icon';

export default function Hero() {
 const ref = useRef<HTMLElement>(null);
 const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
 const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
 const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
 const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

 return (
 <section ref={ref} className="relative overflow-hidden bg-cream pt-28 pb-20 md:pt-36 md:pb-28">
 {/* decorative blobs */}
 <div className="pointer-events-none absolute inset-0"aria-hidden="true">
 <div className="absolute -top-10 right-[8%] h-72 w-72 rounded-[var(--radius-blob)] bg-coral/15 blur-3xl animate-float-slow"/>
 <div className="absolute top-1/2 -left-24 h-80 w-80 rounded-[var(--radius-blob)] bg-soft-green/40 blur-3xl animate-float [animation-delay:-4s]"/>
 <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-[var(--radius-blob)] bg-sky-blue/40 blur-3xl animate-blob"/>
 </div>

 <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8">
 {/* Text */}
 <motion.div style={{ y: yText, opacity }} className="text-center lg:text-left">
 <motion.span
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-2 text-xs font-700 uppercase tracking-[0.14em] text-coral"
 >
 <Star className="h-3.5 w-3.5 fill-coral"/> Admissions Open for 2026-27
 </motion.span>

 <motion.h1
 initial={{ opacity: 0, y: 28 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.1 }}
 className="mt-5 text-balance font-heading text-4xl font-800 leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
 >
 Where Little Minds{' '}
 <span className="relative inline-block text-coral">
 Bloom
 <svg className="absolute -bottom-2 left-0 w-full"viewBox="0 0 200 12"fill="none"preserveAspectRatio="none">
 <path d="M2 9C40 3 80 3 120 6S180 9 198 4"stroke="#FF8C6B"strokeWidth="4"strokeLinecap="round"/>
 </svg>
 </span>{' '}
 Every Day
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.2 }}
 className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft lg:mx-0 md:text-lg"
 >
 A warm, premium preschool where play-based learning, loving teachers and a safe, stimulating campus help your child grow curious, confident and kind — one joyful day at a time.
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.3 }}
 className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center"
 >
 <Link
 to="/admissions"
 className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-base font-700 text-white shadow-coral transition-all duration-300 hover:-translate-y-1 hover:bg-coral-dark hover:shadow-lift sm:w-auto"
 >
 <CalendarCheck className="h-5 w-5"/> Book a School Tour
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
 </Link>
 <Link
 to="/admissions"
 className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink/15 bg-white/60 px-7 py-4 text-base font-700 text-ink backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:text-coral sm:w-auto"
 >
 <Play className="h-4 w-4 fill-current"/> Admission Open
 </Link>
 </motion.div>

 {/* Trust badges */}
 <motion.ul
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.45 }}
 className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:justify-start justify-items-center lg:max-w-none max-w-md mx-auto"
 >
 {TRUST_BADGES.map((b) => (
 <li key={b.label} className="flex flex-col items-center gap-2 rounded-2xl bg-white/50 px-2 py-3 text-center backdrop-blur-sm">
 <span className="grid h-10 w-10 place-items-center rounded-xl bg-coral/12 text-coral">
 <Icon name={b.icon} className="h-5 w-5"/>
 </span>
 <span className="text-[11px] font-600 leading-tight text-ink-soft">{b.label}</span>
 </li>
 ))}
 </motion.ul>
 </motion.div>

 {/* Image collage */}
 <motion.div
 style={{ y: yImg }}
 initial={{ opacity: 0, scale: 0.94 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="relative mx-auto w-full max-w-md lg:max-w-none"
 >
 <div className="relative grid grid-cols-2 gap-4">
 <div className="space-y-4">
 <motion.div
 animate={{ y: [0, -14, 0] }}
 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
 className="overflow-hidden rounded-[1.75rem] shadow-lift"
 >
 <img src={IMAGES.heroMain} alt="Happy preschool children playing"className="h-64 w-full object-cover"loading="eager"/>
 </motion.div>
 <motion.div
 animate={{ y: [0, 12, 0] }}
 transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
 className="overflow-hidden rounded-[1.75rem] shadow-soft"
 >
 <img src={IMAGES.heroPlay} alt="Children playing with balls"className="h-40 w-full object-cover"loading="lazy"/>
 </motion.div>
 </div>
 <div className="space-y-4 pt-8">
 <motion.div
 animate={{ y: [0, 12, 0] }}
 transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
 className="overflow-hidden rounded-[1.75rem] shadow-soft"
 >
 <img src={IMAGES.heroTeacher} alt="Teacher with children"className="h-40 w-full object-cover"loading="lazy"/>
 </motion.div>
 <motion.div
 animate={{ y: [0, -14, 0] }}
 transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
 className="overflow-hidden rounded-[1.75rem] shadow-lift"
 >
 <img src={IMAGES.heroRoleplay} alt="Children role-playing"className="h-64 w-full object-cover"loading="lazy"/>
 </motion.div>
 </div>
 </div>

 <motion.div
 animate={{ y: [0, 10, 0] }}
 transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
 className="absolute -top-3 right-0 rounded-2xl glass p-3.5 shadow-lift sm:-right-4"
 >
 <div className="flex items-center gap-2">
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="h-3.5 w-3.5 fill-coral text-coral"/>
 ))}
 </div>
 <span className="text-xs font-700 text-ink">4.9/5 Parent Rating</span>
 </div>
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
}
