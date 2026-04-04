import { useEffect, useState } from "react";

interface ScrollSignals {
  progress: number;
  navHidden: boolean;
}

export function useScrollSignals(): ScrollSignals {
  const [signals, setSignals] = useState<ScrollSignals>({
    progress: 0,
    navHidden: false,
  });

  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;

    const updateSignals = () => {
      const y = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setSignals({
        progress: maxScroll > 0 ? (y / maxScroll) * 100 : 0,
        navHidden: y > lastScroll && y > 120,
      });

      lastScroll = y;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateSignals);
    };

    updateSignals();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return signals;
}
