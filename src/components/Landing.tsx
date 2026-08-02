import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { landing } from "../data";
import "./Landing.css";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = landing.frameCount;
const EASE = 0.1;
const BEAT_COUNT = landing.beats.length;

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cssW: number,
  cssH: number,
  alpha = 1,
) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const bw = Math.round(cssW * dpr);
  const bh = Math.round(cssH * dpr);
  if (ctx.canvas.width !== bw || ctx.canvas.height !== bh) {
    ctx.canvas.width = bw;
    ctx.canvas.height = bh;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const scale = Math.max(cssW / img.naturalWidth, cssH / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  const x = (cssW - w) / 2;
  const y = (cssH - h) / 2;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.drawImage(img, x, y, w, h);
  ctx.restore();
}

function applyBeatTransforms(beats: HTMLElement[], progress: number) {
  const drum = progress * (BEAT_COUNT - 1);
  const vh = window.innerHeight;
  beats.forEach((el, i) => {
    const offset = i - drum;
    const y = offset * 0.78 * vh;
    const z = -Math.abs(offset) * 0.28 * vh;
    const rx = -offset * 52;
    const opacity = Math.max(0, 1 - Math.abs(offset) * 0.85);
    el.style.opacity = String(opacity);
    el.style.transform = `perspective(900px) translateY(${y}px) translateZ(${z}px) rotateX(${rx}deg)`;
  });
}

export function Landing() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const drumRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const currentRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0, ex: 0, ey: 0 });
  const [staticMode, setStaticMode] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (mobile || reduce) {
      setStaticMode(true);
      setReady(true);
      return;
    }

    const images: HTMLImageElement[] = [];
    let firstPainted = false;
    let cancelled = false;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = landing.frameSrc(i);
      images.push(img);
    }

    const track = trackRef.current;
    const pin = pinRef.current;
    const canvas = canvasRef.current;
    if (!track || !pin || !canvas) return;

    const paintFirst = () => {
      if (cancelled || firstPainted) return;
      const img = images[0];
      const ctx = canvas.getContext("2d");
      if (!img?.naturalWidth || !ctx) return;
      const { clientWidth: w, clientHeight: h } = pin;
      drawCover(ctx, img, w, h);
      firstPainted = true;
      setReady(true);
      gsap.to(canvas, { opacity: 1, duration: 0.6, ease: "power2.out" });
    };

    if (images[0].complete) paintFirst();
    else images[0].addEventListener("load", paintFirst, { once: true });

    const st = ScrollTrigger.create({
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      pin,
      anticipatePin: 1,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(track);

    const onPointer = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      pointerRef.current.x = (e.clientX - cx) / cx;
      pointerRef.current.y = (e.clientY - cy) / cy;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible || cancelled) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const target = progressRef.current * (FRAME_COUNT - 1);
      let current = currentRef.current;
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.001) current = target;
      currentRef.current = current;

      const floor = Math.floor(current);
      const frac = current - floor;
      const a = images[Math.max(0, Math.min(FRAME_COUNT - 1, floor))];
      const b = images[Math.max(0, Math.min(FRAME_COUNT - 1, floor + 1))];
      if (!a?.complete || !a.naturalWidth) return;

      const { clientWidth: w, clientHeight: h } = pin;
      ctx.clearRect(0, 0, w, h);
      drawCover(ctx, a, w, h, 1);
      if (b?.complete && b.naturalWidth && frac > 0.001) {
        drawCover(ctx, b, w, h, frac);
      }

      const p = pointerRef.current;
      p.ex += (p.x - p.ex) * 0.12;
      p.ey += (p.y - p.ey) * 0.12;
      const tiltFade = Math.max(0, 1 - current / 6);
      const tilt = tiltRef.current;
      if (tilt) {
        const rx = -p.ey * 2.2 * tiltFade;
        const ry = p.ex * 2.2 * tiltFade;
        const tx = -p.ex * 8 * tiltFade;
        const ty = -p.ey * 8 * tiltFade;
        const sc = 1 + 0.05 * tiltFade;
        tilt.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg) translate(${tx}px, ${ty}px) scale(${sc})`;
      }

      const eased = current / (FRAME_COUNT - 1);
      const beatEls = drumRef.current
        ? Array.from(drumRef.current.querySelectorAll<HTMLElement>(".melt-beat"))
        : [];
      if (beatEls.length) applyBeatTransforms(beatEls, eased);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      images[0].removeEventListener("load", paintFirst);
      st.kill();
    };
  }, []);

  const beatsMarkup = (
    <div className="melt-drum melt-fade" ref={drumRef} aria-live="polite">
      {landing.beats.map((beat, i) => (
        <article
          key={beat.pill}
          className="melt-beat"
          style={{
            opacity: i === 0 ? 1 : 0,
            transform: `perspective(900px) translateY(${i * 0.78 * 100}vh)`,
          }}
        >
          <p className="melt-pill">{beat.pill}</p>
          <h2 className="melt-headline">
            {beat.lines.map((line, li) => (
              <span
                key={line}
                className={li === beat.lines.length - 1 ? "melt-headline__em" : undefined}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="melt-body">{beat.body}</p>
        </article>
      ))}
    </div>
  );

  if (staticMode) {
    const beat = landing.beats[0];
    return (
      <section id="landing" className="melt-hero melt-hero--static" aria-label="Intro">
        <div className="melt-hero__static">
          <img
            src={landing.frameSrc(1)}
            alt=""
            className="melt-hero__static-img melt-fade"
            decoding="async"
          />
          <div className="melt-veil" aria-hidden />
          <div className="melt-drum melt-drum--static melt-fade">
            <article className="melt-beat melt-beat--static">
              <p className="melt-pill">{beat.pill}</p>
              <h1 className="melt-headline">
                {beat.lines.map((line, li) => (
                  <span
                    key={line}
                    className={li === beat.lines.length - 1 ? "melt-headline__em" : undefined}
                  >
                    {line}
                  </span>
                ))}
              </h1>
              <p className="melt-body">{beat.body}</p>
            </article>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="landing" className="melt-hero" aria-label="Intro">
      <div className="melt-hero__track" ref={trackRef}>
        <div className="melt-hero__pin" ref={pinRef}>
          <div className="melt-hero__tilt" ref={tiltRef}>
            <canvas
              ref={canvasRef}
              className="melt-hero__canvas melt-fade"
              style={{ opacity: ready ? undefined : 0 }}
              aria-hidden
            />
          </div>
          <div className="melt-veil" aria-hidden />
          {beatsMarkup}
        </div>
      </div>
    </section>
  );
}
