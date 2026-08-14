/**
 * Shared content types for everything under data/.
 * Components read these types; they never hardcode copy.
 */

export type Tag = string;

/** Card summary shown in the scannable grid for a featured case study. */
export interface CaseStudyCard {
  slug: string;
  title: string;
  /** Role · context · date range line under the title. */
  subtitle: string;
  /** The short blockquote paragraph shown on the card. */
  summary: string;
  tags: Tag[];
  /** VAACE only. Drives the larger card and richer case study layout. */
  flagship?: boolean;
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
  tier: MinorProjectTier;
  title: string;
  subtitle: string;
  summary: string;
  /** Featured projects carry tags; compact ones don't per the copy deck. */
  tags?: Tag[];
}

export interface OutreachEntry {
  title: string;
  /** Organization or venue, when the copy deck lists one separately from the title. */
  org?: string;
  dateRange: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
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

export interface HeroData {
  name: string;
  identityLine: string;
  subLine: string;
  pillars: string[];
  affiliations: string[];
}

/** The human-beat About section. First person by design, unlike the rest of the site. */
export interface AboutData {
  paragraphs: string[];
}

export interface ContactData {
  heading: string;
  blurb: string;
  email: string;
  linkedin: string;
  /** Placeholder path until the real PDF is wired in. */
  resumeUrl: string;
  footerCredit: string;
}
