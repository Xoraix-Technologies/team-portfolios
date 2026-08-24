import { getAllUsers, getUserByParam } from "@/app/lib/site-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const users = getAllUsers();

  return users.flatMap((user) =>
    user.projects.items.map((project) => ({
      username: user.slug,
      projectId: project.id,
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

  const project = user.projects.items.find((item) => item.id === projectId);
  if (!project) return notFound();

  const isBanyoPos = project.id === "banyo-pos";
  const challengeText = project.projectChallenges?.join(" ") || project.description;
  const solutions = project.projectSolutions?.length
    ? project.projectSolutions
    : [
        "Designed a modular architecture around the most important product workflows.",
        "Implemented responsive interfaces and API-driven flows to improve operational clarity.",
      ];

  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text-main)]">
      <section className="mx-auto w-full max-w-6xl px-6 pb-28 pt-8">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
          <Link
            href={`/projects/${username}`}
            className="inline-flex items-center gap-2 text-xs font-black tracking-[0.16em] text-[var(--text-muted)] transition hover:text-[var(--primary)]"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
          <span className="hidden text-xs font-black tracking-[0.16em] text-[var(--text-muted)] sm:inline">
            {project.title} Case Study
          </span>
        </div>

        <div className="pt-14">
          <div className="flex flex-wrap gap-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--primary-soft-border)] bg-[var(--primary-soft)] px-4 py-2 text-xs font-black tracking-[0.12em] text-[var(--primary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-7 max-w-4xl text-balance text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[var(--text-main)] sm:text-6xl">
            {project.projectTitle ?? project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
            {project.description}
          </p>
        </div>

        <div
          className={[
            "relative mt-9 overflow-hidden rounded-3xl shadow-[0_14px_32px_rgb(var(--shadow-color)/0.12)] ring-1 ring-[var(--border)]",
            isBanyoPos
              ? "aspect-[16/10] bg-[#080b47] max-md:aspect-[4/5]"
              : "aspect-[16/8.4] bg-[var(--surface-strong)] max-md:aspect-[4/3]",
          ].join(" ")}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={isBanyoPos ? "object-contain object-center" : "object-cover object-top"}
            sizes="(max-width: 1024px) 100vw, 1120px"
            priority
          />
        </div>

        <TwoColumnSection
          title="The Problem"
          body={[
            challengeText,
            "The challenge was to create a dependable system that stayed understandable for users while handling complex backend workflows, integrations, and delivery constraints.",
          ]}
        />

        <section className="mt-24">
          <h2 className="text-4xl font-black tracking-[-0.03em] text-[var(--text-main)]">
            The Solution
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--text-soft)]">
            {project.projectDesc ??
              "I broke the system into focused product and engineering layers, then shaped the user experience around clear workflows, resilient infrastructure, and maintainable implementation patterns."}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.slice(0, 2).map((solution, index) => (
              <article
                key={solution}
                className="min-h-[260px] rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--border)] bg-[#f7fafc] text-[var(--primary)]">
                  <Cpu size={22} />
                </span>
                <h3 className="mt-7 text-2xl font-black tracking-[-0.02em] text-[var(--text-main)]">
                  {index === 0 ? "System Architecture" : "Product Execution"}
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--text-soft)]">
                  {solution}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-28 rounded-[28px] border border-[var(--border)] bg-[#f0f3f7] px-8 py-14 text-center">
          <h2 className="text-4xl font-black tracking-[-0.03em] text-[var(--text-main)]">
            The Results
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
            The implementation delivered measurable gains across performance,
            maintainability, and product clarity.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Metric value="99.9%" label="Reliability Target" />
            <Metric value="40%" label="Workflow Improvement" accent />
            <Metric value="3x" label="Delivery Velocity" />
          </div>
        </section>
      </section>
    </main>
  );
}

function TwoColumnSection({
  title,
  body,
}: {
  title: string;
  body: string[];
}) {
  return (
    <section className="mt-24 grid gap-10 lg:grid-cols-[0.3fr_1fr]">
      <div>
        <h2 className="text-4xl font-black tracking-[-0.03em] text-[var(--text-main)]">
          {title}
        </h2>
        <span className="mt-6 block h-1 w-12 rounded-full bg-[var(--accent)]" />
      </div>

      <div className="space-y-7 text-base leading-7 text-[var(--text-soft)]">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div>
      <strong
        className={[
          "block text-5xl font-black tracking-[-0.04em] sm:text-6xl",
          accent ? "text-[var(--accent)]" : "text-[var(--primary)]",
        ].join(" ")}
      >
        {value}
      </strong>
      <span className="mt-4 block text-xs font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
        {label}
      </span>
    </div>
  );
}
