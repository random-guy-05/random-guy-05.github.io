import { useEffect, useState } from "react";

export function useTypewriter(phrases: string[], reducedMotion: boolean) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) {
      return undefined;
    }

    if (reducedMotion) {
      setPhraseIndex(0);
      setCharacterIndex(phrases[0].length);
      setIsDeleting(false);
      return undefined;
    }

    const currentPhrase = phrases[phraseIndex];
    const finishedTyping = characterIndex === currentPhrase.length;
    const finishedDeleting = characterIndex === 0;

    const delay = isDeleting
      ? 18
      : finishedTyping
        ? 1800
        : 40 + Math.round(Math.random() * 20);

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        if (finishedDeleting) {
          setIsDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        } else {
          setCharacterIndex((current) => current - 1);
        }
        return;
      }

      if (finishedTyping) {
        setIsDeleting(true);
        return;
      }

      setCharacterIndex((current) => current + 1);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [characterIndex, isDeleting, phraseIndex, phrases, reducedMotion]);

  if (phrases.length === 0) {
    return "";
  }

  if (reducedMotion) {
    return phrases[0];
  }

  return phrases[phraseIndex].slice(0, characterIndex);
}
