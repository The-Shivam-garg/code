import { describe, expect, it, vi } from "vitest";
import { createLocaleLoader } from "./locale-loader";

describe("low-bandwidth language downloads", () => {
  it("downloads only the chosen language and reuses it", async () => {
    const spanish = vi.fn().mockResolvedValue({ Hello: "Hola" });
    const french = vi.fn().mockResolvedValue({ Hello: "Bonjour" });
    const load = createLocaleLoader({
      "../lib/locales/es.json": spanish,
      "../lib/locales/fr.json": french,
    });
    expect(await load("en")).toEqual({});
    expect(await load("es")).toEqual({ Hello: "Hola" });
    expect(await load("es")).toEqual({ Hello: "Hola" });
    expect(spanish).toHaveBeenCalledTimes(1);
    expect(french).not.toHaveBeenCalled();
  });
  it("allows another attempt after an interrupted download", async () => {
    const spanish = vi
      .fn()
      .mockRejectedValueOnce(new Error("Connection lost"))
      .mockResolvedValueOnce({ Hello: "Hola" });
    const load = createLocaleLoader({ "../lib/locales/es.json": spanish });
    await expect(load("es")).rejects.toThrow("Connection lost");
    expect(await load("es")).toEqual({ Hello: "Hola" });
    expect(spanish).toHaveBeenCalledTimes(2);
  });
});
