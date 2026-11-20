import Link from 'next/link';
import { ArrowRight, Cpu, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';

const pillarIcons = [Cpu, Layers, ShieldCheck];

export function AboutPreview({ establishedFormatted }: { establishedFormatted?: string }) {
  const established = establishedFormatted || siteConfig.established;

  return (
    <Section
      id="about"
      badge="01 // ARCHITECTURAL FOUNDATION"
      title="Decentralized systems, engineered in the open."
      description="OpenGridLabs exists to rethink developer tooling and distributed computation primitives."
      action={
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/about">
            Detailed Mission <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        {/* Main narrative */}
        <div className="space-y-6 text-base text-muted-foreground sm:text-lg leading-relaxed">
          <p>
            Established in <strong className="text-foreground">{established}</strong>,{' '}
            <strong className="text-foreground">{siteConfig.name}</strong> operates as an open-source
            engineering collective founded by{' '}
            <Link
              href={`https://github.com/${siteConfig.owner.username}`}
              target="_blank"
              className="text-primary font-medium hover:underline"
            >
              @{siteConfig.owner.username}
            </Link>
            . We research, build, and maintain high-performance software primitives, focusing on modular
            grid architectures and developer experience.
          </p>

          <p>
            Our core maintainers —{' '}
            {siteConfig.maintainers.map((m, i) => (
              <span key={m.username}>
                <Link
                  href={m.githubUrl}
                  target="_blank"
                  className="text-foreground font-medium hover:text-primary transition-colors underline underline-offset-4"
                >
                  @{m.username}
                </Link>
                {i < siteConfig.maintainers.length - 1 ? ' and ' : ''}
              </span>
            ))}
            {' '}— collaborate asynchronously across systems engineering, web architectures, and automation.
          </p>

          <div className="pt-2">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="size-4" />
                <span>Open Protocol Commitment</span>
              </div>
              <p className="text-sm text-foreground/90 leading-normal">
                Every line of code and technical RFC developed by OpenGridLabs is publicly licensed under
                permissive open-source terms. We believe foundational developer infrastructure belongs to the commons.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights & Facts List */}
        <div className="rounded-2xl border bg-card/50 p-6 sm:p-8 backdrop-blur-xs space-y-6">
          <h3 className="font-display text-xl font-bold tracking-tight">
            Laboratory Telemetry
          </h3>

          <dl className="space-y-4 text-sm divide-y">
            <div className="flex items-center justify-between pt-3 first:pt-0">
              <dt className="text-muted-foreground">Established</dt>
              <dd className="font-mono font-medium text-foreground">{established}</dd>
            </div>

            <div className="flex items-center justify-between pt-3">
              <dt className="text-muted-foreground">Lab Founder & Owner</dt>
              <dd className="font-mono font-medium text-primary">@{siteConfig.owner.username}</dd>
            </div>

            <div className="flex items-center justify-between pt-3">
              <dt className="text-muted-foreground">Maintainers</dt>
              <dd className="font-mono font-medium text-foreground">
                {siteConfig.maintainers.map((m) => `@${m.username}`).join(', ')}
              </dd>
            </div>

            <div className="flex items-center justify-between pt-3">
              <dt className="text-muted-foreground">Contact Email</dt>
              <dd className="font-mono text-xs font-medium text-primary break-all">
                {siteConfig.contactEmail}
              </dd>
            </div>

            <div className="flex items-center justify-between pt-3">
              <dt className="text-muted-foreground">License</dt>
              <dd className="font-mono font-medium text-foreground">MIT / Apache 2.0</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="mt-16">
        <h3 className="mb-6 font-display text-2xl font-bold tracking-tight">
          Research Pillars
        </h3>
        <Stagger className="grid gap-6 md:grid-cols-3">
          {siteConfig.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length]!;
            return (
              <StaggerItem key={pillar.title}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-6">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h4 className="font-display text-lg font-semibold tracking-tight mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                      {pillar.description}
                    </p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
