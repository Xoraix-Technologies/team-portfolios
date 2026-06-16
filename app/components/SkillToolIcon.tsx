import {
  SiHtml5,
  SiCss3,
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
  | "centos";

const ICONS: Record<
  IconKey,
  { Icon: React.ComponentType<{ className?: string }>; className: string }
> = {
  html: { Icon: SiHtml5, className: "text-orange-500" },
  css: { Icon: SiCss3, className: "text-sky-500" },
  javascript: { Icon: SiJavascript, className: "text-yellow-400" },
  typescript: { Icon: SiTypescript, className: "text-blue-500" },
  tailwind: { Icon: SiTailwindcss, className: "text-cyan-400" },
  shadcn: { Icon: SiShadcnui, className: "text-white/90" },
  mui: { Icon: SiMui, className: "text-sky-400" },
  framer: { Icon: SiFramer, className: "text-white/90" },
  react: { Icon: SiReact, className: "text-cyan-300" },
  redux: { Icon: SiRedux, className: "text-purple-400" },
  next: { Icon: SiNextdotjs, className: "text-white/90" },
  node: { Icon: SiNodedotjs, className: "text-green-500" },
  express: { Icon: SiExpress, className: "text-white/80" },
  mongodb: { Icon: SiMongodb, className: "text-green-500" },
  supabase: { Icon: SiSupabase, className: "text-emerald-400" },
  docker: { Icon: SiDocker, className: "text-sky-400" },
  vercel: { Icon: SiVercel, className: "text-white/90" },
  git: { Icon: SiGit, className: "text-orange-500" },
  github: { Icon: SiGithub, className: "text-white/90" },
  postman: { Icon: SiPostman, className: "text-orange-400" },
  npm: { Icon: SiNpm, className: "text-red-500" },
  python: { Icon: SiPython, className: "text-slate-200" },
  debian: { Icon: SiDebian, className: "text-slate-200" },
  centos: { Icon: SiCentos, className: "text-slate-200" },
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
