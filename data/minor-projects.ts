import type { MinorProject } from "./types";

/**
 * S4 in the copy deck. Two featured (tags, more room) and two compact
 * (no tags, smaller card) projects, in display order.
 */
export const minorProjects: MinorProject[] = [
  {
    slug: "zero-pressure-aerobot",
    tier: "featured",
    title: "Zero Pressure Aerobot",
    subtitle: "Prototyping Engineer · UMD Balloon Payload Program · Sep to Dec 2024",
    summary:
      "A high-altitude balloon system built for near-space payload testing, flown to 60,000 ft carrying a 4 lb payload on a full-scale flight. Designed and 3D-printed structural components that held under 2% strain during ascent, extending flight duration by 25%, and programmed a cut-down mechanism with fail-safe logic that brought the payload down inside a 200 m landing radius.",
    tags: ["Control Logic", "FDM 3D Printing", "Balloon Flight Operations"],
  },
  {
    slug: "terraformers-urc-rover-team",
    tier: "featured",
    title: "Terraformers, URC Rover Team",
    subtitle: "Fabrication and Testing Engineer · Jan to Jun 2024",
    summary:
      "Fabrication and validation work on a 7 ft by 4 ft competition rover. Handled the CNC machining and welding to a ±0.5 mm tolerance, and owned the validation trials, confirming 5 m/s traversal over 2 ft obstacles across 50 km with no structural failures. Reinforced the chassis plates, cutting predicted bending stress by 35% and vibration amplitude by 25% under impact loads.",
    tags: ["CNC Machining", "Welding", "Structural Reinforcement", "Field Validation Testing"],
  },
  {
    slug: "lunar-suit-lighting-system",
    tier: "compact",
    title: "Lunar Suit Lighting System",
    subtitle: "Integration and Test Engineer · UMD Space Systems Laboratory · Sep to Dec 2023",
    summary:
      "Worked with a team of four to design and integrate a lighting system for a lunar suit prototype, using Fusion 360 for system performance and spatial alignment, plus hands-on fabrication, assembly, and testing of the subsystems and the final build.",
  },
  {
    slug: "matscan",
    tier: "compact",
    title: "MATSCAN, Material Sensing, Classification, and Navigation",
    subtitle: "Team Lead · UMD Clark School of Engineering · Feb to May 2024",
    summary:
      "Led a team of seven building an autonomous rover for material sensing and navigation. Oversaw the mechanical design, sensor integration, and the testing and assembly needed to validate that it worked.",
  },
];
