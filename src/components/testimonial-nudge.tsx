import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/components/language-provider";
import {
  canShowTestimonialNudge,
  TESTIMONIAL_DWELL_MS,
  testimonialNudge,
  nudgeCopy,
} from "@/lib/testimonial-nudge";
import avatar from "@/assets/avatar-1.webp.asset.json";
import "./testimonial-nudge.css";

export function TestimonialNudge() {
  const { language } = useLanguage();
  const copy = nudgeCopy[language] ?? nudgeCopy["en"];
  const [visible, setVisible] = useState(false);
  const [preview, setPreview] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let current: Element | null = null;
    let dismissed = false;
    const sections = [...document.querySelectorAll("section")].filter(
      (section) => !section.parentElement?.closest("section"),
    );
    const clear = () => {
      clearTimeout(timer);
      timer = undefined;
    };
    const blocked = () =>
      document.visibilityState !== "visible" ||
      Boolean(document.querySelector('[role="dialog"], [role="menu"]'));
    const update = () => {
      const middle = window.innerHeight / 2;
      const next =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= middle && rect.bottom > middle;
        }) ?? null;
      if (next !== current || blocked() || dismissed) {
        clear();
        setVisible(false);
        current = next;
      }
      if (timer || !canShowTestimonialNudge(Boolean(next), blocked(), dismissed)) return;
      timer = setTimeout(() => {
        if (!canShowTestimonialNudge(Boolean(current), blocked(), dismissed)) {
          clear();
          return;
        }
        setVisible(true);
      }, TESTIMONIAL_DWELL_MS);
    };
    const dismiss = () => {
      dismissed = true;
      clear();
      setVisible(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("testimonial-nudge-dismiss", dismiss);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("keydown", escape);
    document.addEventListener("visibilitychange", update);
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    update();
    return () => {
      clear();
      observer.disconnect();
      window.removeEventListener("testimonial-nudge-dismiss", dismiss);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("keydown", escape);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  const dismiss = () => window.dispatchEvent(new Event("testimonial-nudge-dismiss"));
  const visit = () => {
    dismiss();
    const target = document.querySelector(testimonialNudge.target);
    if (target)
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    else setPreview(true);
  };
  if (!copy) return null;
  return (
    <>
      {visible && (
        <aside className="testimonial-nudge" aria-label={copy.sample}>
          <Button variant="ghost" className="testimonial-nudge-link" onClick={visit}>
            <span className="testimonial-nudge-avatar">
              <span aria-hidden="true">A</span>
              <img
                src={avatar.url}
                alt=""
                width="44"
                height="44"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.hidden = true;
                }}
              />
            </span>
            <span className="testimonial-nudge-copy">
              <small>{copy.sample}</small>
              <span>{copy.line.replace("{name}", testimonialNudge.name)}</span>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="testimonial-nudge-close"
            aria-label={copy.close}
            title={copy.close}
            onClick={dismiss}
          >
            <X />
          </Button>
        </aside>
      )}
      <Dialog open={preview} onOpenChange={setPreview}>
        <DialogContent>
          <DialogTitle>{copy.sample}</DialogTitle>
          <DialogDescription>{copy.preview}</DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
