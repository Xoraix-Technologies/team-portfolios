"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { USERS } from "../lib/site-data";

type NavItem = {
  label: string;
  kind: "about" | "tech" | "skills" | "projects" | "contact";
};

const nav: NavItem[] = [
  { kind: "about", label: "About" },
  { kind: "tech", label: "Tech" },
  { kind: "skills", label: "Skills" },
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
    case "tech":
      return `/${username}#tech`;
    case "skills":
      return `/${username}#skills`;
    case "projects":
      return `/${username}#projects`;
    case "contact":
      return `/${username}#contact`;
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const username = getUsernameFromPath(pathname);

  // Directory mode ("/"): show a simple navbar.
  if (pathname === "/") {
    return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060d16]/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-semibold tracking-tight text-slate-100"
            >
              Portfolios
            </Link>

            <div />
          </div>
        </Container>
      </header>
    );
  }

  // If user opens "/" (no username), choose a default user (optional)
  // You can also redirect "/" to first user via middleware, but this is simplest.
  const fallbackUser = USERS[0]?.slug ?? "abu-bakar-saddique";
  const activeUser = username ?? fallbackUser;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060d16]/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-slate-100"
          >
            Portfolios
          </Link>

          <nav className="flex items-center gap-2">
            {nav.map((item) => {
              const href = buildHref(item.kind, activeUser);

              return (
                <Link
                  key={item.kind}
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
