import { career } from "../data";
import "./Career.css";

export function Career() {
  return (
    <section id="career" className="section career">
      <div className="container">
        <p className="section__label">Career</p>
        <h2 className="section__title title">Path so far.</h2>

        <ol className="career-list">
          {career.map((item, index) => (
            <li key={item.id} className="career-item">
              <div className="career-item__rail" aria-hidden>
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
                {item.tags && (
                  <p className="career-item__tags">{item.tags.join(" · ")}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
