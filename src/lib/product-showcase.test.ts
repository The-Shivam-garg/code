import { describe, expect, it } from "vitest";
import { nextShowcaseIndex, productChapters, showcaseProjects } from "./product-showcase";
import { getCaseStudySegment, getProductStudy } from "./product-case-studies";
describe("product showcase", () => {
  it("includes all eight case study chapters", () => {
    expect(productChapters).toEqual([
      "Overview",
      "User persona",
      "Problem",
      "Before / after",
      "UI mockups",
      "Research & insights",
      "Decisions",
      "Outcomes",
    ]);
  });
  it("includes the four reference projects", () => {
    expect(showcaseProjects.map((project) => project.name)).toEqual([
      "DoraDAO",
      "Nexus Chain",
      "HeLa Labs",
      "Magic Hat",
    ]);
  });
  it("cycles through Rapido and all four projects in both directions", () => {
    expect(nextShowcaseIndex(0, -1)).toBe(4);
    expect(nextShowcaseIndex(4, 1)).toBe(0);
    expect(nextShowcaseIndex(2, 1)).toBe(3);
  });
  it.each(["Rapido", "DoraDAO", "Nexus Chain", "HeLa Labs", "Magic Hat"])(
    "%s follows the same eight-segment contract",
    (name) => {
      const project = showcaseProjects.find((item) => item.name === name) ?? null;
      const study = getProductStudy(project);
      expect(productChapters.map((_, index) => getCaseStudySegment(index).layout)).toEqual([
        "comparison",
        "persona",
        "insights",
        "comparison",
        "mockups",
        "insights",
        "insights",
        "insights",
      ]);
      expect(study.options).toHaveLength(3);
      expect(study.needs.length).toBeGreaterThanOrEqual(3);
      expect(study.pains.length).toBeGreaterThanOrEqual(3);
      for (const index of [2, 5, 6, 7] as const) {
        expect(study.chapters[index].items).toHaveLength(3);
      }
    },
  );
  it("keeps audience and preview choices product-specific", () => {
    expect(getProductStudy(showcaseProjects[0]).options).toEqual([
      "Fellowship Programs",
      "Community",
      "Partners",
    ]);
    expect(getProductStudy(showcaseProjects[1]).options).toEqual([
      "Builders",
      "Ecosystem Apps",
      "Community",
    ]);
    expect(getProductStudy(showcaseProjects[2]).options).toEqual([
      "Products",
      "Community",
      "Partners",
    ]);
    expect(getProductStudy(showcaseProjects[3]).options).toEqual([
      "Creators",
      "Communities",
      "Referral Bonus",
    ]);
  });
});
