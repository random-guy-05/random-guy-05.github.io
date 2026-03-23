import { useEffect, useState } from "react";
import { GlowCard } from "../components/GlowCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import type { LeadershipOutcome } from "../data/siteContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useReveal } from "../hooks/useReveal";

interface LeadershipSectionProps {
  headlineLabel: string;
  headlineValue: number;
  headlinePrefix: string;
  headlineSuffix: string;
  summary: string;
  role: string;
  initiatives: string[];
  outcomes: LeadershipOutcome[];
}

function useCountUp(target: number, startAnimating: boolean) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (!startAnimating) {
      return undefined;
    }

    if (reducedMotion) {
      setValue(target);
      return undefined;
    }

    const duration = 1600;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.floor(target * eased));

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    const frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [reducedMotion, startAnimating, target]);

  return value;
}

function AnimatedValue({
  value,
  prefix = "",
  suffix = "",
  startAnimating,
}: LeadershipOutcome & { startAnimating: boolean }) {
  const currentValue = useCountUp(value, startAnimating);

  return (
    <>
      {prefix}
      {currentValue.toLocaleString()}
      {suffix}
    </>
  );
}

export function LeadershipSection({
  headlineLabel,
  headlineValue,
  headlinePrefix,
  headlineSuffix,
  summary,
  role,
  initiatives,
  outcomes,
}: LeadershipSectionProps) {
  const { ref, visible } = useReveal(0.25);

  return (
    <section
      id="leadership"
      className="page-section section-panel"
      data-section-label="Impact"
      aria-labelledby="leadership-title"
    >
      <div className="section-count" aria-hidden="true">
        04
      </div>
      <SectionHeading
        id="leadership-title"
        kicker="Impact"
        title="Operational impact"
      />
      <Reveal as="p" className="section-intro" delay="short">
        Leadership matters to me when it produces operating reality: mentors
        recruited, partnerships secured, students supported, and work that
        becomes easier for other people to do well.
      </Reveal>
      <Reveal className="leadership-layout" delay="medium">
        <GlowCard className="leadership-card leadership-card--summary">
          <div ref={ref as never} className="leadership-card__hero">
            <p className="leadership-card__headline">
              <AnimatedValue
                value={headlineValue}
                prefix={headlinePrefix}
                suffix={headlineSuffix}
                label={headlineLabel}
                context={summary}
                startAnimating={visible}
              />
            </p>
            <p className="leadership-card__headline-label">{headlineLabel}</p>
          </div>
          <div className="leadership-summary">
            <p className="leadership-summary__role">{role}</p>
            <p className="leadership-summary__body">{summary}</p>
            <ul className="leadership-summary__list">
              {initiatives.map((initiative) => (
                <li key={initiative}>{initiative}</li>
              ))}
            </ul>
          </div>
        </GlowCard>

        <GlowCard className="leadership-card leadership-card--outcomes">
          <div className="leadership-outcomes">
            {outcomes.map((outcome) => (
              <div className="leadership-outcome" key={outcome.label}>
                <div>
                  <p className="leadership-outcome__label">{outcome.label}</p>
                  <p className="leadership-outcome__context">{outcome.context}</p>
                </div>
                <strong className="leadership-outcome__value">
                  <AnimatedValue {...outcome} startAnimating={visible} />
                </strong>
              </div>
            ))}
          </div>
        </GlowCard>
      </Reveal>
    </section>
  );
}
