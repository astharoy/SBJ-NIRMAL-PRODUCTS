import { CATEGORY_IDS, CATEGORY_ICONS, QUESTIONS_PER_CATEGORY, LANG_STORAGE_KEY, TAGLINE_MIDFLOW_POOL, TRUST_STRIP, GOOGLE_REVIEW_URL } from './constants.js';
import { LANGUAGES, getLanguage, detectLanguage } from './i18n/index.js';
import { iconMarkup, ICON_TRIADS } from './icons.js';
import {
  createState,
  selectRating,
  selectCategory,
  answerQuestion,
  goBack,
  trySubmitReview,
} from './state.js';

const root = document.getElementById('app-main');
const stage = document.getElementById('stage');
const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
const taglineEl = document.getElementById('tagline-script');
const trustStripEl = document.getElementById('trust-strip');

const initialLang = localStorage.getItem(LANG_STORAGE_KEY) || detectLanguage();
const state = createState(initialLang);

function t() {
  return getLanguage(state.lang);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') node.className = value;
    else if (key === 'text') node.textContent = value;
    else if (key === 'html') node.innerHTML = value;
    else if (key.startsWith('on') && typeof value === 'function') {
      node.addEventListener(key.slice(2), value);
    } else {
      node.setAttribute(key, value);
    }
  }
  for (const child of [].concat(children)) {
    if (child) node.appendChild(child);
  }
  return node;
}

function backLink() {
  return el('button', {
    class: 'back-link',
    type: 'button',
    html: `${iconMarkup('arrowLeft')}<span>${t().ui.back}</span>`,
    onclick: () => {
      goBack(state);
      render();
    },
  });
}

function progressBar(currentIndex, total) {
  const pct = Math.round(((currentIndex + 1) / total) * 100);
  const wrap = el('div', { class: 'progress' }, [
    el('div', { class: 'progress-row' }, [
      el('span', { text: t().ui.questionProgress(currentIndex + 1, total) }),
      el('span', { class: 'pct', text: `${pct}%` }),
    ]),
    el('div', { class: 'progress-track' }, [
      el('div', { class: 'progress-fill', style: `width:${pct}%` }),
    ]),
  ]);
  return wrap;
}

function optionCard({ label, iconName, onclick }) {
  const icon = iconName
    ? el('span', { class: 'option-icon', html: iconMarkup(iconName) })
    : null;
  return el(
    'button',
    { class: 'option-card', type: 'button', onclick },
    [
      el('span', { class: 'option-radio' }),
      el('span', { class: 'option-body' }, [el('span', { class: 'option-label', text: label })]),
      icon,
    ]
  );
}

function renderRatingStep() {
  const lang = t();
  const container = el('section', { class: 'step step-rating' });
  container.appendChild(el('h1', { class: 'prompt', text: lang.ui.ratingPrompt }));

  const stars = el('div', { class: 'stars' });
  for (let i = 1; i <= 5; i += 1) {
    const star = el('button', {
      class: 'star-btn',
      type: 'button',
      'aria-label': `${i} star`,
      text: '★',
      onclick: () => {
        selectRating(state, i);
        render();
      },
    });
    stars.appendChild(star);
  }
  container.appendChild(stars);
  return container;
}

function renderCategoryStep() {
  const lang = t();
  const container = el('section', { class: 'step step-category' });
  container.appendChild(backLink());
  container.appendChild(el('h1', { class: 'prompt', text: lang.ui.categoryPrompt }));

  const grid = el('div', { class: 'category-grid' });
  CATEGORY_IDS.forEach((id) => {
    const cat = lang.categories[id];
    grid.appendChild(
      el(
        'button',
        {
          class: 'option-card',
          type: 'button',
          onclick: () => {
            selectCategory(state, id);
            render();
          },
        },
        [
          el('span', { class: 'option-icon', text: CATEGORY_ICONS[id] }),
          el('span', { class: 'option-label', text: cat.label }),
        ]
      )
    );
  });
  container.appendChild(grid);
  return container;
}

function renderQuestionsStep() {
  const lang = t();
  const category = lang.categories[state.categoryId];
  const question = category.questions[state.questionIndex];
  const triad = ICON_TRIADS[question.id];

  const container = el('section', { class: 'step step-questions' });
  container.appendChild(backLink());
  container.appendChild(progressBar(state.questionIndex, QUESTIONS_PER_CATEGORY));
  container.appendChild(el('h1', { class: 'prompt', text: question.text }));

  const optionsWrap = el('div', { class: 'option-list' });
  question.options.forEach((optionText, optionIndex) => {
    optionsWrap.appendChild(
      optionCard({
        label: optionText,
        iconName: triad ? triad[optionIndex] : null,
        onclick: () => {
          answerQuestion(state, optionIndex);
          render();
        },
      })
    );
  });
  container.appendChild(optionsWrap);
  return container;
}

function renderDraftStep() {
  const lang = t();
  const container = el('section', { class: 'step step-draft' });
  container.appendChild(backLink());
  container.appendChild(el('h1', { class: 'prompt', text: lang.ui.draftTitle }));
  container.appendChild(el('p', { class: 'hint', text: lang.ui.draftInstruction }));

  const textarea = el('textarea', {
    class: 'draft-textarea',
    rows: '6',
  });
  // The enforcement rule: this field is populated from state.draftText,
  // which generateDraft() guarantees was set before entering this step.
  textarea.value = state.draftText;
  textarea.addEventListener('input', () => {
    state.draftText = textarea.value;
  });
  container.appendChild(textarea);

  const submitBtn = el('button', {
    class: 'btn-primary',
    type: 'button',
    html: `${lang.ui.postReview}${iconMarkup('arrowRight')}`,
    onclick: () => {
      const ok = trySubmitReview(state);
      if (ok) {
        // A fresh Post Review tap (e.g. after editing the draft further)
        // always re-opens the flow from the "finish on Google" step, even
        // if a previous attempt already reached the thank-you message.
        state.returned = false;
        // Copy on this exact click — no navigation yet. Was originally a
        // window.open() to a second tab, but that's unreliable inside a
        // QR-scanner's in-app browser: it can navigate the only tab away
        // instead of opening a new one, taking this panel with it. The
        // customer continues to Google explicitly, from the panel below.
        navigator.clipboard?.writeText(state.draftText).catch(() => {});
        updatePostSubmitPanel();
      }
    },
  });
  container.appendChild(submitBtn);

  container.appendChild(el('div', { id: 'post-submit-panel' }, state.submitted ? [postSubmitPanel()] : []));

  return container;
}

function postSubmitPanel() {
  return state.returned ? thankYouPanel() : finishInstructionsPanel();
}

function updatePostSubmitPanel() {
  const panel = document.getElementById('post-submit-panel');
  if (!panel) return;
  panel.innerHTML = '';
  panel.appendChild(postSubmitPanel());
}

function finishInstructionsPanel() {
  const lang = t();
  const steps = el('ol', { class: 'finish-steps' });
  lang.ui.finishSteps.forEach((stepText) => {
    steps.appendChild(el('li', { text: stepText }));
  });

  const copyFeedback = el('span', { class: 'copy-feedback' });

  return el('div', { class: 'finish-panel' }, [
    el('h2', { class: 'finish-title', text: lang.ui.finishTitle }),
    steps,
    el('div', { class: 'finish-actions' }, [
      el('button', {
        class: 'btn-primary',
        type: 'button',
        html: `${lang.ui.continueToGoogleBtn}${iconMarkup('arrowRight')}`,
        onclick: () => {
          window.location.href = GOOGLE_REVIEW_URL;
        },
      }),
      el('button', {
        class: 'btn-secondary',
        type: 'button',
        text: lang.ui.copyAgainBtn,
        onclick: () => {
          navigator.clipboard
            ?.writeText(state.draftText)
            .then(() => {
              copyFeedback.textContent = lang.ui.copiedFeedback;
            })
            .catch(() => {});
        },
      }),
      copyFeedback,
    ]),
  ]);
}

function thankYouPanel() {
  const lang = t();
  return el('div', { class: 'finish-panel thankyou-panel' }, [
    el('h2', { class: 'finish-title', text: lang.ui.thankYouTitle }),
    el('p', { class: 'hint', text: lang.ui.thankYouMessage }),
  ]);
}

// There is no signal from Google itself confirming a post — this only
// detects that the customer came back to this page after tapping Continue
// to Google, per the brief's explicit instruction not to claim more than
// that. pageshow, not visibilitychange: this is a same-tab navigate-away
// (Continue to Google) and navigate-back (browser back button) flow, and
// pageshow is what reliably fires on that back-navigation — including the
// common case of the page being restored from bfcache — where
// visibilitychange does not.
window.addEventListener('pageshow', () => {
  if (state.submitted && !state.returned) {
    state.returned = true;
    updatePostSubmitPanel();
  }
});

function renderLangMenu() {
  langMenu.innerHTML = '';
  Object.values(LANGUAGES).forEach((lang) => {
    const item = el('li', { role: 'option' }, [
      el('button', {
        class: 'lang-option' + (lang.code === state.lang ? ' lang-option-active' : ''),
        type: 'button',
        text: lang.name,
        onclick: () => {
          state.lang = lang.code;
          localStorage.setItem(LANG_STORAGE_KEY, lang.code);
          closeLangMenu();
          render();
        },
      }),
    ]);
    langMenu.appendChild(item);
  });
}

function closeLangMenu() {
  langMenu.classList.add('hidden');
  langToggle.setAttribute('aria-expanded', 'false');
}

function toggleLangMenu() {
  const isHidden = langMenu.classList.contains('hidden');
  if (isHidden) {
    renderLangMenu();
    langMenu.classList.remove('hidden');
    langToggle.setAttribute('aria-expanded', 'true');
  } else {
    closeLangMenu();
  }
}

langToggle.addEventListener('click', toggleLangMenu);
document.addEventListener('click', (event) => {
  if (!langMenu.contains(event.target) && event.target !== langToggle) {
    closeLangMenu();
  }
});

function renderTrustStrip() {
  trustStripEl.innerHTML = '';
  TRUST_STRIP.forEach((item) => {
    trustStripEl.appendChild(
      el('div', { class: 'trust-item' }, [
        el('span', { class: 'trust-icon', html: iconMarkup(item.icon) }),
        el('span', { text: item.text }),
      ])
    );
  });
}

// Decorative cursive flavor text (spec: can stay English regardless of
// selected language), rotating through the pool by step name for a little
// variety. The draft step shows none (CSS hides .tagline-script there).
function taglineFor(step) {
  const pool = TAGLINE_MIDFLOW_POOL;
  const index = ['rating', 'category', 'questions'].indexOf(step) % pool.length;
  return pool[Math.max(index, 0)];
}

function render() {
  document.documentElement.lang = state.lang;
  langToggle.innerHTML = `${iconMarkup('globe')}<span>${t().name}</span>${iconMarkup('chevronDown', 'chevron')}`;
  closeLangMenu();

  stage.dataset.step = state.step;
  taglineEl.textContent = taglineFor(state.step);

  root.innerHTML = '';
  let stepEl;
  if (state.step === 'rating') stepEl = renderRatingStep();
  else if (state.step === 'category') stepEl = renderCategoryStep();
  else if (state.step === 'questions') stepEl = renderQuestionsStep();
  else stepEl = renderDraftStep();

  root.appendChild(stepEl);
}

renderTrustStrip();
render();
