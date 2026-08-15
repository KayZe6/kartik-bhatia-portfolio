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
  // Numbered in /public/, imported in that order. Each logo's hrefs are the
  // experience(s) it belongs to — case study paths, and/or "#outreach-{slug}"
  // / "#project-{slug}" anchors onto that entry's own card on the homepage.
  // The strip's own link always goes to hrefs[0]. Multiple logos can share
  // an href (VAACE has three, CCRL has two), and a single logo can list more
  // than one href (the Clark School logo covers both MATSCAN and the ENAE
  // 100 TA role); any component that groups logos by experience derives
  // that from hrefs, not a separate mapping.
  affiliations: [
    { src: "/1.png", alt: "VAACE mission patch", hrefs: ["/work/vaace"] },
    { src: "/2.png", alt: "NASA", hrefs: ["/work/vaace"] },
    { src: "/3.webp", alt: "NASA L'SPACE", hrefs: ["/work/vaace"] },
    { src: "/4.webp", alt: "Terrapin Works", hrefs: ["/work/terrapin-works"] },
    { src: "/5.webp", alt: "CCRL, Collaborative Controls and Robotics Lab", hrefs: ["/work/ccrl"] },
    { src: "/6.webp", alt: "Maryland Robotics Center", hrefs: ["/work/ccrl"] },
    {
      src: "/7.png",
      alt: "Autodesk",
      hrefs: ["/#outreach-autodesk-design-make-ambassador"],
    },
    { src: "/8.png", alt: "Space Copy", hrefs: ["/work/space-copy"] },
    {
      src: "/9.webp",
      alt: "NASA Lucy mission patch",
      hrefs: ["/#outreach-nasa-lucy-mission-ambassador"],
    },
    {
      src: "/10.webp",
      alt: "University of Maryland A. James Clark School of Engineering",
      hrefs: ["/#project-matscan", "/#outreach-undergraduate-teaching-assistant-enae-100"],
    },
    {
      src: "/11.png",
      alt: "UMD Space Systems Laboratory",
      hrefs: ["/#project-lunar-suit-lighting-system"],
    },
    {
      src: "/12.png",
      alt: "UMD Balloon Payload Program",
      hrefs: ["/#project-zero-pressure-aerobot"],
    },
    {
      src: "/13.png",
      alt: "Terraformers, URC Rover Team",
      hrefs: ["/#project-terraformers-urc-rover-team"],
    },
    {
      src: "/14.jpg",
      alt: "Space Tech Expo USA",
      hrefs: ["/#outreach-conference-panel-moderator"],
    },
  ],
};
