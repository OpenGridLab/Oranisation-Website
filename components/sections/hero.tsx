'use client';

import Link from 'next/link';
import { ArrowDown, Compass, GitBranch, MapPin, Sparkles, Terminal } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ease } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { SplitText } from '@/components/motion/split-text';
import { LocalClock } from '@/components/local-clock';
import type { GitHubOrgData } from '@/lib/github';

export function Hero({ orgData }: { orgData?: GitHubOrgData }) {
  // Cursor glow effect
  const x = useMotionValue(70);
  const y = useMotionValue(25);
  const sx = useSpring(x, { stiffness: 90, damping: 22 });
  const sy = useSpring(y, { stiffness: 90, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(650px circle at ${sx}% ${sy}%, color-mix(in oklab, var(--primary) 24%, transparent), transparent 70%)`;

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease, delay },
  });

  const establishedText = orgData?.establishedFormatted || siteConfig.established;

  return (
    <section
      className="relative isolate overflow-hidden border-b border-grid bg-background"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width) * 100);
        y.set(((e.clientY - r.top) / r.height) * 100);
      }}
    >
      {/* Dynamic Cursor Light */}
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ background: glow }} />

      {/* Grid Pattern Mesh */}
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
      />

      <div className="container flex min-h-[calc(100svh-3.5rem)] flex-col justify-between gap-12 py-8 md:py-14">
        {/* Top Badges */}
        <motion.div {...fade(0.1)} className="flex flex-wrap items-center gap-2.5">
          {/* Status Pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono">{siteConfig.status}</span>
          </span>

          {/* Established Date Pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-mono font-medium text-primary backdrop-blur-md">
            <Sparkles className="size-3" />
            <span>Established {establishedText}</span>
          </span>
        </motion.div>

        {/* Big Impact Headline */}
        <div>
          <h1 className="font-display text-[clamp(3.2rem,14vw,11.5rem)] font-bold leading-[0.88] tracking-[-0.04em]">
            <SplitText text="OPENGRID" delay={0.15} className="block text-foreground" />
            <SplitText text="LABS." delay={0.3} className="block text-primary" />
          </h1>

          {/* Leadership & Maintainer attribution */}
          <motion.div {...fade(0.5)} className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">Owner:</span>
              <Link
                href={`https://github.com/${siteConfig.owner.username}`}
                target="_blank"
                className="text-primary hover:underline"
              >
                @{siteConfig.owner.username}
              </Link>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">Maintainers:</span>
              {siteConfig.maintainers.map((m, idx) => (
                <span key={m.username} className="inline-flex items-center">
                  <Link
                    href={m.githubUrl}
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    @{m.username}
                  </Link>
                  {idx < siteConfig.maintainers.length - 1 && <span className="mr-1">,</span>}
                </span>
              ))}
            </span>
          </motion.div>
        </div>

        {/* Hero Footer Grid */}
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <motion.div {...fade(0.7)} className="max-w-xl">
            <p className="font-display text-xl font-medium sm:text-2xl text-foreground">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg leading-relaxed">
              {siteConfig.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-sm">
                <Link href="/team">
                  <Terminal className="mr-2 size-4" />
                  Owner & Maintainers
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/projects">
                  <GitBranch className="mr-2 size-4" />
                  Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/contact">
                  Contact Lab
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Location & Time facts */}
          <motion.dl {...fade(0.85)} className="flex gap-8 text-sm md:justify-end">
            <div>
              <dt className="mb-1 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="size-3.5 text-primary" /> Jurisdiction
              </dt>
              <dd className="font-medium">{siteConfig.location}</dd>
            </div>
            <div>
              <dt className="mb-1 flex items-center gap-1.5 text-muted-foreground">
                <Compass className="size-3.5 text-primary" /> Lab Clock
              </dt>
              <dd className="font-medium font-mono">
                <LocalClock />
              </dd>
            </div>
          </motion.dl>
        </div>

        {/* Jump Anchor */}
        <motion.a
          {...fade(1)}
          href="#about"
          className="hidden w-fit items-center gap-2 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          <ArrowDown className="size-3.5 animate-bounce" />
          <span>SCROLL TO ARCHITECTURE OVERVIEW</span>
        </motion.a>
      </div>
    </section>
  );
}
