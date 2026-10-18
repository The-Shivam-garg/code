import { useLanguage } from "@/components/language-provider";
import { useEffect, useState, type PointerEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mouse, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollRevealText } from "@/components/scroll-reveal-text";
import { AboutReading } from "@/components/about-reading";
import { SiteNav } from "@/components/site-nav";
import { AboutCharacters } from "@/components/about-characters";
import sculpture from "@/assets/about/sculpture.png.asset.json";
import reader from "@/assets/about/reader.png.asset.json";
import traveler from "@/assets/about/traveler.png.asset.json";
import thinker from "@/assets/about/thinker.png.asset.json";
import resting from "@/assets/about/resting.png.asset.json";
import money from "@/assets/about/money.png.asset.json";
import signature from "@/assets/about/signature.png.asset.json";

export function AboutPage() {
  const { t, language } = useLanguage();
  const [dialog, setDialog] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [clock, setClock] = useState("");
  useEffect(() => {
    const update = () =>
      setClock(
        new Intl.DateTimeFormat(language, {
          dateStyle: "medium",
          timeStyle: "short",
          timeZone: "Asia/Kolkata",
        }).format(new Date()),
      );
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [language]);
  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--about-shift",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 16}px`,
    );
  };
  const scrollBook = () =>
    document.getElementById("about-book")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  return (
    <main className="about-page">
      <SiteNav page="about" />
      <section
        className="about-cover"
        onPointerMove={move}
        onPointerLeave={(e) => e.currentTarget.style.setProperty("--about-shift", "0px")}
        aria-label={t("Living in Check")}
      >
        <span className="about-scribble scribble-one" aria-hidden="true">
          H!
          <br />
          <br />
          {t("Nf3")}
        </span>
        <span className="about-scribble scribble-two" aria-hidden="true">
          {t("Bc5")}
          <br />
          <br />N
        </span>
        <div className="about-cover-figure">
          <h1>
            <span>{t("LIVING")}</span>
            <span>{t("IN CHECK")}</span>
          </h1>
          <Button
            variant="ghost"
            className="about-sculpture"
            onClick={() => setDialog("A polymath in progress")}
            aria-label={t("Meet the human behind this")}
          >
            <img
              src={sculpture.url}
              alt={t("Sculpture carrying a passport, travel journals and a camera")}
              fetchPriority="high"
              decoding="async"
            />
          </Button>
        </div>
        <p className="about-journey">
          {t("Journey with ")}
          <em>{t("Shivam")}</em>
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="about-scroll"
          onClick={scrollBook}
          aria-label={t("Explore the book")}
          title={t("Explore the book")}
        >
          <Mouse />
        </Button>
        <div className="about-cover-meta">
          <span>{t("Shivam Garg.")}</span>
          <span>{t("A Polymath in Progress.")}</span>
          <time>{clock}</time>
        </div>
      </section>

      <section className="about-statement" aria-label={t("About Shivam")}>
        <ScrollRevealText>
          <p>
            A builder at heart, <img src={reader.url} alt="" loading="lazy" decoding="async" /> a
            learner by nature,
            <br className="about-wide-break" /> and a community guy by choice —{" "}
            <img src={traveler.url} alt="" loading="lazy" decoding="async" />
            <br className="about-wide-break" /> exploring{" "}
            <img src={thinker.url} alt="" loading="lazy" decoding="async" /> technology, people and
            ideas
            <br className="about-wide-break" /> across borders, trying to create opportunities
            <br className="about-wide-break" />{" "}
            <span>
              that help more people build, belong{" "}
              <img src={resting.url} alt="" loading="lazy" decoding="async" />
              <br className="about-wide-break" /> and become their best selves.
            </span>
          </p>
          <p>
            Some lessons came from chessboards and books. Most came from people — builders, dreamers
            and generous strangers who showed me that{" "}
            <em>curiosity is a practice, not a personality.</em>
          </p>
          <p>
            Today I split my time between building products, gathering communities and asking better
            questions — convinced that{" "}
            <em>
              the right room, the right people and the right question can change what anyone
              believes is possible.
            </em>
          </p>
        </ScrollRevealText>
        <figure className="about-statement-signature">
          <img
            src={signature.url}
            alt={t("Shivam's handwritten signature")}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <strong>{t("Shivam Garg.")}</strong>
            <span>{t("A Polymath in Progress.")}</span>
          </figcaption>
        </figure>
        <span className="about-scribble" aria-hidden="true">
          e4
        </span>
      </section>

      <AboutReading />

      <section
        className="about-statement about-reflection"
        aria-label={t("A Polymath in Progress.")}
      >
        <ScrollRevealText>
          <p>
            I want a life that leaves room for more than work: a strong body, a curious mind, honest
            friendships and the freedom to explore. Building matters to me, but so does becoming
            someone who can pause, listen and notice what ambition alone might miss.
          </p>
          <p>
            Being a polymath is not about collecting titles or having an answer to everything. It is
            about letting different parts of life teach each other — carrying curiosity into
            unfamiliar places, bringing creativity to difficult questions and choosing character
            over applause. I am still learning how to hold those things together.
          </p>
        </ScrollRevealText>
      </section>

      <section className="about-rules" aria-label={t("Chess, life and finance")}>
        <ScrollRevealText>
          <h2>
            Chess, life, and finance
            <br />
            share one truth
            <br />
            <span>
              everything changes
              <br />
              when you understand
            </span>
            <br />
            <em>the rules.</em>
          </h2>
        </ScrollRevealText>
        <img
          className="about-money"
          src={money.url}
          alt={t("Illustrated dollar bill")}
          loading="lazy"
          decoding="async"
        />
        <span className="about-scribble" aria-hidden="true">
          b8
        </span>
        <AboutCharacters />
      </section>

      <footer className="about-footer">
        <div>
          <strong>{t("Money in Check.")}</strong>
          <Button variant="link" onClick={scrollBook}>
            {t("The Book")}
          </Button>
          <Button variant="link" onClick={() => setDialog("About the author")}>
            {t("About the Author")}
          </Button>
          <Button variant="link" onClick={() => setSaved(!saved)} aria-pressed={saved}>
            {t(String(saved ? "On your Wishlist" : "Check the Wishlist"))}{" "}
            <Heart fill={saved ? "currentColor" : "none"} />
          </Button>
          <Button variant="link" onClick={() => setDialog("Connect with Shivam")}>
            {t("Connect with Shivam ")}
            <ArrowUpRight />
          </Button>
        </div>
        <p>
          © {new Date().getFullYear()}
          {t(" Shivam Garg ( aka Hooman )")}
        </p>
        <span className="about-signature">{t("Shivam")}</span>
        <div className="about-footer-social">
          <strong>{t("Meet the human behind this.")}</strong>
          {["LinkedIn", "Instagram", "Twitter"].map((name) => (
            <Button variant="link" key={name} onClick={() => setDialog(name)}>
              {t(String(name))}
            </Button>
          ))}
        </div>
      </footer>

      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) setDialog(null);
        }}
      >
        <DialogContent className="about-dialog">
          <DialogTitle>{dialog}</DialogTitle>
          <DialogDescription>
            {t(
              String(
                dialog === "LinkedIn" ||
                  dialog === "Instagram" ||
                  dialog === "Twitter" ||
                  dialog === "Connect with Shivam"
                  ? "The contact destination has not been provided yet."
                  : "A builder at heart, a learner by nature, and a community guy by choice.",
              ),
            )}
          </DialogDescription>
          <Button variant="outline" asChild>
            <Link to="/">
              {t("Explore Shivam’s work ")}
              <ArrowUpRight />
            </Link>
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  );
}
