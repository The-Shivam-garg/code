import hela from "@/assets/work/hela-logo.webp.asset.json";
import socrates from "@/assets/work/socrates-logo.webp.asset.json";
import nexus from "@/assets/work/nexus-logo.webp.asset.json";
import dora from "@/assets/work/dora-logo.webp.asset.json";
import zoth from "@/assets/work/zoth-logo.webp.asset.json";
import specops from "@/assets/work/specops-logo.webp.asset.json";
import projects from "@/assets/work/projects-logo.webp.asset.json";
import talk from "@/assets/work/talk.webp.asset.json";
import hackathon from "@/assets/work/hackathon.webp.asset.json";
import team from "@/assets/work/team.webp.asset.json";
import booth from "@/assets/work/collage-booth.webp.asset.json";

export const journeyFilters = [
  "All",
  "L1 Chain",
  "Developer Tools",
  "Community",
  "AI",
  "DePIN",
  "Infrastructure",
  "Education",
  "Fellowship",
] as const;
export type JourneyFilter = (typeof journeyFilters)[number];

export const journeyItems = [
  {
    id: "hela",
    name: "HeLa Labs",
    role: "DevRel Lead",
    description: "Developer Relations & Community Growth for Web3 Infrastructure.",
    overview:
      "HeLa Labs is a modular Layer 1 ecosystem focused on making blockchain infrastructure practical for developers and emerging applications. The role connected technical education, builder programs and community-led adoption across global markets.",
    responsibilities: [
      "Designed the developer relations strategy and translated technical products into clear builder journeys.",
      "Led workshops, campus programs, hackathons and community activations with regional partners.",
      "Built relationships with developers, speakers, mentors and ecosystem teams.",
      "Created feedback loops between builders, product teams and leadership.",
    ],
    outcomes: [
      "Expanded the active developer network through repeatable education programs.",
      "Strengthened product awareness through hands-on technical experiences.",
      "Built a global pipeline of community leaders and ecosystem contributors.",
    ],
    tags: ["DevRel", "Community", "Ecosystem"],
    categories: ["L1 Chain", "Infrastructure", "Community"],
    dates: "2025 – 2026",
    place: "Global",
    logo: hela.url,
    image: talk.url,
  },
  {
    id: "socrates",
    name: "Socrates Global",
    role: "Head of Ecosystem",
    description: "Ecosystem growth and partnerships in the Solana ecosystem.",
    overview:
      "Socrates Global brings builders, communities and ecosystem partners together around high-value collaboration. The work centered on shaping an ecosystem motion that could move from awareness to participation and long-term contribution.",
    responsibilities: [
      "Owned the ecosystem growth roadmap across communities, partners and builder programs.",
      "Developed strategic relationships with protocols, founders and regional ecosystem leaders.",
      "Designed campaigns and collaborative programs for acquisition, education and retention.",
      "Coordinated community insights with product, content and partnership priorities.",
    ],
    outcomes: [
      "Created stronger pathways from first interaction to active contribution.",
      "Expanded the partner network across multiple regions and community segments.",
      "Established a consistent operating rhythm for ecosystem programs.",
    ],
    tags: ["Ecosystem", "Partnerships", "Community"],
    categories: ["Community", "Education"],
    dates: "Oct 2024 – Present",
    place: "Global",
    logo: socrates.url,
    image: hackathon.url,
  },
  {
    id: "nexus",
    name: "Nexus Chain",
    role: "Chief Ecosystem Officer",
    description: "Leading ecosystem growth for a public Layer 1 blockchain.",
    overview:
      "Nexus Chain is a public Layer 1 network building the foundations for a broad application ecosystem. The mandate combined ecosystem strategy, go-to-market planning and the systems needed to support builders and partners at scale.",
    responsibilities: [
      "Defined ecosystem positioning, growth priorities and partner categories.",
      "Built programs for developers, applications, infrastructure providers and communities.",
      "Aligned product, marketing and partnerships around shared adoption goals.",
      "Represented ecosystem needs in leadership planning and product feedback.",
    ],
    outcomes: [
      "Created a structured ecosystem roadmap for an emerging Layer 1 network.",
      "Improved coordination between technical, growth and community workstreams.",
      "Developed a partner and builder pipeline around priority use cases.",
    ],
    tags: ["Ecosystem", "Strategy", "Growth"],
    categories: ["L1 Chain", "Infrastructure"],
    dates: "2024 – Present",
    place: "Global",
    logo: nexus.url,
    image: nexus.url,
  },
  {
    id: "dora",
    name: "DoraDAO",
    role: "Co-founder",
    description: "Building a chain-agnostic platform and fellowship programs.",
    overview:
      "DoraDAO is a chain-agnostic community platform designed to help people learn, build and collaborate across ecosystems. Its programs bring together contributors, fellows, mentors and partners through practical opportunities.",
    responsibilities: [
      "Shaped the community vision, operating model and cross-ecosystem positioning.",
      "Designed fellowship and contributor programs from application through completion.",
      "Built partnerships with communities, mentors and ecosystem organizations.",
      "Led storytelling, program delivery and contributor experience across APAC and global cohorts.",
    ],
    outcomes: [
      "Created accessible pathways for new contributors to enter Web3 ecosystems.",
      "Connected builders and mentors across chains, countries and disciplines.",
      "Established a recognizable community-led platform with repeatable programs.",
    ],
    tags: ["Community", "Education", "Fellowships"],
    categories: ["Community", "Education", "Fellowship"],
    dates: "2024 – Present",
    place: "APAC & Global",
    logo: dora.url,
    image: team.url,
  },
  {
    id: "zoth",
    name: "Zoth",
    role: "Community Builder",
    description: "Community building for a stablecoin neobank ecosystem.",
    overview:
      "Zoth develops financial infrastructure connecting stablecoins and real-world financial products. The community role focused on making the product narrative accessible and creating useful touchpoints for users, builders and ecosystem partners.",
    responsibilities: [
      "Developed community programs around stablecoins, real-world assets and product education.",
      "Activated users and partners through campaigns, conversations and collaborative events.",
      "Translated product updates into accessible community narratives and resources.",
      "Collected market feedback and surfaced community needs to internal teams.",
    ],
    outcomes: [
      "Improved awareness and understanding across a complex product category.",
      "Built stronger engagement around launches and ecosystem milestones.",
      "Connected product education with sustained community participation.",
    ],
    tags: ["Community", "Growth", "Web3"],
    categories: ["DePIN", "Community"],
    dates: "2024 – 2025",
    place: "Global",
    logo: zoth.url,
    image: zoth.url,
  },
  {
    id: "specops",
    name: "SpecOps / DDS",
    role: "Ops & Community",
    description: "Building operational workflows and community for data scaling operations.",
    overview:
      "SpecOps / DDS brought together operations, contributors and data-focused delivery. The role established dependable workflows while maintaining a connected community around fast-moving, detail-heavy programs.",
    responsibilities: [
      "Designed operational workflows, documentation and recurring delivery processes.",
      "Coordinated contributors across tasks, timelines and quality requirements.",
      "Built community communication systems for updates, support and feedback.",
      "Tracked delivery risks and improved handoffs across distributed teams.",
    ],
    outcomes: [
      "Made recurring operations clearer and easier for contributors to follow.",
      "Improved delivery consistency across distributed workstreams.",
      "Strengthened communication between operations and community participants.",
    ],
    tags: ["Operations", "Community", "Data"],
    categories: ["AI", "Community"],
    dates: "2024 – 2025",
    place: "India",
    logo: specops.url,
    image: booth.url,
  },
  {
    id: "projects",
    name: "Various Projects",
    role: "Contributor",
    description: "Contributed to multiple open-source and community initiatives.",
    overview:
      "A collection of open-source, developer-tooling and community initiatives spanning research, content, events and contributor support. Each engagement focused on helping useful ideas reach the people who could build with them.",
    responsibilities: [
      "Contributed research, content and community support across project stages.",
      "Supported launches, educational initiatives and contributor onboarding.",
      "Connected teams with relevant builders, communities and ecosystem opportunities.",
      "Adapted delivery to each project’s product, audience and maturity.",
    ],
    outcomes: [
      "Supported a broad portfolio of early and growing initiatives.",
      "Built cross-ecosystem context through hands-on contributor work.",
      "Created durable relationships across developer and community networks.",
    ],
    tags: ["Open Source", "Community", "Tools"],
    categories: ["Developer Tools", "Community"],
    dates: "2021 – Present",
    place: "Global",
    logo: projects.url,
    image: projects.url,
  },
] as const;

export const ecosystems = [
  "Google Developer Groups",
  "Solana",
  "Polygon",
  "Ethereum",
  "Arbitrum",
  "Avalanche",
  "Aptos",
  "Sui",
  "Optimism",
  "Near",
  "Starknet",
  "Cosmos",
  "TRON",
  "Chainlink",
] as const;

export function filterJourneyItems(filter: JourneyFilter) {
  return filter === "All"
    ? journeyItems
    : journeyItems.filter((item) => item.categories.some((category) => category === filter));
}
