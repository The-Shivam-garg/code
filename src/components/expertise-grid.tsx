import { useLanguage } from "@/components/language-provider";
import { useState, type PointerEvent } from "react";
import {
  CalendarDays,
  Home,
  Users,
  Globe,
  GraduationCap,
  CodeXml,
  FileText,
  Box,
  Lightbulb,
  ChartNoAxesCombined,
  Megaphone,
  Share2,
  BookOpen,
  ShipWheel,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import campus from "@/assets/campus.webp.asset.json";
import nexus from "@/assets/nexus.webp.asset.json";
import dora from "@/assets/dora.webp.asset.json";
import zoth from "@/assets/zoth.webp.asset.json";
import code from "@/assets/code.webp.asset.json";
import solana from "@/assets/solana.webp.asset.json";
import opensource from "@/assets/opensource.webp.asset.json";
import avatar1 from "@/assets/avatar-1.webp.asset.json";
import avatar2 from "@/assets/avatar-2.webp.asset.json";
import avatar3 from "@/assets/avatar-3.webp.asset.json";
import avatar4 from "@/assets/avatar-4.webp.asset.json";
import dots from "@/assets/map-dots.json";

type PanelId = "community" | "product" | "engineering" | "gtm";
type Detail = { title: string; description: string; image?: string };
const avatars = [avatar1.url, avatar2.url, avatar3.url, avatar4.url];
const products = [
  { title: "Nexus Chain", description: "Ecosystem Growth", image: nexus.url, count: "+12" },
  { title: "DoraDAO", description: "Community Platform", image: dora.url, count: "+8" },
  { title: "Zoth", description: "Stablecoin Neobank", image: zoth.url, count: "+6" },
] as const;
const articles = [
  {
    title: "Getting Started with Nexus Chain",
    description: "Tutorial · Blockchain",
    image: code.url,
    tags: ["Tutorial", "Blockchain"],
  },
  {
    title: "Building on Solana: A Developer Guide",
    description: "Guide · Web3",
    image: solana.url,
    tags: ["Guide", "Web3"],
  },
  {
    title: "Open Source Contributions",
    description: "Open Source · Tools",
    image: opensource.url,
    tags: ["Open Source", "Tools"],
  },
] as const;
const regions = [
  { name: "North America", x: 75, y: 68, color: "america" },
  { name: "South America", x: 105, y: 111, color: "south" },
  { name: "Europe", x: 195, y: 53, color: "europe" },
  { name: "Asia", x: 306, y: 62, color: "asia" },
  { name: "Oceania", x: 349, y: 129, color: "oceania" },
];
const panels: {
  id: PanelId;
  title: string;
  subtitle: string;
  items: { icon: LucideIcon; title: string; sub: string }[];
  tabs: string[];
}[] = [
  {
    id: "community",
    title: "Community",
    subtitle: "Events, Hackathons, Fellowships",
    items: [
      { icon: Users, title: "Organize & Host", sub: "Events & Meetups" },
      { icon: Users, title: "Build & Grow", sub: "Communities" },
      { icon: GraduationCap, title: "Fellowship Programs", sub: "Talents & Mentorship" },
    ],
    tabs: ["Event", "Hackathon", "Fellowship", "Workshop"],
  },
  {
    id: "product",
    title: "Product",
    subtitle: "From idea to adoption",
    items: [
      { icon: Lightbulb, title: "Support Adoption", sub: "Feedback & Insights" },
      { icon: ChartNoAxesCombined, title: "Go-to-Market", sub: "Positioning & Growth" },
      { icon: Box, title: "Ecosystem Growth", sub: "Partnerships & Integrations" },
    ],
    tabs: ["Strategy", "Partnerships", "Positioning", "Launch"],
  },
  {
    id: "engineering",
    title: "Engineering",
    subtitle: "Technical content & enablement",
    items: [
      { icon: FileText, title: "Write & Share", sub: "Technical Content" },
      { icon: CodeXml, title: "Simplify Complex Ideas", sub: "Guides, Tutorials, Threads" },
      { icon: Users, title: "Enable Builders", sub: "Docs, Workshops, Support" },
    ],
    tabs: [],
  },
  {
    id: "gtm",
    title: "GTM",
    subtitle: "Activating regions, communities\nand product growth",
    items: [
      { icon: Globe, title: "Market Expansion", sub: "Region Activation" },
      { icon: Megaphone, title: "Campaigns", sub: "Product & Community" },
      { icon: Share2, title: "Partnerships", sub: "Collaborations & Alliances" },
    ],
    tabs: ["Region Activation", "Campaigns", "Partnerships", "Growth"],
  },
];

function Avatars({ count = "+5" }: { count?: string }) {
  const { t } = useLanguage();
  return (
    <div className="people">
      {avatars.map((url, i) => (
        <img
          key={url}
          src={url}
          alt={t(String(`Community member ${i + 1}`))}
          loading="lazy"
          decoding="async"
        />
      ))}
      <span>{count}</span>
    </div>
  );
}

export function ExpertiseGrid() {
  const { t } = useLanguage();
  const [detail, setDetail] = useState<Detail | null>(null);
  const [hovered, setHovered] = useState<PanelId | null>(null);
  const move = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${((e.clientX - r.left) / r.width - 0.5) * 14}px`,
    );
    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${((e.clientY - r.top) / r.height - 0.5) * 12}px`,
    );
  };
  return (
    <>
      <main className="expertise-page">
        <div className="expertise-grid" data-active={hovered ?? "none"}>
          {panels.map((panel) => (
            <section
              key={panel.id}
              className={`expertise-panel panel-${panel.id}`}
              aria-label={t(String(panel.title))}
              onPointerEnter={() => setHovered(panel.id)}
              onPointerDown={() => setHovered(panel.id)}
              onFocusCapture={() => setHovered(panel.id)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setHovered(null);
              }}
              onPointerMove={move}
              onPointerLeave={(e) => {
                setHovered(null);
                e.currentTarget.style.setProperty("--mouse-x", "0px");
                e.currentTarget.style.setProperty("--mouse-y", "0px");
              }}
            >
              <Panel panel={panel} open={setDetail} />
            </section>
          ))}
          <span className="grid-intersection" aria-hidden="true" />
        </div>
      </main>
      <Dialog
        open={detail !== null}
        onOpenChange={(open) => {
          if (!open) setDetail(null);
        }}
      >
        <DialogContent className="expertise-dialog">
          <DialogTitle>{t(String(detail?.title))}</DialogTitle>
          <DialogDescription>{t(String(detail?.description))}</DialogDescription>
          {detail?.image && (
            <img
              className="detail-image"
              src={detail.image}
              alt={t(String(detail.title))}
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function Panel({ panel, open }: { panel: (typeof panels)[number]; open: (d: Detail) => void }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [tab, setTab] = useState(0);
  const [nav, setNav] = useState(
    panel.id === "community" ? 0 : panel.id === "product" ? 2 : panel.id === "engineering" ? 3 : 0,
  );
  const [region, setRegion] = useState<string | null>(null);
  const navIcons =
    panel.id === "community"
      ? [CalendarDays, Home, Users, CalendarDays, Globe, GraduationCap]
      : [
          panel.id === "product" ? Box : Home,
          Home,
          Users,
          FileText,
          panel.id === "engineering" ? CodeXml : Globe,
          Globe,
          GraduationCap,
        ];
  const defaultTitle =
    panel.id === "community"
      ? "Campus Hackathon"
      : panel.id === "product"
        ? "Product Initiatives"
        : panel.id === "engineering"
          ? "Technical Content"
          : "Global Activation";
  const displayTitle =
    selected === null
      ? defaultTitle
      : panel.id === "community"
        ? ["Campus Hackathon", "Community Meetups", "Fellowship Programs"][selected]
        : (panel.items[selected]?.title ?? defaultTitle);
  const HeaderIcon =
    panel.id === "community"
      ? CalendarDays
      : panel.id === "product"
        ? ShipWheel
        : panel.id === "engineering"
          ? BookOpen
          : Globe;
  const shownProducts =
    tab === 1
      ? [...products].reverse()
      : tab === 2
        ? [products[1], products[0], products[2]]
        : products;
  const shownArticles =
    selected === 1
      ? [articles[1], articles[0], articles[2]]
      : selected === 2
        ? [articles[2], articles[1], articles[0]]
        : articles;
  return (
    <div className="panel-inner">
      <div className="panel-copy">
        <h1>{t(String(panel.title))}</h1>
        <p className="panel-subtitle">{t(String(panel.subtitle))}</p>
        <div className="capability-list">
          {panel.items.map((item, i) => (
            <Button
              key={item.title}
              variant="ghost"
              className={`capability ${selected === i ? "selected" : ""}`}
              aria-pressed={selected === i}
              onClick={() => {
                setSelected(selected === i ? null : i);
                setTab(i);
              }}
            >
              <item.icon />
              <span>
                <strong>{t(String(item.title))}</strong>
                <small>{t(String(item.sub))}</small>
              </span>
            </Button>
          ))}
        </div>
      </div>
      <div className="panel-visual">
        <span className="stipple" aria-hidden="true" />
        <span className="accent-strokes" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div className="mini-app">
          <nav className="mini-sidebar" aria-label={t(String(`${panel.title} tools`))}>
            {navIcons.map((Icon, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                className={`sidebar-button ${nav === i ? "active" : ""}`}
                title={t(
                  String(
                    [
                      defaultTitle,
                      "Overview",
                      "Community",
                      "Content",
                      "Resources",
                      "Global network",
                      "Learning",
                    ][i],
                  ),
                )}
                aria-label={t(
                  String(
                    `${panel.title}: ${[defaultTitle, "Overview", "Community", "Content", "Resources", "Global network", "Learning"][i]}`,
                  ),
                )}
                aria-pressed={nav === i}
                onClick={() => {
                  setNav(i);
                  if (i !== 0) setSelected((i - 1) % 3);
                  else setSelected(null);
                }}
              >
                <Icon />
              </Button>
            ))}
          </nav>
          <div className="mini-content">
            <div className="mini-header">
              <HeaderIcon />
              <strong>{t(String(displayTitle))}</strong>
              {panel.id === "community" ? (
                <span className="live-label">{t("LIVE")}</span>
              ) : panel.id !== "product" ? (
                <Avatars count={panel.id === "gtm" ? "+3" : "+5"} />
              ) : null}
            </div>
            {panel.id === "community" && (
              <>
                <div className="event-meta">
                  <span>
                    {t("Sharda University, Agra")}
                    <br />
                    {t("200+ participants")}
                  </span>
                  <Avatars count="+196" />
                </div>
                <Button
                  variant="ghost"
                  className="event-image"
                  aria-label={t(String(`Open ${displayTitle}`))}
                  onClick={() =>
                    open({
                      title: displayTitle ?? defaultTitle,
                      description: "Sharda University, Agra · 200+ participants",
                      image: campus.url,
                    })
                  }
                >
                  <img
                    src={campus.url}
                    alt={t("Build What's Next campus hackathon")}
                    loading="lazy"
                    decoding="async"
                  />
                </Button>
              </>
            )}
            {panel.id === "product" && (
              <div className="product-list">
                {shownProducts.map((p) => (
                  <Button
                    variant="ghost"
                    className="product-item"
                    key={p.title}
                    onClick={() => open(p)}
                  >
                    <img src={p.image} alt={t(String(p.title))} loading="lazy" decoding="async" />
                    <div>
                      <strong>{t(String(p.title))}</strong>
                      <small>{t(String(p.description))}</small>
                      <Avatars count={p.count} />
                    </div>
                  </Button>
                ))}
              </div>
            )}
            {panel.id === "engineering" && (
              <div className="article-list">
                {shownArticles.map((a) => (
                  <Button
                    key={a.title}
                    variant="ghost"
                    className="article-item"
                    onClick={() => open(a)}
                  >
                    <img src={a.image} alt="" loading="lazy" decoding="async" />
                    <span>
                      <strong>{t(String(a.title))}</strong>
                      <span className="article-tags">
                        {a.tags.map((tag) => (
                          <small key={tag}>{t(tag)}</small>
                        ))}
                      </span>
                    </span>
                  </Button>
                ))}
              </div>
            )}
            {panel.id === "gtm" && (
              <div className="world-map">
                <svg viewBox="0 0 390 165" aria-label={t("Global activation map")}>
                  <g className="map-land">
                    {dots.map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r=".75" />
                    ))}
                  </g>
                  <g className="map-connections">
                    {regions
                      .filter((r) => r.name !== "North America")
                      .map((r) => (
                        <path
                          key={r.name}
                          d={`M75,68 Q${(75 + r.x) / 2},${Math.min(68, r.y) - 55} ${r.x},${r.y}`}
                        />
                      ))}
                  </g>
                </svg>
                {regions.map((r) => (
                  <Button
                    key={r.name}
                    size="icon"
                    variant="ghost"
                    className={`region-marker marker-${r.color} ${region === r.name ? "selected" : ""}`}
                    style={{ left: `${(r.x / 390) * 100}%`, top: `${(r.y / 165) * 100}%` }}
                    aria-label={t(String(`Activate ${r.name}`))}
                    aria-pressed={region === r.name}
                    title={t(String(r.name))}
                    onClick={() => setRegion(region === r.name ? null : r.name)}
                  >
                    <span />
                  </Button>
                ))}
                {region && <span className="region-name">{t(String(region))}</span>}
              </div>
            )}
            {panel.tabs.length > 0 && (
              <div className="mini-tabs" aria-label={t(String(`${panel.title} view`))}>
                {panel.tabs.map((tabLabel, i) => (
                  <Button
                    key={tabLabel}
                    variant="ghost"
                    className={tab === i ? "active" : ""}
                    aria-pressed={tab === i}
                    onClick={() => {
                      setTab(i);
                      if (panel.id === "community") setSelected(i === 0 ? null : Math.min(i, 2));
                      if (panel.id === "gtm")
                        setRegion(
                          i === 0 ? null : (["Europe", "Asia", "North America"][i - 1] ?? null),
                        );
                    }}
                  >
                    {t(tabLabel)}
                  </Button>
                ))}
              </div>
            )}
            {panel.id !== "engineering" && (
              <div className={`content-lines lines-${tab}`} aria-hidden="true">
                <span />
                <span />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
