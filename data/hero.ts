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
  // Numbered in /public/, imported in that order. Each logo's href is the
  // experience it belongs to — a case study path, or a "#outreach-{slug}" /
  // "#project-{slug}" anchor onto that entry's own card on the homepage.
  // Multiple logos can share an href (VAACE has three, CCRL has two); any
  // component that groups logos by experience derives that from href, not
  // a separate mapping.
  affiliations: [
    { src: "/1.png", alt: "VAACE mission patch", href: "/work/vaace" },
    { src: "/2.png", alt: "NASA", href: "/work/vaace" },
    { src: "/3.webp", alt: "NASA L'SPACE", href: "/work/vaace" },
    { src: "/4.webp", alt: "Terrapin Works", href: "/work/terrapin-works" },
    { src: "/5.webp", alt: "CCRL, Collaborative Controls and Robotics Lab", href: "/work/ccrl" },
    { src: "/6.webp", alt: "Maryland Robotics Center", href: "/work/ccrl" },
    {
      src: "/7.png",
      alt: "Autodesk",
      href: "/#outreach-autodesk-design-make-ambassador",
    },
    { src: "/8.png", alt: "Space Copy", href: "/work/space-copy" },
    {
      src: "/9.webp",
      alt: "NASA Lucy mission patch",
      href: "/#outreach-nasa-lucy-mission-ambassador",
    },
    {
      src: "/10.webp",
      alt: "University of Maryland A. James Clark School of Engineering",
      href: "/#project-matscan",
    },
    {
      src: "/11.png",
      alt: "UMD Space Systems Laboratory",
      href: "/#project-lunar-suit-lighting-system",
    },
    {
      src: "/12.png",
      alt: "UMD Balloon Payload Program",
      href: "/#project-zero-pressure-aerobot",
    },
    {
      src: "/13.png",
      alt: "Terraformers, URC Rover Team",
      href: "/#project-terraformers-urc-rover-team",
    },
    {
      src: "/14.jpg",
      alt: "Space Tech Expo USA",
      href: "/#outreach-conference-panel-moderator",
    },
  ],
};
