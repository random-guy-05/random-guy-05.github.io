import { useParallax } from "../hooks/useParallax";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
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
  const prefersReducedMotion = usePrefersReducedMotion();
  const parallaxSlow = useParallax(0.3);
  const parallaxMedium = useParallax(0.5);
  const parallaxFast = useParallax(0.7);

  return (
    <>
      <div className="background-canvas" aria-hidden="true">
        <div 
          className={`background-blob blob-one ${toneClassMap[tone]}`}
          style={!prefersReducedMotion ? { transform: `translateY(${parallaxSlow}px)` } : undefined}
        />
        <div 
          className="background-blob blob-two"
          style={!prefersReducedMotion ? { transform: `translateY(${parallaxMedium}px)` } : undefined}
        />
        <div 
          className={`background-blob blob-three ${toneClassMap[tone]}`}
          style={!prefersReducedMotion ? { transform: `translateY(${parallaxFast}px)` } : undefined}
        />
      </div>
      <div 
        className="background-grid" 
        aria-hidden="true"
        style={!prefersReducedMotion ? { transform: `translateY(${parallaxSlow * 0.5}px)` } : undefined}
      />
      <div className="background-grain" aria-hidden="true" />
    </>
  );
}
