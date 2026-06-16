"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { UserData } from "@/app/lib/site-data";

type Category = "All" | UserData["projects"]["items"][number]["category"];

export default function ProjectsSection({
  projects,
  username,
}: {
  projects: UserData["projects"];
  username: string;
}) {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects.items;
    return projects.items.filter((p) => p.category === active);
  }, [active, projects.items]);

  const categories = useMemo(() => {
    const set = new Set<UserData["projects"]["items"][number]["category"]>();
    projects.items.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)] as Category[];
  }, [projects.items]);

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-100">
          {projects.heading.split(" ").slice(0, 1).join(" ")}{" "}
          <span className="text-[#5d6bff]">
            {projects.heading.split(" ").slice(1).join(" ") || "Projects"}
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          {projects.description}
        </p>
      </div>

      <div className="mt-12 flex items-center justify-start">
        <div className="inline-flex flex-wrap overflow-hidden rounded-lg bg-black/40 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-slate-800/50">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={[
                "px-5 py-2 text-sm font-semibold transition",
                active === c
                  ? "bg-[#5d6bff] text-white"
                  : "bg-transparent text-slate-300 hover:bg-white/5",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} username={username} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  username,
}: {
  project: UserData["projects"]["items"][number];
  username: string;
}) {
  return (
    <Link href={`/projects/${username}/${project.id}`}>
      <article className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#0b2542] shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-slate-800/40 transition-transform duration-500 hover:-translate-y-2">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 420px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 w-full px-6 pb-6">
            <h3 className="text-2xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-[#5d6bff]">
              {project.title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  );
}
