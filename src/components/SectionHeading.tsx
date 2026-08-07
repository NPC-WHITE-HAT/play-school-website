import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }: Props) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] ${
          light ? 'bg-cream/15 text-cream' : 'bg-coral/10 text-coral'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-balance font-heading text-3xl font-700 leading-[1.15] md:text-4xl lg:text-[2.75rem] ${
        light ? 'text-cream' : 'text-ink'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-cream/80' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
