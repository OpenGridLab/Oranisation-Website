export type Project = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'planning' | 'in-progress' | 'incubating' | 'released';
  featured?: boolean;
};

/**
 * ──────────────────────────────────────────────────────────────
 *  PROJECTS LIST
 *  As per specification: Left empty for now.
 *  When you are ready to publish projects, simply add project objects
 *  to this array and they will automatically render across the site!
 * ──────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [];
