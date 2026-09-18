// Punjabi content for ReviewSetu Phase 1.
// NOTE: UI strings and {product} noun forms are first-draft translations
// (not directly quoted from the brief) and should get a native-speaker
// review before going live (see brief's Translation Quality Note).
// Template bank and Mini-Sentence Mapping Table text is quoted directly
// from REVIEWSETU_BRIEF.md's REVISED TEMPLATE SYSTEM section.

export default {
  code: 'pa',
  name: 'ਪੰਜਾਬੀ',

  ui: {
    appName: 'ReviewSetu',
    startOver: 'ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ',
    languageLabel: 'ਭਾਸ਼ਾ',
    introTitle: 'ਤੁਹਾਡੀ ਰਾਏ ਸਾਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦੀ ਹੈ',
    introSubtitle: 'ਆਪਣਾ ਅਨੁਭਵ ਸਾਂਝਾ ਕਰਨ ਵਿੱਚ ਕੁਝ ਮਿੰਟ ਲੱਗਣਗੇ। ਤੁਹਾਡੀ ਰਾਏ ਸਾਨੂੰ ਬਿਹਤਰ ਸੇਵਾ ਦੇਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।',
    startReview: 'ਰਿਵਿਊ ਸ਼ੁਰੂ ਕਰੋ',
    ratingPrompt: 'ਤੁਹਾਡਾ ਅਨੁਭਵ ਕਿਵੇਂ ਰਿਹਾ?',
    categoryPrompt: 'ਤੁਸੀਂ ਕਿਸ ਪ੍ਰੋਡਕਟ ਬਾਰੇ ਰਿਵਿਊ ਦੇ ਰਹੇ ਹੋ?',
    questionProgress: (n, total) => `ਸਵਾਲ ${n} / ${total}`,
    back: 'ਪਿੱਛੇ',
    draftTitle: 'ਤੁਹਾਡਾ ਰਿਵਿਊ ਡਰਾਫਟ',
    draftInstruction: 'ਪੋਸਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਜੋ ਚਾਹੋ ਬਦਲੋ, ਜੋੜੋ ਜਾਂ ਹਟਾਓ।',
    postReview: 'ਰਿਵਿਊ ਪੋਸਟ ਕਰੋ',
    comingSoon: 'ਗੂਗਲ ਪੋਸਟਿੰਗ ਜਲਦੀ ਆ ਰਹੀ ਹੈ! ਹੁਣੇ ਲਈ ਹੇਠਾਂ ਦਿੱਤਾ ਰਿਵਿਊ ਕਾਪੀ ਕਰਕੇ ਖੁਦ ਪੋਸਟ ਕਰੋ।',
  },

  templates: {
    tier1: [
      '{product} ਦੀ ਕੁਆਲਿਟੀ {quality_word} ਹੈ, SBJ Nirmal ਤੋਂ ਖੁਸ਼ ਹਾਂ।',
      '{quality_word} ਕੁਆਲਿਟੀ ਦੇ {product} ਵਧੀਆ ਰੇਟ \'ਤੇ। ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹਾਂ।',
      'ਇੱਥੇ ਸਭ ਤੋਂ ਵਧੀਆ {product} ਮਿਲਦੇ ਹਨ, ਡਿਲੀਵਰੀ ਵੀ {delivery_word}।',
      'ਸਾਰੇ {product} {quality_word} ਕੁਆਲਿਟੀ ਵਿੱਚ ਸਭ ਤੋਂ ਵਧੀਆ ਕੀਮਤ \'ਤੇ ਮਿਲਦੇ ਹਨ। ਭਰੋਸੇਯੋਗ ਕੰਪਨੀ।',
      'SBJ Nirmal ਤੋਂ {quality_word} ਕੁਆਲਿਟੀ ਦੇ {product}।',
      '{product} ਦੀ ਕੁਆਲਿਟੀ {quality_word} ਹੈ, ਸਭ ਤੋਂ ਵਧੀਆ ਕੀਮਤ। ਦੁਬਾਰਾ ਆਰਡਰ ਕਰਾਂਗਾ।',
      'ਭਰੋਸੇਯੋਗ ਕੰਪਨੀ, {quality_word} ਕੁਆਲਿਟੀ ਦੇ ਪ੍ਰੋਡਕਟਸ ਅਤੇ {delivery_word} ਡਿਲੀਵਰੀ।',
    ],
    tier2: [
      'SBJ Nirmal Products ਵਧੀਆ {product} ਦੇਣ ਵਿੱਚ ਮਾਹਿਰ ਹੈ। {quality_word} ਕੁਆਲਿਟੀ, ਬਹੁਤ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹਾਂ।',
      'SBJ Nirmal ਦੇ {product} ਵਰਤੇ — {aspect_word_sentence}। ਡਿਲੀਵਰੀ {delivery_word} ਸੀ।',
      '{product} ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਸਪਲਾਇਰ, {quality_word} ਕੁਆਲਿਟੀ ਅਸਲੀ ਕੀਮਤ \'ਤੇ।',
      'SBJ Nirmal ਤੋਂ {product} ਆਰਡਰ ਕੀਤੇ — {quality_word} ਕੁਆਲਿਟੀ, {aspect_word}, ਅਤੇ {delivery_word} ਡਿਲੀਵਰੀ। ਦੁਬਾਰਾ ਆਰਡਰ ਕਰਾਂਗਾ।',
    ],
    tier3: [
      'ਮੈਂ ਹਾਲ ਹੀ ਵਿੱਚ SBJ Nirmal ਦੇ {product} ਵਰਤੇ, ਅਤੇ ਉਹਨਾਂ ਦੀ ਕੁਆਲਿਟੀ ਪ੍ਰਤੀ ਵਚਨਬੱਧਤਾ ਸਾਫ਼ ਦਿਖਦੀ ਹੈ। {aspect_word_sentence}, ਅਤੇ ਇਹ {delivery_word} ਪਹੁੰਚਿਆ। ਬਹੁਤ ਸੰਤੁਸ਼ਟ ਹਾਂ।',
    ],
  },

  categories: {
    rotavator_blades: {
      label: 'ਰੋਟਾਵੇਟਰ ਬਲੇਡ',
      productName: 'ਰੋਟਾਵੇਟਰ ਬਲੇਡ',
      questions: [
        {
          id: 'quality',
          text: 'ਬਲੇਡ ਦੀ ਕੁਆਲਿਟੀ ਕਿਵੇਂ ਸੀ?',
          options: ['ਬਹੁਤ ਵਧੀਆ', 'ਚੰਗੀ', 'ਠੀਕ-ਠਾਕ'],
        },
        {
          id: 'fit',
          text: 'ਕੀ ਇਹ ਸਹੀ ਫਿੱਟ ਹੋਇਆ?',
          options: ['ਬਿਲਕੁਲ ਫਿੱਟ', 'ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ', 'ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ'],
          sentences: [
            'ਫਿਟਮੈਂਟ ਬਿਲਕੁਲ ਸਹੀ ਸੀ',
            'ਫਿੱਟ ਕਰਨ ਲਈ ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ',
            'ਬਦਕਿਸਮਤੀ ਨਾਲ ਇਹ ਸਹੀ ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ',
          ],
        },
        {
          id: 'delivery',
          text: 'ਡਿਲੀਵਰੀ ਦੀ ਸਪੀਡ ਕਿਵੇਂ ਸੀ?',
          options: ['ਤੇਜ਼ (1-3 ਦਿਨ)', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
          insert: ['ਤੇਜ਼', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
        },
      ],
    },

    gears: {
      label: 'ਗੀਅਰ',
      productName: 'ਗੀਅਰ',
      questions: [
        {
          id: 'quality',
          text: 'ਬਿਲਡ ਕੁਆਲਿਟੀ ਕਿਵੇਂ ਸੀ?',
          options: ['ਬਹੁਤ ਵਧੀਆ', 'ਚੰਗੀ', 'ਠੀਕ-ਠਾਕ'],
        },
        {
          id: 'load',
          text: "ਕੀ ਇਹ ਲੋਡ ਲੋੜ 'ਤੇ ਖਰਾ ਉਤਰਿਆ?",
          options: ['ਹਾਂ', 'ਜ਼ਿਆਦਾਤਰ ਹਾਂ', 'ਨਹੀਂ'],
          sentences: [
            'ਇਸਨੇ ਲੋਡ ਬਿਲਕੁਲ ਸਹੀ ਢੰਗ ਨਾਲ ਸੰਭਾਲਿਆ',
            'ਇਸਨੇ ਜ਼ਿਆਦਾਤਰ ਲੋਡ ਵਧੀਆ ਸੰਭਾਲਿਆ',
            'ਇਸਨੂੰ ਲੋਡ ਸੰਭਾਲਣ ਵਿੱਚ ਦਿੱਕਤ ਆਈ',
          ],
        },
        {
          id: 'delivery',
          text: 'ਡਿਲੀਵਰੀ ਦੀ ਸਪੀਡ ਕਿਵੇਂ ਸੀ?',
          options: ['ਤੇਜ਼ (1-3 ਦਿਨ)', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
          insert: ['ਤੇਜ਼', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
        },
      ],
    },

    yoke: {
      label: 'ਯੋਕ',
      productName: 'ਯੋਕ',
      questions: [
        {
          id: 'price_quality',
          text: 'ਕੀਮਤ ਦੇ ਹਿਸਾਬ ਨਾਲ ਕੁਆਲਿਟੀ ਕਿਵੇਂ ਸੀ?',
          options: ['ਬਹੁਤ ਵਧੀਆ ਵੈਲਿਊ', 'ਠੀਕ-ਠਾਕ', 'ਮਹਿੰਗਾ'],
        },
        {
          id: 'fit',
          text: 'ਕੀ ਯੋਕ ਸਹੀ ਫਿੱਟ ਹੋਇਆ?',
          options: ['ਬਿਲਕੁਲ ਫਿੱਟ', 'ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ', 'ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ'],
          sentences: [
            'ਫਿਟਮੈਂਟ ਬਿਲਕੁਲ ਸਹੀ ਸੀ',
            'ਫਿੱਟ ਕਰਨ ਲਈ ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ',
            'ਬਦਕਿਸਮਤੀ ਨਾਲ ਇਹ ਸਹੀ ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ',
          ],
        },
        {
          id: 'delivery',
          text: 'ਡਿਲੀਵਰੀ ਦੀ ਸਪੀਡ ਕਿਵੇਂ ਸੀ?',
          options: ['ਤੇਜ਼ (1-3 ਦਿਨ)', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
          insert: ['ਤੇਜ਼', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
        },
      ],
    },

    pto_shaft: {
      label: 'ਪੀਟੀਓ ਸ਼ਾਫਟ / ਇਨਪੁੱਟ-ਆਊਟਪੁੱਟ ਸ਼ਾਫਟ',
      productName: 'ਪੀਟੀਓ ਸ਼ਾਫਟ',
      questions: [
        {
          id: 'quality',
          text: 'ਸ਼ਾਫਟ ਦੀ ਕੁਆਲਿਟੀ ਕਿਵੇਂ ਸੀ?',
          options: ['ਬਹੁਤ ਵਧੀਆ', 'ਚੰਗੀ', 'ਠੀਕ-ਠਾਕ'],
        },
        {
          id: 'fit',
          text: 'ਕੀ ਇਹ ਤੁਹਾਡੇ ਟਰੈਕਟਰ/ਰੋਟਾਵੇਟਰ ਮਾਡਲ ਵਿੱਚ ਸਹੀ ਫਿੱਟ ਹੋਇਆ?',
          options: ['ਬਿਲਕੁਲ ਫਿੱਟ', 'ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ', 'ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ'],
          sentences: [
            'ਫਿਟਮੈਂਟ ਬਿਲਕੁਲ ਸਹੀ ਸੀ',
            'ਫਿੱਟ ਕਰਨ ਲਈ ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ',
            'ਬਦਕਿਸਮਤੀ ਨਾਲ ਇਹ ਸਹੀ ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ',
          ],
        },
        {
          id: 'delivery',
          text: 'ਡਿਲੀਵਰੀ ਦੀ ਸਪੀਡ ਕਿਵੇਂ ਸੀ?',
          options: ['ਤੇਜ਼ (1-3 ਦਿਨ)', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
          insert: ['ਤੇਜ਼', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
        },
      ],
    },

    lubrication: {
      label: 'ਲੁਬਰੀਕੇਸ਼ਨ (ਗੀਅਰ ਆਇਲ / ਗਰੀਸ)',
      productName: 'ਗੀਅਰ ਆਇਲ/ਗਰੀਸ',
      questions: [
        {
          id: 'performance',
          text: 'ਪਰਫਾਰਮੈਂਸ ਕਿਵੇਂ ਸੀ?',
          options: ['ਬਹੁਤ ਵਧੀਆ', 'ਚੰਗੀ', 'ਠੀਕ-ਠਾਕ'],
        },
        {
          id: 'wear',
          text: 'ਕੀ ਇਸਨੇ ਉਮੀਦ ਮੁਤਾਬਕ ਘਸਾਵਟ/ਰਗੜ ਘਟਾਈ?',
          options: ['ਹਾਂ, ਕਾਫੀ ਹੱਦ ਤੱਕ', 'ਕੁਝ ਹੱਦ ਤੱਕ', 'ਜ਼ਿਆਦਾ ਨਹੀਂ'],
          sentences: [
            'ਇਸਨੇ ਘਸਾਵਟ ਅਤੇ ਰਗੜ ਕਾਫੀ ਹੱਦ ਤੱਕ ਘਟਾਈ',
            'ਇਸਨੇ ਉਮੀਦ ਮੁਤਾਬਕ ਕੁਝ ਹੱਦ ਤੱਕ ਘਸਾਵਟ ਘਟਾਈ',
            'ਇਸਨੇ ਉਮੀਦ ਜਿੰਨੀ ਘਸਾਵਟ ਨਹੀਂ ਘਟਾਈ',
          ],
        },
        {
          id: 'delivery',
          text: 'ਡਿਲੀਵਰੀ ਦੀ ਸਪੀਡ ਕਿਵੇਂ ਸੀ?',
          options: ['ਤੇਜ਼ (1-3 ਦਿਨ)', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
          insert: ['ਤੇਜ਼', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
        },
      ],
    },

    other: {
      label: 'ਹੋਰ',
      productName: 'ਪ੍ਰੋਡਕਟਸ',
      questions: [
        {
          id: 'quality',
          text: 'ਕੁੱਲ ਮਿਲਾ ਕੇ ਕੁਆਲਿਟੀ ਕਿਵੇਂ ਸੀ?',
          options: ['ਬਹੁਤ ਵਧੀਆ', 'ਚੰਗੀ', 'ਠੀਕ-ਠਾਕ'],
        },
        {
          id: 'expectations',
          text: "ਕੀ ਇਹ ਤੁਹਾਡੀਆਂ ਉਮੀਦਾਂ 'ਤੇ ਖਰਾ ਉਤਰਿਆ?",
          options: ['ਹਾਂ', 'ਜ਼ਿਆਦਾਤਰ ਹਾਂ', 'ਨਹੀਂ'],
          sentences: [
            "ਇਹ ਮੇਰੀਆਂ ਉਮੀਦਾਂ 'ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਖਰਾ ਉਤਰਿਆ",
            "ਇਹ ਜ਼ਿਆਦਾਤਰ ਮੇਰੀਆਂ ਉਮੀਦਾਂ 'ਤੇ ਖਰਾ ਉਤਰਿਆ",
            "ਇਹ ਮੇਰੀਆਂ ਉਮੀਦਾਂ 'ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਖਰਾ ਨਹੀਂ ਉਤਰਿਆ",
          ],
        },
        {
          id: 'delivery',
          text: 'ਡਿਲੀਵਰੀ ਦੀ ਸਪੀਡ ਕਿਵੇਂ ਸੀ?',
          options: ['ਤੇਜ਼ (1-3 ਦਿਨ)', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
          insert: ['ਤੇਜ਼', "ਸਮੇਂ 'ਤੇ", 'ਦੇਰੀ ਨਾਲ'],
        },
      ],
    },
  },
};
