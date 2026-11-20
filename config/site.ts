/**
 * =====================================================================
 *  OPENGRIDLAB - CENTRAL CONFIGURATION FILE
 * =====================================================================
 *  EDIT THIS FILE TO CUSTOMIZE THE ENTIRE WEBSITE.
 *  All organization metadata, branding, member definitions,
 *  contact emails, and links are managed from here.
 * =====================================================================
 */

export const siteConfig = {
  // Organization Identity
  name: 'OpenGridLab',
  legalName: 'OpenGridLab',
  tagline: 'Open-Source Distributed Systems & Developer Tooling Lab',
  shortDescription:
    'Pioneering open-source distributed systems, modular grid architectures, and developer tooling.',
  description:
    'OpenGridLab is an open-source research and engineering organization dedicated to building resilient distributed systems, modern developer infrastructure, and modular software frameworks.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://opengridlabs.org',

  // Establishment & Timeline
  // This value is used as a fallback. When the site loads, it also queries the GitHub API
  // for the organization's `created_at` timestamp to automatically reflect the real creation date!
  established: 'November 2026',
  establishedYear: '2026',
  status: 'Active Lab · Research & Development',

  // Location / Base
  location: 'Global / Distributed',
  timezone: 'Asia/Dhaka',

  // Official Contact Email
  contactEmail: 'connect.opengridlab@gmail.com',

  // GitHub Organization Settings
  githubOrg: 'OpenGridLab',

  // Key Roles & Leadership
  // Automatic loader queries GitHub for these usernames (avatar, bio, followers, public repos)
  owner: {
    username: 'mahie-cs',
    title: 'Founder & Lead Architect',
    displayNameFallback: 'MD. Montasir Rahman Mahie',
    bioFallback: 'Software developer and student building open-source web applications and developer tools.',
    githubUrl: 'https://github.com/mahie-cs',
    avatarFallback: 'https://github.com/mahie-cs.png',
  },

  maintainers: [
    {
      username: 'mahie-cs',
      role: 'Founder & Lead Architect',
      isOwner: true,
      displayNameFallback: 'MD. Montasir Rahman Mahie',
      bioFallback: 'Specializing in TypeScript, Next.js, distributed architectures, and developer tools.',
      githubUrl: 'https://github.com/mahie-cs',
      avatarFallback: 'https://github.com/mahie-cs.png',
    },
    {
      username: 'samiakhlaq',
      role: 'Core Maintainer & Systems Engineer',
      isOwner: false,
      displayNameFallback: 'Sami Akhlaq',
      bioFallback: 'Core maintainer focusing on systems engineering, backend infrastructure, and open tooling.',
      githubUrl: 'https://github.com/samiakhlaq',
      avatarFallback: 'https://github.com/samiakhlaq.png',
    },
  ],

  // Lab Focus & Mission Pillars
  pillars: [
    {
      title: 'Distributed Grid Architectures',
      description: 'Designing fault-tolerant, decentralized computing primitives that scale seamlessly across heterogeneous nodes.',
    },
    {
      title: 'Developer Infrastructure',
      description: 'Crafting high-leverage CLI tools, automation scripts, and workflow accelerators for modern software teams.',
    },
    {
      title: 'Open Protocols & Standards',
      description: 'Committing 100% of our research and specifications to public-domain, permissive open-source licenses.',
    },
  ],

  // Links & Social Profiles
  links: {
    github: 'https://github.com/OpenGridLab',
    email: 'mailto:connect.opengridlab@gmail.com',
    twitter: '', // Optional: e.g. 'https://twitter.com/OpenGridLabs'
    discord: '', // Optional: e.g. 'https://discord.gg/...'
    docs: '/about',
  },

  // SEO Keywords
  keywords: [
    'OpenGridLab',
    'OpenGrid Lab',
    'open source',
    'distributed systems',
    'grid computing',
    'developer tools',
    'software laboratory',
    'mahie-cs',
    'samiakhlaq',
    'Next.js',
    'TypeScript',
  ],
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: '#f8fafc',
  dark: '#090d16',
};
