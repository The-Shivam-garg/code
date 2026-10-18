import doraArt from "@/assets/products/dora-cutout.webp.asset.json";
import nexusArt from "@/assets/products/nexus-clean.webp.asset.json";
import helaArt from "@/assets/products/hela-polygons.webp.asset.json";
import hatArt from "@/assets/products/hat-cutout.webp.asset.json";
export const productChapters = [
  "Overview",
  "User persona",
  "Problem",
  "Before / after",
  "UI mockups",
  "Research & insights",
  "Decisions",
  "Outcomes",
] as const;
export const showcaseProjects = [
  {
    id: "dora",
    name: "DoraDAO",
    headline: "More voices.\nMore opportunities.",
    description:
      "A chain-agnostic platform and fellowship turning online voices into real opportunities for the next generation.",
    art: doraArt.url,
    theme: "dora",
    metrics: [
      ["1.5K+", "Community"],
      ["10M+", "Views"],
      ["40+", "Partners"],
      ["10+", "Countries"],
    ],
  },
  {
    id: "nexus",
    name: "Nexus Chain",
    headline: "The next generation\nof open infra.",
    description:
      "A public Layer 1 blockchain protocol focused on real-world adoption and global ecosystem growth.",
    art: nexusArt.url,
    theme: "nexus",
    metrics: [
      ["50K+", "Community"],
      ["Mainnet", "2025"],
      ["200+", "Builders"],
      ["15+", "Ecosystem Apps"],
    ],
  },
  {
    id: "hela",
    name: "HeLa Labs",
    headline: "Human-Centric\nInfrastructure\nfor Web3.",
    description:
      "DevRel and ecosystem growth for a global Web3 infrastructure company building real-world products.",
    art: helaArt.url,
    theme: "hela",
    metrics: [
      ["100K+", "Developers"],
      ["3+", "Products"],
      ["Global", "Presence"],
      ["50+", "Partners"],
    ],
  },
  {
    id: "hat",
    name: "Magic Hat",
    headline: "Get paid\nto wear a hat.",
    description:
      "An AI-powered wearable + app ecosystem where creators earn for capturing the world around them.",
    art: hatArt.url,
    theme: "hat",
    metrics: [
      ["900+", "Active Users"],
      ["120+", "Communities"],
      ["7 Days", "Pilot"],
      ["20%", "Referral Bonus"],
    ],
  },
] as const;
export type ShowcaseProject = (typeof showcaseProjects)[number];
export const rapidoCase = {
  name: "Rapido",
  description:
    "A ride-hailing app designed to reduce app switching and make urban commute simpler, faster, and more transparent.",
};
export function nextShowcaseIndex(index: number, direction: number) {
  return (index + direction + 5) % 5;
}
