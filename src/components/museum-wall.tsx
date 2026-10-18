import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { MuseumRecord } from "@/components/museum-record";
import { useLanguage } from "@/components/language-provider";
import { portraits, type Portrait } from "@/data/portraits";
import { MuseumOpening } from "@/components/museum-opening";
import wallTexture from "@/assets/museum/carved-wall.webp.asset.json";
import openingWall from "@/assets/museum/international-wall.webp";
import { museumLayouts, type MuseumPlacement } from "@/data/museum-layout";

function Frame({
  portrait,
  slot,
  placement,
  narrow,
  progress,
  at,
  reduced,
  open,
}: {
  portrait: Portrait;
  slot: number;
  placement: MuseumPlacement;
  narrow: MuseumPlacement;
  progress: MotionValue<number>;
  at: number;
  reduced: boolean | null;
  open: () => void;
}) {
  const { t } = useLanguage();
  const [left, top, width, aspect] = placement;
  const delay = slot * 0.018;
  const opacity = useTransform(
    progress,
    [at - 0.22 + delay, at - 0.06 + delay],
    [reduced ? 1 : 0, 1],
  );
  const y = useTransform(progress, [at - 0.22 + delay, at - 0.06 + delay], [reduced ? 0 : 36, 0]);
  const rotate = useTransform(
    progress,
    [at - 0.22 + delay, at - 0.06 + delay],
    [reduced ? 0 : slot % 2 ? 2.5 : -2.5, 0],
  );
  const style: Record<`--${string}`, string | number> = {
    "--fx": `${left}%`,
    "--fy": `${top}%`,
    "--fw": `${width}%`,
    "--fa": aspect,
    "--nx": `${narrow[0]}%`,
    "--ny": `${narrow[1]}%`,
    "--nw": `${narrow[2]}%`,
    "--na": narrow[3],
  };
  return (
    <motion.figure className="mw-frame" style={{ ...style, opacity, y, rotate }}>
      <button
        type="button"
        className="mw-frame-button"
        aria-label={`${portrait.number}. ${t(portrait.title)}`}
        onClick={open}
      >
        <img
          src={portrait.imageSrc}
          alt={t(portrait.title)}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </button>
      <figcaption>
        <h3>
          {portrait.number}. {t(portrait.title)}
        </h3>
        <p title={t(portrait.caption)}>{t(portrait.caption)}</p>
      </figcaption>
    </motion.figure>
  );
}

export function MuseumWall() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<Portrait | null>(null);
  const step = (dir: number) => {
    if (!selected) return;
    const i = portraits.findIndex((p) => p.id === selected.id);
    setSelected(portraits[(i + dir + portraits.length) % portraits.length] ?? null);
  };
  const visit = () => {
    const anchor = selected?.experienceAnchorId;
    if (!anchor) {
      step(1);
      return;
    }
    setSelected(null);
    window.dispatchEvent(
      new CustomEvent("museum-company-select", { detail: anchor.replace("experience-", "") }),
    );
    setTimeout(
      () =>
        document
          .getElementById(anchor)
          ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "center" }),
      60,
    );
  };
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const measure = () => setTravel(Math.max(0, (node.children.length - 1) * node.clientWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.6 });
  const progress = reduced ? scrollYProgress : smooth;
  const x = useTransform(progress, (v) => -v * travel);
  const farX = useTransform(progress, (v) => -v * travel * 0.85);
  const count = museumLayouts.length;
  return (
    <section
      ref={section}
      className="museum-section"
      id="museum"
      aria-label={t("6 years of Shivam")}
      style={{ height: `calc(100svh + ${travel}px)` }}
    >
      <div className={`mw-sticky${selected ? " mw-sticky-open" : ""}`}>
        <div className="mw-stage">
          <img
            className="mw-wall-texture"
            src={wallTexture.url}
            width={1536}
            height={1024}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
          <motion.div
            className="mw-far"
            style={{ x: farX, width: `${count * 100}%` }}
            aria-hidden="true"
          >
            {Array.from({ length: count * 2 }, (_, i) => (
              <i
                className="mw-lamp"
                key={i}
                style={{ left: `${((i + 0.5) / (count * 2)) * 100}%` }}
              />
            ))}
          </motion.div>
          <motion.div className="mw-track" ref={track} style={{ x }}>
            {museumLayouts.map((layout, pi) => (
              <div className="mw-panel" key={pi}>
                {pi > 0 && (
                  <img
                    className={`mw-panel-wall${pi % 2 ? " mw-panel-wall-flip" : ""}`}
                    src={openingWall}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                )}
                <div className={`mw-board${pi === 0 ? " mw-board-centre" : ""}`}>
                  {pi === 0 ? (
                    <MuseumOpening open={setSelected} />
                  ) : (
                    portraits
                      .slice(layout.start, layout.end)
                      .map((p, si) => (
                        <Frame
                          key={p.id}
                          portrait={p}
                          slot={si}
                          placement={layout.placements[si] ?? [0, 0, 20, 1.5]}
                          narrow={layout.narrow[si] ?? [0, 0, 40, 1.5]}
                          progress={progress}
                          at={pi / (count - 1)}
                          reduced={reduced}
                          open={() => setSelected(p)}
                        />
                      ))
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <MuseumRecord portrait={selected} close={() => setSelected(null)} step={step} visit={visit} />
    </section>
  );
}
