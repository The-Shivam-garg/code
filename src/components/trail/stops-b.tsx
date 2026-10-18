import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import {
  caseStudies,
  chapters,
  companies,
  events,
  gwy,
  roleFilters,
  roles,
  years,
} from "@/data/trail";
import { Stop, useJourney } from "./journey";
import {
  CountText,
  ExternalLink,
  FilterWords,
  Hills,
  PlaceholderImage,
  Sample,
  StopHeading,
} from "./primitives";

function TapNumbers({ text }: { text: string }) {
  const [on, setOn] = useState<Set<number>>(new Set());
  const parts = text.split(/(\d[\d,.]*[%+KkX]*)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^\d/.test(p) ? (
          <button
            key={i}
            onClick={() =>
              setOn((s) => {
                const n = new Set(s);
                if (n.has(i)) {
                  n.delete(i);
                } else {
                  n.add(i);
                }
                return n;
              })
            }
            aria-pressed={on.has(i)}
            className={`rounded px-0.5 font-semibold transition-colors ${on.has(i) ? "bg-trail text-foreground" : "underline decoration-dotted decoration-trail underline-offset-4"}`}
          >
            {p}
          </button>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

export function Trailhead() {
  const { play, travel } = useJourney();
  const [c, setC] = useState(0);
  const sx = useRef<number | null>(null);
  const go = (n: number) => {
    const v = Math.max(0, Math.min(chapters.length - 1, n));
    if (v !== c) {
      setC(v);
      play("page");
    }
  };
  const ch = chapters[c]!;
  return (
    <Stop index={2}>
      <div className="relative mx-auto max-w-content px-6 py-stop md:pl-32">
        <StopHeading n={2} kicker="The Trailhead · About" title="Chapters of a journey" />
        <div className="sticky top-14 z-10 -mx-6 border-y bg-paper/95 px-6 py-3 backdrop-blur">
          <div
            role="tablist"
            aria-label="Chapters"
            className="flex items-center gap-2"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(c + 1);
              if (e.key === "ArrowLeft") go(c - 1);
            }}
          >
            <button
              onClick={() => go(c - 1)}
              aria-label="Previous chapter"
              className="h-11 w-11 shrink-0"
            >
              <ArrowLeft className="mx-auto h-5 w-5" />
            </button>
            <div className="relative flex flex-1 justify-between">
              <div
                className="absolute inset-x-3 top-1/2 border-t-2 border-dashed border-trail"
                aria-hidden
              />
              {chapters.map((x, i) => (
                <button
                  key={x.title}
                  role="tab"
                  aria-selected={i === c}
                  tabIndex={i === c ? 0 : -1}
                  onClick={() => go(i)}
                  aria-label={`Chapter ${i + 1}: ${x.title}`}
                  className={`relative z-10 flex h-11 w-11 items-center justify-center border-2 font-mono text-sm transition-colors ${i === c ? "border-foreground bg-foreground text-background" : i < c ? "border-trail bg-trail text-foreground" : "border-foreground bg-paper"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => go(c + 1)}
              aria-label="Next chapter"
              className="h-11 w-11 shrink-0"
            >
              <ArrowRight className="mx-auto h-5 w-5" />
            </button>
          </div>
        </div>
        <article
          key={c}
          role="tabpanel"
          aria-label={ch.title}
          onPointerDown={(e) => {
            sx.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (sx.current === null) return;
            const d = e.clientX - sx.current;
            sx.current = null;
            if (Math.abs(d) > 60) go(c + (d < 0 ? 1 : -1));
          }}
          className="grid gap-10 pt-12 animate-in fade-in slide-in-from-right-8 duration-500 lg:grid-cols-[3fr_2fr]"
        >
          <div>
            <p className="label-xs text-trail-ink">
              Chapter {c + 1} · {ch.label}
            </p>
            <h3 className="mt-2 font-display text-4xl tracking-tight md:text-6xl">{ch.title}</h3>
            <p className="mt-6 max-w-[64ch] text-lg">{<TapNumbers text={ch.story} />}</p>
            <blockquote className="mt-10 border-l-4 border-trail pl-6 font-display text-3xl italic leading-snug md:text-4xl">
              “{ch.quote}”
            </blockquote>
            {c === chapters.length - 1 && (
              <p className="mt-8 flex gap-6">
                <button
                  onClick={() => travel("village")}
                  className="min-h-11 underline decoration-trail decoration-2 underline-offset-4"
                >
                  Walk to Community →
                </button>
                <button
                  onClick={() => travel("products")}
                  className="min-h-11 underline decoration-trail decoration-2 underline-offset-4"
                >
                  See the Products →
                </button>
              </p>
            )}
          </div>
          <div className="relative space-y-6">
            <p
              className="font-script text-3xl text-trail-ink"
              style={{ transform: "rotate(-4deg)" }}
            >
              {ch.note}
            </p>
            {[0, 1].map((k) => (
              <figure
                key={k}
                className="w-4/5 bg-card p-2 shadow-md"
                style={{ transform: `rotate(${k ? 3 : -2}deg)`, marginLeft: k ? "auto" : 0 }}
              >
                <PlaceholderImage
                  caption={`${ch.title}: photo ${k + 1}`}
                  tone={c + k + 2}
                  className="aspect-[4/3] w-full"
                />
                <figcaption className="font-script text-lg">
                  {k ? "behind the scenes" : ch.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
      </div>
      <Hills />
    </Stop>
  );
}

function Carousel({
  label,
  count = 4,
  tone = 3,
}: {
  label: string;
  count?: number;
  tone?: number;
}) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="relative">
        <PlaceholderImage
          key={i}
          caption={`${label}: event photo ${i + 1}`}
          tone={tone + i}
          className="aspect-[16/9] w-full animate-in fade-in"
        />
        <button
          onClick={() => setI((i - 1 + count) % count)}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 h-11 w-11 -translate-y-1/2 bg-paper/80"
        >
          <ArrowLeft className="mx-auto h-4 w-4" />
        </button>
        <button
          onClick={() => setI((i + 1) % count)}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 h-11 w-11 -translate-y-1/2 bg-paper/80"
        >
          <ArrowRight className="mx-auto h-4 w-4" />
        </button>
      </div>
      <div className="mt-2 flex gap-2">
        {Array.from({ length: count }, (_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Photo ${k + 1}`}
            aria-current={k === i}
            className={`h-12 w-16 border-2 ${k === i ? "border-trail" : "border-transparent opacity-60"}`}
          >
            <PlaceholderImage
              caption=""
              tone={tone + k}
              className="h-full w-full !p-0 [&>*]:hidden"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function CaseOverlay({
  index,
  onClose,
  onGo,
}: {
  index: number;
  onClose: () => void;
  onGo: (n: number) => void;
}) {
  const cs = caseStudies[index]!;
  const ref = useRef<HTMLDivElement>(null);
  const [beat, setBeat] = useState(0);
  useEffect(() => {
    ref.current?.focus();
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>("button, a");
        const a = f[0],
          b = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          b?.focus();
        } else if (!e.shiftKey && document.activeElement === b) {
          e.preventDefault();
          a?.focus();
        }
      }
    };
    addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const pizza = events.find((e) => e.id === "ev-pizza")!;
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={cs.title}
      className="stop-dark fixed inset-0 z-[75] overflow-y-auto bg-background outline-none"
    >
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex items-center justify-between">
          <p className="label-xs text-trail-ink">
            Case study {index + 1} / {caseStudies.length}
          </p>
          <div className="flex gap-1">
            <button
              onClick={() => onGo((index - 1 + caseStudies.length) % caseStudies.length)}
              aria-label="Previous case study"
              className="h-11 w-11"
            >
              <ArrowLeft className="mx-auto" />
            </button>
            <button
              onClick={() => onGo((index + 1) % caseStudies.length)}
              aria-label="Next case study"
              className="h-11 w-11"
            >
              <ArrowRight className="mx-auto" />
            </button>
            <button onClick={onClose} aria-label="Close case study" className="h-11 w-11">
              <X className="mx-auto" />
            </button>
          </div>
        </div>
        <h2 className="mt-6 font-display text-5xl tracking-tight md:text-7xl">{cs.title}</h2>
        <p className="mt-2 text-xl text-muted-foreground">
          {cs.id === "case-gwy" ? gwy.kicker : cs.sub}
        </p>
        {cs.outcome && (
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-y py-5">
            <div>
              <p className="label-xs text-trail-ink">The outcome</p>
              <p className="mt-2 font-display text-3xl md:text-4xl">{cs.outcome}</p>
            </div>
            {cs.evidence && (
              <a
                href={cs.evidence.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-trail pb-1 text-sm hover:text-trail-ink"
              >
                {cs.evidence.label} ↗
              </a>
            )}
          </div>
        )}
        {cs.id === "case-gwy" ? (
          <>
            <div className="mt-8 h-1 bg-muted" aria-hidden>
              <div
                className="h-full bg-trail transition-all"
                style={{ width: `${((beat + 1) / (gwy.beats.length + 1)) * 100}%` }}
              />
            </div>
            <div className="mt-6 divide-y border-y">
              {gwy.beats.map((b, i) => (
                <div key={b.t}>
                  <button
                    onClick={() => setBeat(i)}
                    aria-expanded={beat === i}
                    className="flex w-full items-center justify-between py-4 text-left font-display text-2xl"
                  >
                    {b.t}
                    <span className="font-mono text-sm">{beat === i ? "−" : "+"}</span>
                  </button>
                  {beat === i && <p className="pb-6 text-lg animate-in fade-in">{b.s}</p>}
                </div>
              ))}
              <div>
                <button
                  onClick={() => setBeat(gwy.beats.length)}
                  aria-expanded={beat === gwy.beats.length}
                  className="flex w-full items-center justify-between py-4 text-left font-display text-2xl"
                >
                  The numbers, after the feeling
                  <span className="font-mono text-sm">{beat === gwy.beats.length ? "−" : "+"}</span>
                </button>
                {beat === gwy.beats.length && (
                  <ul className="grid gap-3 pb-6 sm:grid-cols-2">
                    {gwy.numbers.map((n) => (
                      <li key={n} className="font-display text-2xl">
                        <CountText value={n} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <p className="mt-10 font-display text-3xl italic leading-snug md:text-4xl">
              {gwy.closing}
            </p>
            <ul className="mt-8 space-y-2">
              {gwy.links.map((l) => (
                <li key={l.label}>
                  <Sample on={l.sample}>
                    <ExternalLink href={l.href}>{l.label}</ExternalLink>
                  </Sample>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <PlaceholderImage
              src={cs.cover}
              caption={cs.title}
              tone={index + 3}
              className="mt-8 aspect-[16/8] w-full"
            />
            <p className="mt-8 max-w-[64ch] text-xl leading-relaxed">{cs.story ?? pizza.story}</p>
          </>
        )}
      </div>
    </div>
  );
}

export function BaseCamps() {
  const { travel, express } = useJourney();
  const [year, setYear] = useState(2025);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const [hoverCo, setHoverCo] = useState<string | null>(null);
  const [caseIdx, setCaseIdx] = useState<number | null>(null);
  const strip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => {
      const id = location.hash.slice(1);
      if (id.startsWith("role-")) setOpen(id);
    };
    const onClick = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (id?.startsWith("role-")) setOpen(id);
      if (id?.startsWith("case-")) setCaseIdx(caseStudies.findIndex((c) => c.id === id));
    };
    h();
    addEventListener("trail:open", onClick);
    return () => removeEventListener("trail:open", onClick);
  }, []);

  const shown = roles.filter(
    (r) =>
      (filter === "All" || r.tags.includes(filter)) &&
      (!express || ["role-socrates", "role-hela", "role-quira"].includes(r.id)),
  );
  return (
    <Stop index={3}>
      <div className="relative mx-auto max-w-content px-6 py-stop md:pl-32">
        <StopHeading
          n={3}
          kicker="Base Camps · Work"
          title={
            <>
              Where I've built, <span className="text-trail-ink">not just worked.</span>
            </>
          }
        />

        <div className="grid gap-8">
          <div>
            <label htmlFor="time-machine" className="label-xs text-muted-foreground">
              Time machine · drag the clock
            </label>
            <input
              id="time-machine"
              type="range"
              min={2022}
              max={2026}
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              data-cursor="drag"
              className="mt-3 w-full accent-[var(--color-trail)]"
              aria-valuetext={`${year}: ${years.find((y) => y.y === year)!.c}`}
            />
            <div className="label-xs mt-1 flex justify-between text-muted-foreground">
              {years.map((y) => (
                <span key={y.y} className={y.y === year ? "text-foreground" : ""}>
                  {y.y}
                </span>
              ))}
            </div>
            <p aria-live="polite" className="mt-3 font-script text-3xl text-trail-ink">
              {years.find((y) => y.y === year)!.c}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <FilterWords
            label="Filter roles"
            items={roleFilters}
            value={filter}
            onChange={setFilter}
          />
        </div>
        <ul className="mt-4 border-t">
          {shown.map((r) => {
            const active = year >= r.from && year <= r.to;
            const lit = hoverCo
              ? r.company.startsWith(hoverCo) || hoverCo.startsWith(r.company.split(" ")[0]!)
              : active;
            const isOpen = open === r.id;
            return (
              <li
                key={r.id}
                id={r.id}
                className={`group relative scroll-mt-32 border-b transition-opacity ${lit || isOpen ? "opacity-100" : "opacity-35"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : r.id)}
                  aria-expanded={isOpen}
                  data-cursor="open"
                  className="grid w-full gap-1 py-5 text-left md:grid-cols-[2fr_2fr_1fr] md:items-baseline"
                >
                  <span className="font-display text-3xl tracking-tight md:text-4xl">
                    {r.company}
                  </span>
                  <span className="text-muted-foreground">{r.role}</span>
                  <Sample on={r.sample} className="font-mono text-sm md:text-right">
                    {r.years}
                  </Sample>
                </button>
                <div className="pointer-events-none absolute right-10 top-0 z-10 hidden w-56 -translate-y-1/3 rotate-2 opacity-0 transition-opacity lg:group-hover:block lg:group-hover:opacity-100">
                  {!isOpen && (
                    <PlaceholderImage
                      caption={`${r.company} preview`}
                      tone={3}
                      className="aspect-[4/3] w-full shadow-lg"
                    />
                  )}
                </div>
                {isOpen && (
                  <div className="grid gap-8 pb-10 animate-in fade-in slide-in-from-top-2 lg:grid-cols-2">
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">
                        {r.role} · <Sample on={r.sample}>{r.years}</Sample> · {r.tags.join(", ")}
                      </p>
                      {r.desc && <p className="mt-3 text-lg">{r.desc}</p>}
                      {r.did && (
                        <>
                          <p className="label-xs mt-6 text-muted-foreground">What I did</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5">
                            {r.did.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      <p className="label-xs mt-6 text-muted-foreground">Key highlights</p>
                      <ul className="mt-2 grid gap-4 sm:grid-cols-2">
                        {r.highlights.map((h) => (
                          <li key={h} className="font-display text-2xl leading-tight">
                            {h}
                          </li>
                        ))}
                      </ul>
                      {r.tools && (
                        <p className="mt-6 text-sm text-muted-foreground">Tools: {r.tools}</p>
                      )}
                      <p className="mt-6 flex flex-wrap gap-5">
                        <ExternalLink href="https://www.linkedin.com/in/meshivamgarg">
                          View on LinkedIn
                        </ExternalLink>
                        {(r.links ?? []).map((l) => (
                          <ExternalLink key={l.href} href={l.href}>
                            {l.label}
                          </ExternalLink>
                        ))}
                        {(r.embeds ?? []).map((l) => (
                          <ExternalLink key={l.href} href={l.href}>
                            Watch: {l.label}
                          </ExternalLink>
                        ))}
                      </p>
                    </div>
                    <Carousel label={r.company} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-6">
          <ExternalLink href="https://www.linkedin.com/in/meshivamgarg">
            View more companies →
          </ExternalLink>
        </p>
      </div>

      <div className="group overflow-hidden border-y py-8" aria-label="Companies">
        <div className="flex w-max gap-16 [animation:drift_60s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...companies, ...companies].map((c, i) => (
            <button
              key={i}
              tabIndex={i < companies.length ? 0 : -1}
              aria-hidden={i >= companies.length}
              onMouseEnter={() => setHoverCo(c)}
              onMouseLeave={() => setHoverCo(null)}
              onFocus={() => setHoverCo(c)}
              onBlur={() => setHoverCo(null)}
              onClick={() => {
                const r = roles.find(
                  (x) => x.company.startsWith(c) || c.startsWith(x.company.split(" ")[0]!),
                );
                if (r) {
                  setOpen(r.id);
                  travel(r.id);
                }
              }}
              className="whitespace-nowrap font-display text-4xl tracking-tight text-muted-foreground transition-colors hover:text-foreground md:text-5xl"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 py-stop md:pl-32">
        <div className="flex items-end justify-between">
          <h3 className="font-display text-4xl tracking-tight md:text-5xl">
            Real stories, real impact
          </h3>
          <div className="flex gap-1">
            <button
              onClick={() => strip.current?.scrollBy({ left: -400, behavior: "smooth" })}
              aria-label="Scroll case studies left"
              className="h-11 w-11 border"
            >
              <ArrowLeft className="mx-auto h-4 w-4" />
            </button>
            <button
              onClick={() => strip.current?.scrollBy({ left: 400, behavior: "smooth" })}
              aria-label="Scroll case studies right"
              className="h-11 w-11 border"
            >
              <ArrowRight className="mx-auto h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          ref={strip}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              id={cs.id}
              onClick={() => setCaseIdx(i)}
              data-cursor="open"
              className="case-card stop-dark group relative aspect-[3/4] w-72 shrink-0 snap-start overflow-hidden bg-background text-left md:w-80"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <PlaceholderImage
                  src={cs.cover}
                  caption={cs.title}
                  tone={5}
                  className="h-full w-full opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="label-xs border border-current px-2 py-0.5">Case study</span>
                <p className="mt-3 font-display text-3xl leading-tight">{cs.title}</p>
                <p className="mt-1 text-muted-foreground">{cs.sub}</p>
                {cs.outcome && (
                  <p className="mt-4 border-t border-foreground/40 pt-3 font-mono text-xs text-trail-ink">
                    {cs.outcome}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => setCaseIdx(0)}
          className="mt-4 min-h-11 underline decoration-trail decoration-2 underline-offset-4"
        >
          View all →
        </button>
      </div>
      {caseIdx !== null && caseIdx >= 0 && (
        <CaseOverlay index={caseIdx} onClose={() => setCaseIdx(null)} onGo={setCaseIdx} />
      )}
      <Hills />
    </Stop>
  );
}
