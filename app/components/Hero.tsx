import Link from "next/link";

type HeroData = {
  pill: string;
  name: string;
  mainTitle: string;
  subtitle: string;
  shortIntro: string;
  techPills: string[];
  ctaText: string;
  cvText: string;
  resumeUrl?: string;
  resumeFileName?: string; // optional download name
};

export default function Hero({
  hero,
  slug,
  hasResume,
}: {
  hero: HeroData;
  slug: string;
  hasResume: boolean;
}) {
  const resumeUrl = hero.resumeUrl ?? `/resumes/${slug}.pdf`;
  const downloadName = hero.resumeFileName ?? `${slug}.pdf`;

  // ✅ adjust this based on your real route
  const projectsHref = `/projects/${slug}`;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060d16]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(93,107,255,0.10)_0%,_rgba(6,13,22,0.35)_35%,_rgba(6,13,22,1)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(93,107,255,0.12)_0%,_rgba(6,13,22,0)_55%)]" />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full border border-[#5d6bff]/60 px-4 py-1 text-xs font-semibold text-[#5d6bff] shadow-[0_0_0_6px_rgba(93,107,255,0.06)]">
            {hero.pill}
          </span>
        </div>

        <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-100 sm:text-6xl">
          Hi, I&apos;m <span className="text-[#5d6bff]">{hero.name}</span>{" "}
          {hero.mainTitle}
          <br />
          <span className="text-slate-300 text-2xl sm:text-3xl font-semibold">
            {hero.subtitle}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-base">
          {hero.shortIntro}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {hero.techPills.map((t) => (
            <TechPill key={t}>{t}</TechPill>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={projectsHref}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#5d6bff] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(93,107,255,0.35)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {hero.ctaText}
            <ArrowIcon />
          </Link>

          {hasResume ? (
            <a
              href={resumeUrl}
              download={downloadName}
              className="inline-flex items-center justify-center rounded-xl border border-slate-700/60 bg-transparent px-8 py-3 text-sm font-semibold text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Download CV
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-slate-700/60 bg-transparent px-8 py-3 text-sm font-semibold text-slate-500 opacity-60 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              title="Resume not available"
            >
              CV Not Available
            </button>
          )}
        </div>
      </section>
    </section>
  );
}

function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-800/70 bg-[#0b1a2c] px-4 py-1 text-xs font-semibold text-slate-300">
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="opacity-95"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
