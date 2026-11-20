'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log to an error monitoring service
    console.error('OpenGridLabs Application Error:', error);
  }, [error]);

  return (
    <div className="container relative flex min-h-[calc(100svh-12rem)] flex-1 flex-col items-center justify-center py-20 text-center">
      <div className="mx-auto max-w-lg space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
          <AlertTriangle className="size-3.5" />
          <span>System Diagnostic Alert</span>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Unexpected Grid Fault
        </h1>

        <p className="text-muted-foreground sm:text-lg">
          A client-side execution anomaly occurred while rendering this view. Our telemetry
          has logged the diagnostic event.
        </p>

        {error.digest && (
          <p className="rounded-lg border bg-muted/50 p-2 font-mono text-xs text-muted-foreground">
            Fault Digest: {error.digest}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button onClick={() => reset()} size="lg" className="rounded-full">
            <RefreshCw className="mr-2 size-4" />
            Retry Transaction
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/">
              <Home className="mr-2 size-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
