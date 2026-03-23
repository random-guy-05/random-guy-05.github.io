import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  emphasis?: string;
}

export function SectionHeading({
  kicker,
  title,
  emphasis,
}: SectionHeadingProps) {
  const renderedTitle = emphasis
    ? title.replace(
        emphasis,
        `<span class="section-title-emphasis">${emphasis}</span>`,
      )
    : title;

  return (
    <Reveal className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: renderedTitle }}
      />
      <div className="section-rule" />
    </Reveal>
  );
}
