'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * A card with a reactive spotlight glow trailing the pointer.
 * Gives an interactive laboratory console feel.
 */
export function SpotlightCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const background = useMotionTemplate`radial-gradient(300px circle at ${x}px ${y}px, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)`;

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl border bg-card/60 transition-colors hover:border-primary/50',
        className
      )}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        x.set(-200);
        y.set(-200);
      }}
      {...props}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
