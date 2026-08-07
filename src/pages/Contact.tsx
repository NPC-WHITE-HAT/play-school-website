import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import FloatingShapes from '@/components/FloatingShapes';
import SectionHeading from '@/components/SectionHeading';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import {
 Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2,
 Loader2, AlertCircle, ArrowRight,
} from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
 const [status, setStatus] = useState<Status>('idle');
 const [errMsg, setErrMsg] = useState('');

 const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setStatus('submitting');
 setErrMsg('');
 const fd = new FormData(e.currentTarget);
 try {
 const { error } = await supabase.from('admission_enquiries').insert({
 parent_name: String(fd.get('name') || '').trim(),
 child_name: 'Contact form',
 child_age: 'N/A',
 phone: String(fd.get('phone') || '').trim(),
 email: String(fd.get('email') || '').trim(),
 program: 'General Enquiry',
 message: String(fd.get('message') || '').trim() || undefined,
 });
 if (error) throw error;
 setStatus('success');
 e.currentTarget.reset();
 } catch (err) {
 setStatus('error');
 setErrMsg(err instanceof Error ? err.message : 'Something went wrong. Please call us instead.');
 }
 };

 return (
 <main className="pt-20">
 {/* Hero */}
 <section className="relative overflow-hidden bg-cream pt-16 pb-12 md:pt-24 md:pb-16">
 <FloatingShapes />
 <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
 <Reveal>
 <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-coral">
 Get in Touch
 </span>
 <h1 className="mt-5 text-balance font-heading text-4xl font-800 leading-[1.1] text-ink md:text-5xl lg:text-6xl">
 We'd Love to Hear from You
 </h1>
 <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
 Questions about admissions, programs or a school tour? Reach out — our team is here to help your family every step of the way.
 </p>
 </Reveal>
 </div>
 </section>

 {/* Contact cards */}
 <section className="bg-cream px-5 py-10 lg:px-8">
 <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
 {[
 { icon: Phone, title: 'Call Us', value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}`, sub: 'Mon–Sat, during school hours', color: 'from-coral/15 to-soft-yellow/30' },
 { icon: Mail, title: 'Email Us', value: CONTACT.email, href: `mailto:${CONTACT.email}`, sub: 'We reply within 24 hours', color: 'from-soft-green/40 to-sky-blue/40' },
 { icon: MessageCircle, title: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${CONTACT.whatsapp}`, sub: 'Quick answers, any time', color: 'from-sky-blue/40 to-soft-green/30' },
 ].map((c, i) => (
 <Reveal key={c.title} delay={i * 0.08}>
 <motion.a
 href={c.href}
 target={c.href.startsWith('http') ? '_blank' : undefined}
 rel="noopener noreferrer"
 whileHover={{ y: -6 }}
 className={`group block rounded-[1.5rem] bg-gradient-to-br ${c.color} p-7 shadow-soft transition-shadow hover:shadow-lift`}
 >
 <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/80 text-coral shadow-soft transition-transform group-hover:scale-110">
 <c.icon className="h-7 w-7"/>
 </span>
 <h3 className="mt-5 font-heading text-lg font-700 text-ink">{c.title}</h3>
 <p className="mt-1 font-heading text-base font-600 text-ink group-hover:text-coral">{c.value}</p>
 <p className="mt-1 text-xs text-ink-soft">{c.sub}</p>
 </motion.a>
 </Reveal>
 ))}
 </div>
 </section>

 {/* Form + map */}
 <section className="bg-cream px-5 py-12 lg:px-8 md:py-20">
 <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
 {/* Form */}
 <Reveal>
 <div className="rounded-[2rem] bg-white p-6 shadow-lift md:p-10">
 <AnimatePresence mode="wait">
 {status === 'success' ? (
 <motion.div
 key="ok"
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 className="flex flex-col items-center py-10 text-center"
 >
 <motion.div
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
 className="grid h-20 w-20 place-items-center rounded-full bg-soft-green text-green-deep"
 >
 <CheckCircle2 className="h-10 w-10"/>
 </motion.div>
 <h3 className="mt-5 font-heading text-xl font-800 text-ink">Message Sent!</h3>
 <p className="mt-2 max-w-sm text-sm text-ink-soft">
 Thanks for reaching out. We'll get back to you within 24 hours.
 </p>
 <button
 onClick={() => setStatus('idle')}
 className="mt-6 rounded-full border-2 border-ink/15 px-6 py-3 text-sm font-700 text-ink transition-colors hover:border-coral hover:text-coral"
 >
 Send Another
 </button>
 </motion.div>
 ) : (
 <motion.form
 key="form"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 onSubmit={onSubmit}
 className="space-y-5"
 >
 <h2 className="font-heading text-2xl font-700 text-ink">Send Us a Message</h2>

 <div className="grid gap-5 sm:grid-cols-2">
 <Input label="Your Name *"name="name"placeholder="e.g. Priya Sharma"required />
 <Input label="Phone *"name="phone"type="tel"placeholder="+91 98765 43210"required />
 </div>
 <Input label="Email *"name="email"type="email"placeholder="you@example.com"required />
 <div>
 <label className="mb-1.5 block text-sm font-600 text-ink">Message *</label>
 <textarea
 name="message"
 required
 rows={5}
 placeholder="How can we help you?"
 className="w-full resize-none rounded-2xl border-2 border-ink/10 bg-beige px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-coral"
 />
 </div>

 {status === 'error' && (
 <div className="flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
 <AlertCircle className="mt-0.5 h-4 w-4 shrink-0"/>
 <span>{errMsg}</span>
 </div>
 )}

 <button
 type="submit"
 disabled={status === 'submitting'}
 className="group flex w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-base font-700 text-white shadow-coral transition-all hover:-translate-y-0.5 hover:bg-coral-dark disabled:opacity-60 disabled:hover:translate-y-0"
 >
 {status === 'submitting' ? (
 <><Loader2 className="h-5 w-5 animate-spin"/> Sending...</>
 ) : (
 <><Send className="h-5 w-5"/> Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></>
 )}
 </button>
 </motion.form>
 )}
 </AnimatePresence>
 </div>
 </Reveal>

 {/* Map + hours */}
 <div className="space-y-6">
 <Reveal delay={0.1}>
 <div className="overflow-hidden rounded-[2rem] shadow-lift">
 <iframe
 title="School location map"
 src={CONTACT.mapEmbed}
 className="h-64 w-full border-0 md:h-72"
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 />
 </div>
 </Reveal>

 <Reveal delay={0.2}>
 <div className="rounded-[2rem] bg-white p-7 shadow-soft">
 <div className="flex items-start gap-3">
 <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-coral/12 text-coral">
 <MapPin className="h-5.5 w-5.5"/>
 </span>
 <div>
 <h3 className="font-heading text-base font-700 text-ink">Our Campus</h3>
 <p className="mt-1 text-sm text-ink-soft">{CONTACT.address}</p>
 </div>
 </div>

 <div className="mt-6 border-t border-ink/5 pt-6">
 <h3 className="flex items-center gap-2 font-heading text-base font-700 text-ink">
 <Clock className="h-5 w-5 text-coral"/> Working Hours
 </h3>
 <ul className="mt-4 space-y-2.5 text-sm">
 {CONTACT.hours.map((h) => (
 <li key={h.day} className="flex items-center justify-between gap-3 rounded-xl bg-beige px-4 py-2.5">
 <span className="font-600 text-ink">{h.day}</span>
 <span className="text-ink-soft">{h.time}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </Reveal>
 </div>
 </div>
 </section>

 <AdmissionCTA />
 </main>
 );
}

function Input({
 label, name, type = 'text', placeholder, required,
}: {
 label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
 return (
 <div>
 <label className="mb-1.5 block text-sm font-600 text-ink">{label}</label>
 <input
 type={type}
 name={name}
 required={required}
 placeholder={placeholder}
 className="w-full rounded-2xl border-2 border-ink/10 bg-beige px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-coral"
 />
 </div>
 );
}
