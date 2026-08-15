import type { SkillsData } from "./types";

/**
 * S2 in the copy deck: the four skill categories plus "Currently learning".
 * caseStudySlugs and minorProjectSlugs link a skill to every experience
 * where it was actually used (a skill can span several), driving the
 * click-to-see-experience interaction in the Skills section. Skills without
 * a linked experience (coursework, tools not yet applied anywhere featured)
 * simply omit both.
 */
export const skills: SkillsData = {
  heading: "What I work with",
  groups: [
    {
      category: "Engineering",
      items: [
        { name: "Requirements Management", caseStudySlugs: ["vaace"] },
        { name: "Risk Management (FMEA)", caseStudySlugs: ["vaace"] },
        {
          name: "Systems Engineering Documentation (N² Diagrams, ConOps, V&V Plans, Trade Studies)",
          caseStudySlugs: ["vaace"],
        },
        { name: "Design Reviews", caseStudySlugs: ["vaace"] },
        { name: "Environmental Test Planning", caseStudySlugs: ["vaace"] },
        { name: "Stakeholder Communication", caseStudySlugs: ["vaace", "space-copy"] },
        { name: "Schedule and Budget Management", caseStudySlugs: ["vaace"] },
      ],
    },
    {
      category: "Fabrication",
      items: [
        { name: "FDM", caseStudySlugs: ["terrapin-works", "vaace"] },
        { name: "SLA", caseStudySlugs: ["terrapin-works"] },
        { name: "SLS", caseStudySlugs: ["terrapin-works"] },
        { name: "Powder Bed Fusion", caseStudySlugs: ["terrapin-works"] },
        { name: "Multi Jet Fusion", caseStudySlugs: ["terrapin-works"] },
        { name: "Binder Jetting", caseStudySlugs: ["terrapin-works"] },
        { name: "3D Scanning", caseStudySlugs: ["terrapin-works"] },
        {
          name: "DMG Mori 5-axis CNC",
          minorProjectSlugs: ["terraformers-urc-rover-team", "zero-pressure-aerobot"],
          caseStudySlugs: ["terrapin-works", "vaace"],
        },
        {
          name: "Drill Mill",
          minorProjectSlugs: ["terraformers-urc-rover-team", "zero-pressure-aerobot"],
          caseStudySlugs: ["terrapin-works", "vaace"],
        },
        {
          name: "Lathe",
          minorProjectSlugs: ["terraformers-urc-rover-team", "zero-pressure-aerobot"],
          caseStudySlugs: ["terrapin-works", "vaace"],
        },
        {
          name: "Water Jet",
          minorProjectSlugs: ["terraformers-urc-rover-team", "zero-pressure-aerobot"],
          caseStudySlugs: ["terrapin-works", "vaace"],
        },
        {
          name: "Laser Cutting",
          minorProjectSlugs: ["terraformers-urc-rover-team", "zero-pressure-aerobot"],
          caseStudySlugs: ["terrapin-works", "vaace"],
        },
      ],
    },
    {
      category: "Software",
      items: [
        { name: "SolidWorks", caseStudySlugs: ["vaace", "space-copy"] },
        {
          name: "Fusion 360",
          minorProjectSlugs: ["lunar-suit-lighting-system", "zero-pressure-aerobot"],
          caseStudySlugs: ["vaace", "terrapin-works"],
        },
        { name: "Siemens NX", caseStudySlugs: ["vaace", "terrapin-works"] },
        { name: "MATLAB", caseStudySlugs: ["ccrl", "vaace"] },
        { name: "Python", caseStudySlugs: ["ccrl"] },
        { name: "C++", caseStudySlugs: ["ccrl", "vaace"] },
        { name: "ROS2", caseStudySlugs: ["ccrl", "space-copy"] },
        { name: "IBM DOORS", caseStudySlugs: ["vaace"], minorProjectSlugs: ["matscan"] },
        { name: "Jira", caseStudySlugs: ["vaace"], minorProjectSlugs: ["matscan"] },
        { name: "Ansys Fluent (CFD)", caseStudySlugs: ["space-copy"] },
        { name: "Ansys STK", caseStudySlugs: ["vaace"] },
        { name: "Geomagic X", caseStudySlugs: ["terrapin-works"] },
      ],
    },
    {
      category: "Robotics and ML",
      items: [
        { name: "ROS2", caseStudySlugs: ["ccrl", "space-copy"] },
        { name: "Gazebo", caseStudySlugs: ["ccrl", "space-copy"] },
        { name: "NVIDIA Jetson", caseStudySlugs: ["vaace"] },
        { name: "PyTorch", caseStudySlugs: ["ccrl", "vaace"] },
        { name: "OpenCV", caseStudySlugs: ["vaace", "ccrl"] },
        { name: "Edge Inference", caseStudySlugs: ["vaace"] },
      ],
    },
  ],
  currentlyLearning: [
    "Agentic AI systems (tool calling, RAG, workflow orchestration)",
    "Machine learning for robotics (computer vision, object detection, robotic perception)",
    "NVIDIA Jetson (edge AI, CUDA acceleration, TensorRT deployment)",
    "Autonomous navigation (SLAM, sensor fusion, path planning)",
    "Robot manipulation (MoveIt 2, motion planning, kinematics)",
    "NVIDIA Isaac ROS (GPU-accelerated perception, visual SLAM)",
  ],
};
