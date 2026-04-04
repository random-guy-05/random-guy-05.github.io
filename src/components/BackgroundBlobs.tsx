import type { AccentTone } from "../data/siteContent";

interface BackgroundBlobsProps {
  tone: AccentTone;
}

const toneClassMap: Record<AccentTone, string> = {
  gold: "tone-gold",
  slate: "tone-slate",
  indigo: "tone-indigo",
  forest: "tone-forest",
  rose: "tone-rose",
};

export function BackgroundBlobs({ tone }: BackgroundBlobsProps) {
  return (
    <>
      <div className="background-canvas" aria-hidden="true">
        <div className={`background-blob blob-one ${toneClassMap[tone]}`} />
        <div className="background-blob blob-two" />
        <div className={`background-blob blob-three ${toneClassMap[tone]}`} />
      </div>
      <div className="background-grid" aria-hidden="true" />
      <div className="background-grain" aria-hidden="true" />
    </>
  );
}
