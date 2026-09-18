import { CATEGORY_IDS, CATEGORY_ICONS, QUESTIONS_PER_CATEGORY, LANG_STORAGE_KEY } from './constants.js';
import { LANGUAGES, getLanguage, detectLanguage } from './i18n/index.js';
import {
  createState,
  selectRating,
  selectCategory,
  answerQuestion,
  goBack,
  trySubmitReview,
  restart,
} from './state.js';

const root = document.getElementById('app-main');
const startOverBtn = document.getElementById('start-over');
const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');

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

function renderProgressDots(currentIndex, total) {
  const wrap = el('div', { class: 'progress-dots' });
  for (let i = 0; i < total; i += 1) {
    wrap.appendChild(
      el('span', { class: 'dot' + (i <= currentIndex ? ' dot-filled' : '') })
    );
  }
  return wrap;
}

function renderRatingStep() {
  const lang = t();
  const container = el('section', { class: 'step step-rating' });
  container.appendChild(el('h1', { class: 'prompt', text: lang.ui.ratingPrompt }));

  const stars = el('div', { class: 'stars' });
  for (let i = 1; i <= 5; i += 1) {
    const filled = state.rating !== null && i <= state.rating;
    const star = el('button', {
      class: 'star-btn' + (filled ? ' star-filled' : ''),
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
  container.appendChild(backButton());
  container.appendChild(el('h1', { class: 'prompt', text: lang.ui.categoryPrompt }));

  const grid = el('div', { class: 'category-grid' });
  CATEGORY_IDS.forEach((id) => {
    const cat = lang.categories[id];
    const card = el(
      'button',
      {
        class: 'category-card',
        type: 'button',
        onclick: () => {
          selectCategory(state, id);
          render();
        },
      },
      [
        el('span', { class: 'category-icon', text: CATEGORY_ICONS[id] }),
        el('span', { class: 'category-label', text: cat.label }),
      ]
    );
    grid.appendChild(card);
  });
  container.appendChild(grid);
  return container;
}

function renderQuestionsStep() {
  const lang = t();
  const category = lang.categories[state.categoryId];
  const question = category.questions[state.questionIndex];

  const container = el('section', { class: 'step step-questions' });
  container.appendChild(backButton());
  container.appendChild(
    el('p', {
      class: 'progress-label',
      text: lang.ui.questionProgress(state.questionIndex + 1, QUESTIONS_PER_CATEGORY),
    })
  );
  container.appendChild(renderProgressDots(state.questionIndex, QUESTIONS_PER_CATEGORY));
  container.appendChild(el('h1', { class: 'prompt', text: question.text }));

  const optionsWrap = el('div', { class: 'option-list' });
  question.options.forEach((optionText, optionIndex) => {
    const btn = el('button', {
      class: 'option-btn',
      type: 'button',
      text: optionText,
      onclick: () => {
        answerQuestion(state, optionIndex);
        render();
      },
    });
    optionsWrap.appendChild(btn);
  });
  container.appendChild(optionsWrap);
  return container;
}

function renderDraftStep() {
  const lang = t();
  const container = el('section', { class: 'step step-draft' });
  container.appendChild(backButton());
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
    class: 'submit-btn',
    type: 'button',
    text: lang.ui.postReview,
    onclick: () => {
      const ok = trySubmitReview(state);
      if (ok) {
        renderSubmitMessage();
      }
    },
  });
  container.appendChild(submitBtn);

  const messageSlot = el('div', { class: 'submit-message', id: 'submit-message' });
  if (state.submitted) {
    messageSlot.textContent = lang.ui.comingSoon;
    messageSlot.classList.add('submit-message-visible');
  }
  container.appendChild(messageSlot);

  return container;
}

function renderSubmitMessage() {
  const slot = document.getElementById('submit-message');
  if (!slot) return;
  slot.textContent = t().ui.comingSoon;
  slot.classList.add('submit-message-visible');
}

function backButton() {
  return el('button', {
    class: 'back-btn',
    type: 'button',
    text: `← ${t().ui.back}`,
    onclick: () => {
      goBack(state);
      render();
    },
  });
}

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

startOverBtn.addEventListener('click', () => {
  restart(state);
  render();
});

function render() {
  document.documentElement.lang = state.lang;
  langToggle.textContent = `${t().ui.languageLabel}: ${t().name}`;
  startOverBtn.textContent = t().ui.startOver;
  closeLangMenu();

  root.innerHTML = '';
  let stepEl;
  if (state.step === 'rating') stepEl = renderRatingStep();
  else if (state.step === 'category') stepEl = renderCategoryStep();
  else if (state.step === 'questions') stepEl = renderQuestionsStep();
  else stepEl = renderDraftStep();

  root.appendChild(stepEl);
}

render();
