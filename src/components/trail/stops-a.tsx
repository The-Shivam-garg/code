import { useEffect, useRef, useState } from "react";
import { hero, impact, intro } from "@/data/trail";
import { Stop, useInView, useJourney } from "./journey";
import { HoldNumber, PlaceholderImage, Reveal, StopHeading } from "./primitives";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLowBandwidth } from "@/lib/network";

function HeroActions() {
  const { travel, setExpress } = useJourney();
  return (
    <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
      <Button
        onClick={() => {
          setExpress(false);
          travel("village");
        }}
        className="h-12 rounded-full bg-trail-ink px-7 text-paper shadow-none hover:bg-trail"
      >
        Explore the trail <ArrowDownRight aria-hidden />
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setExpress(false);
          travel("products");
        }}
        className="h-12 rounded-full border-trail-ink bg-transparent px-7 text-trail-ink shadow-none hover:bg-trail-ink hover:text-paper"
      >
        See the products <ArrowUpRight aria-hidden />
      </Button>
    </div>
  );
}

const mascotModules = import.meta.glob<{ default: { url: string } }>(
  "@/assets/mascot-v3-*.png.asset.json",
  { eager: true },
);
const mascots = Object.keys(mascotModules)
  .sort()
  .flatMap((k) => mascotModules[k]?.default.url ?? []);

/** Rotates portraits one at a time: only the current image is in the page and the next is fetched before switching,
 *  so slow connections never download all eighteen up front. Data-saver / 2G visitors see a single still portrait. */
function DossierCard() {
  const [i, setI] = useState(0);
  const low = useLowBandwidth();
  useEffect(() => {
    if (low || mascots.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true;
    let timer = 0;
    const schedule = (current: number) => {
      const next = (current + 1) % mascots.length;
      const img = new Image();
      img.decoding = "async";
      img.src = mascots[next] ?? "";
      const started = performance.now();
      const advance = () => {
        if (!alive) return;
        const wait = Math.max(0, 3500 - (performance.now() - started));
        timer = window.setTimeout(() => {
          if (!alive) return;
          if (document.hidden) {
            schedule(current);
            return;
          }
          setI(next);
          schedule(next);
        }, wait);
      };
      img.onload = advance;
      img.onerror = advance;
    };
    schedule(0);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [low]);
  const src = mascots[i];
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-sm"
      role="img"
      aria-label="Illustrated Shivam in different everyday moments"
    >
      {src && (
        <img
          key={src}
          src={src}
          alt=""
          decoding="async"
          fetchPriority={i === 0 ? "high" : "auto"}
          width={512}
          height={512}
          className="mascot-fade absolute inset-0 h-full w-full object-contain"
        />
      )}
    </div>
  );
}

export function Gate() {
  return (
    <Stop index={0} className="tactile-gate">
      <div className="zine-hero relative mx-auto max-w-content px-6 pb-16 pt-10 md:px-12 md:pt-20">
        <div className="text-center">
          <p className="mt-5 font-script text-3xl text-trail-ink md:text-4xl">{hero.note}</p>
          <h1 className="mt-1 font-display text-6xl font-semibold leading-[0.9] md:text-8xl">
            Shivam Garg<span className="text-trail">.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-2xl leading-snug">{hero.sub}</p>
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr_1fr]">
          <div className="zine-intro order-2 lg:order-1">
            <p className="font-script text-3xl leading-snug text-trail-ink">Hi, I’m Shivam.</p>
            <p className="mt-3 text-lg leading-relaxed">{hero.left}</p>
          </div>
          <div className="order-1 lg:order-2">
            <DossierCard />
          </div>
          <div className="zine-intro order-3 lg:text-right">
            <p className="text-xl leading-relaxed">{hero.invitation}</p>
            <p className="marker mt-4 inline text-2xl font-semibold">
              {hero.proof[0]?.number} {hero.proof[0]?.label}
            </p>
            <HeroActions />
          </div>
        </div>
        <p className="mt-10 text-center font-script text-2xl text-muted-foreground">
          This is my story — and you’re part of it.
        </p>
        <div
          className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
          aria-label="Selected work in numbers"
        >
          {hero.proof.map((item) => (
            <a
              key={item.number}
              href={`#${item.target}`}
              className="proof-card group block border border-border bg-card p-5 transition-transform hover:-translate-y-1"
            >
              <span className="flex items-center font-display text-4xl leading-none text-trail-ink md:text-5xl">
                {item.number}
                <ArrowUpRight
                  className="ml-2 h-4 w-4 text-trail transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
              <span className="mt-3 block text-sm font-medium leading-tight">{item.label}</span>
              <span className="mt-2 block text-xs text-muted-foreground">{item.context}</span>
            </a>
          ))}
        </div>
      </div>
    </Stop>
  );
}

export function DragPolaroid({
  caption,
  i,
  tone,
  src,
  onOpen,
  develop = false,
}: {
  caption: string;
  i: number;
  tone: number;
  src?: string | undefined;
  onOpen?: () => void;
  develop?: boolean;
}) {
  const [o, setO] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState(false);
  const st = useRef<{ x: number; y: number; ox: number; oy: number; moved: boolean } | null>(null);
  const [ref, seen] = useInView<HTMLDivElement>();
  const rot = ((i * 47) % 14) - 7;
  return (
    <div
      ref={ref}
      className="touch-none"
      style={{
        transform: `translate(${o.x}px, ${o.y}px)`,
        transition: drag ? "none" : "transform .5s cubic-bezier(.3,1.5,.5,1)",
        zIndex: drag ? 30 : undefined,
        position: "relative",
      }}
    >
      <button
        onPointerDown={(e) => {
          st.current = { x: e.clientX, y: e.clientY, ox: o.x, oy: o.y, moved: false };
          setDrag(true);
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          const s = st.current;
          if (!s) return;
          const dx = e.clientX - s.x,
            dy = e.clientY - s.y;
          if (Math.abs(dx) + Math.abs(dy) > 4) s.moved = true;
          setO({ x: s.ox + dx, y: s.oy + dy });
        }}
        onPointerUp={() => {
          const m = st.current?.moved;
          st.current = null;
          setDrag(false);
          if (!m) onOpen?.();
        }}
        onKeyDown={(e) => {
          const k = {
            ArrowLeft: [-20, 0],
            ArrowRight: [20, 0],
            ArrowUp: [0, -20],
            ArrowDown: [0, 20],
          }[e.key];
          if (k) {
            e.preventDefault();
            setO((p) => ({ x: p.x + k[0]!, y: p.y + k[1]! }));
          } else if (e.key === "Enter") onOpen?.();
        }}
        data-cursor="drag"
        aria-label={`Photo: ${caption}. Drag, or use arrow keys to move`}
        style={{ transform: `rotate(${drag ? 0 : rot}deg)` }}
        className="group block w-full bg-card p-2 pb-1 shadow-md transition-transform hover:!rotate-0"
      >
        <div
          className={`overflow-hidden transition-[filter] duration-1000 ${develop && !seen ? "blur-sm sepia" : ""}`}
        >
          <PlaceholderImage
            src={src}
            caption={caption}
            tone={tone}
            className="pointer-events-none aspect-square w-full"
          />
        </div>
        <p className="py-1 font-script text-lg leading-tight text-foreground">{caption}</p>
      </button>
    </div>
  );
}

export function Kitchen() {
  return (
    <Stop index={1}>
      <div className="relative mx-auto max-w-content px-6 py-stop md:pl-32">
        <StopHeading
          n={1}
          kicker="About Shivam"
          title={
            <>
              Why <span className="text-trail-ink">community?</span>
            </>
          }
        />
        <div className="max-w-[60ch] space-y-3 text-base leading-relaxed">
          {intro.map((l, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className={i === intro.length - 1 ? "font-semibold text-trail-ink" : ""}>{l}</p>
            </Reveal>
          ))}
        </div>
        <h3 className="label-xs mt-16 text-muted-foreground">
          Impact over mere numbers · press and hold any number
        </h3>
        <div className="stat-strip mt-4 grid grid-cols-2 gap-x-6 lg:grid-cols-4">
          {impact.map((m) => (
            <HoldNumber key={m.n} n={m.n} label={m.l} detail={m.d} />
          ))}
        </div>
      </div>
    </Stop>
  );
}
