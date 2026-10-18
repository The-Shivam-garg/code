import { useRef, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Heart,
  Loader2,
  MessageSquare,
  Mic,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NoteRecorder } from "@/components/trail/NoteRecorder";
import { supabase } from "@/integrations/supabase/client";
import { mediaExtension, noteSchema, relationships } from "@/lib/note-schema";
import { submitNote } from "@/lib/notes.functions";
import photo from "@/assets/voices-table.jpg.asset.json";

export const Route = createFileRoute("/leave-a-note")({
  head: () => ({
    meta: [
      { title: "Leave a little story — Shivam Garg" },
      {
        name: "description",
        content:
          "Met Shivam or worked together? Share your story in a message, voice note or video.",
      },
      { property: "og:title", content: "Leave a little story — Shivam Garg" },
      {
        property: "og:description",
        content:
          "A place for memories, honest words and familiar voices. Leave Shivam a message, voice note or video.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeaveANote,
});

function LeaveANote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] =
    useState<(typeof relationships)[number]>("Worked together");
  const [message, setMessage] = useState("");
  const [audio, setAudio] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const id = useRef("");
  const uploaded = useRef<{
    audio?: { file: File; path: string };
    video?: { file: File; path: string };
  }>({});
  const sendNote = useServerFn(submitNote);

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (event.currentTarget.querySelector('[data-recording="true"]')) {
      setError("Stop your recording before sending your story.");
      return;
    }
    if (!consent) {
      setError("Please confirm that you are happy to share your story privately.");
      return;
    }
    if (!id.current) id.current = crypto.randomUUID();
    try {
      const paths = {
        audio_path: audio ? `${id.current}/audio.${mediaExtension(audio, "audio")}` : null,
        video_path: video ? `${id.current}/video.${mediaExtension(video, "video")}` : null,
      };
      const data = noteSchema.parse({
        id: id.current,
        name,
        email: email.trim() || null,
        relationship,
        message,
        ...paths,
        consent,
      });
      setBusy(true);
      for (const kind of ["audio", "video"] as const) {
        const file = kind === "audio" ? audio : video;
        const path = paths[`${kind}_path`];
        if (!file || !path) continue;
        if (uploaded.current[kind]?.file === file) continue;
        // New attachments after a failed send get a fresh submission folder.
        if (uploaded.current[kind])
          throw new Error(
            "An attachment changed after uploading. Refresh the page before sending a different recording.",
          );
        setStatus(`Uploading your ${kind === "audio" ? "voice note" : "video"}…`);
        const { error: uploadError } = await supabase.storage
          .from("voice-submissions")
          .upload(path, file, { contentType: file.type, upsert: false });
        if (uploadError)
          throw new Error(
            "Your recording could not upload. Check your connection and try again; your draft is still here.",
          );
        uploaded.current[kind] = { file, path };
      }
      setStatus("Sending your story…");
      const result = await sendNote({ data });
      if (result.received) {
        setSent(true);
        setAudio(null);
        setVideo(null);
      }
    } catch (err) {
      if (err && typeof err === "object" && "issues" in err)
        setError("Please add your name and a message or recording, and check your email address.");
      else
        setError(
          err instanceof Error ? err.message : "Your story could not be sent. Please try again.",
        );
    } finally {
      setBusy(false);
      setStatus("");
    }
  }

  return (
    <main className="note-page">
      <nav className="note-nav" aria-label="Page navigation">
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeft />
            Back to the trail
          </Link>
        </Button>
        <span>
          Shivam Garg <span aria-hidden>↗</span>
        </span>
      </nav>
      <div className="note-page-grid">
        <aside className="note-intro">
          <span className="note-overline">THE PEOPLE MAKE THE STORY</span>
          <h1>
            Leave a <br />
            little <em>story.</em>
          </h1>
          <p>
            Ever met Shivam? Worked together?
            <br />
            Some of the best chapters are the ones we share.
          </p>
          <figure className="note-memory">
            <img
              src={photo.url}
              alt="People gathered around a community table"
              width="600"
              height="400"
              decoding="async"
            />
            <figcaption>Different places. Same conversations.</figcaption>
          </figure>
          <div className="note-margin">
            <Heart aria-hidden />
            <span>
              No perfect words needed.
              <br />
              Just yours.
            </span>
          </div>
        </aside>
        {sent ? (
          <section className="note-success" aria-live="polite">
            <span className="note-success-icon">
              <Check />
            </span>
            <p className="note-overline">A LITTLE STORY, WELL RECEIVED</p>
            <h2>
              Thank you for
              <br />
              being part of <em>it.</em>
            </h2>
            <p>
              Your story has been received privately. It won’t appear on the website without your
              permission.
            </p>
            <Button className="note-send" asChild>
              <Link to="/">
                Back to the trail
                <ArrowUpRight />
              </Link>
            </Button>
          </section>
        ) : (
          <form className="note-form" onSubmit={send}>
            <header>
              <div className="note-format-icons" aria-hidden>
                <MessageSquare />
                <Mic />
                <Video />
              </div>
              <h2>Your side of the story.</h2>
              <p>A message, a voice note, a video — or all three.</p>
            </header>
            <fieldset disabled={busy}>
              <div className="note-fields">
                <label htmlFor="note-name">
                  Your name
                  <Input
                    id="note-name"
                    required
                    autoComplete="name"
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="What should we call you?"
                  />
                </label>
                <label htmlFor="note-email">
                  Email <span>(optional)</span>
                  <Input
                    id="note-email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="For a little thank-you"
                  />
                </label>
              </div>
              <label className="note-relationship">
                How do you know Shivam?
                <Select
                  value={relationship}
                  onValueChange={(v) => {
                    const option = relationships.find((r) => r === v);
                    if (option) setRelationship(option);
                  }}
                  disabled={busy}
                >
                  <SelectTrigger aria-label="How do you know Shivam?">
                    <SelectValue>{relationship}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {relationships.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </label>
              <label htmlFor="note-message" className="note-message-label">
                <span>
                  <MessageSquare aria-hidden />A few words{" "}
                  <small>Optional if you add a recording</small>
                </span>
                <Textarea
                  id="note-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={5000}
                  rows={5}
                  placeholder="A memory, something we built together, or what it was like working with Shivam…"
                />
              </label>
              <div className="note-media-grid">
                <NoteRecorder
                  kind="audio"
                  file={audio}
                  onChange={(file) => {
                    if (uploaded.current.audio || uploaded.current.video) {
                      id.current = "";
                      uploaded.current = {};
                    }
                    setAudio(file);
                  }}
                  disabled={busy}
                />
                <NoteRecorder
                  kind="video"
                  file={video}
                  onChange={(file) => {
                    if (uploaded.current.audio || uploaded.current.video) {
                      id.current = "";
                      uploaded.current = {};
                    }
                    setVideo(file);
                  }}
                  disabled={busy}
                />
              </div>
              <label className="note-consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  I’m happy to share this story privately with Shivam. Please ask me before
                  publishing it.
                </span>
              </label>
            </fieldset>
            {error && (
              <p className="note-error" role="alert">
                {error}
              </p>
            )}
            <div className="note-submit-row">
              <span>
                For Shivam.
                <br />
                From you, with a little heart.
              </span>
              <Button className="note-send" type="submit" disabled={busy}>
                {busy ? <Loader2 className="animate-spin" /> : <ArrowUpRight />}
                {busy ? "Sending…" : "Send your story"}
              </Button>
            </div>
            <p className="note-status" role="status">
              {status}
            </p>
          </form>
        )}
      </div>
      <footer className="note-footer">Good people. Shared chapters. An open internet.</footer>
    </main>
  );
}
