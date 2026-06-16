import { notFound } from "next/navigation";
import { getUserByParam } from "@/app/lib/site-data";
import UserLanding from "@/app/components/UserLanding";
import fs from "fs";
import path from "path";

export default function UserHomePage({
  params,
}: {
  params: { username: string };
}) {
  const user = getUserByParam(params.username);
  if (!user) notFound();

  // ✅ checks: public/resumes/<slug>.pdf
  const resumePath = path.join(
    process.cwd(),
    "public",
    "resumes",
    `${user.slug}.pdf`,
  );
  const hasResume = fs.existsSync(resumePath);

  return <UserLanding user={user} hasResume={hasResume} />;
}
