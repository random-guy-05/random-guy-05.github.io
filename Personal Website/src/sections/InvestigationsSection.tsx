import { GlowCard } from "../components/GlowCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import type { ProjectItem } from "../data/siteContent";
import { useProjectCarousel } from "../hooks/useProjectCarousel";
import { useEffect } from "react";

interface InvestigationsSectionProps {
  projects: ProjectItem[];
  onProjectActive: (index: number) => void;
}

export function InvestigationsSection({
  projects,
  onProjectActive,
}: InvestigationsSectionProps) {
  const { containerRef, activeIndex, scrollToIndex, goToPrevious, goToNext } =
    useProjectCarousel(projects.length);

  useEffect(() => {
    if (activeIndex >= 0) {
      onProjectActive(activeIndex);
    }
  }, [activeIndex, onProjectActive]);

  return (
    <section
      id="investigations"
      className="page-section section-panel"
      data-section-label="Investigations"
      aria-labelledby="investigations-title"
    >
      <div className="section-count" aria-hidden="true">
        02
      </div>
      <SectionHeading
        kicker="Investigations"
        title="Where I do the work"
        emphasis="the work"
      />
      <Reveal as="p" className="section-intro" delay="short">
        Five active investigations spanning cardiac critical care, translational
        biology, and applied prediction systems.
      </Reveal>
      <Reveal className="carousel-shell" delay="medium">
        <div className="carousel-controls">
          <p className="carousel-controls__hint">Swipe, drag, or use the controls.</p>
          <div className="carousel-controls__buttons">
            <button
              className="carousel-button"
              type="button"
              onClick={goToPrevious}
              aria-label="Previous investigation"
            >
              Prev
            </button>
            <button
              className="carousel-button"
              type="button"
              onClick={goToNext}
              aria-label="Next investigation"
            >
              Next
            </button>
          </div>
        </div>
        <div
          className="carousel-track"
          ref={containerRef}
          tabIndex={0}
          aria-label="Selected investigations"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              goToNext();
            }

            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goToPrevious();
            }
          }}
        >
          {projects.map((project, index) => (
            <article
              className={`project-card ${index === activeIndex ? "is-active" : ""}`}
              key={project.id}
              data-project-card
            >
              <GlowCard
                className={`project-card__surface tone-panel-${project.tone}`}
                onClick={() => scrollToIndex(index)}
              >
                <p className="project-card__status">
                  <span
                    className={`project-card__status-dot ${
                      project.status === "Ongoing" ? "is-live" : "is-complete"
                    }`}
                  />
                  {project.status}
                </p>
                <div className="project-card__body">
                  <div>
                    <p className="project-card__number">{project.numeral}</p>
                    <p className="project-card__org">
                      {project.org} · {project.timeframe}
                    </p>
                    <h3 className="project-card__title">{project.title}</h3>
                  </div>
                  <p className="project-card__summary">{project.summary}</p>
                </div>
              </GlowCard>
            </article>
          ))}
        </div>
        <div className="carousel-indicators" aria-label="Investigation navigation">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`carousel-indicator ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => scrollToIndex(index)}
              aria-label={`View ${project.title}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
