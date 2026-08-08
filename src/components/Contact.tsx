import { site } from "../data";
import { RevealGroup, RevealItem } from "../motion/Reveal";
import "./Contact.css";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="section contact">
      <RevealGroup as="div" className="container contact-inner" stagger={0.1}>
        <RevealItem as="p" className="section__label">
          Contact
        </RevealItem>
        <RevealItem as="h2" className="section__title title">
          Let’s build something.
        </RevealItem>
        <RevealItem as="p" className="section__body para">
          Open to full-stack, AI, and product engineering conversations.
        </RevealItem>

        <RevealItem as="div" className="contact-links">
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="contact-phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            {site.phoneDisplay}
          </a>
          <p className="contact-location">{site.location}</p>
        </RevealItem>

        <RevealItem as="div" className="contact-socials">
          <a href={site.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.resumePath} target="_blank" rel="noreferrer">
            Resume
          </a>
        </RevealItem>

        <RevealItem as="p" className="contact-copy">
          © {year} {site.name}
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
