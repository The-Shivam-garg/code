export type ProductStatus = "Live" | "Paused" | "Experiment";
export type ThinkingProduct = {
  slug: string;
  name: string;
  category: string;
  sample: boolean;
  status: ProductStatus;
  statusConfirmed: boolean;
  oneLiner: string;
  audience: string;
  problem: string;
  insight: string;
  decisions: { decision: string; tradeoff: string }[];
  cuts: string;
  measurement: string;
  results: { value: string; label: string }[];
  next: string;
  links: { label: string; href: string }[];
  note?: string;
};

const pending = "Not documented yet — awaiting the original product notes.";
const realProduct = (slug: string, name: string, category: string): ThinkingProduct => ({
  slug,
  name,
  category,
  sample: false,
  status: "Experiment",
  statusConfirmed: false,
  oneLiner: "A real product. The original brief and evidence will be added here.",
  audience: pending,
  problem: pending,
  insight: pending,
  decisions: Array.from({ length: 3 }, () => ({
    decision: pending,
    tradeoff: "Awaiting the decision and its tradeoff.",
  })),
  cuts: pending,
  measurement: pending,
  results: [{ value: "—", label: "Verified numbers not supplied" }],
  next: pending,
  links: [],
  note: "Real product; Thinking notes, live status and links await confirmation. Experiment is a provisional label.",
});

export const thinkingProducts: ThinkingProduct[] = [
  realProduct("certifier", "certifier", "Credentials"),
  realProduct("ai-academy", "AI Academy", "Learning"),
  {
    ...realProduct("helasyn", "HeLaSyn", "AI agents"),
    status: "Live",
    statusConfirmed: true,
    oneLiner: "One no-code AI agent across Telegram, WhatsApp and Gmail.",
    audience:
      "People and teams who want an AI assistant for inbox, sales, support and scheduling across their communication channels.",
    links: [{ label: "HeLaSyn Cloud", href: "https://cloud.helasyn.ai/" }],
    note: "Public product description and live website verified. Personal decisions, tradeoffs and measured outcomes await the original notes.",
  },
  {
    slug: "ambassador-os",
    name: "Ambassador OS",
    category: "Community systems",
    sample: true,
    status: "Experiment",
    statusConfirmed: true,
    oneLiner:
      "An operating system for running 5,000+ ambassadors without losing the human connection.",
    audience: "Community leads coordinating large, distributed ambassador programs.",
    problem:
      "At scale, contribution becomes invisible. A busy chat is not the same as a healthy program.",
    insight:
      "Status beats money. Recognition, belonging and a visible path to responsibility can outlast a one-time reward.",
    decisions: [
      {
        decision: "Make contribution and progression visible.",
        tradeoff:
          "A public ladder creates clarity, but can encourage people to optimize for points.",
      },
      {
        decision: "Organize ambassadors into smaller local cohorts.",
        tradeoff:
          "Local ownership improves connection, but requires more training for cohort leads.",
      },
      {
        decision: "Use weekly recognition instead of paying for every task.",
        tradeoff:
          "Recognition can build identity, but cannot replace fair compensation for substantive work.",
      },
    ],
    cuts: "Cut the all-in-one chat dashboard. Existing chat tools were enough; contribution and recognition were the missing layer.",
    measurement:
      "Track activation, repeat contributions and week-8 cohort retention; review the quality of work alongside task counts.",
    results: [
      { value: "5,000+", label: "Ambassadors · sample scenario" },
      { value: "62%", label: "Week-8 retention · sample result" },
    ],
    next: "Test whether recognition sustains retention after the first eight weeks, and compare cohorts with different reward models.",
    links: [],
    note: "SAMPLE concept and illustrative decisions; these are not verified shipped results.",
  },
  {
    slug: "kol-campaign-tracker",
    name: "KOL Campaign Tracker",
    category: "Growth tools",
    sample: true,
    status: "Experiment",
    statusConfirmed: true,
    oneLiner: "Measure creator campaigns by acquisition, not just impressions.",
    audience: "Growth teams running campaigns with key opinion leaders and creators.",
    problem:
      "Campaign reports celebrate reach while hiding the cost of acquiring someone who actually takes action.",
    insight:
      "A smaller creator with the right audience can outperform a larger creator with impressive reach.",
    decisions: [
      {
        decision: "Give every creator a dedicated attribution link.",
        tradeoff:
          "Simple attribution is actionable, but misses cross-device and word-of-mouth conversions.",
      },
      {
        decision: "Use cost per acquisition as the comparison metric.",
        tradeoff: "CPA makes spending comparable, but does not capture long-term customer quality.",
      },
      {
        decision: "Review results in short test cycles before scaling.",
        tradeoff: "Small tests reduce wasted spend, but can be noisy with limited conversion data.",
      },
    ],
    cuts: "Cut automated creator discovery. The first version focuses on making existing campaign decisions clearer.",
    measurement:
      "Compare spend and attributed acquisitions using the same conversion definition across creators and time periods.",
    results: [{ value: "$4.10 → $0.80", label: "CPA · sample result" }],
    next: "Add retention by source so a low CPA is not mistaken for high-quality acquisition.",
    links: [],
    note: "SAMPLE concept and illustrative decisions; the CPA change is not a verified outcome.",
  },
  {
    slug: "community-onboarding-kit",
    name: "Community Onboarding Kit",
    category: "Notion template",
    sample: true,
    status: "Experiment",
    statusConfirmed: true,
    oneLiner:
      "A Notion template that turns a new member’s first day into a clear first contribution.",
    audience:
      "Small community teams who need a repeatable welcome without a complicated tool stack.",
    problem: "New members arrive to a wall of channels and links, with no obvious next step.",
    insight:
      "One meaningful first action is more useful than a complete tour of everything the community does.",
    decisions: [
      {
        decision: "Build in Notion rather than a custom application.",
        tradeoff: "The kit is easy to adapt, but depends on Notion’s permissions and interface.",
      },
      {
        decision: "Give members one first contribution to choose.",
        tradeoff: "A clear next step reduces overwhelm, but cannot cover every member’s interests.",
      },
      {
        decision: "Pair self-serve notes with a human welcome.",
        tradeoff: "A personal welcome builds trust, but takes real time from the community team.",
      },
    ],
    cuts: "Cut points, leaderboards and automated direct messages. The welcome should feel like an invitation, not a funnel.",
    measurement:
      "Proposed measures: time to first contribution, first-week activation and member feedback. No test has been reported.",
    results: [{ value: "0", label: "Verified tests reported · sample concept" }],
    next: "Pilot the template with one small community and observe where new members get stuck.",
    links: [],
    note: "SAMPLE Notion-template concept. No published template or measured outcome has been supplied.",
  },
];

export const thinkingFields = [
  "One-liner",
  "Who it's for",
  "The problem I saw",
  "The insight",
  "What I decided",
  "What I cut and why",
  "How I measured it",
  "What happened",
  "What I'd do next",
  "Status",
  "Links",
];
