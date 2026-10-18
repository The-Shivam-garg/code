/**
 * All portfolio content for "The Trail". Components only render this.
 * Anything with `sample: true` is temporary filler: open the site with ?edit=1 to see it outlined.
 */

export const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
export const photos = {
  dora: u("photo-1680182825225-12501e967483"),
  core: u("photo-1708578200684-3aa944b73237"),
  web3conf: u("photo-1471357674240-e1a485acb3e1"),
  token: u("photo-1588107468905-af27ccd44050"),
  pizza: u("photo-1666030433251-f98e43be8241"),
};

export type Stop = {
  id: string;
  name: string;
  stamp: string;
  nav?: string;
  guide: string;
  express: boolean;
};
export const stops: Stop[] = [
  {
    id: "gate",
    name: "Departure Gate",
    stamp: "Boarded",
    nav: "Home",
    express: true,
    guide: "Start wherever you like. The trail is open.",
  },
  {
    id: "village",
    name: "Communities shelf",
    stamp: "Rooms entered",
    nav: "Community",
    express: false,
    guide: "Meet the communities I've helped build.",
  },
  {
    id: "night",
    name: "Night Camp",
    stamp: "Supplies packed",
    nav: "Resources",
    express: false,
    guide: "Pack whatever you'd like. It's all free.",
  },
  {
    id: "postcards",
    name: "Postcards",
    stamp: "Voices heard",
    nav: "Testimonials",
    express: true,
    guide: "Flip them. People were kind.",
  },
  {
    id: "basecamp",
    name: "Base Camp",
    stamp: "Arrived",
    express: true,
    guide: "You made it. Write him a postcard?",
  },
];
export const menuItems = [
  { label: "Home", target: "gate" },
  { label: "Community", target: "village" },
  { label: "Resources", target: "night" },
  { label: "Products", target: "products" },
  { label: "Testimonials", target: "postcards" },
];

export const site = {
  name: "Shivam Garg",
  tagline: "Not just a portfolio. A timeline of belief.",
  cvUrl: "/shivam-garg-cv.txt",
  cvSample: true,
  email: "hello@example.com",
  emailSample: true,
};

export const hero = {
  sub: "I build the infrastructure that turns curiosity into communities.",
  eyebrow: "Community building · Developer relations · Ecosystem growth",
  invitation: "From first conversation to global momentum.",
  note: "Not just a portfolio. A timeline of belief.",
  proof: [
    {
      number: "200K",
      label: "active users in month one",
      context: "Socrates Global",
      target: "village",
    },
    { number: "10,000+", label: "developers onboarded", context: "Quira", target: "village" },
    {
      number: "5,000+",
      label: "ambassadors across 14+ countries",
      context: "Socrates Global",
      target: "village",
    },
    {
      number: "#1",
      label: "Product of the Day & Week",
      context: "TechUp Labs · Product Hunt",
      target: "products",
    },
  ],
  dossier: {
    number: "01 / 09",
    title: "The Trail",
    origin: "A kitchen table",
    destination: "What we built together",
  },
  left: "Hi, I'm Shivam. I've spent the last few years helping Web3, open-source and developer communities feel a little less lonely. In 2025 I started DoraDAO with one stubborn idea: take Web3 to the cities everyone skips.",
  pills: [
    { value: "20 lakh+ views", target: "case-gwy" },
    { value: "10,000+ developers", target: "role-quira" },
    { value: "5,000+ ambassadors", target: "role-socrates" },
  ],
  flags: [
    { f: "🇮🇳", tip: "Where it all started" },
    { f: "🇬🇧", tip: "Socrates and Quira: remote from London" },
    { f: "🇺🇸", tip: "Outdefine: remote from San Francisco" },
    { f: "🇦🇪", tip: "Token2049 pre-event e-meetup, Dubai" },
    { f: "🇹🇭", tip: "Socrates: growth in Thailand" },
    { f: "🇮🇩", tip: "Socrates: SEA growth" },
    { f: "🇵🇭", tip: "Socrates: SEA growth" },
    { f: "🇻🇳", tip: "Socrates: SEA growth" },
    { f: "🇧🇩", tip: "Socrates: South Asia growth" },
    { f: "🇱🇰", tip: "Socrates: South Asia growth" },
    { f: "🇳🇵", tip: "Girls Who Yap partner" },
    { f: "🇵🇰", tip: "Socrates: South Asia growth" },
    { f: "🇰🇷", tip: "Girls Who Yap partner" },
    { f: "🇨🇳", tip: "HeLa Labs: APAC developer relations" },
  ],
  flagsLine: "Worked across 15+ countries",
  flagsSample: true,
};

export const toggles = {
  Awards: [
    { t: "Product Hunt, Product of the Day" },
    { t: "Product Hunt, Product of the Week" },
    { t: "FOSSASIA, Top 5 Project Admin & Mentor" },
    { t: "#GSSoC trending #1 and #4 on X (2 days)" },
  ],
  Partners: [
    "Solana",
    "Berachain",
    "Polygon",
    "Chainlink",
    "Core DAO",
    "Token2049",
    "HeLa",
    "Socrates",
    "Quira",
    "GirlScript",
    "FOSSASIA",
    "NASA Space Apps",
  ].map((t) => ({ t })),
  Press: [
    { t: "Podcast: House of Y" },
    { t: "DoraDAO on Substack — “We thought it would be small. It wasn't.”" },
    { t: "Your next mention here", sample: true },
  ],
} as Record<string, { t: string; sample?: boolean }[]>;

export const intro = [
  "Hi, I'm Shivam.",
  "I never planned to be a 'community person.'",
  "I just kept ending up in rooms where people felt a little lost, and I couldn't stop trying to make them feel found.",
  "Somewhere along the way that became millions of users, thousands of ambassadors, and a few late nights I'd happily relive.",
  "This page isn't a resume. It's a timeline of what I believed, and what happened when I acted on it.",
];

export const impact = [
  {
    n: "1M+",
    l: "users acquired",
    d: "From a 10x traffic spike at TechUp to 200K users in Socrates' first month.",
  },
  {
    n: "2X",
    l: "trending on X",
    d: "Once for #GSSoC, two days running. Once for a Multichain campaign, for a day.",
  },
  {
    n: "0 → 40k",
    l: "newsletter subscribers",
    d: "Multichain alone reached about 31K, with a 44% open rate.",
  },
  {
    n: "100s+",
    l: "GTM strategies",
    d: "Socrates alone: tens of GTM strategies in a single year.",
  },
  {
    n: "4X",
    l: "community growth (0 → 50K, the real kind)",
    d: "45K+ loyal fans stayed at Socrates even after the TGE.",
  },
  { n: "20+", l: "global programs", d: "Developer, ambassador, advocate and affiliate programs." },
  {
    n: "400+",
    l: "KOL network across APAC and MENA",
    d: "Across APAC and MENA, with 50+ at Socrates on performance deals.",
  },
  { n: "30+", l: "in-person events", d: "Hackathons, conferences and university roadshows." },
];

export const signposts = [
  "No fancy team, no pre-set playbook, just messy Google Docs, late-night ideas, and one big why.",
  "When something doesn't move, I can't just sit and wait. I get my hands dirty and make it move.",
  "You'll probably never hear us just say 'join us.'",
  "Sometimes, all it takes is a laptop and a crazy idea that doesn't scale.",
  "More than the numbers, what shook us was the community.",
];

export type Chapter = { label: string; title: string; story: string; quote: string; note: string };
export const chapters: Chapter[] = [
  {
    label: "Jul to Dec 2023 · TechUp Labs",
    title: "Learning how a launch actually feels",
    note: "18 hours.",
    quote: "A launch looks like luck from the outside.",
    story:
      "As Product and Community Manager at TechUp Labs, I got to run a real launch from the inside. We hit Product of the Day and Product of the Week on Product Hunt within 18 hours. A feature in a big Product Hunt newsletter sent traffic up 10x. User acquisition doubled. I learned that a launch is not a moment. It's a hundred small, careful nudges that look like luck from the outside.",
  },
  {
    label: "2022 to 2024 · Multichain",
    title: "31,000 people and one very long form",
    note: "Forms, forms, forms.",
    quote: "We built a loyal audience, not temporary attendees.",
    story:
      "I wanted an audience, not just event attendees, so we built a newsletter. It grew from zero to around 31,000 subscribers, with a 44% open rate when the norm is 15 to 25%. Short forms pulled 5,000 submissions in 12 hours. I ran 15+ in-person events, led a 30+ person team, and we closed six-figure sponsorships at a 40% net margin. One regional event sold five figures in tickets in three days.",
  },
  {
    label: "2023 to 2024 · Quira, Outdefine, Nexus",
    title: "Developers, one Discord at a time",
    note: "Zero cost, all heart.",
    quote: "Zero cost, 2,000 developers. Curiosity is a cheaper channel than ads.",
    story:
      "At Quira I started a global open-source cohort from scratch: 21 speakers, 3,500+ registrations, 4,000+ people in the room, and over 2,000 developers onboarded at zero cost. Two ecosystem partners landed on GitHub's trending list, and one project got 800+ stars and forks in 48 hours. At Outdefine, India went from zero to 6,000+ members in four months, and 1,000+ people applied to be ambassadors in 30 days. At Nexus I helped 2,000+ gamers across six Indian states find Web3 gaming in two weeks.",
  },
  {
    label: "Oct 2024 to present · Socrates Global, HeLa Labs",
    title: "The world, across many time zones",
    note: "Many time zones.",
    quote: "Different languages, different cultures, the same need to belong.",
    story:
      "At Socrates, we reached 200,000 active users in the first month after launch. I helped build a network of 5,000+ ambassadors across 14+ countries, ran 30+ events, and hosted X Spaces in four languages with up to 9.7K people listening. We scaled a new AMA feature from zero to 100+ sessions in two weeks. At HeLa Labs I ran developer relations globally: 40 meetups in 60 days across 12 countries, 500 projects launched, 2,500+ developer-advocate applications from 30+ countries, and I wrote the developer wiki myself.",
  },
  {
    label: "2025 · DoraDAO",
    title: "Then I built my own",
    note: "Mine, finally.",
    quote: "I'd rather you be curious than convinced.",
    story:
      "I started DoraDAO right before Token 2049, with one stubborn goal: show people in Tier 2 and Tier 3 cities what Web3 can really do, beyond the scams they hear about. You'll probably never hear us say 'join us.' We'd rather be so interesting that you start the conversation yourself.",
  },
];

export type Role = {
  id: string;
  company: string;
  role: string;
  years: string;
  from: number;
  to: number;
  sample?: boolean;
  where: "London" | "San Francisco" | "India";
  tags: string[];
  desc?: string;
  did?: string[];
  highlights: string[];
  tools?: string;
  links?: { label: string; href: string }[];
  embeds?: { label: string; href: string }[];
};
export const roleFilters = [
  "All",
  "L1 Chain",
  "GameFi",
  "SocialFi",
  "Open Source",
  "SaaS",
  "Talent",
];
export const roles: Role[] = [
  {
    id: "role-hela",
    company: "HeLa Labs",
    role: "Developer Relations, Global",
    years: "2025 to 2026",
    from: 2025,
    to: 2026,
    sample: true,
    where: "India",
    tags: ["L1 Chain"],
    desc: "A next-generation Layer-1 built for real-world adoption across Web2 and Web3: gaming, DeFi, DePIN and enterprise.",
    did: [
      "Redesigned technical docs on GitBook and wrote the full developer wiki",
      "Built a community flywheel",
      "Structured the Developer Advocate program",
      "Ran 30+ workshops and talks reaching 10,000+ developers",
      "Built onboarding dashboards and playbooks that cut repetitive support",
      "Fed community insight back into the product roadmap",
    ],
    highlights: [
      "40 meetups in 60 days",
      "500 projects launched",
      "2,500+ advocate applications",
      "6,000+ developer activations",
    ],
    tools: "GitBook and the HeLa developer wiki",
    links: [
      { label: "Visit website", href: "https://helalabs.com" },
      { label: "Developer docs", href: "https://docs.helalabs.com" },
    ],
  },
  {
    id: "role-socrates",
    company: "Socrates Global",
    role: "Head of Ecosystem",
    years: "Oct 2024 to present",
    from: 2024,
    to: 2026,
    where: "London",
    tags: ["SocialFi", "GameFi"],
    desc: "A global Web3 social and entertainment platform where people earn rewards for Q&As, live spaces and sharing knowledge.",
    did: [
      "Launched a full ecosystem growth engine from scratch",
      "Grew SEA, UK and South Asia",
      "Username-NFT campaigns and memecoin education",
      "Ran the native token referral drive and IDO preparation",
      "50+ KOLs on performance deals that lowered acquisition cost",
      'The regional "Vad ViVad" AMA campaign',
      "A lean hiring sprint that onboarded 10 core team members",
      "Cut user complaints by 10% and lifted feature retention by 10%",
    ],
    highlights: [
      "200K active users in month one",
      "5,000+ ambassadors in 14+ countries",
      "60+ partnerships",
      "45K+ loyal community members after the TGE",
    ],
    tools: "Dune, RootData, Galxe, TaskOn, Intract, Lark, Luma, Unstop, Canva, Figma",
    embeds: [
      { label: "Instagram reel", href: "https://www.instagram.com/reel/DCaBR4btKe3/" },
      { label: "YouTube video", href: "https://youtu.be/kgwoniXGL1o" },
    ],
  },
  {
    id: "role-quira",
    company: "Quira",
    role: "Developer Relations",
    years: "Oct 2023 to Oct 2024",
    from: 2023,
    to: 2024,
    where: "London",
    tags: ["Open Source"],
    desc: "A questing platform for dev tools.",
    did: [
      "Onboarded 10,000+ developers",
      "Restructured Discord and lifted channel engagement 60%",
      "50+ cross-border community partnerships",
      "Ran AMAs and workshops with 100+ peak attendees",
      "The global open-source cohort",
    ],
    highlights: [
      "10,000+ developers",
      "800+ stars in 48 hours",
      "50+ partnerships",
      "2,000+ onboarded at zero cost",
    ],
  },
  {
    id: "role-outdefine",
    company: "Outdefine (Talent Protocol)",
    role: "Head of Community, India",
    years: "Feb to Jun 2024",
    from: 2024,
    to: 2024,
    where: "San Francisco",
    tags: ["Talent"],
    desc: "Contract role on EVM / Polygon L2.",
    did: [
      "15+ on-ground city and university tours",
      "150 ambassadors onboarded",
      "Scaled daily platform posts from 30 to 200 with a token-incentivised system",
      "User acquisition under $0.50 through hackathon and student communities",
      "B2B outreach to hiring partners",
    ],
    highlights: [
      "6,000+ members in 4 months",
      "1,000+ ambassador applications in 30 days",
      "3x developer adoption",
    ],
  },
  {
    id: "role-nexus",
    company: "Nexus Interactive",
    role: "Head of Marketing, India",
    years: "Jun to Oct 2024",
    from: 2024,
    to: 2024,
    where: "London",
    tags: ["GameFi"],
    desc: "Freelance, GameFi on Berachain.",
    did: [
      "India go-to-market",
      "The Nexus Arcade program",
      "Community tournaments and merchandise",
      "A Web2 to Web3 onboarding funnel",
    ],
    highlights: [
      "2,000+ gamers in 2 weeks",
      "70% 15-day retention",
      "26% interest-to-gameplay conversion",
      "6 states, 30+ local gaming clubs",
    ],
  },
  {
    id: "role-multichain",
    company: "Multichain",
    role: "Developer Relations / Head of Growth & Marketing, India",
    years: "Jan 2022 to Aug 2024",
    from: 2022,
    to: 2024,
    where: "India",
    tags: ["L1 Chain"],
    highlights: [
      "~31K newsletter subscribers",
      "44% open rate",
      "15+ IRL events",
      "6-figure sponsorships at 40% net margin",
    ],
  },
  {
    id: "role-techup",
    company: "TechUp Labs",
    role: "Product and Community Manager",
    years: "Jul to Dec 2023",
    from: 2023,
    to: 2023,
    where: "India",
    tags: ["SaaS"],
    highlights: [
      "Product of the Day and Week in 18 hours",
      "2x user acquisition",
      "10x traffic spike",
      "+60% post-launch engagement",
    ],
  },
  {
    id: "role-girlscript",
    company: "GirlScript Foundation",
    role: "Program Manager, APAC",
    years: "Mar to Sep 2023",
    from: 2023,
    to: 2023,
    where: "India",
    tags: ["Open Source"],
    desc: "Project: GirlScript Summer of Code 2023. Social growth: LinkedIn 53K to 77.4K, Twitter 4,290 to 7,607, Instagram 500 to 2,200. Also: 800 projects and 20+ countries across the GSSoC network.",
    highlights: [
      "Registrations up 200% (25,000)",
      "11,000+ Discord members",
      "#GSSoC trending for 2 days",
      "137 college and club partnerships",
    ],
  },
  {
    id: "role-fossasia",
    company: "FOSSASIA",
    role: "Project Administrator and Mentor",
    years: "2022 to 2023",
    from: 2022,
    to: 2023,
    sample: true,
    where: "India",
    tags: ["Open Source"],
    desc: "GWoC / SWoC / JWoC.",
    highlights: [
      "100+ contributors on the repository",
      "150+ stars",
      "150+ forks",
      "Mentored 200+ people",
      "Top 5 Project Admin and Mentor",
    ],
  },
];
export const years = [
  { y: 2022, c: "Newsletter machines." },
  { y: 2023, c: "Open source, then launches." },
  { y: 2024, c: "Developers, one Discord at a time." },
  { y: 2025, c: "Building my own." },
  { y: 2026, c: "Still walking." },
];
export const companies = [
  "HeLa Labs",
  "Socrates",
  "Quira",
  "Outdefine",
  "Nexus Interactive",
  "Multichain",
  "TechUp Labs",
  "GirlScript",
  "FOSSASIA",
  "Core DAO",
  "Solana",
  "Berachain",
  "Polygon",
  "Chainlink",
  "Token2049",
  "Google",
];

export type CaseStudy = {
  id: string;
  title: string;
  sub: string;
  story?: string;
  cover?: string;
  outcome?: string;
  evidence?: { label: string; href: string };
};
export const caseStudies: CaseStudy[] = [
  {
    id: "case-gwy",
    title: "Girls Who Yap Fellowship",
    sub: "Community built from zero.",
    outcome: "1,500 yappers · 40+ community partners",
    evidence: {
      label: "Read the fellowship story",
      href: "https://open.substack.com/pub/doradao/p/we-thought-it-would-be-small-it-wasnt",
    },
  },
  {
    id: "case-socrates",
    title: "Socrates Global",
    sub: "Ecosystem growth to 200K users.",
    outcome: "200K active users in month one",
    story:
      "Launching a social platform from zero across languages sounds impossible, so I stopped thinking of it as one launch. It was a dozen small regional ones: SEA, the UK, South Asia, each with its own designs and its own way of saying hello. Viral loops, early access and 60+ partnerships got us to 200,000 active users in the first month. Events did the quiet heavy lifting: 7K+ users came from rooms, not ads. And the AMA feature went from zero to 100+ sessions in two weeks.",
  },
  {
    id: "case-hela",
    title: "HeLa Labs",
    sub: "Developer relations at global scale.",
    outcome: "40 meetups in 60 days",
    evidence: { label: "Explore the developer wiki", href: "https://docs.helalabs.com" },
    story:
      "Developers don't need more hype. They need a clear first hour. So I started with the docs: rebuilt them on GitBook and wrote the wiki myself. Then a flywheel: 40 meetups in 60 days across 12 countries, 500 projects launched, 3,000+ developer conversations. 2,500+ people from 30+ countries applied to be Developer Advocates in 45 days. Every event, channel and ambassador fed one dashboard, and the roadmap.",
  },
  {
    id: "case-quira",
    title: "Quira",
    sub: "The zero-cost open-source cohort.",
    outcome: "2,000+ developers onboarded at zero cost",
    story:
      "I wanted to see if curiosity could beat a budget. A three-week global open-source cohort: 21 speakers, 3,500+ registrations, 4,000+ in the audience, 100,000+ impressions. The ROI I care about: 2,000+ developers onboarded at zero cost. Two partner projects trended on GitHub, and one earned 800+ stars and forks in 48 hours.",
  },
  {
    id: "case-pizza",
    title: "Bitcoin Pizza Day, Agra",
    sub: "Building distribution in a Tier 3 city.",
    cover: photos.pizza,
    outcome: "7 college contacts from one meetup",
  },
  {
    id: "case-roadshow",
    title: "DoraDAO University Roadshow",
    sub: "30+ universities.",
    outcome: "30+ university stops",
    story:
      "Kickoff meetups at 30+ universities: learn to vibe-code from scratch, launch your idea, compete for $100k+ in prizes. Every stop needed a college partnership, a club partnership and an agenda, and I tracked the ROI of each: users onboarded, partners locked, speakers, community partnerships, distribution channels. Alongside it, DoraDAO partners with the NASA Space Apps Challenge across India.",
  },
];

export const gwy = {
  kicker: "A 4-week fellowship for creators, designers and builders (started 30 July 2025)",
  beats: [
    {
      t: "Why",
      s: "Women are under 25% of the Web3 user base. Most onboarding is dev-heavy and gatekept. Crypto Twitter felt like a room you needed a password for. I wanted a summer-beach-vibes gateway instead: calm, fun, and online.",
    },
    {
      t: "How it started",
      s: "No team, no playbook. Messy Google Docs and one big why. I built the whole website in Canva because I needed it good in two hours, not two days. Then I opened a giant tab list of communities in 40+ countries and started writing to people. Forty-five communities said yes, from India, Nepal, Dubai, Thailand, Korea, the US, Europe, Africa and more.",
    },
    {
      t: "Launch day",
      s: "Applications came in from 15+ countries. LinkedIn spiked to 8K on day one. We opened a WhatsApp group 10 days before selections. Within three hours: 2,000+ messages. For three straight days, over 1,000 a day. The last message I remember was at 3 AM.",
    },
    {
      t: "The honest part",
      s: "Day one was a technical mess. We'd chosen Discord for the exclusive feel and it wasn't working, so we went live on LinkedIn Live 30 minutes late. Later, viewership dipped to 50 to 60. Instead of guessing why, I wrote to people and asked. More than 50 replied. It felt like a conversation, not a broadcast.",
    },
    {
      t: "Moments I loved",
      s: "27 projects and about 100 builders in a 48-hour mini-hackathon. A public vote for third place that hit 822 votes, 600 of them in 12 hours. 118 content pieces for one bounty, 60% of them video. A core pack of 32 people who joined a Discord voice call every night, to talk about careers, games and nonsense. A tiny ₹300 treat for 22 of the 40 who kept showing up. A mini e-pageant for 'The X Queen' titles. A graduation with no agenda, and ice cream under 50 rupees.",
    },
  ],
  numbers: [
    "20 lakh+ views across the fellowship",
    "600+ content pieces",
    "150+ videos",
    "1,500 yappers, 400 super-active",
    "40+ community partners across 15+ geographies",
    "0 to 200+ downloads for the sponsor",
    "LinkedIn 0 → 1,076, Instagram 0 → 272, Twitter 0 → 305 in 10 days",
  ],
  closing:
    "More than the numbers, what shook us was the community. Some of them cried at graduation. And hey, this isn't the end. Picture abhi baki hai, mere dost.",
  links: [
    {
      label: "Substack: We thought it would be small. It wasn't.",
      href: "https://open.substack.com/pub/doradao/p/we-thought-it-would-be-small-it-wasnt",
    },
    { label: "LinkedIn: Girls Who Yap Overview | DoraDAO", href: "#", sample: true },
    { label: "Instagram: DORA DAO confessions", href: "#", sample: true },
    { label: "Quick-overview PDF", href: "#", sample: true },
    { label: "Sponsorship deck (Canva)", href: "#", sample: true },
  ],
};

export type EventType =
  | "Meetup"
  | "Hackathon"
  | "Talk"
  | "Workshop"
  | "Seminar"
  | "Conference"
  | "Roadshow"
  | "Fellowship";
export type TrailEvent = {
  id: string;
  name: string;
  city: string;
  country: string;
  date: string;
  type: EventType;
  lat: number;
  lng: number;
  story?: string;
  cover?: string;
  sample?: boolean;
  caseId?: string;
};
export const mapLegend: EventType[] = ["Meetup", "Hackathon", "Talk", "Workshop", "Seminar"];
export const events: TrailEvent[] = [
  {
    id: "ev-pizza",
    name: "Bitcoin Pizza Day",
    city: "Agra",
    country: "India",
    date: "20 to 22 May 2025",
    type: "Meetup",
    lat: 27.2,
    lng: 78,
    cover: photos.pizza,
    story:
      "Everyone was hosting a fully sponsored Pizza Day. I wanted one with no chain agenda and no 'download my wallet.' Just a sharper goal: build distribution in a Tier 3 city so the next event costs almost nothing. Most students there aren't on LinkedIn or X, and colleges only care about names like Google and Microsoft, not Polygon or Solana. So I got my hands dirty: one student connected me to one college T&P cell, and that became conversations with 10 more colleges. 35 registered, 14 qualified, 71% of those who came were active. We left with 7 college contacts for a 'Hackathon 101 Meetup Tour' and 19 new loyal followers.",
  },
  {
    id: "ev-core",
    name: "Core DAO Bangalore mixer",
    city: "Bangalore",
    country: "India",
    date: "2025",
    sample: true,
    type: "Meetup",
    lat: 12.97,
    lng: 77.6,
    cover: photos.core,
    story:
      "A BTCfi hackathon was running, so we put together a developer mixer in three days. 60+ people registered. It was the first spark of Core in India. Role: ideation, registration, marketing, execution, F&B curation, technical support. About Core: the first Proof of Stake layer for Bitcoin, with self-custodial Bitcoin staking and the largest Bitcoin DeFi ecosystem.",
  },
  {
    id: "ev-token",
    name: "Token2049 pre-event e-meetup (an idea)",
    city: "Online / Dubai",
    country: "UAE",
    date: "Apr 2025",
    sample: true,
    type: "Meetup",
    lat: 25.2,
    lng: 55.3,
    cover: photos.token,
    story:
      "Big conferences create fleeting connections and expensive spotlight. I wanted a friendship network before we landed in Dubai: a verified, gated online space with games, product demos and no agencies, free for the first edition.",
  },
  {
    id: "ev-web3conf",
    name: "Web3Conf India",
    city: "Goa",
    country: "India",
    date: "Annual",
    sample: true,
    type: "Conference",
    lat: 15.3,
    lng: 74.1,
    cover: photos.web3conf,
    story: "Registration management, cross-marketing, on-ground execution.",
  },
  {
    id: "ev-roadshow",
    name: "University Roadshow by DoraDAO (30+ universities)",
    city: "Pan-India",
    country: "India",
    date: "Jun to Jul 2025",
    sample: true,
    type: "Roadshow",
    lat: 22,
    lng: 80,
    story: "Learn to vibe-code from scratch, launch your ideas, compete for $100k+ in prizes.",
  },
  {
    id: "ev-nasa",
    name: "NASA Space Apps Challenge, India",
    city: "Pan-India",
    country: "India",
    date: "Oct 2025",
    sample: true,
    type: "Hackathon",
    lat: 19,
    lng: 73,
  },
  {
    id: "ev-gwy",
    name: "Girls Who Yap Fellowship",
    city: "Online (global)",
    country: "Global",
    date: "from 30 Jul 2025",
    type: "Fellowship",
    lat: 5,
    lng: 20,
    caseId: "case-gwy",
  },
  {
    id: "ev-gdg",
    name: "GDG On Campus",
    city: "Sharda University, Agra",
    country: "India",
    date: "Oct 2025",
    sample: true,
    type: "Workshop",
    lat: 27.5,
    lng: 77.6,
    story:
      "Organised an orientation and multiple tech sessions for 500+ students to introduce them to open source and AI.",
  },
  ...[
    ["Global Open Source Cohort (Quira, online, 2024)", "Online", 51.5, -0.1, "Talk"],
    ["Socrates Universities Roadshow", "SEA", 13.7, 100.5, "Roadshow"],
    ["Hive (L1) City Road Show", "India", 28.6, 77.2, "Roadshow"],
    ["Web3 Carnival", "India", 19.1, 72.9, "Meetup"],
    ["OpenSource Conf", "India", 17.4, 78.5, "Conference"],
    ["Chainlink SmartCon", "Global", 40.7, -74, "Conference"],
    ["Berachain Connect", "Global", 1.35, 103.8, "Meetup"],
    ["Google WoW", "India", 12.9, 80.2, "Seminar"],
    ["Web 3.0 Community Day", "India", 18.5, 73.9, "Seminar"],
    ["Paintball Madness India Launch", "India", 26.9, 75.8, "Meetup"],
    ["Podcast: House of Y", "Online", 30.7, 76.8, "Talk"],
  ].map(([name, city, lat, lng, type], i) => ({
    id: `ev-x${i}`,
    name: name as string,
    city: city as string,
    country: city as string,
    date: "Details to be added",
    type: type as EventType,
    lat: lat as number,
    lng: lng as number,
    sample: true,
  })),
];

export const dora = {
  title: "DoraDAO",
  role: "Co-founder",
  cover: photos.dora,
  url: "https://doradao.vercel.app/",
  text: "A chain-agnostic platform focused on empowering the next generation of creators and builders. Built fellowship programs, onboarded 1,500+ yappers and collaborated with 40+ global partners.",
  quote: "I'd rather you be curious than convinced.",
};
export const shelf = [
  { name: "DoraDAO", tip: "Co-founder", spot: "dora" },
  { name: "GirlScript", tip: "Program Manager, APAC", spot: "role-girlscript" },
  { name: "FOSSASIA", tip: "Project Admin and Mentor", spot: "role-fossasia" },
  { name: "Socrates", tip: "Head of Ecosystem", spot: "role-socrates" },
  { name: "HeLa", tip: "Developer Relations", spot: "role-hela" },
  { name: "Nexus", tip: "Head of Marketing, India", spot: "role-nexus" },
  { name: "Quira", tip: "Developer Relations", spot: "role-quira" },
  { name: "Outdefine", tip: "Head of Community, India", spot: "role-outdefine" },
  { name: "Multichain", tip: "Growth & Marketing", spot: "role-multichain" },
  { name: "Web3Conf India", tip: "Event partner", spot: "ev-web3conf" },
  { name: "Core DAO", tip: "Bangalore mixer", spot: "ev-core" },
  { name: "Solana", tip: "Partner" },
  { name: "Polygon", tip: "Partner" },
];
export const organised = {
  intro: "I've led Web2 and crypto events of every size, and they've reached thousands of people.",
  stats: [
    ["7+", "countries"],
    ["10+", "in-person and online events"],
    ["200,000+", "viewership"],
    ["20,000+", "participants"],
    ["50+", "industry-leading speakers"],
    ["100+", "attending companies"],
    ["100+", "global community partners"],
  ],
  does: [
    "Speaker curation and management",
    "Marketing / PR and KOL campaigns",
    "Event layout, production and design",
    "Sponsor management",
    "Personalised branding",
    "Execution",
    "Stage design and setup",
    "Registration management",
    "Backstage management",
    "Audience and crowd management",
  ],
};

export const resourceFilters = ["All", "Templates", "GTM", "Case Studies", "Tools"];
export const featuredResource = {
  title: "Blueprint to Get Featured on Product Hunt & Become #1 Product of the Day",
  about:
    "The exact sequence I used at TechUp Labs, from pre-launch warm-ups to launch-day comments, so you can run your own.",
  stats: [
    ["2.4K", "downloads"],
    ["500+", "readers"],
    ["4.8/5", "rating"],
  ],
  sample: true,
};
export const resources = [
  { t: "5 Common Web3 GTM Motions", f: "PDF · 8 min", c: "GTM" },
  { t: "0 to 1 Playbook for Building an L1 Ecosystem", f: "Notion · 12 min", c: "GTM" },
  { t: "KOL Campaign Blueprint, CPA to $0.2 to $1.0", f: "PDF · 7 min", c: "Templates" },
  {
    t: "Building an Iconic Ambassador Program, APAC and EMEA",
    f: "Notion · 10 min",
    c: "Case Studies",
  },
  { t: "Building a Bear-Proof Community", f: "PDF · 6 min", c: "Case Studies" },
  { t: "How to Get the Most Out of a Web3 Hackathon", f: "PDF · 6 min", c: "Tools" },
  { t: "How to Build Social Presence in 100 Days", f: "Notion · 9 min", c: "Templates" },
  { t: "Scaling Open-Source Projects to GitHub Trending", f: "PDF · 8 min", c: "Tools" },
  { t: "Building an AI Community", f: "Notion · 7 min", c: "GTM" },
].map((r) => ({ ...r, sample: true }));

export const products = [
  {
    name: "DoraDAO",
    desc: "A platform and community for the next generation of builders and creators.",
    bullets: [
      "Partners with NASA Space Apps in India",
      "30+ university roadshow",
      "Web3 for Tier 2 and Tier 3 cities",
    ],
    href: "https://doradao.vercel.app",
  },
  {
    name: "Girls Who Yap",
    desc: "A 4-week fellowship for creators, designers and builders.",
    bullets: ["1,500 yappers, 400 super-active", "600+ content pieces", "40+ community partners"],
    href: "https://open.substack.com/pub/doradao/p/we-thought-it-would-be-small-it-wasnt",
  },
  {
    name: "HeLa Labs Developer Wiki",
    desc: "The full developer documentation, written from scratch.",
    bullets: ["GitBook docs", "B2B and B2C onboarding", "100+ onboarding resources"],
    href: "https://docs.helalabs.com",
  },
];

export const enjoying = [
  { k: "Book", v: "Something on the nightstand" },
  { k: "Podcast", v: "A long-form founder show" },
  { k: "Playlist", v: "Lo-fi for late launches" },
];
export const notUsual = [
  {
    t: "Girls Who Yap on Substack",
    href: "https://open.substack.com/pub/doradao/p/we-thought-it-would-be-small-it-wasnt",
  },
  { t: "DoraDAO website", href: "https://doradao.vercel.app/" },
  { t: "HeLa developer wiki", href: "https://docs.helalabs.com" },
  { t: "Product Hunt blueprint", href: "#night" },
  { t: "Web3Conf India", href: "https://web3confindia.xyz" },
  { t: "NASA Space Apps Challenge", href: "https://www.spaceappschallenge.org" },
];
export const learnings = [
  "Whatever you're building, people take it far more seriously than you expect.",
  "Don't chase perfection. Your sponsorship deck will change 20+ times.",
  "If it's an experimental program, build separate social accounts.",
  "When you start from scratch, 80% of the steps look familiar. What changes is how you approach each one.",
  "In Tier 3 cities, distribution is 10x harder because students aren't on LinkedIn or X.",
];
export const incompletes = [
  { t: "Hackathon 101 Meetup Tour", p: 40 },
  { t: "Fellowship 2.0 (brainstorm)", p: 20 },
  { t: "Token2049-style pre-event e-meetups", p: 30 },
  { t: "Taking Web3 to more Tier 2 and Tier 3 cities", p: 55 },
];

export const testimonials = [
  {
    name: "Baptiste Fernandez",
    role: "Founder @Dymmo, former DevRel Head @Quira, former Analytics & Strategy Head @TikTok @Uber",
    post: "Dymmo",
    q: "Shivam is a polished professional who approaches problems with clarity and structure. In the developer relations space, he has built strong ties across a range of developer communities, driven meaningful engagement, and consistently delivered results. Shivam is dependable and would be a valuable asset to any DevRel team.",
  },
  {
    name: "Anubha Maneshwar",
    role: "Founder, GirlScript Foundation and Web3Conf India; Forbes Asia U30",
    post: "GirlScript",
    q: "Shivam is a great resource to add in your team. He is a problem solver and a go getter who has significant tech as well as management skills. GirlScript Summer of Code is one of the biggest programs at our foundation which he managed like a pro and also helped us in executing our other initiatives like Web3Conf. I wish him best for the future endeavors. He will be a great asset in any team he joins.",
  },
  {
    name: "Sangam Upadhayay",
    role: "EiR & Chief of Staff, Kadam App",
    post: "Kadam",
    q: "I had the privilege of working alongside Shivam during his tenure as a Community Manager, and I was continually impressed by his ability to spearhead projects with boldness and precision. His natural leadership skills and unwavering commitment to achieving the best outcomes make him a valuable asset for any team. Shivam has a bright future ahead, and I wholeheartedly recommend him.",
  },
];
export const videoTestimonials = [
  { q: "A rare combination of vision, empathy and execution.", who: "Community Partner" },
  { q: "He doesn't just build communities, he builds people.", who: "Team Member" },
];
export const voiceNotes = [
  { who: "Fellowship mentor", role: "Girls Who Yap" },
  { who: "Ambassador lead", role: "Socrates Global" },
];
export const closingLine = {
  t: "Met 5,000+ amazing people across 10+ countries, each adding a new perspective to life.",
  sample: true,
};

export const workWithMe = {
  title: "Are you on the hunt?",
  body: "For a Product Manager, Community Lead, DevRel, Marketing Strategist or Ecosystem Builder? You don't need a team. You need someone who can operate like one. I don't wait for weekends, I thrive in chaos, and I treat every launch like game day. I build programs that scale, communities that stick, and ecosystems that grow from zero to everywhere. I also love travelling, so let's make both happen.",
  findMe: [
    { k: "LinkedIn", v: "meshivamgarg", href: "https://www.linkedin.com/in/meshivamgarg" },
    { k: "X", v: "Shivams_twt", href: "https://x.com/Shivams_twt" },
    {
      k: "Product Hunt",
      v: "itsmeshivamgarg",
      href: "https://www.producthunt.com/@itsmeshivamgarg",
    },
    { k: "GitHub", v: "meshivamgarg", href: "https://github.com/meshivamgarg", sample: true },
  ],
  elsewhere: [
    { k: "DoraDAO Substack", href: "https://doradao.substack.com" },
    { k: "Instagram", href: "https://instagram.com", sample: true },
  ],
  credits:
    "With thanks to GirlScript Foundation · FOSSASIA · Multichain · TechUp Labs · Quira · Outdefine · Nexus Interactive · Socrates Global · HeLa Labs · Core DAO · Web3Conf India · NASA Space Apps · and every yapper, ambassador, speaker and student who showed up.",
  signoff: "Picture abhi baki hai.",
};
