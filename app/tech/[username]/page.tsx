import { getUserByParam } from "@/app/lib/site-data";
import { notFound } from "next/navigation";
import type { SkillToolItem } from "@/app/lib/site-data"; // adjust path if needed
import { SkillToolIcon } from "@/app/components/SkillToolIcon";

export default function SkillsToolsPage({
  params,
}: {
  params: { username: string };
}) {
  const user = getUserByParam(params.username);
  if (!user) notFound();

  const skills = user.skillsTools;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060d16]">
      {/* top hairline */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[#5d6bff]/30" />

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(93,107,255,0.10)_0%,_rgba(6,13,22,0.35)_35%,_rgba(6,13,22,1)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(93,107,255,0.12)_0%,_rgba(6,13,22,0)_55%)]" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          {skills.title} <span className="text-[#5d6bff]">.</span>
        </h1>

        <h2 className="mt-4 text-center text-xl font-semibold tracking-tight text-slate-300 sm:text-2xl">
          {skills.tagline}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-slate-400 sm:text-base">
          {skills.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.items.map((item) => (
            <SkillPill key={item.label} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function SkillPill({ item }: { item: SkillToolItem }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl bg-[#0b2542] px-4 py-2 text-sm font-semibold text-slate-100 shadow-[0_16px_50px_rgba(0,0,0,0.35)] ring-1 ring-slate-800/40">
      <span className="grid h-5 w-5 place-items-center text-[#5d6bff]">
        {item.iconKey ? (
          <SkillToolIcon iconKey={item.iconKey} />
        ) : (
          <FallbackIcon label={item.label} />
        )}
      </span>

      <span className="whitespace-nowrap">{item.label}</span>
    </span>
  );
}

function FallbackIcon({ label }: { label: string }) {
  const initials = label
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span className="grid h-[18px] w-[18px] place-items-center rounded-md bg-white/10 text-[10px] font-bold text-slate-200">
      {initials}
    </span>
  );
}
