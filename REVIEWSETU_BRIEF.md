# ReviewSetu — Project Brief for Claude Code

## Brand Colors (Light Mode)
- **Primary Red:** `#D32F2F`
- **Black (text/accents):** `#1A1A1A`
- **Background White:** `#FFFFFF`
- **Secondary/muted gray (for borders, disabled states):** `#E5E5E5`

> Swap these hex codes later if SBJ Nirmal has official brand guideline colors — these are a clean placeholder red/black/white palette suited to an industrial/agricultural brand.

---

## Phase 1 — Frontend Only (Build Now)

### Goal
Build and test the full UI/UX flow for a review-assist tool. No live Google integration yet — this phase ends at an editable draft text box with a placeholder submit button.

### Flow (in exact order)
1. **Star rating** — customer taps 1 to 5 stars
2. **Product category selection** — 5 tappable options:
   - Rotavator Blades
   - Gears
   - Yoke
   - PTO Shaft / Input-Output Shaft
   - Lubrication (Gear Oil / Grease)
3. **Tap-based questions** — based on selected category, show 2-3 short questions, each with 3 tap-option answers (see Content section below)
4. **Auto-generated draft** — once all questions are answered, randomly select one matching sentence template and populate an **editable text box**
5. **Customer edit step** — customer can freely edit, add, or delete text in the box
6. **Placeholder submit** — a "Post Review" button that shows a "Coming soon" message or similar — **does not connect to Google in this phase**

### Non-Negotiable Build Rule
The draft text must ALWAYS load into an editable field before any submit action can fire. There is no skip button, no auto-timer, and no auto-continue past the edit step — this applies even to the placeholder button in this phase. This rule must be enforced in the code logic itself, not just implied by the UI layout.

### Responsive Design
Fully responsive — must work cleanly on **both mobile and desktop**, not mobile-only. Test layouts at minimum: 375px (mobile), 768px (tablet), 1440px (desktop).

### Languages (5, for Phase 1)
English, Hindi, Punjabi, Telugu, Tamil
- Auto-detect language via browser/location as default
- Manual toggle button included so the customer can override the auto-detected language
- Structure the code so more languages (Gujarati, Kannada, Marathi, Bengali, Odia, Malayalam) can be added later without a rebuild

### Tech Setup
- New GitHub repo, connected to a new Vercel project (already set up by the user)
- Design should be built fresh based on the brand colors above
- No backend/database required yet — this phase is UI/UX only

---

## Product Categories, Questions, Options & Templates

### 1. Rotavator Blades

**Q1 — Blade quality?**
| Lang | Question | Options |
|---|---|---|
| EN | How was the blade quality? | Excellent / Good / Average |
| HI | ब्लेड की क्वालिटी कैसी थी? | बहुत बढ़िया / अच्छी / ठीक-ठाक |
| PA | ਬਲੇਡ ਦੀ ਕੁਆਲਿਟੀ ਕਿਵੇਂ ਸੀ? | ਬਹੁਤ ਵਧੀਆ / ਚੰਗੀ / ਠੀਕ-ਠਾਕ |
| TE | బ్లేడ్ నాణ్యత ఎలా ఉంది? | అద్భుతం / మంచిది / సాధారణం |
| TA | பிளேடு தரம் எப்படி இருந்தது? | மிகச் சிறந்தது / நல்லது / சராசரி |

**Q2 — Fit correct?**
| Lang | Question | Options |
|---|---|---|
| EN | Did it fit your rotavator model correctly? | Perfect fit / Needed adjustment / Didn't fit |
| HI | क्या यह आपके रोटावेटर मॉडल में सही फिट हुआ? | बिल्कुल सही फिट / थोड़ा एडजस्ट करना पड़ा / फिट नहीं हुआ |
| PA | ਕੀ ਇਹ ਸਹੀ ਫਿੱਟ ਹੋਇਆ? | ਬਿਲਕੁਲ ਫਿੱਟ / ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ / ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ |
| TE | ఇది సరిగ్గా అమరిందా? | సరిగ్గా అమిరింది / కొంచెం సర్దుబాటు అవసరం / అమరలేదు |
| TA | இது சரியாகப் பொருந்தியதா? | சரியாகப் பொருந்தியது / சரிசெய்ய வேண்டியிருந்தது / பொருந்தவில்லை |

**Q3 — Delivery speed?**
| Lang | Options |
|---|---|
| EN | Fast (1-3 days) / On time / Delayed |
| HI | तेज़ (1-3 दिन) / समय पर / देरी से |
| PA | ਤੇਜ਼ (1-3 ਦਿਨ) / ਸਮੇਂ 'ਤੇ / ਦੇਰੀ ਨਾਲ |
| TE | వేగంగా (1-3 రోజులు) / సమయానికి / ఆలస్యం |
| TA | விரைவாக (1-3 நாட்கள்) / சரியான நேரத்தில் / தாமதம் |

**Templates:**
- EN-A: "The blade quality was excellent and it fit perfectly."
- EN-B: "Really happy with the blade quality — fit my rotavator well."
- HI-A: "ब्लेड की क्वालिटी बहुत बढ़िया थी और फिट भी सही था।"
- HI-B: "ब्लेड की क्वालिटी से बहुत खुश हूं, रोटावेटर में अच्छे से फिट हुए।"
- PA-A: "ਬਲੇਡ ਦੀ ਕੁਆਲਿਟੀ ਬਹੁਤ ਵਧੀਆ ਸੀ ਅਤੇ ਸਹੀ ਫਿੱਟ ਹੋਇਆ।"
- PA-B: "ਬਲੇਡ ਦੀ ਕੁਆਲਿਟੀ ਤੋਂ ਬਹੁਤ ਖੁਸ਼ ਹਾਂ, ਰੋਟਾਵੇਟਰ ਵਿੱਚ ਵਧੀਆ ਫਿੱਟ ਹੋਇਆ।"
- TE-A: "బ్లేడ్ నాణ్యత అద్భుతంగా ఉంది మరియు సరిగ్గా అమిరింది."
- TE-B: "బ్లేడ్ నాణ్యత చూసి చాలా సంతోషంగా ఉంది, సరైన ఫిట్."
- TA-A: "பிளேடு தரம் மிகச் சிறப்பாக இருந்தது, சரியாகப் பொருந்தியது."
- TA-B: "பிளேடு தரத்தில் மிகவும் மகிழ்ச்சி, சரியான பொருத்தம்."

---

### 2. Gears

**Q1 — Build quality?** (same option set as blade quality across all languages)

**Q2 — Handled load requirements?**
| Lang | Question | Options |
|---|---|---|
| EN | Did it handle your load requirements? | Yes / Mostly / No |
| HI | क्या यह आपकी लोड ज़रूरत पर खरा उतरा? | हां / ज़्यादातर हां / नहीं |
| PA | ਕੀ ਇਹ ਲੋਡ ਲੋੜ 'ਤੇ ਖਰਾ ਉਤਰਿਆ? | ਹਾਂ / ਜ਼ਿਆਦਾਤਰ ਹਾਂ / ਨਹੀਂ |
| TE | ఇది లోడ్ అవసరాలను తీర్చిందా? | అవును / ఎక్కువగా అవును / లేదు |
| TA | இது சுமை தேவையை பூர்த்தி செய்ததா? | ஆம் / பெரும்பாலும் ஆம் / இல்லை |

**Q3 — Delivery speed?** (same option set as above)

**Templates:**
- EN-A: "The gears had excellent build quality and handled the load well."
- EN-B: "Really happy with the gear quality — sturdy and reliable."
- HI-A: "गियर की बिल्ड क्वालिटी बहुत बढ़िया थी और लोड अच्छे से संभाला।"
- PA-A: "ਗੀਅਰ ਦੀ ਬਿਲਡ ਕੁਆਲਿਟੀ ਬਹੁਤ ਵਧੀਆ ਸੀ ਅਤੇ ਲੋਡ ਵਧੀਆ ਸੰਭਾਲਿਆ।"
- TE-A: "గేర్ల నిర్మాణ నాణ్యత అద్భుతంగా ఉంది, లోడ్‌ను బాగా తట్టుకుంది."
- TA-A: "கியரின் தரம் மிகச் சிறப்பாக இருந்தது, சுமையை நன்கு தாங்கியது."

---

### 3. Yoke

**Q1 — Price vs. quality?**
| Lang | Question | Options |
|---|---|---|
| EN | How was price vs. quality? | Great value / Fair / Expensive |
| HI | कीमत के हिसाब से क्वालिटी कैसी थी? | बहुत बढ़िया वैल्यू / ठीक-ठाक / महंगा |
| PA | ਕੀਮਤ ਦੇ ਹਿਸਾਬ ਨਾਲ ਕੁਆਲਿਟੀ ਕਿਵੇਂ ਸੀ? | ਬਹੁਤ ਵਧੀਆ ਵੈਲਿਊ / ਠੀਕ-ਠਾਕ / ਮਹਿੰਗਾ |
| TE | ధర ప్రకారం నాణ్యత ఎలా ఉంది? | అద్భుతమైన విలువ / సాధారణం / ఖరీదైనది |
| TA | விலைக்கு ஏற்ப தரம் எப்படி இருந்தது? | சிறந்த மதிப்பு / நியாயமானது / விலை அதிகம் |

**Q2 — Fitment?** (same option set as blade fit question)
**Q3 — Delivery speed?** (same option set as above)

**Templates:**
- EN-A: "Great value for the price, and the yoke fit perfectly."
- EN-B: "The yoke was a perfect fit and great value for money."
- HI-A: "कीमत के हिसाब से बहुत बढ़िया, और योक बिल्कुल सही फिट हुआ।"
- PA-A: "ਕੀਮਤ ਦੇ ਹਿਸਾਬ ਨਾਲ ਬਹੁਤ ਵਧੀਆ, ਅਤੇ ਯੋਕ ਬਿਲਕੁਲ ਸਹੀ ਫਿੱਟ ਹੋਇਆ।"
- TE-A: "ధర ప్రకారం చాలా బాగుంది, యోక్ సరిగ్గా అమిరింది."
- TA-A: "விலைக்கு ஏற்ப மிகவும் நல்லது, யோக் சரியாகப் பொருந்தியது."

---

### 4. PTO Shaft / Input-Output Shaft

Same question structure as Rotavator Blades: build quality, fitment (to tractor/rotavator model), delivery speed. Use identical option sets, adjust template wording to "shaft."

**Templates:**
- EN-A: "The shaft had excellent build quality and fit perfectly."
- EN-B: "Really solid PTO shaft — correct fit, no issues."
- HI-A: "शाफ्ट की बिल्ड क्वालिटी बहुत बढ़िया थी और सही फिट हुआ।"
- PA-A: "ਸ਼ਾਫਟ ਦੀ ਬਿਲਡ ਕੁਆਲਿਟੀ ਬਹੁਤ ਵਧੀਆ ਸੀ ਅਤੇ ਸਹੀ ਫਿੱਟ ਹੋਇਆ।"
- TE-A: "షాఫ్ట్ నిర్మాణ నాణ్యత అద్భుతంగా ఉంది మరియు సరిగ్గా అమిరింది."
- TA-A: "ஷாஃப்ட் தரம் மிகச் சிறப்பாக இருந்தது, சரியாகப் பொருந்தியது."

---

### 5. Lubrication (Gear Oil / Grease)

**Q1 — Performance?** (same option set as build quality)

**Q2 — Reduced wear/friction?**
| Lang | Question | Options |
|---|---|---|
| EN | Did it reduce wear/friction as expected? | Yes, noticeably / Somewhat / Not much |
| HI | क्या इसने उम्मीद के मुताबिक घिसाव/घर्षण कम किया? | हां, काफी हद तक / कुछ हद तक / ज़्यादा नहीं |
| PA | ਕੀ ਇਸਨੇ ਉਮੀਦ ਮੁਤਾਬਕ ਘਸਾਵਟ/ਰਗੜ ਘਟਾਈ? | ਹਾਂ, ਕਾਫੀ ਹੱਦ ਤੱਕ / ਕੁਝ ਹੱਦ ਤੱਕ / ਜ਼ਿਆਦਾ ਨਹੀਂ |
| TE | ఇది అరుగుదల/రాపిడిని తగ్గించిందా? | అవును, గణనీయంగా / కొంతవరకు / పెద్దగా లేదు |
| TA | இது தேய்மானம்/உராய்வைக் குறைத்ததா? | ஆம், குறிப்பிடத்தக்க அளவில் / ஓரளவு / அதிகமில்லை |

**Q3 — Delivery speed?** (same option set as above)

**Templates:**
- EN-A: "The gear oil performed excellently and reduced wear noticeably."
- EN-B: "Really good lubrication product — smooth performance."
- HI-A: "गियर ऑयल का परफॉर्मेंस बहुत बढ़िया था और घिसाव काफी कम हुआ।"
- PA-A: "ਗੀਅਰ ਆਇਲ ਦਾ ਪਰਫਾਰਮੈਂਸ ਬਹੁਤ ਵਧੀਆ ਸੀ ਅਤੇ ਘਸਾਵਟ ਕਾਫੀ ਘੱਟ ਹੋਈ।"
- TE-A: "గేర్ ఆయిల్ పనితీరు అద్భుతంగా ఉంది, అరుగుదల గణనీయంగా తగ్గింది."
- TA-A: "கியர் எண்ணெய் செயல்திறன் மிகச் சிறப்பாக இருந்தது, தேய்மானம் குறிப்பிடத்தக்க அளவில் குறைந்தது."

---

## Phase 2 — Google Review Integration (Later)
Wire the "Post Review" button to open the edited draft pre-filled into the Google Business Profile review link. Customer completes the final submit on Google's own page — no auto-post.

## Phase 3 — Delivery Trigger & Distribution (Later)
QR code / shareable link on invoices and delivery packaging. Decide manual trigger vs. WhatsApp Business API automation (AiSensy/WATI/Interakt).

## Phase 4 — Language Expansion (Later)
Add Gujarati, Kannada, Marathi, Bengali, Odia, Malayalam — same structure, translated and native-speaker-reviewed before going live.

## Phase 5 — Logging & Dashboard (Later)
Log category, star rating, language, timestamp (not review text). Simple dashboard for sent vs. completed review requests.

## Phase 6 — Template Iteration (Later)
Review real usage, refine templates, add more variations if repetition appears across live reviews.

---

## Translation Quality Note
Before Phase 1 content goes live for real customers, have a native speaker (team member or regional dealer) check the Hindi, Punjabi, Telugu, and Tamil content — especially the technical terms (fitment, load-bearing, build quality) — for accuracy and natural phrasing.

---

## Edge Cases (Resolved — Use These Defaults)

**Star rating behavior:** The same flow, questions, and templates apply regardless of the star rating selected (1 to 5). Do NOT change tone or template sentiment based on the star count — keep all templates neutral and factual (describing quality/fit/delivery, not exaggerated praise). This avoids the flow looking like it manipulates sentiment based on rating, which is a pattern review platforms flag.

**"Other" category fallback:** Add a 6th product category option: **Other**. For this category, use 3 generic questions instead of product-specific ones:
- Q1: Overall quality? → Excellent / Good / Average
- Q2: Did it meet your expectations? → Yes / Mostly / No
- Q3: Delivery speed? → Fast (1-3 days) / On time / Delayed

Generic templates (English, translate to other 4 languages using the same style as the categories above):
- A: "Overall quality was excellent and it met my expectations."
- B: "Good product, met what I needed, delivery was on time."

## UI/UX Default Instruction
For any UI/UX decision not explicitly specified here (exact layout, spacing, button style, step transitions), use clean, minimal design consistent with the brand colors, responsive across mobile and desktop. Make a reasonable choice and proceed rather than pausing to ask — only ask if a decision would be genuinely hard to reverse later.

## Code Style Instruction
Keep the codebase lean and minimal. Do not over-engineer or write more code than the task actually needs — if something can be done cleanly in 2-3 lines, do not expand it into a larger abstraction, extra helper files, or unnecessary boilerplate. Avoid premature architecture (no unnecessary state management libraries, no extra config layers) for what is currently a single-flow frontend app. Prioritize simple, readable, directly-functional code over "scalable" patterns at this stage — this can be refactored later if and when the app's scope actually grows in Phase 2 onward.

---

## Language / Framework / Hosting
Build in plain JavaScript (HTML/CSS/JS) — no framework — for Phase 1. Host on Vercel's free `.vercel.app` subdomain for testing. Final domain name and hosting platform (staying on Vercel vs. moving to a PHP-compatible host) are not yet decided and will be revisited later, once the domain is finalized. Do not block Phase 1 development on this decision.

---

# REVISED TEMPLATE SYSTEM (Supersedes per-category templates above)

**Note for Claude Code:** The individual templates listed under each product category above (Sections 1-5, "Templates:" subsections) are now SUPERSEDED by the system below, which is based on real review data collected from the business's actual Google Maps reviews. Use ONLY the templates and logic in this section for draft generation. The questions, tap options, and category structure above remain unchanged — only the draft-generation templates are replaced.

## Why this changed
Real customer reviews for this business were analyzed and found to be mostly short (1 sentence), casually phrased, and varied in structure — not long or polished. The template bank below reflects that real distribution instead of assuming longer reviews are more natural.

## Template Bank (English base)

**Tier 1 — Short (select ~70% of the time):**
1. "Good quality {product}, happy with SBJ Nirmal."
2. "{quality_word} quality {product} at a good rate. Recommended."
3. "Best {product} available here, {delivery_word} delivery too."
4. "All {product} available in {quality_word} quality at best price. Trusted company."
5. "Nice quality {product} from SBJ Nirmal."
6. "{product} is good quality, best price. Will order again."
7. "Trusted company, {quality_word} quality products and {delivery_word} delivery."

**Tier 2 — Medium (select ~25% of the time):**
8. "SBJ Nirmal Products excels in providing top-notch {product}. {quality_word} quality, highly recommended."
9. "Used {product} from SBJ Nirmal — {aspect_word_sentence}. Delivery was {delivery_word}."
10. "Best supplier for {product}, {quality_word} quality at a genuine rate."
11. "Ordered {product} from SBJ Nirmal — {quality_word} quality, {aspect_word}, and {delivery_word} delivery. Would order again."

**Tier 3 — Longer/personal (select ~5% of the time, rare):**
12. "I recently used the {product} from SBJ Nirmal, and their commitment to quality truly shines through. {aspect_word_sentence}, and it arrived {delivery_word}. Very satisfied."

## Selection logic
1. Randomly pick a tier, weighted 70% Tier 1 / 25% Tier 2 / 5% Tier 3
2. Randomly pick one template within that tier
3. Fill placeholders from the customer's actual tap selections:
   - `{product}` → selected category name (e.g., "rotavator blades")
   - `{quality_word}` → Q1 tap answer, inserted as a word/short phrase (e.g., "Excellent")
   - `{aspect_word}` → Q2 tap answer, inserted as a word/short phrase
   - `{aspect_word_sentence}` → Q2 tap answer rephrased as a natural mini-sentence — use the Mini-Sentence Mapping Table below, do NOT just insert the raw tap label
   - `{delivery_word}` → Q3 tap answer (e.g., "fast," "on time")

## Templates — Hindi (HI)
1. "{product} की क्वालिटी अच्छी है, SBJ Nirmal से खुश हूं।"
2. "{quality_word} क्वालिटी के {product} अच्छे रेट पर। सुझाव देता हूं।"
3. "यहां सबसे अच्छे {product} मिलते हैं, डिलीवरी भी {delivery_word}।"
4. "सभी {product} {quality_word} क्वालिटी में सबसे अच्छे दाम पर मिलते हैं। भरोसेमंद कंपनी।"
5. "SBJ Nirmal से अच्छी क्वालिटी के {product}।"
6. "{product} की क्वालिटी अच्छी है, सबसे अच्छा दाम। दोबारा ऑर्डर करूंगा।"
7. "भरोसेमंद कंपनी, {quality_word} क्वालिटी के प्रोडक्ट्स और {delivery_word} डिलीवरी।"
8. "SBJ Nirmal Products बेहतरीन {product} देने में माहिर है। {quality_word} क्वालिटी, बहुत सुझाव देता हूं।"
9. "SBJ Nirmal के {product} इस्तेमाल किए — {aspect_word_sentence}। डिलीवरी {delivery_word} थी।"
10. "{product} के लिए सबसे अच्छा सप्लायर, {quality_word} क्वालिटी असली दाम पर।"
11. "SBJ Nirmal से {product} ऑर्डर किए — {quality_word} क्वालिटी, {aspect_word}, और {delivery_word} डिलीवरी। दोबारा ऑर्डर करूंगा।"
12. "मैंने हाल ही में SBJ Nirmal के {product} इस्तेमाल किए, और उनकी क्वालिटी के प्रति प्रतिबद्धता साफ झलकती है। {aspect_word_sentence}, और यह {delivery_word} पहुंचा। बहुत संतुष्ट हूं।"

## Templates — Punjabi (PA)
1. "{product} ਦੀ ਕੁਆਲਿਟੀ ਚੰਗੀ ਹੈ, SBJ Nirmal ਤੋਂ ਖੁਸ਼ ਹਾਂ।"
2. "{quality_word} ਕੁਆਲਿਟੀ ਦੇ {product} ਵਧੀਆ ਰੇਟ 'ਤੇ। ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹਾਂ।"
3. "ਇੱਥੇ ਸਭ ਤੋਂ ਵਧੀਆ {product} ਮਿਲਦੇ ਹਨ, ਡਿਲੀਵਰੀ ਵੀ {delivery_word}।"
4. "ਸਾਰੇ {product} {quality_word} ਕੁਆਲਿਟੀ ਵਿੱਚ ਸਭ ਤੋਂ ਵਧੀਆ ਕੀਮਤ 'ਤੇ ਮਿਲਦੇ ਹਨ। ਭਰੋਸੇਯੋਗ ਕੰਪਨੀ।"
5. "SBJ Nirmal ਤੋਂ ਵਧੀਆ ਕੁਆਲਿਟੀ ਦੇ {product}।"
6. "{product} ਦੀ ਕੁਆਲਿਟੀ ਚੰਗੀ ਹੈ, ਸਭ ਤੋਂ ਵਧੀਆ ਕੀਮਤ। ਦੁਬਾਰਾ ਆਰਡਰ ਕਰਾਂਗਾ।"
7. "ਭਰੋਸੇਯੋਗ ਕੰਪਨੀ, {quality_word} ਕੁਆਲਿਟੀ ਦੇ ਪ੍ਰੋਡਕਟਸ ਅਤੇ {delivery_word} ਡਿਲੀਵਰੀ।"
8. "SBJ Nirmal Products ਵਧੀਆ {product} ਦੇਣ ਵਿੱਚ ਮਾਹਿਰ ਹੈ। {quality_word} ਕੁਆਲਿਟੀ, ਬਹੁਤ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹਾਂ।"
9. "SBJ Nirmal ਦੇ {product} ਵਰਤੇ — {aspect_word_sentence}। ਡਿਲੀਵਰੀ {delivery_word} ਸੀ।"
10. "{product} ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਸਪਲਾਇਰ, {quality_word} ਕੁਆਲਿਟੀ ਅਸਲੀ ਕੀਮਤ 'ਤੇ।"
11. "SBJ Nirmal ਤੋਂ {product} ਆਰਡਰ ਕੀਤੇ — {quality_word} ਕੁਆਲਿਟੀ, {aspect_word}, ਅਤੇ {delivery_word} ਡਿਲੀਵਰੀ। ਦੁਬਾਰਾ ਆਰਡਰ ਕਰਾਂਗਾ।"
12. "ਮੈਂ ਹਾਲ ਹੀ ਵਿੱਚ SBJ Nirmal ਦੇ {product} ਵਰਤੇ, ਅਤੇ ਉਹਨਾਂ ਦੀ ਕੁਆਲਿਟੀ ਪ੍ਰਤੀ ਵਚਨਬੱਧਤਾ ਸਾਫ਼ ਦਿਖਦੀ ਹੈ। {aspect_word_sentence}, ਅਤੇ ਇਹ {delivery_word} ਪਹੁੰਚਿਆ। ਬਹੁਤ ਸੰਤੁਸ਼ਟ ਹਾਂ।"

## Templates — Telugu (TE)
1. "{product} నాణ్యత బాగుంది, SBJ Nirmal తో సంతోషంగా ఉన్నాను."
2. "{quality_word} నాణ్యత {product} మంచి ధరకు. సిఫార్సు చేస్తున్నాను."
3. "ఇక్కడ ఉత్తమమైన {product} లభిస్తాయి, డెలివరీ కూడా {delivery_word}."
4. "అన్ని {product} {quality_word} నాణ్యతలో ఉత్తమ ధరకు లభిస్తాయి. నమ్మకమైన కంపెనీ."
5. "SBJ Nirmal నుండి మంచి నాణ్యత గల {product}."
6. "{product} నాణ్యత బాగుంది, ఉత్తమ ధర. మళ్ళీ ఆర్డర్ చేస్తాను."
7. "నమ్మకమైన కంపెనీ, {quality_word} నాణ్యత ఉత్పత్తులు మరియు {delivery_word} డెలివరీ."
8. "SBJ Nirmal Products అత్యుత్తమ {product} అందించడంలో నైపుణ్యం కలిగి ఉంది. {quality_word} నాణ్యత, గట్టిగా సిఫార్సు చేస్తున్నాను."
9. "SBJ Nirmal యొక్క {product} ఉపయోగించాను — {aspect_word_sentence}. డెలివరీ {delivery_word}గా ఉంది."
10. "{product} కోసం ఉత్తమ సరఫరాదారు, {quality_word} నాణ్యత నిజమైన ధరకు."
11. "SBJ Nirmal నుండి {product} ఆర్డర్ చేశాను — {quality_word} నాణ్యత, {aspect_word}, మరియు {delivery_word} డెలివరీ. మళ్ళీ ఆర్డర్ చేస్తాను."
12. "నేను ఇటీవల SBJ Nirmal యొక్క {product} ఉపయోగించాను, మరియు నాణ్యత పట్ల వారి నిబద్ధత నిజంగా ప్రతిబింబిస్తుంది. {aspect_word_sentence}, మరియు ఇది {delivery_word} చేరింది. చాలా సంతృప్తిగా ఉన్నాను."

## Templates — Tamil (TA)
1. "{product} தரம் நன்றாக உள்ளது, SBJ Nirmal மீது மகிழ்ச்சி."
2. "{quality_word} தரமான {product} நல்ல விலையில். பரிந்துரைக்கிறேன்."
3. "இங்கு சிறந்த {product} கிடைக்கும், டெலிவரியும் {delivery_word}."
4. "அனைத்து {product} {quality_word} தரத்தில் சிறந்த விலையில் கிடைக்கும். நம்பகமான நிறுவனம்."
5. "SBJ Nirmal இலிருந்து நல்ல தரமான {product}."
6. "{product} தரம் நன்றாக உள்ளது, சிறந்த விலை. மீண்டும் ஆர்டர் செய்வேன்."
7. "நம்பகமான நிறுவனம், {quality_word} தர பொருட்கள் மற்றும் {delivery_word} டெலிவரி."
8. "SBJ Nirmal Products சிறந்த {product} வழங்குவதில் திறமையானது. {quality_word} தரம், மிகவும் பரிந்துரைக்கிறேன்."
9. "SBJ Nirmal இன் {product} பயன்படுத்தினேன் — {aspect_word_sentence}. டெலிவரி {delivery_word} ஆக இருந்தது."
10. "{product} க்கு சிறந்த சப்ளையர், {quality_word} தரம் உண்மையான விலையில்."
11. "SBJ Nirmal இலிருந்து {product} ஆர்டர் செய்தேன் — {quality_word} தரம், {aspect_word}, மற்றும் {delivery_word} டெலிவரி. மீண்டும் ஆர்டர் செய்வேன்."
12. "நான் சமீபத்தில் SBJ Nirmal இன் {product} பயன்படுத்தினேன், மற்றும் தரத்தில் அவர்களின் அர்ப்பணிப்பு உண்மையிலேயே தெரிகிறது. {aspect_word_sentence}, மற்றும் இது {delivery_word} வந்தது. மிகவும் திருப்தியாக உள்ளேன்."

---

## Mini-Sentence Mapping Table (for {aspect_word_sentence} placeholder)

### Group 1: Fitment (Blades, Yoke, PTO Shaft)
| Tap Option | EN | HI | PA | TE | TA |
|---|---|---|---|---|---|
| Perfect fit | The fitment was perfect | फिटमेंट बिल्कुल सही था | ਫਿਟਮੈਂਟ ਬਿਲਕੁਲ ਸਹੀ ਸੀ | ఫిట్మెంట్ ఖచ్చితంగా సరిగ్గా ఉంది | பொருத்தம் சரியாக இருந்தது |
| Needed adjustment | It needed a slight adjustment to fit | फिट करने के लिए थोड़ा एडजस्ट करना पड़ा | ਫਿੱਟ ਕਰਨ ਲਈ ਥੋੜ੍ਹਾ ਐਡਜਸਟ ਕਰਨਾ ਪਿਆ | అమర్చడానికి కొంచెం సర్దుబాటు అవసరమైంది | பொருத்த சிறிது சரிசெய்ய வேண்டியிருந்தது |
| Didn't fit | Unfortunately it didn't fit correctly | दुर्भाग्य से यह सही फिट नहीं हुआ | ਬਦਕਿਸਮਤੀ ਨਾਲ ਇਹ ਸਹੀ ਫਿੱਟ ਨਹੀਂ ਹੋਇਆ | దురదృష్టవశాత్తు ఇది సరిగ్గా అమరలేదు | துரதிர்ஷ்டவசமாக இது சரியாகப் பொருந்தவில்லை |

### Group 2: Load Handling (Gears)
| Tap Option | EN | HI | PA | TE | TA |
|---|---|---|---|---|---|
| Yes | It handled the load perfectly | इसने लोड बिल्कुल सही तरीके से संभाला | ਇਸਨੇ ਲੋਡ ਬਿਲਕੁਲ ਸਹੀ ਢੰਗ ਨਾਲ ਸੰਭਾਲਿਆ | ఇది లోడ్‌ను ఖచ్చితంగా సరిగ్గా నిర్వహించింది | இது சுமையை சரியாகக் கையாண்டது |
| Mostly | It mostly handled the load well | इसने ज़्यादातर लोड अच्छे से संभाला | ਇਸਨੇ ਜ਼ਿਆਦਾਤਰ ਲੋਡ ਵਧੀਆ ਸੰਭਾਲਿਆ | ఇది ఎక్కువగా లోడ్‌ను బాగా నిర్వహించింది | இது பெரும்பாலும் சுமையை நன்கு கையாண்டது |
| No | It struggled with the load | इसे लोड संभालने में दिक्कत हुई | ਇਸਨੂੰ ਲੋਡ ਸੰਭਾਲਣ ਵਿੱਚ ਦਿੱਕਤ ਆਈ | దీనికి లోడ్‌ను నిర్వహించడంలో ఇబ్బంది ఉంది | இது சுமையைக் கையாள்வதில் சிரமப்பட்டது |

### Group 3: Price vs. Quality (Yoke)
| Tap Option | EN | HI | PA | TE | TA |
|---|---|---|---|---|---|
| Great value | It offered great value for the price | कीमत के हिसाब से यह बहुत बढ़िया वैल्यू था | ਕੀਮਤ ਦੇ ਹਿਸਾਬ ਨਾਲ ਇਹ ਬਹੁਤ ਵਧੀਆ ਵੈਲਿਊ ਸੀ | ధర ప్రకారం ఇది అద్భుతమైన విలువను అందించింది | விலைக்கு ஏற்ப இது சிறந்த மதிப்பை வழங்கியது |
| Fair | The pricing was fair for the quality | क्वालिटी के हिसाब से कीमत ठीक-ठाक थी | ਕੁਆਲਿਟੀ ਦੇ ਹਿਸਾਬ ਨਾਲ ਕੀਮਤ ਠੀਕ-ਠਾਕ ਸੀ | నాణ్యత ప్రకారం ధర సాధారణంగా ఉంది | தரத்திற்கு ஏற்ப விலை நியாயமாக இருந்தது |
| Expensive | It felt a bit expensive for what it offers | जो मिला उसके हिसाब से थोड़ा महंगा लगा | ਜੋ ਮਿਲਿਆ ਉਸ ਦੇ ਹਿਸਾਬ ਨਾਲ ਥੋੜ੍ਹਾ ਮਹਿੰਗਾ ਲੱਗਿਆ | లభించిన దాని ప్రకారం కొంచెం ఖరీదైనదిగా అనిపించింది | கிடைத்ததற்கு ஏற்ப சற்று விலை அதிகமாக உணர்ந்தேன் |

### Group 4: Wear/Friction Reduction (Lubrication)
| Tap Option | EN | HI | PA | TE | TA |
|---|---|---|---|---|---|
| Yes, noticeably | It noticeably reduced wear and friction | इसने घिसाव और घर्षण काफी हद तक कम किया | ਇਸਨੇ ਘਸਾਵਟ ਅਤੇ ਰਗੜ ਕਾਫੀ ਹੱਦ ਤੱਕ ਘਟਾਈ | ఇది అరుగుదల మరియు రాపిడిని గణనీయంగా తగ్గించింది | இது தேய்மானம் மற்றும் உராய்வை குறிப்பிடத்தக்க அளவில் குறைத்தது |
| Somewhat | It somewhat reduced wear as expected | इसने उम्मीद के मुताबिक कुछ हद तक घिसाव कम किया | ਇਸਨੇ ਉਮੀਦ ਮੁਤਾਬਕ ਕੁਝ ਹੱਦ ਤੱਕ ਘਸਾਵਟ ਘਟਾਈ | ఇది ఆశించిన విధంగా కొంతవరకు అరుగుదలను తగ్గించింది | இது எதிர்பார்த்தபடி ஓரளவு தேய்மானத்தைக் குறைத்தது |
| Not much | It didn't reduce wear as much as expected | इसने उम्मीद जितना घिसाव कम नहीं किया | ਇਸਨੇ ਉਮੀਦ ਜਿੰਨੀ ਘਸਾਵਟ ਨਹੀਂ ਘਟਾਈ | ఇది ఆశించినంతగా అరుగుదలను తగ్గించలేదు | இது எதிர்பார்த்தளவு தேய்மானத்தைக் குறைக்கவில்லை |

### Group 5: Met Expectations (Other category)
| Tap Option | EN | HI | PA | TE | TA |
|---|---|---|---|---|---|
| Yes | It fully met my expectations | यह मेरी उम्मीदों पर पूरी तरह खरा उतरा | ਇਹ ਮੇਰੀਆਂ ਉਮੀਦਾਂ 'ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਖਰਾ ਉਤਰਿਆ | ఇది నా అంచనాలను పూర్తిగా అందుకుంది | இது என் எதிர்பார்ப்புகளை முழுமையாக பூர்த்தி செய்தது |
| Mostly | It mostly met my expectations | यह ज़्यादातर मेरी उम्मीदों पर खरा उतरा | ਇਹ ਜ਼ਿਆਦਾਤਰ ਮੇਰੀਆਂ ਉਮੀਦਾਂ 'ਤੇ ਖਰਾ ਉਤਰਿਆ | ఇది ఎక్కువగా నా అంచనాలను అందుకుంది | இது பெரும்பாலும் என் எதிர்பார்ப்புகளை பூர்த்தி செய்தது |
| No | It didn't quite meet my expectations | यह मेरी उम्मीदों पर पूरी तरह खरा नहीं उतरा | ਇਹ ਮੇਰੀਆਂ ਉਮੀਦਾਂ 'ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਖਰਾ ਨਹੀਂ ਉਤਰਿਆ | ఇది నా అంచనాలను పూర్తిగా అందుకోలేదు | இது என் எதிர்பார்ப்புகளை முழுமையாக பூர்த்தி செய்யவில்லை |
