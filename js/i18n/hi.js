// Hindi content for ReviewSetu Phase 1.
// NOTE: UI strings and {product} noun forms are first-draft translations
// (not directly quoted from the brief) and should get a native-speaker
// review before going live (see brief's Translation Quality Note).
// Template bank and Mini-Sentence Mapping Table text is quoted directly
// from REVIEWSETU_BRIEF.md's REVISED TEMPLATE SYSTEM section.

export default {
  code: 'hi',
  name: 'हिन्दी',

  ui: {
    appName: 'ReviewSetu',
    startOver: 'फिर से शुरू करें',
    languageLabel: 'भाषा',
    ratingPrompt: 'आपका अनुभव कैसा रहा?',
    categoryPrompt: 'आप किस प्रोडक्ट के बारे में रिव्यू दे रहे हैं?',
    questionProgress: (n, total) => `सवाल ${n} / ${total}`,
    back: 'वापस',
    draftTitle: 'आपका रिव्यू ड्राफ्ट',
    draftInstruction: 'पोस्ट करने से पहले जो चाहें बदलें, जोड़ें या हटाएं।',
    postReview: 'रिव्यू पोस्ट करें',
    comingSoon: 'गूगल पोस्टिंग जल्द आ रही है! अभी के लिए नीचे दिया गया रिव्यू कॉपी करके खुद पोस्ट करें।',
  },

  templates: {
    tier1: [
      '{product} की क्वालिटी अच्छी है, SBJ Nirmal से खुश हूं।',
      '{quality_word} क्वालिटी के {product} अच्छे रेट पर। सुझाव देता हूं।',
      'यहां सबसे अच्छे {product} मिलते हैं, डिलीवरी भी {delivery_word}।',
      'सभी {product} {quality_word} क्वालिटी में सबसे अच्छे दाम पर मिलते हैं। भरोसेमंद कंपनी।',
      'SBJ Nirmal से अच्छी क्वालिटी के {product}।',
      '{product} की क्वालिटी अच्छी है, सबसे अच्छा दाम। दोबारा ऑर्डर करूंगा।',
      'भरोसेमंद कंपनी, {quality_word} क्वालिटी के प्रोडक्ट्स और {delivery_word} डिलीवरी।',
    ],
    tier2: [
      'SBJ Nirmal Products बेहतरीन {product} देने में माहिर है। {quality_word} क्वालिटी, बहुत सुझाव देता हूं।',
      'SBJ Nirmal के {product} इस्तेमाल किए — {aspect_word_sentence}। डिलीवरी {delivery_word} थी।',
      '{product} के लिए सबसे अच्छा सप्लायर, {quality_word} क्वालिटी असली दाम पर।',
      'SBJ Nirmal से {product} ऑर्डर किए — {quality_word} क्वालिटी, {aspect_word}, और {delivery_word} डिलीवरी। दोबारा ऑर्डर करूंगा।',
    ],
    tier3: [
      'मैंने हाल ही में SBJ Nirmal के {product} इस्तेमाल किए, और उनकी क्वालिटी के प्रति प्रतिबद्धता साफ झलकती है। {aspect_word_sentence}, और यह {delivery_word} पहुंचा। बहुत संतुष्ट हूं।',
    ],
  },

  categories: {
    rotavator_blades: {
      label: 'रोटावेटर ब्लेड',
      productName: 'रोटावेटर ब्लेड',
      questions: [
        {
          id: 'quality',
          text: 'ब्लेड की क्वालिटी कैसी थी?',
          options: ['बहुत बढ़िया', 'अच्छी', 'ठीक-ठाक'],
        },
        {
          id: 'fit',
          text: 'क्या यह आपके रोटावेटर मॉडल में सही फिट हुआ?',
          options: ['बिल्कुल सही फिट', 'थोड़ा एडजस्ट करना पड़ा', 'फिट नहीं हुआ'],
          sentences: [
            'फिटमेंट बिल्कुल सही था',
            'फिट करने के लिए थोड़ा एडजस्ट करना पड़ा',
            'दुर्भाग्य से यह सही फिट नहीं हुआ',
          ],
        },
        {
          id: 'delivery',
          text: 'डिलीवरी की स्पीड कैसी थी?',
          options: ['तेज़ (1-3 दिन)', 'समय पर', 'देरी से'],
          insert: ['तेज़', 'समय पर', 'देरी से'],
        },
      ],
    },

    gears: {
      label: 'गियर',
      productName: 'गियर',
      questions: [
        {
          id: 'quality',
          text: 'बिल्ड क्वालिटी कैसी थी?',
          options: ['बहुत बढ़िया', 'अच्छी', 'ठीक-ठाक'],
        },
        {
          id: 'load',
          text: 'क्या यह आपकी लोड ज़रूरत पर खरा उतरा?',
          options: ['हां', 'ज़्यादातर हां', 'नहीं'],
          sentences: [
            'इसने लोड बिल्कुल सही तरीके से संभाला',
            'इसने ज़्यादातर लोड अच्छे से संभाला',
            'इसे लोड संभालने में दिक्कत हुई',
          ],
        },
        {
          id: 'delivery',
          text: 'डिलीवरी की स्पीड कैसी थी?',
          options: ['तेज़ (1-3 दिन)', 'समय पर', 'देरी से'],
          insert: ['तेज़', 'समय पर', 'देरी से'],
        },
      ],
    },

    yoke: {
      label: 'योक',
      productName: 'योक',
      questions: [
        {
          id: 'price_quality',
          text: 'कीमत के हिसाब से क्वालिटी कैसी थी?',
          options: ['बहुत बढ़िया वैल्यू', 'ठीक-ठाक', 'महंगा'],
        },
        {
          id: 'fit',
          text: 'क्या योक सही फिट हुआ?',
          options: ['बिल्कुल सही फिट', 'थोड़ा एडजस्ट करना पड़ा', 'फिट नहीं हुआ'],
          sentences: [
            'फिटमेंट बिल्कुल सही था',
            'फिट करने के लिए थोड़ा एडजस्ट करना पड़ा',
            'दुर्भाग्य से यह सही फिट नहीं हुआ',
          ],
        },
        {
          id: 'delivery',
          text: 'डिलीवरी की स्पीड कैसी थी?',
          options: ['तेज़ (1-3 दिन)', 'समय पर', 'देरी से'],
          insert: ['तेज़', 'समय पर', 'देरी से'],
        },
      ],
    },

    pto_shaft: {
      label: 'पीटीओ शाफ्ट / इनपुट-आउटपुट शाफ्ट',
      productName: 'पीटीओ शाफ्ट',
      questions: [
        {
          id: 'quality',
          text: 'शाफ्ट की क्वालिटी कैसी थी?',
          options: ['बहुत बढ़िया', 'अच्छी', 'ठीक-ठाक'],
        },
        {
          id: 'fit',
          text: 'क्या यह आपके ट्रैक्टर/रोटावेटर मॉडल में सही फिट हुआ?',
          options: ['बिल्कुल सही फिट', 'थोड़ा एडजस्ट करना पड़ा', 'फिट नहीं हुआ'],
          sentences: [
            'फिटमेंट बिल्कुल सही था',
            'फिट करने के लिए थोड़ा एडजस्ट करना पड़ा',
            'दुर्भाग्य से यह सही फिट नहीं हुआ',
          ],
        },
        {
          id: 'delivery',
          text: 'डिलीवरी की स्पीड कैसी थी?',
          options: ['तेज़ (1-3 दिन)', 'समय पर', 'देरी से'],
          insert: ['तेज़', 'समय पर', 'देरी से'],
        },
      ],
    },

    lubrication: {
      label: 'लुब्रिकेशन (गियर ऑयल / ग्रीस)',
      productName: 'गियर ऑयल/ग्रीस',
      questions: [
        {
          id: 'performance',
          text: 'परफॉर्मेंस कैसा था?',
          options: ['बहुत बढ़िया', 'अच्छी', 'ठीक-ठाक'],
        },
        {
          id: 'wear',
          text: 'क्या इसने उम्मीद के मुताबिक घिसाव/घर्षण कम किया?',
          options: ['हां, काफी हद तक', 'कुछ हद तक', 'ज़्यादा नहीं'],
          sentences: [
            'इसने घिसाव और घर्षण काफी हद तक कम किया',
            'इसने उम्मीद के मुताबिक कुछ हद तक घिसाव कम किया',
            'इसने उम्मीद जितना घिसाव कम नहीं किया',
          ],
        },
        {
          id: 'delivery',
          text: 'डिलीवरी की स्पीड कैसी थी?',
          options: ['तेज़ (1-3 दिन)', 'समय पर', 'देरी से'],
          insert: ['तेज़', 'समय पर', 'देरी से'],
        },
      ],
    },

    other: {
      label: 'अन्य',
      productName: 'प्रोडक्ट्स',
      questions: [
        {
          id: 'quality',
          text: 'कुल मिलाकर क्वालिटी कैसी थी?',
          options: ['बहुत बढ़िया', 'अच्छी', 'ठीक-ठाक'],
        },
        {
          id: 'expectations',
          text: 'क्या यह आपकी उम्मीदों पर खरा उतरा?',
          options: ['हां', 'ज़्यादातर हां', 'नहीं'],
          sentences: [
            'यह मेरी उम्मीदों पर पूरी तरह खरा उतरा',
            'यह ज़्यादातर मेरी उम्मीदों पर खरा उतरा',
            'यह मेरी उम्मीदों पर पूरी तरह खरा नहीं उतरा',
          ],
        },
        {
          id: 'delivery',
          text: 'डिलीवरी की स्पीड कैसी थी?',
          options: ['तेज़ (1-3 दिन)', 'समय पर', 'देरी से'],
          insert: ['तेज़', 'समय पर', 'देरी से'],
        },
      ],
    },
  },
};
