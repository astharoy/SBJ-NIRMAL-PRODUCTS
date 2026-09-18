// English (default) content for ReviewSetu Phase 1.
// To add a new language later: copy this file, translate every string/array,
// register it in js/i18n/index.js — no other code changes needed.

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

  categories: {
    rotavator_blades: {
      label: 'Rotavator Blades',
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
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
        },
      ],
      templates: [
        'The blade quality was excellent and it fit perfectly.',
        'Really happy with the blade quality — fit my rotavator well.',
      ],
    },

    gears: {
      label: 'Gears',
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
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
        },
      ],
      templates: [
        'The gears had excellent build quality and handled the load well.',
        'Really happy with the gear quality — sturdy and reliable.',
      ],
    },

    yoke: {
      label: 'Yoke',
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
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
        },
      ],
      templates: [
        'Great value for the price, and the yoke fit perfectly.',
        'The yoke was a perfect fit and great value for money.',
      ],
    },

    pto_shaft: {
      label: 'PTO Shaft / Input-Output Shaft',
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
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
        },
      ],
      templates: [
        'The shaft had excellent build quality and fit perfectly.',
        'Really solid PTO shaft — correct fit, no issues.',
      ],
    },

    lubrication: {
      label: 'Lubrication (Gear Oil / Grease)',
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
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
        },
      ],
      templates: [
        'The gear oil performed excellently and reduced wear noticeably.',
        'Really good lubrication product — smooth performance.',
      ],
    },

    other: {
      label: 'Other',
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
        },
        {
          id: 'delivery',
          text: 'How was the delivery speed?',
          options: ['Fast (1-3 days)', 'On time', 'Delayed'],
        },
      ],
      templates: [
        'Overall quality was excellent and it met my expectations.',
        'Good product, met what I needed, delivery was on time.',
      ],
    },
  },
};
