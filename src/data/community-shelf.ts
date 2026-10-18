import { dora, events, roles, shelf } from "./trail";
import portrait from "@/assets/community-shelf-portrait.jpg.asset.json";
import gathering from "@/assets/voices-table.jpg.asset.json";
import panel from "@/assets/voices-panel.jpg.asset.json";
import planning from "@/assets/voices-planning.jpg.asset.json";
import rooftop from "@/assets/voices-rooftop.jpg.asset.json";
import conference from "@/assets/voices-token2049.jpg.asset.json";

export const communityArtwork = portrait.url;
export const communitySnapshots = [
  { image: conference.url, label: "Conference conversations" },
  { image: gathering.url, label: "Around the community table" },
  { image: planning.url, label: "Building together" },
  { image: panel.url, label: "Sharing the stage" },
  { image: rooftop.url, label: "Beyond the event" },
];
export type CommunityRecord = {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  points: string[];
  metrics: { value: string; label: string }[];
  sample: boolean;
  link?: { label: string; href: string } | undefined;
  quote?: string | undefined;
};
export const communityShelf: CommunityRecord[] = shelf.map((item, index) => {
  const role = roles.find((record) => record.id === item.spot);
  const event = events.find((record) => record.id === item.spot);
  const points =
    item.spot === "dora"
      ? [
          "Built fellowship programs for the next generation of creators and builders.",
          "Onboarded 1,500+ yappers.",
          "Collaborated with 40+ global partners.",
          "Taking Web3 to Tier 2 and Tier 3 cities.",
        ]
      : (role?.did ?? role?.highlights ?? (event?.story ? [event.story] : [item.tip]));
  const highlights = role?.highlights ?? [];
  const metrics =
    item.spot === "dora"
      ? [
          { value: "1,500+", label: "yappers onboarded" },
          { value: "40+", label: "global partners" },
          { value: "30+", label: "university roadshow" },
        ]
      : highlights.map((text) => {
          const match = text.match(/^(~?[\d,.]+(?:K|x|%|\+)?)(.*)$/i);
          return match?.[1]
            ? { value: match[1], label: match[2]?.trim() ?? text }
            : { value: "↗", label: text };
        });
  return {
    id: `community-${index}`,
    name: item.name,
    role: item.tip,
    period:
      role?.years ?? event?.date ?? (item.spot === "dora" ? "2025 — present" : "Community network"),
    description: item.spot === "dora" ? dora.text : (role?.desc ?? event?.story ?? item.tip),
    points,
    metrics: metrics.slice(0, 6),
    sample: Boolean(role?.sample || event?.sample),
    link: item.spot === "dora" ? { label: "Visit DoraDAO", href: dora.url } : role?.links?.[0],
    quote: item.spot === "dora" ? dora.quote : undefined,
  };
});
