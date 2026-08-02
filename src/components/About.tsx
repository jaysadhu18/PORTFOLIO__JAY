import { FiFileText } from "react-icons/fi";
import { about, site } from "../data";
import "./About.css";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-visual__glow" aria-hidden />
          <span className="about-visual__orb about-visual__orb--a" aria-hidden />
          <span className="about-visual__orb about-visual__orb--b" aria-hidden />
          <img
            className="about-visual__img"
            src={about.photo}
            alt={site.name}
            width={433}
            height={577}
            decoding="async"
            loading="lazy"
          />
        </div>

        <div className="about-copy">
          <p className="section__label">{about.title}</p>
          <h2 className="about-headline title">
            <span className="about-headline__accent">{about.headlineAccent}</span>
            <br />
            {about.headlineRest}
          </h2>

          <p className="about-body para">
            {about.bodyParts.map((part) =>
              part.accent ? (
                <span key={part.text} className="about-body__accent">
                  {part.text}
                </span>
              ) : (
                <span key={part.text}>{part.text}</span>
              ),
            )}
          </p>

          <a
            className="about-resume"
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
          >
            {about.cta}
            <FiFileText size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
