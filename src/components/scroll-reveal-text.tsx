import { Children, cloneElement, isValidElement, useEffect, useRef, type ReactNode } from "react";
import { useLanguage } from "@/components/language-provider";

function splitWords(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.split(/(\s+)/).map((word, index) =>
        /^\s*$/.test(word) ? (
          word
        ) : (
          <span className="about-scroll-word" key={index}>
            {word}
          </span>
        ),
      );
    }
    if (!isValidElement<{ children?: ReactNode }>(child) || child.props.children === undefined)
      return child;
    return cloneElement(child, {}, splitWords(child.props.children));
  });
}

/** Keeps the original headings, inline artwork and reading order intact. */
export function ScrollRevealText({ children }: { children: ReactNode }) {
  const { translateNode, t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const words = Array.from(element.querySelectorAll<HTMLElement>(".about-scroll-word"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const distance = bounds.height + viewport * 0.5;
      const progress = Math.max(0, Math.min(1, (viewport * 0.85 - bounds.top) / distance));
      words.forEach((word, index) => {
        word.classList.toggle(
          "is-revealed",
          reducedMotion.matches || progress >= (index + 1) / words.length,
        );
      });
      element.dataset["scrollReady"] = "true";
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, [t]);

  return (
    <div ref={ref} className="about-scroll-text">
      {splitWords(translateNode(children))}
    </div>
  );
}
