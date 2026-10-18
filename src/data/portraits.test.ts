import { describe, expect, it } from "vitest";
import { portraits, museumMetrics } from "./portraits";
import { museumLayouts } from "./museum-layout";
describe("museum wall", () => {
  it("places exactly three frames on the opening wall", () => {
    expect(museumLayouts[0]?.end).toBe(3);
    expect(museumLayouts[0]?.placements).toHaveLength(3);
  });
  it("keeps every wall to six frames at most without duplicating portraits", () => {
    const groups = museumLayouts.map((layout) => portraits.slice(layout.start, layout.end));
    expect(groups.map((group) => group.length)).toEqual([3, 5, 4]);
    expect(groups.every((group) => group.length <= 6)).toBe(true);
    expect(groups.flat().map((item) => item.number)).toEqual(portraits.map((item) => item.number));
  });
  it("shows twelve numbered portraits", () => {
    expect(portraits.map((item) => item.number)).toEqual([
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ]);
  });
  it("preserves six reference impact values", () => {
    expect(museumMetrics.map((item) => `${item.value}${item.suffix}`)).toEqual([
      "20+",
      "50K+",
      "200+",
      "40+",
      "500+",
      "5M+",
    ]);
  });
});
