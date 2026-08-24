"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Container from "./Container";
import { USERS } from "../lib/site-data";

type NavItem = {
  label: "About" | "Projects" | "Contact";
  kind: "about" | "projects" | "contact";
};

const nav: NavItem[] = [
  { kind: "about", label: "About" },
  { kind: "projects", label: "Projects" },
  { kind: "contact", label: "Contact" },
];

function getUsernameFromPath(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean); // remove empty

  if (parts.length === 0) return null;

  const first = parts[0]?.toLowerCase();

  // If first segment is a "page name", then username is 2nd segment
  if (["about", "projects", "tech", "contact"].includes(first)) {
    return (parts[1] || null)?.toLowerCase() ?? null;
  }

  // Otherwise, it's the username home route: "/:username"
  return first;
}

function buildHref(kind: NavItem["kind"], username: string) {
  switch (kind) {
    case "about":
      return `/${username}#about`;
    case "projects":
      return `/${username}#projects`;
    case "contact":
      return `/${username}#contact`;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const username = getUsernameFromPath(pathname);
  const fallbackUser = USERS[0]?.slug ?? "abu-bakar-saddique";
  const activeUser = username ?? fallbackUser;
  const user =
    USERS.find((u) => u.slug.toLowerCase() === activeUser.toLowerCase()) ??
    USERS[0];

  // Directory mode ("/"): show a simple navbar.
  if (pathname === "/") {
    return (
      <HeaderShell>
        <Brand />

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--primary)]"
          >
            Team
          </Link>
        </nav>

        <HireLink username={activeUser} />
      </HeaderShell>
    );
  }

  // If user opens "/" (no username), choose a default user (optional)
  // You can also redirect "/" to first user via middleware, but this is simplest.

  return (
    <HeaderShell>
      <Brand avatar={user?.contact?.avatar ?? user?.about?.imageSrc} />

      <nav className="hidden items-center gap-10 lg:flex">
        {nav.map((item) => {
          const href = buildHref(item.kind, activeUser);
          const isActive =
            item.kind === "projects"
              ? pathname.includes("/projects/")
              : pathname.includes(item.kind);

          return (
            <Link
              key={item.kind}
              href={href}
              className={[
                "relative py-2 text-xs font-extrabold tracking-[0.18em] transition hover:text-[var(--primary)]",
                isActive
                  ? "text-[var(--primary)] after:absolute after:inset-x-0 after:-bottom-2 after:h-0.5 after:bg-[var(--primary)]"
                  : "text-[var(--text-soft)]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <HireLink username={activeUser} />
        <button
          type="button"
          aria-label="Open navigation"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] text-[var(--text-soft)] lg:hidden"
        >
          <Menu size={20} />
        </button>
      </div>
    </HeaderShell>
  );
}

function HeaderShell({ children }: { children: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--page-bg)]/95 backdrop-blur">
      <Container>
        <div className="flex min-h-[64px] items-center justify-between gap-4">
          {children}
        </div>
      </Container>
    </header>
  );
}

function Brand({ avatar }: { avatar?: string }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      {avatar ? (
        <span className="relative hidden h-9 w-9 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] sm:inline-flex">
          <Image src={avatar} alt="" fill className="object-cover" sizes="36px" />
        </span>
      ) : null}
      <span className="text-2xl font-black tracking-[-0.02em] text-[var(--primary)]">
        Portfolios
      </span>
    </Link>
  );
}

function HireLink({ username }: { username: string }) {
  return (
    <Link
      href={`/${username}#contact`}
      className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-xs font-black tracking-[0.16em] text-white transition hover:bg-[var(--primary-hover)]"
    >
      Hire Me
    </Link>
  );
}
