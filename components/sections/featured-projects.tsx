import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/constants/projects';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { EmptyProjects } from '@/components/empty-projects';

export function FeaturedProjects() {
  const hasProjects = projects.length > 0;

  return (
    <Section
      id="projects"
      badge="03 // OPEN-SOURCE REPOSITORIES"
      title="Projects & Repositories"
      description="Tools, libraries, and modular distributed primitives architected by OpenGridLab."
      action={
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/projects">
            All Projects <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      }
    >
      {/* If projects array is empty, render the graceful empty state as requested */}
      {!hasProjects ? (
        <EmptyProjects
          title="Projects Currently in Lab Incubation"
          description="OpenGridLab is currently engineering initial internal builds and protocols. No public repositories have been released yet. Stay tuned to our GitHub organization for our upcoming debut release."
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.slug} className="rounded-xl border p-6">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.tagline}</p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
