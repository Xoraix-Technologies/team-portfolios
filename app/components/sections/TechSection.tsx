import type { UserData } from "@/app/lib/site-data";
import {
  Bot,
  Code,
  Database,
  GitBranch,
  Layers,
  Palette,
  Server,
} from "lucide-react";

export default function TechSection({ tech }: { tech: UserData["tech"] }) {
  return (
    <section
      id="tech"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <div className="text-center">
        <h2 className="text-4xl font-black tracking-[-0.03em] text-[var(--text-main)] sm:text-5xl">
          Core Expertise
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
          {tech.description}
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tech.techs.map((item) => (
          <article
            key={item.title}
            className="group min-h-[290px] rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgb(var(--shadow-color)/0.10)]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e7edf6] text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
              <TechIcon iconKey={item.iconKey} title={item.title} />
            </span>

            <h3 className="mt-8 text-2xl font-black tracking-[-0.02em] text-[var(--text-main)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
              {item.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {deriveTags(item.title).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs font-extrabold tracking-[0.1em] text-[var(--primary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechIcon({
  iconKey,
  title,
}: {
  iconKey: UserData["tech"]["techs"][number]["iconKey"];
  title: string;
}) {
  if (title.toLowerCase().includes("ai")) return <Bot size={21} />;

  switch (iconKey) {
    case "layers":
      return <Layers size={21} />;
    case "code":
      return <Code size={21} />;
    case "server":
      return <Server size={21} />;
    case "db":
      return <Database size={21} />;
    case "palette":
      return <Palette size={21} />;
    case "github":
      return <GitBranch size={21} />;
    case "docker":
      return <Server size={21} />;
  }
}

function deriveTags(title: string) {
  return title
    .split(/[&/,]/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 2);
}
