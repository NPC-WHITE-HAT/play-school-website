import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import { motion } from 'framer-motion';

type Item = { src: string; alt: string };

export default function EventCard({
  title,
  category,
  description,
  items,
}: {
  title: string;
  category: string;
  description: string;
  items: Item[];
}) {
  const [lb, setLb] = useState<number | null>(null);

  const featured = items[0];
  const supporting = items.slice(1);

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-6 text-center">
        <span className="inline-block rounded-full bg-cream/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.12em] text-ink">
          {category}
        </span>
        <h3 className="mt-4 font-heading text-2xl font-800 text-ink">{title}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">{description}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => setLb(0)}
          className="group relative col-span-1 md:col-span-2 block overflow-hidden rounded-2xl shadow-lift"
        >
          <img
            src={featured.src}
            alt={featured.alt}
            loading="lazy"
            className="w-full max-h-[520px] object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </motion.button>

        <div className="grid grid-cols-2 gap-3">
          {supporting.map((s, i) => (
            <motion.button
              key={s.src + i}
              whileHover={{ scale: 1.02 }}
              onClick={() => setLb(i + 1)}
              className="group relative block overflow-hidden rounded-xl shadow-soft"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={items}
        index={lb}
        onClose={() => setLb(null)}
        onNav={(dir) => setLb((p) => (p === null ? p : (p + dir + items.length) % items.length))}
      />
    </article>
  );
}
