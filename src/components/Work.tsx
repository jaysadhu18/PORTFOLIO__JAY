import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { githubProfile, work } from "../data";
import "./Work.css";

/** Featured projects for the Habib-style carousel; fall back to all */
const projects = work.filter((p) => p.featured).length
  ? work.filter((p) => p.featured)
  : work;

export function Work() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      const cards = rail.querySelectorAll<HTMLElement>(".work-card");
      if (!cards.length) return;
      const mid = rail.scrollLeft + rail.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };

    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollTo = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelectorAll<HTMLElement>(".work-card")[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="work-section section" id="work">
      <div className="container work-head">
        <p className="section__label">Work</p>
        <h2 className="section__title title">
          I make incredible <br />
          <span className="work-head__accent">projects.</span>
        </h2>
        <p className="work-hint">
          Swipe or scroll ·{" "}
          <a href={githubProfile} target="_blank" rel="noreferrer">
            github.com/jaysadhu18
          </a>
        </p>
      </div>

      <div className="work-rail" ref={railRef} data-cursor="disable">
        {projects.map((item, i) => {
          const n = String(i + 1).padStart(2, "0");
          const href = item.demo || item.link;
          return (
            <article key={item.id} className="work-card">
              <div className="work-card__blob" aria-hidden />

              <div className="work-card__number">
                <span className="work-card__index">{n}</span>
                <span className="work-card__category">{item.category ?? "Web"}</span>
              </div>

              <div className="work-card__data">
                <h3 className="work-card__title">{item.title}</h3>
                <p className="work-card__subtitle">Techstack used</p>
                <p className="work-card__stack">{item.stack.join(", ")}</p>
              </div>

              <div className="work-card__image">
                <div className="work-card__media" aria-hidden>
                  <span className="work-card__media-index">{n}</span>
                </div>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="work-card__go"
                    aria-label={`Open ${item.title}`}
                  >
                    <FiArrowUpRight size={22} />
                  </a>
                )}
              </div>

              {item.link && item.demo && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="work-card__code"
                >
                  <FiGithub size={14} /> Code
                </a>
              )}
            </article>
          );
        })}
      </div>

      <div className="work-dots" role="tablist" aria-label="Projects">
        {projects.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Go to ${item.title}`}
            className={`work-dot${i === active ? " is-active" : ""}`}
            data-cursor="disable"
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
