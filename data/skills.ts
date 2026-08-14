import type { SkillsData } from "./types";

/**
 * S2 in the copy deck: the four skill categories plus "Currently learning".
 * caseStudySlugs links a skill to the case studies where it was actually
 * used, driving the click-to-see-experience interaction in the Skills
 * section. Skills without a case study behind them (coursework, minor
 * projects, tools not yet applied in a featured study) simply omit it.
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
        { name: "DMG Mori 5-axis CNC" },
        { name: "Drill Mill" },
        { name: "Lathe" },
        { name: "Water Jet" },
        { name: "Laser Cutting" },
      ],
    },
    {
      category: "Software",
      items: [
        { name: "SolidWorks", caseStudySlugs: ["vaace", "space-copy"] },
        { name: "Fusion 360" },
        { name: "Siemens NX" },
        { name: "MATLAB" },
        { name: "Python", caseStudySlugs: ["ccrl"] },
        { name: "C++" },
        { name: "ROS2", caseStudySlugs: ["ccrl", "space-copy"] },
        { name: "IBM DOORS" },
        { name: "Jira" },
        { name: "Ansys Fluent (CFD)", caseStudySlugs: ["space-copy"] },
        { name: "Ansys STK" },
        { name: "Geomagic X", caseStudySlugs: ["terrapin-works"] },
      ],
    },
    {
      category: "Robotics and ML",
      items: [
        { name: "ROS2", caseStudySlugs: ["ccrl", "space-copy"] },
        { name: "Gazebo", caseStudySlugs: ["ccrl", "space-copy"] },
        { name: "NVIDIA Jetson", caseStudySlugs: ["vaace"] },
        { name: "PyTorch" },
        { name: "OpenCV" },
        { name: "Edge Inference", caseStudySlugs: ["vaace"] },
      ],
    },
  ],
  currentlyLearning: [
    "Agentic AI systems (tool calling, RAG, workflow orchestration)",
    "machine learning for robotics (computer vision, object detection, robotic perception)",
    "NVIDIA Jetson (edge AI, CUDA acceleration, TensorRT deployment)",
    "autonomous navigation (SLAM, sensor fusion, path planning)",
    "robot manipulation (MoveIt 2, motion planning, kinematics)",
    "NVIDIA Isaac ROS (GPU-accelerated perception, visual SLAM)",
  ],
};
