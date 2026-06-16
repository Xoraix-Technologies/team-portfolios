import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getUserByParam } from "@/app/lib/site-data";

export const runtime = "nodejs";

type ContactPayload = {
  username: string;
  name: string;
  email: string;
  message: string;
  company?: string; // honeypot
};

function clean(v: unknown) {
  return String(v ?? "").trim();
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const username = clean(body.username).toLowerCase();
    const name = clean(body.name);
    const email = clean(body.email);
    const message = clean(body.message);
    const company = clean(body.company);

    // honeypot
    if (company) return NextResponse.json({ ok: true }, { status: 200 });

    if (!username || !name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const user = getUserByParam(username);
    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const toEmail = clean(user.contact?.email);
    if (!toEmail || !isEmail(toEmail)) {
      return NextResponse.json(
        { error: "This user's inbox email is missing/invalid in site-data." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.trim();
    const fromName = process.env.MAIL_FROM_NAME?.trim() || "Portfolio Contact";

    if (!gmailUser || !gmailPass) {
      return NextResponse.json(
        { error: "Missing GMAIL_USER or GMAIL_APP_PASSWORD in env." },
        { status: 500 },
      );
    }

    // If you removed spaces, gmailPass should be 16 chars
    // If you keep spaces, it should still work, but only if quoted properly.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // verify connection/auth (helps debugging)
    await transporter.verify();

    await transporter.sendMail({
      from: `"${fromName}" <${gmailUser}>`,
      to: toEmail,          // ✅ dynamic inbox based on params user
      replyTo: email,       // ✅ replies go to visitor
      subject: `New message for ${user.about?.name ?? user.slug} — ${name}`,
      text: `Profile: ${user.slug}\nFrom: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : typeof err === "string" ? err : "";

    // IMPORTANT: log real error in server console
    console.error("CONTACT API ERROR:", message || err, err);

    // return a safer error to client, but include message in dev
    const safeMessage =
      process.env.NODE_ENV === "development"
        ? String(message || "Failed to send email.")
        : "Failed to send email.";

    return NextResponse.json({ error: safeMessage }, { status: 500 });
  }
}
