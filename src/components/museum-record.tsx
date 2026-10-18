import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/language-provider";
import type { Portrait } from "@/data/portraits";

type MuseumRecordProps = {
  portrait: Portrait | null;
  close: () => void;
  step: (direction: number) => void;
  visit: () => void;
};

export function MuseumRecord({ portrait, close, step, visit }: MuseumRecordProps) {
  const { t } = useLanguage();
  return (
    <Dialog
      open={portrait !== null}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <DialogContent className="mw-card" overlayClassName="mw-card-overlay">
        {portrait && (
          <>
            <div className="mw-card-top">
              <span>
                {t("Memory record")} · {portrait.number} / 12
              </span>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="mw-card-x" aria-label={t("Close")}>
                  <X />
                </Button>
              </DialogClose>
            </div>
            <div className="mw-card-scroll" key={portrait.id}>
              <div className="mw-card-media">
                <img src={portrait.imageSrc} alt={t(portrait.title)} decoding="async" />
              </div>
              <p className="mw-eyebrow">{portrait.organization ?? t("Personal notebook")}</p>
              <DialogTitle className="mw-card-title">{t(portrait.title)}</DialogTitle>
              <DialogDescription className="mw-card-body" title={t(portrait.caption)}>
                {t(portrait.caption)}
              </DialogDescription>
              <ul className="mw-pills">
                <li>
                  <span>{t("Chapter")}</span>
                  <b>{portrait.number}</b>
                </li>
                <li>
                  <span>{t("Period")}</span>
                  <b>{t(portrait.organizationPeriod)}</b>
                </li>
                <li>
                  <span>{t("Theme")}</span>
                  <b>
                    {portrait.tags
                      .slice(0, 2)
                      .map((tag) => t(tag))
                      .join(" · ")}
                  </b>
                </li>
              </ul>
            </div>
            <div className="mw-card-actions">
              <Button variant="ghost" className="mw-btn mw-btn-dark" onClick={visit}>
                {t(portrait.ctaLabel)}
                <ArrowUpRight />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="mw-btn"
                onClick={() => step(-1)}
                aria-label={t("Previous")}
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="mw-btn"
                onClick={() => step(1)}
                aria-label={t("Next")}
              >
                <ChevronRight />
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
