import { describe, expect, it } from "vitest";
import { museumOpeningScreens } from "./museum-opening";
import { portraits } from "@/data/portraits";
describe("reference television impact", () => {
  it.each(["5M+", "100K+", "60K+", "1M+", "1500+", "40+", "10L+", "30+"])(
    "preserves the reference value %s",
    (value) => {
      expect(museumOpeningScreens.filter((screen) => screen.value === value)).toHaveLength(1);
    },
  );
  it("opens an existing record for every television", () => {
    expect(museumOpeningScreens.every((screen) => portraits[screen.record] !== undefined)).toBe(
      true,
    );
  });
});
