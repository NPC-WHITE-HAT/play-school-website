import { PROGRAMS } from '@/lib/data';
import ProgramCard from '@/components/ProgramCard';
import SectionHeading from '@/components/SectionHeading';
import SvgDivider from '@/components/SvgDivider';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProgramsSection() {
 return (
 <section className="relative bg-beige py-20 md:py-28">
 <div className="mx-auto max-w-7xl px-5 lg:px-8">
 <SectionHeading
 eyebrow="Our Programs"
 title={<>A Program for Every Little Step</>}
 subtitle="From first toddling steps to confident school-readiness, each age group has its own thoughtfully designed space, routine and curriculum."
 />

 <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {PROGRAMS.map((p, i) => (
 <ProgramCard key={p.id} program={p} index={i} />
 ))}
 </div>

 <div className="mt-12 text-center">
 <Link
 to="/programs"
 className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-700 text-cream transition-all hover:gap-3 hover:bg-coral"
 >
 Explore All Programs
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
 </Link>
 </div>
 </div>

 <SvgDivider from="#F7F3EA"to="#FFF8F0"/>
 </section>
 );
}
