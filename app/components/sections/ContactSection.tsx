"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Laptop } from "lucide-react";
import type { UserData } from "@/app/lib/site-data";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-sm font-medium text-white placeholder:text-white/75 caret-white outline-none transition focus:border-[#ff3b00]/70 focus:bg-white/15 focus:ring-1 focus:ring-[#ff3b00]/50 disabled:cursor-not-allowed disabled:opacity-60";

const textareaClass =
  "min-h-[150px] w-full resize-none rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-medium text-white placeholder:text-white/75 caret-white outline-none transition focus:border-[#ff3b00]/70 focus:bg-white/15 focus:ring-1 focus:ring-[#ff3b00]/50 disabled:cursor-not-allowed disabled:opacity-60";

export default function ContactSection({
  user,
}: {
  user: Pick<UserData, "slug" | "about" | "contact">;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const name = user.about?.name ?? "User";

  const tagline =
    user.contact?.tagline ??
    "A Software Engineer who has developed countless innovative solutions.";

  const avatar =
    user.contact?.avatar ?? user.about?.imageSrc ?? "/images/about1.jpg";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      username: user.slug,
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMsg("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="min-h-screen bg-[#020b12]">
        <section className="mx-auto w-full max-w-7xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            {/* LEFT CARD */}
            <aside className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <div className="relative mx-auto h-[240px] w-[240px] overflow-hidden rounded-2xl bg-black">
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="240px"
                  priority
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#ff3b00]/80 via-transparent to-transparent opacity-80" />
              </div>

              <h3 className="mt-7 text-3xl font-extrabold tracking-tight text-white">
                {name}
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff3b00] text-white">
                  <Laptop size={18} />
                </span>

                <span className="text-sm font-semibold text-white/80">
                  Available for Global Remote Projects
                </span>
              </div>

              <p className="mt-6 max-w-[26ch] text-lg font-semibold leading-snug text-white/75">
                {tagline}
              </p>

              <div className="mt-10 flex items-center gap-5 text-white/75">
                <Link
                  href={user.contact?.linkedin ?? "#"}
                  target="_blank"
                  className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </Link>

                <Link
                  href={`mailto:${user.contact?.email ?? ""}`}
                  className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
                  aria-label="Email"
                >
                  <MailIcon />
                </Link>

                <Link
                  href={user.contact?.github ?? "#"}
                  target="_blank"
                  className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </Link>

                <Link
                  href="#"
                  className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </Link>
              </div>
            </aside>

            {/* RIGHT FORM */}
            <div className="relative z-10 rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)] lg:p-10">
              <div className="mb-10">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                  LET&apos;S WORK
                </h1>

                <div className="mt-1 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                  TOGETHER
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name">
                    <input
                      className={inputClass}
                      placeholder="Your Name"
                      name="name"
                      required
                      minLength={2}
                      disabled={status === "sending"}
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      className={inputClass}
                      placeholder="Your@email.com"
                      type="email"
                      name="email"
                      required
                      disabled={status === "sending"}
                    />
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    className={textareaClass}
                    placeholder="Message"
                    name="message"
                    required
                    minLength={10}
                    disabled={status === "sending"}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-14 w-full rounded-xl bg-[#5d6bff] text-sm font-bold text-white transition hover:brightness-110 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {status === "sent" && (
                  <p className="text-center text-sm text-white/80">
                    Message sent. You’ll hear back soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-center text-sm text-red-300">{errorMsg}</p>
                )}

                <p className="text-center text-xs text-white/60">
                  Or email directly:{" "}
                  <a
                    className="font-semibold text-white/85 hover:text-white"
                    href={`mailto:${user.contact?.email ?? ""}`}
                  >
                    {user.contact?.email ?? "email"}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold tracking-wide text-white">
        {label}
      </span>

      {children}
    </label>
  );
}

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
        d="M6 9v12M6 7.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM10 21v-7.2c0-2 1-3.2 2.8-3.2 1.6 0 2.4 1.1 2.7 2.1.2.5.2 1.2.2 1.9V21M18 21v-7.8"
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
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 6c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1A3.6 3.6 0 0 0 12.6 8c0 .3 0 .6.1.8-3.3-.2-6.2-1.8-8.2-4.4-.4.7-.6 1.4-.6 2.2 0 1.2.6 2.3 1.6 3-.6 0-1.2-.2-1.7-.5v.1c0 1.7 1.2 3.1 2.8 3.4-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 2 2.6 3.7 2.6A7.2 7.2 0 0 1 2 18.2 10.2 10.2 0 0 0 7.6 20c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.4-1.2 1.9-1.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
