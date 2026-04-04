import { useEffect, useRef, useState } from "react";
import { getCenteredCardIndex } from "../utils/carousel";

export function useProjectCarousel(projectCount: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const updateActive = () => {
      const cards = Array.from(
        container.querySelectorAll<HTMLElement>("[data-project-card]"),
      );

      const nextIndex = getCenteredCardIndex(
        cards.map((card) => ({
          left: card.getBoundingClientRect().left,
          width: card.getBoundingClientRect().width,
        })),
        container.getBoundingClientRect().left,
        container.clientWidth,
      );

      setActiveIndex(nextIndex);
    };

    updateActive();
    container.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      container.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [projectCount]);

  function scrollToIndex(index: number) {
    const container = containerRef.current;
    const cards = container?.querySelectorAll<HTMLElement>("[data-project-card]");
    const nextCard = cards?.[index];

    if (!container || !nextCard) {
      return;
    }

    const left =
      nextCard.offsetLeft - container.clientWidth / 2 + nextCard.clientWidth / 2;

    container.scrollTo({
      left,
      behavior: "smooth",
    });
  }

  function goToPrevious() {
    scrollToIndex(Math.max(activeIndex - 1, 0));
  }

  function goToNext() {
    scrollToIndex(Math.min(activeIndex + 1, projectCount - 1));
  }

  return {
    containerRef,
    activeIndex,
    scrollToIndex,
    goToPrevious,
    goToNext,
  };
}
