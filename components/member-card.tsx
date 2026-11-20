import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Crown, MapPin, Users, ShieldCheck } from 'lucide-react';
import type { GitHubMemberData } from '@/lib/github';
import { SpotlightCard } from '@/components/motion/spotlight-card';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';

export function MemberCard({ member }: { member: GitHubMemberData }) {
  return (
    <SpotlightCard className="h-full">
      <div className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="relative">
            <div className="relative size-16 sm:size-20 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted shadow-sm">
              <Image
                src={member.avatarUrl}
                alt={member.name || member.username}
                width={80}
                height={80}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            {member.isOwner && (
              <span
                className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-amber-500 text-white shadow-xs"
                title="Lab Owner"
              >
                <Crown className="size-3.5 fill-current" />
              </span>
            )}
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {member.isOwner ? (
              <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30 gap-1 font-mono text-[11px]">
                <Crown className="size-3 fill-current" />
                OWNER
              </Badge>
            ) : (
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary gap-1 font-mono text-[11px]">
                <ShieldCheck className="size-3" />
                MAINTAINER
              </Badge>
            )}

            {member.isLive && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                LIVE SYNCED
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-1">
          <h3 className="font-display text-xl font-bold tracking-tight">
            {member.name || member.username}
          </h3>
          <p className="font-mono text-sm text-primary">
            @{member.username}
          </p>
          <p className="text-xs font-medium text-muted-foreground">
            {member.role}
          </p>
        </div>

        <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
          {member.bio}
        </p>

        {member.location && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            <span>{member.location}</span>
          </div>
        )}

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t border-border/80 pt-4">
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5" title="Public Repositories">
                <BookOpen className="size-3.5 text-primary/70" />
                <span>{member.publicRepos} repos</span>
              </span>
              <span className="flex items-center gap-1.5" title="Followers">
                <Users className="size-3.5 text-primary/70" />
                <span>{member.followers} followers</span>
              </span>
            </div>

            <Link
              href={member.htmlUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icons.gitHub className="size-3.5" />
              <span>Profile</span>
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
