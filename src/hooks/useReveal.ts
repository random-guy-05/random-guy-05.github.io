import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, visible };
}
