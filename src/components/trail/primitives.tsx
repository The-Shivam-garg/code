import { useEffect, useRef, useState, type ReactNode } from "react";
import { Image as ImageIcon } from "lucide-react";
import { useInView, useJourney } from "./journey";

/** Duotone paper panel standing in for a real photo; pass src later with no layout change. */
export function PlaceholderImage({
  src,
  caption,
  className = "",
  tone = 0,
  alt,
}: {
  src?: string | undefined;
  caption: string;
  className?: string;
  tone?: number;
  alt?: string;
}) {
  if (src)
    return (
      <img src={src} alt={alt ?? caption} loading="lazy" className={`object-cover ${className}`} />
    );
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${caption}`}
      data-sample
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden p-4 text-center text-muted-foreground ${className}`}
      style={{ background: `linear-gradient(135deg, var(--sky-${tone % 9}), var(--color-muted))` }}
    >
      <ImageIcon className="h-6 w-6 opacity-60" aria-hidden />
      <span className="font-script text-lg leading-tight">{caption}</span>
    </div>
  );
}

export function Sample({
  on,
  children,
  className = "",
}: {
  on?: boolean | undefined;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span data-sample={on ? "" : undefined} className={className}>
      {children}
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${seen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

export function StopHeading({ n, kicker, title }: { n: number; kicker: string; title: ReactNode }) {
  return (
    <header className="section-heading relative mb-12">
      <span className="inline-block rounded-full bg-muted px-4 py-1.5 label-xs text-trail-ink">
        Chapter {n} · {kicker}
      </span>
      <p className="mt-5 font-script text-2xl text-trail-ink">A page from the trail</p>
      <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
        {title}
      </h2>
      <svg viewBox="0 0 240 18" className="mt-3 h-4 w-60 text-trail" aria-hidden>
        <path
          d="M2 11 C48 3 96 16 148 8 S210 4 238 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </header>
  );
}

export function FilterWords({
  items,
  value,
  onChange,
  label,
}: {
  items: string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-2 text-sm"
    >
      {items.map((i) => (
        <button
          key={i}
          aria-pressed={value === i}
          onClick={() => onChange(i)}
          className={`min-h-10 shrink-0 snap-start rounded-full border px-4 transition-all ${value === i ? "border-foreground bg-foreground text-background" : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:text-foreground"}`}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

/** Wooden-sign quote planted on the trail; types itself in as it enters view. */
export function Signpost({ text, tilt = -1.5 }: { text: string; tilt?: number }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  const { reduce } = useJourney();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduce) {
      setN(text.length);
      return;
    }
    const id = setInterval(
      () => setN((v) => (v >= text.length ? (clearInterval(id), v) : v + 1)),
      28,
    );
    return () => clearInterval(id);
  }, [seen, reduce, text.length]);
  return (
    <div ref={ref} className="relative mx-auto my-24 max-w-3xl px-6">
      <div
        className="absolute left-1/2 top-full h-16 w-2 -translate-x-1/2 bg-foreground/70"
        aria-hidden
      />
      <blockquote
        style={{ transform: `rotate(${tilt}deg)` }}
        className="paper-note relative border-2 border-clay/80 px-8 py-7 text-foreground"
      >
        <span className="sr-only">{text}</span>
        <p aria-hidden className="font-display text-2xl leading-snug md:text-4xl">
          {text.slice(0, n)}
          <span className={n < text.length ? "opacity-100" : "opacity-0"}>|</span>
        </p>
      </blockquote>
    </div>
  );
}

/** Oversized numeral: press and hold (or hold Enter) to reveal the human detail. */
export function HoldNumber({ n, label, detail }: { n: string; label: string; detail: string }) {
  const [p, setP] = useState(0);
  const [shown, setShown] = useState(false);
  const raf = useRef(0);
  const start = useRef(0);
  const { play } = useJourney();
  const begin = () => {
    if (shown) {
      setShown(false);
      setP(0);
      return;
    }
    start.current = performance.now();
    const tick = (t: number) => {
      const v = Math.min(1, (t - start.current) / 700);
      setP(v);
      if (v < 1) raf.current = requestAnimationFrame(tick);
      else {
        setShown(true);
        play("click");
      }
    };
    raf.current = requestAnimationFrame(tick);
  };
  const end = () => {
    cancelAnimationFrame(raf.current);
    if (!shown) setP(0);
  };
  return (
    <div className="border-t py-5">
      <button
        onPointerDown={begin}
        onPointerUp={end}
        onPointerLeave={end}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
            e.preventDefault();
            begin();
          }
        }}
        onKeyUp={end}
        aria-expanded={shown}
        aria-label={`${n} ${label}. Hold to reveal the story`}
        data-cursor="hold"
        className="group flex w-full select-none items-start gap-4 text-left [touch-action:manipulation]"
      >
        <svg viewBox="0 0 36 36" className="mt-3 h-7 w-7 shrink-0 -rotate-90" aria-hidden>
          <circle cx="18" cy="18" r="15" fill="none" stroke="var(--color-border)" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="var(--color-trail)"
            strokeWidth="3"
            strokeDasharray="94.2"
            strokeDashoffset={94.2 * (1 - (shown ? 1 : p))}
          />
        </svg>
        <span>
          <span className="block font-display text-6xl leading-none tracking-tight md:text-7xl">
            {n}
          </span>
          <span className="mt-1 block text-muted-foreground">{label}</span>
        </span>
      </button>
      <p
        aria-live="polite"
        className={`overflow-hidden pl-11 font-script text-2xl text-trail-ink transition-all duration-500 ${shown ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {shown ? detail : ""}
      </p>
    </div>
  );
}

/** Counts the first number inside a string like "200,000+" once it scrolls into view. */
export function CountText({ value }: { value: string }) {
  const [ref, seen] = useInView<HTMLSpanElement>();
  const { reduce } = useJourney();
  const m = value.match(/[\d,.]+/);
  const target = m ? parseFloat(m[0].replace(/,/g, "")) : 0;
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen || !m) return;
    if (reduce) {
      setV(target);
      return;
    }
    const s = performance.now();
    let r = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - s) / 1400);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) r = requestAnimationFrame(tick);
    };
    r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [seen, reduce, target, m]);
  if (!m) return <span ref={ref}>{value}</span>;
  const dec = m[0].includes(".") ? 1 : 0;
  const shown = seen ? (dec ? v.toFixed(1) : Math.round(v).toLocaleString("en-US")) : "0";
  return (
    <span ref={ref} aria-label={value}>
      {value.slice(0, m.index)}
      {shown}
      {value.slice((m.index ?? 0) + m[0].length)}
    </span>
  );
}

/** Flat hand-drawn hills behind a stop; the three layers drift at different speeds. */
export function Hills({
  tone = "var(--color-trail)",
  flip = false,
}: {
  tone?: string;
  flip?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const { reduce, plain } = useJourney();
  useEffect(() => {
    if (reduce || plain) return;
    const el = ref.current;
    if (!el) return;
    let r = 0;
    const on = () => {
      cancelAnimationFrame(r);
      r = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const k = (rect.top - window.innerHeight / 2) / window.innerHeight;
        el.querySelectorAll<SVGPathElement>("[data-depth]").forEach((p) => {
          p.style.transform = `translateY(${k * Number(p.dataset["depth"]) * 40}px)`;
        });
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(r);
    };
  }, [reduce, plain]);
  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full md:h-56 ${flip ? "-scale-x-100" : ""}`}
      aria-hidden
    >
      <path
        data-depth="3"
        d="M0 120 C200 60 380 140 560 100 S900 40 1100 90 1360 70 1440 80 V220 H0Z"
        fill={tone}
        opacity="0.12"
      />
      <path
        data-depth="2"
        d="M0 160 C240 110 420 180 640 140 S1000 100 1200 150 1400 130 1440 140 V220 H0Z"
        fill={tone}
        opacity="0.18"
      />
      <path
        data-depth="1"
        d="M0 190 C300 160 520 210 760 180 S1180 160 1440 185 V220 H0Z"
        fill={tone}
        opacity="0.26"
      />
    </svg>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      data-cursor="open"
      className={`underline decoration-trail decoration-2 underline-offset-4 hover:text-trail-ink ${className}`}
    >
      {children}
    </a>
  );
}
