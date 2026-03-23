import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import type { SkillRow } from "../data/siteContent";

interface SkillsMarqueeSectionProps {
  rows: SkillRow[];
}

function renderRow(row: SkillRow, index: number) {
  const repeated = [...row.items, ...row.items];

  return (
    <div
      className={`marquee-row ${
        row.direction === "left" ? "marquee-row--left" : "marquee-row--right"
      }`}
      key={`${row.direction}-${index}`}
    >
      {repeated.map((item, itemIndex) => (
        <span
          className={`marquee-item ${
            row.italicEveryOther && itemIndex % 2 === 1 ? "is-italic" : ""
          }`}
          key={`${item}-${itemIndex}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function SkillsMarqueeSection({ rows }: SkillsMarqueeSectionProps) {
  return (
    <section
      id="arsenal"
      className="page-section section-panel"
      data-section-label="The Arsenal"
      aria-labelledby="arsenal-title"
    >
      <div className="section-count section-count--small" aria-hidden="true">
        03
      </div>
      <SectionHeading kicker="What I work with" title="The Arsenal" />
      <Reveal className="marquee-shell" delay="short">
        {rows.map(renderRow)}
      </Reveal>
    </section>
  );
}
