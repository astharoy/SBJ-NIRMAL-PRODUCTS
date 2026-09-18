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
