import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Item = { src: string; alt: string };

export default function Lightbox({
  items,
  index,
  onClose,
  onNav,
}: {
  items: Item[];
  index: number | null;
  onClose: () => void;
  onNav: (dir: -1 | 1) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onNav]);

  const current = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-4 backdrop-blur-sm"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream/25"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNav(-1); }}
            aria-label="Previous"
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream/25 md:left-8"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-[90vw] rounded-3xl object-contain shadow-lift"
          />

          <button
            onClick={(e) => { e.stopPropagation(); onNav(1); }}
            aria-label="Next"
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream/25 md:right-8"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-cream/10 px-4 py-1.5 text-sm text-cream/90">
            {index! + 1} / {items.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
