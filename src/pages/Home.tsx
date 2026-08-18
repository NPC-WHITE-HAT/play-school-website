import Hero from '@/components/home/Hero';
import ProgramsSection from '@/components/home/ProgramsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ActivitiesSection from '@/components/home/ActivitiesSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import Testimonials from '@/components/home/Testimonials';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import { motion } from 'framer-motion';
import { Heart, Award, Users, BookOpen } from 'lucide-react';

const STATS = [
 { icon: Users, value: '100+', label: 'Happy Families' },
 { icon: BookOpen, value: '>1.5 years', label: 'Age group' },
 { icon: Award, value: '13+', label: 'Years of Care' },
 { icon: Heart, value: '8:1', label: 'Student-Teacher Ratio' },
];

function StatsStrip() {
 return (
 <section className="relative z-10 -mt-10 px-5 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mx-auto grid max-w-5xl grid-cols-2 gap-4 rounded-[2rem] bg-white p-6 shadow-lift md:grid-cols-4 md:p-8"
 >
 {STATS.map((s, i) => (
 <div key={s.label} className="flex flex-col items-center text-center">
 <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral/12 text-coral">
 <s.icon className="h-6 w-6"/>
 </span>
 <span className="mt-3 font-heading text-2xl font-800 text-ink md:text-3xl">{s.value}</span>
 <span className="text-xs font-600 text-ink-soft md:text-sm">{s.label}</span>
 </div>
 ))}
 </motion.div>
 </section>
 );
}

export default function Home() {
 return (
 <>
 <Hero />
 <StatsStrip />
 <ProgramsSection />
 <WhyChooseUs />
 <ActivitiesSection />
 <GalleryPreview />
 <Testimonials />
 <AdmissionCTA />
 </>
 );
}
