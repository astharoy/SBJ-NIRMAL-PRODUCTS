// Minimal hand-authored line-icon set (24x24, stroke=currentColor), so the
// app has zero icon-font/library dependency. Only icons the design spec
// actually calls for exist here — see REVIEWSETU_DESIGN_SPEC.md.docx's
// "Icon mapping" table and shared-component descriptions.

const ICONS = {
  rocket:
    '<path d="M12 2c2.5 1.8 4 4.8 4 8 0 2-.6 3.8-1.6 5.3L12 17l-2.4-1.7A9.6 9.6 0 0 1 8 10c0-3.2 1.5-6.2 4-8Z"/><circle cx="12" cy="9" r="1.6"/><path d="M9 15.5 7 20l2.8-1.2M15 15.5l2 4.5-2.8-1.2"/>',
  clock:
    '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  warningTriangle:
    '<path d="M12 4 2.5 20h19L12 4Z"/><path d="M12 10.5v4"/><circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/>',
  sparkles:
    '<path d="M12 3c.5 2.8 1.2 4.2 4 5-2.8.8-3.5 2.2-4 5-.5-2.8-1.2-4.2-4-5 2.8-.8 3.5-2.2 4-5Z"/><path d="M19 14c.25 1.3.6 1.9 1.8 2.2-1.2.3-1.55.9-1.8 2.2-.25-1.3-.6-1.9-1.8-2.2 1.2-.3 1.55-.9 1.8-2.2Z"/>',
  thumbsUp:
    '<path d="M7 11v9H4.5A1.5 1.5 0 0 1 3 18.5v-6A1.5 1.5 0 0 1 4.5 11H7Zm0 0 3.5-6.5A1.8 1.8 0 0 1 12.1 3.5v0c1 0 1.8.8 1.8 1.8V9h4.2a1.8 1.8 0 0 1 1.77 2.1l-1.13 6.5A2 2 0 0 1 16.8 19H10a3 3 0 0 1-3-3v-5Z"/>',
  frown:
    '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 15.5c.9-1.3 2-2 3.5-2s2.6.7 3.5 2"/><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none"/>',
  checkCircle:
    '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12.3 2.4 2.4L15.7 9"/>',
  wrench:
    '<path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2V20h3.8l5.3-5.3a4 4 0 0 0 4.6-5.4l-2.8 2.8-2.4-2.4Z"/>',
  xCircle:
    '<circle cx="12" cy="12" r="8.5"/><path d="m9 9 6 6m0-6-6 6"/>',
  tag:
    '<path d="M11.5 3.5h5A2 2 0 0 1 18.5 5.5v5a2 2 0 0 1-.6 1.4l-7 7a2 2 0 0 1-2.8 0l-4-4a2 2 0 0 1 0-2.8l7-7a2 2 0 0 1 1.4-.6Z"/><circle cx="14.5" cy="8.5" r="1.3" fill="currentColor" stroke="none"/>',
  scale:
    '<path d="M12 3v18M8 21h8M5 7h14M5 7l-3 6a3 3 0 0 0 6 0L5 7Zm14 0-3 6a3 3 0 0 0 6 0l-3-6Z"/>',
  shieldCheck:
    '<path d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-2.5Z"/><path d="m8.7 12 2.4 2.4L15.5 10"/>',
  users:
    '<circle cx="8.5" cy="8" r="3"/><path d="M2.5 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15 14.2c2.6.4 4.5 2.3 4.5 5.3"/>',
  globe:
    '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  arrowRight: '<path d="M4 12h16M13 5l7 7-7 7"/>',
  arrowLeft: '<path d="M20 12H4M11 5l-7 7 7 7"/>',
  star: '<path d="m12 3.5 2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.7L12 3.5Z"/>',
};

// question-id -> [bestIcon, middleIcon, worstIcon], exactly per the design
// spec's Icon mapping table. Question ids are the language-agnostic ids
// already used in js/i18n/*.js (category.questions[n].id).
export const ICON_TRIADS = {
  delivery: ['rocket', 'clock', 'warningTriangle'],
  quality: ['sparkles', 'thumbsUp', 'frown'],
  performance: ['sparkles', 'thumbsUp', 'frown'],
  load: ['sparkles', 'thumbsUp', 'frown'],
  wear: ['sparkles', 'thumbsUp', 'frown'],
  expectations: ['sparkles', 'thumbsUp', 'frown'],
  fit: ['checkCircle', 'wrench', 'xCircle'],
  price_quality: ['tag', 'scale', 'warningTriangle'],
};

export function iconMarkup(name, className = '') {
  const inner = ICONS[name];
  if (!inner) return '';
  const cls = className ? ` class="${className}"` : '';
  return `<svg${cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}
