import Link from 'next/link';
import { ArrowUpRight, Beaker, GitFork, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';

export function EmptyProjects({
  title = "Incubating New Initiatives",
  description = "OpenGridLab is actively researching and engineering initial core frameworks. No public projects have been tagged for release yet.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-border/80 bg-card/40 p-8 md:p-12 text-center">
      {/* Decorative Grid Light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-25"
      >
        <div className="size-72 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-lg space-y-5">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-xs">
          <Beaker className="size-7" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground">
            <Sparkles className="size-3 text-primary" />
            <span>Active Lab Pipeline · Projects Empty</span>
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <Button asChild size="default" className="rounded-full">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <GitFork className="mr-2 size-4" />
              Follow on GitHub
              <ArrowUpRight className="ml-1 size-3.5" />
            </Link>
          </Button>

          <Button asChild size="default" variant="outline" className="rounded-full">
            <Link href="/contact">
              Propose a Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
