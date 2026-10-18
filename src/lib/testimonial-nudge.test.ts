import { describe, expect, it } from "vitest";
import { canShowTestimonialNudge } from "./testimonial-nudge";
describe("section testimonial prompt", () => {
  it("only appears while a section is visible", () => {
    expect(canShowTestimonialNudge(false, false, false)).toBe(false);
    expect(canShowTestimonialNudge(true, false, false)).toBe(true);
  });
  it("does not interrupt an open dialog or a hidden page", () => {
    expect(canShowTestimonialNudge(true, true, false)).toBe(false);
  });
  it("stays dismissed for the current page visit", () => {
    expect(canShowTestimonialNudge(true, false, true)).toBe(false);
  });
});
