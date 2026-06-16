import Image from "next/image";
import Link from "next/link";
import { USERS } from "@/app/lib/site-data";

export default function UserDirectory() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060d16]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(93,107,255,0.10)_0%,_rgba(6,13,22,0.35)_35%,_rgba(6,13,22,1)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(93,107,255,0.12)_0%,_rgba(6,13,22,0)_55%)]" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
            Team <span className="text-[#5d6bff]">Portfolios</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Choose a profile to view the full landing page: about, skills, work,
            and contact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USERS.map((u) => (
            <UserCard key={u.slug} slug={u.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}

function UserCard({ slug }: { slug: string }) {
  const user = USERS.find((u) => u.slug === slug);
  if (!user) return null;

  const name = user.about?.name ?? user.hero?.name ?? slug;
  const role = user.hero?.mainTitle ?? user.hero?.pill ?? "Profile";
  const designation = user.about?.roleTitle ?? user.hero?.subtitle ?? "";
  const imageSrc = user.about?.imageSrc ?? "/images/about1.jpg";

  return (
    <Link
      href={`/${slug}`}
      className="group relative overflow-hidden rounded-2xl bg-[#0b2542] shadow-[0_20px_60px_rgba(0,0,0,0.55)] ring-1 ring-slate-800/40 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 420px"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-100 group-hover:text-[#5d6bff]">
          {name}
        </h2>
        <p className="mt-1 text-sm font-semibold text-slate-300">{role}</p>
        {designation ? (
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {designation}
          </p>
        ) : null}

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
          View profile
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

