import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Reveal } from '@/components/motion/reveal';
import { SocialLinks } from '@/components/social-links';
import { CopyEmail } from '@/components/copy-email';
import { Button } from '@/components/ui/button';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact OpenGridLab',
  description: 'Connect with the OpenGridLab team for inquiries, research collaborations, and open-source proposals.',
};

export default function ContactPage() {
  const email = siteConfig.contactEmail;

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact the Lab</PageHeaderHeading>
        <PageHeaderDescription>
          Reach out to OpenGridLab for collaboration proposals, distributed systems questions, or partnership discussions.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="rounded-2xl border bg-card/50 p-6 sm:p-8 backdrop-blur-xs">
            <h2 className="font-display text-xl font-bold mb-6">Send a Direct Transmission</h2>
            <ContactForm />
          </div>
        </Reveal>

        <Reveal className="space-y-8">
          {/* Primary Email Card */}
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 space-y-4">
            <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
              <Mail className="size-4" />
              <span>Official Lab Email</span>
            </div>
            <p className="font-mono text-base font-medium break-all text-foreground">
              {email}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <CopyEmail email={email} />
              <Button asChild size="sm" variant="default" className="rounded-full">
                <Link href={`mailto:${email}`}>
                  <Send className="mr-1.5 size-3.5" />
                  Mail App
                </Link>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h2 className="font-display text-lg font-semibold">Channels & Repositories</h2>
            <p className="text-sm text-muted-foreground">
              Follow our code and interact with the maintainers directly:
            </p>
            <SocialLinks />
          </div>

          {/* Leadership Contact info */}
          <div className="rounded-xl border p-5 space-y-2 text-sm bg-card/40">
            <p className="font-semibold text-foreground">Direct Leadership Contacts</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Owner: <strong className="text-foreground">@{siteConfig.owner.username}</strong>
              <br />
              Core Maintainer: <strong className="text-foreground">@samiakhlaq</strong>
            </p>
          </div>
        </Reveal>
      </div>

      <Pager />
    </>
  );
}
