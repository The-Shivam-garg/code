import { useEffect, useRef, useState } from "react";
import { useJourney } from "./journey";

/** Dashed hand-drawn thread down the whole page, drawn with scroll, with the traveller walking on it. */
export function TrailThread() {
  const { plain, reduce, current } = useJourney();
  const wrap = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0, mobile: false });
  const [pos, setPos] = useState({ x: 0, y: 0, p: 0 });
  const [walking, setWalking] = useState(false);
  const [frame, setFrame] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const el = wrap.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(() =>
      setSize({ w: el.clientWidth, h: el.scrollHeight, mobile: innerWidth < 768 }),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const d = (() => {
    const { h, mobile } = size;
    if (!h) return "";
    if (mobile) return `M14 0 L14 ${h}`;
    let s = "M64 0";
    const step = 420;
    for (let y = step, i = 0; y < h + step; y += step, i++) {
      const x = i % 2 ? 30 : 96;
      const px = i % 2 ? 96 : 30;
      s += ` C${px} ${y - step * 0.6} ${x} ${y - step * 0.4} ${x + ((i * 7) % 5) - 2} ${Math.min(y, h)}`;
    }
    return s;
  })();

  useEffect(() => {
    if (plain || !d) return;
    let r = 0;
    let idle: ReturnType<typeof setTimeout>;
    const on = () => {
      cancelAnimationFrame(r);
      r = requestAnimationFrame(() => {
        const el = wrap.current?.parentElement;
        const pe = path.current;
        if (!el || !pe) return;
        const top = el.getBoundingClientRect().top + scrollY;
        const y = scrollY + innerHeight * 0.55 - top;
        const p = Math.max(0, Math.min(1, y / size.h));
        const L = pe.getTotalLength();
        // walk along until the point's y matches
        let lo = 0,
          hi = L;
        for (let k = 0; k < 18; k++) {
          const m = (lo + hi) / 2;
          if (pe.getPointAtLength(m).y < y) lo = m;
          else hi = m;
        }
        const pt = pe.getPointAtLength(lo);
        setPos({ x: pt.x, y: pt.y, p: lo / L || p });
        if (!reduce) {
          setWalking(true);
          clearTimeout(idle);
          idle = setTimeout(() => setWalking(false), 180);
        }
      });
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => {
      removeEventListener("scroll", on);
      cancelAnimationFrame(r);
      clearTimeout(idle);
    };
  }, [d, plain, reduce, size.h]);

  useEffect(() => {
    if (!walking) return;
    const id = setInterval(() => setFrame((f) => 1 - f), 160);
    return () => clearInterval(id);
  }, [walking]);

  if (plain) return null;
  return (
    <div
      ref={wrap}
      aria-hidden={clicks < 5}
      className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-32 md:block"
    >
      <svg width={128} height={size.h} className="absolute left-0 top-0 overflow-visible">
        <defs>
          <mask id="trail-draw">
            <path
              d={d}
              pathLength={1}
              stroke="white"
              strokeWidth={12}
              fill="none"
              strokeDasharray="1 1"
              strokeDashoffset={1 - pos.p}
            />
          </mask>
        </defs>
        <path
          d={d}
          stroke="var(--color-clay)"
          strokeWidth={2}
          fill="none"
          strokeDasharray="2 10"
          opacity={0.45}
        />
        <path
          ref={path}
          d={d}
          stroke="var(--color-trail)"
          strokeWidth={3}
          fill="none"
          strokeDasharray="10 8"
          strokeLinecap="round"
          mask="url(#trail-draw)"
        />
      </svg>
      <button
        aria-label="The traveller"
        onClick={() => setClicks((c) => c + 1)}
        tabIndex={-1}
        className="pointer-events-auto absolute"
        style={{ transform: `translate(${pos.x - 18}px, ${pos.y - 46}px)` }}
      >
        <Traveller
          frame={walking ? frame : -1}
          sitting={current === 8}
          waving={!walking && current !== 8}
          open={clicks >= 5}
        />
        {clicks >= 5 && (
          <span className="absolute left-10 top-0 w-40 -rotate-3 border bg-signpost px-2 py-1 font-script text-xl text-foreground shadow">
            Picture abhi baki hai.
          </span>
        )}
      </button>
    </div>
  );
}

export function Traveller({
  frame = -1,
  sitting = false,
  waving = false,
  open = false,
  size = 36,
}: {
  frame?: number;
  sitting?: boolean;
  waving?: boolean;
  open?: boolean;
  size?: number;
}) {
  const legA = frame === 0 ? "M15 34 L12 44" : frame === 1 ? "M15 34 L17 44" : "M15 34 L14 44";
  const legB = frame === 0 ? "M20 34 L23 44" : frame === 1 ? "M20 34 L19 44" : "M20 34 L21 44";
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 36 47"
      className={frame < 0 ? "animate-breathe" : ""}
    >
      <rect
        x="20"
        y="17"
        width="9"
        height="13"
        rx="2"
        fill="var(--color-trail)"
        stroke="var(--color-foreground)"
        strokeWidth="1.2"
      />
      {open && (
        <rect
          x="22"
          y="12"
          width="7"
          height="6"
          fill="var(--color-signpost)"
          stroke="var(--color-foreground)"
          strokeWidth="1"
          transform="rotate(-15 25 15)"
        />
      )}
      <rect
        x="11"
        y="16"
        width="13"
        height="19"
        rx="5"
        fill="var(--color-paper)"
        stroke="var(--color-foreground)"
        strokeWidth="1.4"
      />
      <circle
        cx="17.5"
        cy="10"
        r="6"
        fill="var(--color-paper)"
        stroke="var(--color-foreground)"
        strokeWidth="1.4"
      />
      <path d="M11.5 9 C12 3 23 3 23.5 9 C21 6.5 15 6 11.5 9Z" fill="var(--color-foreground)" />
      {sitting ? (
        <path
          d="M13 34 L24 34 M24 34 L24 42"
          stroke="var(--color-foreground)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      ) : (
        <>
          <path d={legA} stroke="var(--color-foreground)" strokeWidth="2.2" strokeLinecap="round" />
          <path d={legB} stroke="var(--color-foreground)" strokeWidth="2.2" strokeLinecap="round" />
        </>
      )}
      <path
        d={waving ? "M12 20 L6 12" : "M12 20 L9 30"}
        stroke="var(--color-foreground)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
