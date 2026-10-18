import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { OpeningBeat, springStep } from "@/components/trail/AvocadoLoader";

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

describe("Avocado opening", () => {
  it("has spring overshoot and settles at its target", () => {
    expect(springStep(0)).toBe(0);
    expect(springStep(0.3)).toBeGreaterThan(1);
    expect(springStep(2)).toBeCloseTo(1, 5);
  });

  it("lets visitors skip and restores scrolling", () => {
    const complete = vi.fn();
    render(<OpeningBeat onComplete={complete} />);
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "Skip intro" }));
    expect(complete).toHaveBeenCalledOnce();
    expect(screen.queryByTestId("avocado-loader")).toBeNull();
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("does not repeat within a session", () => {
    sessionStorage.setItem("avocado-opening-seen", "1");
    const complete = vi.fn();
    render(<OpeningBeat onComplete={complete} />);
    expect(complete).toHaveBeenCalledOnce();
    expect(screen.queryByTestId("avocado-loader")).toBeNull();
  });

  it("bypasses animation for reduced motion", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true } as MediaQueryList);
    const complete = vi.fn();
    render(<OpeningBeat onComplete={complete} />);
    expect(complete).toHaveBeenCalledOnce();
    expect(screen.queryByTestId("avocado-loader")).toBeNull();
  });
});
