import { useEffect } from 'react';
import Reveal from '@/components/Reveal';
import FloatingShapes from '@/components/FloatingShapes';
import EventCard from '@/components/EventCard';
import { IMAGES } from '@/lib/data';

const eventItems = IMAGES.gallery.slice(0, 6).map((g) => ({ src: g.src, alt: g.alt }));

export default function Events() {
  useEffect(() => {
    document.title = 'Events — Nest & Nurture Play School and Child Care';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Nest & Nurture events: celebrations, cultural activities and special moments that build learning and joy for our little learners.');
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Nest & Nurture events: celebrations, cultural activities and special moments that build learning and joy for our little learners.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden bg-cream pt-16 pb-12 md:pt-24 md:pb-16">
        <FloatingShapes />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-coral">
              School Events
            </span>
            <h1 className="mt-5 text-balance font-heading text-4xl font-800 leading-[1.1] text-ink md:text-5xl lg:text-6xl">
              Celebrating Learning, Joy & Togetherness
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              Nest & Nurture regularly conducts celebrations, cultural activities and special events that help children learn, participate and create happy memories.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-cream px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          <EventCard
            title="Independence Day Celebration 2026"
            category="Independence Day Celebration"
            description={`Nest & Nurture Play School and Child Care celebrated Independence Day with our little learners through joyful activities, colourful performances and meaningful moments of togetherness. The celebration gave children an opportunity to learn about our nation's values while enjoying a memorable day with their teachers and friends.`}
            items={eventItems}
          />
        </div>
      </section>
    </main>
  );
}
