import { notFound } from "next/navigation";
import AboutSection from "@/app/components/sections/AboutSection";
import { getUserByParam } from "@/app/lib/site-data";

export default function AboutPage({
  params,
}: {
  params: { username: string };
}) {
  const user = getUserByParam(params.username);
  if (!user) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--page-bg)]">
      <AboutSection about={user.about} skillsTools={user.skillsTools} />
    </main>
  );
}
