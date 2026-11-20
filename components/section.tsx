import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';

/** Standard page-width section used across lab pages */
export function Section({
  id,
  title,
  badge,
  description,
  action,
  className,
  children,
}: {
  id?: string;
  title: string;
  badge?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn('border-b border-grid py-16 md:py-24', className)}>
      <div className="container">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            {badge && (
              <span className="mb-3 inline-block font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                {badge}
              </span>
            )}
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </div>
          {action}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
