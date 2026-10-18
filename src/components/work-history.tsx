import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Star,
  Compass,
  Users,
  CalendarDays,
  Handshake,
  CodeXml,
  ChartNoAxesCombined,
  Quote,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  BookOpen,
  Send,
  Figma,
  Atom,
  Triangle,
  MessageCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  workCompanies,
  companyMetrics,
  impactMetrics,
  getWorkHighlights,
  workGallery,
  workResponsibilities,
  workTechnologies,
} from "@/lib/work-history";
import tapestry from "@/assets/work-tapestry-optimized.webp.asset.json";
import testimonialAvatar from "@/assets/work/testimonial-avatar.webp.asset.json";

const testimonial =
  "GDG gave me a platform to turn my curiosity into real opportunities, and to bring an amazing community together on campus.";
const impactIcons = [Compass, Users, CalendarDays, Handshake, CodeXml, ChartNoAxesCombined];
const technologyIcons = [
  BookOpen,
  FileText,
  MessageCircle,
  Send,
  Figma,
  CodeXml,
  Atom,
  CodeXml,
  Globe,
  Triangle,
];
type Detail = { title: string; description: string; image?: string };

export function WorkHistory() {
  const { t } = useLanguage();
  const [companyId, setCompanyId] = useState("hela");
  const [photoIndex, setPhotoIndex] = useState(0);
  useEffect(() => {
    const select = (event: Event) => {
      const id = (event as CustomEvent<unknown>).detail;
      if (typeof id === "string" && workCompanies.some((item) => item.id === id)) {
        setCompanyId(id);
        setPhotoIndex(0);
      }
    };
    window.addEventListener("museum-company-select", select);
    return () => window.removeEventListener("museum-company-select", select);
  }, []);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [glowingMetric, setGlowingMetric] = useState<string | null>(null);
  const company = workCompanies.find((item) => item.id === companyId) ?? workCompanies[0];
  const photo = workGallery[photoIndex] ?? workGallery[0];
  const highlights = getWorkHighlights(null);
  const visibleHighlights = [...highlights, ...highlights.slice(0, 2)];
  const changePhoto = (direction: number) =>
    setPhotoIndex((index) => (index + direction + workGallery.length) % workGallery.length);
  if (!photo) return null;
  return (
    <section className="work-section" aria-labelledby="work-title">
      <img className="work-backdrop" src={tapestry.url} alt="" loading="lazy" decoding="async" />
      <header className="work-intro">
        <span className="work-eyebrow">
          {t("COMPANIES")}
          <span />
        </span>
        <h2 id="work-title">
          {t("Where I’ve ")}
          <em>{t("Worked.")}</em>
        </h2>
        <p>
          {t("A journey across teams, ecosystems and geographies —")}
          <br />
          {t("building communities, products and opportunities.")}
        </p>
      </header>
      <div className="work-sheet">
        <aside className="work-sidebar">
          <nav className="work-companies" aria-label={t("Companies")}>
            {workCompanies.map((item) => (
              <Button
                id={`experience-${item.id}`}
                key={item.id}
                variant="ghost"
                className={`work-company ${company.id === item.id ? "is-selected" : ""}`}
                aria-pressed={company.id === item.id}
                onClick={() => {
                  setCompanyId(item.id);
                  setPhotoIndex(0);
                }}
              >
                <img
                  src={item.logo}
                  alt=""
                  width={42}
                  height={42}
                  loading="lazy"
                  decoding="async"
                />
                <span className="work-company-copy">
                  <strong>{t(String(item.name))}</strong>
                  <small>{t(String(item.role))}</small>
                </span>
                <span className="work-company-date">{t(String(item.dates))}</span>
                <span className="work-company-arrow">
                  <ArrowRight />
                </span>
              </Button>
            ))}
          </nav>
          <div className="work-margin-note">
            {t("Different teams.")}
            <br />
            {t("Same purpose.")}
            <svg viewBox="0 0 65 50" aria-hidden="true">
              <path d="M4 43 Q44 48 57 7 M48 13 L57 7 L60 20" />
            </svg>
          </div>
        </aside>
        <div className="work-main">
          <div className="work-meta">
            <div className="work-benchmark">
              <span>{t("BENCHMARK")}</span>
              <time dateTime="2026-07-09">{t("JULY 9, 2026")}</time>
            </div>
            <div className="work-tenure">
              <span>{t(String(company.dates))}</span>
              <span>
                <Globe />
                {t("Global")}
              </span>
            </div>
          </div>
          <div className="work-feature">
            <div className="work-summary" key={company.id}>
              <header className="work-company-heading">
                <img
                  src={company.logo}
                  alt={t(String(`${company.name} logo`))}
                  loading="lazy"
                  width={64}
                  height={64}
                  decoding="async"
                />
                <div>
                  <Button
                    variant="ghost"
                    className="work-name"
                    onClick={() =>
                      setDetail({
                        title: company.name,
                        description: `${company.role} · ${company.dates} · Global`,
                        image: company.logo,
                      })
                    }
                  >
                    {t(String(company.name))}
                    <ExternalLink />
                  </Button>
                  <p>
                    {t(String(company.role))}
                    <span />
                    {t("Layer 1 Blockchain")}
                  </p>
                </div>
              </header>
              <div className="work-metrics">
                {companyMetrics.map((metric) => (
                  <Button
                    variant="ghost"
                    key={metric.label}
                    className="work-metric"
                    onClick={() =>
                      setDetail({
                        title: `${metric.value} ${metric.label}`,
                        description: `${company.name} · ${company.role} · ${company.dates}`,
                      })
                    }
                  >
                    <strong>{metric.value}</strong>
                    <span>{t(String(metric.label))}</span>
                  </Button>
                ))}
              </div>
              <p className="work-description">
                {t(
                  "A next-generation Layer-1 built for real-world adoption across Web2 and Web3: gaming, DeFi, DePIN and enterprise.",
                )}
              </p>
              <h3 className="work-small-heading">{t("WHAT I DID")}</h3>
              <ul className="work-achievements">
                {workResponsibilities.map((item) => (
                  <li key={item}>{t(String(item))}</li>
                ))}
              </ul>
            </div>
            <div className="work-gallery" aria-label={t(String(`${company.name} memories`))}>
              <Button
                variant="ghost"
                className="work-gallery-main"
                aria-label={t(String(`Enlarge ${photo.title} photo`))}
                onClick={() =>
                  setDetail({
                    title: photo.title,
                    description: `${company.name} · ${photo.category}`,
                    image: photo.image,
                  })
                }
              >
                <img
                  src={photo.image}
                  alt={t(String(`${photo.title} event`))}
                  loading="lazy"
                  decoding="async"
                />
                <span className="work-expand">
                  <Maximize2 />
                </span>
              </Button>
              <div className="work-gallery-controls">
                <Button
                  variant="ghost"
                  size="icon"
                  className="work-gallery-arrow"
                  aria-label={t("Previous photo")}
                  title={t("Previous photo")}
                  onClick={() => changePhoto(-1)}
                >
                  <ChevronLeft />
                </Button>
                <div className="work-gallery-thumbnails">
                  {workGallery.map((item, index) => (
                    <Button
                      variant="ghost"
                      key={item.title}
                      className={`work-gallery-thumbnail ${photoIndex === index ? "is-selected" : ""}`}
                      aria-label={t(String(`Show ${item.title} photo`))}
                      aria-pressed={photoIndex === index}
                      onClick={() => setPhotoIndex(index)}
                    >
                      <img
                        src={item.image}
                        alt={t(String(item.title))}
                        loading="lazy"
                        decoding="async"
                      />
                    </Button>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="work-gallery-arrow"
                  aria-label={t("Next photo")}
                  title={t("Next photo")}
                  onClick={() => changePhoto(1)}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="work-highlights">
            <h3>
              <Star fill="currentColor" />
              {t("Highlights")}
            </h3>
            <div className="work-highlight-row">
              <div className="work-highlight-cards">
                {visibleHighlights.map((item, index) => (
                  <Button
                    variant="ghost"
                    className="work-highlight"
                    key={`${item.title}-${index}`}
                    aria-label={t(String(`Read details about ${item.title}`))}
                    onClick={() =>
                      setDetail({
                        title: item.title,
                        description: `${item.detail} ${company.name} · ${item.category}.`,
                        image: item.image,
                      })
                    }
                  >
                    <img
                      src={item.image}
                      alt={t(String(item.title))}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="work-highlight-category">{t(String(item.category))}</span>
                    <span className="work-highlight-title">
                      {t(String(item.title))}
                      <span>
                        <ArrowRight />
                      </span>
                    </span>
                  </Button>
                ))}
              </div>
              <Button
                variant="ghost"
                className="work-testimonial"
                aria-label={t("Read Aarav S. testimonial")}
                onClick={() =>
                  setDetail({ title: "Aarav S. — Core Team Member", description: testimonial })
                }
              >
                <Quote fill="currentColor" />
                <p>{t(String(testimonial))}</p>
                <span>
                  <img
                    src={testimonialAvatar.url}
                    alt={t("Aarav S.")}
                    width={25}
                    height={25}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    <strong>{t("Aarav S.")}</strong>
                    <small>{t("Core Team Member")}</small>
                  </span>
                </span>
              </Button>
            </div>
          </div>
          <div className="work-technologies">
            <h3 className="work-small-heading">{t("TOOLS & TECHNOLOGIES")}</h3>
            <div>
              {workTechnologies.map((name, index) => {
                const Icon = technologyIcons[index] ?? CodeXml;
                return (
                  <Button
                    variant="ghost"
                    key={name}
                    className={`work-technology work-technology-${index}`}
                    onClick={() =>
                      setDetail({
                        title: name,
                        description: `${name} · Tools & technologies used across developer programs, community collaboration and product work at ${company.name}.`,
                      })
                    }
                  >
                    <Icon />
                    <span>{t(String(name))}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="work-impact" aria-label={t("Overall impact")}>
        <div className="work-impact-track">
          {[0, 1].map((copy) => (
            <div className="work-impact-group" key={copy} aria-hidden={copy === 1}>
              {impactMetrics.map((metric, i) => {
                const Icon = impactIcons[i % impactIcons.length] ?? Compass;
                const metricKey = `${metric.value}-${metric.label}`;
                return (
                  <Button
                    key={`${copy}-${metric.label}`}
                    tabIndex={copy === 1 ? -1 : 0}
                    variant="ghost"
                    className={`work-impact-item ${glowingMetric === metricKey ? "is-glowing" : ""}`}
                    onClick={() => setGlowingMetric(glowingMetric === metricKey ? null : metricKey)}
                  >
                    <Icon />
                    <span>
                      <strong>{metric.value}</strong>
                      <small>{t(String(metric.label))}</small>
                    </span>
                  </Button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={detail !== null}
        onOpenChange={(open) => {
          if (!open) setDetail(null);
        }}
      >
        <DialogContent className="work-dialog">
          <DialogTitle>{t(String(detail?.title))}</DialogTitle>
          <DialogDescription>{t(String(detail?.description))}</DialogDescription>
          {detail?.image && (
            <img
              className="work-detail-photo"
              src={detail.image}
              alt={t(String(detail.title))}
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
