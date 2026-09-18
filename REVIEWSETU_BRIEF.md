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
