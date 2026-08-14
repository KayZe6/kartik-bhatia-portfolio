import type { CaseStudy } from "./types";

/**
 * The four featured case studies (S3 in the copy deck).
 * VAACE is the flagship: card.flagship = true. Order here is the display order.
 */
export const caseStudies: CaseStudy[] = [
  {
    card: {
      slug: "vaace",
      title: "VAACE, Venus Aerobot for Atmospheric and Cloud Exploration",
      subtitle: "Chief Engineer · NASA seed-funded · Aug 2024 to Present",
      summary:
        "A Venus flight system that can repair its own membrane in-flight. Leading engineering across a 20+ person team spanning disciplines and institutions across the US. Last year the team flew its first scientific payload to 90,000 feet and recovered it intact with a full atmospheric and radiation data record.",
      tags: [
        "Systems Engineering",
        "SolidWorks",
        "FMEA",
        "Flight Operations",
        "Stakeholder Management",
        "Hardware and Software Integration",
        "Electronics and Firmware",
        "Testing and Assembly",
      ],
      flagship: true,
    },
    sections: [
      {
        heading: "The problem",
        body: [
          "Venus has an atmospheric band in its cloud layer, roughly 50 to 55 km up, where the temperature and pressure are close to Earth's. That makes it one of the more realistic places to explore the planet up close, and variable-altitude balloons, called aerobots, are the usual way to reach it. The problem is that the same layer is full of sulfuric acid, and the constant thermal and mechanical cycling slowly breaks down the balloon's envelope. Once that envelope tears there is no way to fix it mid-flight, so most designs carry extra material and hope it holds. VAACE closes that gap by giving the aerobot a way to repair itself in place.",
        ],
      },
      {
        heading: "Phase 1: what flew",
        body: [
          "Before touching the repair problem, the team needed to prove it could build something that survives near-space and comes back. An in-house built scientific payload flew to 27 km (90,000 ft) on a weather research balloon, ran for 3+ hours collecting temperature, pressure, CO2, radiation, and GPS data, and was recovered intact with a full data record. Assisted with the design of the payload assembly in SolidWorks, 3D-printed the housing and structural parts, and led flight operations on launch day.",
          "Alongside Phase 1 flight ops, the team tested a phase-change buoyancy system using a helium-steam mix for altitude control. It produced measurable thermal cycling and a small altitude change, which identified buoyancy authority as the next thing to solve. The whole phase came in under a $10,000 budget.",
        ],
      },
      {
        heading: "Phase 2: what the team is building now",
        body: [
          "The current focus is the Robotic Skin System, the actual self-repair piece and where most of the engineering work is going. It is an autonomous gantry that carries a sensing head and a heated repair head over the envelope surface. For detection, it fuses an RGB-depth camera with a thermal array on a Jetson Orin Nano to find damage and generate repair coordinates. An ST NUCLEO-G474RE microcontroller handles real-time motion and heating. The repair itself uses a small cartridge heater to bring the damaged area of a shape-memory-polymer envelope up to its recovery temperature, driving the material to close the tear, with an IR sensor holding temperature steady so it does not overheat the surrounding material.",
          "It is a two-tier setup on purpose, one side thinking and one side acting, so the detect-and-repair loop runs on its own. The system is in design now, with fabrication targeted for late September 2026, a bench-level test of the full repair loop by November, and a flight test to 115,000 ft by the end of 2026.",
        ],
      },
      {
        heading: "Where it's going",
        body: [
          "In parallel with Phase 2, the Phase 1 payload enclosure is being hardened against the Venus environment with a layered acid-resistant stack. Sulfuric acid exposure, thermal-vacuum, and vibration testing are planned for 2026. The longer-term goal is an envelope that maintains itself well enough to extend how long an aerobot survives in the Venus cloud layer, moving in-situ repair from a lab demo toward something flight-ready.",
        ],
      },
    ],
    aside: {
      kind: "origin",
      text: "The project started through NASA's L'SPACE program, where the team developed the mission concept and then wrote the proposal that won the seed funding over 31 other teams. It has been running about two years since.",
    },
  },
  {
    card: {
      slug: "terrapin-works",
      title: "Terrapin Works, Advanced Fabrication Lab",
      subtitle: "Additive Manufacturing Technician · University of Maryland · Feb 2026 to Present",
      summary:
        "Running production across most of the major 3D printing processes, from FDM and resin up to metal binder jetting, plus the metrology that checks whether parts came out to spec. A lot of the job is keeping machines alive.",
      tags: [
        "FDM",
        "SLA",
        "SLS",
        "Multi Jet Fusion",
        "Binder Jetting",
        "ROMER Arm Metrology",
        "Machine Troubleshooting and Maintenance",
      ],
    },
    sections: [
      {
        heading: "What the lab does",
        body: [
          "Terrapin Works is UMD's fabrication service, so the work comes from everywhere: students, campus researchers, and outside industry. The parts vary a lot, and so does what \"correct\" means for each one.",
        ],
      },
      {
        heading: "What I run",
        body: [
          "Production runs across FDM (Stratasys Fortus 400mc, Bambu Lab X1C and P1S, Prusa Core One, XL, and MK3S), resin (Formlabs Form 4, Nexa XiP), SLS (Formlabs Fuse 1), Multi Jet Fusion (HP Jet Fusion 580), and metal binder jetting (Desktop Metal Shop System). Day to day that is slicing, setup, harvesting parts, and managing customer inventory. On the verification side, dimensional checks and 3D scanning with handheld scanners and the Hexagon ROMER Absolute Arm, working in Geomagic X, confirm parts conform before they go back to whoever ordered them.",
        ],
      },
      {
        heading: "The ongoing repair work",
        body: [
          "The bigger project right now is getting the Desktop Metal Shop System back to reliable operation. It is showing a mix of mechanical and software faults, and the hard part is that they overlap. A sensor or interlock reading wrong halts the machine and looks like hardware failure when the root cause is a bad signal, and a mechanical fault can surface as a software error.",
          "The approach starts with the fault log: pull the exact error code and timestamp, then reproduce the failure once to see which physical action it dies on. That single observation localizes the subsystem faster than guessing. From there, each suspect subsystem gets isolated and tested on its own before any part is swapped. A recoat-phase failure means checking the blade, roller, and homing switches and confirming the powder is dry and flowing. A jetting failure means a nozzle health check, reseating the printhead data connections, and servicing the capping station. A mid-job abort with no mechanical symptom points at the controller-to-prep-station link or a firmware mismatch. A suspected sensor fault means reseating or replacing the sensor and connector, then recalibrating.",
          "Testing in isolation before replacing anything is the part that matters. It keeps the work on the actual root cause instead of the symptom, which on a machine with overlapping faults is the difference between fixing it and swapping parts until something changes.",
        ],
      },
    ],
  },
  {
    card: {
      slug: "ccrl",
      title: "Multi-Robot Coordination Research",
      subtitle: "Undergraduate Research Assistant · CCRL, University of Maryland · Aug 2025 to Present",
      summary:
        "Research on robotic swarms that divide work among themselves instead of taking orders from a central controller. Fixed the testbed faults that kept killing test runs, then built the decentralized allocation pipeline and the logging that made results comparable.",
      tags: [
        "ROS2",
        "Gazebo",
        "Python",
        "Decentralized Control",
        "Task Allocation",
        "Robot Hardware Debugging",
        "Data Logging and Analysis",
      ],
    },
    sections: [
      {
        heading: "The problem",
        body: [
          "The lab works on multi-robot swarms that split jobs among themselves rather than relying on one central computer to assign everything. This piece is a testbed of six Khepera IV differential-drive robots that have to cover and survey a bounded arena as a team.",
          "At the start, the testbed was not producing usable data. Wi-Fi dropouts between the robots and the base station and flaky wheel-encoder readings kept killing runs partway through, so nothing was comparable to anything else.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "Rebuilt and rewired two of the six robots and traced the dropouts to a shared network channel and loose motor connectors. That stopped the mid-trial crashes and got the testbed to the point where a run would finish.",
          "With the hardware stable, implemented the decentralized task-allocation nodes in Gazebo. Instead of a central planner handing out assignments, each robot bids on the nearest unclaimed survey cell using a simple auction rule and commits locally.",
          "Also wrote a Python pipeline that logs task-completion time, total distance traveled, and area coverage percentage to CSV on every trial, so runs could be compared directly instead of timed by hand.",
        ],
      },
      {
        heading: "Result",
        body: [
          "Across 40 simulated trials with six robots on the coverage task, the decentralized auction approach finished 15% faster than the centralized baseline the lab had been using. The logging pipeline replaced a manual stopwatch-and-spreadsheet step and made all 40 trials repeatable and directly comparable. It is now the default logging setup for that testbed.",
        ],
      },
    ],
  },
  {
    card: {
      slug: "space-copy",
      title: "Space Copy Inc.",
      subtitle: "Robotics Mechanical Engineering Intern · Houston, TX · Jun 2025 to Aug 2025",
      summary:
        "Robotics and simulation work for a company building lunar manufacturing hardware that turns regolith into usable structures. Worked on the end-effector, the simulation of the arm's motion, and part of the materials analysis behind site selection.",
      tags: [
        "SolidWorks",
        "ROS2",
        "Gazebo",
        "Ansys Fluent CFD",
        "Regolith Melt Analysis",
        "Lunar Site Assessment",
        "Spectral Analysis",
      ],
    },
    sections: [
      {
        heading: "Context",
        body: [
          "Space Copy builds rugged additive manufacturing systems for extreme environments, with the goal of turning lunar regolith into infrastructure. Their work runs on a NASA in-space manufacturing contract, and the company is a NASA LunaRecycle Phase-2 awardee. Contributed to the proposal effort behind that award.",
        ],
      },
      {
        heading: "The work",
        body: [
          "Mapped the interactions between a 7-DOF robotic arm and an industrial 3D printer, documenting the pick-and-place sequences and homing routines so the behavior was written down rather than implicit.",
          "Designed a magnet-based end-effector assembly in SolidWorks and validated its grip strength, then communicated the design trade-offs to stakeholders so the decision was not made in isolation.",
          "Built a physics-based model in Gazebo that simulated the tool pick-and-place cycles and validated workspace coverage, which is much cheaper to find out in simulation than on hardware.",
          "On the materials side, ran CFD simulations in Ansys Fluent on melted regolith in microgravity to characterize melt-pool stability, surveyed lunar sites through LROC QuickMap imagery and ranked regions by solar exposure and extraction feasibility, and characterized thermal noise in Raman spectra of heated regolith to define the correction requirements for material detection.",
        ],
      },
    ],
    aside: {
      kind: "confidentiality",
      text: "Some specifics of this work are covered by confidentiality. Happy to talk through the approach in more detail in conversation.",
    },
  },
];
