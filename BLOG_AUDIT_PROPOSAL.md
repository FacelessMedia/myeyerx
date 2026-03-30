# MyEyeRx Blog Post Audit & Improvement Proposal

**Prepared:** June 2025  
**Scope:** All 38 resource articles under `/resources`  
**Goal:** Transform each blog from plain text blocks into visually rich, well-formatted, high-engagement pages comparable to the condition pages.

---

## Global Issues (Apply to ALL Blog Posts)

### Formatting Problems
1. **No visual hierarchy beyond H2/H3** — Most posts are walls of `<p>` and `<ul>` with no visual breaks, callout boxes, info cards, or highlight sections.
2. **No key takeaway / TL;DR sections** — Every post should have a quick-scan summary at the top for users who won't read the full article.
3. **No icons or visual indicators** — Condition pages use Lucide icons beautifully; blog posts use zero icons.
4. **No comparison tables** — Only `ceramic-tint.tsx` has a table. Many other posts would benefit from comparison tables (e.g., tint types, apps, bulbs, sunglasses).
5. **No numbered step cards** — The condition pages have beautiful step-1/2/3 cards. Blog posts with step-by-step processes should use the same pattern.
6. **No stat/highlight callout boxes** — Key statistics (e.g., "80-90% of migraine sufferers experience photophobia") should be in styled callout boxes, not buried in paragraphs.
7. **No FAQ accordion sections** — Several posts answer common questions but use plain text instead of expandable FAQ accordions with JSON-LD schema.
8. **Weak CTAs** — Most posts end with a generic amber callout box. Should have a prominent CTA section matching the condition page style (amber banner with "Start Your Evaluation" button).
9. **No breadcrumb styling** — Blog posts rely on the template breadcrumb but have no category badge/pill like condition pages.
10. **No "Related Articles" sidebar or section** — The template adds related articles, but the in-content cross-linking could be richer.

### Interactive Tool Opportunities (Global)
- **VLT Darkness Slider** — Visual slider showing what 5%, 20%, 35%, 50%, 70% VLT looks like on a car window (reusable across multiple tint articles).
- **State Eligibility Checker** — "Does my state offer medical tint exemptions?" dropdown → answer + link to state page.
- **Cost Calculator** — Select your state → see your price ($225/$250/$350).
- **Condition Matcher** — "Which condition do I have?" symptom-based quiz linking to condition pages.

---

## Category 1: Guides & Education (3 Articles)

### 1. complete-guide-to-window-tint-medical-exemptions
**File:** `complete-guide.tsx` (221 lines)  
**Current State:** Longest article. Good content depth. Has internal links. Structured with H2/H3 sections.  
**Content Depth:** ★★★★☆ — Comprehensive but reads as a wall of text.  
**Internal Linking:** ★★★★☆ — Links to cost guide, how-to-get, states-allow, and condition pages.  
**Formatting:** ★★☆☆☆ — Pure text + lists. No visual elements.

**Proposed Improvements:**
- [ ] Add a **TL;DR summary box** at the top with 4-5 bullet points
- [ ] Add **numbered step cards** (like condition pages) for the "How to Apply" section
- [ ] Add a **state eligibility checker widget** (dropdown → state page link)
- [ ] Add a **qualifying conditions grid** with icons linking to each condition page
- [ ] Convert the FAQ section at the bottom to **accordion with JSON-LD FAQPage schema**
- [ ] Add a **cost comparison table** (MyEyeRx vs. in-person doctor vs. DMV walk-in)
- [ ] Add a **"What's Included" checklist** with green checkmark icons
- [ ] Replace the bottom note box with a **full-width amber CTA banner**
- [ ] Add **stat callout boxes** for key numbers (e.g., "42 states served", "24-48hr turnaround", "$225 starting price")

**Interactive Tool:** ✅ State Eligibility Checker + Cost Calculator

---

### 2. living-with-light-sensitivity
**File:** `living-with-light-sensitivity.tsx` (110 lines)  
**Current State:** Good overview article. Covers home, work, driving, devices. Internal links to related resources.  
**Content Depth:** ★★★☆☆ — Covers breadth well but each section is thin.  
**Internal Linking:** ★★★★★ — Excellent cross-linking to specific guides for each area.  
**Formatting:** ★★☆☆☆ — Text + lists only.

**Proposed Improvements:**
- [ ] Add a **TL;DR box** summarizing 5 key changes
- [ ] Convert each life area (Home, Work, Driving, Devices) into **icon cards** with visual separation
- [ ] Add a **"Quick Wins" highlight section** — top 3 changes that take under 5 minutes
- [ ] Add **stat callout**: "Approximately 1 in 3 Americans experiences some form of light sensitivity"
- [ ] Add a **daily routine timeline graphic** showing when/where light sensitivity hits hardest
- [ ] Upgrade bottom note to **full CTA banner**

**Interactive Tool:** ✅ Light Sensitivity Self-Assessment Quiz (links to relevant sub-guides)

---

### 3. understanding-photophobia
**File:** `understanding-photophobia.tsx` (106 lines)  
**Current State:** Educational article explaining photophobia types, causes, wavelengths.  
**Content Depth:** ★★★★☆ — Good medical depth.  
**Internal Linking:** ★★★★☆ — Links to condition pages and related resources.  
**Formatting:** ★★☆☆☆ — Text-heavy with no visual elements.

**Proposed Improvements:**
- [ ] Add a **TL;DR box** defining photophobia in one sentence + key facts
- [ ] Add a **light wavelength spectrum diagram** showing which wavelengths cause problems (480-520nm blue-green range)
- [ ] Convert the "Two Types" section into a **side-by-side comparison card** (Ocular vs. Neurological)
- [ ] Add a **conditions grid** linking to each condition page
- [ ] Add a **"When to See a Doctor" callout box** with warning signs
- [ ] Upgrade bottom note to **full CTA banner**

**Interactive Tool:** ✅ Wavelength spectrum visual (static SVG showing problematic ranges)

---

## Category 2: Device & Tech Tips (7 Articles)

### 4. iphone-settings-light-sensitivity
**File:** `iphone-settings.tsx` (92 lines)  
**Current State:** Step-by-step iPhone settings guide.  
**Content Depth:** ★★★☆☆ — Good but could include more settings.  
**Internal Linking:** ★★★☆☆ — Links to Android and computer guides.  
**Formatting:** ★★☆☆☆ — Plain text with numbered steps.

**Proposed Improvements:**
- [ ] Add a **"Settings at a Glance" summary table** (Setting → Where to Find → What It Does)
- [ ] Convert each setting into a **styled step card** with iOS icon/emoji
- [ ] Add an **"Ultra-Dim Stack" highlight box** — the combination of settings for maximum dimming
- [ ] Add **before/after brightness comparison** description
- [ ] Add a **"Copy These Shortcuts" section** with Shortcuts app instructions
- [ ] Cross-link to **best-apps** article more prominently

**Interactive Tool:** None needed (settings guide format)

---

### 5. android-settings-light-sensitivity
**File:** `android-settings.tsx` (92 lines)  
**Current State:** Mirror of iPhone article for Android. Covers Dark Theme, Eye Comfort Shield, Extra Dim.  
**Content Depth:** ★★★☆☆ — Good coverage including Samsung-specific features.  
**Internal Linking:** ★★★☆☆ — Links to iPhone and computer guides.  
**Formatting:** ★★☆☆☆ — Same plain text issue.

**Proposed Improvements:**
- [ ] Add a **"Settings at a Glance" summary table**
- [ ] Add a **Samsung vs. Stock Android comparison section**
- [ ] Convert steps into **styled cards** with Android-style icons
- [ ] Add **Bixby/Google Assistant voice commands** for quick toggles
- [ ] Add **"Priority Settings" highlight** — top 3 changes to make first

**Interactive Tool:** None needed

---

### 6. computer-settings-light-sensitivity
**File:** `computer-settings.tsx` (105 lines)  
**Current State:** Windows + Mac settings + third-party apps + monitor tips.  
**Content Depth:** ★★★★☆ — Comprehensive coverage of both OS platforms.  
**Internal Linking:** ★★★☆☆ — Links to apps guide and bias lighting.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **Windows vs. Mac comparison table** for equivalent settings
- [ ] Add a **third-party app comparison table** (f.lux vs. Iris vs. built-in)
- [ ] Convert monitor positioning tips into a **desk setup diagram** description
- [ ] Add a **"5-Minute Setup" quick-start box** at the top
- [ ] Add browser extension recommendations as a **styled list with ratings**

**Interactive Tool:** None needed

---

### 7. best-apps-light-sensitivity
**File:** `best-apps.tsx` (93 lines)  
**Current State:** Lists recommended apps by category. Covers filters, trackers, extensions, reminders.  
**Content Depth:** ★★★☆☆ — Good breadth but shallow per-app detail.  
**Internal Linking:** ★★★☆☆ — Links to device settings guides and 20-20-20 rule.  
**Formatting:** ★★☆☆☆ — Plain lists.

**Proposed Improvements:**
- [ ] Convert to **app cards** with: Name, Platform (iOS/Android/Desktop icons), Free/Paid badge, 1-line description, star rating
- [ ] Add a **"Best For" tag** on each app (e.g., "Best for Migraines", "Best for Screen Time")
- [ ] Add a **comparison table**: App → Platform → Price → Best Feature
- [ ] Group apps with **tabbed sections** or clear visual category dividers
- [ ] Add **download links** (App Store / Google Play)

**Interactive Tool:** ✅ App recommendation quiz ("What's your main issue?" → filtered app list)

---

### 8. 20-20-20-rule-light-sensitivity
**File:** `twenty-twenty-twenty.tsx` (64 lines)  
**Current State:** Short article explaining the 20-20-20 rule. Concise and useful.  
**Content Depth:** ★★☆☆☆ — Very short. Could be expanded with research citations.  
**Internal Linking:** ★★☆☆☆ — Minimal links.  
**Formatting:** ★★☆☆☆ — Text only.

**Proposed Improvements:**
- [ ] Add a **large visual "20-20-20" hero graphic/icon section** at the top
- [ ] Add a **"How to Remember" tips section** with styled cards
- [ ] Add a **timer/reminder CTA** — link to app that provides 20-20-20 reminders
- [ ] Add **research backing section** with study citations
- [ ] Expand content to include **other eye exercise techniques** (palming, figure-8s)
- [ ] Cross-link to **best-apps** and **computer-settings** articles

**Interactive Tool:** ✅ Simple 20-20-20 countdown timer widget (JavaScript)

---

### 9. blue-light-screen-protectors
**File:** `blue-light-protectors.tsx` (60 lines)  
**Current State:** Short review of physical blue light filters. Covers brands, effectiveness.  
**Content Depth:** ★★☆☆☆ — Brief. Needs more product detail and research.  
**Internal Linking:** ★★☆☆☆ — Links to FL-41 and apps guides.  
**Formatting:** ★★☆☆☆ — Text + basic list.

**Proposed Improvements:**
- [ ] Add a **product comparison table** (Ocushield vs. EyeJust vs. Matte vs. Glossy)
- [ ] Add **"Do They Actually Work?" verdict box** with research summary
- [ ] Add a **physical filter vs. software filter comparison** table
- [ ] Add **pros/cons** styled as green ✓ / red ✗ lists
- [ ] Expand with more product recommendations and price ranges

**Interactive Tool:** None needed

---

### 10. e-ink-vs-lcd-sensitive-eyes
**File:** `eink-vs-lcd.tsx` (72 lines)  
**Current State:** Compares e-ink and LCD for light sensitivity. Good educational content.  
**Content Depth:** ★★★☆☆ — Decent comparison but could go deeper on devices.  
**Internal Linking:** ★★☆☆☆ — Minimal links.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add an **E-ink vs LCD comparison table** (Backlight, Blue Light, Flicker, Battery, Use Case)
- [ ] Add **recommended device cards** (Kindle Paperwhite, BOOX Note Air, reMarkable) with price/features
- [ ] Add a **"Best For" decision guide** — what type of reader should choose what
- [ ] Add **pros/cons** styled sections for each technology
- [ ] Cross-link to **computer-settings** and **best-apps** articles

**Interactive Tool:** None needed

---

## Category 3: Home & Lifestyle (5 Articles)

### 11. light-proof-your-home
**File:** `light-proof-home.tsx` (100 lines)  
**Current State:** Room-by-room guide. Covers bedroom, living room, kitchen, bathroom, office.  
**Content Depth:** ★★★★☆ — Comprehensive room coverage.  
**Internal Linking:** ★★★★☆ — Links to bulbs, smart lighting, curtains, computer settings.  
**Formatting:** ★★☆☆☆ — Text + lists per room.

**Proposed Improvements:**
- [ ] Convert each room into a **visual card section** with room icons
- [ ] Add a **"Priority Changes" checklist** — top 5 changes sorted by impact
- [ ] Add a **budget breakdown** (Budget $50, Mid $200, Premium $500+ setups)
- [ ] Add a **shopping checklist** that readers can reference
- [ ] Add **before/after scenario descriptions** for each room
- [ ] Add a **smart home integration section** linking to smart-home-lighting

**Interactive Tool:** ✅ Room-by-room budget calculator (select rooms → get product recommendations + total cost)

---

### 12. best-light-bulbs-photosensitivity
**File:** `best-light-bulbs.tsx` (79 lines)  
**Current State:** Explains color temperature, recommends warm LEDs, warns against fluorescents.  
**Content Depth:** ★★★☆☆ — Good basics but needs product specifics.  
**Internal Linking:** ★★★☆☆ — Links to fluorescent lights and smart home articles.  
**Formatting:** ★★☆☆☆ — Text + lists.

**Proposed Improvements:**
- [ ] Add a **color temperature visual scale** (1800K → 6500K with descriptions and recommendations)
- [ ] Add a **product recommendation table** (Brand, Kelvin, Lumens, Price, Where to Buy)
- [ ] Add a **"Bulbs to Avoid" red warning section**
- [ ] Add **room-by-room Kelvin recommendations** (bedroom: 2200K, kitchen: 2700K, office: 3000K)
- [ ] Add a **CRI (Color Rendering Index) explanation** section

**Interactive Tool:** ✅ Color temperature slider showing warmth/coolness visual + recommendation

---

### 13. smart-home-lighting-light-sensitivity
**File:** `smart-home-lighting.tsx` (87 lines)  
**Current State:** Covers dimmers, smart bulbs, automation, voice control.  
**Content Depth:** ★★★☆☆ — Good overview but needs more product comparisons.  
**Internal Linking:** ★★★☆☆ — Links to bulbs and light-proof home guides.  
**Formatting:** ★★☆☆☆ — Text + lists.

**Proposed Improvements:**
- [ ] Add a **smart bulb comparison table** (Philips Hue vs. LIFX vs. Wyze vs. Sengled)
- [ ] Add **example automation routines** as styled step cards (Morning, Midday, Evening, Migraine Mode)
- [ ] Add a **starter kit recommendation box** at different price points
- [ ] Add **voice command examples** in styled code-like blocks
- [ ] Add a **compatibility chart** (Alexa, Google Home, HomeKit, SmartThings)

**Interactive Tool:** None needed

---

### 14. blackout-curtains-window-film-guide
**File:** `blackout-curtains.tsx` (81 lines)  
**Current State:** Covers blackout curtains, sheer curtains, and residential window film.  
**Content Depth:** ★★★☆☆ — Good comparison of options.  
**Internal Linking:** ★★☆☆☆ — Links to light-proof home guide.  
**Formatting:** ★★☆☆☆ — Text + basic lists.

**Proposed Improvements:**
- [ ] Add a **comparison table** (Blackout vs. Sheer vs. Window Film: Light Blocking, UV Blocking, Privacy, Price)
- [ ] Add **product recommendations** with price ranges per category
- [ ] Add a **"Which Should You Choose?" decision flowchart** description
- [ ] Add **room-by-room recommendations** (bedroom: blackout, living room: film + sheer, etc.)
- [ ] Add **installation tips** section with common mistakes

**Interactive Tool:** None needed

---

### 15. bias-lighting-reduce-eye-strain
**File:** `bias-lighting.tsx` (56 lines)  
**Current State:** Short article on bias lighting behind monitors/TVs. Good concept explanation.  
**Content Depth:** ★★☆☆☆ — Very short. Needs expansion.  
**Internal Linking:** ★☆☆☆☆ — Almost no internal links.  
**Formatting:** ★★☆☆☆ — Brief text blocks.

**Proposed Improvements:**
- [ ] Add a **"What Is Bias Lighting" visual explanation** — description of the contrast difference
- [ ] Add a **product recommendation section** (LED strip brands, monitor light bars like BenQ ScreenBar)
- [ ] Add **setup instructions as numbered step cards**
- [ ] Add a **"Common Mistakes" warning section**
- [ ] Add **color temperature and brightness guidelines** for bias lighting
- [ ] Cross-link to **computer-settings**, **best-light-bulbs**, **smart-home** articles
- [ ] Expand overall content — this is too thin at 56 lines

**Interactive Tool:** None needed

---

## Category 4: Workplace & Accommodations (4 Articles)

### 16. workplace-accommodations-light-sensitivity
**File:** `workplace-accommodations.tsx` (77 lines)  
**Current State:** Covers ADA rights, types of accommodations, how to request them.  
**Content Depth:** ★★★☆☆ — Good legal overview but could be more actionable.  
**Internal Linking:** ★★★☆☆ — Links to FL-41, fluorescent lights, remote work.  
**Formatting:** ★★☆☆☆ — Text + lists.

**Proposed Improvements:**
- [ ] Add a **"Your Rights" highlight box** with key ADA provisions
- [ ] Add a **sample accommodation request letter template** (or description of what to include)
- [ ] Convert accommodations list into **styled cards** (Accommodation, Cost, Difficulty, Impact)
- [ ] Add a **"Quick Wins You Can Do Today" section** (no employer approval needed)
- [ ] Add a **flowchart description** for the accommodation request process
- [ ] Add a **"What If They Say No?" section** with escalation steps

**Interactive Tool:** ✅ Accommodation request letter generator (fill in condition → generates template)

---

### 17. fl-41-glasses-complete-guide
**File:** `fl41-glasses.tsx` (68 lines)  
**Current State:** Explains FL-41 lenses, benefits, brands, indoor vs outdoor use.  
**Content Depth:** ★★★☆☆ — Good overview but thin on brand comparisons.  
**Internal Linking:** ★★★☆☆ — Links to migraines, fluorescent lights, sunglasses.  
**Formatting:** ★★☆☆☆ — Text + basic lists.

**Proposed Improvements:**
- [ ] Add a **brand comparison table** (TheraSpecs vs. Axon Optics vs. Zenni FL-41: Price, Rx Available, Frame Options, Tint Darkness)
- [ ] Add a **"FL-41 vs Blue Light Glasses vs Sunglasses" comparison table**
- [ ] Add a **"When to Wear What" guide** (Indoor FL-41, Outdoor polarized, Driving combo)
- [ ] Add a **warning box**: "Why wearing sunglasses indoors makes things WORSE"
- [ ] Add **research citations** section with study summaries
- [ ] Expand with fit guide and frame selection tips

**Interactive Tool:** None needed

---

### 18. fluorescent-lights-at-work
**File:** `fluorescent-lights.tsx` (75 lines)  
**Current State:** Why fluorescents are problematic + solutions (FL-41, covers, accommodations).  
**Content Depth:** ★★★☆☆ — Good problem explanation.  
**Internal Linking:** ★★★★☆ — Good links to FL-41, workplace, and bulb guides.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **"Why Fluorescents Are the Worst" infographic-style section** (flicker rate, color temp, UV emission stats)
- [ ] Add a **solutions comparison table** (Solution, Cost, Effectiveness, Difficulty to Implement)
- [ ] Add **product recommendations** for fluorescent light covers (NaturaLux, Cozy Shades)
- [ ] Add a **"Talk to Your Manager" script/template**
- [ ] Add a **quick-fix priority list** (what to do first, second, third)

**Interactive Tool:** None needed

---

### 19. remote-work-light-sensitivity
**File:** `remote-work.tsx` (71 lines)  
**Current State:** Home office setup tips for light sensitivity.  
**Content Depth:** ★★☆☆☆ — Short. Overlaps with other articles.  
**Internal Linking:** ★★★☆☆ — Links to computer settings, light-proof home.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add an **"Ideal Home Office Setup" visual layout** description with labeled elements
- [ ] Add a **time-of-day lighting schedule** (morning, afternoon, evening settings)
- [ ] Add a **"Work Setup Checklist"** with checkboxes
- [ ] Add a **budget tier section** (Free changes, Under $50, Under $200, Premium $500+)
- [ ] Cross-link more aggressively to smart-home, bulbs, curtains, computer-settings articles
- [ ] Expand content — too thin

**Interactive Tool:** None needed

---

## Category 5: Migraines & Light (5 Articles)

### 20. migraines-and-light-sensitivity
**File:** `migraines-and-light.tsx` (73 lines)  
**Current State:** Explains the light-migraine connection, types of triggers, management strategies.  
**Content Depth:** ★★★★☆ — Good neurological explanation.  
**Internal Linking:** ★★★☆☆ — Links to FL-41, trigger tracking, green light therapy.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **stat callout box**: "80-90% of migraine sufferers experience photophobia"
- [ ] Add a **wavelength diagram** showing the 480-520nm problematic range
- [ ] Add a **"During an Attack vs. Between Attacks" comparison section** as styled cards
- [ ] Add the **green light exception** as a highlighted callout with link to green light therapy article
- [ ] Add a **"Migraine + Light Management Stack"** — layered approach visual (tint + glasses + screens + home)
- [ ] Add FAQ accordion section

**Interactive Tool:** ✅ Migraine light trigger severity self-assessment

---

### 21. track-migraine-triggers
**File:** `track-migraine-triggers.tsx` (79 lines)  
**Current State:** How to track triggers, apps, patterns to look for.  
**Content Depth:** ★★★☆☆ — Good practical advice.  
**Internal Linking:** ★★★☆☆ — Links to trigger stacking and apps guides.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add an **app comparison table** (Migraine Buddy vs. Migraine Monitor vs. N1-Headache)
- [ ] Add a **sample tracking journal template** visual
- [ ] Add **"Patterns to Look For" as styled cards** with icons (Time patterns, Weather patterns, Food patterns, Light patterns)
- [ ] Add a **"24-Hour Lookback Method" step-by-step guide** as numbered cards
- [ ] Add a **"What to Do With Your Data" section** — how to share with doctor

**Interactive Tool:** ✅ Simple migraine trigger log template (printable/downloadable)

---

### 22. migraine-trigger-stacking
**File:** `migraine-trigger-stacking.tsx` (70 lines)  
**Current State:** Explains trigger stacking concept, categories, management strategies.  
**Content Depth:** ★★★☆☆ — Good concept explanation.  
**Internal Linking:** ★★★☆☆ — Links to tracking and light management articles.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **"trigger bucket" visual metaphor** — styled diagram showing how triggers stack
- [ ] Add trigger categories as **icon cards** (Sleep, Hydration, Food, Stress, Weather, Screens, Hormones)
- [ ] Add a **"High Risk Day Checklist"** — warning signs that your bucket is filling
- [ ] Add a **"Reduce Your Load" actionable tips** as priority-ranked cards
- [ ] Add a **risk assessment** section with scenario examples

**Interactive Tool:** ✅ Trigger stacking calculator — check which triggers are active today → risk level indicator

---

### 23. green-light-therapy-migraines
**File:** `green-light-therapy.tsx` (73 lines)  
**Current State:** Research overview, protocol, limitations.  
**Content Depth:** ★★★☆☆ — Good research summary.  
**Internal Linking:** ★★☆☆☆ — Limited cross-links.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **research summary callout box** (Harvard study key findings)
- [ ] Add a **therapy protocol as step cards** (Duration, Frequency, What to expect)
- [ ] Add a **product recommendation section** (Allay Lamp, green LED bulb options, price comparison)
- [ ] Add a **"What to Expect" timeline** — week 1, week 4, week 8+ outcomes
- [ ] Add a **limitations/caveats warning section**
- [ ] Cross-link to migraines-and-light, FL-41, and best-bulbs articles

**Interactive Tool:** None needed

---

### 24. migraine-emergency-kit
**File:** `migraine-emergency-kit.tsx` (69 lines)  
**Current State:** Lists items for home, work, and car kits.  
**Content Depth:** ★★★☆☆ — Good practical content.  
**Internal Linking:** ★★★☆☆ — Links to FL-41, sunglasses, trigger tracking.  
**Formatting:** ★★☆☆☆ — Text + lists.

**Proposed Improvements:**
- [ ] Convert into **3 visual kit cards** (Home Kit, Work Kit, Car Kit) with icons
- [ ] Add **product links/recommendations** for each item
- [ ] Add a **"When an Attack Starts" emergency action plan** as numbered steps
- [ ] Add a **printable/downloadable checklist** concept
- [ ] Add a **"Digital Preparedness" section** — phone shortcuts, emergency contacts, doctor info
- [ ] Add estimated **total kit cost** per location

**Interactive Tool:** ✅ Interactive kit builder — check items you have, see what's missing

---

## Category 6: Driving & Window Tint (13 Articles)

### 25. how-to-get-tint-exemption-online
**File:** `how-to-get.tsx` (105 lines)  
**Current State:** Step-by-step process walkthrough. Key conversion page.  
**Content Depth:** ★★★☆☆ — Clear process but could be more detailed.  
**Internal Linking:** ★★★☆☆ — Links to complete guide, cost, states.  
**Formatting:** ★★☆☆☆ — Text + numbered list.

**Proposed Improvements:**
- [ ] Add **numbered step cards** matching condition page design (Step 1/2/3 with icons)
- [ ] Add a **"What You'll Need" checklist** before starting
- [ ] Add a **timeline visual** (Apply → Review → Certificate in 24-48hrs)
- [ ] Add a **state selector** → shows state-specific notes + price
- [ ] Add **trust indicators** (HIPAA badge, physician credentials, review count)
- [ ] This is a high-conversion page — needs the **strongest CTA treatment**

**Interactive Tool:** ✅ State selector with price display + direct "Start Now" button

---

### 26. states-that-allow-window-tint-exemptions
**File:** `states-allow.tsx` (96 lines)  
**Content Depth:** ★★★★☆ — Good state-by-state coverage.  
**Internal Linking:** ★★★★★ — Links to every state exemption page.  
**Formatting:** ★★☆☆☆ — Text + state list.

**Proposed Improvements:**
- [ ] Add an **interactive US map** colored by exemption status (states served = amber, not served = gray)
- [ ] Add a **state search/filter** at the top
- [ ] Convert state list into a **responsive table/grid** (State, Served, Price, Link)
- [ ] Add a **"States Coming Soon" section**
- [ ] Add state count stat callout ("42 states currently served")

**Interactive Tool:** ✅ Interactive US map with clickable states → links to state pages

---

### 27. window-tint-exemption-cost
**File:** `cost-guide.tsx` (102 lines)  
**Content Depth:** ★★★☆☆ — Good price breakdown.  
**Internal Linking:** ★★★☆☆ — Links to how-to-get and complete guide.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **pricing tier table** ($225 / $250 / $350 with state lists per tier)
- [ ] Add a **"What's Included" vs "What's NOT Included" comparison** with ✓/✗ icons
- [ ] Add a **cost comparison table** (MyEyeRx vs. In-Person Doctor vs. DMV + Doctor combo)
- [ ] Add a **payment methods section** with icons
- [ ] Add a **"Is It Worth It?" ROI section** (cost of tint tickets vs. exemption cost)
- [ ] Add **state price lookup** — select state → see price

**Interactive Tool:** ✅ Cost calculator — select state → see price + what's included

---

### 28. best-sunglasses-driving-light-sensitivity
**File:** `best-sunglasses-driving.tsx` (66 lines)  
**Content Depth:** ★★★☆☆ — Good features overview.  
**Internal Linking:** ★★☆☆☆ — Links to night driving and FL-41.  
**Formatting:** ★★☆☆☆ — Text + lists.

**Proposed Improvements:**
- [ ] Add a **sunglasses feature comparison table** (Polarized, Wraparound, Gradient, Photochromic)
- [ ] Add a **"What to Look For" vs "What to Avoid" dual columns** with ✓/✗
- [ ] Add **brand recommendations** with price ranges
- [ ] Add a **lens color guide** (Gray vs. Amber vs. Green — when each is best)
- [ ] Add a **"Sunglasses + Window Tint" combination guide**

**Interactive Tool:** None needed

---

### 29. night-driving-light-sensitivity
**File:** `night-driving.tsx` (75 lines)  
**Content Depth:** ★★★☆☆ — Good coverage of night driving challenges.  
**Internal Linking:** ★★★☆☆ — Links to sunglasses, vehicle accessories, FL-41.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **"Night Driving Challenges" section** as icon cards (Oncoming headlights, Streetlights, Wet roads, Dashboard glare)
- [ ] Add a **solutions comparison table** (Solution, Cost, Effectiveness)
- [ ] Add a **"Quick Fixes" priority list** — what to do first
- [ ] Add a **windshield maintenance checklist**
- [ ] Add **auto-dimming mirror explanation** with product recommendation

**Interactive Tool:** None needed

---

### 30. vehicle-accessories-photosensitive-drivers
**File:** `vehicle-accessories.tsx` (74 lines)  
**Content Depth:** ★★★☆☆ — Good product overview.  
**Internal Linking:** ★★★☆☆ — Links to sunglasses, night driving, tint types.  
**Formatting:** ★★☆☆☆ — Text + lists.

**Proposed Improvements:**
- [ ] Convert to **product cards** with: Name, Price Range, Effectiveness Rating, Where to Buy
- [ ] Add a **"Must-Have vs Nice-to-Have" tier list**
- [ ] Add a **total kit cost estimate** (budget vs. premium)
- [ ] Add **installation difficulty ratings** per accessory
- [ ] Add a **"Works Best With Window Tint" combination section**

**Interactive Tool:** None needed

---

### 31. window-tint-types-explained
**File:** `window-tint-types.tsx` (98 lines)  
**Content Depth:** ★★★★☆ — Excellent coverage of all tint types.  
**Internal Linking:** ★★★★☆ — Links to ceramic tint, questions-installer.  
**Formatting:** ★★★☆☆ — Has lists per type, slightly better than average.

**Proposed Improvements:**
- [ ] Add a **comprehensive comparison table** (all types side by side: UV, Heat, Appearance, Durability, Price, Signal)
- [ ] Add a **"Which Type for Your Condition?" recommendation guide**
- [ ] Add **visual darkness examples** per type
- [ ] Add a **"Bottom Line" recommendation box** highlighted for medical use
- [ ] Add a **cost-per-year analysis** (factoring in replacement frequency)

**Interactive Tool:** ✅ VLT darkness slider showing visual difference between tint levels

---

### 32. understanding-vlt-window-tint
**File:** `understanding-vlt.tsx` (80 lines)  
**Content Depth:** ★★★★☆ — Excellent technical explanation.  
**Internal Linking:** ★★★★☆ — Links to state laws, medical exemption, ceramic tint, darker-tint myth.  
**Formatting:** ★★★☆☆ — Better than most; has good structure.

**Proposed Improvements:**
- [ ] Add a **VLT visual scale** showing 5% → 70% darkness on a car window image
- [ ] Add a **VLT calculator** (factory glass VLT × film VLT = total VLT)
- [ ] Add a **"What VLT for Your Condition?" recommendation section** as styled cards
- [ ] Add a **state VLT requirements quick-lookup** (select state → see limits)
- [ ] Add a **VLT measurement explanation** with tint meter description

**Interactive Tool:** ✅ VLT calculator (input factory glass % + film % → total VLT) + Visual darkness slider

---

### 33. ceramic-window-tint-medical-use
**File:** `ceramic-tint.tsx` (90 lines)  
**Current State:** Best-formatted article currently. Has a comparison table. Good content.  
**Content Depth:** ★★★★☆ — Excellent. Comparison table is strong.  
**Internal Linking:** ★★★☆☆ — Links to complete guide, questions-installer.  
**Formatting:** ★★★★☆ — Only article with a proper table. Best of the bunch.

**Proposed Improvements:**
- [ ] Add a **TL;DR box** at top
- [ ] Enhance table styling with **color coding** (green for best values)
- [ ] Add **brand recommendation cards** with more detail per brand
- [ ] Add a **"ROI Over Time" section** showing cost-per-year vs. other types
- [ ] Add a **"Finding an Installer" CTA** linking to questions-installer
- [ ] This is the formatting benchmark — other articles should aspire to this level

**Interactive Tool:** None needed (table is already the key visual)

---

### 34. darker-tint-not-more-uv-protection
**File:** `darker-tint-myth.tsx` (64 lines)  
**Content Depth:** ★★★☆☆ — Good myth-busting content.  
**Internal Linking:** ★★★★☆ — Good links to ceramic tint, VLT, tint types, installer questions.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **"Myth vs Reality" styled callout** at the top (big red ✗ for myth, green ✓ for reality)
- [ ] Add a **side-by-side comparison** (5% VLT dyed film UV rejection vs. 50% VLT ceramic UV rejection)
- [ ] Add a **visual diagram** showing VLT vs UV as separate axes
- [ ] Add an **"Ask Your Installer" checklist** as styled cards
- [ ] Add a **bottom-line recommendation box**

**Interactive Tool:** None needed

---

### 35. questions-to-ask-tint-installer
**File:** `questions-installer.tsx` (88 lines)  
**Content Depth:** ★★★★☆ — Excellent practical content. 10 questions with explanations.  
**Internal Linking:** ★★★☆☆ — Links to ceramic tint and complete guide.  
**Formatting:** ★★★☆☆ — Has H3 numbered questions (decent structure).

**Proposed Improvements:**
- [ ] Convert questions into **styled accordion/cards** with question number badges
- [ ] Add a **"Red Flags" warning section** as a styled danger box with red accents
- [ ] Add a **"After Installation" checklist** as styled cards
- [ ] Add a **printable installer checklist** concept (bring to the shop)
- [ ] Add a **"How to Find Installers" section** (Google Maps tips, Yelp, manufacturer locators)

**Interactive Tool:** ✅ Printable/downloadable installer question checklist

---

### 36. pulled-over-tinted-windows
**File:** `pulled-over.tsx` (70 lines)  
**Content Depth:** ★★★★☆ — Excellent practical advice.  
**Internal Linking:** ★★★☆☆ — Links to complete guide, traveling between states.  
**Formatting:** ★★☆☆☆ — Text + numbered lists.

**Proposed Improvements:**
- [ ] Add a **"Be Prepared" checklist** as a styled card section
- [ ] Convert "During the Stop" steps into **visual step cards** with icons
- [ ] Add a **"What the Officer Checks" section** as a styled checklist
- [ ] Add a **"If You Get a Citation" action plan** as numbered cards
- [ ] Add a **"Script" section** — exact words to say during a stop
- [ ] Add a prominent **"Don't Have an Exemption Yet?" CTA**

**Interactive Tool:** None needed

---

### 37. traveling-between-states-tint-exemption
**File:** `traveling-states.tsx` (70 lines)  
**Content Depth:** ★★★☆☆ — Good overview of interstate issues.  
**Internal Linking:** ★★★★☆ — Links to state laws, pulled-over guide, sunglasses, vehicle accessories.  
**Formatting:** ★★☆☆☆ — Text blocks.

**Proposed Improvements:**
- [ ] Add a **state reciprocity table** or map (which states accept out-of-state exemptions)
- [ ] Add a **"Road Trip Checklist"** as styled cards
- [ ] Add a **"Three Categories of States"** as color-coded cards (green/yellow/red)
- [ ] Add a **"Multi-State Exemption" CTA** — get exemptions in multiple states through MyEyeRx
- [ ] Expand with more specific state data as it becomes available

**Interactive Tool:** ✅ Road trip planner — enter start/end state → see which states you'll pass through + their tint laws

---

### 38. medications-that-cause-light-sensitivity
**File:** `medications.tsx` (93 lines)  
**Content Depth:** ★★★★☆ — Excellent medical content. Comprehensive drug list.  
**Internal Linking:** ★★★★☆ — Links to sunglasses, FL-41, complete guide, light-proof home, workplace, computer settings.  
**Formatting:** ★★☆☆☆ — Text + categorized lists.

**Proposed Improvements:**
- [ ] Add a **searchable medication lookup** (type drug name → see if it causes photosensitivity)
- [ ] Convert drug categories into **styled cards** with medication class icons
- [ ] Add a **"What to Do" action plan** as numbered step cards
- [ ] Add a **"Does This Qualify for a Tint Exemption?" prominent YES callout**
- [ ] Add a **phototoxic vs photoallergic explanation** as a comparison card
- [ ] Add the **6-step action plan** as visual numbered cards

**Interactive Tool:** ✅ Medication photosensitivity checker (search/select medication → yes/no + severity)

---

## Priority Ranking for Implementation

### Tier 1 — High-Impact Conversion Pages (Do First)
1. **complete-guide** — Flagship article. Needs the most polish.
2. **how-to-get** — Direct conversion funnel. Needs state selector + strong CTAs.
3. **cost-guide** — Price-sensitive visitors land here. Needs pricing table + calculator.
4. **states-allow** — High traffic. Needs interactive map + search.

### Tier 2 — High-Traffic Educational Content
5. **understanding-vlt** — VLT calculator would be a unique tool.
6. **window-tint-types** — Comparison table + VLT slider.
7. **ceramic-tint** — Already best-formatted. Quick polish.
8. **medications** — Medication checker would be unique and high-value.
9. **migraines-and-light** — Key condition-specific content.

### Tier 3 — Supporting Content
10. **living-with-light-sensitivity** — Hub article linking to everything else.
11. **fl-41-glasses** — Brand comparison table.
12. **workplace-accommodations** — Letter generator tool.
13. **pulled-over** — Practical and frequently searched.
14. **light-proof-home** — Room-by-room guides with budget tiers.

### Tier 4 — Device & Lifestyle Guides
15-24. Remaining device settings, apps, home lighting, migraine toolkit articles.

### Tier 5 — Shorter Support Articles
25-38. Bias lighting, blue light protectors, e-ink, remote work, etc.

---

## Global Template Changes Needed

### For All Articles:
1. **TL;DR summary box component** — Reusable amber/yellow box at top of each article
2. **Stat callout box component** — Large number + description (e.g., "99% UV blocked")
3. **Step card component** — Numbered cards with icons (reuse from condition pages)
4. **Comparison table component** — Styled, responsive table with color coding
5. **FAQ accordion component** — With JSON-LD FAQPage schema injection
6. **Full-width CTA banner component** — Amber banner with button (reuse from condition pages)
7. **Product card component** — Name, image placeholder, price, rating, link
8. **Warning/Info callout component** — Red for warnings, blue for info, green for tips
9. **Checklist component** — Green checkmarks for included items, styled list

---

## Condition Page CTA Updates (Separate Task)

### Current State:
- 3 CTA buttons on each condition page link to `/` (homepage)
- Button text: "Get Evaluated Now", "Start Your Evaluation", "Start Your Evaluation — Starting at $225"

### Proposed Change:
- Replace `href="/"` with a state-aware flow
- Button text: "Apply for Exemption in [State Dropdown] for [Condition Name]"
- State dropdown populated from `STATES.filter(s => s.served)`
- On selection, route to `/{state-slug}-window-tint-medical-exemption`
- Show price dynamically based on selected state

---

## Next Steps

1. Review this proposal together, article by article
2. Build reusable formatting components (TL;DR box, stat callout, step cards, etc.)
3. Apply formatting improvements to Tier 1 articles first
4. Build interactive tools for highest-impact pages
5. Update condition page CTAs
6. Deploy and verify each batch of changes
