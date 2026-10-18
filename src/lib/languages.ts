export const languages = [
  { code: "en", name: "English", short: "En" },
  { code: "es", name: "Español", short: "Es" },
  { code: "fr", name: "Français", short: "Fr" },
  { code: "de", name: "Deutsch", short: "De" },
  { code: "hi", name: "हिन्दी", short: "हि" },
  { code: "zh-CN", name: "中文", short: "中" },
  { code: "ms", name: "Bahasa Melayu", short: "Ms" },
  { code: "ko", name: "한국어", short: "한" },
] as const;
export type Language = (typeof languages)[number]["code"];
export const LANGUAGE_STORAGE_KEY = "shivam-language";
export function validLanguage(value: unknown): Language {
  return languages.find((language) => language.code === value)?.code ?? "en";
}

export function translateText(text: string, dictionary: Record<string, string>): string {
  const key = text.replace(/\s+/g, " ").trim();
  const translated =
    dictionary[key] ?? dictionary[key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()];
  if (translated)
    return `${text.match(/^\s*/)?.[0] ?? ""}${translated}${text.match(/\s*$/)?.[0] ?? ""}`;
  // Generated captions combine independently translated phrases with names and figures.
  return text
    .split(/( · | — |, |: |\n)/)
    .map((part) => {
      const exact = dictionary[part.trim()];
      if (exact) return exact;
      // Match phrase boundaries, including captions with preserved quantities and brands.
      let value = part;
      for (const phrase of Object.keys(dictionary).sort((a, b) => b.length - a.length)) {
        if (!phrase || !value.includes(phrase)) continue;
        const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        value = value.replace(
          new RegExp(`(?<![\\p{L}])${escaped}(?![\\p{L}])`, "gu"),
          dictionary[phrase] ?? phrase,
        );
      }
      return value;
    })
    .join("");
}
