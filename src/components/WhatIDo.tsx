import { useState } from "react";
import { whatIDo } from "../data";
import "./WhatIDo.css";

export function WhatIDo() {
  const [openId, setOpenId] = useState<string | null>(whatIDo.panels[0]?.id ?? null);

  return (
    <section id="what-i-do" className="section whatido">
      <div className="container">
        <p className="section__label">{whatIDo.title}</p>
        <h2 className="section__title title">Two lanes. One stack.</h2>

        <div className="whatido-panels">
          {whatIDo.panels.map((panel) => {
            const open = openId === panel.id;
            return (
              <article
                key={panel.id}
                className={`whatido-panel${open ? " is-open" : ""}`}
                onMouseEnter={() => {
                  if (window.matchMedia("(pointer: fine)").matches) {
                    setOpenId(panel.id);
                  }
                }}
                onClick={() => {
                  if (!window.matchMedia("(pointer: fine)").matches) {
                    setOpenId((prev) => (prev === panel.id ? null : panel.id));
                  }
                }}
              >
                <div className="whatido-panel__edge" aria-hidden />
                <h3 className="whatido-panel__title">{panel.title}</h3>
                <p className="whatido-panel__body">{panel.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
