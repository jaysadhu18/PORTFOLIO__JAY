import { techGroups } from "../data";
import "./TechStack.css";

export function TechStack() {
  return (
    <section id="tech" className="section tech">
      <div className="container tech-shell">
        <div className="tech-intro">
          <p className="section__label">Skills</p>
          <h2 className="section__title title">Tech stack.</h2>
          <p className="section__body">
            Five areas from my resume — languages, databases, frameworks, cloud, and AI/ML.
          </p>
        </div>

        <div className="tech-grid">
          {techGroups.map((group, i) => (
            <article
              key={group.id}
              className="tech-block"
              style={{ ["--block-i" as string]: String(i) }}
            >
              <div className="tech-block__glow" aria-hidden />
              <h3 className="tech-block__title">{group.label}</h3>
              <ul className="tech-pills">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
