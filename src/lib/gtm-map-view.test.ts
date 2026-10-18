import { describe, expect, it } from "vitest";
import { fitMapPoints, mapLocations, MAP_VIEW } from "./gtm-map-view";
import { gtmCountrySquares } from "./gtm-showcase";
describe("GTM map framing and location zoom", () => {
  it("includes every world square with a margin", () => {
    for (const point of gtmCountrySquares) {
      expect(point.x).toBeGreaterThan(MAP_VIEW.x);
      expect(point.y).toBeGreaterThan(MAP_VIEW.y);
      expect(point.x + 4).toBeLessThan(MAP_VIEW.x + MAP_VIEW.width);
      expect(point.y + 4).toBeLessThan(MAP_VIEW.y + MAP_VIEW.height);
    }
  });
  it("supports region, country, state and city selection", () => {
    for (const [label, kind] of [
      ["Asia", "Region"],
      ["India", "Country"],
      ["Tamil Nadu", "State"],
      ["London", "City"],
    ])
      expect(mapLocations.find((item) => item.label === label)?.kind).toBe(kind);
  });
  it("centers a city and magnifies its dots", () => {
    const t = fitMapPoints([{ x: 500, y: 150 }]);
    expect(t.k).toBe(24);
    expect(t.x + 502 * t.k).toBe(MAP_VIEW.x + MAP_VIEW.width / 2);
    expect(t.y + 152 * t.k).toBe(MAP_VIEW.y + MAP_VIEW.height / 2);
  });
});
