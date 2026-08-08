import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";
import { about, site } from "../data";
import { RevealGroup, RevealItem } from "../motion/Reveal";
import "./About.css";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-layout">
        <RevealGroup as="div" className="about-copy" stagger={0.12}>
          <RevealItem as="p" className="section__label">
            {about.title}
          </RevealItem>
          <RevealItem as="h2" className="about-headline title">
            <span className="about-headline__accent">{about.headlineAccent}</span>
            <br />
            {about.headlineRest}
          </RevealItem>

          <RevealItem as="p" className="about-body para">
            {about.bodyParts.map((part) =>
              part.accent ? (
                <span key={part.text} className="about-body__accent">
                  {part.text}
                </span>
              ) : (
                <span key={part.text}>{part.text}</span>
              ),
            )}
          </RevealItem>

          <motion.a
            className="about-resume"
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {about.cta}
            <FiFileText size={16} aria-hidden />
          </motion.a>
        </RevealGroup>

        <RevealGroup as="div" className="about-highlights" stagger={0.1}>
          {about.highlights.map((h) => (
            <RevealItem
              key={h}
              as="article"
              className="about-highlight"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{h}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
