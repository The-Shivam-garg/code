import { useEffect, useState } from "react";
import { Globe2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { languages, validLanguage, LANGUAGE_STORAGE_KEY } from "@/lib/languages";
import { LANGUAGE_HINT_STORAGE_KEY, shouldShowLanguageHint } from "@/lib/language-hint";
import { useLanguage } from "@/components/language-provider";

export function LanguageSelector({ welcome = false }: { welcome?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const [hint, setHint] = useState(false);
  useEffect(() => {
    if (!welcome || window.scrollY > 40) return;
    let eligible = true;
    try {
      eligible = shouldShowLanguageHint(
        localStorage.getItem(LANGUAGE_STORAGE_KEY),
        localStorage.getItem(LANGUAGE_HINT_STORAGE_KEY),
      );
    } catch {
      /* Show the hint without storage. */
    }
    if (!eligible) return;
    const timer = window.setTimeout(() => setHint(true), 900);
    const hide = () => {
      if (window.scrollY > 40) setHint(false);
    };
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", hide);
    };
  }, [welcome]);
  const dismiss = () => {
    setHint(false);
    try {
      localStorage.setItem(LANGUAGE_HINT_STORAGE_KEY, "true");
    } catch {
      /* Dismissal still works for this visit. */
    }
  };
  const current = languages.find((item) => item.code === language) ?? languages[0];
  return (
    <div className="language-selector" data-no-translate="true">
      <Select
        value={language}
        onOpenChange={(opened) => {
          if (opened) dismiss();
        }}
        onValueChange={(value) => {
          dismiss();
          setLanguage(validLanguage(value));
        }}
      >
        <SelectTrigger
          className="language-trigger"
          aria-label={t("Choose language")}
          title={current.name}
          aria-describedby={hint ? "language-welcome" : undefined}
        >
          <Globe2 aria-hidden="true" />
          <span>{current.short}</span>
        </SelectTrigger>
        <SelectContent className="language-options" position="popper" align="end">
          {languages.map((item) => (
            <SelectItem key={item.code} value={item.code}>
              <span lang={item.code}>{item.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hint && (
        <div className="language-welcome" id="language-welcome" role="status">
          <Globe2 aria-hidden="true" />
          <p>
            {t("Read in your language")}
            <small>{t("Choose your preferred language above.")}</small>
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="language-welcome-close"
            aria-label={t("Dismiss language hint")}
            onClick={dismiss}
          >
            <X />
          </Button>
        </div>
      )}
    </div>
  );
}
