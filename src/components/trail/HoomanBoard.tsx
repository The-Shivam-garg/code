import { ArrowRight, BookOpen, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hoomanBoard } from "@/data/hooman-board";
import landscape from "@/assets/hooman-board-landscape.png";
import { BoardCollections } from "./BoardCollections";

function PaperStipple() {
  return (
    <svg
      className="hooman-board-stipple"
      viewBox="0 0 1000 195"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 130Q90 160 160 138T350 90T570 128T800 133T1000 150V195H0Z"
        fill="currentColor"
        opacity=".3"
      />
      {Array.from({ length: 2400 }, (_, i) => {
        const random = (seed: number) => {
          const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
          return value - Math.floor(value);
        };
        const x = random(i + 1) * 1000;
        const y = random(i + 4901) * 195;
        const edge = 55 + 55 * Math.sin(x / 130) + 20 * Math.cos(x / 75);
        return y > edge ? (
          <circle key={i} cx={x} cy={y} r={0.7 + (i % 4) * 0.25} opacity={0.2 + (y / 195) * 0.5} />
        ) : null;
      })}
    </svg>
  );
}

export function HoomanBoard() {
  return (
    <section
      id="hooman-aspirations"
      aria-label={hoomanBoard.label}
      className="hooman-board-section"
    >
      <img
        className="hooman-board-landscape"
        src={landscape}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="hooman-board-paper">
        <PaperStipple />
        <div className="hooman-board-content">
          <dl className="hooman-board-list">
            {hoomanBoard.aspirations.map(([label, text]) => (
              <div key={label} tabIndex={0} className="hooman-wishlist-item">
                <dt>{label}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
          <div className="hooman-board-story">
            <p className="hooman-board-eyebrow">{hoomanBoard.eyebrow}</p>
            <h2>
              {hoomanBoard.titleStart}
              <em>{hoomanBoard.titleAccent}</em>
              {hoomanBoard.titleEnd}
            </h2>
            <p className="hooman-board-intro">
              {hoomanBoard.introduction.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <div className="hooman-board-values">
              {hoomanBoard.values.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <BoardCollections />
          </div>
        </div>
        <div className="hooman-board-conversations">
          {hoomanBoard.conversations.map((item) => {
            const Icon = item.icon === "book" ? BookOpen : item.icon === "spark" ? Sparkles : Users;
            return (
              <Button
                asChild
                key={item.title}
                variant="outline"
                className="hooman-board-conversation"
              >
                <a href={item.href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden />
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <ArrowRight aria-hidden className="hooman-board-arrow" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
