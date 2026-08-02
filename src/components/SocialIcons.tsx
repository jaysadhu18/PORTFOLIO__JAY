import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TbNotes } from "react-icons/tb";
import { HoverLinks } from "./HoverLinks";
import { site } from "../data";
import "./SocialIcons.css";

const ICONS = [
  { href: `mailto:${site.email}`, label: "Email", Icon: FiMail, external: false },
  { href: site.socials.github, label: "GitHub", Icon: FiGithub, external: true },
  {
    href: site.socials.linkedin,
    label: "LinkedIn",
    Icon: FiLinkedin,
    external: true,
  },
] as const;

/** Hide floating chrome over dense sections so chips/text never overlap */
const HIDE_WHEN_VISIBLE = ["#landing", "#work", "#tech", "#contact"];

export function SocialIcons() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const elements = HIDE_WHEN_VISIBLE.map((sel) => document.querySelector(sel)).filter(
      Boolean,
    ) as Element[];

    if (elements.length === 0) return;

    const visible = new Set<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        });
        setHidden(visible.size > 0);
      },
      { threshold: [0.15, 0.2, 0.35] },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const root = document.getElementById("social");
    if (!root) return;

    const cleanups: Array<() => void> = [];

    root.querySelectorAll<HTMLElement>("span").forEach((item) => {
      const link = item.querySelector("a") as HTMLElement | null;
      if (!link) return;

      let rect = item.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = rect.width / 2;
      let currentY = rect.height / 2;
      let raf = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        raf = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x > 4 && x < rect.width - 4 && y > 4 && y < rect.height - 4) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      raf = requestAnimationFrame(updatePosition);

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(raf);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <aside
      className={`icons-section${hidden ? " icons-section--hidden" : ""}`}
      aria-label="Social links"
      aria-hidden={hidden}
    >
      <div className="social-icons" data-cursor="icons" id="social">
        {ICONS.map(({ href, label, Icon, external }) => (
          <span key={label}>
            <a
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              data-cursor="disable"
              tabIndex={hidden ? -1 : undefined}
            >
              <Icon />
            </a>
          </span>
        ))}
      </div>
      <a
        className="resume-button"
        href={site.resumePath}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
        tabIndex={hidden ? -1 : undefined}
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </aside>
  );
}
