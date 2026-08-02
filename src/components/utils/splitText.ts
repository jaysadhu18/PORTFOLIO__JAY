import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface SplitHost extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let resizeBound = false;

/** Scroll-triggered word/char reveals for `.para` / `.title` (desktop ≥900) */
export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) {
    document.querySelectorAll<SplitHost>(".para, .title").forEach((el) => {
      el.anim?.kill();
      el.split?.revert();
      el.anim = undefined;
      el.split = undefined;
      gsap.set(el, { clearProps: "all" });
    });
    return;
  }

  const paras = document.querySelectorAll<SplitHost>(".para");
  const titles = document.querySelectorAll<SplitHost>(".title");
  const start = window.innerWidth <= 1024 ? "top 70%" : "top 75%";
  const toggleActions = "play pause resume reverse";

  paras.forEach((para) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 64 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.closest("section") ?? para,
          toggleActions,
          start,
        },
      },
    );
  });

  titles.forEach((title) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }

    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 56, rotate: 8 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.75,
        ease: "power2.inOut",
        stagger: 0.025,
        scrollTrigger: {
          trigger: title.closest("section") ?? title,
          toggleActions,
          start,
        },
      },
    );
  });

  if (!resizeBound) {
    resizeBound = true;
    let ticking = false;
    window.addEventListener("resize", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setSplitText();
        ticking = false;
      });
    });
  }
}
