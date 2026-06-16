import type { UserData } from "@/app/lib/site-data";
import Hero from "@/app/components/Hero";
import AboutSection from "@/app/components/sections/AboutSection";
import TechSection from "@/app/components/sections/TechSection";
import SkillsToolsSection from "@/app/components/sections/SkillsToolsSection";
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
    <main className="relative overflow-hidden bg-[#060d16]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(93,107,255,0.10)_0%,_rgba(6,13,22,0.35)_35%,_rgba(6,13,22,1)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(93,107,255,0.12)_0%,_rgba(6,13,22,0)_55%)]" />
      </div>

      <div id="top" className="relative">
        <Hero hero={user.hero} slug={user.slug} hasResume={hasResume} />
      </div>

      <AboutSection about={user.about} />
      <TechSection tech={user.tech} />
      <SkillsToolsSection skillsTools={user.skillsTools} />
      <ProjectsSection projects={user.projects} username={user.slug} />
      <ContactSection user={user} />
    </main>
  );
}
