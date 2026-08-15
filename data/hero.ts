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
  // outreach entry on the site. 1/2/9/10/11/13 are now SVGs (replacing the
  // earlier WebP versions); 12 was removed outright, so the sequence skips
  // it rather than renumbering.
  affiliations: [
    { src: "/1.svg", alt: "VAACE mission patch" },
    { src: "/2.svg", alt: "NASA" },
    { src: "/3.webp", alt: "NASA L'SPACE" },
    { src: "/4.webp", alt: "NASA Lucy mission patch" },
    { src: "/5.webp", alt: "Terrapin Works" },
    { src: "/6.webp", alt: "University of Maryland A. James Clark School of Engineering" },
    { src: "/7.webp", alt: "CCRL, Collaborative Controls and Robotics Lab" },
    { src: "/8.webp", alt: "Maryland Robotics Center" },
    { src: "/9.svg", alt: "Autodesk" },
    { src: "/10.svg", alt: "Space Copy" },
    { src: "/11.svg", alt: "UMD Space Systems Laboratory" },
    { src: "/13.svg", alt: "Terraformers, URC Rover Team" },
  ],
};
