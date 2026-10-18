import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Menu, X, Copy, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LanguageSelector } from "@/components/language-selector";

export interface NavDestination {
  id: string;
  label: string;
  target?: string;
  to?: string;
  href?: string;
  isDownload?: boolean;
}

// All 11 unique destinations specified in Requirement 6:
// Home, Community, Resources, Product, Testimonials, Download CV, Expertise, Work, GTM Map, Journey, About
const homeNavItems: NavDestination[] = [
  { id: "home", label: "Home", target: "#gate" },
  { id: "expertise", label: "Expertise", target: ".expertise-page" },
  { id: "work", label: "Work", target: ".work-section" },
  { id: "gtm", label: "GTM Map", target: ".gtm-section" },
  { id: "journey", label: "Journey", target: ".journey-section" },
  { id: "community", label: "Community", target: "#village" },
  { id: "resources", label: "Resources", target: "#resources" },
  { id: "product", label: "Product", target: "#products" },
  { id: "testimonials", label: "Testimonials", target: "#postcards" },
];

const aboutInPageLinks: NavDestination[] = [
  { id: "the-book", label: "The Book", target: "#about-book" },
  { id: "rules", label: "Rules", target: ".about-rules" },
];

const smooth = () =>
  (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth") as ScrollBehavior;
const goTo = (selector: string) => {
  if (typeof document === "undefined") return;
  const el = document.querySelector(selector);
  el?.scrollIntoView({ behavior: smooth(), block: "start" });
};

export function SiteNav({ page }: { page: "home" | "about" }) {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);
      const line = window.innerHeight * 0.35;
      let currentId: string | null = null;
      const targetsToCheck = page === "home" ? homeNavItems : aboutInPageLinks;
      for (const item of targetsToCheck) {
        if (!item.target) continue;
        const el = document.querySelector(item.target);
        if (el && el.getBoundingClientRect().top <= line) {
          currentId = item.id;
        }
      }
      setActive(currentId);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [page]);

  const jump = (target: string) => {
    setOpen(false);
    if (page === "home") {
      goTo(target);
    } else {
      window.location.href = `/${target}`;
    }
  };

  const top = () => {
    setOpen(false);
    if (page === "home") {
      window.scrollTo({ top: 0, behavior: smooth() });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <header className={`site-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <nav aria-label={t("Site navigation")}>
          <Button
            variant="ghost"
            className="site-nav-brand"
            onClick={top}
            aria-label={t("Back to top")}
          >
            {t("Shivam ")}
            <span aria-hidden="true">✦</span>
          </Button>

          {page === "about" && (
            <Button variant="ghost" className="site-nav-link site-nav-about" asChild>
              <Link to="/">
                <ArrowLeft className="mr-1 h-3.5 w-3.5" />
                {t("Home")}
              </Link>
            </Button>
          )}

          {/* Desktop links */}
          <div className="site-nav-links">
            {page === "home" ? (
              <>
                {homeNavItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="site-nav-link text-xs px-2.5"
                    data-active={active === item.id}
                    aria-current={active === item.id ? "true" : undefined}
                    onClick={() => item.target && jump(item.target)}
                  >
                    {t(item.label)}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="site-nav-link site-nav-about text-xs px-2.5"
                  asChild
                >
                  <Link to="/about">
                    {t("About")}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <a
                  href="/shivam-garg-cv.txt"
                  download
                  className="site-nav-link inline-flex items-center text-xs px-2.5 font-medium"
                  aria-label={t("Download CV")}
                >
                  <Download className="mr-1 h-3 w-3" />
                  {t("CV")}
                </a>
              </>
            ) : (
              aboutInPageLinks.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="site-nav-link"
                  data-active={active === item.id}
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => item.target && jump(item.target)}
                >
                  {t(item.label)}
                </Button>
              ))
            )}
          </div>

          <Button className="site-nav-contact text-xs px-3" onClick={() => setContact(true)}>
            {t("Say Hello")}
          </Button>

          <LanguageSelector welcome={page === "home"} />

          <Button
            variant="ghost"
            size="icon"
            className="site-nav-toggle"
            aria-label={t(open ? "Close menu" : "Open menu")}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </nav>

        {/* Mobile / Responsive Drawer containing all 11 destinations */}
        {open && (
          <div className="site-nav-drawer">
            {page === "home" ? (
              <>
                {homeNavItems.map((item, idx) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    data-active={active === item.id}
                    onClick={() => item.target && jump(item.target)}
                    className="w-full justify-start text-left text-sm"
                  >
                    <span className="font-mono text-xs opacity-50 mr-2">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    {t(item.label)}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-left text-sm site-nav-about"
                >
                  <Link to="/about">
                    <span className="font-mono text-xs opacity-50 mr-2">[10]</span>
                    {t("About")} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <a
                  href="/shivam-garg-cv.txt"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium"
                >
                  <span className="font-mono text-xs opacity-50 mr-2">[11]</span>
                  <Download className="mr-2 h-4 w-4" />
                  {t("Download CV")}
                </a>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="w-full justify-start text-left text-sm">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t("Home")}
                  </Link>
                </Button>
                {aboutInPageLinks.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    data-active={active === item.id}
                    onClick={() => item.target && jump(item.target)}
                    className="w-full justify-start text-left text-sm"
                  >
                    {t(item.label)}
                  </Button>
                ))}
                <a
                  href="/shivam-garg-cv.txt"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("Download CV")}
                </a>
              </>
            )}
          </div>
        )}
      </header>

      {/* Say Hello / Contact Dialog */}
      <Dialog
        open={contact}
        onOpenChange={(val) => {
          setContact(val);
          if (!val) setCopied(false);
        }}
      >
        <DialogContent className="intro-dialog">
          <DialogTitle>{t("Let’s start a conversation.")}</DialogTitle>
          <DialogDescription>
            {t("Find the communities, products and people behind DoraDAO.")}
          </DialogDescription>
          <div className="mt-4 flex flex-col gap-3">
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
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {t(copied ? "Portfolio link copied" : "Copy portfolio link")}
            </Button>
            <a
              href="https://www.linkedin.com/in/meshivamgarg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t("Connect on LinkedIn ↗")}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
