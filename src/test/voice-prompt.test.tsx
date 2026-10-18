import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { VoicePrompt } from "@/components/trail/VoicePrompt";
import { VOICE_DWELL_MS, VOICE_PROMPT_SESSION_KEY } from "@/data/voice-prompts";

describe("section dwell testimonial prompts", () => {
  let section: HTMLElement;
  beforeEach(() => {
    vi.useFakeTimers();
    sessionStorage.clear();
    section = document.createElement("section");
    section.id = "communities-shelf";
    vi.spyOn(document, "hidden", "get").mockReturnValue(false);
    Object.defineProperty(document, "elementFromPoint", {
      configurable: true,
      value: () => section,
    });
  });
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("waits for dwell before offering the community testimonial", () => {
    render(<VoicePrompt enabled />);
    act(() => vi.advanceTimersByTime(VOICE_DWELL_MS));
    expect(screen.queryByRole("complementary")).toBeNull();
    act(() => vi.advanceTimersByTime(500));
    expect(screen.getByRole("complementary")).toHaveTextContent("Priya Sharma");
  });
  it("resets elapsed time when the visitor changes section", () => {
    render(<VoicePrompt enabled />);
    act(() => vi.advanceTimersByTime(VOICE_DWELL_MS - 2_000));
    section.id = "hooman";
    act(() => vi.advanceTimersByTime(VOICE_DWELL_MS - 2_000));
    expect(screen.queryByRole("complementary")).toBeNull();
    act(() => vi.advanceTimersByTime(3_000));
    expect(screen.getByRole("complementary")).toHaveTextContent("Kenji Tan");
  });
  it("does not reappear after dismissal or on a repeat session visit", () => {
    const { unmount } = render(<VoicePrompt enabled />);
    act(() => vi.advanceTimersByTime(16_000));
    fireEvent.click(screen.getByRole("button", { name: "Dismiss testimonial suggestion" }));
    act(() => vi.advanceTimersByTime(60_000));
    expect(screen.queryByRole("complementary")).toBeNull();
    expect(sessionStorage.getItem(VOICE_PROMPT_SESSION_KEY)).toBe("1");
    unmount();
    render(<VoicePrompt enabled />);
    act(() => vi.advanceTimersByTime(60_000));
    expect(screen.queryByRole("complementary")).toBeNull();
  });
  it("never starts while the opening or navigation menu is active", () => {
    render(<VoicePrompt enabled={false} />);
    act(() => vi.advanceTimersByTime(60_000));
    expect(sessionStorage.getItem(VOICE_PROMPT_SESSION_KEY)).toBeNull();
  });
});
