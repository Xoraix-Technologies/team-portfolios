import Image from "next/image";
import Link from "next/link";
import { USERS } from "@/app/lib/site-data";

export default function UserDirectory() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--page-bg)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[var(--page-glow)] to-transparent" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-20">
        <div className="text-center">
          <span className="inline-flex rounded px-4 py-2 text-sm font-semibold text-[var(--primary)] bg-[var(--primary-soft)]">
            Our Great Team
          </span>
          <h1 className="mt-7 text-balance text-4xl font-bold tracking-normal text-[var(--text-main)] sm:text-5xl">
            Supported by <span className="text-[var(--primary)]">Real People</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
            Choose a profile to view the full landing page: about, skills,
            work, and contact.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {USERS.map((u, index) => (
            <UserCard key={u.slug} slug={u.slug} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

const cardAccents = [
  "bg-[#dedbff] ring-[var(--primary-soft-border)]",
  "bg-[#c8f3f7] ring-[#9fe8ef]",
  "bg-[#ffd7dc] ring-[#ffc0c9]",
  "bg-[#d2f6df] ring-[#ace9c2]",
];

function UserCard({ slug, index }: { slug: string; index: number }) {
  const user = USERS.find((u) => u.slug === slug);
  if (!user) return null;

  const name = user.about?.name ?? user.hero?.name ?? slug;
  const role = user.hero?.mainTitle ?? user.hero?.pill ?? "Profile";
  const designation = user.about?.roleTitle ?? user.hero?.subtitle ?? "";
  const imageSrc = user.about?.imageSrc ?? "/images/about1.jpg";

  return (
    <Link
      href={`/${slug}`}
      className={[
        "group relative overflow-hidden rounded-md bg-[var(--surface)] shadow-[0_8px_24px_rgb(var(--shadow-color)/0.10)] ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgb(var(--shadow-color)/0.16)]",
        cardAccents[index % cardAccents.length],
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 420px"
          priority={false}
        />
      </div>

      <div className="bg-[var(--surface)] px-5 py-6 text-center">
        <h2 className="text-xl font-bold tracking-normal text-[var(--text-main)] group-hover:text-[var(--primary)]">
          {name}
        </h2>
        <p className="mt-2 text-sm font-medium text-[var(--text-subtle)]">{role}</p>
        {designation ? (
          <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
            {designation}
          </p>
        ) : null}

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
          View profile
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
