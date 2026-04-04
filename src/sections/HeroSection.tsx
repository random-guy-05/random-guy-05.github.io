import { Reveal } from "../components/Reveal";
import type { SiteContent } from "../data/siteContent";

interface HeroSectionProps {
  content: SiteContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const nameParts = content.name.split(" ");
  const firstName = nameParts.shift() ?? content.name;
  const lastName = nameParts.join(" ");

  return (
    <section
      id="hero"
      className="page-section hero-section"
      data-section-label="Overview"
      aria-labelledby="hero-title"
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{content.eyebrow}</p>
          <h1 className="hero-title hero-title--always-visible" id="hero-title">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h1>
          <Reveal as="p" className="hero-tagline" delay="short">
            {content.tagline}
          </Reveal>
          <Reveal as="p" className="hero-bio" delay="medium">
            {content.bio}
          </Reveal>
          <Reveal as="p" className="hero-collaborator-note" delay="medium">
            {content.collaboratorNote}
          </Reveal>
          <Reveal className="hero-actions" delay="long">
            <a className="button button--primary" href="#investigations">
              Explore selected investigations
            </a>
            <a className="button button--secondary" href="#contact">
              Discuss collaboration
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
