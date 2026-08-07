import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/data';
import { motion } from 'framer-motion';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={`tel:${CONTACT.phoneHref}`}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="grid h-13 w-13 place-items-center rounded-full bg-sky-blue text-blue-deep shadow-lift"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-5 w-5" />
      </motion.a>

      <motion.a
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hi!%20I'd%20like%20to%20know%20more%20about%20Nest%20%26%20Nurture%20Preschool.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid place-items-center rounded-full bg-[#25D366] text-white shadow-lift"
        style={{ height: 56, width: 56 }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-coral ring-2 ring-cream" />
      </motion.a>
    </div>
  );
}
