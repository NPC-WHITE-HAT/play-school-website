import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const base: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span';
};

export default function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}

export const fadeUp = base;
