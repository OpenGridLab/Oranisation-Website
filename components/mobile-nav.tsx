'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { mainNav } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Icons } from './icons';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="size-9 rounded-full md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh]">
        <DrawerTitle className="sr-only">OpenGridLab Navigation</DrawerTitle>
        <div data-lenis-prevent className="overflow-y-auto px-5 pb-8 pt-3">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b">
            <div className="flex size-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Icons.logo className="size-4" />
            </div>
            <p className="font-display text-lg font-bold">{siteConfig.name}</p>
          </div>
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-accent"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t text-xs text-muted-foreground">
            <p className="font-mono">{siteConfig.contactEmail}</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
