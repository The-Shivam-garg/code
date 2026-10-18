import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { VOICE_DWELL_MS, VOICE_PROMPT_SESSION_KEY, voiceForSection } from "@/data/voice-prompts";
import type { Voice } from "@/data/voices";

export function VoicePrompt({ enabled }: { enabled: boolean }) {
  const [voice, setVoice] = useState<Voice | null>(null);
  const [opened, setOpened] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!enabled || finished || voice) return;
    try {
      if (sessionStorage.getItem(VOICE_PROMPT_SESSION_KEY)) return;
    } catch {
      /* Storage is optional. */
    }
    let section = "";
    let started = Date.now();
    const timer = window.setInterval(() => {
      if (
        document.hidden ||
        document.querySelector('[role="dialog"]:not([aria-hidden="true"]):not([inert])')
      ) {
        section = "";
        started = Date.now();
        return;
      }
      const element = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
      const current = element?.closest("section[id]")?.id ?? "";
      const candidate = voiceForSection(current);
      if (!candidate || current !== section) {
        section = current;
        started = Date.now();
        return;
      }
      if (Date.now() - started < VOICE_DWELL_MS) return;
      setVoice(candidate);
      try {
        sessionStorage.setItem(VOICE_PROMPT_SESSION_KEY, "1");
      } catch {
        /* Still limited to once per mount. */
      }
      window.clearInterval(timer);
    }, 500);
    return () => window.clearInterval(timer);
  }, [enabled, finished, voice]);

  const dismiss = () => {
    setOpened(false);
    setVoice(null);
    setFinished(true);
  };
  useEffect(() => {
    if (!voice || opened) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVoice(null);
        setFinished(true);
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [voice, opened]);

  if (!voice || !enabled) return null;
  return (
    <>
      {!opened && (
        <aside className="voice-prompt" aria-label="A testimonial for Shivam">
          <Button variant="ghost" className="voice-prompt-story" onClick={() => setOpened(true)}>
            <img src={voice.image} alt="" width="52" height="52" decoding="async" />
            <span>
              See what <strong>{voice.name}</strong> has to say about Shivam.
              <ArrowUpRight aria-hidden />
            </span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="voice-prompt-close"
            aria-label="Dismiss testimonial suggestion"
            title="Dismiss"
            onClick={dismiss}
          >
            <X />
          </Button>
        </aside>
      )}
      <Dialog
        open={opened}
        onOpenChange={(open) => {
          if (!open) dismiss();
        }}
      >
        <DialogContent className="voice-prompt-dialog">
          <img src={voice.image} alt="" width="64" height="64" />
          <DialogTitle>{voice.name} on Shivam</DialogTitle>
          <DialogDescription>
            {voice.role}
            {voice.sample ? " · Sample testimonial; identity and quote await confirmation." : ""}
          </DialogDescription>
          <blockquote>“{voice.quote}”</blockquote>
        </DialogContent>
      </Dialog>
    </>
  );
}
