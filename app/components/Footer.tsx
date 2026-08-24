"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
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
      <footer className="border-t border-[var(--border)] bg-[var(--page-bg)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 XoraixTechnologies. All rights reserved.
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

  const email = user?.contact?.email ?? "example@email.com";
  const linkedin = user?.contact?.linkedin ?? "#";
  const github = user?.contact?.github ?? "https://github.com/your-username";

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--page-bg)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-sm text-[var(--text-muted)]">
          © 2026 XoraixTechnologies. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-[var(--text-muted)]">
          {/* GitHub */}
          <Link
            href={github}
            target="_blank"
            className="transition hover:text-[var(--primary)]"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </Link>

          {/* LinkedIn */}
          <Link
            href={linkedin}
            target="_blank"
            className="transition hover:text-[var(--primary)]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={19} />
          </Link>

          {/* Email */}
          <Link
            href={`mailto:${email}`}
            className="transition hover:text-[var(--primary)]"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
