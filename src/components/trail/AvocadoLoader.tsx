import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "avocado-opening-seen";

/** Unit step response of an underdamped mass-spring-damper, in seconds. */
export function springStep(time: number, stiffness = 180, damping = 17) {
  if (time <= 0) return 0;
  const decay = damping / 2;
  const frequency = Math.sqrt(stiffness - decay * decay);
  return (
    1 -
    Math.exp(-decay * time) *
      (Math.cos(frequency * time) + (decay / frequency) * Math.sin(frequency * time))
  );
}

export function OpeningBeat({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const left = useRef<SVGGElement>(null);
  const right = useRef<SVGGElement>(null);
  const fruit = useRef<SVGSVGElement>(null);
  const seed = useRef<SVGGElement>(null);
  const seedLeft = useRef<SVGGElement>(null);
  const seedRight = useRef<SVGGElement>(null);
  const shoot = useRef<SVGGElement>(null);
  const hole = useRef<SVGCircleElement>(null);
  const completed = useRef(false);
  const maskId = useId();

  const finish = useCallback(() => {
    if (completed.current) return;
    completed.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* Private browsing: the opening still works. */
    }
    setVisible(false);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (!visible) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* Storage is optional. */
    }
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    if (seen || motion.matches) {
      finish();
      return;
    }
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };
    const motionChanged = () => {
      if (motion.matches) finish();
    };
    window.addEventListener("keydown", keydown);
    motion.addEventListener("change", motionChanged);
    let frame = 0;
    let start: number | undefined;
    const animate = (now: number) => {
      start ??= now;
      const t = (now - start) / 1000;
      const arrive = springStep(t, 150, 19);
      const split = springStep(t - 0.55, 150, 15);
      const pop = springStep(t - 0.88, 220, 15);
      const open = springStep(t - 1.35, 190, 16);
      const grow = springStep(t - 1.48, 180, 18);
      const reveal = springStep(t - 1.92, 90, 18);
      left.current?.setAttribute(
        "transform",
        `translate(${-98 * split} ${14 * split}) rotate(${-23 * split} 200 230)`,
      );
      right.current?.setAttribute(
        "transform",
        `translate(${98 * split} ${14 * split}) rotate(${23 * split} 200 230)`,
      );
      seed.current?.setAttribute(
        "transform",
        `translate(0 ${-30 * pop}) translate(200 245) scale(${1 + 0.12 * pop}) translate(-200 -245)`,
      );
      seedLeft.current?.setAttribute(
        "transform",
        `translate(${-14 * open} ${6 * open}) rotate(${-14 * open} 200 270)`,
      );
      seedRight.current?.setAttribute(
        "transform",
        `translate(${14 * open} ${6 * open}) rotate(${14 * open} 200 270)`,
      );
      shoot.current?.setAttribute(
        "transform",
        `translate(200 245) scale(${Math.max(0, grow)}) translate(-200 -245)`,
      );
      if (fruit.current) {
        fruit.current.style.transform = `translateY(${18 * (1 - arrive)}px) scale(${0.86 + 0.14 * arrive})`;
        fruit.current.style.opacity = String(Math.max(0, Math.min(1, arrive) * (1 - reveal)));
      }
      hole.current?.setAttribute(
        "r",
        String(Math.max(0, reveal) * Math.hypot(window.innerWidth, window.innerHeight)),
      );
      if (t >= 2.7) {
        finish();
        return;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    // A stalled animation must never trap the visitor behind the opening.
    const fallback = window.setTimeout(finish, 4000);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", keydown);
      motion.removeEventListener("change", motionChanged);
    };
  }, [finish, visible]);

  if (!visible) return null;
  return (
    <div
      className="avocado-opening"
      data-testid="avocado-loader"
      role="status"
      aria-label="Opening the page"
    >
      <svg className="avocado-curtain" aria-hidden="true" width="100%" height="100%">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
            <rect width="100%" height="100%" className="avocado-mask-visible" />
            <circle ref={hole} cx="50%" cy="50%" r="0" className="avocado-mask-hole" />
          </mask>
        </defs>
        <rect width="100%" height="100%" mask={`url(#${maskId})`} className="avocado-paper" />
      </svg>
      <svg ref={fruit} className="avocado-fruit" viewBox="0 0 400 400" aria-hidden="true">
        <g ref={left}>
          <path
            className="avocado-skin"
            d="M200 57C159 57 146 109 125 149C98 199 80 231 88 271C96 317 139 342 200 342Z"
          />
          <path
            className="avocado-flesh"
            d="M200 71C170 71 156 120 138 155C112 202 94 234 101 270C109 308 145 327 200 328Z"
          />
          <path
            className="avocado-inner"
            d="M200 127C181 137 173 173 155 201C138 230 133 251 140 273C148 299 171 310 200 311Z"
          />
          <path
            className="avocado-detail"
            d="M148 141C154 125 161 110 169 103M115 269C119 287 130 298 145 305"
          />
        </g>
        <g ref={right}>
          <path
            className="avocado-skin"
            d="M200 57C241 57 254 109 275 149C302 199 320 231 312 271C304 317 261 342 200 342Z"
          />
          <path
            className="avocado-flesh"
            d="M200 71C230 71 244 120 262 155C288 202 306 234 299 270C291 308 255 327 200 328Z"
          />
          <path
            className="avocado-inner"
            d="M200 127C219 137 227 173 245 201C262 230 267 251 260 273C252 299 229 310 200 311Z"
          />
          <path className="avocado-detail" d="M266 191C278 213 286 231 286 247" />
        </g>
        <g ref={seed}>
          <g ref={shoot} transform="translate(200 245) scale(0) translate(-200 -245)">
            <path className="avocado-stem" d="M200 248C197 222 205 198 202 177" />
            <path
              className="avocado-leaf"
              d="M202 211C175 214 166 199 166 184C188 181 202 192 202 211ZM202 195C204 170 219 159 238 161C237 182 225 196 202 195Z"
            />
            <path className="avocado-vein" d="M202 211L179 195M203 194L226 172" />
          </g>
          <g ref={seedLeft}>
            <path
              className="avocado-pit"
              d="M200 197C174 197 157 218 157 245C157 273 175 293 200 293L204 267L197 246L204 225Z"
            />
            <path className="avocado-pit-light" d="M186 210C174 215 168 227 168 240" />
          </g>
          <g ref={seedRight}>
            <path
              className="avocado-pit"
              d="M200 197C226 197 243 218 243 245C243 273 225 293 200 293L204 267L197 246L204 225Z"
            />
            <path className="avocado-pit-line" d="M227 250C227 265 222 273 214 279" />
          </g>
        </g>
      </svg>
      <Button
        variant="ghost"
        onClick={finish}
        className="avocado-skip h-11 rounded-full px-5 text-muted-foreground"
      >
        Skip intro <ArrowRight aria-hidden="true" />
      </Button>
    </div>
  );
}
