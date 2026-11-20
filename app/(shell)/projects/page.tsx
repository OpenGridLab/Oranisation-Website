import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/constants/projects';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Stagger, StaggerItem } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';
import { EmptyProjects } from '@/components/empty-projects';
import Pager from '@/components/pager';

export const metadata: Metadata = {
  title: 'Projects & Repositories',
  description: 'Open-source distributed systems and tooling projects by OpenGridLabs.',
};

export default function ProjectsPage() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderDescription>
          Open-source software, experimental primitives, and developer tooling architected by OpenGridLabs.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-10">
        {/* Render empty state when projects array is empty as requested */}
        {!hasProjects ? (
          <EmptyProjects
            title="Projects In Research & Incubation"
            description="OpenGridLabs is actively incubating foundational repositories. No public releases have been scheduled yet. As soon as code is tagged for release, it will automatically populate here."
          />
        ) : (
          <Stagger className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border bg-muted px-2 py-0.5 font-mono text-xs font-semibold text-muted-foreground">
                          #{p.number}
                        </span>
                        <h2 className="font-display text-xl font-bold tracking-tight">
                          {p.title}
                        </h2>
                      </div>
                      {p.githubUrl && (
                        <Link href={p.githubUrl} target="_blank" rel="noreferrer">
                          <ArrowUpRight className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.tagline}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {p.techStack.map((tech) => (
                        <li key={tech} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>

      <Pager />
    </>
  );
}
