import { describe, expect, it } from "vitest";
import { ecosystems, filterJourneyItems, journeyFilters, journeyItems } from "./journey";

describe("Journey directory reference content", () => {
  it("keeps seven journey entries and all nine filters", () => {
    expect(journeyItems).toHaveLength(7);
    expect(journeyFilters).toHaveLength(9);
  });

  it("filters the directory by ecosystem category", () => {
    expect(filterJourneyItems("L1 Chain").map((item) => item.name)).toEqual([
      "HeLa Labs",
      "Nexus Chain",
    ]);
    expect(filterJourneyItems("Developer Tools").map((item) => item.name)).toEqual([
      "Various Projects",
    ]);
  });

  it("keeps the fourteen-ecosystem impact strip", () => {
    expect(ecosystems).toHaveLength(14);
  });

  it("gives every community a detailed overview and core responsibilities", () => {
    journeyItems.forEach((item) => {
      expect(item.overview.length).toBeGreaterThan(80);
      expect(item.responsibilities).toHaveLength(4);
      expect(item.outcomes).toHaveLength(3);
    });
  });
});
