import { useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Bike,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Globe,
  Home,
  Image as ImageIcon,
  Info,
  Lightbulb,
  LockKeyhole,
  MapPin,
  Plus,
  Share,
  Signal,
  Users,
  ChartNoAxesCombined,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/components/language-provider";
import {
  nextShowcaseIndex,
  productChapters,
  rapidoCase,
  showcaseProjects,
  type ShowcaseProject,
} from "@/lib/product-showcase";
import { getCaseStudySegment, getProductStudy } from "@/lib/product-case-studies";
import persona from "@/assets/products/persona.webp.asset.json";
import botanical from "@/assets/products/botanical.webp.asset.json";
import backdrop from "@/assets/products/reference-photo.webp.asset.json";
const chapterIcons = [
  Home,
  Users,
  Info,
  Globe,
  ImageIcon,
  FileText,
  Lightbulb,
  ChartNoAxesCombined,
];
const rideTypes = ["Bike", "Auto", "Cab"] as const;

function RidePhone({ before = false, compact = false }: { before?: boolean; compact?: boolean }) {
  const { t } = useLanguage();
  const [ride, setRide] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [location, setLocation] = useState("Current location");
  return (
    <div className={`product-phone ${before ? "is-before" : ""} ${compact ? "is-compact" : ""}`}>
      <div className="phone-status">
        <span>9:41</span>
        <i />
        <Signal size={10} />
      </div>
      <div className="phone-location">
        <MapPin size={10} />
        <input
          aria-label={t(before ? "Pick a location" : "Current location")}
          value={
            location === "Current location" ? t(before ? "Pick a location" : location) : location
          }
          onChange={(e) => {
            setLocation(e.target.value);
            setConfirmed(false);
          }}
        />
      </div>
      <div className="phone-map">
        <svg viewBox="0 0 180 100" aria-label={t("Ride pickup map")}>
          <path
            className="map-block"
            d="M0 10L48 0 76 22 60 53 0 61ZM105 0L180 0 180 48 125 39ZM70 64L120 52 167 75 140 100 60 100Z"
          />
          <g className="map-road">
            <path d="M-10 80L190 17M24 -5L82 110M-5 29L190 71M116 -5L154 110M4 105L138 -5" />
          </g>
          <path className="map-route" d="M75 84L61 59 103 43 89 14" />
          <g className="map-vehicle">
            <text x="35" y="30">
              ⌁
            </text>
            <text x="130" y="29">
              ⌁
            </text>
            <text x="144" y="79">
              ⌁
            </text>
          </g>
        </svg>
        <MapPin className="phone-pin" size={22} />
      </div>
      <div className="phone-rides">
        {rideTypes.map((type, i) => (
          <Button
            key={type}
            variant="ghost"
            className={ride === i ? "selected" : ""}
            aria-pressed={ride === i}
            aria-label={t(`Select ${type} ride`)}
            onClick={() => {
              setRide(i);
              setConfirmed(false);
            }}
          >
            {i === 0 ? <Bike /> : <Car />}
            <strong>{t(type)}</strong>
            <small>{["2 min · ₹45", "3 min · ₹60", "5 min · ₹120"][i]}</small>
          </Button>
        ))}
      </div>
      {!before && (
        <Button className="phone-confirm" onClick={() => setConfirmed(!confirmed)}>
          {confirmed ? (
            <>
              <Check />
              {t("Ride confirmed")}
            </>
          ) : (
            <>
              {t("Confirm Ride")}
              <ArrowRight />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
function ProductPhone({
  project,
  before = false,
  confirmation = false,
}: {
  project: ShowcaseProject;
  before?: boolean;
  confirmation?: boolean;
}) {
  const { t } = useLanguage();
  const study = getProductStudy(project);
  const [option, setOption] = useState(0);
  const [confirmed, setConfirmed] = useState(confirmation);
  return (
    <div
      className={`product-phone ecosystem-phone theme-${project.theme} ${before ? "is-before" : ""}`}
    >
      <div className="phone-status">
        <span>9:41</span>
        <i />
        <Signal size={10} />
      </div>
      <div className="ecosystem-phone-brand">{project.name}</div>
      <div className="ecosystem-phone-art">
        <img src={project.art} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="phone-rides">
        {study.options.map((label, index) => (
          <Button
            key={label}
            variant="ghost"
            aria-pressed={option === index}
            className={option === index ? "selected" : ""}
            onClick={() => {
              setOption(index);
              setConfirmed(false);
            }}
          >
            <Globe />
            <strong>{t(label)}</strong>
          </Button>
        ))}
      </div>
      <div className="ecosystem-phone-selection">
        {t(study.needs[option] ?? study.needs[0] ?? "")}
      </div>
      {!before && (
        <Button className="phone-confirm" onClick={() => setConfirmed(!confirmed)}>
          {confirmed ? (
            <>
              <Check />
              {t("Selected")}
            </>
          ) : (
            <>
              {t(study.action)}
              <ArrowRight />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
function Persona({
  full = false,
  project = null,
}: {
  full?: boolean;
  project?: ShowcaseProject | null;
}) {
  const { t } = useLanguage();
  const study = getProductStudy(project);
  return (
    <div className={`product-persona ${full ? "full-persona" : ""}`}>
      <header>
        <h3>{t("User Persona")}</h3>
        <span>01</span>
      </header>
      <div className="persona-identity">
        {project ? (
          <div className={`persona-audience theme-${project.theme}`}>
            <Users />
          </div>
        ) : (
          <img src={persona.url} alt="Aarav" loading="lazy" decoding="async" />
        )}
        <div>
          <strong>{t(study.audience)}</strong>
          <small>{t(project ? "Audience profile" : "College Student, Bengaluru")}</small>
          <blockquote>
            {t(
              project
                ? study.context
                : "“I just want a quick and reliable ride without checking 3 different apps.”",
            )}
          </blockquote>
        </div>
      </div>
      <div className="persona-columns">
        <div>
          <h4>
            <i />
            {t("Needs")}
          </h4>
          <ul>
            {study.needs.map((s) => (
              <li key={s}>{t(s)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>
            <i />
            {t("Pain Points")}
          </h4>
          <ul>
            {study.pains.map((s) => (
              <li key={s}>{t(s)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
function CaseStudyChapter({
  project,
  chapter,
}: {
  project: ShowcaseProject | null;
  chapter: number;
}) {
  const { t } = useLanguage();
  const study = getProductStudy(project);
  const segment = getCaseStudySegment(chapter);
  const phone = (before = false, confirmation = false) =>
    project ? (
      <ProductPhone project={project} before={before} confirmation={confirmation} />
    ) : (
      <RidePhone before={before} />
    );
  if (segment.layout === "comparison" || segment.layout === "mockups")
    return (
      <div className={`rapido-overview ${segment.layout === "mockups" ? "mockup-layout" : ""}`}>
        <div className="phone-frame before-frame">
          <span className="frame-label">{t("BEFORE")}</span>
          {phone(true)}
        </div>
        <div className="phone-frame after-frame">
          <span className="frame-label">{t("AFTER")}</span>
          {phone()}
        </div>
        {segment.layout === "mockups" ? (
          <div className="phone-frame after-frame">
            <span className="frame-label">{t("CONFIRMATION")}</span>
            {phone(false, true)}
          </div>
        ) : (
          <Persona project={project} />
        )}
      </div>
    );
  if (segment.layout === "persona")
    return (
      <div className="product-chapter-body">
        <Persona full project={project} />
        <div className="chapter-note">
          <span>01 / {t("CONTEXT")}</span>
          <h3>{t(project ? study.audience : "One commute. Too many apps.")}</h3>
          <p>{t(study.context)}</p>
          <p>{t(study.priority)}</p>
        </div>
      </div>
    );
  const content = study.chapters[chapter === 2 || chapter === 5 || chapter === 6 ? chapter : 7];
  return (
    <div className="product-research">
      <div>
        <span>
          {String(chapter + 1).padStart(2, "0")} / {t(segment.label)}
        </span>
        <h3>{t(content.title)}</h3>
        <p>{t(content.intro)}</p>
        {project && chapter === 7 && (
          <div className="project-case-metrics">
            {project.metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{t(label)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="product-insight-list">
        {content.items.map(([title, body], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h4>{t(title)}</h4>
              <p>{t(body)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
export function ProductShowcase() {
  const { t } = useLanguage();
  const [chapter, setChapter] = useState(0);
  const [selected, setSelected] = useState(0);
  const [dialog, setDialog] = useState<"code" | "share" | null>(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const project = selected === 0 ? null : (showcaseProjects[selected - 1] ?? null);
  const choose = (index: number) => {
    setSelected(index);
    setChapter(0);
  };
  const code = `<section aria-label="${project?.name ?? "Rapido"}">\n  <h1>${project?.name ?? "Rapido"}</h1>\n  <p>${project?.description ?? rapidoCase.description}</p>\n</section>`;
  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <section
      id="products"
      className={`products-section ${expanded ? "product-expanded" : ""}`}
      aria-labelledby="products-title"
    >
      <img
        className="products-background"
        src={backdrop.url}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="products-inner">
        <header className="products-heading">
          <span>
            {t("CHAPTER 5")} <b>/</b> <span className="heading-category">{t("PRODUCTS")}</span>
          </span>
          <h2 id="products-title">
            {t("Things built because")}
            <br />
            <em>{t("nobody else could.")}</em>
          </h2>
        </header>
        <div className="product-browser">
          <div className="product-browser-toolbar">
            <div className="browser-lights">
              <i />
              <i />
              <i />
            </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("Previous project")}
              onClick={() => choose(nextShowcaseIndex(selected, -1))}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("Next project")}
              onClick={() => choose(nextShowcaseIndex(selected, 1))}
            >
              <ChevronRight />
            </Button>
            <div className="browser-address">
              <LockKeyhole />
              portfolio.shivam.dev
            </div>
            <Button
              variant="ghost"
              size="icon"
              title={t("Share project")}
              aria-label={t("Share project")}
              onClick={() => {
                setCopied(false);
                setDialog("share");
              }}
            >
              <Share />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title={t("Next project")}
              aria-label={t("Browse another project")}
              onClick={() => choose(nextShowcaseIndex(selected, 1))}
            >
              <Plus />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              title={t("Expand showcase")}
              aria-label={t("Expand showcase")}
              aria-pressed={expanded}
              onClick={() => setExpanded(!expanded)}
            >
              <Copy />
            </Button>
          </div>
          <div className="product-browser-body">
            <aside className="product-sidebar">
              <div className="product-wordmark">certifier</div>
              <nav aria-label={t("Product case study chapters")}>
                {productChapters.map((label, index) => {
                  const Icon = chapterIcons[index] ?? Home;
                  return (
                    <Button
                      variant="ghost"
                      key={label}
                      className={chapter === index ? "active" : ""}
                      aria-pressed={chapter === index}
                      onClick={() => setChapter(index)}
                    >
                      <Icon />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {t(label)}
                    </Button>
                  );
                })}
              </nav>
              <img src={botanical.url} alt="" loading="lazy" decoding="async" />
            </aside>
            <div className="product-main">
              <div className="product-chapter-top">
                <span>
                  {t("CHAPTER 5")} / {t("PRODUCTS")}
                </span>
                <span>——— 2024</span>
              </div>
              <header className="featured-product">
                <div className={`featured-logo ${project ? `theme-${project.theme}` : ""}`}>
                  {project ? (
                    project.name.slice(0, 1)
                  ) : (
                    <svg viewBox="0 0 60 64" aria-hidden="true">
                      <ellipse cx="13" cy="13" rx="4" ry="6" transform="rotate(-28 13 13)" />
                      <ellipse cx="26" cy="10" rx="4" ry="5" />
                      <ellipse cx="39" cy="13" rx="4" ry="5" transform="rotate(25 39 13)" />
                      <ellipse cx="48" cy="20" rx="3.5" ry="4.5" transform="rotate(45 48 20)" />
                      <path d="M17 29Q28 22 40 28L39 45Q38 58 28 58Q18 58 17 46Z" />
                      <path d="M13 22Q28 29 46 23L44 28Q28 33 15 27Z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3>{project?.name ?? "Rapido"}</h3>
                  <p>{t(project?.description ?? rapidoCase.description)}</p>
                  <div className="featured-tags">
                    <span>
                      <i />
                      {t("Live Product")}
                    </span>
                    <span>{t(project ? "Ecosystem" : "Mobile App")}</span>
                    <span>{t(project ? "Community" : "B2C")}</span>
                  </div>
                </div>
                <p className="featured-summary">
                  {t(
                    project
                      ? project.description
                      : "Rapido focused on solving everyday commute frictions — fare transparency, long wait times, and the hassle of switching between multiple apps.",
                  )}
                </p>
              </header>
              <div className="product-stage" aria-live="polite">
                <CaseStudyChapter
                  key={`${selected}-${chapter}`}
                  project={project}
                  chapter={chapter}
                />
              </div>
              <nav className="product-filmstrip" aria-label={t("Case study previews")}>
                {productChapters.map((label, index) => {
                  return (
                    <Button
                      variant="ghost"
                      key={label}
                      className={chapter === index ? "active" : ""}
                      aria-label={t(`Show ${label}`)}
                      aria-pressed={chapter === index}
                      onClick={() => setChapter(index)}
                    >
                      <span className={`film-preview film-${index}`}>
                        {index === 1 ? (
                          project ? (
                            <Users />
                          ) : (
                            <img src={persona.url} alt="" loading="lazy" />
                          )
                        ) : index === 5 || index === 7 ? (
                          <span className="film-bars">
                            <i />
                            <i />
                            <i />
                            <i />
                          </span>
                        ) : (
                          <span className="film-sheets">
                            <i />
                            <i />
                            <i />
                          </span>
                        )}
                      </span>
                      <span>{t(label)}</span>
                    </Button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <div className="product-project-shelf">
          {showcaseProjects.map((item, index) => (
            <article
              className={`product-project-card theme-${item.theme} ${selected === index + 1 ? "is-selected" : ""}`}
              key={item.id}
            >
              <Button
                variant="ghost"
                className="project-cover"
                aria-label={t(`Explore ${item.name}`)}
                onClick={() => choose(index + 1)}
              >
                <div className="project-cover-nav">
                  <strong>{item.name}</strong>
                  <span>
                    {t("Product")} {t("Community")}
                  </span>
                  <b>{t("Join")}</b>
                </div>
                <h3>{t(item.headline)}</h3>
                <img src={item.art} alt="" loading="lazy" decoding="async" />
              </Button>
              <div className="project-card-copy">
                <h3>{item.name}</h3>
                <p>{t(item.description)}</p>
                <div className="project-card-metrics">
                  {item.metrics.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{t(label)}</span>
                    </div>
                  ))}
                </div>
                <div className="project-card-actions">
                  <Button
                    onClick={() => {
                      choose(index + 1);
                      document.getElementById("products-title")?.scrollIntoView({
                        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                          ? "instant"
                          : "smooth",
                      });
                    }}
                  >
                    {t(
                      item.id === "hat"
                        ? "Join Community"
                        : item.id === "nexus"
                          ? "Explore Ecosystem"
                          : item.id === "hela"
                            ? "Explore"
                            : "Explore Platform",
                    )}
                    <ArrowUpRight />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      choose(index + 1);
                      setDialog("code");
                    }}
                  >
                    {item.id === "hela" ? <Globe /> : <Code2 />}
                    {t(item.id === "hela" ? "View Work" : "View Code")}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <nav className="product-pagination" aria-label={t("Select featured product")}>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("Previous featured product")}
            onClick={() => choose(nextShowcaseIndex(selected, -1))}
          >
            <ArrowLeft />
          </Button>
          {["Rapido", ...showcaseProjects.map((p) => p.name)].map((name, index) => (
            <Button
              variant="ghost"
              size="icon"
              className={selected === index ? "active" : ""}
              key={name}
              aria-label={t(`Feature ${name}`)}
              aria-pressed={selected === index}
              onClick={() => choose(index)}
            >
              <span />
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("Next featured product")}
            onClick={() => choose(nextShowcaseIndex(selected, 1))}
          >
            <ArrowRight />
          </Button>
        </nav>
      </div>
      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
      >
        <DialogContent className="product-dialog">
          <DialogTitle>
            {project?.name ?? "Rapido"} / {t(dialog === "share" ? "Share" : "Interface preview")}
          </DialogTitle>
          <DialogDescription>
            {t(dialog === "share" ? "Products & case studies" : "Reference interface study")}
          </DialogDescription>
          {dialog === "share" ? (
            <Button onClick={() => copy(`${window.location.origin}/#products`)}>
              <Copy />
              {t(copied ? "Copied" : "Copy link")}
            </Button>
          ) : (
            <>
              <pre>
                <code>{code}</code>
              </pre>
              <Button onClick={() => copy(code)}>
                <Copy />
                {t(copied ? "Copied" : "Copy code")}
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
