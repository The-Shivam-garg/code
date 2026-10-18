import hunt from "@/assets/resource-producthunt.jpg.asset.json";
import ambassador from "@/assets/resource-ambassador.jpg.asset.json";
import github from "@/assets/resource-github.jpg.asset.json";
import island from "@/assets/resource-island.jpg.asset.json";
import tree from "@/assets/resource-tree.jpg.asset.json";
import hackathon from "@/assets/resource-hackathon.jpg.asset.json";
import social from "@/assets/resource-social.jpg.asset.json";
import { resources as existingResources } from "@/data/trail";

export type LibraryResource = {
  id: string;
  title: string;
  description: string;
  category: string;
  format: string;
  image: string;
  featured?: boolean;
  sample: boolean;
};
export const libraryFilters = ["All", "Playbooks", "Templates", "Case Studies", "Tools"];
export const libraryResources: LibraryResource[] = [
  {
    id: "product-hunt",
    title: "Blueprint to Get Featured on Product Hunt & become #1 Product of the Day",
    description:
      "A step-by-step playbook to launch, gain traction and get featured on Product Hunt.",
    category: "Playbooks",
    format: "PDF · 8 min",
    image: hunt.url,
    featured: true,
    sample: true,
  },
  {
    id: "ambassador",
    title: "Building an Iconic Ambassador Program, APAC and EMEA",
    description: "Framework, structure, incentives and global expansion playbook.",
    category: "Case Studies",
    format: "Notion · 10 min",
    image: ambassador.url,
    featured: true,
    sample: true,
  },
  {
    id: "github",
    title:
      "Developer’s Guide to GitHub Visibility: Strategies for GitHub Repository trending (Language & Main Page)",
    description:
      "Practical strategies to get your repositories discovered, ranked and featured on GitHub.",
    category: "Tools",
    format: "PDF · 8 min",
    image: github.url,
    featured: true,
    sample: true,
  },
  {
    id: "ecosystem",
    title: "0 to 1 Playbook for Building an L1 Ecosystem",
    description:
      "Complete framework, strategies and templates from early days to a self-sustaining ecosystem.",
    category: "Playbooks",
    format: "Notion · 12 min",
    image: island.url,
    sample: true,
  },
  {
    id: "kol",
    title: "KOL Campaign Blueprint, CPA to $0.2 to $1.0",
    description: "How we scaled creator campaigns, reduced CPA and built long-term partnerships.",
    category: "Templates",
    format: "PDF · 7 min",
    image: github.url,
    sample: true,
  },
  {
    id: "bear-proof",
    title: "Building a Bear-Proof Community",
    description:
      "Lessons, systems and playbooks to build resilient communities through market cycles.",
    category: "Case Studies",
    format: "PDF · 6 min",
    image: tree.url,
    sample: true,
  },
  {
    id: "hackathon",
    title: "How to Get the Most Out of a Web3 Hackathon",
    description: "Preparation, execution, judging insights and post-hack growth guide.",
    category: "Tools",
    format: "PDF · 6 min",
    image: hackathon.url,
    sample: true,
  },
  {
    id: "social",
    title: "How to Build Social Presence in 100 Days",
    description: "Content strategy, distribution, examples and templates.",
    category: "Templates",
    format: "Notion · 9 min",
    image: social.url,
    sample: true,
  },
  ...existingResources
    .filter((item) => ["5 Common Web3 GTM Motions", "Building an AI Community"].includes(item.t))
    .map((item, index) => ({
      id: `archive-${index}`,
      title: item.t,
      description: "Community growth and go-to-market notes.",
      category: "Playbooks",
      format: item.f,
      image: island.url,
      sample: true,
    })),
];
export const featuredLibrary = libraryResources.filter((item) => item.featured);
export const defaultLibrary = [
  "ecosystem",
  "kol",
  "ambassador",
  "bear-proof",
  "hackathon",
  "social",
].flatMap((id) => libraryResources.filter((item) => item.id === id));
