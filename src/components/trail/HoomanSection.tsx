import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type MotionStyle,
} from "framer-motion";
import {
  doodlePaths,
  hoomanCaptions,
  hoomanCopy,
  hoomanItems,
  hoomanPhases,
  hoomanValues,
  phaseStarts,
  type Doodle,
  type HoomanItem,
} from "@/data/hooman";

type Variables = MotionStyle & Record<`--${string}`, string | number | MotionValue<number>>;
function DoodleIcon({ kind, draw = 1 }: { kind: Doodle; draw?: number }) {
  return (
    <svg viewBox="0 0 42 42" aria-hidden className="hooman-doodle">
      <motion.path
        d={doodlePaths[kind]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ pathLength: draw }}
        transition={{ duration: 0.35 }}
      />
    </svg>
  );
}

export function PlaceholderImage({ item }: { item: HoomanItem }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="hooman-placeholder" role="img" aria-label={item.alt}>
      <DoodleIcon kind="mountain" />
      <span>
        {item.id}: {item.alt}
      </span>
    </div>
  ) : (
    <img
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

function Photo({
  item,
  progress,
  mobile,
  staticMode,
}: {
  item: HoomanItem;
  progress: MotionValue<number>;
  mobile: boolean;
  staticMode: boolean;
}) {
  const reveal = useTransform(progress, (p) => {
    if (staticMode) return 1;
    const entered = Math.max(0, Math.min(1, (p - item.enterAt) / 0.03));
    if (!mobile) return entered;
    if (p >= 0.83) return item.finalist ? 1 : 0;
    const next = phaseStarts[item.phase];
    return next === undefined || p < next ? entered : entered * 0.35;
  });
  const finalists = hoomanItems.filter((i) => i.finalist);
  const slot = item.finalist
    ? finalists.findIndex((i) => i.id === item.id)
    : hoomanItems.filter((i) => i.phase === item.phase).findIndex((i) => i.id === item.id) % 3;
  const mobileSlots = [
    { left: 4, top: 4 },
    { left: 56, top: 4 },
    { left: 30, top: 20 },
    { left: 4, top: 70 },
    { left: 56, top: 70 },
    { left: 30, top: 84 },
  ];
  const coords = mobileSlots[slot] ?? item.mobile;
  const style: Variables = {
    "--left": `${item.desktop.left}%`,
    "--top": `${item.desktop.top}%`,
    "--width": `${item.desktop.width}%`,
    "--mobile-left": `${coords.left}%`,
    "--mobile-top": `${coords.top}%`,
    "--rotation": `${item.rotate}deg`,
    "--depth": item.depth,
    "--reveal": reveal,
    zIndex: item.z,
  };
  return (
    <motion.figure
      className={`hooman-photo ${item.finalist ? "hooman-finalist" : ""}`}
      style={style}
    >
      <PlaceholderImage item={item} />
    </motion.figure>
  );
}

export function HoomanSection() {
  const wrapperRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [phase, setPhase] = useState(0);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const small = window.matchMedia("(max-width: 359px)");
    const update = () => {
      setMobile(query.matches);
      setNarrow(small.matches);
    };
    update();
    setHydrated(true);
    setEdit(new URLSearchParams(window.location.search).get("edit") === "1");
    query.addEventListener("change", update);
    small.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      small.removeEventListener("change", update);
    };
  }, []);
  const staticMode = hydrated && (Boolean(reduce) || narrow);
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const boundaries = [0.24, 0.4, 0.55, 0.69, 0.83];
    setPhase(boundaries.filter((start) => p >= start).length);
  });
  const scale = useTransform(scrollYProgress, [0, 0.92, 1], [1.1, 1, 1]);
  const progressStyle: Variables = {
    "--progress": staticMode ? 1 : scrollYProgress,
    scale: staticMode ? 1 : scale,
  };
  const current = staticMode ? 5 : phase;
  const mobileCaption = hoomanCaptions.find((c) => c.phase === current + 1);
  return (
    <section
      ref={wrapperRef}
      id="hooman"
      aria-label={hoomanCopy.label}
      className={`hooman-section ${staticMode ? "hooman-static" : ""} ${edit ? "hooman-edit" : ""}`}
      data-phase={current}
    >
      <span className="sr-only">{hoomanCopy.sentence}</span>
      <div className="hooman-stage">
        <motion.div className="hooman-camera" style={progressStyle}>
          <div className="hooman-canvas">
            {hoomanItems.map((item) => (
              <Photo
                key={item.id}
                item={item}
                progress={scrollYProgress}
                mobile={mobile}
                staticMode={staticMode}
              />
            ))}
            {hoomanCaptions.map((c) => (
              <motion.div
                key={c.text}
                className="hooman-caption"
                style={
                  {
                    left: `${c.desktop.left}%`,
                    top: `${c.desktop.top}%`,
                    width: `${c.desktop.width}%`,
                    "--enter-at": phaseStarts[c.phase - 1] ?? 0.83,
                  } as Variables
                }
              >
                <p>{c.text}</p>
                <DoodleIcon kind={c.doodle} draw={staticMode || current + 1 >= c.phase ? 1 : 0} />
              </motion.div>
            ))}
            <div className="hooman-center">
              <p className="hooman-eyebrow">{hoomanCopy.eyebrow}</p>
              <h2 className="hooman-word" aria-hidden>
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={current}
                    initial={staticMode ? false : { y: 24, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    {hoomanPhases[current]}
                  </motion.span>
                </AnimatePresence>
              </h2>
              <div className="hooman-values">
                {hoomanValues.map((row, i) => (
                  <p key={i}>
                    {row.map((value, j) => (
                      <span
                        key={value.text}
                        className={
                          staticMode || current + 1 >= value.phase ? "hooman-value-lit" : ""
                        }
                      >
                        {j > 0 && <i aria-hidden> · </i>}
                        {value.text}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
              <div className="hooman-globe" style={{ opacity: current === 5 ? 1 : 0 }}>
                <DoodleIcon kind="globe" draw={current === 5 ? 1 : 0} />
              </div>
              <p className="hooman-scroll">
                {hoomanCopy.scroll} <span aria-hidden>↓</span>
              </p>
            </div>
            <p className="hooman-mobile-caption">
              {current === 5 ? hoomanCopy.finalCaption : mobileCaption?.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
