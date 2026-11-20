import Link from 'next/link';
import { ArrowRight, Mail, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { CopyEmail } from '@/components/copy-email';
import { Reveal } from '@/components/motion/reveal';

export function ContactCta() {
  return (
    <section className="border-b border-grid py-20 md:py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center space-y-6">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            04 // COLLABORATION & INQUIRIES
          </span>

          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Have an inquiry or proposal for OpenGridLab?
          </h2>

          <p className="text-base text-muted-foreground sm:text-lg leading-relaxed">
            Whether you want to collaborate on distributed systems, report an issue, or propose a project,
            our team is ready to connect.
          </p>

          {/* Email Card with Copy button */}
          <div className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-card/70 p-4 sm:p-5 backdrop-blur-md max-w-lg">
            <div className="flex items-center gap-2.5">
              <Mail className="size-5 text-primary" />
              <span className="font-mono text-sm font-semibold text-foreground">
                {siteConfig.contactEmail}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CopyEmail email={siteConfig.contactEmail} />
              <Button asChild size="sm" className="rounded-full">
                <Link href={`mailto:${siteConfig.contactEmail}`}>
                  <Send className="mr-1.5 size-3.5" />
                  Mail
                </Link>
              </Button>
            </div>
          </div>

          <div className="pt-2">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/contact">
                Open Contact Form <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
