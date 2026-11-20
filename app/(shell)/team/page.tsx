import type { Metadata } from 'next';
import Link from 'next/link';
import { Crown, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { MemberCard } from '@/components/member-card';
import { Stagger, StaggerItem, Reveal } from '@/components/motion/reveal';
import Pager from '@/components/pager';
import { getLabAutomatedData } from '@/lib/github';

export const metadata: Metadata = {
  title: 'Team & Maintainers',
  description: 'Owner and core maintainers of OpenGridLab.',
};

export const revalidate = 300;

export default async function TeamPage() {
  const labData = await getLabAutomatedData();
  const isAnyLive = labData.members.some((m) => m.isLive);

  return (
    <>
      <PageHeader>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary mb-2">
          <Sparkles className="size-3" />
          <span>LAB LEADERSHIP</span>
        </div>
        <PageHeaderHeading>Owner & Maintainers</PageHeaderHeading>
        <PageHeaderDescription>
          Meet the minds behind OpenGridLab. Information below is automatically loaded from the
          GitHub API to reflect current profiles and activity.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-8 space-y-10">
        {/* Automated API Sync Notification Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-500">
                {isAnyLive ? 'Automated GitHub Sync Active' : 'Fallback Telemetry Active'}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Profiles for @{siteConfig.owner.username} and @samiakhlaq are automatically updated on page load.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <RefreshCw className="size-3 text-primary animate-spin" />
            <span>Cached 5m</span>
          </div>
        </div>

        {/* Owner Spotlight Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Crown className="size-4 text-amber-500 fill-amber-500" />
            <h2 className="font-display text-xl font-bold tracking-tight">
              Organization Owner
            </h2>
          </div>
          <div className="max-w-xl">
            <MemberCard member={labData.owner} />
          </div>
        </div>

        {/* All Maintainers Section */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" />
            <h2 className="font-display text-xl font-bold tracking-tight">
              Maintainers & Contributors
            </h2>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-2">
            {labData.members.map((member) => (
              <StaggerItem key={member.username}>
                <MemberCard member={member} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Join the Lab callout */}
        <Reveal className="rounded-2xl border border-dashed border-border/80 bg-card/40 p-6 sm:p-8 text-center space-y-4">
          <h3 className="font-display text-xl font-bold">
            Interested in Contributing to OpenGridLab?
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We welcome open-source contributions, distributed systems experiments, and RFC proposals.
            Get in touch with us at{' '}
            <strong className="text-foreground font-mono">{siteConfig.contactEmail}</strong>.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact the Maintainers
            </Link>
          </div>
        </Reveal>
      </div>

      <Pager />
    </>
  );
}
