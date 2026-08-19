/**
 * Shared content types for everything under data/.
 * Components read these types; they never hardcode copy.
 */

export type Tag = string;

/** Broad buckets for the featured-work filter bar. Granular tags stay on the cards. */
export type WorkCategory = "Robotics" | "Additive Manufacturing" | "Space Systems" | "Research";

/** One headline number pulled from the case study, shown large on the card. */
export interface CaseStudyMetric {
  value: string;
  label: string;
}

/** One photo. `caption` is optional display text; `alt` is always required for accessibility. */
export interface MediaItem {
  src: string;
  alt: string;
  caption?: string;
}

/** Card summary shown in the scannable grid for a featured case study. */
export interface CaseStudyCard {
  slug: string;
  title: string;
  /** Role · context · date range line under the title. */
  subtitle: string;
  /** Short, ~2-line blurb. Full detail lives in the case study's sections. */
  summary: string;
  tags: Tag[];
  /** Broad filter buckets this case study belongs to; a study can span more than one. */
  categories: WorkCategory[];
  /** One standout number, shown large on the card for visual hierarchy. */
  metric: CaseStudyMetric;
  /** VAACE only. Drives the larger card and richer case study layout. */
  flagship?: boolean;
  /**
   * media[0] is the card thumbnail and case study hero photo. Any further
   * entries render as additional photos further down the case study page.
   * Missing/empty falls back to a placeholder slot until real photos land.
   */
  media?: MediaItem[];
}

/** One heading + paragraphs block inside a case study's expanded body. */
export interface CaseStudySection {
  heading: string;
  /** Paragraphs, in order. Rendered as separate <p> tags. */
  body: string[];
}

export type CaseStudyAsideKind = "origin" | "confidentiality";

/** A single highlighted aside block. One render path handles both kinds. */
export interface CaseStudyAside {
  kind: CaseStudyAsideKind;
  text: string;
}

export interface CaseStudy {
  card: CaseStudyCard;
  sections: CaseStudySection[];
  /** Optional highlighted aside, e.g. VAACE's origin story or Space Copy's confidentiality note. */
  aside?: CaseStudyAside;
}

/** Minor project tier. Featured gets tags and more room; compact is a small block. */
export type MinorProjectTier = "featured" | "compact";

export interface MinorProject {
  /** Stable id for the card, e.g. an affiliation logo linking to "#project-{slug}". */
  slug: string;
  tier: MinorProjectTier;
  title: string;
  subtitle: string;
  summary: string;
  /** Featured projects carry tags; compact ones don't per the copy deck. */
  tags?: Tag[];
  /**
   * media[0] is the card thumbnail. Any further entries are revealed by an
   * expand toggle on the card rather than shown by default, keeping minor
   * project cards compact. Missing/empty falls back to a placeholder slot
   * until real photos land.
   */
  media?: MediaItem[];
}

export interface OutreachEntry {
  /** Stable id for the card, e.g. an affiliation logo linking to "#outreach-{slug}". */
  slug: string;
  title: string;
  /** Organization or venue, when the copy deck lists one separately from the title. */
  org?: string;
  dateRange: string;
  description: string;
}

/** A single skill. caseStudySlugs/minorProjectSlugs link it to the experiences where it was actually used. */
export interface SkillItem {
  name: string;
  caseStudySlugs?: string[];
  minorProjectSlugs?: string[];
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface SkillsData {
  heading: string;
  groups: SkillGroup[];
  currentlyLearning: string[];
}

export interface CertificationGroup {
  label: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

/** One mark in the affiliation logo strip: a program, lab, school, or company patch/wordmark. */
export interface AffiliationLogo {
  src: string;
  alt: string;
  /**
   * The experience(s) this logo belongs to: case study paths, and/or
   * "#outreach-{slug}" / "#project-{slug}" anchors. Usually one; a logo that
   * genuinely represents more than one experience (e.g. a department logo
   * covering both a project and an outreach role) can list several. The
   * strip's own click target is always the first entry.
   */
  hrefs: string[];
}

export interface HeroData {
  name: string;
  /** Small kicker shown above the name in the video hero. */
  eyebrow: string;
  identityLine: string;
  subLine: string;
  pillars: string[];
  affiliations: AffiliationLogo[];
}

/** The human-beat About section. First person by design, unlike the rest of the site. */
export interface AboutData {
  paragraphs: string[];
}

/** One stop on the About section's trajectory graphic. */
export interface TimelineStage {
  label: string;
  detail?: string;
}

/**
 * The "I am here" position, floating on the connector line rather than
 * attached to any one stage. Sits `progress` (0-1) of the way from stage
 * `afterStageIndex` to the next stage.
 */
export interface TimelineMarker {
  afterStageIndex: number;
  progress: number;
}

export interface TimelineData {
  stages: TimelineStage[];
  marker: TimelineMarker;
}

export interface ContactData {
  heading: string;
  blurb: string;
  email: string;
  linkedin: string;
  /** Placeholder path until the real PDF is wired in. */
  resumeUrl: string;
}
