import { achievements, work } from "../data";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";
import "./Achievements.css";

const stats = [
  ...achievements,
  {
    id: "projects",
    value: String(work.length),
    label: "Shipped projects",
    detail: "Full-stack, mobile & AI systems — public on GitHub",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <Reveal as="p" className="section__label">
          Achievements
        </Reveal>
        <Reveal as="h2" className="section__title title">
          Milestones so far.
        </Reveal>

        <RevealGroup as="div" className="achievements-grid" stagger={0.1}>
          {stats.map((stat) => (
            <RevealItem
              key={stat.id}
              as="article"
              className="achievement-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="achievement-card__value">{stat.value}</p>
              <p className="achievement-card__label">{stat.label}</p>
              <p className="achievement-card__detail">{stat.detail}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
