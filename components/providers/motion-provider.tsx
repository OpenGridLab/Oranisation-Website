'use client';

import { MotionConfig } from 'framer-motion';

/** Ensures Framer Motion respects reduced motion preferences */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
