import type { HeroData } from "./types";

/** S1 in the copy deck. */
export const hero: HeroData = {
  name: "Kartik Bhatia",
  eyebrow: "Engineering Portfolio",
  identityLine:
    "Engineering robotic space systems and the manufacturing that supports them, while working toward a career in human spaceflight",
  subLine:
    "Senior aerospace engineering undergrad at the University of Maryland. Currently leading engineering on a NASA seed-funded Venus flight system research project, working as an additive manufacturing (3D printing) technician, and doing multi-robot systems research on swarms",
  pillars: ["Robotics", "Additive Manufacturing", "Space Systems"],
  // Numbered in /public/, imported in that order: mission patches, lab/school
  // marks, and company logos spanning every case study, minor project, and
  // outreach entry on the site. 10 (Space Copy) isn't currently in /public/,
  // so it's skipped here rather than left pointing at a missing file.
  affiliations: [
    { src: "/1.png", alt: "VAACE mission patch" },
    { src: "/2.png", alt: "NASA" },
    { src: "/3.webp", alt: "NASA L'SPACE" },
    { src: "/4.webp", alt: "NASA Lucy mission patch" },
    { src: "/5.webp", alt: "Terrapin Works" },
    { src: "/6.webp", alt: "University of Maryland A. James Clark School of Engineering" },
    { src: "/7.webp", alt: "CCRL, Collaborative Controls and Robotics Lab" },
    { src: "/8.webp", alt: "Maryland Robotics Center" },
    { src: "/9.png", alt: "Autodesk" },
    { src: "/11.png", alt: "UMD Space Systems Laboratory" },
    { src: "/12.png", alt: "UMD Balloon Payload Program" },
    { src: "/13.png", alt: "Terraformers, URC Rover Team" },
  ],
};
