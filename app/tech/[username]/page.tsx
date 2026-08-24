import { getUserByParam } from "@/app/lib/site-data";
import TechSection from "@/app/components/sections/TechSection";
import SkillsToolsSection from "@/app/components/sections/SkillsToolsSection";
import { notFound } from "next/navigation";

export default function SkillsToolsPage({
  params,
}: {
  params: { username: string };
}) {
  const user = getUserByParam(params.username);
  if (!user) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--page-bg)]">
      <TechSection tech={user.tech} />
      <SkillsToolsSection skillsTools={user.skillsTools} />
    </main>
  );
}
