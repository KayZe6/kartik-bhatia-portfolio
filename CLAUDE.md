# Portfolio Project — Standing Instructions

## What this is
A personal engineering portfolio for Kartik Bhatia, senior aerospace engineering student at the University of Maryland. Audiences: recruiters (internships/full-time), grad school and research readers, and networking contacts.

The site is a delivery vehicle for engineering work. Content and clarity win over visual novelty.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for animation
- Deploy target: Vercel

## Architecture rule (important)
ALL content lives in `data/` as typed data files. Never hardcode project copy, tags, dates, or descriptions inside components. Adding a project must mean editing a data file, not editing JSX.

Source of truth for all copy: `portfolio-copy-deck-v3.md` in the project root. Use its wording as written. Do not rewrite, "improve," or paraphrase the copy.

## Voice rules (non-negotiable)
- NO em-dashes anywhere in site copy. Use commas, colons, or periods.
- No first person in cards and case studies. Use gerunds or implied subject: "Led flight operations", "Designed the assembly". The team's work is "the team", not "we".
- EXCEPTION: the About / human beat section is first person by design. Leave it as written.
- Numbers stated flat and confident. No "roughly", "about", "around" in front of figures.
- No rule-of-three padding, no "actually" / "genuinely".

## Structure
1. Hero (identity line, sub-line, pillars, affiliation logos)
2. About (human beat)
3. Skills, certifications, achievements
4. Featured work: 4 case studies (VAACE, Terrapin Works, CCRL, Space Copy)
5. Minor projects (2 featured, 2 compact)
6. Outreach
7. Contact

Pattern: scannable card grid with tag filtering, linking to deep case-study pages. Recruiters skim the grid; research readers click through for depth.

VAACE is the flagship. It gets a larger card and a richer multi-section case study page. The other three are standard. Minor projects are compact. Do not let the flagship swallow the page.

## Design constraints
- Theme brief: professional, reader friendly, soothing, matches the content. Not a dark novelty theme at the cost of readability.
- Reference palette (from the owner's banner): deep navy through to a rust/Mars horizon, thin orbital arc motif, minimal line icons, letter-spaced caps. Use as inspiration, prioritize text readability over atmosphere.
- Pillars with line icons: Robotics, Additive Manufacturing, Space Systems.

## Interaction rules
- Animate transform and opacity only (GPU-composited). Never animate width, height, or margin.
- Scroll reveals and tag filtering are in scope.
- NOT in scope: 3D world navigation, particle effects, cursor gimmicks, pixel-bound scroll scrubbing.
- Optional single signature element: an embedded interactive 3D model of a real CAD part via `<model-viewer>`. If added: Draco + WebP compressed, under 5 MB, lazy-loaded behind a poster frame. Cut it if it pushes LCP over 2.5s.

## Performance targets
- LCP under 2.5s
- INP under 200ms
- Initial page weight under ~2 MB
- Every image compressed, WebP, lazy-loaded, responsive sizes
- Must be tested at mobile viewport widths

## Accessibility
- Semantic HTML, proper heading order
- Alt text on all images
- Keyboard navigable, visible focus states
- Respect `prefers-reduced-motion`

## Media
Media arrives later. Build with placeholder slots and wire real assets in afterward. Do not block on missing images.

## Working style
- Explain choices in plain language. The owner is an aerospace engineer, not a web developer.
- Show the data model and get sign-off before building UI.
- Build one full case study (VAACE) end-to-end first for review, then batch the rest off the same pattern.
