import { useLanguage } from "@/components/language-provider";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Instagram,
  Facebook,
  Compass,
  Users,
  CalendarDays,
  Handshake,
  CodeXml,
  ChartNoAxesCombined,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import background from "@/assets/intro/background-port39.webp.asset.json";
import paper from "@/assets/intro/paper.webp.asset.json";
import portrait from "@/assets/intro/portrait-optimized.webp.asset.json";

const statistics = [
  {
    icon: Compass,
    value: "20+",
    label: "Communities",
    target: ".journey-section",
    filter: "Community",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Community Members",
    target: ".journey-section",
    filter: "Community",
  },
  {
    icon: CalendarDays,
    value: "200+",
    label: "Events & Programs",
    target: ".journey-section",
    filter: "Community",
  },
  { icon: Handshake, value: "40+", label: "Global Partners", target: ".work-section" },
  {
    icon: CodeXml,
    value: "500+",
    label: "Builders Supported",
    target: ".journey-section",
    filter: "Developer Tools",
  },
  { icon: ChartNoAxesCombined, value: "5M+", label: "Total Impressions", target: ".work-section" },
];

function goTo(selector: string) {
  const target = document.querySelector(selector);
  target?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  });
}

export function Introduction() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const left = section.querySelector<HTMLElement>(".intro-left");
    const right = section.querySelector<HTMLElement>(".intro-right");
    if (!left || !right) return;
    const update = () => {
      const narrow = window.innerWidth <= 700;
      const translated = language !== "en";
      const height = narrow
        ? Math.max(left.offsetTop + left.offsetHeight, right.offsetTop + right.offsetHeight) + 165
        : translated
          ? 150 + Math.max(left.offsetHeight, right.offsetHeight) + 165
          : Math.max((left.offsetHeight + 32) / 0.637, (right.offsetHeight + 32) / 0.607);
      section.style.setProperty("--intro-required-height", `${Math.ceil(height)}px`);
    };
    const observer = new ResizeObserver(update);
    observer.observe(left);
    observer.observe(right);
    window.addEventListener("resize", update);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [language]);
  const [dialog, setDialog] = useState<"principles" | "contact" | "instagram" | "facebook" | null>(
    null,
  );
  const [copied, setCopied] = useState(false);
  const [activeStat, setActiveStat] = useState<string | null>(null);
  const openStat = (stat: (typeof statistics)[number]) => {
    setActiveStat(stat.label);
    window.setTimeout(() => {
      if ("filter" in stat && stat.filter)
        window.dispatchEvent(new CustomEvent("journey-filter", { detail: stat.filter }));
      goTo(stat.target);
      window.setTimeout(() => setActiveStat(null), 1400);
    }, 380);
  };
  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--intro-x",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 8}px`,
    );
  };
  return (
    <>
      <section
        ref={sectionRef}
        className="intro-section"
        id="introduction"
        aria-label={t("Introduction")}
        onPointerMove={move}
        onPointerLeave={(event) => event.currentTarget.style.setProperty("--intro-x", "0px")}
      >
        <img
          className="intro-background"
          src={background.url}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <picture>
          <source media="(max-width: 700px)" srcSet={paper.url} />
          <img className="intro-mobile-paper" alt="" decoding="async" />
        </picture>
        <nav className="intro-nav" aria-label={t("Main navigation")}>
          <Button variant="ghost" onClick={() => goTo(".expertise-page")}>
            {t("Services")}
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">{t("About")}</Link>
          </Button>
          <Button variant="ghost" onClick={() => setDialog("principles")}>
            {t("Our Principles")}
          </Button>
          <Button variant="ghost" onClick={() => goTo(".journey-section")}>
            {t("Community")}
          </Button>
          <Button variant="ghost" onClick={() => setDialog("contact")}>
            {t("Contact")}
          </Button>
          <div className="intro-socials">
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("Instagram")}
              title={t("Instagram")}
              onClick={() => setDialog("instagram")}
            >
              <Instagram />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("Facebook")}
              title={t("Facebook")}
              onClick={() => setDialog("facebook")}
            >
              <Facebook />
            </Button>
          </div>
        </nav>
        <div className="intro-left">
          <span className="intro-eyebrow">{t("INTRODUCTION")}</span>
          <h1>
            {t("Hy! I Am")}
            <br />
            <span>{t("John Deo.")}</span>
            <i className="intro-rays" aria-hidden="true">
              <b />
              <b />
              <b />
            </i>
          </h1>
          <div className="intro-biography">
            <h2>{t("Hi, I'm Shivam.")}</h2>
            <p>
              {t(
                "Hi, I'm Shivam. I've spent the last few years helping Web3, open-source and developer communities feel a little less lonely. In 2025 I started DoraDAO with one stubborn idea: take Web3 to the cities everyone skips.",
              )}
            </p>
            <span className="intro-underline" aria-hidden="true" />
            <Button
              variant="ghost"
              className="intro-experience"
              onClick={() => goTo(".work-section")}
              aria-label={t("Explore eight years of experience")}
            >
              <strong>08</strong>
              <span>
                {t("YEARS")}
                <br />
                {t("EXPERIENCE")}
              </span>
            </Button>
          </div>
        </div>
        <picture>
          <source media="(max-width: 700px)" srcSet={portrait.url} />
          <img
            className="intro-mobile-portrait"
            alt={t("Pixel-art illustration of Shivam in a yellow hoodie and backpack")}
            decoding="async"
          />
        </picture>
        <div className="intro-right">
          <p className="intro-manifesto">
            {t("I design beautifully simple things,")}
            <br />
            {t("and I love what I do.")}
            <span className="intro-underline" aria-hidden="true" />
          </p>
          <div className="intro-outcome">
            <p>
              {t("From first conversation to global")}
              <br /> {t("momentum.")}
            </p>
            <strong>{t("200K active users in month one.")}</strong>
            <div className="intro-actions">
              <Button className="intro-primary" onClick={() => goTo(".journey-section")}>
                {t("Explore the trail ")}
                <ArrowDownRight />
              </Button>
              <Button
                variant="outline"
                className="intro-secondary"
                onClick={() => goTo(".work-section")}
              >
                {t("See the work ")}
                <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="intro-statistics" aria-label={t("Community impact")}>
          <div className="intro-statistics-track">
            {[0, 1].map((copy) => (
              <div className="intro-statistics-set" key={copy} aria-hidden={copy === 1}>
                {statistics.map((stat) => (
                  <Button
                    key={stat.label}
                    variant="ghost"
                    className="intro-stat"
                    data-active={activeStat === stat.label}
                    onClick={() => openStat(stat)}
                    tabIndex={copy === 1 ? -1 : 0}
                    title={t(String(`Explore ${stat.label.toLowerCase()}`))}
                  >
                    <stat.icon />
                    <span>
                      <strong>{stat.value}</strong>
                      <small>{t(String(stat.label))}</small>
                    </span>
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) {
            setDialog(null);
            setCopied(false);
          }
        }}
      >
        <DialogContent className="intro-dialog">
          <DialogTitle>
            {t(
              String(
                dialog === "principles"
                  ? "Different communities. Same purpose."
                  : dialog === "contact"
                    ? "Let’s start a conversation."
                    : dialog === "instagram"
                      ? "Instagram"
                      : "Facebook",
              ),
            )}
          </DialogTitle>
          <DialogDescription>
            {t(
              String(
                dialog === "principles"
                  ? "Take Web3 to the cities everyone skips. Make developer communities feel a little less lonely."
                  : dialog === "contact"
                    ? "Find the communities, products and people behind DoraDAO."
                    : "The profile link has not been provided yet.",
              ),
            )}
          </DialogDescription>
          {dialog === "principles" && (
            <div className="intro-principles">
              <p>
                <span>01</span>
                {t(" Communities first.")}
              </p>
              <p>
                <span>02</span>
                {t(" Make room for builders.")}
              </p>
              <p>
                <span>03</span>
                {t(" From local conversations to global momentum.")}
              </p>
            </div>
          )}
          {dialog === "contact" && (
            <Button
              variant="outline"
              className="intro-copy"
              onClick={async () => {
                try {
                  const url = new URL(window.location.href);
                  url.hash = "";
                  await navigator.clipboard.writeText(url.href);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied ? <Check /> : <Copy />}
              {t(String(copied ? "Portfolio link copied" : "Copy portfolio link"))}
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
