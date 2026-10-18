import { describe, expect, it } from "vitest";
import { shouldShowLanguageHint } from "./language-hint";

describe("first-arrival language hint", () => {
  it("welcomes a visitor who has not chosen a language", () => {
    expect(shouldShowLanguageHint(null, null)).toBe(true);
  });
  it("stays dismissed on later visits", () => {
    expect(shouldShowLanguageHint(null, "true")).toBe(false);
  });
  it("does not prompt visitors who already chose their language", () => {
    expect(shouldShowLanguageHint("hi", null)).toBe(false);
  });
});
