// Language registry. To add a new language later (e.g. Gujarati):
//   1. Create js/i18n/gu.js with the same shape as en.js
//   2. Import it below and add it to LANGUAGES
// No other code changes are required.

import en from './en.js';
import hi from './hi.js';
import pa from './pa.js';
import te from './te.js';
import ta from './ta.js';

export const LANGUAGES = { en, hi, pa, te, ta };
export const DEFAULT_LANG = 'en';

export function getLanguage(code) {
  return LANGUAGES[code] || LANGUAGES[DEFAULT_LANG];
}

export function detectLanguage() {
  const browserLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || DEFAULT_LANG];

  for (const bl of browserLangs) {
    const code = bl.slice(0, 2).toLowerCase();
    if (LANGUAGES[code]) return code;
  }
  return DEFAULT_LANG;
}
