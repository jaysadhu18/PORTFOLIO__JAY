import type { CSSProperties } from "react";
import "./ProjectVisual.css";

type Kind = "web" | "ai" | "cv" | "mobile" | "systems";

function resolveKind(category?: string): Kind {
  const c = (category ?? "").toLowerCase();
  if (c.includes("mobile")) return "mobile";
  if (c.includes("cv")) return "cv";
  if (c.includes("systems")) return "systems";
  // Prefer "web" over a bare "ai" tag when both apply (e.g. "Web · AI") —
  // dashboard-style products read better as a browser mock than a chat mock.
  if (c.includes("web")) return "web";
  if (c.includes("ai")) return "ai";
  return "web";
}

type Props = {
  category?: string;
  title: string;
};

/** Code-crafted, on-brand project mockup — no raster images, keyed off project category. */
export function ProjectVisual({ category, title }: Props) {
  const kind = resolveKind(category);
  return (
    <div
      className={`project-visual project-visual--${kind}`}
      role="img"
      aria-label={`${title} preview`}
    >
      {kind === "web" && <WebMock />}
      {kind === "ai" && <AiMock />}
      {kind === "cv" && <CvMock />}
      {kind === "mobile" && <MobileMock />}
      {kind === "systems" && <SystemsMock />}
    </div>
  );
}

function WebMock() {
  return (
    <div className="pv-browser">
      <div className="pv-browser__bar">
        <span />
        <span />
        <span />
        <span className="pv-browser__url" />
        <span className="pv-browser__avatar" />
      </div>
      <div className="pv-browser__body">
        <div className="pv-browser__side">
          <span className="pv-bar pv-bar--sm pv-bar--active" />
          <span className="pv-bar pv-bar--sm" />
          <span className="pv-bar pv-bar--sm" />
          <span className="pv-bar pv-bar--sm" />
        </div>
        <div className="pv-browser__main">
          <div className="pv-card" />
          <div className="pv-card" />
          <div className="pv-chart">
            <span style={{ height: "40%" }} />
            <span style={{ height: "70%" }} />
            <span style={{ height: "55%" }} />
            <span style={{ height: "90%" }} />
            <span style={{ height: "35%" }} />
            <span style={{ height: "62%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AiMock() {
  return (
    <div className="pv-chat">
      <div className="pv-chat__bar">
        <span className="pv-chat__avatar" />
        <span className="pv-bar pv-bar--sm" style={{ width: "34%" }} />
        <span className="pv-chat__status" />
      </div>
      <div className="pv-chat__body">
        <div className="pv-bubble pv-bubble--in">
          <span className="pv-bar" style={{ width: "80%" }} />
          <span className="pv-bar" style={{ width: "55%" }} />
        </div>
        <div className="pv-bubble pv-bubble--out">
          <span className="pv-bar" style={{ width: "70%" }} />
        </div>
        <div className="pv-bubble pv-bubble--in pv-bubble--typing">
          <span className="pv-dot" />
          <span className="pv-dot" />
          <span className="pv-dot" />
        </div>
      </div>
      <div className="pv-chat__input">
        <span className="pv-bar pv-bar--sm" style={{ width: "60%" }} />
        <span className="pv-chat__send" />
      </div>
    </div>
  );
}

function CvMock() {
  return (
    <div className="pv-cam">
      <div className="pv-cam__bar">
        <span className="pv-cam__rec" />
        <span className="pv-bar pv-bar--sm" style={{ width: "40%" }} />
      </div>
      <div className="pv-cam__stage">
        <span className="pv-cam__silhouette" />
        <div className="pv-cam__frame">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="pv-cam__dot" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>
        <span className="pv-cam__box" />
        <span className="pv-cam__chip">Detecting</span>
      </div>
    </div>
  );
}

function MobileMock() {
  return (
    <div className="pv-phone">
      <div className="pv-phone__notch" />
      <div className="pv-phone__screen">
        <span className="pv-bar pv-bar--title" />
        <span className="pv-bar" />
        <span className="pv-bar" style={{ width: "70%" }} />
        <div className="pv-phone__chip" />
        <div className="pv-phone__row">
          <span className="pv-phone__pill" />
          <span className="pv-phone__pill" />
        </div>
        <div className="pv-phone__nav">
          <span className="pv-phone__navdot pv-phone__navdot--active" />
          <span className="pv-phone__navdot" />
          <span className="pv-phone__navdot" />
          <span className="pv-phone__navdot" />
        </div>
      </div>
    </div>
  );
}

function SystemsMock() {
  return (
    <div className="pv-term">
      <div className="pv-term__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="pv-term__body">
        <p>
          <span className="pv-term__prompt">$</span> build --release
        </p>
        <p>
          <span className="pv-term__prompt">$</span> linking objects...
        </p>
        <p className="pv-term__ok">
          <span className="pv-term__prompt">$</span> done <span className="pv-term__cursor" />
        </p>
      </div>
    </div>
  );
}
