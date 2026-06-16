"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { USERS } from "../lib/site-data";
// import { USERS } from "@/lib/site-data";

function getUsernameFromPath(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) return null;

  const first = (parts[0] || "").toLowerCase();

  // old style: /about/:username, /projects/:username, /tech/:username, /contact/:username
  if (["about", "projects", "tech", "contact"].includes(first)) {
    return (parts[1] || null)?.toLowerCase() ?? null;
  }

  // home style: /:username
  return first;
}

export default function Footer() {
  const pathname = usePathname();
  const username = getUsernameFromPath(pathname);

  if (pathname === "/") {
    return (
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Portfolios. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  // fallback user for "/"
  const fallbackUser = USERS[0];
  const user =
    USERS.find(
      (u) => u.slug.toLowerCase() === (username ?? "").toLowerCase(),
    ) ?? fallbackUser;

  const name = user?.about?.name ?? "Portfolio";
  const email = user?.contact?.email ?? "example@email.com";
  const linkedin = user?.contact?.linkedin ?? "#";
  const github = user?.contact?.github ?? "https://github.com/your-username";

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-sm text-slate-300">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-slate-300">
          {/* GitHub */}
          <Link
            href={github}
            target="_blank"
            className="transition hover:text-white"
            aria-label="GitHub"
          >
            <GithubIcon />
          </Link>

          {/* LinkedIn */}
          <Link
            href={linkedin}
            target="_blank"
            className="transition hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </Link>

          {/* Email */}
          <Link
            href={`mailto:${email}`}
            className="transition hover:text-white"
            aria-label="Email"
          >
            <MailIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- icons stay same ---------------- */

function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 9.5V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.6h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10.2 19v-5.4c0-1.8 1-3 2.8-3 1.7 0 2.6 1.2 2.6 3V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 12.1V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
