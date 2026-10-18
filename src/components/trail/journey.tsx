import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { stops } from "@/data/trail";

type Sound = "tear" | "thump" | "click" | "page" | "whoosh" | "crackle";
type Journey = {
  stamps: Set<number>;
  earn: (i: number) => void;
  current: number;
  setCurrent: (i: number) => void;
  guide: boolean;
  setGuide: (v: boolean) => void;
  sound: boolean;
  setSound: (v: boolean) => void;
  reduce: boolean;
  setReduce: (v: boolean) => void;
  plain: boolean;
  setPlain: (v: boolean) => void;
  express: boolean;
  setExpress: (v: boolean) => void;
  autopilot: boolean;
  setAutopilot: (v: boolean) => void;
  edit: boolean;
  play: (s: Sound) => void;
  travel: (id: string) => void;
  guideOverride: string | null;
  say: (s: string | null) => void;
  konami: boolean;
  setKonami: (v: boolean) => void;
};
const Ctx = createContext<Journey | null>(null);
export const useJourney = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("JourneyProvider missing");
  return c;
};

let ac: AudioContext | null = null;
function synth(kind: Sound) {
  ac ??= new AudioContext();
  const t = ac.currentTime;
  const noise = (dur: number, freq: number, gain = 0.25) => {
    const buf = ac!.createBuffer(1, ac!.sampleRate * dur, ac!.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = ac!.createBufferSource();
    src.buffer = buf;
    const f = ac!.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = freq;
    const g = ac!.createGain();
    g.gain.value = gain;
    src.connect(f).connect(g).connect(ac!.destination);
    src.start(t);
  };
  const tone = (freq: number, dur: number, gain = 0.3) => {
    const o = ac!.createOscillator();
    const g = ac!.createGain();
    o.frequency.setValueAtTime(freq, t);
    o.frequency.exponentialRampToValueAtTime(freq / 3, t + dur);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(ac!.destination);
    o.start(t);
    o.stop(t + dur);
  };
  if (kind === "tear") noise(0.35, 2500);
  if (kind === "thump") tone(140, 0.25, 0.5);
  if (kind === "click") tone(900, 0.05, 0.15);
  if (kind === "page") noise(0.25, 1200, 0.15);
  if (kind === "whoosh") noise(0.5, 600, 0.2);
  if (kind === "crackle")
    for (let i = 0; i < 6; i++) setTimeout(() => noise(0.05, 3000, 0.2), i * 90);
}

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [stamps, setStamps] = useState<Set<number>>(new Set());
  const [current, setCurrent] = useState(0);
  const [guide, setGuide] = useState(true);
  const [sound, setSound] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [plain, setPlain] = useState(false);
  const [express, setExpress] = useState(false);
  const [autopilot, setAutopilot] = useState(false);
  const [edit, setEdit] = useState(false);
  const [konami, setKonami] = useState(false);
  const [guideOverride, say] = useState<string | null>(null);
  const soundRef = useRef(sound);
  soundRef.current = sound;

  useEffect(() => {
    setEdit(new URLSearchParams(window.location.search).get("edit") === "1");
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches) {
      setReduce(true);
      setPlain(true);
    }
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("edit-mode", edit);
  }, [edit]);

  const play = useCallback((s: Sound) => {
    if (soundRef.current)
      try {
        synth(s);
      } catch {
        /* audio unavailable */
      }
  }, []);
  const earn = useCallback(
    (i: number) =>
      setStamps((prev) => {
        if (prev.has(i)) return prev;
        const n = new Set(prev);
        n.add(i);
        play("thump");
        return n;
      }),
    [play],
  );
  const travel = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    },
    [reduce],
  );

  const value = useMemo(
    () => ({
      stamps,
      earn,
      current,
      setCurrent,
      guide,
      setGuide,
      sound,
      setSound,
      reduce,
      setReduce,
      plain,
      setPlain,
      express,
      setExpress,
      autopilot,
      setAutopilot,
      edit,
      play,
      travel,
      guideOverride,
      say,
      konami,
      setKonami,
    }),
    [
      stamps,
      earn,
      current,
      guide,
      sound,
      reduce,
      plain,
      express,
      autopilot,
      edit,
      play,
      travel,
      guideOverride,
      konami,
    ],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Wraps one stop: awards its stamp at ~40% visibility and reports it as current. */
export function Stop({
  index,
  children,
  className = "",
  dark = false,
}: {
  index: number;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const { earn, setCurrent, express } = useJourney();
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const stop = stops[index]!;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (
          e.intersectionRatio >= 0.4 ||
          (e.isIntersecting && e.intersectionRect.height > window.innerHeight * 0.4)
        ) {
          earn(index);
          setCurrent(index);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.4, 0.6] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [earn, setCurrent, index]);
  const collapsed = express && !stop.express && !open;
  return (
    <section
      id={stop.id}
      ref={ref}
      data-stop={index}
      aria-label={`Stop ${index + 1} of ${stops.length}: ${stop.name}`}
      className={`tactile-stop relative scroll-mt-20 ${dark ? "stop-dark bg-background" : ""} ${className}`}
    >
      {collapsed ? (
        <div className="mx-auto max-w-content px-6 py-10 md:pl-24">
          <button
            onClick={() => setOpen(true)}
            className="label-xs border-b border-dashed py-2 text-trail-ink"
          >
            Stop {index}: {stop.name} · Show this stop
          </button>
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function useInView<T extends Element>(margin = "0px 0px -15% 0px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, seen] as const;
}
