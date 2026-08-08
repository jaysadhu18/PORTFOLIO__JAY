import { useState } from "react";
import { whatIDo } from "../data";
import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";
import "./WhatIDo.css";

export function WhatIDo() {
  const [openId, setOpenId] = useState<string | null>(whatIDo.panels[0]?.id ?? null);

  return (
    <section id="what-i-do" className="section whatido">
      <div className="container">
        <Reveal as="p" className="section__label">
          {whatIDo.title}
        </Reveal>
        <Reveal as="h2" className="section__title title">
          Two lanes. One stack.
        </Reveal>

        <RevealGroup as="div" className="whatido-panels" stagger={0.14}>
          {whatIDo.panels.map((panel) => {
            const open = openId === panel.id;
            return (
              <RevealItem
                key={panel.id}
                as="article"
                className={`whatido-panel${open ? " is-open" : ""}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
