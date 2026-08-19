import { getAllUsers, getUserByParam } from "@/app/lib/site-data";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const users = getAllUsers();

  return users.flatMap((user) =>
    user.projects.items.map((project) => ({
      username: user.slug,
      projectId: project.id, // <-- Must match folder [projectId]
    })),
  );
}

export default function ProjectDetailsPage({
  params,
}: {
  params: { username: string; projectId: string };
}) {
  const { username, projectId } = params;

  const user = getUserByParam(username);
  if (!user) return notFound();

  const project = user.projects.items.find((p) => p.id === projectId);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#060d16] via-[#0b1623] to-[#060d16] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
          {project.projectTitle}
        </h1>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE — TEXT CONTENT */}
          <div className="max-w-xl">
            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              {project.projectTitle}
            </h1> */}

            <div className="mt-8 text-lg leading-relaxed">
              <h2 className="text-2xl font-semibold mb-8">Objective:</h2>
              {project.description}
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-semibold mb-8">Challenges:</h2>

              <div className="space-y-6">
                {project.projectChallenges?.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-full">{index + 1}</div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
