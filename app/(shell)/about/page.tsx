import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Terminal, Shield, GitBranch, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';
import Pager from '@/components/pager';
import { getLabAutomatedData } from '@/lib/github';

export const metadata: Metadata = {
  title: 'About OpenGridLabs',
  description: 'Mission, history, and architectural foundations of OpenGridLabs.',
};

export const revalidate = 300;

export default async function AboutPage() {
  const labData = await getLabAutomatedData();
  const established = labData.org.establishedFormatted || siteConfig.established;

  return (
    <>
      <PageHeader>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary mb-2">
          <Sparkles className="size-3" />
          <span>ESTABLISHED {established.toUpperCase()}</span>
        </div>
        <PageHeaderHeading>About OpenGridLabs</PageHeaderHeading>
        <PageHeaderDescription>
          An independent open-source research and engineering lab dedicated to distributed systems,
          modular grid computation, and developer productivity tooling.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-10 space-y-12">
        {/* Core Narrative */}
        <Reveal className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed sm:text-lg">
          <p>
            <strong className="text-foreground">OpenGridLabs</strong> was established in{' '}
            <strong className="text-foreground">{established}</strong> under the leadership of{' '}
            <Link
              href={`https://github.com/${siteConfig.owner.username}`}
              target="_blank"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              @{siteConfig.owner.username}
              <ArrowUpRight className="size-3" />
            </Link>
            . The lab is built on the premise that modern cloud infrastructure has become increasingly
            opaque and fragmented. Our goal is to craft lean, modular, and developer-first distributed primitives
            that run reliably across any compute topology.
          </p>

          <p>
            The project is maintained and actively developed by{' '}
            <strong className="text-foreground">@{siteConfig.owner.username}</strong> alongside core maintainer{' '}
            <Link
              href="https://github.com/samiakhlaq"
              target="_blank"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              @samiakhlaq
              <ArrowUpRight className="size-3" />
            </Link>
            . Together, the team combines web engineering, systems programming, and automation to design
            durable open software.
          </p>
        </Reveal>

        {/* Lab Architecture Principles */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Architectural Tenets
          </h2>

          <Stagger className="grid gap-6 md:grid-cols-2">
            <StaggerItem>
              <SpotlightCard className="h-full">
                <div className="p-6 space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Terminal className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">1. Autonomous Modularity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Components are designed to operate as decoupled grid services. Every library can be used
                    in isolation without dragging unwanted monolith dependencies.
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>

            <StaggerItem>
              <SpotlightCard className="h-full">
                <div className="p-6 space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Shield className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">2. Permissive Open Standards</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We maintain no proprietary gates. Protocols, specifications, and reference implementations
                    are committed to public repositories under permissive open-source licenses.
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>

            <StaggerItem>
              <SpotlightCard className="h-full">
                <div className="p-6 space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <GitBranch className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">3. Transparent Telemetry</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our organizational structure, maintainer roster, and repo metrics are automatically
                    reflected directly from GitHub API telemetry on this website.
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>

            <StaggerItem>
              <SpotlightCard className="h-full">
                <div className="p-6 space-y-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Sparkles className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">4. Developer Ergonomics</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Developer experience is treated as a first-class architectural metric. Zero-friction configuration,
                    strict TypeScript typing, and fast build times guide every implementation.
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Fact Sheet */}
        <Reveal className="rounded-2xl border bg-card/60 p-6 sm:p-8 space-y-6">
          <h2 className="font-display text-xl font-bold tracking-tight">
            Organization Identity Sheet
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm">
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">Formal Name</p>
              <p className="font-semibold text-foreground mt-1">{siteConfig.legalName}</p>
            </div>
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">Established</p>
              <p className="font-semibold text-foreground mt-1">{established}</p>
            </div>
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">Lab Founder / Owner</p>
              <p className="font-semibold text-primary mt-1">@{siteConfig.owner.username}</p>
            </div>
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">Core Maintainers</p>
              <p className="font-semibold text-foreground mt-1">
                {siteConfig.maintainers.map((m) => `@${m.username}`).join(', ')}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">Primary Contact</p>
              <p className="font-semibold text-foreground font-mono text-xs mt-1 break-all">
                {siteConfig.contactEmail}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground font-mono text-xs uppercase">GitHub Organization</p>
              <p className="font-semibold text-foreground mt-1">github.com/{siteConfig.githubOrg}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Pager />
    </>
  );
}
