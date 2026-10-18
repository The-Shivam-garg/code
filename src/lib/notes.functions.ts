import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { noteSchema } from "./note-schema";

export const submitNote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => noteSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) throw new Error("Submissions are temporarily unavailable. Please try again.");
    const client = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`)
            headers.delete("Authorization");
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });
    const { error } = await client.from("voice_submissions").insert(data);
    // A repeated ID is a retry of the same submission, not another note.
    if (error && error.code !== "23505")
      throw new Error("Your note could not be sent. Please try again; your draft is still here.");
    return { received: true, id: data.id };
  });
