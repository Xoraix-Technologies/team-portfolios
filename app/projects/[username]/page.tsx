"use client";

import { getUserByParam } from "@/app/lib/site-data";
import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { Project } from "@/app/lib/site-data";

type Category = "All" | Project["category"];

export default function ProjectsPage({
  params,
}: {
  params: { username: string };
}) {
  const user = getUserByParam(params.username);
  const [active, setActive] = useState<Category>("All");

  const projects = useMemo(() => user?.projects.items ?? [], [user]);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  const categories = useMemo(() => {
    const set = new Set<Project["category"]>();
    projects.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)] as Category[];
  }, [projects]);

  if (!user) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060d16]">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[#5d6bff]/30" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(93,107,255,0.10)_0%,_rgba(6,13,22,0.35)_35%,_rgba(6,13,22,1)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(93,107,255,0.12)_0%,_rgba(6,13,22,0)_55%)]" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-24">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-100">
            My <span className="text-[#5d6bff]">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            {user.projects.description}
          </p>
        </div>

        <div className="mt-12 flex items-center justify-start">
          <div className="inline-flex flex-wrap overflow-hidden rounded-lg bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-slate-800/50">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={[
                  "px-5 py-2 text-sm font-semibold transition",
                  active === category
                    ? "bg-[#5d6bff] text-white"
                    : "bg-transparent text-slate-300 hover:bg-white/5",
                ].join(" ")}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} username={params.username} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  project,
  username,
}: {
  project: Project;
  username: string;
}) {
  return (
    <Link href={`/projects/${username}/${project.id}`}>
      <article className="group relative overflow-hidden rounded-2xl bg-[#0b2542] shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-slate-800/40 transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
        <div className="relative w-full aspect-[4/5]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 420px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 w-full px-6 pb-6">
            <h3 className="text-2xl font-extrabold text-white tracking-tight transition-colors duration-300 group-hover:text-[#5d6bff]">
              {project.title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  );
}
