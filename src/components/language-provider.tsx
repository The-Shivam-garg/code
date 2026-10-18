import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  type ReactNode,
} from "react";
import { LANGUAGE_STORAGE_KEY, validLanguage, translateText, type Language } from "@/lib/languages";
import { createLocaleLoader } from "@/lib/locale-loader";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
  translateNode: (node: ReactNode) => ReactNode;
};
const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (text) => text,
  translateNode: (node) => node,
});
const dictionaries = import.meta.glob<Record<string, string>>("../lib/locales/*.json", {
  import: "default",
});
const loadDictionary = createLocaleLoader(dictionaries);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>("en");
  const [dictionary, setDictionary] = useState<Record<string, string>>({});
  const [retry, setRetry] = useState(0);
  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next);
    setRetry((value) => value + 1);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      /* Private browsers still support in-session selection. */
    }
  }, []);
  useEffect(() => {
    try {
      updateLanguage(validLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY)));
    } catch {
      /* Default to English. */
    }
    const onStorage = (event: StorageEvent) => {
      if (event.key === LANGUAGE_STORAGE_KEY) updateLanguage(validLanguage(event.newValue));
    };
    window.addEventListener("storage", onStorage);
    const onOnline = () => setRetry((value) => value + 1);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("online", onOnline);
    };
  }, []);
  useEffect(() => {
    let cancelled = false;
    if (language === "en") {
      setDictionary({});
      document.documentElement.lang = "en";
      return;
    }
    let timer: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;
    const attempt = () => {
      loadDictionary(language)
        .then((value) => {
          if (!cancelled) {
            setDictionary(value);
            document.documentElement.lang = language;
          }
        })
        .catch(() => {
          // Keep existing text usable and avoid aggressive retries on a weak link.
          if (!cancelled && navigator.onLine && attempts < 2) {
            attempts += 1;
            timer = setTimeout(attempt, attempts * 5000);
          }
        });
    };
    attempt();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [language, retry]);
  const t = useMemo(() => {
    const cache = new Map<string, string>();
    return (text: string) => {
      const cached = cache.get(text);
      if (cached !== undefined) return cached;
      const translated = translateText(text, dictionary);
      cache.set(text, translated);
      return translated;
    };
  }, [dictionary]);
  const translateNode = useCallback(
    function translate(node: ReactNode): ReactNode {
      return Children.map(node, (child) => {
        if (typeof child === "string") return t(child);
        if (!isValidElement<{ children?: ReactNode }>(child) || child.props.children === undefined)
          return child;
        return cloneElement(child, {}, translate(child.props.children));
      });
    },
    [t],
  );
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateNode }}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext);
