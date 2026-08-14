import type { CertificationGroup } from "./types";

/** S2 in the copy deck: the two certification groups, in display order. */
export const certifications: CertificationGroup[] = [
  {
    label: "Technical certifications in progress",
    items: [
      "NVIDIA DLI: Fundamentals of Deep Learning",
      "NVIDIA DLI: CUDA and Accelerated Computing",
      "NVIDIA-Certified Professional: Agentic AI",
      "NVIDIA Isaac ROS and Isaac Sim Training",
      "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    ],
  },
  {
    label: "Working toward (spaceflight readiness)",
    items: [
      "FAA Private Pilot Certificate (PPL)",
      "SCUBA Open Water Diver Certification",
      "FCC Amateur Radio Technician Class License",
    ],
  },
];
