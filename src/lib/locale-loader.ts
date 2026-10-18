import type { Language } from "./languages";

type Dictionary = Record<string, string>;

// Share successful/in-flight downloads; failed requests must remain retryable.
export function createLocaleLoader(loaders: Record<string, () => Promise<Dictionary>>) {
  const pending = new Map<Language, Promise<Dictionary>>();
  return (language: Language): Promise<Dictionary> => {
    if (language === "en") return Promise.resolve({});
    const cached = pending.get(language);
    if (cached) return cached;
    const load = loaders[`../lib/locales/${language}.json`];
    if (!load) return Promise.reject(new Error("Language unavailable"));
    const request = Promise.resolve()
      .then(load)
      .catch((error) => {
        pending.delete(language);
        throw error;
      });
    pending.set(language, request);
    return request;
  };
}
