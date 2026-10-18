import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Box,
  Braces,
  CalendarRange,
  Check,
  CircleDot,
  Code2,
  Command,
  Cuboid,
  Gem,
  Globe2,
  Hexagon,
  Layers3,
  Network,
  Orbit,
  Sparkles,
  Target,
  Triangle,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  ecosystems,
  filterJourneyItems,
  journeyFilters,
  journeyItems,
  type JourneyFilter,
} from "@/lib/journey";
import tapestry from "@/assets/work-tapestry-optimized.webp.asset.json";
import botanical from "@/assets/work-botanical-optimized.webp.asset.json";

const ecosystemIcons = [
  Command,
  Layers3,
  Network,
  Gem,
  Hexagon,
  Triangle,
  Waves,
  CircleDot,
  Sparkles,
  Braces,
  Orbit,
  Cuboid,
  Code2,
  Box,
];
type JourneyItem = (typeof journeyItems)[number];

export function JourneySection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<JourneyFilter>("All");
  const [detail, setDetail] = useState<JourneyItem | null>(null);
  const [ecosystem, setEcosystem] = useState<string | null>(null);
  useEffect(() => {
    const pick = (event: Event) => {
      const next = (event as CustomEvent<string>).detail;
      if ((journeyFilters as readonly string[]).includes(next)) setFilter(next as JourneyFilter);
    };
    window.addEventListener("journey-filter", pick);
    return () => window.removeEventListener("journey-filter", pick);
  }, []);
  const visibleItems = filterJourneyItems(filter);

  return (
    <section className="journey-section" aria-labelledby="journey-title">
      <img src={tapestry.url} alt="" className="journey-backdrop" loading="lazy" decoding="async" />
      <div className="journey-sheet">
        <aside className="journey-intro">
          <span className="journey-eyebrow">{t("JOURNEY")}</span>
          <h2 id="journey-title">
            {t("Communities")}
            <br />
            {t("Products &")}
            <br />
            <em>{t("Impact.")}</em>
          </h2>
          <p>
            {t(
              "A timeline of the communities, products and ecosystems I’ve worked with — each one shaping ideas, people and opportunities across the world.",
            )}
          </p>
          <div className="journey-note">
            {t("Different")}
            <br />
            {t("communities.")}
            <br />
            {t("Same purpose.")}
            <ArrowRight />
          </div>
          <img
            src={botanical.url}
            alt=""
            className="journey-illustration"
            loading="lazy"
            decoding="async"
          />
        </aside>
        <div className="journey-directory">
          <nav className="journey-filters" aria-label={t("Filter journey entries")}>
            {journeyFilters.map((item) => (
              <Button
                variant="ghost"
                key={item}
                className={filter === item ? "is-active" : ""}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {t(String(item))}
              </Button>
            ))}
          </nav>
          <div className="journey-list" aria-live="polite">
            {visibleItems.map((item) => (
              <article
                className="journey-row"
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={t(String(`Open ${item.name} community details`))}
                onClick={() => setDetail(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setDetail(item);
                  }
                }}
              >
                <div className="journey-company">
                  <img src={item.logo} alt="" loading="lazy" decoding="async" />
                  <strong>{t(String(item.name))}</strong>
                </div>
                <div className="journey-role">
                  <strong>{t(String(item.role))}</strong>
                  <p>{t(String(item.description))}</p>
                </div>
                <div className="journey-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{t(String(tag))}</span>
                  ))}
                </div>
                <div className="journey-tenure">
                  <strong>{t(String(item.dates))}</strong>
                  <span>{t(String(item.place))}</span>
                </div>
                <Button
                  variant="ghost"
                  className="journey-image"
                  onClick={(event) => {
                    event.stopPropagation();
                    setDetail(item);
                  }}
                  aria-label={t(String(`View ${item.name} journey details`))}
                >
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="journey-arrow"
                  onClick={(event) => {
                    event.stopPropagation();
                    setDetail(item);
                  }}
                  aria-label={t(String(`Open ${item.name}`))}
                >
                  <ArrowRight />
                </Button>
              </article>
            ))}
            {visibleItems.length === 0 && (
              <div className="journey-empty">{t("No journey entries in this category yet.")}</div>
            )}
          </div>
        </div>
      </div>
      <div className="journey-impact">
        <div className="journey-impact-count">
          <strong>20+</strong>
          <span>
            {t("Communities")}
            <br />
            {t("I’ve Worked With")}
          </span>
        </div>
        <div className="journey-ecosystems">
          {ecosystems.map((name, index) => {
            const Icon = ecosystemIcons[index] ?? Orbit;
            return (
              <Button
                variant="ghost"
                key={name}
                className={`journey-ecosystem ${ecosystem === name ? "is-active" : ""}`}
                aria-pressed={ecosystem === name}
                onClick={() => setEcosystem(ecosystem === name ? null : name)}
              >
                <Icon />
                <span>{t(String(name))}</span>
              </Button>
            );
          })}
        </div>
        <Button variant="outline" className="journey-view-all" onClick={() => setFilter("All")}>
          {t("View all")}
          <ArrowRight />
        </Button>
      </div>
      <Dialog
        open={detail !== null}
        onOpenChange={(open) => {
          if (!open) setDetail(null);
        }}
      >
        <DialogContent className="journey-dialog">
          {detail && (
            <div className="journey-detail">
              <header className="journey-detail-header">
                <div className="journey-detail-identity">
                  <img src={detail.logo} alt="" decoding="async" />
                  <div>
                    <span>{t("COMMUNITY PROFILE")}</span>
                    <DialogTitle>{t(String(detail.name))}</DialogTitle>
                    <DialogDescription>{t(String(detail.role))}</DialogDescription>
                  </div>
                </div>
                <div className="journey-detail-meta">
                  <span>
                    <CalendarRange />
                    {t(String(detail.dates))}
                  </span>
                  <span>
                    <Globe2 />
                    {t(String(detail.place))}
                  </span>
                </div>
              </header>
              <div className="journey-detail-layout">
                <aside className="journey-detail-visual">
                  <img
                    src={detail.image}
                    alt={t(String(`${detail.name} community highlight`))}
                    decoding="async"
                  />
                  <blockquote>{t("“Different communities. Same purpose.”")}</blockquote>
                  <div className="journey-detail-tags">
                    {detail.tags.map((tag) => (
                      <span key={tag}>{t(String(tag))}</span>
                    ))}
                  </div>
                </aside>
                <main className="journey-detail-copy">
                  <section>
                    <span className="journey-detail-kicker">{t("THE COMMUNITY")}</span>
                    <h3>{t("Building context, connection and momentum.")}</h3>
                    <p>{t(String(detail.overview))}</p>
                  </section>
                  <section>
                    <div className="journey-detail-section-title">
                      <Target />
                      <h3>{t("Core responsibilities")}</h3>
                    </div>
                    <ul>
                      {detail.responsibilities.map((responsibility, index) => (
                        <li key={responsibility}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <p>{t(String(responsibility))}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <div className="journey-detail-section-title">
                      <Sparkles />
                      <h3>{t("Impact & outcomes")}</h3>
                    </div>
                    <div className="journey-detail-outcomes">
                      {detail.outcomes.map((outcome) => (
                        <p key={outcome}>
                          <Check />
                          {outcome}
                        </p>
                      ))}
                    </div>
                  </section>
                </main>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
