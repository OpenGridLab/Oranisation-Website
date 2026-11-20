import { getLabAutomatedData } from '@/lib/github';
import { Hero } from '@/components/sections/hero';
import { AboutPreview } from '@/components/sections/about-preview';
import { TeamSection } from '@/components/sections/team-section';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { ContactCta } from '@/components/sections/contact-cta';

export const revalidate = 300; // Automatically revalidate every 5 minutes

export default async function HomePage() {
  // Automatically fetch live telemetry & team metadata from GitHub on view
  const labData = await getLabAutomatedData();

  return (
    <div className="container-wrapper">
      <Hero orgData={labData.org} />
      <AboutPreview establishedFormatted={labData.org.establishedFormatted} />
      <TeamSection members={labData.members} />
      <FeaturedProjects />
      <ContactCta />
    </div>
  );
}
