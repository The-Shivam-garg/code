export const LANGUAGE_HINT_STORAGE_KEY = "shivam-language-hint-dismissed";

export function shouldShowLanguageHint(savedLanguage: string | null, dismissed: string | null) {
  return savedLanguage === null && dismissed !== "true";
}
