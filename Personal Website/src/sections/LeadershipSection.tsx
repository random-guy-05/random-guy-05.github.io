import { useEffect, useState } from "react";
import { GlowCard } from "../components/GlowCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import type { LeadershipStat } from "../data/siteContent";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useReveal } from "../hooks/useReveal";

interface LeadershipSectionProps {
  headlineLabel: string;
  headlineValue: number;
  headlinePrefix: string;
  headlineSuffix: string;
  role: string;
  stats: LeadershipStat[];
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

    const duration = 1800;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
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
}: LeadershipStat & { startAnimating: boolean }) {
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
  role,
  stats,
}: LeadershipSectionProps) {
  const { ref, visible } = useReveal(0.25);

  return (
    <section
      id="leadership"
      className="page-section section-panel"
      data-section-label="Leadership"
      aria-labelledby="leadership-title"
    >
      <div className="section-count" aria-hidden="true">
        04
      </div>
      <SectionHeading
        kicker="Leadership"
        title="What I built from nothing"
        emphasis="from nothing"
      />
      <Reveal className="leadership-block" delay="short">
        <GlowCard className="leadership-card">
          <div ref={ref as never} className="leadership-card__hero">
            <p className="leadership-card__headline">
              <AnimatedValue
                value={headlineValue}
                prefix={headlinePrefix}
                suffix={headlineSuffix}
                label={headlineLabel}
                startAnimating={visible}
              />
            </p>
            <p className="leadership-card__headline-label">{headlineLabel}</p>
          </div>
          <div className="leadership-card__rows">
            <div className="leadership-card__row leadership-card__row--title">
              <span>{role}</span>
            </div>
            {stats.map((stat) => (
              <div className="leadership-card__row" key={stat.label}>
                <span>{stat.label}</span>
                <strong>
                  <AnimatedValue {...stat} startAnimating={visible} />
                </strong>
              </div>
            ))}
          </div>
        </GlowCard>
      </Reveal>
    </section>
  );
}
