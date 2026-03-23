import { useEffect, useState } from "react";
import { BackgroundBlobs } from "./components/BackgroundBlobs";
import { ProgressBar } from "./components/ProgressBar";
import { Toast } from "./components/Toast";
import { TopNav } from "./components/TopNav";
import { siteContent } from "./data/siteContent";
import { useActiveSection } from "./hooks/useActiveSection";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { useScrollSignals } from "./hooks/useScrollSignals";
import { useTypewriter } from "./hooks/useTypewriter";
import { FooterContactSection } from "./sections/FooterContactSection";
import { HeroSection } from "./sections/HeroSection";
import { InvestigationsSection } from "./sections/InvestigationsSection";
import { LeadershipSection } from "./sections/LeadershipSection";
import { RecognitionSection } from "./sections/RecognitionSection";
import { SkillsMarqueeSection } from "./sections/SkillsMarqueeSection";

const sectionIds = [
  "hero",
  "recognition",
  "investigations",
  "arsenal",
  "leadership",
  "contact",
] as const;

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { progress, navHidden } = useScrollSignals();
  const activeSection = useActiveSection([...sectionIds]);
  const typedText = useTypewriter(siteContent.heroPhrases, prefersReducedMotion);
  const { copied, copy, clear } = useCopyToClipboard();
  const [activeTone, setActiveTone] = useState(siteContent.projects[0]?.tone ?? "gold");

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeout = window.setTimeout(clear, 2400);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [clear, copied]);

  async function handleCopyEmail() {
    await copy(siteContent.contact.email, "Email copied to clipboard");
  }

  useEffect(() => {
    document.title = siteContent.seoTitle;
  }, []);

  return (
    <div className="app-shell" data-reduced-motion={prefersReducedMotion}>
      <ProgressBar progress={progress} />
      <BackgroundBlobs tone={activeTone} />
      <Toast message={copied} />
      <TopNav
        activeSection={activeSection}
        hidden={navHidden}
        onCopyEmail={handleCopyEmail}
      />
      <main className="page-shell">
        <HeroSection content={siteContent} typedText={typedText} />
        <RecognitionSection items={siteContent.recognition} />
        <InvestigationsSection
          projects={siteContent.projects}
          onProjectActive={(index) => {
            const tone = siteContent.projects[index]?.tone;
            if (tone) {
              setActiveTone(tone);
            }
          }}
        />
        <SkillsMarqueeSection rows={siteContent.skills} />
        <LeadershipSection
          headlineLabel={siteContent.leadership.headlineLabel}
          headlinePrefix={siteContent.leadership.headlinePrefix}
          headlineSuffix={siteContent.leadership.headlineSuffix}
          headlineValue={siteContent.leadership.headlineValue}
          role={siteContent.leadership.role}
          stats={siteContent.leadership.stats}
        />
      </main>
      <FooterContactSection
        content={siteContent.contact}
        onCopyEmail={handleCopyEmail}
      />
    </div>
  );
}
