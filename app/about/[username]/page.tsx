import Image from "next/image";
import { notFound } from "next/navigation";
import {
  BriefcaseIcon,
  CheckIcon,
  CodeBracketsIcon,
  CodeIcon,
  DbIcon,
  DockerIcon,
  GithubIcon,
  PaletteIcon,
  PythonIcon,
  ReactIcon,
  LinuxIcon,
} from "@/app/components/icons";
import { getUserByParam } from "@/app/lib/site-data";

type Skill = {
  name: string;
  percent: number;
  iconKey:
    | "react"
    | "code"
    | "github"
    | "palette"
    | "db"
    | "brackets"
    | "docker"
    | "python"
    | "debian"
    | "centos";
};

type Experience = {
  title: string;
  company: string;
  date: string;
  bullets: string[];
};

export default function AboutPage({
  params,
}: {
  params: { username: string };
}) {
  const user = getUserByParam(params.username);
  if (!user) notFound();

  const about = user.about;

  const iconMap: Record<Skill["iconKey"], React.ReactNode> = {
    react: <ReactIcon />,
    code: <CodeIcon />,
    github: <GithubIcon />,
    palette: <PaletteIcon />,
    db: <DbIcon />,
    brackets: <CodeBracketsIcon />,
    docker: <DockerIcon />,
    python: <PythonIcon />,
    debian: <LinuxIcon />,
    centos: <LinuxIcon />,
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060d16]">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[#5d6bff]/30" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(93,107,255,0.10)_0%,_rgba(6,13,22,0.35)_35%,_rgba(6,13,22,1)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(93,107,255,0.12)_0%,_rgba(6,13,22,0)_55%)]" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-slate-100">
          About <span className="text-[#5d6bff]">Me</span>
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
          <div className="mx-auto w-full max-w-[340px]">
            <div className="relative aspect-[1/1] overflow-hidden rounded-2xl bg-[#071425] shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-slate-800/40">
              <Image
                src={about.imageSrc}
                alt={about.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 340px, 340px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-2xl font-extrabold text-slate-100">
              Hello, I&apos;m {about.name}!
            </h3>

            <p className="mt-2 text-sm font-semibold text-slate-300 sm:text-base">
              {about.roleTitle}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              {about.about1}
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
              {about.about2}
            </p>

            <h4 className="mt-10 text-xl font-extrabold text-[#5d6bff]">
              My Skills
            </h4>

            <div className="mt-5 grid gap-x-8 gap-y-6 md:grid-cols-2">
              <div className="space-y-6">
                {about.skillsLeft.map((s) => (
                  <SkillRow
                    key={s.name}
                    name={s.name}
                    percent={s.percent}
                    icon={iconMap[s.iconKey]}
                  />
                ))}
              </div>

              <div className="space-y-6">
                {about.skillsRight.map((s) => (
                  <SkillRow
                    key={s.name}
                    name={s.name}
                    percent={s.percent}
                    icon={iconMap[s.iconKey]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-extrabold text-[#5d6bff]">
            Professional Experience
          </h3>

          <div className="mt-10 space-y-6">
            {about.experience.map((exp) => (
              <ExperienceCard key={exp.title} exp={exp} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillRow({
  name,
  percent,
  icon,
}: {
  name: string;
  percent: number;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center text-[#5d6bff]">
            {icon}
          </span>
          <span className="text-sm font-semibold text-slate-200">{name}</span>
        </div>
        <span className="text-xs font-semibold text-slate-300">{percent}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-[#0b2742]">
        <div
          className="h-full rounded-full bg-[#5d6bff]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="rounded-xl bg-[#0b2542] px-7 py-6 shadow-[0_16px_50px_rgba(0,0,0,0.45)] ring-1 ring-slate-800/40">
      <div className="flex items-start gap-4">
        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#091d33] text-[#5d6bff] ring-1 ring-slate-700/40">
          <BriefcaseIcon />
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-extrabold text-slate-100">{exp.title}</h4>
          <p className="mt-1 text-sm text-slate-300">
            {exp.company} <span className="text-slate-400">• {exp.date}</span>
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {exp.bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-3 text-slate-300">
            <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center text-[#5d6bff]">
              <CheckIcon />
            </span>
            <p className="text-sm leading-6">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
