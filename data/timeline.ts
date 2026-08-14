import type { TimelineStage } from "./types";

/**
 * The About section's trajectory graphic, past to future. One deliberate
 * progression toward human spaceflight, not a list of changed directions.
 */
export const timeline: TimelineStage[] = [
  { label: "Interstellar", detail: "TARS and CASE", status: "past" },
  { label: "Aerospace Engineering", detail: "University of Maryland", status: "past" },
  { label: "Space Systems and Robotics", detail: "Additive manufacturing", status: "current" },
  { label: "Human Spaceflight", detail: "Long-duration crew", status: "future" },
];
