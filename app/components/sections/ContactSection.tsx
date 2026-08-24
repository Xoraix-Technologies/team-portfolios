"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { UserData } from "@/app/lib/site-data";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "h-14 w-full rounded-lg border-0 bg-[#eef3f9] px-4 text-base font-medium text-[var(--text-main)] placeholder:text-[var(--text-soft)] outline-none transition focus:ring-2 focus:ring-[var(--primary)]/25 disabled:cursor-not-allowed disabled:opacity-60";

const textareaClass =
  "min-h-[154px] w-full resize-none rounded-lg border-0 bg-[#eef3f9] px-4 py-4 text-base font-medium text-[var(--text-main)] placeholder:text-[var(--text-soft)] outline-none transition focus:ring-2 focus:ring-[var(--primary)]/25 disabled:cursor-not-allowed disabled:opacity-60";

export default function ContactSection({
  user,
}: {
  user: Pick<UserData, "slug" | "about" | "contact">;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
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
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--page-bg)] py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[var(--page-glow)] to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-[-0.04em] text-[var(--text-main)] sm:text-6xl">
            Let&apos;s Work{" "}
            <span className="text-[var(--primary)]">Together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-[var(--text-soft)]">
            Ready to build something extraordinary? I&apos;m currently available
            for freelance projects, technical consulting, and full-time
            opportunities.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 rounded-[30px] border border-[var(--border)] bg-gradient-to-br from-[#eef5ff] via-[#effaff] to-[#dff7ff] p-4 shadow-[0_18px_45px_rgb(var(--shadow-color)/0.08)] lg:grid-cols-[0.72fr_1fr] lg:p-6">
          <aside className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[0_12px_28px_rgb(var(--shadow-color)/0.07)] sm:p-10">
            <h3 className="text-2xl font-black tracking-[-0.02em] text-[var(--text-main)]">
              Get in Touch
            </h3>

            <div className="mt-9 space-y-8">
              <InfoRow
                icon={<Mail size={22} />}
                label="Email"
                title={user.contact?.email ?? "hello@portfolios.dev"}
                href={`mailto:${user.contact?.email ?? ""}`}
              />
              <InfoRow
                icon={<MapPin size={22} />}
                label="Location"
                title="Remote Worldwide"
              />
            </div>

            <div className="my-10 h-px bg-[var(--border)]" />

            <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Social
            </p>
            <div className="mt-5 flex items-center gap-4">
              <SocialLink href={user.contact?.linkedin ?? "#"} label="LinkedIn">
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink href={user.contact?.github ?? "#"} label="GitHub">
                <FaGithub />
              </SocialLink>
            </div>
          </aside>

          <div className="rounded-[30px] border border-[var(--border)] bg-white p-8 shadow-[0_12px_28px_rgb(var(--shadow-color)/0.09)] sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-7">
              <input
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Full Name">
                  <input
                    className={inputClass}
                    placeholder="Jane Doe"
                    name="name"
                    required
                    minLength={2}
                    disabled={status === "sending"}
                  />
                </Field>

                <Field label="Email Address">
                  <input
                    className={inputClass}
                    placeholder="jane@example.com"
                    type="email"
                    name="email"
                    required
                    disabled={status === "sending"}
                  />
                </Field>
              </div>

              <Field label="Subject">
                <div className="relative">
                  <select
                    name="subject"
                    className={`${inputClass} appearance-none pr-12`}
                    defaultValue="Freelance Project"
                    disabled={status === "sending"}
                  >
                    <option>Freelance Project</option>
                    <option>Technical Consulting</option>
                    <option>Full-time Opportunity</option>
                  </select>
                  <ChevronDown
                    size={20}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-soft)]"
                  />
                </div>
              </Field>

              <Field label="Message">
                <textarea
                  className={textareaClass}
                  placeholder="Tell me about your project..."
                  name="message"
                  required
                  minLength={10}
                  disabled={status === "sending"}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[var(--primary)] px-7 text-sm font-black tracking-[0.12em] text-white transition hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={17} />
              </button>

              {status === "sent" && (
                <p className="text-sm font-semibold text-[#0f9f63]">
                  Message sent. You&apos;ll hear back soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-semibold text-red-600">
                  {errorMsg}
                </p>
              )}
            </form>
          </div>
        </div>
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
      <span className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({
  icon,
  label,
  title,
  subtitle,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#eef3f9] text-[var(--primary)]">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
          {label}
        </span>
        <span className="mt-1 block text-base font-semibold text-[var(--text-main)]">
          {title}
        </span>
        {subtitle ? (
          <span className="mt-1 block text-sm font-medium text-[var(--text-muted)]">
            {subtitle}
          </span>
        ) : null}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center gap-4">
        {content}
      </Link>
    );
  }

  return <div className="flex items-center gap-4">{content}</div>;
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--text-soft)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
      aria-label={label}
    >
      {children}
    </Link>
  );
}
