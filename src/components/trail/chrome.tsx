import { useEffect, useRef, useState } from "react";
import { BookOpen, X } from "lucide-react";
import { menuItems, site, stops } from "@/data/trail";
import { useJourney } from "./journey";
import { Button } from "@/components/ui/button";

export function TopBar({ onMenu }: { onMenu: () => void }) {
  const { current, travel } = useJourney();
  const btn =
    "min-h-11 px-2 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline";
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div className="zine-nav pointer-events-auto mx-auto flex min-h-12 max-w-content items-center justify-between gap-3 rounded-full bg-foreground px-2 text-background shadow-lg backdrop-blur md:px-3">
        <Button
          variant="ghost"
          onClick={() => travel("gate")}
          className="h-10 rounded-full px-3 font-display text-lg font-semibold text-background hover:bg-background/10 hover:text-background"
        >
          <span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-signpost font-sans text-xs text-foreground">
            SG
          </span>
          <span className="hidden sm:inline">Shivam Garg</span>
        </Button>
        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
        >
          {menuItems.map((item) => (
            <button
              key={item.target}
              onClick={() => travel(item.target)}
              aria-current={stops[current]?.id === item.target ? "page" : undefined}
              className={`${btn} rounded-full px-3 text-background/70 hover:text-background aria-[current=page]:bg-background/15 aria-[current=page]:text-background`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <a
            href={site.cvUrl}
            download
            className={`${btn} hidden text-background/70 sm:inline-flex sm:items-center`}
          >
            CV
          </a>
          <button
            onClick={onMenu}
            className={`${btn} text-background lg:hidden`}
            aria-haspopup="dialog"
          >
            Menu
          </button>
          <Button
            asChild
            className="ml-1 h-9 rounded-full bg-signpost px-4 text-xs font-semibold text-foreground shadow-none hover:bg-trail"
          >
            <a
              href="https://www.linkedin.com/in/meshivamgarg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s connect ↗
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Switch({ label, on, set }: { label: string; on: boolean; set: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => set(!on)}
      className="flex min-h-11 items-center gap-3 text-base"
    >
      <span
        className={`relative h-6 w-11 rounded-full transition-colors ${on ? "bg-trail" : "bg-muted-foreground/40"}`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-paper transition-transform ${on ? "translate-x-6" : "translate-x-1"}`}
        />
      </span>
      {label}: {on ? "on" : "off"}
    </button>
  );
}

export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const j = useJourney();
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open, onClose]);
  const currentId = stops[j.current]!.id;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      inert={!open}
      style={{ clipPath: open ? "circle(150% at 95% 2rem)" : "circle(0% at 95% 2rem)" }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-night text-paper transition-[clip-path] duration-700 ease-in-out"
    >
      <div className="mx-auto grid max-w-[90rem] gap-12 px-6 py-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="flex h-12 items-center justify-between lg:col-span-2">
            <span className="font-display text-2xl">Shivam</span>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center"
            >
              <X />
            </button>
          </div>
          <ol className="mt-8 space-y-1">
            {menuItems.map((m, i) => (
              <li key={m.label}>
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => j.travel(m.target), 300);
                  }}
                  className={`group flex items-baseline gap-4 py-1 text-left font-display text-5xl tracking-tight transition-colors md:text-7xl ${m.target === currentId ? "text-trail" : "hover:text-trail"}`}
                >
                  <span className="font-mono text-sm opacity-60">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  {m.label}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-3 lg:pt-24">
          <p className="label-xs opacity-60">The Trail</p>
          <p className="max-w-xs font-display text-3xl leading-tight">
            Not just a portfolio. A timeline of belief.
          </p>
          <a href={site.cvUrl} download className="mt-6 inline-block min-h-11 border-b py-2">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export function RailMinimap() {
  const { current, stamps, travel } = useJourney();
  return (
    <nav
      aria-label="Trail stops"
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {stops.map((s, i) => (
        <button
          key={s.id}
          onClick={() => travel(s.id)}
          aria-label={`Travel to ${s.name}`}
          aria-current={i === current ? "step" : undefined}
          className="group relative flex h-5 w-5 items-center justify-center"
        >
          <span
            className={`block rounded-full transition-all ${i === current ? "h-3.5 w-3.5 bg-trail" : stamps.has(i) ? "h-2.5 w-2.5 bg-foreground" : "h-2.5 w-2.5 border border-foreground/50"}`}
          />
          <span className="label-xs pointer-events-none absolute right-7 whitespace-nowrap bg-foreground px-2 py-1 text-background opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {s.name}
          </span>
        </button>
      ))}
    </nav>
  );
}

function Stamp({
  label,
  name,
  earned,
  i,
  onClick,
}: {
  label: string;
  name: string;
  earned: boolean;
  i: number;
  onClick?: () => void;
}) {
  const { reduce } = useJourney();
  return (
    <button
      onClick={onClick}
      disabled={earned}
      aria-label={earned ? `${name}: ${label}` : `${name}: not yet visited. Travel there`}
      style={{
        ["--rot" as string]: `${((i * 37) % 17) - 8}deg`,
        transform: `rotate(${((i * 37) % 17) - 8}deg)`,
      }}
      className={`flex aspect-square flex-col items-center justify-center rounded-full p-2 text-center font-mono ${earned ? `border-[3px] border-double border-trail-ink text-trail-ink ${reduce ? "" : "animate-thump"}` : "border-2 border-dashed border-muted-foreground/50 text-muted-foreground hover:border-foreground"}`}
    >
      <span className="text-[0.6rem] uppercase tracking-widest">{name}</span>
      <span className="mt-1 text-[0.7rem] font-bold uppercase leading-tight">
        {earned ? label : "Not yet visited"}
      </span>
      {earned && <span className="mt-1 text-[0.55rem] opacity-70">2026 · STOP {i}</span>}
    </button>
  );
}

export function Passport() {
  const { stamps, travel, konami, reduce, play } = useJourney();
  const [open, setOpen] = useState(false);
  const [visa, setVisa] = useState(false);
  const shown = useRef(false);
  const all = stamps.size === stops.length;
  useEffect(() => {
    if (all && !shown.current) {
      shown.current = true;
      setVisa(true);
      play("crackle");
    }
  }, [all, play]);
  useEffect(() => {
    if (!open && !visa) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setVisa(false);
      }
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [open, visa]);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Passport: ${stamps.size} of 9 stamps`}
        className="fixed bottom-4 right-4 z-40 flex min-h-11 items-center gap-2 border-2 border-foreground bg-paper px-3 py-2 font-mono text-sm text-foreground shadow-[3px_3px_0_var(--color-foreground)]"
      >
        <BookOpen className="h-4 w-4" /> {stamps.size} / 9
      </button>
      <p className="sr-only" aria-live="polite">
        {stamps.size} of 9 stamps earned
      </p>
      {open && (
        <div
          className="fixed inset-0 z-[70] flex justify-end bg-foreground/40"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Your passport"
            onClick={(e) => e.stopPropagation()}
            className="h-full w-full max-w-md overflow-y-auto bg-paper p-6 text-foreground"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl">Passport</h2>
              <button
                autoFocus
                onClick={() => setOpen(false)}
                aria-label="Close passport"
                className="h-11 w-11"
              >
                <X className="mx-auto" />
              </button>
            </div>
            <p className="label-xs mt-1 text-muted-foreground">
              The Trail of Belief · {stamps.size} / 9
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stops.map((s, i) => (
                <Stamp
                  key={s.id}
                  i={i}
                  name={s.name}
                  label={s.stamp}
                  earned={stamps.has(i)}
                  onClick={() => {
                    setOpen(false);
                    travel(s.id);
                  }}
                />
              ))}
            </div>
            {all && (
              <p className="mt-8 rotate-[-4deg] border-4 border-double border-trail-ink p-3 text-center font-mono text-2xl font-bold text-trail-ink">
                VISA APPROVED
              </p>
            )}
            {konami && (
              <div className="mt-6 w-32">
                <Stamp i={9} name="Hidden" label="Yapper of the day" earned />
              </div>
            )}
          </div>
        </div>
      )}
      {visa && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/50 p-4">
          {!reduce && <Confetti />}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Visa approved"
            className="relative max-w-md bg-paper p-8 text-center text-foreground"
          >
            <p className="mx-auto w-fit rotate-[-6deg] animate-thump border-4 border-double border-trail-ink px-4 py-2 font-mono text-3xl font-bold text-trail-ink">
              VISA APPROVED
            </p>
            <p className="mt-6 font-display text-3xl">
              You made it. Thanks for walking the whole trail.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href={site.cvUrl}
                download
                className="min-h-11 border-2 border-foreground px-4 py-2"
              >
                Download CV
              </a>
              <button
                autoFocus
                onClick={() => {
                  setVisa(false);
                  travel("basecamp");
                }}
                className="min-h-11 bg-foreground px-4 py-2 text-background"
              >
                Say hi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: 40 }, (_, i) => (
        <span
          key={i}
          className="absolute top-0 h-3 w-1.5"
          style={{
            left: `${(i * 53) % 100}%`,
            background: i % 3 ? "var(--color-trail)" : "var(--color-signpost)",
            animation: `rain ${2 + (i % 5) * 0.4}s linear ${(i % 7) * 0.15}s forwards`,
            transform: `rotate(${i * 30}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export function GuideBubble() {
  const { guide, setGuide, current, guideOverride, plain } = useJourney();
  if (!guide || plain) return null;
  const line = guideOverride ?? stops[current]!.guide;
  return (
    <aside
      aria-live="polite"
      aria-label="Trail guide"
      className="fixed bottom-4 left-4 z-40 hidden max-w-[17rem] border-2 border-foreground bg-paper p-3 pr-8 text-sm text-foreground shadow-[3px_3px_0_var(--color-foreground)] sm:block"
    >
      <p className="label-xs text-trail-ink">Trail guide</p>
      <p key={line} className="mt-1 animate-in fade-in duration-500">
        {line}
      </p>
      <button
        onClick={() => setGuide(false)}
        aria-label="Turn the guide off"
        className="absolute right-1 top-1 h-7 w-7"
      >
        <X className="mx-auto h-3.5 w-3.5" />
      </button>
    </aside>
  );
}

export function Sky() {
  const { current, plain } = useJourney();
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 transition-colors duration-1000"
      style={{ background: plain ? "var(--color-paper)" : "var(--color-stage)" }}
    >
      {!plain &&
        current === 5 &&
        Array.from({ length: 50 }, (_, i) => (
          <span
            key={i}
            className="absolute h-0.5 w-0.5 animate-twinkle rounded-full bg-paper"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 90}%`,
              animationDelay: `${(i % 9) * 0.3}s`,
            }}
          />
        ))}
    </div>
  );
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [fine, setFine] = useState(false);
  const { plain } = useJourney();
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    setFine(true);
    const mv = (e: PointerEvent) => {
      if (dot.current) dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const t = (e.target as HTMLElement).closest?.(
        "[data-cursor], a, button",
      ) as HTMLElement | null;
      setLabel(t ? (t.dataset["cursor"] ?? "") : null);
    };
    addEventListener("pointermove", mv);
    return () => removeEventListener("pointermove", mv);
  }, []);
  if (!fine || plain) return null;
  return (
    <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[90]">
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${label !== null ? "flex h-14 w-14 items-center justify-center border-2 border-trail" : "h-2.5 w-2.5 bg-trail"}`}
      >
        {label && <span className="label-xs text-trail-ink">{label}</span>}
      </div>
    </div>
  );
}

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
export function EasterEggs() {
  const { setKonami, reduce, say } = useJourney();
  const [rain, setRain] = useState(false);
  useEffect(() => {
    let typed = "";
    let k = 0;
    const on = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      typed = (typed + e.key.toLowerCase()).slice(-3);
      if (typed === "yap") {
        setRain(true);
        setTimeout(() => setRain(false), 3000);
      }
      k = e.key === KONAMI[k] ? k + 1 : e.key === KONAMI[0] ? 1 : 0;
      if (k === KONAMI.length) {
        k = 0;
        setKonami(true);
        say("Secret stamp unlocked: Yapper of the day. Check your passport.");
      }
    };
    addEventListener("keydown", on);
    return () => removeEventListener("keydown", on);
  }, [setKonami, say]);
  if (!rain || reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[85] overflow-hidden">
      {Array.from({ length: 30 }, (_, i) => (
        <span
          key={i}
          className="absolute top-0 text-3xl"
          style={{
            left: `${(i * 41) % 100}%`,
            animation: `rain ${1.5 + (i % 4) * 0.4}s linear ${(i % 6) * 0.2}s forwards`,
          }}
        >
          💬
        </span>
      ))}
    </div>
  );
}

export function Autopilot() {
  const { autopilot, setAutopilot, current, travel } = useJourney();
  const cur = useRef(current);
  cur.current = current;
  useEffect(() => {
    if (!autopilot) return;
    const stop = () => setAutopilot(false);
    const id = setInterval(() => {
      const n = cur.current + 1;
      if (n >= stops.length) return stop();
      travel(stops[n]!.id);
    }, 4500);
    const t = setTimeout(() => {
      addEventListener("wheel", stop, { once: true });
      addEventListener("keydown", stop, { once: true });
      addEventListener("pointerdown", stop, { once: true });
      addEventListener("touchmove", stop, { once: true });
    }, 300);
    return () => {
      clearInterval(id);
      clearTimeout(t);
      removeEventListener("wheel", stop);
      removeEventListener("keydown", stop);
      removeEventListener("pointerdown", stop);
      removeEventListener("touchmove", stop);
    };
  }, [autopilot, setAutopilot, travel]);
  return null;
}

export { OpeningBeat } from "./AvocadoLoader";
