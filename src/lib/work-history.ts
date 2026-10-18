import hela from "@/assets/work/hela-logo.webp.asset.json";
import socrates from "@/assets/work/socrates-logo.webp.asset.json";
import nexus from "@/assets/work/nexus-logo.webp.asset.json";
import dora from "@/assets/work/dora-logo.webp.asset.json";
import zoth from "@/assets/work/zoth-logo.webp.asset.json";
import specops from "@/assets/work/specops-logo.webp.asset.json";
import projects from "@/assets/work/projects-logo.webp.asset.json";
import stage from "@/assets/work/gallery/stage.webp.asset.json";
import builders from "@/assets/work/gallery/builders.webp.asset.json";
import community from "@/assets/work/gallery/community.webp.asset.json";
import booth from "@/assets/work/gallery/booth.webp.asset.json";
import stageWide from "@/assets/work/gallery/stage-wide.webp.asset.json";

export const workGallery = [
  { image: stage.url, title: "Build What’s Next", category: "Tech Talks" },
  { image: builders.url, title: "Campus Hackathon", category: "Hackathon" },
  { image: booth.url, title: "HeLa Labs", category: "Community" },
  { image: stageWide.url, title: "Build What’s Next — on stage", category: "Tech Talks" },
];
export const workResponsibilities = [
  "Redesigned technical docs on GitBook and wrote the full developer wiki",
  "Built a community flywheel",
  "Structured the Developer Advocate program",
  "Ran 30+ workshops and talks reaching 10,000+ developers",
  "Built onboarding dashboards and playbooks that cut repetitive support",
  "Fed community insight back into the product roadmap",
];
export const workTechnologies = [
  "GitBook",
  "Notion",
  "Discord",
  "Telegram",
  "Figma",
  "TypeScript",
  "React",
  "Next.js",
  "AWS",
  "Vercel",
] as const;

export const workCompanies = [
  { id: "hela", name: "HeLa Labs", role: "DevRel Lead", dates: "2025 – 2026", logo: hela.url },
  {
    id: "socrates",
    name: "Socrates Global",
    role: "Head of Ecosystem",
    dates: "2024 – Present",
    logo: socrates.url,
  },
  {
    id: "nexus",
    name: "Nexus Chain",
    role: "Chief Ecosystem Officer",
    dates: "2024 – Present",
    logo: nexus.url,
  },
  { id: "dora", name: "DoraDAO", role: "Co-founder", dates: "2024 – Present", logo: dora.url },
  { id: "zoth", name: "Zoth", role: "Community Builder", dates: "2024 – 2025", logo: zoth.url },
  {
    id: "specops",
    name: "SpecOps / DDS",
    role: "Ops & Community",
    dates: "2024 – 2025",
    logo: specops.url,
  },
  {
    id: "projects",
    name: "Various Projects",
    role: "Contributor",
    dates: "2021 – Present",
    logo: projects.url,
  },
] as const;
export const helaMetrics = [
  { value: "500+", label: "Developers Engaged" },
  { value: "15+", label: "Events & Workshops" },
  { value: "20+", label: "Speakers & Mentors" },
  { value: "5+", label: "Projects & Hackathons" },
  { value: "500+", label: "Students Engaged" },
];
// Additional figures already stated in the work responsibilities, not new estimates.
export const companyMetrics = [
  ...helaMetrics,
  { value: "30+", label: "Workshops & Talks" },
  { value: "10,000+", label: "Developers Reached" },
];
export const impactMetrics = [
  { value: "50+", label: "Communities Activated" },
  { value: "250K+", label: "Community Members" },
  { value: "1,200+", label: "Events & Programs" },
  { value: "80+", label: "Global Partners" },
  { value: "5K+", label: "Builders Supported" },
  { value: "50M+", label: "Total Impressions" },
  { value: "30+", label: "Cities Activated" },
  { value: "12+", label: "Countries Reached" },
  { value: "80+", label: "Workshops Hosted" },
  { value: "25+", label: "Products Launched" },
  { value: "150+", label: "Mentors Connected" },
  { value: "100+", label: "Campaigns Delivered" },
];
export const workHighlights = [
  {
    title: "Build What’s Next",
    category: "Tech Talks",
    image: stage.url,
    detail:
      "A builder-focused technical series connecting developers with practical product knowledge, expert speakers, and opportunities to create.",
    tags: ["DevRel", "Developer Growth", "Events"],
  },
  {
    title: "Campus Hackathon",
    category: "Hackathon",
    image: builders.url,
    detail:
      "A hands-on campus program where students formed teams, worked with mentors, and turned early ideas into working projects.",
    tags: ["DevRel", "Ecosystem", "Developer Growth", "Events"],
  },
  {
    title: "GDG Core Team",
    category: "Community",
    image: community.url,
    detail:
      "Community leadership focused on bringing curious builders together through consistent programs, collaboration, and peer learning.",
    tags: ["Community", "Ecosystem"],
  },
];
export function getWorkHighlights(tag: string | null) {
  return tag ? workHighlights.filter((item) => item.tags.includes(tag)) : workHighlights;
}
