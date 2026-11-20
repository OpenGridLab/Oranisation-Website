export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

/** Primary top-level navigation */
export const mainNav: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Team', href: '/team' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

/** Inner sidebar navigation */
export const sidebarNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Lab Navigation',
    items: [
      { title: 'Overview', href: '/' },
      { title: 'About & Mission', href: '/about' },
      { title: 'Owner & Team', href: '/team' },
      { title: 'Projects', href: '/projects' },
      { title: 'Contact Lab', href: '/contact' },
    ],
  },
];

export const pagerOrder = sidebarNav[0]!.items;
