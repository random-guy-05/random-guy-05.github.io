import { GlowCard } from "../components/GlowCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import type { RecognitionItem } from "../data/siteContent";

interface RecognitionSectionProps {
  items: RecognitionItem[];
}

export function RecognitionSection({ items }: RecognitionSectionProps) {
  return (
    <section
      id="recognition"
      className="page-section section-panel"
      data-section-label="Recognition"
      aria-labelledby="recognition-title"
    >
      <div className="section-count" aria-hidden="true">
        01
      </div>
      <SectionHeading
        kicker="Recognition"
        title="Things I’ve earned"
      />
      <div className="recognition-grid">
        {items.map((item, index) => (
          <Reveal
            className="recognition-item"
            delay={index === 0 ? "none" : index === 1 ? "short" : "medium"}
            key={item.id}
          >
            <GlowCard className="recognition-card">
              <span className="recognition-card__number">{item.number}</span>
              <div className="recognition-card__body">
                <p className="recognition-card__org">{item.org}</p>
                <h3 className="recognition-card__title">{item.title}</h3>
                {item.pull ? (
                  <p className="recognition-card__pull">{item.pull}</p>
                ) : null}
                {item.detail ? (
                  <p className="recognition-card__detail">{item.detail}</p>
                ) : null}
                {item.statBlocks ? (
                  <div className="recognition-card__stats">
                    {item.statBlocks.map((stat) => (
                      <div key={stat.label}>
                        <p className="recognition-card__stat-value">{stat.value}</p>
                        <p className="recognition-card__stat-label">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {item.footer ? (
                  <p className="recognition-card__footer">{item.footer}</p>
                ) : null}
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
