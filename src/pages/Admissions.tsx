import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { PROGRAMS, TRUST_BADGES, CONTACT } from '@/lib/data';
import { supabase, type AdmissionEnquiry } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import FloatingShapes from '@/components/FloatingShapes';
import Icon from '@/components/Icon';
import {
 Send, CheckCircle2, Loader2, CalendarCheck, ShieldCheck, Sparkles,
 Phone, Mail, User, Baby, Clock, ArrowRight, AlertCircle,
} from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Admissions() {
 const [status, setStatus] = useState<Status>('idle');
 const [errMsg, setErrMsg] = useState('');
 const [searchParams] = useSearchParams();
 const [prefillProgram, setPrefillProgram] = useState('');

 useEffect(() => {
 const program = searchParams.get('program');
 if (program) setPrefillProgram(program);
 }, [searchParams]);

 const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setStatus('submitting');
 setErrMsg('');

 const form = e.currentTarget;
 const fd = new FormData(form);
 const parent_name = String(fd.get('parent_name') || '').trim();
 const child_name = String(fd.get('child_name') || '').trim();
 const child_age = String(fd.get('child_age') || '').trim();
 const phone = String(fd.get('phone') || '').trim();
 const email = String(fd.get('email') || '').trim();
 const program = String(fd.get('program') || '').trim();
 const preferred_visit_date = String(fd.get('preferred_visit_date') || '').trim();
 const message = String(fd.get('message') || '').trim();

 if (!parent_name || !child_name || !child_age || !phone || !program) {
 setStatus('error');
 setErrMsg('Please fill in all required fields before submitting.');
 return;
 }

 const payload: AdmissionEnquiry = {
 parent_name,
 child_name,
 child_age,
 phone,
 email,
 program,
 preferred_visit_date: preferred_visit_date || undefined,
 message: message || undefined,
 };

 const whatsappMessage = encodeURIComponent(`Hello Nest & Nurture Play School and Child Care,\n\nI would like to enquire about admission.\n\nParent Name: ${parent_name}\nChild Name: ${child_name}\nChild Age: ${child_age}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nProgram: ${program}\nPreferred Visit Date: ${preferred_visit_date || 'N/A'}\nMessage: ${message || 'N/A'}\n\nPlease contact me regarding the admission process.`);
 const whatsappUrl = `https://wa.me/918015812645?text=${whatsappMessage}`;

 try {
 const { error } = await supabase.from('admission_enquiries').insert(payload);
 if (error) throw error;
 } catch (err) {
 // If backend or email functionality is not configured, continue with WhatsApp as the primary enquiry channel.
 // eslint-disable-next-line no-console
 console.warn('Admission enquiry save failed:', err);
 }

 setStatus('success');
 form.reset();
 if (typeof window !== 'undefined') {
 window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
 }
 };

 return (
 <main className="pt-20">
 {/* Hero */}
 <section className="relative overflow-hidden bg-gradient-to-br from-soft-green/40 via-cream to-sky-blue/40 pt-16 pb-16 md:pt-24 md:pb-20">
 <FloatingShapes />
 <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
 <Reveal>
 <span className="inline-flex items-center gap-2 rounded-full bg-coral/15 px-4 py-2 text-xs font-700 uppercase tracking-[0.14em] text-coral">
 <Sparkles className="h-3.5 w-3.5"/> Admissions Open 2026-27
 </span>
 <h1 className="mt-5 text-balance font-heading text-4xl font-800 leading-[1.1] text-ink md:text-5xl lg:text-6xl">
 Begin Your Child's Beautiful Journey
 </h1>
 <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
 Fill in the form below to book a school tour or request a callback. Our admissions team will reach out within 24 hours — we can't wait to meet your little one!
 </p>
 </Reveal>
 </div>
 </section>

 {/* Form + sidebar */}
 <section className="relative bg-cream px-5 py-16 lg:px-8 md:py-24">
 <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
 {/* Form */}
 <Reveal>
 <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-lift md:p-10">
 <AnimatePresence mode="wait">
 {status === 'success' ? (
 <motion.div
 key="success"
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0 }}
 className="flex flex-col items-center py-10 text-center"
 >
 <motion.div
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
 className="grid h-24 w-24 place-items-center rounded-full bg-soft-green text-green-deep"
 >
 <CheckCircle2 className="h-12 w-12"/>
 </motion.div>
 <motion.h3
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="mt-6 font-heading text-2xl font-800 text-ink"
 >
 Thank You! Enquiry Received
 </motion.h3>
 <motion.p
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="mt-3 max-w-md text-sm text-ink-soft"
 >
 We've received your admission enquiry and our team will contact you within 24 hours to schedule your school tour. Keep an eye on your phone and inbox!
 </motion.p>
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.45 }}
 className="mt-8 flex flex-col gap-3 sm:flex-row"
 >
 <button
 onClick={() => setStatus('idle')}
 className="rounded-full border-2 border-ink/15 px-6 py-3 text-sm font-700 text-ink transition-colors hover:border-coral hover:text-coral"
 >
 Submit Another
 </button>
 <Link
 to="/"
 className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-700 text-white shadow-coral transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
 >
 Back to Home <ArrowRight className="h-4 w-4"/>
 </Link>
 </motion.div>

 {/* Confetti dots */}
 {[...Array(12)].map((_, i) => (
 <motion.span
 key={i}
 className="absolute h-2 w-2 rounded-full"
 style={{
 left: `${15 + (i * 7) % 70}%`,
 top: `${20 + (i * 13) % 50}%`,
 background: ['#FF8C6B', '#D8F3DC', '#DDEEFF', '#FFF3D6'][i % 4],
 }}
 initial={{ scale: 0, opacity: 0 }}
 animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0] }}
 transition={{ duration: 1.6, delay: 0.2 + i * 0.08, repeat: Infinity, repeatDelay: 2 }}
 />
 ))}
 </motion.div>
 ) : (
 <motion.form
 key="form"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onSubmit={onSubmit}
 className="space-y-5"
 >
 <h2 className="font-heading text-2xl font-700 text-ink">Admission Enquiry Form</h2>
 <p className="text-sm text-ink-soft">All fields marked with * are required.</p>

 <div className="grid gap-5 sm:grid-cols-2">
 <Field icon={User} label="Parent Name *"name="parent_name"placeholder="e.g. Priya Sharma"required />
 <Field icon={Baby} label="Child Name *"name="child_name"placeholder="e.g. Aarav Sharma"required />
 </div>

 <div className="grid gap-5 sm:grid-cols-2">
 <Field icon={Baby} label="Child Age *"name="child_age"placeholder="e.g. 3 years 6 months"required />
 <Field icon={Phone} label="Phone *"name="phone"type="tel"placeholder="+91 80158 12645"required />
 </div>

 <div className="grid gap-5 sm:grid-cols-2">
 <Field icon={Mail} label="Email (Optional)"name="email"type="email"placeholder="you@example.com" />
 <div>
 <label className="mb-1.5 flex items-center gap-1.5 text-sm font-600 text-ink">
 <Sparkles className="h-4 w-4 text-coral"/> Program *
 </label>
 <select
 name="program"
 required
 defaultValue={prefillProgram || ''}
 className="w-full rounded-2xl border-2 border-ink/10 bg-beige px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-coral"
 >
 <option value="" disabled>Select a program</option>
 {PROGRAMS.map((p) => (
 <option key={p.id} value={p.name}>{p.name} ({p.age})</option>
 ))}
 </select>
 </div>
 </div>

 <div>
 <label className="mb-1.5 flex items-center gap-1.5 text-sm font-600 text-ink">
 <CalendarCheck className="h-4 w-4 text-coral"/> Preferred Visit Date
 </label>
 <input
 type="date"
 name="preferred_visit_date"
 min={new Date().toISOString().split('T')[0]}
 className="w-full rounded-2xl border-2 border-ink/10 bg-beige px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-coral"
 />
 </div>

 <div>
 <label className="mb-1.5 flex items-center gap-1.5 text-sm font-600 text-ink">
 <Send className="h-4 w-4 text-coral"/> Message
 </label>
 <textarea
 name="message"
 rows={4}
 placeholder="Tell us anything you'd like us to know about your child..."
 className="w-full resize-none rounded-2xl border-2 border-ink/10 bg-beige px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-coral"
 />
 </div>

 {status === 'error' && (
 <motion.div
 initial={{ opacity: 0, y: -8 }}
 animate={{ opacity: 1, y: 0 }}
 className="flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-sm text-red-700"
 >
 <AlertCircle className="mt-0.5 h-4 w-4 shrink-0"/>
 <span>{errMsg}</span>
 </motion.div>
 )}

 <button
 type="submit"
 disabled={status === 'submitting'}
 className="group flex w-full items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-base font-700 text-white shadow-coral transition-all hover:-translate-y-0.5 hover:bg-coral-dark disabled:opacity-60 disabled:hover:translate-y-0"
 >
 {status === 'submitting' ? (
 <>
 <Loader2 className="h-5 w-5 animate-spin"/> Submitting...
 </>
 ) : (
 <>
 <Send className="h-5 w-5"/> Submit Enquiry
 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
 </>
 )}
 </button>
 <p className="flex items-center justify-center gap-1.5 text-center text-xs text-ink-muted">
 <ShieldCheck className="h-3.5 w-3.5"/> Your information is private and never shared.
 </p>
 </motion.form>
 )}
 </AnimatePresence>
 </div>
 </Reveal>

 {/* Sidebar */}
 <div className="space-y-5">
 <Reveal delay={0.1}>
 <div className="rounded-[1.75rem] bg-gradient-to-br from-coral to-coral-light p-7 text-white shadow-lift">
 <h3 className="font-heading text-xl font-700">Why Join Nest &amp; Nurture?</h3>
 <ul className="mt-5 space-y-3 text-sm">
 {TRUST_BADGES.map((b) => (
 <li key={b.label} className="flex items-center gap-3">
 <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/20">
 <Icon name={b.icon} className="h-5 w-5"/>
 </span>
 {b.label}
 </li>
 ))}
 </ul>
 </div>
 </Reveal>

 <Reveal delay={0.2}>
 <div className="rounded-[1.75rem] bg-white p-7 shadow-soft">
 <h3 className="font-heading text-lg font-700 text-ink">Prefer to Talk?</h3>
 <p className="mt-2 text-sm text-ink-soft">Our admissions team is happy to help.</p>
 <div className="mt-5 space-y-3 text-sm">
 <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-3 font-600 text-ink hover:text-coral">
 <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral/12 text-coral"><Phone className="h-4.5 w-4.5"/></span>
 {CONTACT.phone}
 </a>
 <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 font-600 text-ink hover:text-coral">
 <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral/12 text-coral"><Mail className="h-4.5 w-4.5"/></span>
 {CONTACT.email}
 </a>
 <div className="flex items-center gap-3 font-600 text-ink">
 <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral/12 text-coral"><Clock className="h-4.5 w-4.5"/></span>
 Mon–Fri: 8:30 AM – 4:30 PM
 </div>
 </div>
 </div>
 </Reveal>
 </div>
 </div>
 </section>
 </main>
 );
}

function Field({
 icon: IconCmp,
 label,
 name,
 type = 'text',
 placeholder,
 required,
}: {
 icon: React.ComponentType<{ className?: string }>;
 label: string;
 name: string;
 type?: string;
 placeholder?: string;
 required?: boolean;
}) {
 return (
 <div>
 <label className="mb-1.5 flex items-center gap-1.5 text-sm font-600 text-ink">
 <IconCmp className="h-4 w-4 text-coral"/> {label}
 </label>
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
