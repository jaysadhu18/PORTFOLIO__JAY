/** Hero + loading marquee copy */
export const landing = {
  brand: "Jay Sadhu",
  brandLines: ["Jay", "Sadhu"] as const,
  tagline: "Full-Stack · AI",
  greeting: "Hello, I'm",
  roleLabel: "Building",
  supporting:
    "Associate Software Engineer at Digiflux. Building web, React Native, and Generative AI systems that hold up in production.",
  photo: "/images/jay.png",
  roles: ["Full-Stack", "React Native", "AI Systems"] as const,
  frameCount: 302,
  frameSrc: (index: number) =>
    `/hero/frames/frame_${String(index).padStart(4, "0")}.jpg`,
  /** Left-rail beats — over empty video space while scrolling */
  beats: [
    {
      pill: "Hello, I'm",
      lines: ["Jay", "Sadhu"] as const,
      body: "Associate Software Engineer at Digiflux — shipping web, React Native, and Generative AI that holds up in production.",
    },
    {
      pill: "Building",
      lines: ["Full-Stack.", "Mobile.", "AI systems."] as const,
      body: "From product UI to backend and models — clean architecture, fast iteration, real users.",
    },
    {
      pill: "Based in",
      lines: ["Vadodara.", "Open to", "build."] as const,
      body: "Scroll on for work, stack, and how to reach me.",
    },
  ],
} as const;
