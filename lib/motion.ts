import type { Transition, Variants } from 'framer-motion';

/** Consistent easing curves for sleek animations across the lab site */
export const ease = [0.22, 1, 0.36, 1] as const;

export const spring: Transition = { type: 'spring', stiffness: 260, damping: 28 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease } },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});
