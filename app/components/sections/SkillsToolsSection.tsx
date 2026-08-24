import type { UserData, SkillToolItem } from "@/app/lib/site-data";
import { SkillToolIcon } from "@/app/components/SkillToolIcon";

export default function SkillsToolsSection({
  skillsTools,
}: {
  skillsTools: UserData["skillsTools"];
}) {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16"
    >
      <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-[var(--text-main)]">
              {skillsTools.title}
            </h2>
            <p className="mt-3 text-base font-semibold text-[var(--text-soft)]">
              {skillsTools.tagline}
            </p>
            <p className="mt-5 text-base leading-7 text-[var(--text-muted)]">
              {skillsTools.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillsTools.items.map((item) => (
              <SkillPill key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillPill({ item }: { item: SkillToolItem }) {
  return (
    <span className="inline-flex h-10 items-center gap-2 rounded-md border border-[var(--primary-soft-border)] bg-[var(--primary-soft)] px-4 text-xs font-black tracking-[0.12em] text-[var(--primary)] transition hover:-translate-y-0.5 hover:bg-[#dff8ff]">
      <span className="grid h-5 w-5 place-items-center">
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
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return <span className="text-[10px] font-black">{initials}</span>;
}
