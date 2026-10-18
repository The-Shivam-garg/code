import { describe, expect, it } from "vitest";
import {
  workCompanies,
  helaMetrics,
  companyMetrics,
  impactMetrics,
  getWorkHighlights,
} from "./work-history";

describe("Reference work history", () => {
  it("preserves all seven company roles and periods from the reference", () => {
    expect(workCompanies.map(({ name, role, dates }) => ({ name, role, dates }))).toEqual([
      { name: "HeLa Labs", role: "DevRel Lead", dates: "2025 – 2026" },
      { name: "Socrates Global", role: "Head of Ecosystem", dates: "2024 – Present" },
      { name: "Nexus Chain", role: "Chief Ecosystem Officer", dates: "2024 – Present" },
      { name: "DoraDAO", role: "Co-founder", dates: "2024 – Present" },
      { name: "Zoth", role: "Community Builder", dates: "2024 – 2025" },
      { name: "SpecOps / DDS", role: "Ops & Community", dates: "2024 – 2025" },
      { name: "Various Projects", role: "Contributor", dates: "2021 – Present" },
    ]);
  });
  it("preserves the five HeLa activity counts", () => {
    expect(helaMetrics.map((metric) => metric.value)).toEqual(["500+", "15+", "20+", "5+", "500+"]);
  });
  it("provides twelve overall impact counts for the moving metrics strip", () => {
    expect(impactMetrics.map((metric) => metric.value)).toEqual([
      "50+",
      "250K+",
      "1,200+",
      "80+",
      "5K+",
      "50M+",
      "30+",
      "12+",
      "80+",
      "25+",
      "150+",
      "100+",
    ]);
  });
  it("expands company metrics with the existing workshop and developer reach figures", () => {
    expect(companyMetrics).toHaveLength(7);
    expect(companyMetrics.slice(5)).toEqual([
      { value: "30+", label: "Workshops & Talks" },
      { value: "10,000+", label: "Developers Reached" },
    ]);
  });
  it("filters highlights by category and restores every item with no filter", () => {
    expect(getWorkHighlights("Community").map((item) => item.title)).toEqual(["GDG Core Team"]);
    expect(getWorkHighlights("Events").map((item) => item.title)).toEqual([
      "Build What’s Next",
      "Campus Hackathon",
    ]);
    expect(getWorkHighlights(null)).toHaveLength(3);
    expect(getWorkHighlights("missing")).toHaveLength(0);
  });
});
