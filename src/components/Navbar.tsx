import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/components/BrandLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-soft border-b border-ink/5 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <BrandLogo className="h-10 md:h-12" />
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-600 transition-colors ${
                    active ? 'text-coral' : 'text-ink-soft hover:text-coral'
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-coral/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/918015812645"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-700 text-white shadow-coral transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-lift sm:block"
          >
            Admission Open
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-5 mt-2 flex flex-col gap-1 rounded-3xl glass p-3 shadow-soft">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`block rounded-2xl px-4 py-3 text-base font-600 transition-colors ${
                      pathname === l.to
                        ? 'bg-coral/10 text-coral'
                        : 'text-ink-soft hover:bg-ink/5'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/admissions"
                  className="mt-1 block rounded-2xl bg-coral px-4 py-3 text-center text-base font-700 text-white shadow-coral"
                >
                  Admission Open
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
