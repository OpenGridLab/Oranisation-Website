'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-full"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          toast.success('Lab contact email copied to clipboard');
          setTimeout(() => setCopied(false), 2000);
        } catch {
          toast.error('Could not copy automatically. Please copy: ' + email);
        }
      }}
    >
      {copied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5" />}
      <span>{copied ? 'Copied' : 'Copy Email'}</span>
    </Button>
  );
}
