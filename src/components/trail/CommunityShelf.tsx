import { useState } from "react";
import { ArrowUpRight, Pause, Play, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { communityArtwork, communityShelf, communitySnapshots } from "@/data/community-shelf";

const symbolFor = (name: string) =>
  name === "DoraDAO"
    ? "◉"
    : name === "FOSSASIA"
      ? "⌘"
      : name === "Polygon"
        ? "⬡"
        : name === "Solana"
          ? "≋"
          : "✳";

export function CommunityShelf() {
  const [selected, setSelected] = useState(communityShelf[0]);
  const [photo, setPhoto] = useState<string | null>(null);
  const [snapshot, setSnapshot] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  if (!selected) return null;
  const metrics = selected.metrics.slice(0, 4);
  return (
    <section id="communities-shelf" className="community-showcase" aria-label="Communities shelf">
      <img
        src={communityArtwork}
        className="community-backdrop"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="community-showcase-frame">
        <div className="community-showcase-layout">
          <div className="community-showcase-gallery">
            <img
              className="community-main-art"
              src={photo ?? communityArtwork}
              alt={
                photo
                  ? communitySnapshots.find((item) => item.image === photo)?.label
                  : "Portrait with a striped headscarf surrounded by flowers"
              }
              loading="lazy"
              decoding="async"
            />
            {photo && (
              <Button
                variant="ghost"
                size="icon"
                className="community-art-reset"
                aria-label="Return to portrait artwork"
                onClick={() => setPhoto(null)}
              >
                <X />
              </Button>
            )}
            <div className="community-thumbnails" role="group" aria-label="Community photo gallery">
              {communitySnapshots.map((item) => (
                <Button
                  key={item.image}
                  variant="ghost"
                  aria-label={`View ${item.label}`}
                  aria-pressed={photo === item.image}
                  onClick={() => setPhoto(item.image)}
                >
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                </Button>
              ))}
            </div>
          </div>
          <div className="community-details" id="community-details">
            <div aria-live="polite" aria-atomic="true" className="contents">
              <header>
                <p className="community-meta">
                  <span>COMMUNITY</span> · {selected.period}
                  {selected.sample && " · SAMPLE DETAILS"}
                </p>
                <h3>{selected.name}</h3>
                <p className="community-role">{selected.role}</p>
              </header>
              {metrics.length > 0 && (
                <dl className="community-metrics">
                  {metrics.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <p className="community-description">{selected.description}</p>
              <ol className="community-points">
                {selected.points.slice(0, 4).map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              {selected.link && (
                <a
                  className="community-external"
                  href={selected.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selected.link.label}
                  <ArrowUpRight />
                </a>
              )}
            </div>
            <div className="community-highlights">
              <h4>
                <Star aria-hidden /> Highlights
              </h4>
              <div className="community-highlights-grid">
                {communitySnapshots.slice(0, 3).map((item, index) => (
                  <button
                    type="button"
                    key={item.image}
                    className="community-highlight"
                    aria-label={`Open photo: ${item.label}`}
                    onClick={() => setSnapshot(index)}
                  >
                    <span className="community-highlight-media">
                      <img src={item.image} alt="" loading="lazy" decoding="async" />
                    </span>
                    <span className="community-highlight-text">
                      <span>
                        <small>COMMUNITY</small>
                        <strong>{item.label}</strong>
                      </span>
                      <ArrowUpRight aria-hidden />
                    </span>
                  </button>
                ))}
              </div>
              <blockquote className="community-quote">
                <p>{selected.quote ?? selected.points[0]}</p>
                <footer>
                  <strong>{selected.name}</strong>
                  {selected.role}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="community-logo-controls">
        <h3>Communities shelf</h3>
        <Button
          variant="ghost"
          size="icon"
          aria-label={paused ? "Play community logos" : "Pause community logos"}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? <Play /> : <Pause />}
        </Button>
      </div>
      <div className={`community-logo-marquees ${paused ? "is-paused" : ""}`}>
        {[communityShelf.slice(0, 7), communityShelf.slice(7)].map((row, rowIndex) => (
          <div className="community-logo-lane" key={rowIndex}>
            <div className="community-logo-track">
              {[0, 1].map((copy) => (
                <div
                  className="community-logo-group"
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {row.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      tabIndex={copy === 1 ? -1 : 0}
                      className="community-logo"
                      aria-label={`Show ${item.name} community`}
                      aria-controls="community-details"
                      aria-pressed={selected.id === item.id}
                      onClick={() => {
                        setSelected(item);
                        setPhoto(null);
                      }}
                    >
                      <span className="community-logo-symbol" aria-hidden="true">
                        {symbolFor(item.name)}
                      </span>
                      <span>{item.name}</span>
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Dialog
        open={snapshot !== null}
        onOpenChange={(open) => {
          if (!open) setSnapshot(null);
        }}
      >
        <DialogContent className="community-photo-dialog">
          <DialogTitle>
            {snapshot !== null ? communitySnapshots[snapshot]?.label : "Community photo"}
          </DialogTitle>
          <DialogDescription>
            Photo from the supplied portfolio references; not attributed to a specific community.
          </DialogDescription>
          {snapshot !== null && (
            <img
              src={communitySnapshots[snapshot]?.image}
              alt={communitySnapshots[snapshot]?.label}
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
