import Image from "next/image";
import type { SkillToolItem, UserData } from "@/app/lib/site-data";
import { Cpu } from "lucide-react";
import { SkillToolIcon } from "@/app/components/SkillToolIcon";

export default function AboutSection({
  about,
  skillsTools,
}: {
  about: UserData["about"];
  skillsTools: UserData["skillsTools"];
}) {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-[var(--primary)] ring-1 ring-[var(--primary-soft-border)]">
            <Cpu size={14} />
            {about.roleTitle}
          </span>

          <h2 className="mt-8 max-w-3xl text-balance text-5xl font-black leading-[1.08] tracking-[-0.03em] text-[var(--text-main)] sm:text-6xl">
            Architecting{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Intelligence
            </span>{" "}
            for the Modern Web.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
            {about.about1}
          </p>
        </div>

        <div className="relative aspect-[1/1] overflow-hidden rounded-xl bg-[var(--surface)] shadow-[0_16px_38px_rgb(var(--shadow-color)/0.12)] ring-1 ring-[var(--border)]">
          <Image
            src={about.imageSrc}
            alt={about.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 420px"
          />
        </div>
      </div>

      <div id="skills" className="mt-24 scroll-mt-24">
        <div className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] px-8 py-10 shadow-[0_14px_34px_rgb(var(--shadow-color)/0.06)] sm:px-12 lg:px-14 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-[var(--text-main)] sm:text-5xl">
                Skills &amp; Tools
              </h2>
              <p className="mt-6 max-w-md text-2xl font-bold leading-snug text-[var(--text-soft)]">
                {skillsTools.tagline}
              </p>
              <p className="mt-10 max-w-md text-2xl leading-[1.65] text-[var(--text-muted)]">
                {skillsTools.description}
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-5 pt-1">
              {skillsTools.items.map((item, index) => (
                <SkillToolPill key={`${item.label}-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <SectionHeading
          title="My Journey"
          description="The path that led me to architecting intelligence."
        />

        <div className="relative mt-9 space-y-10 pl-14 before:absolute before:left-[15px] before:top-3 before:h-full before:w-px before:bg-[var(--border)]">
          {about.experience.map((exp, index) => (
            <article
              key={`${exp.title}-${exp.company}`}
              className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7"
            >
              <span
                className={[
                  "absolute -left-[61px] top-2 grid h-8 w-8 place-items-center rounded-full border-2 bg-[var(--page-bg)]",
                  index === 0
                    ? "border-[var(--primary)]"
                    : index === 1
                      ? "border-[#007a91]"
                      : "border-[#7c8797]",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-3 w-3 rounded-full",
                    index === 0
                      ? "bg-[var(--primary)]"
                      : index === 1
                        ? "bg-[#007a91]"
                        : "bg-transparent",
                  ].join(" ")}
                />
              </span>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black tracking-[-0.02em] text-[var(--text-main)]">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--primary)]">
                    {exp.company}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-[#e3e7ec] px-4 py-2 text-xs font-black tracking-[0.16em] text-[var(--text-muted)]">
                  {exp.date}
                </span>
              </div>

              <p className="mt-6 text-base leading-7 text-[var(--text-soft)]">
                {exp.bullets.join(" ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillToolPill({ item }: { item: SkillToolItem }) {
  return (
    <span className="inline-flex h-[62px] items-center gap-4 rounded-lg border border-[#9eeef8] bg-[#e6fbff] px-7 text-lg font-black tracking-[0.14em] text-[var(--primary)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] transition hover:-translate-y-0.5 hover:bg-[#dff8ff]">
      <span className="grid h-7 w-7 place-items-center">
        {item.iconKey ? (
          <SkillToolIcon iconKey={item.iconKey} className="h-7 w-7" />
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

  return <span className="text-xs font-black">{initials}</span>;
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-3xl font-black tracking-[-0.03em] text-[var(--text-main)]">
        {title}
      </h2>
      <p className="mt-3 text-base text-[var(--text-soft)]">{description}</p>
    </div>
  );
}
