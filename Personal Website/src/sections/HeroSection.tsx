import { Reveal } from "../components/Reveal";
import type { SiteContent } from "../data/siteContent";

interface HeroSectionProps {
  content: SiteContent;
  typedText: string;
}

export function HeroSection({ content, typedText }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="page-section hero-section"
      data-section-label=""
      aria-labelledby="hero-title"
    >
      <div className="hero-glow" aria-hidden="true" />
      <Reveal as="p" className="hero-eyebrow">
        {content.eyebrow}
      </Reveal>
      <Reveal as="h1" className="hero-title" delay="short" id="hero-title">
        <span>Arnav</span>
        <span>Mana</span>
      </Reveal>
      <Reveal as="p" className="hero-tagline" delay="medium">
        {content.tagline}
      </Reveal>
      <Reveal as="p" className="hero-bio" delay="medium">
        {content.bio}
      </Reveal>
      <Reveal className="hero-facts" delay="long">
        {content.heroFacts.map((fact) => (
          <div className="hero-fact" key={fact.label}>
            <span className="hero-fact__label">{fact.label}</span>
            <span className="hero-fact__value">{fact.value}</span>
          </div>
        ))}
      </Reveal>
      <Reveal className="hero-live-note" delay="long">
        <p className="hero-live-note__label">Currently building</p>
        <p className="hero-live-note__value">
          {typedText}
          <span className="type-caret" aria-hidden="true" />
        </p>
      </Reveal>
      <Reveal className="hero-actions" delay="long">
        <a className="button button--primary" href="#investigations">
          View selected investigations
        </a>
        <a className="button button--secondary" href="#contact">
          Start a conversation
        </a>
      </Reveal>
    </section>
  );
}
