"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Project, UserData } from "@/app/lib/site-data";

type Category = "All" | Project["category"];

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
    return projects.items.filter((project) => project.category === active);
  }, [active, projects.items]);

  const categories = useMemo(() => {
    const set = new Set<Project["category"]>();
    projects.items.forEach((project) => set.add(project.category));
    return ["All", ...Array.from(set)] as Category[];
  }, [projects.items]);

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-black tracking-[-0.03em] text-[var(--text-main)] sm:text-5xl">
          Project Gallery
        </h2>

        <p className="mt-6 text-lg leading-8 text-[var(--text-soft)]">
          {projects.description}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={[
              "h-10 rounded-full border px-6 text-xs font-black tracking-[0.14em] transition",
              active === category
                ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                : "border-[#b8c3d4] bg-transparent text-[var(--text-soft)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
            ].join(" ")}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            username={username}
            isWide={index === 0 || index % 5 === 3}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  username,
  isWide,
}: {
  project: Project;
  username: string;
  isWide: boolean;
}) {
  return (
    <Link
      href={`/projects/${username}/${project.id}`}
      className={isWide ? "md:col-span-2" : undefined}
    >
      <article
        className={[
          "group h-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgb(var(--shadow-color)/0.11)]",
          isWide ? "grid md:grid-cols-[1fr_1fr]" : "",
        ].join(" ")}
      >
        <div
          className={[
            "relative overflow-hidden bg-[var(--surface-strong)]",
            isWide ? "min-h-[310px]" : "aspect-[1.45/1]",
          ].join(" ")}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition duration-700 group-hover:scale-105"
            sizes={isWide ? "(max-width: 1024px) 100vw, 520px" : "380px"}
          />
        </div>

        <div className="flex min-h-[250px] flex-col p-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-black tracking-[0.1em] text-[var(--primary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-7 text-2xl font-black tracking-[-0.02em] text-[var(--text-main)]">
            {project.title}
          </h3>
          <p className="mt-4 line-clamp-4 text-base leading-7 text-[var(--text-soft)]">
            {project.description}
          </p>

          <span className="mt-auto inline-flex items-center gap-3 pt-8 text-xs font-black tracking-[0.16em] text-[var(--primary)]">
            View Case Study
            <ArrowRight size={17} />
          </span>
        </div>
      </article>
    </Link>
  );
}
