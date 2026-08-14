import type { SkillsData } from "./types";

/** S2 in the copy deck: the four skill categories plus "Currently learning". */
export const skills: SkillsData = {
  groups: [
    {
      category: "Engineering",
      items: [
        "Requirements Management",
        "Risk Management (FMEA)",
        "Systems Engineering Documentation (N² Diagrams, ConOps, V&V Plans, Trade Studies)",
        "Design Reviews",
        "Environmental Test Planning",
        "Stakeholder Communication",
        "Schedule and Budget Management",
      ],
    },
    {
      category: "Fabrication",
      items: [
        "FDM",
        "SLA",
        "SLS",
        "Powder Bed Fusion",
        "Multi Jet Fusion",
        "Binder Jetting",
        "3D Scanning",
        "DMG Mori 5-axis CNC",
        "Drill Mill",
        "Lathe",
        "Water Jet",
        "Laser Cutting",
      ],
    },
    {
      category: "Software",
      items: [
        "SolidWorks",
        "Fusion 360",
        "Siemens NX",
        "MATLAB",
        "Python",
        "C++",
        "ROS2",
        "IBM DOORS",
        "Jira",
        "Ansys Fluent (CFD)",
        "Ansys STK",
        "Geomagic X",
      ],
    },
    {
      category: "Robotics and ML",
      items: ["ROS2", "Gazebo", "NVIDIA Jetson", "PyTorch", "OpenCV", "Edge Inference"],
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
