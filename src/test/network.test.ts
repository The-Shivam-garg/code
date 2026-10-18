import { describe, expect, it } from "vitest";
import { isLowBandwidth } from "@/lib/network";

describe("low-bandwidth detection", () => {
  it("treats data-saver as low bandwidth", () =>
    expect(isLowBandwidth({ saveData: true, effectiveType: "4g" })).toBe(true));
  it("treats 2G and slow-2G as low bandwidth", () => {
    expect(isLowBandwidth({ effectiveType: "2g" })).toBe(true);
    expect(isLowBandwidth({ effectiveType: "slow-2g" })).toBe(true);
  });
  it("keeps full experience on 4G or unknown connections", () => {
    expect(isLowBandwidth({ effectiveType: "4g" })).toBe(false);
    expect(isLowBandwidth(undefined)).toBe(false);
  });
});
