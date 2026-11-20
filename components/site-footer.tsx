import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { CopyEmail } from '@/components/copy-email';
import { Icons } from '@/components/icons';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="container-wrapper">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icons.logo className="size-4" />
                </div>
                <span className="font-display text-lg font-bold">{siteConfig.name}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {siteConfig.shortDescription}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span>Established {siteConfig.establishedYear}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Organization
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About & Mission
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                    Owner & Maintainers
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects & Code
                  </Link>
                </li>
              </ul>
            </div>

            {/* GitHub & Network */}
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Network
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub Organization
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://github.com/${siteConfig.owner.username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Owner (@{siteConfig.owner.username})
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Connect
              </p>
              <p className="text-sm text-muted-foreground font-mono break-all">
                {siteConfig.contactEmail}
              </p>
              <div className="pt-1">
                <CopyEmail email={siteConfig.contactEmail} />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. Open-source initiative.
            </p>
            <p>
              Architected with Next.js 16, Tailwind CSS & Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
