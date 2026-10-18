import art1 from "@/assets/museum/portrait-1.webp.asset.json";
import art2 from "@/assets/museum/portrait-2.webp.asset.json";
import art3 from "@/assets/museum/portrait-3.webp.asset.json";
import art4 from "@/assets/museum/portrait-4.webp.asset.json";
import art5 from "@/assets/museum/portrait-5.webp.asset.json";
import art6 from "@/assets/museum/portrait-6.webp.asset.json";
import art7 from "@/assets/museum/portrait-7.webp.asset.json";
import art8 from "@/assets/museum/portrait-8.webp.asset.json";
import art9 from "@/assets/museum/portrait-9.webp.asset.json";
import art10 from "@/assets/museum/portrait-10.webp.asset.json";
import art11 from "@/assets/museum/portrait-11.webp.asset.json";
import art12 from "@/assets/museum/portrait-12.webp.asset.json";

export type Portrait = {
  id: string;
  number: string;
  title: string;
  caption: string;
  imageSrc: string;
  orientation: "landscape" | "portrait";
  wallPosition: { x: number; y: number; width: number };
  stopIndex: number;
  hintLine: string;
  organization: string | null;
  organizationPeriod: string;
  experienceAnchorId: string | null;
  ctaLabel: string;
  story: string;
  tags: string[];
};
export const museumStops = [8, 24, 42, 53, 67, 87] as const;
export const portraits: Portrait[] = [
  {
    id: "explorer",
    number: "01",
    title: "THE EXPLORER",
    caption:
      "New cities, strange roads, and familiar skies. Always up for a plan, a detour, or a last-minute trip.",
    orientation: "landscape",
    wallPosition: { x: 3, y: 8, width: 9 },
    stopIndex: 0,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art1.url,
  },
  {
    id: "cultures",
    number: "02",
    title: "THE CULTURES",
    caption:
      "People, places and stories that make the world feel a little smaller and a lot kinder.",
    orientation: "portrait",
    wallPosition: { x: 12.5, y: 47, width: 6 },
    stopIndex: 0,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art2.url,
  },
  {
    id: "builder",
    number: "03",
    title: "THE BUILDER",
    caption:
      "Ideas, products, communities and a little chaos. Turning curiosity into things that actually matter.",
    orientation: "landscape",
    wallPosition: { x: 20, y: 12, width: 9 },
    stopIndex: 1,
    hintLine: "Draft · A memory to share",
    organization: "DoraDAO",
    organizationPeriod: "Period to be added",
    experienceAnchorId: "experience-dora",
    ctaLabel: "Explore DoraDAO",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art3.url,
  },
  {
    id: "places",
    number: "04",
    title: "THE PLACES",
    caption:
      "From crowded streets to quiet temples, every place teaches me something new about life and people.",
    orientation: "landscape",
    wallPosition: { x: 29, y: 51, width: 7 },
    stopIndex: 1,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art4.url,
  },
  {
    id: "foodie",
    number: "05",
    title: "THE FOODIE",
    caption:
      "Good food, better conversations. Street food, home cooked meals, and the kind of places you remember.",
    orientation: "portrait",
    wallPosition: { x: 36, y: 43, width: 6 },
    stopIndex: 2,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art5.url,
  },
  {
    id: "learner",
    number: "06",
    title: "THE LEARNER",
    caption:
      "Books, ideas, long conversations and random rabbit holes. Always learning, always questioning, always curious.",
    orientation: "landscape",
    wallPosition: { x: 40, y: 7, width: 9 },
    stopIndex: 2,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art6.url,
  },
  {
    id: "traveller",
    number: "07",
    title: "THE TRAVELLER",
    caption:
      "Mountains, cities, beaches or small towns — I just love being somewhere new, collecting memories and perspectives.",
    orientation: "landscape",
    wallPosition: { x: 61, y: 5, width: 9 },
    stopIndex: 4,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art7.url,
  },
  {
    id: "moments",
    number: "08",
    title: "THE MOMENTS",
    caption:
      "Slow mornings, old streets, good coffee, and little moments that make life feel special.",
    orientation: "portrait",
    wallPosition: { x: 70, y: 42, width: 6 },
    stopIndex: 4,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art8.url,
  },
  {
    id: "human",
    number: "09",
    title: "THE HUMAN",
    caption:
      "A little chaotic, very caring. I value meaningful connections, good people and the kind of bonds that feel like home.",
    orientation: "landscape",
    wallPosition: { x: 61, y: 57, width: 9 },
    stopIndex: 4,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art9.url,
  },
  {
    id: "dreamer",
    number: "10",
    title: "THE DREAMER",
    caption:
      "Bigger ideas, bolder possibilities. Always curious about what's next and how we can make a positive impact.",
    orientation: "portrait",
    wallPosition: { x: 83, y: 5, width: 6 },
    stopIndex: 5,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art10.url,
  },
  {
    id: "friend",
    number: "11",
    title: "THE FRIEND",
    caption:
      "Deep talks, silly jokes, late night plans. I cherish the people who make life lighter, louder and better.",
    orientation: "landscape",
    wallPosition: { x: 80, y: 49, width: 9 },
    stopIndex: 5,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art11.url,
  },
  {
    id: "everyday",
    number: "12",
    title: "THE EVERYDAY",
    caption:
      "Cooking, music, movies, walks, gym, chai, and the simple things that keep me grounded.",
    orientation: "landscape",
    wallPosition: { x: 90, y: 43, width: 7 },
    stopIndex: 5,
    hintLine: "Draft · A memory to share",
    organization: null,
    organizationPeriod: "Period to be added",
    experienceAnchorId: null,
    ctaLabel: "Continue the journey",
    story:
      "Sample story — to be replaced with my own memory. I followed my curiosity into something unfamiliar. The people I met changed how I saw the world. What stayed with me was not a milestone, but a small moment. This is where I will share what happened, what challenged me, and what I learned.",
    tags: ["Curiosity", "Connection"],
    imageSrc: art12.url,
  },
];
export function clampStop(index: number) {
  return Math.max(0, Math.min(5, index));
}
export const museumMetrics = [
  { value: 20, suffix: "+", label: "Communities" },
  { value: 50, suffix: "K+", label: "Community Members" },
  { value: 200, suffix: "+", label: "Events & Programs" },
  { value: 40, suffix: "+", label: "Global Partners" },
  { value: 500, suffix: "+", label: "Builders Supported" },
  { value: 5, suffix: "M+", label: "Total Impressions" },
];
