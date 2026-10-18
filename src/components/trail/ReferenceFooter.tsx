import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { referenceFooter, type FooterSocial } from "@/data/footer";
import tableArtwork from "@/assets/footer-table-final.jpg.asset.json";

function SocialIcon({ icon }: { icon: FooterSocial["icon"] }) {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    youtube: Youtube,
    instagram: Instagram,
    email: Mail,
  };
  if (icon === "x")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 3h4.5L20 21h-4.5L4 3Zm16 0L4 21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  if (icon === "notion")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m4 3 14-1 3 3v16L5 22 3 19V5l1-2Zm1 3 16-1M5 6v16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 18V9h2l6 9V9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  const Icon = icons[icon];
  return <Icon aria-hidden="true" />;
}

export function ReferenceFooter() {
  return (
    <footer className="reference-footer" aria-label="Collaborate and connect">
      <div className="reference-footer-copy">
        <p className="reference-footer-eyebrow">{referenceFooter.eyebrow}</p>
        <h2>
          {referenceFooter.headline} <em>{referenceFooter.emphasis}</em>
        </h2>
        <p className="reference-footer-description">{referenceFooter.description}</p>
        <nav className="reference-footer-socials" aria-label="Social profiles">
          {referenceFooter.socials.map((social: FooterSocial) => {
            const content = (
              <>
                <SocialIcon icon={social.icon} />
                <span>{social.label}</span>
                <ArrowUpRight className="reference-footer-arrow" aria-hidden="true" />
              </>
            );
            return social.href ? (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <span
                key={social.label}
                className="reference-footer-unavailable"
                aria-disabled="true"
                title={`${social.label} contact link has not been supplied`}
              >
                {content}
              </span>
            );
          })}
        </nav>
        <nav className="reference-footer-navigation" aria-label="Footer sections">
          {referenceFooter.navigation.map((item) => (
            <a key={item.label} href={`#${item.target}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="reference-footer-artwork">
        <p className="reference-footer-note reference-footer-note-left">
          {referenceFooter.leftNote.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <p className="reference-footer-note reference-footer-note-right">
          {referenceFooter.rightNote.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <img
          src={tableArtwork.url}
          width={1920}
          height={290}
          alt="People from different cultures collaborating around a shared table with laptops and books."
          loading="lazy"
          decoding="async"
        />
      </div>
    </footer>
  );
}
