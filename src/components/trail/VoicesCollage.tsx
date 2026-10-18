import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Globe2, Linkedin, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { testimonials } from "@/data/trail";
import { voices, voiceFilters, voicesCopy, type Voice, type VoiceFilter } from "@/data/voices";

function Quote({ item }: { item: Voice }) {
  return (
    <>
      <span className="voices-quote-mark" aria-hidden>
        “
      </span>
      <blockquote>“{item.quote}”</blockquote>
      <div className="voices-person">
        {item.image && <img src={item.image} alt="" loading="lazy" />}
        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </div>
        {item.social === "linkedin" ? (
          <Linkedin aria-hidden />
        ) : (
          <span aria-hidden className="voices-x">
            𝕏
          </span>
        )}
      </div>
    </>
  );
}
export function VoicesCollage() {
  const [filter, setFilter] = useState<VoiceFilter>("All");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Voice | null>(null);
  const items = voices.filter((v) => filter === "All" || v.category === filter);
  return (
    <div className="voices-section">
      <header className="voices-header">
        <div className="voices-left-note" aria-hidden>
          {voicesCopy.leftNote.map((n) => (
            <span key={n}>{n}</span>
          ))}
          <ArrowDownRight />
        </div>
        <div className="voices-right-note" aria-hidden>
          {voicesCopy.rightNote.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <div className="voices-community-note" aria-hidden>
          <span>
            <Users />
          </span>
          <p>{voicesCopy.internet}</p>
        </div>
        <h2>
          {voicesCopy.titleStart} <em>{voicesCopy.titleAccent}</em> {voicesCopy.titleEnd}
        </h2>
        <p className="voices-description">{voicesCopy.description}</p>
        <div className="voices-filters" role="group" aria-label="Filter testimonials">
          {voiceFilters.map((f) => (
            <Button
              key={f}
              variant="outline"
              size="sm"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className="voices-filter"
            >
              {f}
            </Button>
          ))}
        </div>
      </header>
      <div className={`voices-grid ${filter !== "All" ? "voices-grid-filtered" : ""}`}>
        {items.map((item) => (
          <article
            key={item.id}
            data-sample={item.sample ? "" : undefined}
            className={`voice-item voice-${item.id} voice-${item.kind}`}
          >
            {item.kind === "quote" ? (
              <Quote item={item} />
            ) : (
              <>
                <div className="voice-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  {item.kind === "video" && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="voice-play"
                        aria-label={`Open story: ${item.alt}`}
                        onClick={() => setSelected(item)}
                      >
                        <Play fill="currentColor" />
                      </Button>
                      <span className="voice-duration">{item.duration}</span>
                    </>
                  )}
                </div>
                {item.id === "lead" && (
                  <div className="voice-attached-note">
                    <span aria-hidden>♧</span>
                    <p>“{item.quote}”</p>
                    <small>{item.role}</small>
                  </div>
                )}
                {item.id !== "lead" && item.quote && (
                  <div className="voice-caption">
                    “{item.quote}”<small>{item.role}</small>
                  </div>
                )}
                {item.caption && (
                  <div className="voice-caption">
                    {item.caption}
                    <ArrowRight aria-hidden />
                  </div>
                )}
                {item.note && (
                  <div className="voice-hand-note">
                    {item.id === "table" && <Globe2 aria-hidden />}
                    <span>{item.note}</span>
                    {item.id !== "table" && <ArrowDownRight aria-hidden />}
                  </div>
                )}
              </>
            )}
          </article>
        ))}
      </div>
      {expanded && (
        <div className="voices-more-stories" aria-label="More testimonials">
          {testimonials.map((t) => (
            <article key={t.name}>
              <span className="voices-quote-mark" aria-hidden>
                “
              </span>
              <blockquote>{t.q}</blockquote>
              <strong>{t.name}</strong>
              <p>{t.role}</p>
            </article>
          ))}
        </div>
      )}
      <div className="voices-more">
        <Button variant="outline" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          {expanded ? voicesCopy.less : voicesCopy.more}
          <ArrowRight />
        </Button>
      </div>
      <section className="voices-invitation" aria-labelledby="voices-invitation-title">
        <div className="voices-invitation-mark" aria-hidden>
          <span>“</span>
        </div>
        <div>
          <p className="voices-invitation-note">There’s room for your story, too.</p>
          <h3 id="voices-invitation-title">
            Ever met him, or <em>worked with him?</em>
          </h3>
          <p>Leave a message, a voice note, or a little video.</p>
        </div>
        <Button asChild className="voices-invitation-link">
          <Link to="/leave-a-note">
            Leave your story
            <ArrowRight />
          </Link>
        </Button>
      </section>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="voices-dialog">
          <DialogTitle>{selected?.alt}</DialogTitle>
          <DialogDescription>
            This image is a supplied video still. The original recording has not been provided.
          </DialogDescription>
          {selected && <img src={selected.image} alt={selected.alt} />}
          {selected?.quote && <blockquote>“{selected.quote}”</blockquote>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
