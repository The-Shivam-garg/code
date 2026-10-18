import { describe, expect, it } from "vitest";
import { noteSchema } from "@/lib/note-schema";

const base = {
  id: "b2cab10f-4e21-431a-b04e-29f724921f0d",
  name: "A community friend",
  email: null,
  relationship: "Worked together",
  message: "",
  audio_path: null,
  video_path: null,
  consent: true,
};
describe("visitor stories", () => {
  it("accepts a written message", () => {
    expect(
      noteSchema.safeParse({ ...base, message: "We built a community together." }).success,
    ).toBe(true);
  });
  it("accepts a voice note without a written message", () => {
    expect(noteSchema.safeParse({ ...base, audio_path: `${base.id}/audio.webm` }).success).toBe(
      true,
    );
  });
  it("accepts a video without a written message", () => {
    expect(noteSchema.safeParse({ ...base, video_path: `${base.id}/video.mp4` }).success).toBe(
      true,
    );
  });
  it("accepts all three formats together", () => {
    expect(
      noteSchema.safeParse({
        ...base,
        message: "A shared memory.",
        audio_path: `${base.id}/audio.webm`,
        video_path: `${base.id}/video.webm`,
      }).success,
    ).toBe(true);
  });
  it("rejects an empty submission", () => {
    expect(noteSchema.safeParse(base).success).toBe(false);
  });
  it("rejects recordings belonging to another submission", () => {
    expect(
      noteSchema.safeParse({
        ...base,
        audio_path: "a7553846-2096-4a1c-a559-22f6f8c1a890/audio.webm",
      }).success,
    ).toBe(false);
  });
  it("requires consent before saving a story", () => {
    expect(noteSchema.safeParse({ ...base, message: "A memory.", consent: false }).success).toBe(
      false,
    );
  });
});
