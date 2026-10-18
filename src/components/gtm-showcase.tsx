import { useLanguage } from "@/components/language-provider";
import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Users,
  Handshake,
  Globe2,
  TrendingUp,
  Rocket,
  X,
  Plus,
  Minus,
  Maximize,
  Search,
  LocateFixed,
  RotateCcw,
  MousePointer2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  activityStatuses,
  filterGtmRegions,
  gtmCountrySquares,
  gtmRegions,
  gtmSummary,
  indiaMetrics,
  type ActivityStatus,
  type CountrySquare,
  type GtmRegion,
  type GtmRegionFilter,
} from "@/lib/gtm-showcase";
import { useGtmMapZoom } from "@/hooks/use-gtm-map-zoom";
import { mapLocations, MAP_VIEW, type MapLocation } from "@/lib/gtm-map-view";

function RegionSilhouette({ region }: { region: GtmRegion["id"] }) {
  const { t } = useLanguage();
  const points = gtmCountrySquares.filter((point) => point.region === region);
  const xs = points.map((point) => point.x),
    ys = points.map((point) => point.y);
  const left = Math.min(...xs),
    top = Math.min(...ys);
  return (
    <svg
      className="gtm-mini-map"
      viewBox={`${left} ${top} ${Math.max(...xs) - left + 5} ${Math.max(...ys) - top + 5}`}
      aria-hidden="true"
    >
      {points.map((point) => (
        <rect key={`${point.x}-${point.y}`} x={point.x} y={point.y} width="4" height="4" />
      ))}
    </svg>
  );
}
function RegionMetrics({ region }: { region: GtmRegion }) {
  const { t } = useLanguage();
  if (region.factors.length === 0) return null;
  const icons = [Handshake, TrendingUp, Rocket];
  return (
    <div className="gtm-metrics">
      {region.factors.map((factor, index) => {
        const Icon = icons[index] ?? Globe2;
        return (
          <span key={factor.label}>
            <span className="gtm-metric-top">
              <Icon aria-hidden="true" />
              <strong>{t(String(factor.value))}</strong>
            </span>
            <small>{t(String(factor.label))}</small>
          </span>
        );
      })}
    </div>
  );
}
function RegionResources({ region }: { region: GtmRegion }) {
  const { t } = useLanguage();
  if (region.resources.length === 0) return null;
  return (
    <div className="gtm-tags">
      {region.resources.map((resource) => (
        <a
          key={resource.label}
          className="gtm-resource-link"
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          title={t(String(`${resource.kind}: ${resource.label}`))}
        >
          <small>{t(String(resource.kind))}</small>
          {t(String(resource.label))}
          <ArrowUpRight aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
function CountryContent({ point }: { point: CountrySquare }) {
  const { t } = useLanguage();
  const region = gtmRegions.find((item) => item.id === point.region);
  return (
    <>
      <span className={`gtm-country-status status-${point.status ?? "unassigned"}`}>
        {t(
          String(
            activityStatuses.find((item) => item.id === point.status)?.label ?? "Not yet assigned",
          ),
        )}
      </span>
      {point.code === "IN" && (
        <div className="gtm-country-metrics">
          <span>
            <strong>{t(String(indiaMetrics.communities))}</strong>
            {t(" Communities")}
          </span>
          <span>
            <strong>{t(String(indiaMetrics.members))}</strong>
            {t(" Members")}
          </span>
          <span>
            <strong>{t(String(indiaMetrics.events))}</strong>
            {t(" Events")}
          </span>
        </div>
      )}
      <p className="gtm-country-note">
        {t(
          String(
            point.status === "active"
              ? "Part of the active community network."
              : point.status === "planned"
                ? "Community activation is being planned."
                : point.status === "connect"
                  ? "A place to connect with builders and community leaders."
                  : "Country activity has not been assigned yet.",
          ),
        )}
      </p>
      <div className="gtm-responsibilities">
        <h3>{t(String(point.status === "active" ? "Regional focus" : "Areas to explore"))}</h3>
        <ul>
          {(region?.responsibilities.length
            ? region.responsibilities
            : [
                "Connect with local community leaders.",
                "Explore developer programs and ecosystem partnerships.",
              ]
          ).map((item) => (
            <li key={item}>{t(String(item))}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export function GtmShowcase() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<GtmRegionFilter>("all");
  const [statusFilter, setStatusFilter] = useState<ActivityStatus | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [selected, setSelected] = useState<CountrySquare | null>(
    () =>
      gtmCountrySquares.find((point) => point.code === "IN" && point.state === "Tamil Nadu") ??
      null,
  );
  const [detail, setDetail] = useState<GtmRegion | null>(null);
  const [countryDetail, setCountryDetail] = useState<CountrySquare | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const mapZoom = useGtmMapZoom();
  const [search, setSearch] = useState("");
  const [locationLabel, setLocationLabel] = useState("World");
  const results = search.trim()
    ? mapLocations
        .filter((location) =>
          [location.label, t(location.label)].some((label) =>
            label.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()),
          ),
        )
        .slice(0, 8)
    : [];
  const focusLocation = (location: MapLocation) => {
    mapZoom.focus(location.points);
    setLocationLabel(location.label);
    setSearch("");
    setSelected(location.point ?? null);
  };
  const resetMap = () => {
    mapZoom.reset();
    setLocationLabel("World");
    setSearch("");
  };
  const regions = useMemo(() => filterGtmRegions(filter), [filter]);
  const chooseRegion = (id: GtmRegionFilter) => {
    setFilter(id);
    cardsRef.current?.scrollTo({ left: 0 });
    if (id === "all") resetMap();
    else {
      const location = mapLocations.find(
        (item) =>
          item.kind === "Region" &&
          item.label === gtmRegions.find((region) => region.id === id)?.label,
      );
      if (location) focusLocation(location);
    }
  };
  const scroll = (direction: number) =>
    cardsRef.current?.scrollBy({
      left: direction * 300,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  return (
    <section className="gtm-section" aria-labelledby="gtm-title">
      <div className="gtm-top">
        <header className="gtm-header">
          <div className="gtm-title-block">
            <div className="gtm-eyebrow">
              {t("GTM")}
              <span />
            </div>
            <h2 id="gtm-title">
              {t("Activating the GTM")}
              <br />
              {t("across the ")}
              <em>{t("Global.")}</em>
            </h2>
          </div>
          <p>
            {t(
              "Through communities, product advocacy, and tech — turning local energy into global momentum.",
            )}
          </p>
        </header>
        <div className="gtm-summary">
          {gtmSummary.map((metric, index) => {
            const Icon = index === 0 ? Globe2 : Users;
            return (
              <Button
                variant="ghost"
                key={metric.label}
                onClick={() => {
                  chooseRegion("all");
                  setStatusFilter(index === 0 ? null : "active");
                }}
              >
                <strong>{metric.value}</strong>
                <span>
                  <Icon />
                  {t(String(metric.label))}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="gtm-map">
        <div className="gtm-legend" aria-label={t("Filter country activity")}>
          {activityStatuses.map((status) => (
            <Button
              key={status.id}
              variant="ghost"
              aria-pressed={statusFilter === status.id}
              className={statusFilter === status.id ? "is-active" : ""}
              onClick={() => setStatusFilter(statusFilter === status.id ? null : status.id)}
            >
              <i className={`status-${status.id}`} />
              {t(String(status.label))}
            </Button>
          ))}
        </div>
        <div className="gtm-map-search">
          <div className="gtm-location-input">
            <Search />
            <input
              aria-label={t("Find a region, country, state or city")}
              placeholder={t("Find a location")}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && results[0]) focusLocation(results[0]);
                if (event.key === "Escape") setSearch("");
              }}
            />
          </div>
          {search && (
            <div className="gtm-location-results">
              {results.length ? (
                results.map((location) => (
                  <Button
                    variant="ghost"
                    key={`${location.kind}-${location.label}`}
                    onClick={() => focusLocation(location)}
                  >
                    <span>{t(String(location.label))}</span>
                    <small>{t(String(location.kind))}</small>
                  </Button>
                ))
              ) : (
                <p>{t("No matching locations")}</p>
              )}
            </div>
          )}
        </div>
        <div className="gtm-zoom-controls">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("Zoom in")}
            title={t("Zoom in")}
            onClick={() => mapZoom.scale(1.5)}
          >
            <Plus />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("Zoom out")}
            title={t("Zoom out")}
            onClick={() => mapZoom.scale(1 / 1.5)}
          >
            <Minus />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("Show whole world")}
            title={t("Show whole world")}
            onClick={resetMap}
          >
            <Maximize />
          </Button>
          <output aria-label={t("Map zoom")}>{mapZoom.transform.k.toFixed(1)}×</output>
        </div>
        <span className="gtm-map-location">{t(String(locationLabel))}</span>
        <div className="gtm-map-assistance">
          <span className="gtm-map-hint">
            <MousePointer2 />
            {t("Click or zoom to explore regions")}
          </span>
          {mapZoom.transform.k > 1.01 && (
            <Button variant="ghost" className="gtm-reset-view" onClick={resetMap}>
              <RotateCcw />
              {t("Reset View")}
            </Button>
          )}
        </div>
        <svg
          ref={mapZoom.svgRef}
          className="gtm-map-dots"
          viewBox={`${MAP_VIEW.x} ${MAP_VIEW.y} ${MAP_VIEW.width} ${MAP_VIEW.height}`}
          aria-label={t("Clickable country activity map")}
        >
          <defs>
            <linearGradient id="gtm-square-gradient">
              <stop className="gtm-glow-start" offset="0%" />
              <stop className="gtm-glow-mid" offset="50%" />
              <stop className="gtm-glow-end" offset="100%" />
            </linearGradient>
          </defs>
          <g transform={mapZoom.transform.toString()}>
            {gtmCountrySquares.map((point) => {
              const location = `${point.code}-${point.state ?? ""}`;
              const highlighted = hover === location;
              const muted =
                (statusFilter && point.status !== statusFilter) ||
                (filter !== "all" && point.region !== filter);
              return (
                <rect
                  key={`${point.x}-${point.y}`}
                  x={point.x}
                  y={point.y}
                  width="3.7"
                  height="3.7"
                  role="button"
                  tabIndex={0}
                  aria-label={t(
                    String(
                      `Explore ${point.state ? `${point.state}, ` : ""}${point.country} — ${activityStatuses.find((status) => status.id === point.status)?.label ?? "unassigned"}`,
                    ),
                  )}
                  className={`gtm-map-square status-${point.status ?? "unassigned"} ${highlighted ? "is-glowing" : ""} ${muted ? "is-muted" : ""}`}
                  onPointerEnter={() => setHover(location)}
                  onPointerLeave={() => setHover(null)}
                  onFocus={() => setHover(location)}
                  onBlur={() => setHover(null)}
                  onClick={() => setSelected(point)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelected(point);
                    }
                  }}
                />
              );
            })}
            {selected && (
              <circle
                className={`gtm-selected-point status-${selected.status ?? "unassigned"}`}
                cx={selected.x + 2}
                cy={selected.y + 2}
                r={5 / mapZoom.transform.k}
                strokeWidth={2 / mapZoom.transform.k}
              />
            )}
          </g>
        </svg>
        {selected && (
          <div className="gtm-country-popup">
            <div className="gtm-popup-heading">
              <strong>{t(String(selected.country))}</strong>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t(String(`Zoom to ${selected.state ?? selected.country}`))}
                title={t(String(`Zoom to ${selected.state ?? selected.country}`))}
                onClick={() => {
                  const location = mapLocations.find(
                    (item) =>
                      item.label === (selected.state ?? selected.country) &&
                      item.kind === (selected.state ? "State" : "Country"),
                  );
                  if (location) focusLocation(location);
                }}
              >
                <LocateFixed />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t(String(`Open ${selected.country} activity details`))}
                onClick={() => setCountryDetail(selected)}
              >
                <ArrowRight />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("Close country card")}
                onClick={() => setSelected(null)}
              >
                <X />
              </Button>
            </div>
            {selected.state && <small>{t(String(selected.state))}</small>}
            {selected.code === "IN" ? (
              <div className="gtm-popup-metrics">
                <span>
                  {t(String(indiaMetrics.communities))}
                  {t(" Communities")}
                </span>
                <span>
                  {t(String(indiaMetrics.members))}
                  {t(" Members")}
                </span>
                <span>
                  {t(String(indiaMetrics.events))}
                  {t(" Events")}
                </span>
              </div>
            ) : (
              <p>
                {t(
                  String(
                    activityStatuses.find((status) => status.id === selected.status)?.label ??
                      "Not yet assigned",
                  ),
                )}
                <br />
                {t(String(gtmRegions.find((region) => region.id === selected.region)?.label))}
              </p>
            )}
          </div>
        )}
      </div>
      <div className="gtm-highlights">
        <div className="gtm-toolbar">
          <div className="gtm-highlights-heading">
            <h3>
              {t("Region Highlights")}
              <span />
            </h3>
          </div>
          <div className="gtm-region-controls">
            <div className="gtm-filters" aria-label={t("Filter regions")}>
              <Button
                variant="ghost"
                aria-pressed={filter === "all"}
                className={filter === "all" ? "is-active" : ""}
                onClick={() => chooseRegion("all")}
              >
                {t("All Regions")}
              </Button>
              {gtmRegions.map((region) => (
                <Button
                  variant="ghost"
                  key={region.id}
                  aria-pressed={filter === region.id}
                  className={filter === region.id ? "is-active" : ""}
                  onClick={() => chooseRegion(region.id)}
                >
                  {t(String(region.label))}
                </Button>
              ))}
            </div>
            <div className="gtm-scroll-controls">
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("Previous regions")}
                title={t("Previous regions")}
                onClick={() => scroll(-1)}
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("Next regions")}
                title={t("Next regions")}
                onClick={() => scroll(1)}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="gtm-cards" ref={cardsRef}>
          {regions.map((region) => (
            <article className="gtm-card" key={region.id}>
              {region.image ? (
                <img
                  className="gtm-card-photo"
                  src={region.image}
                  alt={t(String(`${region.label} regional landscape`))}
                  loading="lazy"
                />
              ) : (
                <div className="gtm-card-photo gtm-photo-pending">
                  <Handshake />
                </div>
              )}
              <div className="gtm-card-content">
                <RegionSilhouette region={region.id} />
                <h4>{t(String(region.label))}</h4>
                <p>{t(String(region.description))}</p>
                <RegionMetrics region={region} />
                <div className="gtm-card-bottom">
                  <RegionResources region={region} />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="gtm-detail-arrow"
                    aria-label={t(String(`Explore ${region.label}`))}
                    title={t(String(`Explore ${region.label}`))}
                    onClick={() => setDetail(region)}
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Dialog
        open={detail !== null || countryDetail !== null}
        onOpenChange={(open) => {
          if (!open) {
            setDetail(null);
            setCountryDetail(null);
          }
        }}
      >
        <DialogContent className="gtm-dialog">
          {countryDetail ? (
            <>
              <DialogTitle>
                {t(String(countryDetail.state ? `${countryDetail.state}, ` : ""))}
                {t(String(countryDetail.country))}
              </DialogTitle>
              <DialogDescription>
                {t(String(gtmRegions.find((region) => region.id === countryDetail.region)?.label))}
                {t(" · Community & ecosystem activity")}
              </DialogDescription>
              <CountryContent point={countryDetail} />
            </>
          ) : (
            <>
              {detail?.image && (
                <img
                  className="gtm-dialog-photo"
                  src={detail.image}
                  alt={t(String(detail.label))}
                />
              )}
              <DialogTitle>{t(String(detail?.label))}</DialogTitle>
              <DialogDescription>{t(String(detail?.description))}</DialogDescription>
              {detail && (
                <>
                  <RegionMetrics region={detail} />
                  {detail.responsibilities.length > 0 && (
                    <div className="gtm-responsibilities">
                      <h3>{t("Core responsibilities")}</h3>
                      <ul>
                        {detail.responsibilities.map((item) => (
                          <li key={item}>{t(String(item))}</li>
                        ))}
                      </ul>
                      <RegionResources region={detail} />
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
