import { describe, expect, it } from "vitest";
import {
  activityStatusForLocation,
  filterGtmRegions,
  gtmCountrySquares,
  gtmRegions,
  gtmSummary,
  indiaMetrics,
  mapRegionForPoint,
} from "./gtm-showcase";
describe("Regional GTM reference", () => {
  it("keeps northern India green", () => {
    expect(activityStatusForLocation("IN", "Punjab", 75, 31)).toBe("active");
  });
  it("keeps southern India green", () => {
    expect(activityStatusForLocation("IN", "Tamil Nadu", 79, 11)).toBe("active");
  });
  it("uses only orange or pink for central India", () => {
    expect(["planned", "connect"]).toContain(
      activityStatusForLocation("IN", "Madhya Pradesh", 78, 22),
    );
  });
  it("uses only orange or pink for eastern India", () => {
    expect(["planned", "connect"]).toContain(activityStatusForLocation("IN", "Assam", 92, 26));
  });
  it("uses only orange or pink for western India", () => {
    expect(["planned", "connect"]).toContain(activityStatusForLocation("IN", "Rajasthan", 73, 27));
  });
  it("keeps illustrative country colors stable and in the requested palette", () => {
    for (const code of ["SG", "ID", "CN", "US", "GB", "CA", "RU", "PH", "JP", "KR", "CH"]) {
      expect(["active", "planned", "connect"]).toContain(
        activityStatusForLocation(code, null, 90, 40),
      );
      expect(activityStatusForLocation(code, null, 90, 40)).toBe(
        activityStatusForLocation(code, null, 90, 40),
      );
    }
  });
  it("preserves the dashboard summary counts", () => {
    expect(gtmSummary.map((item) => item.value)).toEqual(["50+", "120+", "10K+"]);
  });
  it("preserves India reference counts", () => {
    expect(indiaMetrics).toEqual({ communities: "20+", members: "2.5K+", events: "12+" });
  });
  it("provides country identification and Indian states for live squares", () => {
    expect(gtmCountrySquares.length).toBeGreaterThan(3000);
    expect(
      gtmCountrySquares.some((square) => square.code === "IN" && square.state === "Tamil Nadu"),
    ).toBe(true);
    expect(gtmCountrySquares.every((square) => square.country.length > 0)).toBe(true);
  });
  it("keeps the five visible regions and all six region filters", () => {
    expect(filterGtmRegions("all").map((item) => item.label)).toEqual([
      "North America",
      "Europe",
      "Asia",
      "Africa",
      "Oceania",
    ]);
    expect(gtmRegions).toHaveLength(6);
    expect(filterGtmRegions("asia").map((item) => item.label)).toEqual(["Asia"]);
  });
  it.each([
    ["north-america", "12+", "88%"],
    ["europe", "10+", "76%"],
    ["asia", "15+", "92%"],
    ["africa", "8+", "70%"],
    ["oceania", "5+", "81%"],
  ])("shows %s market-entry factors", (id, communities, entryEase) => {
    const region = gtmRegions.find((item) => item.id === id);
    expect(region?.factors.map((factor) => factor.label)).toEqual([
      "Partner Communities",
      "Entry Ease",
      "Time to Launch",
    ]);
    expect([region?.factors[0]?.value, region?.factors[1]?.value]).toEqual([
      communities,
      entryEase,
    ]);
  });
  it("links every visible region to a document, case study and blog", () => {
    for (const region of filterGtmRegions("all")) {
      expect(region.resources.map((resource) => resource.kind)).toEqual([
        "Document",
        "Case Study",
        "Blog",
      ]);
      expect(region.resources.every((resource) => typeof resource.url === "string")).toBe(true);
    }
  });
  it("maps geographical points to their own regions", () => {
    expect(mapRegionForPoint(150, 100)).toBe("north-america");
    expect(mapRegionForPoint(380, 80)).toBe("europe");
    expect(mapRegionForPoint(630, 160)).toBe("asia");
    expect(mapRegionForPoint(430, 190)).toBe("africa");
    expect(mapRegionForPoint(780, 260)).toBe("oceania");
    expect(mapRegionForPoint(220, 230)).toBe("south-america");
  });
});
