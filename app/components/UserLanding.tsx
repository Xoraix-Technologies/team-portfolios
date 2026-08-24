import type { UserData } from "@/app/lib/site-data";
import Hero from "@/app/components/Hero";
import AboutSection from "@/app/components/sections/AboutSection";
import TechSection from "@/app/components/sections/TechSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function UserLanding({
  user,
  hasResume,
}: {
  user: UserData;
  hasResume: boolean;
}) {
  return (
    <main className="relative overflow-hidden bg-[var(--page-bg)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[var(--page-glow)] to-transparent" />
      </div>

      <div id="top" className="relative">
        <Hero hero={user.hero} slug={user.slug} hasResume={hasResume} />
      </div>

      <TechSection tech={user.tech} />
      <AboutSection about={user.about} skillsTools={user.skillsTools} />
      <ProjectsSection projects={user.projects} username={user.slug} />
      <ContactSection user={user} />
    </main>
  );
}
