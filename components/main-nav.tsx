'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { mainNav } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from './icons';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex items-center">
      <Link href="/" className="mr-8 flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
        <div className="flex size-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
          <Icons.logo className="size-4.5" />
        </div>
        <span className="font-display text-base font-bold tracking-tight">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-1 text-sm font-medium">
        {mainNav.map((item) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative rounded-md px-3 py-1.5 transition-colors',
                active ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.title}
              {active && (
                <motion.span
                  layoutId="main-nav-underline"
                  className="absolute inset-x-2 -bottom-[15px] h-0.5 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
