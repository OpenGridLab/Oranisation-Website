import { siteConfig } from '@/config/site';

export type GitHubOrgData = {
  name: string;
  login: string;
  description: string;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  createdAt: string;
  establishedFormatted: string;
  establishedYear: string;
  isLive: boolean;
};

export type GitHubMemberData = {
  username: string;
  name: string;
  role: string;
  isOwner: boolean;
  avatarUrl: string;
  bio: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  location?: string | null;
  company?: string | null;
  isLive: boolean;
};

export type LabAutomatedData = {
  org: GitHubOrgData;
  members: GitHubMemberData[];
  owner: GitHubMemberData;
  lastUpdated: string;
};

function formatEstablishedDate(isoDateString?: string | null): { formatted: string; year: string } {
  if (!isoDateString) {
    return { formatted: siteConfig.established, year: siteConfig.establishedYear };
  }
  try {
    const d = new Date(isoDateString);
    if (isNaN(d.getTime())) {
      return { formatted: siteConfig.established, year: siteConfig.establishedYear };
    }
    const formatted = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const year = d.getFullYear().toString();
    return { formatted, year };
  } catch {
    return { formatted: siteConfig.established, year: siteConfig.establishedYear };
  }
}

function getAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'OpenGridLabs-Web',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

/**
 * Fetch GitHub Organization data with 5-minute caching.
 * Falls back gracefully to siteConfig if API is rate-limited or unavailable.
 */
export async function fetchGitHubOrg(): Promise<GitHubOrgData> {
  const fallbackDate = formatEstablishedDate(null);
  const fallback: GitHubOrgData = {
    name: siteConfig.name,
    login: siteConfig.githubOrg,
    description: siteConfig.description,
    avatarUrl: `https://github.com/${siteConfig.githubOrg}.png`,
    htmlUrl: siteConfig.links.github,
    publicRepos: 0,
    followers: 0,
    createdAt: '',
    establishedFormatted: fallbackDate.formatted,
    establishedYear: fallbackDate.year,
    isLive: false,
  };

  try {
    const res = await fetch(`https://api.github.com/orgs/${siteConfig.githubOrg}`, {
      next: { revalidate: 300 },
      headers: getAuthHeaders(),
    });

    if (!res.ok) {
      return fallback;
    }

    const data = await res.json();
    const dateInfo = formatEstablishedDate(data.created_at);

    return {
      name: data.name || siteConfig.name,
      login: data.login || siteConfig.githubOrg,
      description: data.description || siteConfig.description,
      avatarUrl: data.avatar_url || fallback.avatarUrl,
      htmlUrl: data.html_url || fallback.htmlUrl,
      publicRepos: typeof data.public_repos === 'number' ? data.public_repos : 0,
      followers: typeof data.followers === 'number' ? data.followers : 0,
      createdAt: data.created_at || '',
      establishedFormatted: dateInfo.formatted,
      establishedYear: dateInfo.year,
      isLive: true,
    };
  } catch {
    return fallback;
  }
}

/**
 * Fetch a GitHub user profile with 5-minute caching.
 * Returns automated real-time details (avatar, bio, name, followers, repos)
 * with robust fallback from config.
 */
export async function fetchGitHubUser(
  username: string,
  role: string,
  isOwner: boolean,
  fallbackName: string,
  fallbackBio: string,
  fallbackAvatar: string
): Promise<GitHubMemberData> {
  const fallback: GitHubMemberData = {
    username,
    name: fallbackName,
    role,
    isOwner,
    avatarUrl: fallbackAvatar || `https://github.com/${username}.png`,
    bio: fallbackBio,
    htmlUrl: `https://github.com/${username}`,
    publicRepos: 0,
    followers: 0,
    location: null,
    company: null,
    isLive: false,
  };

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 300 },
      headers: getAuthHeaders(),
    });

    if (!res.ok) {
      return fallback;
    }

    const data = await res.json();

    return {
      username: data.login || username,
      name: data.name || fallbackName,
      role,
      isOwner,
      avatarUrl: data.avatar_url || fallback.avatarUrl,
      bio: data.bio || fallbackBio,
      htmlUrl: data.html_url || fallback.htmlUrl,
      publicRepos: typeof data.public_repos === 'number' ? data.public_repos : 0,
      followers: typeof data.followers === 'number' ? data.followers : 0,
      location: data.location || null,
      company: data.company || null,
      isLive: true,
    };
  } catch {
    return fallback;
  }
}

/**
 * Automatically fetch full lab data (Org info, Owner, and All Maintainers).
 * Called when the page loads on the server.
 */
export async function getLabAutomatedData(): Promise<LabAutomatedData> {
  const orgPromise = fetchGitHubOrg();

  const membersPromises = siteConfig.maintainers.map((m) =>
    fetchGitHubUser(
      m.username,
      m.role,
      m.isOwner,
      m.displayNameFallback,
      m.bioFallback,
      m.avatarFallback
    )
  );

  const [org, members] = await Promise.all([orgPromise, Promise.all(membersPromises)]);

  const owner =
    members.find((m) => m.username.toLowerCase() === siteConfig.owner.username.toLowerCase()) ??
    members[0]!;

  return {
    org,
    members,
    owner,
    lastUpdated: new Date().toISOString(),
  };
}
