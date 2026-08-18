import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/data';
import BrandLogo from '@/components/BrandLogo';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-[var(--radius-blob)] bg-coral/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-[var(--radius-blob)] bg-soft-green/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.1fr_1.3fr]">
          {/* Brand */}
          <div>
            <BrandLogo className="h-12" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Where little minds bloom every day. Nest & Nurture Play School and Child Care nurtures curious, confident and kind hearts in Chennai.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: 'https://www.instagram.com/nestandnurture.playschool/', label: 'Instagram', Icon: InstagramIcon, target: '_blank', rel: 'noopener noreferrer' },
                { href: 'https://maps.app.goo.gl/cTziYQkeGuGRQxv2A', label: 'Google Maps', Icon: MapPin, target: '_blank', rel: 'noopener noreferrer' },
                { href: 'mailto:nestandnurture.chennai@gmail.com', label: 'Email', Icon: Mail },
              ].map(({ href, label, Icon, target, rel }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/80 transition-all hover:-translate-y-1 hover:bg-coral hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-700 tracking-wide uppercase text-coral-light">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-cream/70 transition-colors hover:text-cream hover:pl-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-700 tracking-wide uppercase text-coral-light">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex gap-3">
                <Phone className="h-4.5 w-4.5 shrink-0 text-coral" />
                <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-cream">{CONTACT.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4.5 w-4.5 shrink-0 text-coral" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-cream">{CONTACT.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4.5 w-4.5 shrink-0 text-coral" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-cream/5 p-3 text-sm text-cream/70">
              <Clock className="h-4.5 w-4.5 shrink-0 text-coral" />
              <span>Mon – Sat: 8:00 AM – 8:30 PM</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-700 tracking-wide uppercase text-coral-light">Newsletter</h4>
            <p className="mt-5 text-sm text-cream/70">Parenting tips, school updates and early-learning insights — once a month, no spam.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); (e.currentTarget.querySelector('input') as HTMLInputElement).value = ''; }}
              className="mt-4 flex items-center gap-2 rounded-full bg-cream/10 p-1.5 focus-within:ring-2 focus-within:ring-coral"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-coral text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <Link
              to="/admissions"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-600 text-coral-light hover:gap-2.5 transition-all"
            >
              Admissions open for 2026-27 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Nest &amp; Nurture Play School and Child Care. Made with love for little learners.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
