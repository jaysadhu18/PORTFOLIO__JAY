import gsap from "gsap";
import { smoother } from "../Navbar";
import setSplitText from "./splitText";

/**
 * Intro FX after loading wipe.
 * Unpauses ScrollSmoother and reveals hero + chrome.
 */
export function initialFX() {
  document.body.style.overflowY = "auto";
  document.body.classList.add("intro-ready");

  const main = document.querySelector("main.main-body");
  main?.classList.add("main-active");

  if (smoother) {
    smoother.paused(false);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    gsap.set([".melt-fade", ".site-header", ".icons-section"], {
      opacity: 1,
      clearProps: "filter",
    });
    setSplitText();
    return;
  }

  gsap.fromTo(
    [".melt-fade", ".site-header", ".icons-section"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 0.05,
    },
  );

  window.setTimeout(() => {
    setSplitText();
    // Pin + scrub need a refresh once the hero is visible and smoother is live
    void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh();
    });
  }, 400);
}
