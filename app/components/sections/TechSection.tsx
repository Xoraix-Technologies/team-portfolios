import type { UserData } from "@/app/lib/site-data";
import { Code, Database, Layers, Palette, Server } from "lucide-react";

export default function TechSection({ tech }: { tech: UserData["tech"] }) {
  return (
    <section
      id="tech"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-100">
          {tech.heading} <span className="text-[#5d6bff]">.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {tech.description}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tech.techs.map((t) => {
          return (
            <div
              key={t.title}
              className="rounded-2xl bg-[#0b2542] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.45)] ring-1 ring-slate-800/40"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#091d33] text-[#5d6bff] ring-1 ring-slate-700/40">
                  <TechIcon iconKey={t.iconKey} />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-100">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {t.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TechIcon({ iconKey }: { iconKey: UserData["tech"]["techs"][number]["iconKey"] }) {
  switch (iconKey) {
    case "layers":
      return <Layers size={18} />;
    case "code":
      return <Code size={18} />;
    case "server":
      return <Server size={18} />;
    case "db":
      return <Database size={18} />;
    case "palette":
      return <Palette size={18} />;
    case "github":
      return <GithubMark />;
  }
}

function GithubMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.2c0-.9.3-1.6.8-2-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.5-2.9 5.5-5.6 5.8.5.4.9 1.3.9 2.6V22"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
