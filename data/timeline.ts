import type { TimelineData } from "./types";

/**
 * The About section's trajectory graphic, past to future. One deliberate
 * progression toward human spaceflight, not a list of changed directions.
 *
 * The "I am here" marker is a floating position on the line, not a stage
 * of its own: currently between University of Maryland and The Dream Job,
 * closer to the latter.
 */
export const timeline: TimelineData = {
  stages: [
    {
      label: "High School",
      detail: "Robots, olympiads, and the Interstellar obsession that started it all",
    },
    {
      label: "University of Maryland",
      detail:
        "Aerospace Engineering, Minor: Global Engineering Leadership. Everything in this portfolio is just 3 years of college",
    },
    {
      label: "The Dream Job",
      detail: "Building robotic space systems, backed by manufacturing know-how",
    },
    {
      label: "Human Spaceflight",
      detail: "The long-duration crew, eventually",
    },
  ],
  marker: { afterStageIndex: 1, progress: 0.7 },
};
