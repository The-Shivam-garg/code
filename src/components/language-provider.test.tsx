import { act, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "./language-provider";
import { LANGUAGE_STORAGE_KEY, type Language } from "@/lib/languages";

let choose: (language: Language) => void = () => {};
function VisitorProbe() {
  const context = useLanguage();
  choose = context.setLanguage;
  return <output data-testid="locale">{context.language}</output>;
}
afterEach(() => localStorage.clear());
describe("visitor preference", () => {
  it("remembers the individual visitor language after remounting", async () => {
    const first = render(
      <LanguageProvider>
        <VisitorProbe />
      </LanguageProvider>,
    );
    act(() => choose("hi"));
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("hi");
    first.unmount();
    const second = render(
      <LanguageProvider>
        <VisitorProbe />
      </LanguageProvider>,
    );
    await waitFor(() => expect(second.getByTestId("locale").textContent).toBe("hi"));
    second.unmount();
  });
});
