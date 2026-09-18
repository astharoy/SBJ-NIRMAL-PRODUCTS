import { CATEGORY_IDS, QUESTIONS_PER_CATEGORY } from './constants.js';
import { getLanguage } from './i18n/index.js';

export function createState(langCode) {
  return {
    lang: langCode,
    step: 'rating', // 'rating' | 'category' | 'questions' | 'draft'
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

export function generateDraft(state) {
  const lang = getLanguage(state.lang);
  const category = lang.categories[state.categoryId];
  const templates = category.templates;
  const pick = templates[Math.floor(Math.random() * templates.length)];
  state.draftText = pick;
  state.submitted = false;
  // Only set true once text has actually been generated into the field.
  state.draftLoaded = true;
}

export function goBack(state) {
  if (state.step === 'category') {
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
