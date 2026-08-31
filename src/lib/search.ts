import { aboutContent, projects, siteConfig } from "@/lib/data";

export type SearchResultType = "page" | "project" | "skill";

export interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  type: SearchResultType;
}

const staticPages: SearchResult[] = [
  {
    id: "page-projects",
    title: "Projects",
    subtitle: "All case studies",
    href: "/",
    type: "page",
  },
  {
    id: "page-about",
    title: "About",
    subtitle: siteConfig.name,
    href: "/about",
    type: "page",
  },
  {
    id: "page-resume",
    title: "Resume",
    subtitle: "View and download CV",
    href: "/about#resume",
    type: "page",
  },
];

const projectResults: SearchResult[] = projects.map((project) => ({
  id: `project-${project.slug}`,
  title: project.title,
  subtitle: project.category,
  href: `/projects/${project.slug}`,
  type: "project",
}));

const skillResults: SearchResult[] = aboutContent.skills.map((skill, index) => ({
  id: `skill-${index}`,
  title: skill.replace(" –", ""),
  subtitle: "Skill",
  href: "/about",
  type: "skill",
}));

export const searchIndex: SearchResult[] = [
  ...staticPages,
  ...projectResults,
  ...skillResults,
];

export function searchContent(query: string): SearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return searchIndex.slice(0, 8);

  return searchIndex
    .filter((item) => {
      const haystack = `${item.title} ${item.subtitle ?? ""}`.toLowerCase();
      return haystack.includes(normalized);
    })
    .slice(0, 12);
}
