import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { MemberCard } from '@/components/member-card';
import type { GitHubMemberData } from '@/lib/github';

export function TeamSection({ members }: { members: GitHubMemberData[] }) {
  const isAnyLive = members.some((m) => m.isLive);

  return (
    <Section
      id="team"
      badge="02 // LEADERSHIP & MAINTAINERS"
      title="Owner & Core Maintainers"
      description="The developers leading OpenGridLab research, architecture, and open-source infrastructure."
      action={
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/team">
            View All Team Details <ArrowUpRight className="ml-1 size-3.5" />
          </Link>
        </Button>
      }
    >
      {/* Realtime API status banner */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/80 bg-card/40 px-4 py-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-muted-foreground font-mono">
            {isAnyLive
              ? 'AUTOMATED GITHUB TELEMETRY: Profile avatars, stats & bios loaded live'
              : 'AUTOMATED GITHUB SYNC: Fallback profile data loaded'}
          </span>
        </div>

        <span className="font-mono text-muted-foreground">
          Owner: <strong className="text-foreground">@{siteConfig.owner.username}</strong>
        </span>
      </div>

      {/* Member Cards Grid */}
      <Stagger className="grid gap-6 md:grid-cols-2">
        {members.map((member) => (
          <StaggerItem key={member.username}>
            <MemberCard member={member} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
