import img01 from "@/assets/hooman-img-01.jpg.asset.json";
import img02 from "@/assets/hooman-img-02.jpg.asset.json";
import img03 from "@/assets/hooman-img-03.jpg.asset.json";
import img04 from "@/assets/hooman-img-04.jpg.asset.json";
import img05 from "@/assets/hooman-img-05.jpg.asset.json";
import img06 from "@/assets/hooman-img-06.jpg.asset.json";
import img07 from "@/assets/hooman-img-07.jpg.asset.json";
import img08 from "@/assets/hooman-img-08.jpg.asset.json";
import img09 from "@/assets/hooman-img-09.jpg.asset.json";
import img10 from "@/assets/hooman-img-10.jpg.asset.json";
import img11 from "@/assets/hooman-img-11.jpg.asset.json";
import img12 from "@/assets/hooman-img-12.jpg.asset.json";
import img13 from "@/assets/hooman-img-13.jpg.asset.json";
import img14 from "@/assets/hooman-img-14.jpg.asset.json";
import img15 from "@/assets/hooman-img-15.jpg.asset.json";
import img16 from "@/assets/hooman-img-16.jpg.asset.json";
import img17 from "@/assets/hooman-img-17.jpg.asset.json";
import img18 from "@/assets/hooman-img-18.jpg.asset.json";
import img19 from "@/assets/hooman-img-19.jpg.asset.json";

export type Doodle =
  "arrow" | "mountain" | "palm" | "underline" | "leaf" | "people" | "speech" | "sun" | "globe";
export type Coordinates = { left: number; top: number; width: number };
export type HoomanItem = {
  id: string;
  src: string;
  alt: string;
  phase: number;
  enterAt: number;
  desktop: Coordinates;
  mobile: Coordinates;
  rotate: number;
  depth: number;
  z: number;
  width: number;
  height: number;
  finalist: boolean;
};
export const hoomanCopy = {
  eyebrow: "THINGS THAT MAKE ME",
  label: "Things that make me hooman",
  sentence: "Things that make me hooman: curious, hopeful, rooted, fair, connected.",
  scroll: "scroll",
  finalCaption: "Same planet. More chances for everyone.",
};
export const hoomanPhases = ["curious.", "hopeful.", "rooted.", "fair.", "connected.", "hooman."];
export const phaseStarts = [0.08, 0.24, 0.4, 0.55, 0.69, 0.83];
export const hoomanValues = [
  [
    { text: "People", phase: 4 },
    { text: "Purpose", phase: 6 },
    { text: "Nature", phase: 3 },
    { text: "Curiosity", phase: 1 },
    { text: "Equal Opportunities", phase: 4 },
  ],
  [
    { text: "Communities", phase: 5 },
    { text: "Culture", phase: 5 },
    { text: "Learning", phase: 2 },
    { text: "A Kinder Internet", phase: 5 },
  ],
];
export const hoomanItems: HoomanItem[] = [
  {
    id: "img-06",
    src: img06.url,
    alt: "Traveller on a rooftop in a white city",
    phase: 1,
    enterAt: 0.08,
    desktop: { left: 86.5, top: 15.7, width: 7.7 },
    mobile: { left: 4, top: 4, width: 40 },
    rotate: 0,
    depth: 0.8,
    z: 1,
    width: 139,
    height: 183,
    finalist: true,
  },
  {
    id: "img-08",
    src: img08.url,
    alt: "Hiker on a mountain ridge",
    phase: 1,
    enterAt: 0.092,
    desktop: { left: 25.4, top: 28.9, width: 6.4 },
    mobile: { left: 56, top: 4, width: 40 },
    rotate: 0,
    depth: 1.2,
    z: 3,
    width: 113,
    height: 169,
    finalist: false,
  },
  {
    id: "img-07",
    src: img07.url,
    alt: "Small vertical street scene",
    phase: 1,
    enterAt: 0.104,
    desktop: { left: 22.1, top: 20.9, width: 4.5 },
    mobile: { left: 4, top: 14, width: 40 },
    rotate: 0,
    depth: 1.0,
    z: 2,
    width: 80,
    height: 152,
    finalist: false,
  },
  {
    id: "img-03",
    src: img03.url,
    alt: "Island harbour with a boat",
    phase: 1,
    enterAt: 0.116,
    desktop: { left: 49.4, top: 3, width: 9.9 },
    mobile: { left: 56, top: 14, width: 40 },
    rotate: 0.6,
    depth: 1.2,
    z: 1,
    width: 173,
    height: 191,
    finalist: false,
  },
  {
    id: "img-01",
    src: img01.url,
    alt: "Smiling child in a classroom",
    phase: 2,
    enterAt: 0.24,
    desktop: { left: 8.2, top: 6.7, width: 12.8 },
    mobile: { left: 56, top: 4, width: 40 },
    rotate: 0,
    depth: 0.8,
    z: 1,
    width: 228,
    height: 155,
    finalist: true,
  },
  {
    id: "img-02",
    src: img02.url,
    alt: "Teacher sitting with children on the floor",
    phase: 2,
    enterAt: 0.252,
    desktop: { left: 30.7, top: 0, width: 8.7 },
    mobile: { left: 56, top: 4, width: 40 },
    rotate: 0,
    depth: 1.0,
    z: 1,
    width: 154,
    height: 200,
    finalist: false,
  },
  {
    id: "img-14",
    src: img14.url,
    alt: "Girl writing on a chalkboard",
    phase: 2,
    enterAt: 0.264,
    desktop: { left: 65.2, top: 70.7, width: 11.8 },
    mobile: { left: 4, top: 14, width: 40 },
    rotate: 0,
    depth: 1.4,
    z: 2,
    width: 208,
    height: 186,
    finalist: false,
  },
  {
    id: "img-15",
    src: img15.url,
    alt: "Small community portrait",
    phase: 2,
    enterAt: 0.276,
    desktop: { left: 72.9, top: 62.3, width: 2.2 },
    mobile: { left: 56, top: 14, width: 40 },
    rotate: 0,
    depth: 0.6,
    z: 1,
    width: 39,
    height: 73,
    finalist: false,
  },
  {
    id: "img-09",
    src: img09.url,
    alt: "Person planting a sapling",
    phase: 3,
    enterAt: 0.4,
    desktop: { left: 5.8, top: 38.9, width: 10 },
    mobile: { left: 4, top: 14, width: 40 },
    rotate: 0,
    depth: 1.4,
    z: 3,
    width: 168,
    height: 166,
    finalist: true,
  },
  {
    id: "img-10",
    src: img10.url,
    alt: "Child planting",
    phase: 3,
    enterAt: 0.412,
    desktop: { left: 0, top: 48.2, width: 8.1 },
    mobile: { left: 56, top: 4, width: 40 },
    rotate: 0,
    depth: 0.6,
    z: 1,
    width: 143,
    height: 201,
    finalist: false,
  },
  {
    id: "img-11",
    src: img11.url,
    alt: "Small plant close-up",
    phase: 3,
    enterAt: 0.424,
    desktop: { left: 4.2, top: 38.3, width: 4.5 },
    mobile: { left: 4, top: 14, width: 40 },
    rotate: 0,
    depth: 0.8,
    z: 2,
    width: 65,
    height: 43,
    finalist: false,
  },
  {
    id: "img-04",
    src: img04.url,
    alt: "Outdoor group by a lake",
    phase: 3,
    enterAt: 0.436,
    desktop: { left: 79.6, top: 0, width: 5.1 },
    mobile: { left: 56, top: 14, width: 40 },
    rotate: 0,
    depth: 1.4,
    z: 1,
    width: 88,
    height: 88,
    finalist: false,
  },
  {
    id: "img-05",
    src: img05.url,
    alt: "Group of women in conversation",
    phase: 4,
    enterAt: 0.55,
    desktop: { left: 68.4, top: 11.2, width: 10.7 },
    mobile: { left: 56, top: 74, width: 40 },
    rotate: 0,
    depth: 0.6,
    z: 1,
    width: 191,
    height: 140,
    finalist: true,
  },
  {
    id: "img-12",
    src: img12.url,
    alt: "Two hands holding",
    phase: 4,
    enterAt: 0.562,
    desktop: { left: 66.4, top: 41.7, width: 4.5 },
    mobile: { left: 56, top: 69, width: 40 },
    rotate: 0,
    depth: 1.0,
    z: 1,
    width: 81,
    height: 111,
    finalist: false,
  },
  {
    id: "img-17",
    src: img17.url,
    alt: "Volunteers unloading boxes",
    phase: 4,
    enterAt: 0.574,
    desktop: { left: 5.8, top: 78.4, width: 7.3 },
    mobile: { left: 4, top: 74, width: 40 },
    rotate: 0,
    depth: 1.0,
    z: 1,
    width: 127,
    height: 138,
    finalist: false,
  },
  {
    id: "img-13",
    src: img13.url,
    alt: "Group watching a sunset",
    phase: 5,
    enterAt: 0.69,
    desktop: { left: 78.2, top: 42.5, width: 13.6 },
    mobile: { left: 4, top: 79, width: 40 },
    rotate: 0,
    depth: 1.2,
    z: 1,
    width: 242,
    height: 195,
    finalist: true,
  },
  {
    id: "img-16",
    src: img16.url,
    alt: "Group selfie",
    phase: 5,
    enterAt: 0.702,
    desktop: { left: 46.1, top: 74.4, width: 7.3 },
    mobile: { left: 56, top: 69, width: 40 },
    rotate: 0,
    depth: 0.8,
    z: 1,
    width: 129,
    height: 135,
    finalist: false,
  },
  {
    id: "img-18",
    src: img18.url,
    alt: "Backpacker on a cliff above the sea",
    phase: 5,
    enterAt: 0.714,
    desktop: { left: 23.3, top: 67.4, width: 11.6 },
    mobile: { left: 4, top: 74, width: 40 },
    rotate: 0,
    depth: 1.2,
    z: 1,
    width: 205,
    height: 223,
    finalist: false,
  },
  {
    id: "img-19",
    src: img19.url,
    alt: "Person with open arms overlooking a tropical beach",
    phase: 6,
    enterAt: 0.83,
    desktop: { left: 88.1, top: 70.7, width: 11.9 },
    mobile: { left: 56, top: 79, width: 40 },
    rotate: 0,
    depth: 1.4,
    z: 1,
    width: 211,
    height: 207,
    finalist: true,
  },
];
export const hoomanCaptions: {
  text: string;
  phase: number;
  doodle: Doodle;
  desktop: Coordinates;
}[] = [
  {
    text: "Curiosity takes me places.",
    phase: 1,
    doodle: "arrow",
    desktop: { left: 95, top: 17.5, width: 4.8 },
  },
  {
    text: "Different places. Same purpose.",
    phase: 1,
    doodle: "mountain",
    desktop: { left: 25.8, top: 51.7, width: 8 },
  },
  {
    text: "A little island someday?",
    phase: 1,
    doodle: "palm",
    desktop: { left: 60.3, top: 4.6, width: 5.5 },
  },
  {
    text: "Better education brighter tomorrows.",
    phase: 2,
    doodle: "arrow",
    desktop: { left: 2.9, top: 9.6, width: 5 },
  },
  {
    text: "Learning should have no boundaries.",
    phase: 2,
    doodle: "underline",
    desktop: { left: 40.4, top: 8.2, width: 6 },
  },
  {
    text: "Real skills. Real futures.",
    phase: 2,
    doodle: "underline",
    desktop: { left: 61.1, top: 75, width: 4 },
  },
  {
    text: "Greener communities healthier tomorrows.",
    phase: 3,
    doodle: "leaf",
    desktop: { left: 10.3, top: 59.2, width: 8 },
  },
  {
    text: "More women in every room.",
    phase: 4,
    doodle: "underline",
    desktop: { left: 68.7, top: 28.2, width: 8 },
  },
  {
    text: "People first. Always.",
    phase: 4,
    doodle: "underline",
    desktop: { left: 71.8, top: 44.2, width: 5 },
  },
  {
    text: "Less privilege gap. More opportunities.",
    phase: 4,
    doodle: "people",
    desktop: { left: 13.9, top: 79.9, width: 6 },
  },
  {
    text: "Conversations that build communities.",
    phase: 5,
    doodle: "speech",
    desktop: { left: 92.8, top: 46.9, width: 7 },
  },
  {
    text: "A kinder internet. A kinder world.",
    phase: 5,
    doodle: "underline",
    desktop: { left: 36.1, top: 81.4, width: 5 },
  },
  {
    text: "Same planet. More chances for everyone.",
    phase: 6,
    doodle: "underline",
    desktop: { left: 82, top: 81.2, width: 6 },
  },
];
export const doodlePaths: Record<Doodle, string> = {
  arrow: "M5 5Q2 26 34 22M27 17l8 5-8 5",
  mountain: "M2 32L14 10l10 17 7-13 13 18M10 18l4 6 4-5M27 22l4 4 3-3",
  palm: "M22 39l-2-24M20 17Q5 2 3 16M20 17Q10 2 20 3M20 17Q30 1 39 12M20 17Q34 9 40 21",
  underline: "M10 18q13-2 26-1M15 23h16",
  leaf: "M10 37Q1 16 30 3Q35 29 10 37M10 37L27 9M15 27l-3-7M21 17l8-1",
  people:
    "M5 13a3 3 0 1 0 0-6a3 3 0 1 0 0 6M35 13a3 3 0 1 0 0-6a3 3 0 1 0 0 6M1 30l4-15 5 8 10 1 10-1 5-8 5 15M4 25l-2 13M7 25l3 13M33 25l-3 13M36 25l3 13",
  speech: "M8 7Q40 1 39 22Q35 31 18 27l-10 8 2-10Q0 20 8 7M12 17h1M20 17h1M28 17h1",
  sun: "M20 12a8 8 0 1 0 0 16a8 8 0 1 0 0-16M20 1v6M20 33v6M1 20h6M33 20h6M6 6l5 5M29 29l5 5M6 34l5-5M29 11l5-5",
  globe:
    "M20 3a17 17 0 1 0 0 34a17 17 0 1 0 0-34M12 5l1 7-6 4 4 6 6-1 2 6-2 7M24 4l-3 8 8 3-2 6 7 3M23 36l-1-6 5-4",
};
