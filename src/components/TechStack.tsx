import { techGroups } from "../data";
import { techCategoryFallback, techIcons } from "../data/techIcons";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";
import "./TechStack.css";

export function TechStack() {
  return (
    <section id="tech" className="section tech">
      <div className="container tech-shell">
        <div className="tech-intro">
          <Reveal as="p" className="section__label">
            Skills
          </Reveal>
          <Reveal as="h2" className="section__title title">
            Tech stack.
          </Reveal>
          <Reveal as="p" className="section__body">
            Five areas from my resume — languages, databases, frameworks, cloud, and AI/ML.
          </Reveal>
        </div>

        <RevealGroup as="div" className="tech-grid" stagger={0.09}>
          {techGroups.map((group, i) => (
            <RevealItem
              key={group.id}
              as="article"
              className="tech-block"
              style={{ ["--block-i" as string]: String(i) }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tech-block__glow" aria-hidden />
              <h3 className="tech-block__title">{group.label}</h3>
              <ul className="tech-pills">
                {group.items.map((item) => {
                  const Icon = techIcons[item] ?? techCategoryFallback[group.id];
                  return (
                    <li key={item}>
                      {Icon && <Icon className="tech-pill__icon" aria-hidden />}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
