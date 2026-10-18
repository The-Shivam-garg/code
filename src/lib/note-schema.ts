import { z } from "zod";

export const relationships = [
  "Worked together",
  "Met in the community",
  "Built together",
  "Something else",
] as const;
export const MAX_MEDIA_BYTES = 50 * 1024 * 1024;
export const noteSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string().trim().min(1, "Please add your name.").max(100),
    email: z.string().trim().email().max(254).nullable(),
    relationship: z.enum(relationships),
    message: z.string().trim().max(5000),
    audio_path: z.string().nullable(),
    video_path: z.string().nullable(),
    consent: z.literal(true),
  })
  .superRefine((value, ctx) => {
    if (!value.message && !value.audio_path && !value.video_path)
      ctx.addIssue({
        code: "custom",
        message: "Leave a message, voice note, or video.",
        path: ["message"],
      });
    for (const kind of ["audio", "video"] as const) {
      const path = value[`${kind}_path`];
      const extensions = kind === "audio" ? "webm|mp4|ogg|mp3|wav|m4a" : "webm|mp4|mov";
      if (path && !new RegExp(`^${value.id}/${kind}\\.(${extensions})$`).test(path))
        ctx.addIssue({
          code: "custom",
          message: "Invalid recording attachment.",
          path: [`${kind}_path`],
        });
    }
  });
export type NoteSubmission = z.infer<typeof noteSchema>;
export function mediaExtension(
  file: Pick<File, "type" | "name" | "size">,
  kind: "audio" | "video",
) {
  if (!file.size || file.size > MAX_MEDIA_BYTES)
    throw new Error("Choose a recording smaller than 50 MB.");
  const allowed: Record<string, string> =
    kind === "audio"
      ? {
          "audio/webm": "webm",
          "audio/ogg": "ogg",
          "audio/mpeg": "mp3",
          "audio/wav": "wav",
          "audio/x-wav": "wav",
          "audio/mp4": "m4a",
          "audio/x-m4a": "m4a",
        }
      : { "video/webm": "webm", "video/mp4": "mp4", "video/quicktime": "mov" };
  const extension = allowed[file.type.split(";")[0] ?? ""];
  if (!extension) throw new Error(`Choose a supported ${kind} recording.`);
  return extension;
}
