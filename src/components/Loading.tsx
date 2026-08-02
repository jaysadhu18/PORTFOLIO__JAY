import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import { landing, site } from "../data";
import "./Loading.css";

type LoadingProps = {
  percent: number;
};

export function Loading({ percent }: LoadingProps) {
  const { setIsLoading } = useLoading();
  const [showWelcome, setShowWelcome] = useState(false);
  const [wipe, setWipe] = useState(false);

  useEffect(() => {
    if (percent < 100) return;
    const t1 = window.setTimeout(() => setShowWelcome(true), 500);
    const t2 = window.setTimeout(() => setWipe(true), 1400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [percent]);

  useEffect(() => {
    if (!wipe) return;
    let cancelled = false;
    const t = window.setTimeout(async () => {
      const mod = await import("./utils/initialFX");
      if (cancelled) return;
      mod.initialFX();
      setIsLoading(false);
    }, 900);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [wipe, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  const clamped = Math.min(100, Math.max(0, Math.round(percent)));
  const marqueeItems = [...landing.roles, ...landing.roles, ...landing.roles];

  return (
    <div className="loading-root" aria-busy="true" aria-live="polite">
      <header className="loading-header">
        <span className="loading-brand">{site.name}</span>
        <span className="loading-meta">{site.location}</span>
      </header>

      <div className="loading-marquee" aria-hidden>
        <div className="loading-marquee-track">
          {marqueeItems.map((role, i) => (
            <span key={`${role}-${i}`}>{role}</span>
          ))}
        </div>
      </div>

      <div
        className={`loading-wrap${wipe ? " loading-wrap--wipe" : ""}`}
        onMouseMove={handleMouseMove}
      >
        <div className="loading-glow" aria-hidden />
        <div className={`loading-pill${showWelcome ? " loading-pill--ready" : ""}`}>
          <div className="loading-status">
            <span className="loading-label">Loading</span>
            <span className="loading-percent">{clamped}%</span>
            <span className="loading-caret" aria-hidden />
          </div>
          <div className="loading-welcome">
            <span>Enter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { setProgress } from "./utils/setProgress";
