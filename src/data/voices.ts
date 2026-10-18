import a from "@/assets/voices-voice-a.jpg.asset.json";
import b from "@/assets/voices-voice-b.jpg.asset.json";
import c from "@/assets/voices-voice-c.jpg.asset.json";
import token from "@/assets/voices-token2049.jpg.asset.json";
import rooftop from "@/assets/voices-rooftop.jpg.asset.json";
import planning from "@/assets/voices-planning.jpg.asset.json";
import panel from "@/assets/voices-panel.jpg.asset.json";
import podcast from "@/assets/voices-podcast.jpg.asset.json";
import table from "@/assets/voices-table.jpg.asset.json";
import aisha from "@/assets/voices-aisha.jpg.asset.json";
import rohan from "@/assets/voices-rohan.jpg.asset.json";
import daniel from "@/assets/voices-daniel.jpg.asset.json";
import priya from "@/assets/voices-priya.jpg.asset.json";
import kenji from "@/assets/voices-kenji.jpg.asset.json";

export const voiceFilters = [
  "All",
  "Founders",
  "Team Members",
  "Community",
  "Partners",
  "Creators",
  "Mentors",
  "Friends",
] as const;
export type VoiceFilter = (typeof voiceFilters)[number];
export type Voice = {
  id: string;
  kind: "quote" | "photo" | "video";
  category: VoiceFilter;
  image?: string;
  alt?: string;
  quote?: string;
  name?: string;
  role?: string;
  social?: "linkedin" | "x";
  duration?: string;
  caption?: string;
  note?: string;
  sample: boolean;
};
export const voicesCopy = {
  eyebrow: "09 / VOICES",
  titleStart: "People who",
  titleAccent: "vouch",
  titleEnd: "for him.",
  description:
    "Across products, communities, events and open source — kind words from founders, teammates, collaborators and community members.",
  leftNote: ["Builders", "Founders", "Teammates", "Community", "Friends"],
  rightNote: ["DIFFERENT", "PEOPLE.", "SAME", "PURPOSE."],
  internet: "A more open internet.",
  more: "See more stories",
  less: "See fewer stories",
};
// Reference copy and media are supplied by the user; recordings and identities remain unverified.
export const voices: Voice[] = [
  {
    id: "lead",
    kind: "video",
    category: "Creators",
    image: a.url,
    alt: "Woman sharing her story",
    duration: "02:14",
    quote: "An incredible operator and an even better human.",
    role: "Product Lead, Singapore",
    sample: true,
  },
  {
    id: "aisha",
    kind: "quote",
    category: "Founders",
    quote:
      "Shivam combines technical depth with an unmatched ability to bring people together. He doesn’t just run programs, he creates movements.",
    name: "Aisha Khan",
    role: "Co-founder, Web3 Protocol",
    image: aisha.url,
    social: "linkedin",
    sample: true,
  },
  {
    id: "token",
    kind: "photo",
    category: "Community",
    image: token.url,
    alt: "Friends together at TOKEN2049 Singapore",
    note: "Met at Token2049",
    sample: true,
  },
  {
    id: "engineer",
    kind: "video",
    category: "Team Members",
    image: b.url,
    alt: "Engineering lead sharing his perspective",
    duration: "01:32",
    quote: "Sharp thinking, high agency and deeply community-driven.",
    role: "Engineering Lead, US",
    sample: true,
  },
  {
    id: "panel",
    kind: "video",
    category: "Partners",
    image: panel.url,
    alt: "A developer community panel discussion",
    duration: "08:20",
    caption: "A conversation on community, growth and open source.",
    sample: true,
  },
  {
    id: "rohan",
    kind: "quote",
    category: "Partners",
    quote: "One of the most thoughtful and execution-focused community builders I’ve worked with.",
    name: "Rohan Mehta",
    role: "Partner, Fund",
    image: rohan.url,
    social: "x",
    sample: true,
  },
  {
    id: "rooftop",
    kind: "photo",
    category: "Friends",
    image: rooftop.url,
    alt: "Community friends meeting on a rooftop",
    sample: true,
  },
  {
    id: "daniel",
    kind: "quote",
    category: "Mentors",
    quote: "He has a rare ability to connect ecosystems, communities and real-world impact.",
    name: "Daniel Park",
    role: "Ecosystem Lead, Global L1",
    image: daniel.url,
    social: "linkedin",
    sample: true,
  },
  {
    id: "planning",
    kind: "photo",
    category: "Team Members",
    image: planning.url,
    alt: "Two teammates planning together at a laptop",
    note: "Planning the next chapter",
    sample: true,
  },
  {
    id: "podcast",
    kind: "video",
    category: "Creators",
    image: podcast.url,
    alt: "Two people recording a community podcast",
    duration: "46:10",
    caption: "On open source, community and what’s next.",
    sample: true,
  },
  {
    id: "priya",
    kind: "quote",
    category: "Community",
    quote: "Turns ideas into communities and communities into real world impact.",
    name: "Priya Sharma",
    role: "Community Lead",
    image: priya.url,
    social: "linkedin",
    sample: true,
  },
  {
    id: "table",
    kind: "photo",
    category: "Friends",
    image: table.url,
    alt: "Community members sharing a meal",
    note: "Different places. Same conversations.",
    sample: true,
  },
  {
    id: "kenji",
    kind: "quote",
    category: "Founders",
    quote: "A true builder at heart — curious, kind and always finding ways to help others grow.",
    name: "Kenji Tan",
    role: "Founder, Dev Tooling",
    image: kenji.url,
    social: "x",
    sample: true,
  },
  {
    id: "closing",
    kind: "video",
    category: "Friends",
    image: c.url,
    alt: "Woman talking with the community",
    duration: "01:05",
    sample: true,
  },
];
