import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./Navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export let smoother: ScrollSmoother | null = null;

const NAV_LINKS = [
  { label: "Home", href: "#landing" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: reduceMotion ? 0 : 1.6,
      effects: !reduceMotion,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const onClick = (e: Event) => {
      const el = e.currentTarget as HTMLAnchorElement;
      const section = el.getAttribute("data-href");
      if (!section) return;
      e.preventDefault();
      if (smoother) {
        smoother.scrollTo(section, true, "top top");
      } else {
        document.querySelector(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>(".site-header a[data-href]");
    links.forEach((link) => link.addEventListener("click", onClick));

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);

    return () => {
      links.forEach((link) => link.removeEventListener("click", onClick));
      window.removeEventListener("resize", onResize);
      smoother?.kill();
      smoother = null;
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <ul className="site-nav__pill">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a data-href={link.href} href={link.href} data-cursor="disable">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
