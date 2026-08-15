# Portfolio — Site Copy Deck (v3)

**Voice:** No first person in cards and case studies. "We" becomes "the team." Data stated flat, no hedging on numbers. No em-dashes. About section stays first person by design.

---

# S1 — HERO

**Name:** Kartik Bhatia

**Identity line (locked):**
> Engineering robotic space systems and the manufacturing that supports them, while working toward a career in human spaceflight.

**Sub-line:**
> Senior aerospace engineering undergrad at the University of Maryland. Currently leading engineering on a NASA seed-funded Venus flight system research project, working as an additive manufacturing (3D printing) technician, and doing multi-robot systems research on swarms.

**Pillars:** Robotics · Additive Manufacturing · Space Systems

**Affiliation strip:** NASA · University of Maryland · Terrapin Works · Space Copy · Autodesk

**Human beat (About):**
> My interest in robotics and aerospace traces back to Interstellar, mainly TARS and CASE. I remember being more interested in what the robots were doing than anything else on screen: docking, piloting, running calculations, handling the parts of the mission that needed more precision and control than a person could hold steady. That's probably where it started. I want to work on systems that take on real parts of a mission, whether that's robotics and autonomous systems for space, or in-space manufacturing.
>
> The longer-term goal is human spaceflight. I want to be part of a long-duration crew and bring the engineering and operating knowledge that kind of mission actually needs, which is why space systems, robotics, and 3D printing are the three things I've gone after on purpose. The certifications I'm working on outside of engineering point the same direction.

---

# S2 — SKILLS, CERTIFICATIONS, ACHIEVEMENTS

**Heading:** What I work with

**Skills (grouped):**

*Engineering*
Requirements Management · Risk Management (FMEA) · Systems Engineering Documentation (N² Diagrams, ConOps, V&V Plans, Trade Studies) · Design Reviews · Environmental Test Planning · Stakeholder Communication · Schedule and Budget Management

*Fabrication*
FDM · SLA · SLS · Powder Bed Fusion · Multi Jet Fusion · Binder Jetting · 3D Scanning · DMG Mori 5-axis CNC · Drill Mill · Lathe · Water Jet · Laser Cutting

*Software*
SolidWorks · Fusion 360 · Siemens NX · MATLAB · Python · C++ · ROS2 · IBM DOORS · Jira · Ansys Fluent (CFD) · Ansys STK · Geomagic X

*Robotics and ML*
ROS2 · Gazebo · NVIDIA Jetson · PyTorch · OpenCV · Edge Inference

**Currently learning:**
> Agentic AI systems (tool calling, RAG, workflow orchestration) · machine learning for robotics (computer vision, object detection, robotic perception) · NVIDIA Jetson (edge AI, CUDA acceleration, TensorRT deployment) · autonomous navigation (SLAM, sensor fusion, path planning) · robot manipulation (MoveIt 2, motion planning, kinematics) · NVIDIA Isaac ROS (GPU-accelerated perception, visual SLAM)

**Technical certifications in progress:**
> NVIDIA DLI: Fundamentals of Deep Learning · NVIDIA DLI: CUDA and Accelerated Computing · NVIDIA-Certified Professional: Agentic AI · NVIDIA Isaac ROS and Isaac Sim Training · Microsoft Certified: Azure AI Apps and Agents Developer Associate

**Working toward (spaceflight readiness):**
> FAA Private Pilot Certificate (PPL) · SCUBA Open Water Diver Certification · FCC Amateur Radio Technician Class License

**Achievements:**
- **NASA L'SPACE seed funding for VAACE.** Co-developed the winning proposal, selected over 31 other teams of roughly 15 members each. Initial award of $10,000, now $20,000 total.
- **Proposal review panel, NASA L'SPACE NPWEE.** Served as a primary reviewer evaluating competing teams' submissions against the program's technical criteria.
- **NASA LunaRecycle Phase-2 award (Space Copy).** Contributed to the proposal effort behind the company's Phase-2 award in NASA's Centennial Challenge.

---

# S3 — BIG FOUR CASE STUDIES

## 1. VAACE

**CARD**

**VAACE, Venus Aerobot for Atmospheric and Cloud Exploration**
Chief Engineer · NASA seed-funded · Aug 2024 to Present

> A Venus flight system that can repair its own membrane in-flight. Leading engineering across a 20+ person team spanning disciplines and institutions across the US. Last year the team flew its first scientific payload to 90,000 feet and recovered it intact with a full atmospheric and radiation data record.

Tags: Systems Engineering · SolidWorks · FMEA · Flight Operations · Stakeholder Management · Hardware and Software Integration · Electronics and Firmware · Testing and Assembly

**EXPANDED**

**The problem**

Venus has an atmospheric band in its cloud layer, roughly 50 to 55 km up, where the temperature and pressure are close to Earth's. That makes it one of the more realistic places to explore the planet up close, and variable-altitude balloons, called aerobots, are the usual way to reach it. The problem is that the same layer is full of sulfuric acid, and the constant thermal and mechanical cycling slowly breaks down the balloon's envelope. Once that envelope tears there is no way to fix it mid-flight, so most designs carry extra material and hope it holds. VAACE closes that gap by giving the aerobot a way to repair itself in place.

**Phase 1: what flew**

Before touching the repair problem, the team needed to prove it could build something that survives near-space and comes back. An in-house built scientific payload flew to 27 km (90,000 ft) on a weather research balloon, ran for 3+ hours collecting temperature, pressure, CO2, radiation, and GPS data, and was recovered intact with a full data record. Assisted with the design of the payload assembly in SolidWorks, 3D-printed the housing and structural parts, and led flight operations on launch day.

Alongside Phase 1 flight ops, the team tested a phase-change buoyancy system using a helium-steam mix for altitude control. It produced measurable thermal cycling and a small altitude change, which identified buoyancy authority as the next thing to solve. The whole phase came in under a $10,000 budget.

**Phase 2: what the team is building now**

The current focus is the Robotic Skin System, the actual self-repair piece and where most of the engineering work is going. It is an autonomous gantry that carries a sensing head and a heated repair head over the envelope surface. For detection, it fuses an RGB-depth camera with a thermal array on a Jetson Orin Nano to find damage and generate repair coordinates. An ST NUCLEO-G474RE microcontroller handles real-time motion and heating. The repair itself uses a small cartridge heater to bring the damaged area of a shape-memory-polymer envelope up to its recovery temperature, driving the material to close the tear, with an IR sensor holding temperature steady so it does not overheat the surrounding material.

It is a two-tier setup on purpose, one side thinking and one side acting, so the detect-and-repair loop runs on its own. The system is in design now, with fabrication targeted for late September 2026, a bench-level test of the full repair loop by November, and a flight test to 115,000 ft by the end of 2026.

**Where it's going**

In parallel with Phase 2, the Phase 1 payload enclosure is being hardened against the Venus environment with a layered acid-resistant stack. Sulfuric acid exposure, thermal-vacuum, and vibration testing are planned for 2026. The longer-term goal is an envelope that maintains itself well enough to extend how long an aerobot survives in the Venus cloud layer, moving in-situ repair from a lab demo toward something flight-ready.

**Callout:** The project started through NASA's L'SPACE program, where the team developed the mission concept and then wrote the proposal that won the seed funding over 31 other teams. It has been running about two years since.

---

## 2. TERRAPIN WORKS

**CARD**

**Terrapin Works, Advanced Fabrication Lab**
Additive Manufacturing Technician · University of Maryland · Feb 2026 to Present

> Running production across most of the major 3D printing processes, from FDM and resin up to metal binder jetting, plus the metrology that checks whether parts came out to spec. A lot of the job is keeping machines alive.

Tags: FDM · SLA · SLS · Multi Jet Fusion · Binder Jetting · ROMER Arm Metrology · Machine Troubleshooting and Maintenance

**EXPANDED**

**What the lab does**

Terrapin Works is UMD's fabrication service, so the work comes from everywhere: students, campus researchers, and outside industry. The parts vary a lot, and so does what "correct" means for each one.

**What I run**

Production runs across FDM (Stratasys Fortus 400mc, Bambu Lab X1C and P1S, Prusa Core One, XL, and MK3S), resin (Formlabs Form 4, Nexa XiP), SLS (Formlabs Fuse 1), Multi Jet Fusion (HP Jet Fusion 580), and metal binder jetting (Desktop Metal Shop System). Day to day that is slicing, setup, harvesting parts, and managing customer inventory. On the verification side, dimensional checks and 3D scanning with handheld scanners and the Hexagon ROMER Absolute Arm, working in Geomagic X, confirm parts conform before they go back to whoever ordered them.

**The ongoing repair work**

The bigger project right now is getting the Desktop Metal Shop System back to reliable operation. It is showing a mix of mechanical and software faults, and the hard part is that they overlap. A sensor or interlock reading wrong halts the machine and looks like hardware failure when the root cause is a bad signal, and a mechanical fault can surface as a software error.

The approach starts with the fault log: pull the exact error code and timestamp, then reproduce the failure once to see which physical action it dies on. That single observation localizes the subsystem faster than guessing. From there, each suspect subsystem gets isolated and tested on its own before any part is swapped. A recoat-phase failure means checking the blade, roller, and homing switches and confirming the powder is dry and flowing. A jetting failure means a nozzle health check, reseating the printhead data connections, and servicing the capping station. A mid-job abort with no mechanical symptom points at the controller-to-prep-station link or a firmware mismatch. A suspected sensor fault means reseating or replacing the sensor and connector, then recalibrating.

Testing in isolation before replacing anything is the part that matters. It keeps the work on the actual root cause instead of the symptom, which on a machine with overlapping faults is the difference between fixing it and swapping parts until something changes.

---

## 3. COLLABORATIVE CONTROLS AND ROBOTICS LAB

**CARD**

**Multi-Robot Coordination Research**
Undergraduate Research Assistant · CCRL, University of Maryland · Aug 2025 to Present

> Research on robotic swarms that divide work among themselves instead of taking orders from a central controller. Fixed the testbed faults that kept killing test runs, then built the decentralized allocation pipeline and the logging that made results comparable.

Tags: ROS2 · Gazebo · Python · Decentralized Control · Task Allocation · Robot Hardware Debugging · Data Logging and Analysis

**EXPANDED**

**The problem**

The lab works on multi-robot swarms that split jobs among themselves rather than relying on one central computer to assign everything. This piece is a testbed of six Khepera IV differential-drive robots that have to cover and survey a bounded arena as a team.

At the start, the testbed was not producing usable data. Wi-Fi dropouts between the robots and the base station and flaky wheel-encoder readings kept killing runs partway through, so nothing was comparable to anything else.

**What I did**

Rebuilt and rewired two of the six robots and traced the dropouts to a shared network channel and loose motor connectors. That stopped the mid-trial crashes and got the testbed to the point where a run would finish.

With the hardware stable, implemented the decentralized task-allocation nodes in Gazebo. Instead of a central planner handing out assignments, each robot bids on the nearest unclaimed survey cell using a simple auction rule and commits locally.

Also wrote a Python pipeline that logs task-completion time, total distance traveled, and area coverage percentage to CSV on every trial, so runs could be compared directly instead of timed by hand.

**Result**

Across 40 simulated trials with six robots on the coverage task, the decentralized auction approach finished 15% faster than the centralized baseline the lab had been using. The logging pipeline replaced a manual stopwatch-and-spreadsheet step and made all 40 trials repeatable and directly comparable. It is now the default logging setup for that testbed.

---

## 4. SPACE COPY

**CARD**

**Space Copy Inc.**
Robotics Mechanical Engineering Intern · Houston, TX · Jun 2025 to Aug 2025

> Robotics and simulation work for a company building lunar manufacturing hardware that turns regolith into usable structures. Worked on the end-effector, the simulation of the arm's motion, and part of the materials analysis behind site selection.

Tags: SolidWorks · ROS2 · Gazebo · Ansys Fluent CFD · Regolith Melt Analysis · Lunar Site Assessment · Spectral Analysis

**EXPANDED**

**Context**

Space Copy builds rugged additive manufacturing systems for extreme environments, with the goal of turning lunar regolith into infrastructure. Their work runs on a NASA in-space manufacturing contract, and the company is a NASA LunaRecycle Phase-2 awardee. Contributed to the proposal effort behind that award.

**The work**

Mapped the interactions between a 7-DOF robotic arm and an industrial 3D printer, documenting the pick-and-place sequences and homing routines so the behavior was written down rather than implicit.

Designed a magnet-based end-effector assembly in SolidWorks and validated its grip strength, then communicated the design trade-offs to stakeholders so the decision was not made in isolation.

Built a physics-based model in Gazebo that simulated the tool pick-and-place cycles and validated workspace coverage, which is much cheaper to find out in simulation than on hardware.

On the materials side, ran CFD simulations in Ansys Fluent on melted regolith in microgravity to characterize melt-pool stability, surveyed lunar sites through LROC QuickMap imagery and ranked regions by solar exposure and extraction feasibility, and characterized thermal noise in Raman spectra of heated regolith to define the correction requirements for material detection.

**Note:** Some specifics of this work are covered by confidentiality. Happy to talk through the approach in more detail in conversation.

---

# S4 — MINOR PROJECTS

## Featured

**Zero Pressure Aerobot**
Prototyping Engineer · UMD Balloon Payload Program · Sep to Dec 2024

> A high-altitude balloon system built for near-space payload testing, flown to 60,000 ft carrying a 4 lb payload on a full-scale flight. Designed and 3D-printed structural components that held under 2% strain during ascent, extending flight duration by 25%, and programmed a cut-down mechanism with fail-safe logic that brought the payload down inside a 200 m landing radius.

Tags: Control Logic · FDM 3D Printing · Balloon Flight Operations

**Terraformers, URC Rover Team**
Fabrication and Testing Engineer · Jan to Jun 2024

> Fabrication and validation work on a 7 ft by 4 ft competition rover. Handled the CNC machining and welding to a ±0.5 mm tolerance, and owned the validation trials, confirming 5 m/s traversal over 2 ft obstacles across 50 km with no structural failures. Reinforced the chassis plates, cutting predicted bending stress by 35% and vibration amplitude by 25% under impact loads.

Tags: CNC Machining · Welding · Structural Reinforcement · Field Validation Testing

## Compact

**Lunar Suit Lighting System**
Integration and Test Engineer · UMD Space Systems Laboratory · Sep to Dec 2023
> Worked with a team of four to design and integrate a lighting system for a lunar suit prototype, using Fusion 360 for system performance and spatial alignment, plus hands-on fabrication, assembly, and testing of the subsystems and the final build.

**MATSCAN, Material Sensing, Classification, and Navigation**
Team Lead · UMD Clark School of Engineering · Feb to May 2024
> Led a team of seven building an autonomous rover for material sensing and navigation. Oversaw the mechanical design, sensor integration, and the testing and assembly needed to validate that it worked.

---

# S5 — OUTREACH

**Autodesk Design & Make Ambassador** · Sep 2025 to Present
> Runs outreach through Design & Make pop-up booths, demoing tools, supporting hands-on mini-builds, and answering questions to get more people interested in design. Also pitches to university classes and clubs to drive adoption and pull students into project-based challenges.

**NASA L.U.C.Y Mission Ambassador** · Sep 2024 to Aug 2025
> Shared the Lucy mission's story through presentations on campus and around the community, and used LinkedIn to post mission updates and milestones. The goal was making the mission accessible to people who would not otherwise follow it, and that has continued at conferences.

**Undergraduate Teaching Assistant, ENAE 100** · UMD Department of Aerospace Engineering · Sep to Dec 2025
> Guided incoming aerospace freshmen through professional practice topics, how the department works, and the skills that make the difference early on. Led in-class discussions connecting students to faculty research, student chapters, professional societies, and the industry considerations that shape engineering decisions.

**Conference Panel Moderator** · Space Tech Expo USA, Long Beach, CA · May 2024
> Moderated the full Day 1 panel discussion at the Technology Conference, facilitating conversations with industry leaders and keeping the session running for both speakers and attendees.

---

# S6 — CONTACT

**Heading:** Get in touch

> Looking for internship and full-time opportunities in space systems, robotics, and manufacturing tech. Easiest way to reach me is email.

- Email: kbhatia4@terpmail.umd.edu
- LinkedIn: linkedin.com/in/kartik-bhatia4
- Résumé: [download PDF]

**Footer:**
> © [current year] Kartik Bhatia. All rights reserved.
