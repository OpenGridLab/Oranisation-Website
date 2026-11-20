'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Compass, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [autoRedirect, setAutoRedirect] = useState(true);

  useEffect(() => {
    if (!autoRedirect) return;

    if (secondsLeft <= 0) {
      router.push('/');
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, autoRedirect, router]);

  return (
    <div className="container relative flex min-h-[calc(100svh-12rem)] flex-1 flex-col items-center justify-center py-20 text-center">
      {/* Decorative Grid Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30"
      >
        <div className="size-96 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
          <ShieldAlert className="size-3.5" />
          <span>Error 404 · Route Not Found</span>
        </div>

        <h1 className="font-display text-7xl font-bold tracking-tight sm:text-9xl">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Grid Node Unreachable
          </h2>
          <p className="text-muted-foreground sm:text-lg">
            The page or resource you requested does not exist on the OpenGridLabs network,
            or it has been repositioned.
          </p>
        </div>

        {/* Automatic Redirection Indicator */}
        <div className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-md">
          {autoRedirect ? (
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                </span>
                <span>
                  Redirecting to home in <strong className="text-foreground">{secondsLeft}s</strong>...
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAutoRedirect(false)}
                className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Cancel auto-redirect
              </button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Auto-redirect paused. Use the links below to navigate.
            </p>
          )}

          {/* Animated countdown progress bar */}
          {autoRedirect && (
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all duration-1000 ease-linear"
                style={{ width: `${(secondsLeft / 5) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Return Home Now
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/about">
              <Compass className="mr-2 size-4" />
              Explore About
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
