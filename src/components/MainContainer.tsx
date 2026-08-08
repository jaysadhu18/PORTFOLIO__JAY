import type { ReactNode } from "react";
import { Landing } from "./Landing";
import { About } from "./About";
import { WhatIDo } from "./WhatIDo";
import { Career } from "./Career";
import { Work } from "./Work";
import { TechStack } from "./TechStack";
import { Achievements } from "./Achievements";
import { Contact } from "./Contact";
import { Navbar } from "./Navbar";
import { SocialIcons } from "./SocialIcons";
import { Cursor } from "./Cursor";

type Props = {
  children?: ReactNode;
};

export function MainContainer({ children }: Props) {
  return (
    <div className="main-shell">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {/* Desktop character mounts here in Phase 4 */}
      <div className="character-model" aria-hidden />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Landing />
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <TechStack />
          <Achievements />
          <Contact />
          {children}
        </div>
      </div>
    </div>
  );
}
