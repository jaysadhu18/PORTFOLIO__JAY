import { motion, type Variants } from "framer-motion";
import { career } from "../data";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";
import { EASE } from "../motion/variants";
import "./Career.css";

const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.7, ease: EASE, delay: 0.15 } },
};

export function Career() {
  return (
    <section id="career" className="section career">
      <div className="container">
        <Reveal as="p" className="section__label">
          Career
        </Reveal>
        <Reveal as="h2" className="section__title title">
          Path so far.
        </Reveal>

        <RevealGroup as="ol" className="career-list" stagger={0.22}>
          {career.map((item, index) => (
            <RevealItem key={item.id} as="li" className="career-item">
              <div className="career-item__rail" aria-hidden>
                {index < career.length - 1 && (
                  <motion.span className="career-item__line" variants={lineGrow} />
                )}
                <span className={`career-item__dot${index === 0 ? " is-current" : ""}`} />
              </div>
              <div className="career-item__content">
                <p className="career-item__period">{item.period}</p>
                <h3 className="career-item__role">{item.role}</h3>
                <p className="career-item__org">
                  {item.org} · {item.location}
                </p>
                <ul className="career-item__bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {item.tags && <p className="career-item__tags">{item.tags.join(" · ")}</p>}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
