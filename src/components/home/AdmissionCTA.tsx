import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Phone, Sparkles, PartyPopper } from 'lucide-react';
import Reveal from '@/components/Reveal';
import FloatingShapes from '@/components/FloatingShapes';
import { CONTACT } from '@/lib/data';

export default function AdmissionCTA() {
  return (
    <section className="relative bg-cream px-5 py-20 lg:px-8 md:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral via-coral-light to-soft-yellow px-6 py-14 text-center shadow-lift md:px-16 md:py-20">
          <FloatingShapes />
          <div className="relative">
            <motion.span
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/25 text-white backdrop-blur-sm"
            >
              <PartyPopper className="h-8 w-8" />
            </motion.span>

            <h2 className="mt-6 text-balance font-heading text-3xl font-800 leading-tight text-white md:text-5xl">
              Admissions Open for 2026-27
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90 md:text-lg">
              Limited seats across all programs. Book a school tour today and discover why parents trust us with their child's first steps into learning.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/admissions"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-700 text-coral shadow-lift transition-all hover:-translate-y-1 hover:gap-3 sm:w-auto"
              >
                <CalendarCheck className="h-5 w-5" /> Book a Visit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/918015812645"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-4 text-base font-700 text-white transition-all hover:-translate-y-1 hover:bg-white/15 sm:w-auto"
              >
                <Phone className="h-5 w-5" /> Contact Us
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm font-600 text-white/80">
              <Sparkles className="h-4 w-4" /> Tour slots filling fast — reserve yours today
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
