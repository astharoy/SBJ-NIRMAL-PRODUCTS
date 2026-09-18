import { CATEGORY_IDS, QUESTIONS_PER_CATEGORY, TEMPLATE_TIER_WEIGHTS } from './constants.js';
import { getLanguage } from './i18n/index.js';

export function createState(langCode) {
  return {
    lang: langCode,
    step: 'intro', // 'intro' | 'rating' | 'category' | 'questions' | 'draft'
    rating: null,
    categoryId: null,
    questionIndex: 0,
    answers: [], // option index chosen per question, in order
    draftText: '',
    // draftLoaded is the enforcement flag: the "Post Review" action is only
    // ever allowed to run when this is true, and it is only ever set true by
    // generateDraft() after the draft has actually been populated into the
    // editable field. This is the non-negotiable rule from the brief,
    // enforced here in state rather than left to UI wiring.
    draftLoaded: false,
    submitted: false,
  };
}

export function startReview(state) {
  state.step = 'rating';
}

export function selectRating(state, rating) {
  state.rating = rating;
  state.step = 'category';
}

export function selectCategory(state, categoryId) {
  state.categoryId = categoryId;
  state.questionIndex = 0;
  state.answers = [];
  state.step = 'questions';
}

export function answerQuestion(state, optionIndex) {
  state.answers[state.questionIndex] = optionIndex;
  if (state.questionIndex < QUESTIONS_PER_CATEGORY - 1) {
    state.questionIndex += 1;
  } else {
    generateDraft(state);
    state.step = 'draft';
  }
}

function pickWeightedTier() {
  const r = Math.random();
  let cumulative = 0;
  for (const [tier, weight] of TEMPLATE_TIER_WEIGHTS) {
    cumulative += weight;
    if (r < cumulative) return tier;
  }
  return TEMPLATE_TIER_WEIGHTS[TEMPLATE_TIER_WEIGHTS.length - 1][0];
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function fillPlaceholders(template, values) {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? values[key] : match));
}

function capitalizeFirst(text) {
  return text.length ? text[0].toUpperCase() + text.slice(1) : text;
}

// Fills the shared, tiered template bank (REVIEWSETU_BRIEF.md "REVISED
// TEMPLATE SYSTEM") with the customer's actual tap answers. Q1 is always
// the category's quality-type question, Q2 the distinguishing "aspect"
// question, Q3 delivery speed — see js/i18n/en.js for the full mapping.
export function generateDraft(state) {
  const lang = getLanguage(state.lang);
  const category = lang.categories[state.categoryId];
  const [qualityQ, aspectQ, deliveryQ] = category.questions;
  const [qualityIdx, aspectIdx, deliveryIdx] = state.answers;

  const values = {
    product: category.productName,
    quality_word: qualityQ.options[qualityIdx],
    aspect_word: aspectQ.options[aspectIdx],
    aspect_word_sentence: aspectQ.sentences[aspectIdx],
    delivery_word: (deliveryQ.insert || deliveryQ.options)[deliveryIdx],
  };

  // Yoke exception rule (REVIEWSETU_BRIEF.md, "Yoke exception rule — added,
  // do not skip"): Yoke's Q1 options are always ordered [Great value, Fair,
  // Expensive] in every language, so index 2 is always "Expensive." That's
  // not a quality word, so any template using bare {quality_word} must be
  // excluded rather than filled with it — the brief explicitly forbids
  // softening it to something like "premium" instead.
  const excludeQualityWord = state.categoryId === 'yoke' && qualityIdx === 2;

  const tier = pickWeightedTier();
  const tierTemplates = lang.templates[tier];
  const candidates = excludeQualityWord
    ? tierTemplates.filter((template) => !template.includes('{quality_word}'))
    : tierTemplates;
  const template = pickRandom(candidates.length ? candidates : tierTemplates);

  state.draftText = capitalizeFirst(fillPlaceholders(template, values));
  state.submitted = false;
  // Only set true once text has actually been generated into the field.
  state.draftLoaded = true;
}

export function goBack(state) {
  if (state.step === 'rating') {
    state.step = 'intro';
  } else if (state.step === 'category') {
    state.step = 'rating';
  } else if (state.step === 'questions') {
    if (state.questionIndex > 0) {
      state.questionIndex -= 1;
      state.answers.length = state.questionIndex;
    } else {
      state.step = 'category';
      state.categoryId = null;
    }
  } else if (state.step === 'draft') {
    state.step = 'questions';
    state.questionIndex = QUESTIONS_PER_CATEGORY - 1;
    state.answers.length = QUESTIONS_PER_CATEGORY - 1;
    state.draftText = '';
    state.draftLoaded = false;
    state.submitted = false;
  }
}

// The one and only entry point for the placeholder submit action.
// Re-checks the enforcement flag itself rather than trusting that the
// caller (a button that only renders during the draft step) already did.
export function trySubmitReview(state) {
  if (state.step !== 'draft' || !state.draftLoaded) {
    return false;
  }
  state.submitted = true;
  return true;
}

export function restart(state) {
  const lang = state.lang;
  Object.assign(state, createState(lang));
}

export { CATEGORY_IDS };
