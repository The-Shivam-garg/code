import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import scene from "@/assets/museum/opening-tv-scene.webp";
import wall from "@/assets/museum/international-wall.webp";
import { portraits, type Portrait } from "@/data/portraits";

export const museumOpeningScreens = [
  { value: "5M+", label: "Total Impressions", x: 20.5, y: 37.6, w: 16, h: 15, record: 2 },
  { value: "100K+", label: "Users", x: 55, y: 40.5, w: 17.5, h: 14, record: 9 },
  { value: "60K+", label: "Community Members", x: 9.6, y: 58.4, w: 17, h: 15, record: 8 },
  { value: "1M+", label: "Users in 8 Days", x: 38, y: 58.6, w: 22.6, h: 16, record: 2 },
  {
    value: "1500+",
    label: "Fellowship Participants",
    x: 70.5,
    y: 59.8,
    w: 15.4,
    h: 14.6,
    record: 5,
  },
  { value: "40+", label: "Global Partners", x: 3, y: 78, w: 20, h: 15.6, record: 1 },
  { value: "10L+", label: "Views", x: 33.7, y: 80.6, w: 21.5, h: 14, record: 9 },
  { value: "30+", label: "Events & Collaborations", x: 71, y: 80, w: 22, h: 15, record: 10 },
];

export function MuseumOpening({ open }: { open: (portrait: Portrait) => void }) {
  const { t } = useLanguage();
  return (
    <div className="mw-opening">
      <img
        className="mw-opening-wall"
        src={wall}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="mw-inscription">
        <h2>
          {t("A curious mind,")}
          <br />
          {t("an active life,")}
          <br />
          {t("a builder at heart.")}
        </h2>
        <p>
          {t(
            "Exploring technology, people and ideas across borders — trying to create opportunities that help more people build, belong and become their best selves.",
          )}
        </p>
        <Button variant="outline" asChild className="mw-about-link">
          <Link to="/about">
            {t("More about me")}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <div className="mw-handwritten">
          {t("Same person.")}
          <br />
          {t("Just a little more curious everyday.")}
          <span aria-hidden="true">⌣ &nbsp; ⤵</span>
        </div>
      </div>
      <div className="mw-tv-installation">
        <img
          src={scene}
          width={1024}
          height={1024}
          alt={t("Shivam seated on a stack of vintage televisions")}
          loading="lazy"
          decoding="async"
        />
        {museumOpeningScreens.map((screen, i) => (
          <Button
            key={screen.label}
            variant="ghost"
            className={`mw-tv-screen mw-tv-screen-${i}`}
            style={
              {
                "--sx": `${screen.x}%`,
                "--sy": `${screen.y}%`,
                "--sw": `${screen.w}%`,
                "--sh": `${screen.h}%`,
              } as CSSProperties
            }
            aria-label={`${screen.value} ${t(screen.label)}`}
            onClick={() => {
              const portrait = portraits[screen.record];
              if (portrait) open(portrait);
            }}
          >
            <strong>{screen.value}</strong>
            <span>{t(screen.label)}</span>
          </Button>
        ))}
      </div>
      <div className="mw-opening-memories">
        {portraits.slice(0, 2).map((portrait) => (
          <Button
            key={portrait.id}
            variant="ghost"
            className="mw-opening-memory"
            onClick={() => open(portrait)}
            aria-label={`${portrait.number}. ${t(portrait.title)}`}
          >
            <img src={portrait.imageSrc} alt="" loading="lazy" decoding="async" />
          </Button>
        ))}
      </div>
    </div>
  );
}
