import { describe, expect, it } from "vitest";
import { hero, menuItems, stops } from "@/data/trail";
import { referenceFooter } from "@/data/footer";

describe("Requested chapter removals", () => {
  it.each(["kitchen", "trailhead", "camps"])(
    "excludes removed %s from the journey and navigation",
    (id) => {
      expect(stops.some((stop) => stop.id === id)).toBe(false);
      expect(menuItems.some((item) => item.target === id)).toBe(false);
      expect(referenceFooter.navigation.some((item) => item.target === id)).toBe(false);
    },
  );
  it("keeps only the five remaining journey stops", () => {
    expect(stops.map((stop) => stop.id)).toEqual([
      "gate",
      "village",
      "night",
      "postcards",
      "basecamp",
    ]);
  });
  it("keeps proof destinations in retained sections", () => {
    expect(hero.proof.map((item) => item.target)).toEqual([
      "village",
      "village",
      "village",
      "products",
    ]);
  });
});
