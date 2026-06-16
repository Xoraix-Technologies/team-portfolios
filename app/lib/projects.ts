export type Project = {
  title: string
  description: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    title: "Restaurant POS & Orders",
    description: "Multi-tenant POS with products, branches, and order management.",
    stack: ["Next.js", "Django", "Postgres"],
    href: "#",
  },
  {
    title: "WhatsApp Catalog Sync",
    description: "Sync products to WhatsApp catalog and manage inbound orders.",
    stack: ["Next.js", "Meta APIs", "Prisma"],
    href: "#",
  },
  {
    title: "Invoice AI Extraction",
    description: "Extract invoice fields into JSON and update DB with validations.",
    stack: ["Python", "LLMs", "DRF"],
    href: "#",
  },
]
