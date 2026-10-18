import { productChapters, type ShowcaseProject } from "./product-showcase";

export type CaseStudyContent = {
  audience: string;
  context: string;
  priority: string;
  needs: string[];
  pains: string[];
  options: string[];
  action: string;
  chapters: Record<2 | 5 | 6 | 7, { title: string; intro: string; items: [string, string][] }>;
};

export const rapidoStudy: CaseStudyContent = {
  audience: "Aarav, 24",
  context:
    "A student balancing classes, a limited budget and a daily commute needs a reliable pickup without comparing several apps.",
  priority: "The priority: confidence in the fare, the pickup point and the arrival time.",
  needs: [
    "Quick ride booking",
    "Transparent and fair pricing",
    "Shorter wait times",
    "Multiple ride options in one app",
  ],
  pains: [
    "Long and uncertain wait times",
    "Price surge confusion",
    "Switching between multiple ride apps",
    "Lack of real-time updates",
  ],
  options: ["Bike", "Auto", "Cab"],
  action: "Confirm Ride",
  chapters: {
    2: {
      title: "The commute starts before the ride.",
      intro:
        "Every switch between apps adds friction. Unclear fares and uncertain pickup times turn a simple trip into a series of decisions.",
      items: [
        ["Fragmented booking", "Compare ride types without leaving the same screen."],
        ["Unclear pricing", "Show fare and wait time before confirmation."],
        ["Pickup uncertainty", "Keep the current location and ride status visible."],
      ],
    },
    5: {
      title: "Less friction. More confidence.",
      intro:
        "The design focuses on the everyday moments that matter: choosing a ride, understanding the price and finding the driver.",
      items: [
        [
          "One comparison",
          "Bike, auto and cab belong together, with comparable fares and arrival times.",
        ],
        ["Visible context", "The pickup map stays on screen while a rider chooses a vehicle."],
        ["Clear next step", "A single confirmation action replaces competing calls to action."],
      ],
    },
    6: {
      title: "Every element earns its place.",
      intro: "Reduce the interface to the decisions a rider actually needs to make.",
      items: [
        ["Unified ride selector", "Bring all vehicle options into one compact comparison."],
        ["Upfront estimates", "Pair each ride option with its fare and arrival time."],
        ["One primary action", "Use a clear confirmation button below the ride choices."],
      ],
    },
    7: {
      title: "A simpler path from pickup to ride.",
      intro:
        "A before-and-after design exploration centered on reducing app switching, clarifying fares and making the next step obvious.",
      items: [
        ["Clarity", "Ride type, fare and wait time appear together."],
        ["Continuity", "The map and pickup location remain in context."],
        ["Confidence", "A visible confirmation state closes the booking flow."],
      ],
    },
  },
};

const projectFocus = {
  dora: {
    audience: "Builders and contributors",
    needs: ["Fellowship Programs", "Community", "Real-world opportunities"],
    pains: ["Discoverability", "Onboarding and access", "Sustained participation"],
    options: ["Fellowship Programs", "Community", "Partners"],
    action: "Explore Platform",
  },
  nexus: {
    audience: "Developers",
    needs: ["Open Source Contributions", "Ecosystem Apps", "Community"],
    pains: ["Discoverability", "Onboarding and access", "Product adoption"],
    options: ["Builders", "Ecosystem Apps", "Community"],
    action: "Explore Ecosystem",
  },
  hela: {
    audience: "Developers",
    needs: ["Products", "Partners", "Community"],
    pains: ["Discoverability", "Onboarding and access", "Real-world opportunities"],
    options: ["Products", "Community", "Partners"],
    action: "Explore",
  },
  hat: {
    audience: "Creators",
    needs: ["Community", "Real-world opportunities", "Referral Bonus"],
    pains: ["Onboarding and access", "Sustained participation", "Product adoption"],
    options: ["Creators", "Communities", "Referral Bonus"],
    action: "Join Community",
  },
} satisfies Record<
  ShowcaseProject["id"],
  Pick<CaseStudyContent, "audience" | "needs" | "pains" | "options" | "action">
>;

export function getProductStudy(project: ShowcaseProject | null): CaseStudyContent {
  if (!project) return rapidoStudy;
  const focus = projectFocus[project.id];
  return {
    ...focus,
    context: project.description,
    priority: "Clear paths to participate",
    chapters: {
      2: {
        title: "Onboarding and access",
        intro: project.description,
        items: focus.pains.map((pain, i) => [
          pain,
          focus.needs[i] ?? focus.needs[0] ?? "Community",
        ]),
      },
      5: {
        title: "Community feedback",
        intro: "Design exploration",
        items: focus.options.map((option) => [option, "Discoverability"]),
      },
      6: {
        title: "A focused product story",
        intro: project.description,
        items: [
          ["Clear paths to participate", focus.options.join(" · ")],
          ["A connected ecosystem", "Community and partnerships"],
          ["Growth and adoption", focus.action],
        ],
      },
      7: {
        title: "Product and ecosystem",
        intro: project.description,
        items: project.metrics.slice(0, 3).map(([value, label]) => [label, value]),
      },
    },
  };
}

// This is the single chapter contract for Rapido and every project.
export function getCaseStudySegment(chapter: number) {
  const label = productChapters[chapter] ?? productChapters[0];
  const layout =
    chapter === 0 || chapter === 3
      ? "comparison"
      : chapter === 4
        ? "mockups"
        : chapter === 1
          ? "persona"
          : "insights";
  return { label, layout } as const;
}
