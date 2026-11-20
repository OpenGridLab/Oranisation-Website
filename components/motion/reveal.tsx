'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof motion.div>;

/** Fades content up smoothly once when it enters the viewport */
export function Reveal({ className, ...props }: Props) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      {...props}
    />
  );
}

/** Wraps a group where each <StaggerItem> renders sequentially */
export function Stagger({
  className,
  delay,
  ...props
}: Props & { delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={stagger(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      {...props}
    />
  );
}

export function StaggerItem({ className, ...props }: Props) {
  return <motion.div className={cn(className)} variants={fadeUp} {...props} />;
}
