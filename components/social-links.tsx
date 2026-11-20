import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

export function SocialLinks() {
  const items = [
    { label: 'GitHub Org', href: siteConfig.links.github, Icon: Icons.gitHub },
    { label: 'Direct Email', href: siteConfig.links.email, Icon: Mail },
    { label: 'X / Twitter', href: siteConfig.links.twitter, Icon: Icons.twitter },
    { label: 'Discord', href: siteConfig.links.discord, Icon: MessageSquare },
  ];

  return (
    <ul className="flex flex-wrap gap-2">
      {items
        .filter((i) => i.href)
        .map(({ label, href, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border bg-card/40 px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <Icon className="size-4" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}
