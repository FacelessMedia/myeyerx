# MyEyeRx SEO Recovery Master Plan

**Goal**: Recover to ~29,000 ETV from current ~3,270 ETV
**Realistic target**: 10,000-15,000 ETV within 6-12 months (code + off-site work)
**Started**: March 28, 2026

Legend: 🤖 = Cascade | 👤 = Tory | 🤝 = Both

---

## Phase 1: Critical Bug Fixes (🤖 Cascade)

- [x] 1.1 Fix $79 pricing on FAQ page → dynamic "Starting at $225"
- [x] 1.2 Fix $79 pricing on contact page → "Starting at $225"
- [x] 1.3 Convert FAQ page from client-side to server-side rendering (Google can't crawl it currently)
- [x] 1.4 Copy logo to `/public/logo.png` and fix schema reference
- [x] 1.5 Fix "All 50 U.S. States" → "42+ States" on contact page
- [x] 1.6 Add "Medical" to homepage H1: "Get Your **Medical** Window Tint Exemption Online"

## Phase 2: Navigation & Internal Linking (🤖 Cascade)

- [x] 2.1 Add Conditions, Tint Laws, Contact to header navigation
- [x] 2.2 Rebuild footer with structured link columns (top states, conditions, company, legal)

## Phase 3: Analytics (🤝 Both)

- [x] 3.1 🤖 Add GA4 tracking script (G-NFRXL0YBYG) to layout
- [ ] 3.2 👤 Verify GA4 is receiving data → [Instructions](./human-to-do/ga4-verify-tracking.md)

## Phase 4: Law Page Strategy (🤖 Cascade)

- [x] 4.1 Update law pages to link to windowtintlaws.us for detailed info
- [x] 4.2 Add FAQPage schema to law pages
- [x] 4.3 Keep law pages as lightweight funnels → exemption pages

## Phase 5: Blog Infrastructure & Pillar Content (🤖 Cascade)

- [x] 5.1 Create `/resources/[slug]` dynamic route
- [x] 5.2 Create article data structure in `src/data/articles.ts`
- [x] 5.3 Build pillar article: "Complete Guide to Window Tint Medical Exemptions" (5,000+ words)
- [x] 5.4 Build article: "How to Get a Tint Exemption Online"
- [x] 5.5 Build article: "States That Allow Window Tint Medical Exemptions"
- [x] 5.6 Build article: "Window Tint Exemption Cost: What to Expect"
- [x] 5.7 Fix resources hub to link to actual articles
- [x] 5.8 Add OG image meta tags to all templates

## Phase 6: Deploy & Verify (🤝 Both)

- [x] 6.1 🤖 Commit, push to GitHub, deploy to Vercel
- [ ] 6.2 👤 Google Search Console tasks → [Instructions](./human-to-do/gsc-post-deploy.md)

---

## Phase 7: Google Business Profile Overhaul (👤 Tory)

**Current issues found**: Wrong business name spacing, wrong phone number, wrong prices, 57/300 char service descriptions, no cover photo, no posts, no opening date.

- [ ] 7.1 Fix business name: "My Eye Rx" → "MyEyeRx" → [Instructions](./human-to-do/gbp-optimization.md)
- [ ] 7.2 Fix phone number: (734) 338-8453 → (734) 644-1804 (must match website)
- [ ] 7.3 Update all service prices to match website ($225/$250/$350)
- [ ] 7.4 Rewrite all service descriptions (280+ chars, keyword-rich) → [Copy-paste text provided](./human-to-do/gbp-optimization.md)
- [ ] 7.5 Add Products in addition to Services for double visibility
- [ ] 7.6 Add cover photo + 10-15 additional photos
- [ ] 7.7 Update business description with keywords
- [ ] 7.8 Add opening date
- [ ] 7.9 Enable chat
- [ ] 7.10 Add secondary categories (Optometrist, Telehealth service)
- [ ] 7.11 Start weekly GBP posts → [Instructions](./human-to-do/gbp-optimization.md)

## Phase 8: Domain Strategy (👤 Tory)

- [ ] 8.1 Check DR of windowtintlaws.us and tintlaws.com → [Instructions](./human-to-do/domain-strategy.md)
- [ ] 8.2 Decide: consolidate to one domain or keep separate
- [ ] 8.3 If consolidating: set up 301 redirects from weaker domain to stronger
- [ ] 8.4 Cross-link between myeyerx.net and windowtintlaws.us

## Phase 9: Review & Reputation Building (👤 Tory)

- [ ] 9.1 Set up review request email/text template → [Instructions](./human-to-do/review-solicitation.md)
- [ ] 9.2 Send review requests to past 50 patients
- [ ] 9.3 Respond to ALL existing Google reviews (positive and negative)
- [ ] 9.4 Goal: 25+ Google reviews within 60 days

## Phase 10: Video Content (👤 Tory)

- [ ] 10.1 Film process explainer video (2-3 min) → [Instructions](./human-to-do/video-testimonials.md)
- [ ] 10.2 Film 3-5 patient video testimonials
- [ ] 10.3 Upload to YouTube with optimized titles/descriptions
- [ ] 10.4 🤖 Embed videos on state pages + homepage (after upload)

## Phase 11: Reddit & Community Marketing (👤 Tory)

- [ ] 11.1 Set up Reddit accounts and build karma → [Instructions](./human-to-do/reddit-strategy.md)
- [ ] 11.2 Begin commenting in target subreddits (weeks 1-4: value only, no links)
- [ ] 11.3 Start posting helpful answers with subtle brand mentions (weeks 5+)
- [ ] 11.4 Monitor new questions daily in target subreddits

## Phase 12: Backlink Building (👤 Tory)

- [ ] 12.1 Submit to medical/telehealth directories → [Instructions](./human-to-do/backlink-building.md)
- [ ] 12.2 Submit to local business directories (Yelp, BBB, Healthgrades)
- [ ] 12.3 Reach out to tint shops for referral partnerships
- [ ] 12.4 Guest post on automotive/tint blogs
- [ ] 12.5 HARO / Connectively responses for media mentions

## Phase 13: Social Media (👤 Tory)

- [ ] 13.1 Create content calendar → [Instructions](./human-to-do/social-media-content.md)
- [ ] 13.2 Post 3x/week on TikTok, Instagram Reels, YouTube Shorts
- [ ] 13.3 Share state-specific tips and law updates
- [ ] 13.4 Repurpose blog content into social posts

---

## Progress Tracking

| Phase | Owner | Status | Target Date |
|-------|-------|--------|-------------|
| 1. Bug Fixes | 🤖 | ✅ Complete | Mar 28 |
| 2. Navigation | 🤖 | ✅ Complete | Mar 28 |
| 3. Analytics | 🤝 | 🟡 Cascade done, verify needed | Mar 29 |
| 4. Law Pages | 🤖 | ✅ Complete | Mar 28 |
| 5. Blog/Content | 🤖 | ✅ Complete | Mar 28 |
| 6. Deploy | 🤝 | 🟡 Deployed, GSC tasks pending | Mar 29 |
| 7. GBP Overhaul | 👤 | ⬜ Not started | Apr 5 |
| 8. Domain Strategy | 👤 | ⬜ Not started | Apr 12 |
| 9. Reviews | 👤 | ⬜ Not started | Apr 19 |
| 10. Video | 👤 | ⬜ Not started | May 3 |
| 11. Reddit | 👤 | ⬜ Not started | Ongoing |
| 12. Backlinks | 👤 | ⬜ Not started | Ongoing |
| 13. Social | 👤 | ⬜ Not started | Ongoing |
