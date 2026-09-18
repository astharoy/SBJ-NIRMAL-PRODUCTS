// Shared, language-agnostic app constants.

export const CATEGORY_IDS = [
  'rotavator_blades',
  'gears',
  'yoke',
  'pto_shaft',
  'lubrication',
  'other',
];

export const CATEGORY_ICONS = {
  rotavator_blades: '🔪',
  gears: '⚙️',
  yoke: '🔗',
  pto_shaft: '🛠️',
  lubrication: '🛢️',
  other: '📦',
};

export const QUESTIONS_PER_CATEGORY = 3;

// Weighted template-tier selection for draft generation (see
// REVIEWSETU_BRIEF.md "REVISED TEMPLATE SYSTEM"): short/casual reviews are
// far more common in the real data than long ones, so tiers are weighted
// instead of picked uniformly.
export const TEMPLATE_TIER_WEIGHTS = [
  ['tier1', 0.70],
  ['tier2', 0.25],
  ['tier3', 0.05],
];

export const LANG_STORAGE_KEY = 'reviewsetu_lang';

// Decorative flavor text (REVIEWSETU_DESIGN_SPEC.md.docx "Rotate one
// cursive tagline per major step"). Spec explicitly allows this to stay
// English-only regardless of selected language. Rotates through the pool
// across rating/category/questions. The draft screen intentionally shows
// none (spec: "no decorative wave/gradient background on this screen").
export const TAGLINE_MIDFLOW_POOL = [
  'Better Products Happier Communities',
  'Your Feedback Drives Progress',
];

// Desktop-only, fixed (not rotating), shown only at >=1200px per spec.
export const SIDE_TAGLINE_LEFT = 'Better Products Happier Communities';
export const SIDE_TAGLINE_RIGHT = 'Your Feedback Builds a Stronger Tomorrow';

// Footer trust strip: exact wording from the spec's Mobile Layout bullet.
// Mobile: intro screen only. Desktop: page footer, every screen.
export const TRUST_STRIP = [
  { icon: 'shieldCheck', text: 'Your responses are secure' },
  { icon: 'clock', text: 'Takes about 2 minutes' },
  { icon: 'users', text: 'Helps us serve you better' },
];

// Phase 2 — Google Review Handoff (REVIEWSETU_BRIEF.md "Actual flow").
// Google does not support pre-filled review text or iframe embedding, so
// this just opens Google's own write-review page in a new tab; the
// customer pastes the copied draft there themselves.
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CXHNyW-vZhAlEBM/review';
