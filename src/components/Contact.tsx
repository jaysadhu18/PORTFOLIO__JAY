import { site } from "../data";
import "./Contact.css";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <p className="section__label">Contact</p>
        <h2 className="section__title title">Let’s build something.</h2>
        <p className="section__body para">
          Open to full-stack, AI, and product engineering conversations.
        </p>

        <div className="contact-links">
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="contact-phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            {site.phoneDisplay}
          </a>
          <p className="contact-location">{site.location}</p>
        </div>

        <div className="contact-socials">
          <a href={site.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.resumePath} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        <p className="contact-copy">
          © {year} {site.name}
        </p>
      </div>
    </section>
  );
}
