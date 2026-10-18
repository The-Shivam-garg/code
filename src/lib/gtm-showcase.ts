import northAmerica from "@/assets/gtm/region-north-america-photo.webp.asset.json";
import europe from "@/assets/gtm/region-europe-photo.webp.asset.json";
import asia from "@/assets/gtm/region-asia-photo.webp.asset.json";
import africa from "@/assets/gtm/region-africa-photo.webp.asset.json";
import oceania from "@/assets/gtm/region-oceania-photo.webp.asset.json";
import countrySquares from "@/assets/gtm-country-squares.json";

export type ActivityStatus = "active" | "planned" | "connect";
export const activityStatuses = [
  { id: "active", label: "Active Community" },
  { id: "planned", label: "Planning" },
  { id: "connect", label: "Love to Connect" },
] as const;
export const gtmSummary = [
  { value: "50+", label: "Countries" },
  { value: "120+", label: "Active Communities" },
  { value: "10K+", label: "Community Members" },
] as const;
export const indiaMetrics = { communities: "20+", members: "2.5K+", events: "12+" } as const;
const highlightedCountries = new Set([
  "SG",
  "ID",
  "CN",
  "US",
  "GB",
  "CA",
  "RU",
  "PH",
  "JP",
  "KR",
  "CH",
]);
export type CountrySquare = {
  x: number;
  y: number;
  code: string;
  country: string;
  state: string | null;
  lon: number;
  lat: number;
  region: GtmRegion["id"];
  status: ActivityStatus | null;
};
function stableHash(value: string) {
  return [...value].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7);
}
export function activityStatusForLocation(
  code: string,
  state: string | null,
  lon: number,
  lat: number,
): ActivityStatus | null {
  if (code === "IN") {
    const activeStates = [
      "Jammu and Kashmir",
      "Himachal Pradesh",
      "Punjab",
      "Chandigarh",
      "Haryana",
      "Delhi",
      "Uttaranchal",
      "Uttarakhand",
      "Uttar Pradesh",
      "Tamil Nadu",
      "Kerala",
      "Karnataka",
      "Andhra Pradesh",
      "Telangana",
      "Puducherry",
      "Pondicherry",
      "Lakshadweep",
    ];
    if (state ? activeStates.includes(state) : (lat >= 25 && lon < 83) || lat <= 18)
      return "active";
    return stableHash(state ?? `${Math.round(lon)}-${Math.round(lat)}`) % 2 === 0
      ? "planned"
      : "connect";
  }
  const inAfrica = lon > -20 && lon < 52 && lat > -36 && lat < 37;
  if (!highlightedCountries.has(code) && !inAfrica) return null;
  return (
    (["active", "planned", "connect"] as const)[
      stableHash(`${code}-${Math.floor(lon / 8)}-${Math.floor(lat / 8)}`) % 3
    ] ?? "connect"
  );
}
export function geographicRegion(code: string, lon: number, lat: number): GtmRegion["id"] {
  if (lon < -30) return lat < 13 ? "south-america" : "north-america";
  if (lon > 110 && lat < -10) return "oceania";
  if (lon > -20 && lon < 52 && lat < 37 && code !== "TR" && code !== "CY") return "africa";
  if (lon < 45 && lat >= 35) return "europe";
  return "asia";
}
export const gtmCountrySquares: CountrySquare[] = countrySquares.flatMap((point) => {
  const [x, y, code, country, state, lon, lat] = point;
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    typeof code !== "string" ||
    typeof country !== "string" ||
    typeof lon !== "number" ||
    typeof lat !== "number"
  )
    return [];
  const stateName = typeof state === "string" ? state : null;
  return [
    {
      x,
      y,
      code,
      country,
      state: stateName,
      lon,
      lat,
      region: geographicRegion(code, lon, lat),
      status: activityStatusForLocation(code, stateName, lon, lat),
    },
  ];
});

export type MarketFactor = { label: string; value: string };
export type RegionResource = {
  label: string;
  kind: "Document" | "Case Study" | "Blog";
  url: string;
};
export const gtmRegions = [
  {
    id: "north-america",
    label: "North America",
    image: northAmerica.url,
    description:
      "A hub for builders, innovators and early adopters. From hackathons to industry events.",
    factors: [
      { label: "Partner Communities", value: "12+" },
      { label: "Entry Ease", value: "88%" },
      { label: "Time to Launch", value: "2–4 wks" },
    ] as MarketFactor[],
    resources: [
      { label: "Market Entry Playbook", kind: "Document", url: "#" },
      { label: "Hackathon Case Study", kind: "Case Study", url: "#" },
      { label: "Ecosystem Notes", kind: "Blog", url: "#" },
    ] as RegionResource[],
    responsibilities: [
      "Connect builders and early adopters through local meetups.",
      "Coordinate hackathons and industry events with ecosystem partners.",
      "Turn community feedback into opportunities for product advocacy.",
    ],
  },
  {
    id: "europe",
    label: "Europe",
    image: europe.url,
    description:
      "Collaborating with universities, protocols and communities to drive open innovation.",
    factors: [
      { label: "Partner Communities", value: "10+" },
      { label: "Entry Ease", value: "76%" },
      { label: "Time to Launch", value: "4–6 wks" },
    ] as MarketFactor[],
    resources: [
      { label: "University Partnership Guide", kind: "Document", url: "#" },
      { label: "Fellowship Case Study", kind: "Case Study", url: "#" },
      { label: "Open Innovation Blog", kind: "Blog", url: "#" },
    ] as RegionResource[],
    responsibilities: [
      "Build relationships with universities and protocol communities.",
      "Organize workshops, fellowships and community calls.",
      "Support open innovation through cross-community collaboration.",
    ],
  },
  {
    id: "asia",
    label: "Asia",
    image: asia.url,
    description: "A rapidly growing region with vibrant developer and creator communities.",
    factors: [
      { label: "Partner Communities", value: "15+" },
      { label: "Entry Ease", value: "92%" },
      { label: "Time to Launch", value: "1–3 wks" },
    ] as MarketFactor[],
    resources: [
      { label: "Campus Program Kit", kind: "Document", url: "#" },
      { label: "Dev Community Case Study", kind: "Case Study", url: "#" },
      { label: "Growth Market Blog", kind: "Blog", url: "#" },
    ] as RegionResource[],
    responsibilities: [
      "Activate campus programs for developers and creators.",
      "Bring builders together through hackathons and meetups.",
      "Support local community leaders and ecosystem partnerships.",
    ],
  },
  {
    id: "africa",
    label: "Africa",
    image: africa.url,
    description: "Empowering local communities through education, access and collaboration.",
    factors: [
      { label: "Partner Communities", value: "8+" },
      { label: "Entry Ease", value: "70%" },
      { label: "Time to Launch", value: "4–8 wks" },
    ] as MarketFactor[],
    resources: [
      { label: "Builder Program Guide", kind: "Document", url: "#" },
      { label: "Education Access Case Study", kind: "Case Study", url: "#" },
      { label: "Emerging Markets Blog", kind: "Blog", url: "#" },
    ] as RegionResource[],
    responsibilities: [
      "Expand access to developer education and resources.",
      "Coordinate workshops and builder programs with local leaders.",
      "Create collaboration opportunities across emerging communities.",
    ],
  },
  {
    id: "oceania",
    label: "Oceania",
    image: oceania.url,
    description: "Connecting with a growing community of builders and researchers.",
    factors: [
      { label: "Partner Communities", value: "5+" },
      { label: "Entry Ease", value: "81%" },
      { label: "Time to Launch", value: "3–5 wks" },
    ] as MarketFactor[],
    resources: [
      { label: "Research Partnership Brief", kind: "Document", url: "#" },
      { label: "Community Case Study", kind: "Case Study", url: "#" },
      { label: "Regional Insights Blog", kind: "Blog", url: "#" },
    ] as RegionResource[],
    responsibilities: [
      "Connect builders and researchers through community meetups.",
      "Encourage knowledge sharing and research collaborations.",
      "Build partnerships that strengthen the regional ecosystem.",
    ],
  },
  {
    id: "south-america",
    label: "South America",
    image: null,
    description: "Regional highlights are coming soon.",
    factors: [] as MarketFactor[],
    resources: [] as RegionResource[],
    responsibilities: [],
  },
] as const;
export type GtmRegion = (typeof gtmRegions)[number];
export type GtmRegionFilter = "all" | GtmRegion["id"];
export function filterGtmRegions(filter: GtmRegionFilter) {
  return filter === "all"
    ? gtmRegions.filter((region) => region.image !== null)
    : gtmRegions.filter((region) => region.id === filter);
}
export function mapRegionForPoint(x: number, y: number): GtmRegion["id"] {
  if (x < 305) return y > 165 ? "south-america" : "north-america";
  if (x > 700 && y > 230) return "oceania";
  if (x < 530 && y > 130) return "africa";
  if (x < 545 && y <= 130) return "europe";
  return "asia";
}
