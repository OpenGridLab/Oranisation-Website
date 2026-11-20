'use client';

import Link from 'next/link';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-svh flex-col items-center justify-center bg-[#090d16] p-6 text-slate-100 antialiased font-sans">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">OpenGridLab - Critical Alert</h1>
          <p className="text-slate-400 text-sm">
            A fatal runtime error interrupted root initialization.
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => reset()}
              className="rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-500 transition-colors"
            >
              Reload Application
            </button>
            <Link
              href="/"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
