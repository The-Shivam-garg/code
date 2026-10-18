import { useLanguage } from "@/components/language-provider";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Atom, BookOpen, Feather, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { readingTopics, readingTopicAt } from "@/lib/about-reading";
import thinker from "@/assets/about/thinker.png.asset.json";
import reader from "@/assets/about/reader.png.asset.json";

const icons = [Feather, Atom, BookOpen, Sparkles];

export function AboutReading() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [reading, setReading] = useState(false);
  const current = readingTopicAt(index);
  const position = readingTopics.indexOf(current);
  const Icon = icons[position] ?? Feather;
  const turn = (direction: number) =>
    setIndex((position + direction + readingTopics.length) % readingTopics.length);

  return (
    <section
      className="about-book"
      id="about-book"
      aria-label={t("A polymath in progress book")}
      data-reading-topic={current.id}
    >
      <div className="about-book-left">
        <Button
          variant="ghost"
          className={`about-book-cover about-topic-${current.id}`}
          onClick={() => setReading(true)}
          aria-label={t(String(`Open ${current.name} book`))}
        >
          <span className="about-book-spine" aria-hidden="true" />
          <span className="about-book-cover-face" key={current.id}>
            <small>{t("SHIVAM GARG")}</small>
            <span className="about-book-cover-title">
              {t("A Polymath")}
              <br />
              <em>{t("in Progress.")}</em>
            </span>
            <img
              src={current.id === "life" || current.id === "fantasy" ? thinker.url : reader.url}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span className="about-book-cover-topic">
              <Icon />
              {t(String(current.name))}
            </span>
            <span className="about-book-cover-caption">{t(String(current.question))}</span>
          </span>
        </Button>
        <div className="about-thoughts">
          <h2>
            {t("Read Thoughts ")}
            <em>{t("About")}</em>
          </h2>
          {readingTopics.map((thought, next) => {
            const TopicIcon = icons[next] ?? Feather;
            return (
              <Button
                key={thought.id}
                variant="ghost"
                aria-pressed={position === next}
                onClick={() => setIndex(next)}
              >
                <TopicIcon />
                <span>{t(String(thought.name))}</span>
                <ArrowRight />
              </Button>
            );
          })}
        </div>
      </div>
      <div className="about-book-right" aria-live="polite">
        <div className="about-book-preview">
          <div className="about-live-spread about-readable-spread" key={current.id}>
            <article>
              <small>
                {t("A POLYMATH IN PROGRESS · ")}
                {t(String(current.name))}
              </small>
              <h3>{t(String(current.title))}</h3>
              <p>{t(String(current.text))}</p>
              <img
                className="about-page-art"
                src={reader.url}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span>{12 + position * 2}</span>
            </article>
            <article>
              <small>{t(current.name).toUpperCase()}</small>
              <h3>{t(String(current.heading))}</h3>
              <p>{t(String(current.reflection))}</p>
              <blockquote>{t(String(current.question))}</blockquote>
              <span>{13 + position * 2}</span>
            </article>
          </div>
          <div className="about-page-controls">
            <h2>{t(String(current.title))}</h2>
            <span>
              {position + 1} / {readingTopics.length}
            </span>
            <Button
              variant="outline"
              size="icon"
              aria-label={t("Previous book page")}
              title={t("Previous page")}
              onClick={() => turn(-1)}
            >
              <ArrowLeft />
            </Button>
            <Button
              size="icon"
              aria-label={t("Next book page")}
              title={t("Next page")}
              onClick={() => turn(1)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="about-book-copy" key={`copy-${current.id}`}>
          <h2>{t(String(current.copy))}</h2>
          <p>{t(String(current.description))}</p>
          <blockquote>{t(String(current.quote))}</blockquote>
          <Button variant="link" onClick={() => setReading(true)}>
            {t("Read ")}
            {t(String(current.name))} <ArrowRight />
          </Button>
        </div>
      </div>
      <Dialog open={reading} onOpenChange={setReading}>
        <DialogContent className="about-dialog">
          <DialogTitle>
            {t(String(current.name))} — {t(String(current.title))}
          </DialogTitle>
          <DialogDescription>{t(String(current.question))}</DialogDescription>
          <p>{t(String(current.text))}</p>
          <h3>{t(String(current.heading))}</h3>
          <p>{t(String(current.reflection))}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
