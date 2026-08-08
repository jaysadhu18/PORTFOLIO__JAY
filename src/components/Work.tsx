import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown, FiGithub } from "react-icons/fi";
import { githubProfile, work, type WorkItem } from "../data";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "../motion/Reveal";
import { EASE } from "../motion/variants";
import "./Work.css";

const featured = work.filter((p) => p.caseStudy);
const rest = work.filter((p) => !p.caseStudy);

export function Work() {
  return (
    <section className="work-section section" id="work">
      <div className="container work-head">
        <Reveal as="p" className="section__label">
          Work
        </Reveal>
        <Reveal as="h2" className="section__title title">
          I make incredible <br />
          <span className="work-head__accent">projects.</span>
        </Reveal>
        <Reveal as="p" className="work-hint">
          {work.length} projects · {featured.length} featured case studies ·{" "}
          <a href={githubProfile} target="_blank" rel="noreferrer">
            github.com/jaysadhu18
          </a>
        </Reveal>
      </div>

      <div className="container case-studies">
        {featured.map((item, i) => (
          <CaseStudyCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="container more-projects">
          <Reveal as="h3" className="more-projects__title">
            More projects
          </Reveal>
          <div className="more-projects__grid">
            {rest.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function CaseStudyCard({ item, index }: { item: WorkItem; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const reversed = index % 2 === 1;
  const caseStudy = item.caseStudy;

  return (
    <motion.article
      className={`case-study${reversed ? " case-study--reverse" : ""}`}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      <div className="case-study__visual">
        <ProjectVisual category={item.category} title={item.title} />
      </div>

      <div className="case-study__body">
        <span className="case-study__index">{String(index + 1).padStart(2, "0")}</span>
        <p className="case-study__category">{item.category ?? "Web"}</p>
        <h3 className="case-study__title">{item.title}</h3>
        <p className="case-study__summary">{item.summary}</p>

        <ul className="case-study__stack">
          {item.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        {caseStudy && (
          <>
            <button
              type="button"
              className="case-study__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              {open ? "Hide case study" : "Read case study"}
              <FiChevronDown className={`case-study__chevron${open ? " is-open" : ""}`} />
            </button>
            <div className={`case-study__detail${open ? " is-open" : ""}`}>
              <div className="case-study__detail-inner">
                <h4>Problem</h4>
                <p>{caseStudy.problem}</p>
                <h4>Key features</h4>
                <ul>
                  {caseStudy.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <h4>My contribution</h4>
                <p>{caseStudy.contribution}</p>
              </div>
            </div>
          </>
        )}

        <div className="case-study__links">
          {item.link && (
            <a href={item.link} target="_blank" rel="noreferrer" className="case-study__link">
              <FiGithub size={15} /> Code
            </a>
          )}
          {item.demo && (
            <a
              href={item.demo}
              target="_blank"
              rel="noreferrer"
              className="case-study__link case-study__link--primary"
            >
              Live demo <FiArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ item }: { item: WorkItem }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="mini-card"
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      <div className="mini-card__visual">
        <ProjectVisual category={item.category} title={item.title} />
      </div>
      <div className="mini-card__body">
        <p className="mini-card__category">{item.category ?? "Web"}</p>
        <h4 className="mini-card__title">{item.title}</h4>
        <p className="mini-card__summary">{item.summary}</p>
        <div className="mini-card__links">
          {item.link && (
            <a href={item.link} target="_blank" rel="noreferrer" aria-label={`${item.title} code on GitHub`}>
              <FiGithub size={14} />
            </a>
          )}
          {item.demo && (
            <a href={item.demo} target="_blank" rel="noreferrer" aria-label={`${item.title} live demo`}>
              <FiArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
