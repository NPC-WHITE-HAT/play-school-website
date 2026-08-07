import { PROGRAMS } from '@/lib/data';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FloatingShapes from '@/components/FloatingShapes';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Baby, Clock, Check, ArrowRight, CalendarCheck, Palette, Puzzle, Sparkles } from 'lucide-react';

const colorBar: Record<string, string> = {
 coral: 'from-coral to-coral-light',
 green: 'from-green-deep to-soft-green',
 blue: 'from-blue-deep to-sky-blue',
 yellow: 'from-amber-500 to-soft-yellow',
};

export default function Programs() {
 return (
 <main className="pt-20">
 {/* Hero */}
 <section className="relative overflow-hidden bg-cream pt-16 pb-16 md:pt-24 md:pb-20">
 <FloatingShapes />
 <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
 <Reveal>
 <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-coral">
 Our Programs
 </span>
 <h1 className="mt-5 text-balance font-heading text-4xl font-800 leading-[1.1] text-ink md:text-5xl lg:text-6xl">
 A Thoughtful Path for Every Age
 </h1>
 <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
 Four age-appropriate programs, each with its own carefully crafted curriculum, activities and learning outcomes — designed to help your child bloom at just the right pace.
 </p>
 </Reveal>
 </div>
 </section>

 {/* Program detail sections */}
 <div className="space-y-0">
 {PROGRAMS.map((p, i) => {
 const reversed = i % 2 === 1;
 return (
 <section
 key={p.id}
 id={p.id}
 className={`relative scroll-mt-24 py-20 md:py-24 ${i % 2 === 0 ? 'bg-beige' : 'bg-cream'}`}
 >
 <div className="mx-auto max-w-7xl px-5 lg:px-8">
 <div className={`grid items-center gap-10 lg:grid-cols-2 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
 {/* Image */}
 <Reveal className={reversed ? 'lg:order-2' : ''}>
 <div className="relative">
 <div className={`absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br ${colorBar[p.color]} opacity-20 blur-2xl`} />
 <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
 <img src={p.illustration} alt={p.name} className="h-full w-full object-cover"loading="lazy"/>
 <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"/>
 <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 font-heading text-sm font-700 text-ink backdrop-blur-sm">
 {p.name}
 </span>
 </div>
 </div>
 </Reveal>

 {/* Content */}
 <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
 <span className={`inline-block rounded-full bg-gradient-to-r ${colorBar[p.color]} bg-clip-text text-xs font-700 uppercase tracking-[0.16em] text-transparent`}>
 Program {i + 1}
 </span>
 <h2 className="mt-3 font-heading text-3xl font-800 leading-tight text-ink md:text-4xl">
 {p.name}
 </h2>
 <p className="mt-1 font-heading text-base font-600 text-coral">{p.tagline}</p>
 <p className="mt-4 text-base leading-relaxed text-ink-soft">{p.description}</p>

 <div className="mt-5 flex flex-wrap gap-2.5">
 <span className="inline-flex items-center gap-1.5 rounded-full bg-beige px-3.5 py-2 text-sm font-600 text-ink">
 <Baby className="h-4 w-4 text-coral"/> {p.age}
 </span>
 <span className="inline-flex items-center gap-1.5 rounded-full bg-beige px-3.5 py-2 text-sm font-600 text-ink">
 <Clock className="h-4 w-4 text-coral"/> {p.timing}
 </span>
 </div>

 <div className="mt-7 grid gap-6 sm:grid-cols-3">
 <div>
 <h4 className="flex items-center gap-2 font-heading text-sm font-700 text-ink">
 <Puzzle className="h-4 w-4 text-coral"/> Curriculum
 </h4>
 <ul className="mt-3 space-y-2 text-sm text-ink-soft">
 {p.curriculum.map((c) => (
 <li key={c} className="flex gap-2 leading-snug">
 <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-deep"/> {c}
 </li>
 ))}
 </ul>
 </div>
 <div>
 <h4 className="flex items-center gap-2 font-heading text-sm font-700 text-ink">
 <Palette className="h-4 w-4 text-coral"/> Activities
 </h4>
 <div className="mt-3 flex flex-wrap gap-1.5">
 {p.activities.map((a) => (
 <span key={a} className="rounded-full bg-coral/10 px-2.5 py-1 text-xs font-600 text-coral">{a}</span>
 ))}
 </div>
 </div>
 <div>
 <h4 className="flex items-center gap-2 font-heading text-sm font-700 text-ink">
 <Sparkles className="h-4 w-4 text-coral"/> Learning Outcomes
 </h4>
 <ul className="mt-3 space-y-2 text-sm text-ink-soft">
 {p.outcomes.map((o) => (
 <li key={o} className="flex gap-2 leading-snug">
 <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral"/> {o}
 </li>
 ))}
 </ul>
 </div>
 </div>

 <Link
 to="/admissions"
 className="group mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-700 text-white shadow-coral transition-all hover:gap-3 hover:-translate-y-0.5 hover:bg-coral-dark"
 >
 <CalendarCheck className="h-4 w-4"/> Enquire for {p.name}
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
 </Link>
 </Reveal>
 </div>
 </div>
 </section>
 );
 })}
 </div>

 <AdmissionCTA />
 </main>
 );
}
