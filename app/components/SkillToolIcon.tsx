import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiShadcnui,
  SiPython,
  SiDebian,
  SiCentos,
} from "react-icons/si";
import {
  Code2,
  Database,
  Layers3,
  Palette,
  Server,
} from "lucide-react";

export type IconKey =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "tailwind"
  | "shadcn"
  | "mui"
  | "framer"
  | "react"
  | "redux"
  | "next"
  | "node"
  | "express"
  | "mongodb"
  | "supabase"
  | "docker"
  | "vercel"
  | "git"
  | "github"
  | "postman"
  | "npm"
  | "python"
  | "debian"
  | "centos"
  | "layers"
  | "code"
  | "server"
  | "db"
  | "palette"
  | "brackets";

const ICONS: Record<
  IconKey,
  { Icon: React.ComponentType<{ className?: string }>; className: string }
> = {
  html: { Icon: SiHtml5, className: "text-orange-500" },
  css: { Icon: SiCss, className: "text-sky-500" },
  javascript: { Icon: SiJavascript, className: "text-yellow-400" },
  typescript: { Icon: SiTypescript, className: "text-blue-500" },
  tailwind: { Icon: SiTailwindcss, className: "text-cyan-400" },
  shadcn: { Icon: SiShadcnui, className: "text-[var(--text-soft)]" },
  mui: { Icon: SiMui, className: "text-sky-400" },
  framer: { Icon: SiFramer, className: "text-[var(--text-soft)]" },
  react: { Icon: SiReact, className: "text-cyan-300" },
  redux: { Icon: SiRedux, className: "text-purple-400" },
  next: { Icon: SiNextdotjs, className: "text-[var(--text-soft)]" },
  node: { Icon: SiNodedotjs, className: "text-green-500" },
  express: { Icon: SiExpress, className: "text-[var(--text-soft)]" },
  mongodb: { Icon: SiMongodb, className: "text-green-500" },
  supabase: { Icon: SiSupabase, className: "text-emerald-400" },
  docker: { Icon: SiDocker, className: "text-sky-400" },
  vercel: { Icon: SiVercel, className: "text-[var(--text-soft)]" },
  git: { Icon: SiGit, className: "text-orange-500" },
  github: { Icon: SiGithub, className: "text-[var(--text-soft)]" },
  postman: { Icon: SiPostman, className: "text-orange-400" },
  npm: { Icon: SiNpm, className: "text-red-500" },
  python: { Icon: SiPython, className: "text-[var(--text-soft)]" },
  debian: { Icon: SiDebian, className: "text-[var(--text-soft)]" },
  centos: { Icon: SiCentos, className: "text-[var(--text-soft)]" },
  layers: { Icon: Layers3, className: "text-indigo-400" },
  code: { Icon: Code2, className: "text-sky-400" },
  server: { Icon: Server, className: "text-emerald-400" },
  db: { Icon: Database, className: "text-purple-400" },
  palette: { Icon: Palette, className: "text-pink-400" },
  brackets: { Icon: Code2, className: "text-blue-400" },
};

export function SkillToolIcon({
  iconKey,
  className = "",
}: {
  iconKey: IconKey;
  className?: string;
}) {
  const entry = ICONS[iconKey];
  const Icon = entry.Icon;

  return (
    <Icon className={`h-[18px] w-[18px] ${entry.className} ${className}`} />
  );
}
