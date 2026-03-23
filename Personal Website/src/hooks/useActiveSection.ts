import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setActiveSection(elements[0]?.dataset.sectionLabel ?? "");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(
            (visibleEntry.target as HTMLElement).dataset.sectionLabel ?? "",
          );
        }
      },
      {
        threshold: [0.2, 0.35, 0.55, 0.8],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return activeSection;
}
