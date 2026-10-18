import { describe, expect, it } from "vitest";
import { languages, validLanguage, translateText } from "./languages";

describe("visitor languages", () => {
  it("offers the requested eight languages", () => {
    expect(languages.map((item) => item.code)).toEqual([
      "en",
      "es",
      "fr",
      "de",
      "hi",
      "zh-CN",
      "ms",
      "ko",
    ]);
  });
  it("retains a recognized visitor choice", () => {
    expect(validLanguage("hi")).toBe("hi");
    expect(validLanguage("zh-CN")).toBe("zh-CN");
    expect(validLanguage("unknown")).toBe("en");
  });
  it("preserves brands and figures in dynamic content", () => {
    expect(translateText("DoraDAO · Communities · 200+", { Communities: "समुदाय" })).toBe(
      "DoraDAO · समुदाय · 200+",
    );
  });
});
