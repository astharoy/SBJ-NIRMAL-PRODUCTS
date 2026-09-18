// English (default) content for ReviewSetu Phase 1.
// To add a new language later: copy this file, translate every string/array,
// register it in js/i18n/index.js — no other code changes needed.
//
// Draft generation uses the REVISED TEMPLATE SYSTEM from
// REVIEWSETU_BRIEF.md: a single shared, tiered template bank (see
// `templates` below) filled with placeholders from the customer's taps,
// rather than one fixed template list per category. Each category supplies:
//   - productName: the {product} placeholder, in mid-sentence form
//   - questions[0] (quality): options fill {quality_word} directly
//   - questions[1] (aspect): options fill {aspect_word}; `sentences` (same
//     order as options, from the brief's Mini-Sentence Mapping Table)
//     fill {aspect_word_sentence}
//   - questions[2] (delivery): `insert` (same order as options) fills
//     {delivery_word} with the short natural form; falls back to `options`
//     if a category has no `insert`

export default {
  code: 'en',
  name: 'English',

  ui: {
    appName: 'ReviewSetu',
    startOver: 'Start Over',
    languageLabel: 'Language',
    ratingPrompt: 'How would you rate your experience?',
    categoryPrompt: 'Which product are you reviewing?',
    questionProgress: (n, total) => `Question ${n} of ${total}`,
    back: 'Back',
    draftTitle: 'Your review draft',
    draftInstruction: 'Edit, add, or remove anything you like before posting.',
    postReview: 'Post Review',
    comingSoon: 'Google posting is coming soon! For now, copy the review below to post it yourself.',
  },

  // Shared template bank, tiered by how common each style is in the
  // business's real Google Maps reviews. A tier is picked first (weighted,
  // see TEMPLATE_TIER_WEIGHTS), then one template is picked at random
  // within that tier.
  templates: {
    tier1: [
      'Good quality {product}, happy with SBJ Nirmal.',
      '{quality_word} quality {product} at a good rate. Recommended.',
      'Best {product} available here, {delivery_word} delivery too.',
      'All {product} available in {quality_word} quality at best price. Trusted company.',
      'Nice quality {product} from SBJ Nirmal.',
      '{product} is good quality, best price. Will order again.',
      'Trusted company, {quality_word} quality products and {delivery_word} delivery.',
    ],
    tier2: [
      'SBJ Nirmal Products excels in providing top-notch {product}. {quality_word} quality, highly recommended.',
      'Used {product} from SBJ Nirmal — {aspect_word_sentence}. Delivery was {delivery_word}.',
      'Best supplier for {product}, {quality_word} quality at a genuine rate.',
      'Ordered {product} from SBJ Nirmal — {quality_word} quality, {aspect_word}, and {delivery_word} delivery. Would order again.',
    ],
    tier3: [
      'I recently used the {product} from SBJ Nirmal, and their commitment to quality truly shines through. {aspect_word_sentence}, and it arrived {delivery_word}. Very satisfied.',
    ],
  },

  categories: {
    rotavator_blades: {
      label: 'Rotavator Blades',
      productName: 'rotavator blades',
      questions: [
        {
          id: 'quality',
          text: 'How was the blade quality?',
          options: ['Excellent', 'Good', 'Average'],
        },
        {
          id: 'fit',
          text: 'Did it fit your rotavator model correctly?',
          options: ['Perfect fit', 'Needed adjustment', "Didn't fit"],
          sentences: [
            'The fitment was perfect',
            'It needed a slight adjustment to fit',
            "Unfortunately it didn't fit correctly",
          ],
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
          insert: ['fast', 'on time', 'delayed'],
        },
      ],
    },

    gears: {
      label: 'Gears',
      productName: 'gears',
      questions: [
        {
          id: 'quality',
          text: 'How was the build quality?',
          options: ['Excellent', 'Good', 'Average'],
        },
        {
          id: 'load',
          text: 'Did it handle your load requirements?',
          options: ['Yes', 'Mostly', 'No'],
          sentences: [
            'It handled the load perfectly',
            'It mostly handled the load well',
            'It struggled with the load',
          ],
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
          insert: ['fast', 'on time', 'delayed'],
        },
      ],
    },

    yoke: {
      label: 'Yoke',
      productName: 'yoke',
      questions: [
        {
          id: 'price_quality',
          text: 'How was price vs. quality?',
          options: ['Great value', 'Fair', 'Expensive'],
        },
        {
          id: 'fit',
          text: 'Did the yoke fit correctly?',
          options: ['Perfect fit', 'Needed adjustment', "Didn't fit"],
          sentences: [
            'The fitment was perfect',
            'It needed a slight adjustment to fit',
            "Unfortunately it didn't fit correctly",
          ],
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
          insert: ['fast', 'on time', 'delayed'],
        },
      ],
    },

    pto_shaft: {
      label: 'PTO Shaft / Input-Output Shaft',
      productName: 'PTO shaft',
      questions: [
        {
          id: 'quality',
          text: 'How was the shaft quality?',
          options: ['Excellent', 'Good', 'Average'],
        },
        {
          id: 'fit',
          text: 'Did it fit your tractor/rotavator model correctly?',
          options: ['Perfect fit', 'Needed adjustment', "Didn't fit"],
          sentences: [
            'The fitment was perfect',
            'It needed a slight adjustment to fit',
            "Unfortunately it didn't fit correctly",
          ],
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
          insert: ['fast', 'on time', 'delayed'],
        },
      ],
    },

    lubrication: {
      label: 'Lubrication (Gear Oil / Grease)',
      productName: 'gear oil/grease',
      questions: [
        {
          id: 'performance',
          text: 'How was the performance?',
          options: ['Excellent', 'Good', 'Average'],
        },
        {
          id: 'wear',
          text: 'Did it reduce wear/friction as expected?',
          options: ['Yes, noticeably', 'Somewhat', 'Not much'],
          sentences: [
            'It noticeably reduced wear and friction',
            'It somewhat reduced wear as expected',
            "It didn't reduce wear as much as expected",
          ],
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
          insert: ['fast', 'on time', 'delayed'],
        },
      ],
    },

    other: {
      label: 'Other',
      productName: 'products',
      questions: [
        {
          id: 'quality',
          text: 'How was the overall quality?',
          options: ['Excellent', 'Good', 'Average'],
        },
        {
          id: 'expectations',
          text: 'Did it meet your expectations?',
          options: ['Yes', 'Mostly', 'No'],
          sentences: [
            'It fully met my expectations',
            'It mostly met my expectations',
            "It didn't quite meet my expectations",
          ],
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
          insert: ['fast', 'on time', 'delayed'],
        },
      ],
    },
  },
};
