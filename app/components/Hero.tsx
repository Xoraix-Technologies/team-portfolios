import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Download, Eye } from "lucide-react";

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
  resumeFileName?: string;
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
  const projectsHref = `/projects/${slug}`;
  const hasAgentic = hero.techPills.some((pill) =>
    pill.toLowerCase().includes("agent"),
  );

  return (
    <section className="relative overflow-hidden bg-[var(--page-bg)] px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-12 rounded-[28px] border border-[var(--border)] bg-gradient-to-br from-[#eef5ff] via-[#effaff] to-[#dff7ff] px-8 py-14 sm:px-12 lg:grid-cols-[1fr_0.92fr] lg:px-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#9bd9ea] bg-[#dff8ff] px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-[#007a91]">
            <Code2 size={14} />
            {hero.pill}
          </span>

          <h1 className="mt-8 max-w-[680px] text-balance text-5xl font-black leading-[1.08] tracking-[-0.03em] text-[var(--text-main)] sm:text-6xl lg:text-7xl">
            {hero.name}
            <br />
            <span className="text-[var(--primary)]">
              Building{" "}
              {hasAgentic
                ? "Agentic AI & Modern Web Apps."
                : "Modern Web Apps."}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-[var(--text-soft)]">
            {hero.shortIntro}
          </p>

          <div className="mt-10 flex flex-nowrap items-center gap-3 max-sm:flex-col max-sm:items-stretch">
            <Link
              href={projectsHref}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-[var(--primary)] px-6 text-sm font-black tracking-[0.1em] text-white transition hover:bg-[var(--primary-hover)]"
            >
              {hero.ctaText}
              <ArrowRight size={18} strokeWidth={2.4} />
            </Link>

            {hasResume ? (
              <>
                <a
                  href={resumeUrl}
                  download={downloadName}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-lg border-2 border-[var(--primary)] bg-transparent px-6 text-sm font-black tracking-[0.1em] text-[var(--primary)] transition hover:bg-white"
                >
                  <Download size={17} strokeWidth={2.4} />
                  {hero.cvText}
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-lg border-2 border-[var(--primary-soft-border)] bg-white/70 px-6 text-sm font-black tracking-[0.1em] text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-white"
                >
                  <Eye size={17} strokeWidth={2.4} />
                  View Resume
                </a>
              </>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex h-12 shrink-0 cursor-not-allowed items-center justify-center whitespace-nowrap rounded-lg border-2 border-[var(--input-border)] px-6 text-sm font-black tracking-[0.1em] text-[var(--text-subtle)]"
                title="Resume not available"
              >
                CV Not Available
              </button>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[1.02/1] overflow-hidden rounded-2xl bg-[var(--surface)] shadow-[0_18px_45px_rgb(var(--shadow-color)/0.14)]">
            <Image
              src="/images/laptop-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 520px"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-6 grid min-w-[150px] gap-1 rounded-lg border border-white/60 bg-white/75 px-5 py-4 shadow-[0_12px_28px_rgb(var(--shadow-color)/0.16)] backdrop-blur-md max-sm:static max-sm:mt-4 max-sm:inline-grid">
            <span className="text-xs font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
              Experience
            </span>
            <strong className="text-2xl font-black text-[var(--primary)]">
              8+ Yrs
            </strong>
          </div>

          <div className="absolute bottom-6 left-[calc(6rem+120px)] grid min-w-[150px] gap-1 rounded-lg border border-white/60 bg-white/75 px-5 py-4 shadow-[0_12px_28px_rgb(var(--shadow-color)/0.16)] backdrop-blur-md max-sm:static max-sm:ml-3 max-sm:mt-4 max-sm:inline-grid">
            <span className="text-xs font-extrabold tracking-[0.18em] text-[var(--text-muted)]">
              Projects
            </span>
            <strong className="text-2xl font-black text-[var(--primary)]">
              50+
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
