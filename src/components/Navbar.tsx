import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
  const [activeHref, setActiveHref] = useState<string>("#landing");
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const pillBackground = useTransform(
    scrollY,
    [0, 200],
    ["rgba(26, 29, 34, 0.42)", "rgba(26, 29, 34, 0.82)"],
  );
  const pillBlur = useTransform(scrollY, [0, 200], [12, 22]);
  const pillBackdrop = useTransform(pillBlur, (v) => `blur(${v}px)`);
  const pillShadow = useTransform(
    scrollY,
    [0, 200],
    ["0 8px 28px rgba(40, 32, 30, 0.12)", "0 12px 34px rgba(20, 14, 12, 0.32)"],
  );

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

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      Boolean,
    ) as Element[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <motion.ul
          className="site-nav__pill"
          style={{
            background: pillBackground,
            backdropFilter: pillBackdrop,
            WebkitBackdropFilter: pillBackdrop,
            boxShadow: pillShadow,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href}>
                <a
                  data-href={link.href}
                  href={link.href}
                  data-cursor="disable"
                  className={isActive ? "is-active" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="site-nav__active-pill"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  <span className="site-nav__label">{link.label}</span>
                </a>
              </li>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
}
