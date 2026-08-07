import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import FloatingShapes from '@/components/FloatingShapes';
import SvgDivider from '@/components/SvgDivider';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import { IMAGES, TIMELINE, WHY_CHOOSE_US } from '@/lib/data';
import Icon from '@/components/Icon';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Sparkles, ShieldCheck, GraduationCap, Baby, Award } from 'lucide-react';

const PHILOSOPHY = [
 { icon: 'Puzzle', title: 'Play is Work', desc: 'Children learn best through play. We turn every moment — stacking blocks, pouring water, singing — into a meaningful learning experience.' },
 { icon: 'Heart', title: 'Whole-Child Care', desc: 'We nurture not just academics, but emotional, social, physical and creative growth — because every part of a child matters.' },
 { icon: 'Users', title: 'Individual Pace', desc: 'No two children are alike. We observe, understand and gently guide each little one at their own unique pace.' },
 { icon: 'Sparkles', title: 'Joyful Environment', desc: 'Bright, beautiful spaces filled with colour, nature and warmth make children feel safe, excited and ready to explore.' },
];

const TRUST = [
 { icon: ShieldCheck, value: '100%', label: 'Child-safe campus with CCTV' },
 { icon: GraduationCap, value: '100%', label: 'Certified early-childhood educators' },
 { icon: Baby, value: '8:1', label: 'Low student-teacher ratio' },
 { icon: Award, value: '13+', label: 'Years trusted by families' },
];

export default function About() {
 return (
 <main className="pt-20">
 {/* Hero */}
 <section className="relative overflow-hidden bg-cream pt-16 pb-20 md:pt-24 md:pb-28">
 <FloatingShapes />
 <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
 <Reveal>
 <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-coral">
 Our Story
 </span>
 <h1 className="mt-5 text-balance font-heading text-4xl font-800 leading-[1.1] text-ink md:text-5xl lg:text-6xl">
 A Place Where Children Come First, Always
 </h1>
 <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
 For over a decade, Nest & Nurture has been a warm second home for little ones — a place where curiosity is celebrated, kindness is taught and every child is seen, heard and loved.
 </p>
 </Reveal>
 </div>
 </section>

 {/* School story */}
 <section className="relative bg-beige py-20 md:py-28">
 <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
 <Reveal>
 <div className="relative">
 <div className="overflow-hidden rounded-[2rem] shadow-lift">
 <img src={IMAGES.aboutStory} alt="Children and teachers in classroom"className="h-full w-full object-cover"loading="lazy"/>
 </div>
 <motion.div
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 5, repeat: Infinity }}
 className="absolute -bottom-5 -right-3 rounded-2xl bg-white p-5 shadow-lift"
 >
 <p className="font-heading text-3xl font-800 text-coral">Since</p>
 <p className="font-heading text-3xl font-800 text-ink">2012</p>
 </motion.div>
 </div>
 </Reveal>

 <Reveal delay={0.1}>
 <span className="text-xs font-700 uppercase tracking-[0.16em] text-coral">How it began</span>
 <h2 className="mt-3 font-heading text-3xl font-700 leading-tight text-ink md:text-4xl">
 Our School Story
 </h2>
 <p className="mt-5 text-base leading-relaxed text-ink-soft">
 Nest & Nurture began with a simple conviction: that the early years deserve more than just supervision — they deserve magic. Our founder, Dr. Lakshmi Nair, started with 12 children, a tiny room, and a big dream of creating a preschool that felt like a warm hug.
 </p>
 <p className="mt-4 text-base leading-relaxed text-ink-soft">
 Today, we've grown into a purpose-built campus with hundreds of alumni, but that same heart remains. Every corner is designed with children in mind, every teacher is chosen for their warmth as much as their skill, and every day begins with a smile at the gate.
 </p>
 <div className="mt-7 flex flex-wrap gap-3">
 {['Play-based learning', 'Child-safe campus', 'Loving teachers', '13+ years of trust'].map((t) => (
 <span key={t} className="rounded-full bg-coral/10 px-4 py-2 text-sm font-600 text-coral">{t}</span>
 ))}
 </div>
 </Reveal>
 </div>
 <SvgDivider from="#F7F3EA"to="#FFF8F0"/>
 </section>

 {/* Vision / Mission */}
 <section className="relative bg-cream py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-5 lg:px-8">
 <div className="grid gap-6 md:grid-cols-2">
 <Reveal>
 <div className="h-full rounded-[1.75rem] bg-gradient-to-br from-soft-green/50 to-beige p-8 shadow-soft md:p-10">
 <span className="grid h-14 w-14 place-items-center rounded-2xl bg-green-deep text-white">
 <Target className="h-7 w-7"/>
 </span>
 <h3 className="mt-6 font-heading text-2xl font-700 text-ink">Our Mission</h3>
 <p className="mt-4 text-base leading-relaxed text-ink-soft">
 To create a nurturing, safe and joyful environment where every child develops a love for learning, builds strong values, and grows into a confident, curious and kind individual ready to embrace the world.
 </p>
 </div>
 </Reveal>
 <Reveal delay={0.1}>
 <div className="h-full rounded-[1.75rem] bg-gradient-to-br from-sky-blue/50 to-beige p-8 shadow-soft md:p-10">
 <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-deep text-white">
 <Eye className="h-7 w-7"/>
 </span>
 <h3 className="mt-6 font-heading text-2xl font-700 text-ink">Our Vision</h3>
 <p className="mt-4 text-base leading-relaxed text-ink-soft">
 To be the most trusted preschool in the community — a place parents recommend with pride and children remember with joy — setting the gold standard for warm, holistic, play-based early education.
 </p>
 </div>
 </Reveal>
 </div>
 </div>
 </section>

 {/* Learning Philosophy */}
 <section className="relative overflow-hidden bg-gradient-to-b from-soft-green/30 to-sky-blue/20 py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Our Philosophy"
 title={<>How We Help Little Minds Bloom</>}
 subtitle="Four beliefs that shape everything we do, every single day."
 />
 <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {PHILOSOPHY.map((p, i) => (
 <Reveal key={p.title} delay={(i % 4) * 0.08}>
 <motion.div whileHover={{ y: -6 }} className="h-full rounded-[1.5rem] bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift">
 <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coral/12 text-coral">
 <Icon name={p.icon} className="h-7 w-7"/>
 </span>
 <h3 className="mt-5 font-heading text-lg font-700 text-ink">{p.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
 </motion.div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>

 {/* Timeline */}
 <section className="relative bg-cream py-20 md:py-28">
 <div className="mx-auto max-w-4xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Our Journey"
 title={<>A Beautiful Timeline of Growth</>}
 subtitle="From twelve little learners to hundreds of happy families — here's how we bloomed."
 />

 <div className="relative mt-16">
 {/* center line */}
 <div className="absolute left-4 top-0 h-full w-0.5 bg-coral/20 md:left-1/2 md:-translate-x-1/2"/>

 <div className="space-y-10">
 {TIMELINE.map((t, i) => (
 <Reveal key={t.year} delay={0.05}>
 <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
 {/* dot */}
 <div className="absolute left-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-coral text-white shadow-coral ring-4 ring-cream md:left-1/2">
 <Sparkles className="h-4 w-4"/>
 </div>

 {/* content */}
 <div className={`ml-12 flex-1 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'}`}>
 <motion.div
 whileHover={{ scale: 1.02 }}
 className="rounded-[1.25rem] bg-white p-5 shadow-soft transition-shadow hover:shadow-lift"
 >
 <span className="font-heading text-2xl font-800 text-coral">{t.year}</span>
 <h3 className="mt-1 font-heading text-lg font-700 text-ink">{t.title}</h3>
 <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.desc}</p>
 </motion.div>
 </div>

 <div className="hidden md:block md:w-1/2"/>
 </div>
 </Reveal>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Why parents trust us */}
 <section className="relative overflow-hidden bg-ink py-20 md:py-28">
 <div className="pointer-events-none absolute inset-0"aria-hidden="true">
 <div className="absolute -top-20 right-1/4 h-64 w-64 rounded-[var(--radius-blob)] bg-coral/20 blur-3xl"/>
 <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-[var(--radius-blob)] bg-soft-green/15 blur-3xl"/>
 </div>
 <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Trust & Safety"
 title={<>Why Parents Trust Us</>}
 subtitle="The numbers behind the warm smiles and happy mornings."
 light
 />
 <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {TRUST.map((t, i) => (
 <Reveal key={t.label} delay={(i % 4) * 0.08}>
 <div className="rounded-[1.5rem] bg-cream/5 p-7 text-center backdrop-blur-sm ring-1 ring-cream/10">
 <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-coral/20 text-coral-light">
 <t.icon className="h-7 w-7"/>
 </span>
 <p className="mt-4 font-heading text-3xl font-800 text-cream">{t.value}</p>
 <p className="mt-1 text-sm text-cream/70">{t.label}</p>
 </div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>

 <AdmissionCTA />
 </main>
 );
}
